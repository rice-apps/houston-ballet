"use client";

import { Category, Vendor } from "@/lib/utils/repository";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
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
    const [vendors, setVendors] = useState(originalVendors);
    const [selectedCategory, setSelectedCategory] = useState("");
    const handleChange = (event: SelectChangeEvent) => {
        setSelectedCategory(event.target.value as string);
    };

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
                    className="w-full focus:outline-none md:w-1/3"
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{
                        "& input:focus": {
                            ringWidth: 0,
                        },
                    }}
                    InputProps={{
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
                    <InputLabel id="demo-simple-select-label">
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
                    onClick={() => setShowFavorites(!showFavorites)}
                    className="transform border-gray-700 text-gray-700 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:border-transparent hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 active:bg-yellow-600 md:ml-auto"
                    style={{ padding: "8px 16px", borderWidth: "2px" }}
                >
                    Favorites
                </Button>
                {/* </div>                 */}
            </div>
            <div className="mx-9 my-2 transform transition duration-300 ease-in-out ">
                <VendorCardDisplay
                    vendors={vendors.filter((vendor) =>
                        showFavorites ? favorited.includes(vendor?.name) : true,
                    )}
                />
            </div>
        </>
    );
}

export default withCookies(VendorsSearch);
