"use client";

import { Category, Vendor } from "@/lib/utils/repository";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import InterestsIcon from "@mui/icons-material/Interests";
import InterestsOutlinedIcon from "@mui/icons-material/InterestsOutlined";
import { Button, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Fuse from "fuse.js";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { withCookies } from "react-cookie";
import { Cookie } from "universal-cookie";
import { VendorCardDisplay } from "./VendorCardDisplay";
import {redirect} from "next/navigation";

function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0);

    function handleScroll() {
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const windowScroll = document.documentElement.scrollTop;

        const scrolled = (windowScroll / height) * 100;

        setScrollPosition(scrolled);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return scrollPosition;
}

function VendorsSearch({
    cookies,
    allCookies,
    originalVendors,
    categories,
}: {
    cookies: Cookie;
    allCookies: {
        [name: string]: Cookie;
    };
    originalVendors: Vendor[];
    categories: Category[];
}) {
    const [query, setSearch] = useState("");
    const [showFavorites, setShowFavorites] = useState(false);
    const [showInterests, setShowInterests] = useState(false);
    const [vendors, setVendors] = useState(originalVendors);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [vendorsList, setVendorsList] = useState<Vendor[]>([]);
    const [loadedIdx, setLoadedIdx] = useState(0);
    const scrollPosition = useScrollPosition();
    const numToLoad = 3;
    const handleChange = (event: SelectChangeEvent) => {
        setSelectedCategory(event.target.value as string);
    };

    const [interests, setInterests] = useState([]);
    useEffect(() => {
        const interestsVal = localStorage.getItem('interests');
        if (interestsVal === null || interestsVal == "") {
            redirect('/welcome');
        }
        const interestsTemp = JSON.parse(localStorage.getItem('interests') ?? "");
        setInterests(interestsTemp.map((interest: { name: string; }) => (interest.name)));
        console.log(interestsTemp);
    }, [])

    useEffect(() => {
        let tempArr: Vendor[] = []
        for (let i = 0; i < numToLoad; i++) {
            // setVendorsList([...vendorsList, vendors[i]])
            tempArr.push(vendors[i])
        }
        setVendorsList(tempArr);
        setLoadedIdx(numToLoad);
        console.log(vendorsList);
    }, []);

    useEffect(() => {
        if (scrollPosition == 100) {
            addVendors();
        }
    }, [scrollPosition]);


    const addVendors = () => {
        let tempArr: Vendor[] = []
        for (let i = loadedIdx; i < numToLoad + loadedIdx; i++) {
            if (loadedIdx < vendors.length) {
                tempArr.push(vendors[i])
                // setVendorsList([...vendorsList, vendors[loadedIdx]]);
            }
        }
        setLoadedIdx(loadedIdx + numToLoad);
        setVendorsList([...vendorsList, ...tempArr]);
    }

    // Get all the vendor cards that are favorited
    const [favorited, setFavorited] = useState([]);
    useEffect(() => {
        // include vendors in list if their corresponding value is true in allCookies
        const favoritedIds = Object.keys(allCookies).filter(
            (key) => allCookies[key],
        );

        setFavorited(favoritedIds);
    }, [allCookies]);

    const searchParams = useSearchParams();

    const categoryParam = searchParams.get("category");
    useEffect(() => {
        if (
            categoryParam &&
            categories.map((category) => category.name).includes(categoryParam)
        ) {
            setSelectedCategory(categoryParam);
        }
    }, [categoryParam, categories]);

    useMemo(() => {
        if (query.trim() === "" && selectedCategory.trim() === "") {
            setVendors(originalVendors);
            return;
        }

        const options = {
            keys: ["name", "description"], // Add other keys if you want to search in other fields
            includeScore: true,
            threshold: 0.3, // Adjust this as needed
        };
        const fuse = new Fuse(originalVendors, options);
        const result = fuse.search(query);
        let finalResult = result.map((vendor) => vendor.item);
        if (finalResult.length === 0) {
            finalResult = originalVendors;
        }
        setVendors(
            finalResult.filter(
                (vendor) =>
                    !selectedCategory.trim() ||
                    vendor.categories?.includes(selectedCategory.trim()),
            ),
        );
    }, [query, originalVendors, selectedCategory]);

    return (
        <>
            <div className="justify-left flex flex-wrap items-center gap-7 p-6">
                {/* <div className="flex gap-7 items-center"> */}
                <TextField
                    type="text"
                    placeholder="Search by..."
                    className="focus:outline-none w-full md:w-1/3"
                    onChange={(e) => setSearch(e.target.value)}
                    inputProps={{
                        style: {
                            padding: '16.5px 14px 16.5px 0px',
                            // HACK: remove double focus bars by setting tailwind's ring-offset-width to 0 explicitly
                            "--tw-ring-offset-width": '0'
                        }
                    }}
                    InputProps={{
                        "aria-label": 'Vendors search bar', // aria for search bar
                        startAdornment: (
                            <InputAdornment position="start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15.8 14.8L20 19 15.8 14.8ZM10 15C13.866 15 17 11.866 17 8C17 4.134 13.866 1 10 1C6.134 1 3 4.134 3 8C3 11.866 6.134 15 10 15Z"
                                    />
                                </svg>
                            </InputAdornment>
                        ),
                    }}
                />
                <FormControl className="w-2/5 md:w-1/5">
                    <InputLabel id="demo-simple-select-label" aria-label="Category drop-down menu">
                        Category
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedCategory}
                        label="Category"
                        onChange={handleChange}
                    >
                        <MenuItem value="">Unselect</MenuItem>
                        {categories.map((category) => (
                            <MenuItem
                                value={category.name}
                                id={category.id.toString()}
                                key={category.id}
                            >
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button
                    variant="outlined"
                    startIcon={
                        showFavorites ? (
                            <StarOutlinedIcon className="animate-pulse" />
                        ) : (
                            <StarBorderOutlinedIcon />
                        )
                    }
                    onClick={() => {
                        if (!showFavorites) {
                            setShowInterests(false);
                        }
                        setShowFavorites(!showFavorites);
                        
                    }}
                    className="transform md:ml-auto border-gray-700 text-gray-700 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:border-transparent hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 active:bg-yellow-600"
                    style={{ padding: "8px 16px", borderWidth: "2px" }}
                    aria-label={showFavorites ? "Hide Favorites" : "Show Favorites"} // added aria-label here!
                >
                    Favorites
                </Button>
                <Button
                    variant="outlined"
                    startIcon={
                        showInterests ? (
                            <InterestsIcon className="animate-pulse" />
                        ) : (
                            <InterestsOutlinedIcon />
                        )
                    }
                    onClick={() => {
                        if (!showInterests) {
                            setShowFavorites(false);
                        }
                        setShowInterests(!showInterests)
                    }}
                    className="transform md:ml-auto border-gray-700 text-gray-700 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:border-transparent hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 active:bg-yellow-600"
                    style={{ padding: "8px 16px", borderWidth: "2px" }}
                >
                    Interests
                </Button>
            </div>
            <div className="mx-9 my-2 transform transition duration-300 ease-in-out ">
                <VendorCardDisplay
                    vendors={vendors.filter((vendor) =>
                        showFavorites ? favorited.includes(vendor?.name) :
                        (showInterests ? vendor?.categories?.some((category) => (interests.includes(category))) : true)
                    
                    )}
                    showInterests={showInterests}
                    showFavorites={showFavorites}
                />
            </div>

        </>
    );
}

export default withCookies(VendorsSearch);
