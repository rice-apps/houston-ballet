"use client";

import { Category, Vendor } from "@/lib/utils/repository";
import { Divider, TextField } from "@mui/material";
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
            <div className="items-left justify-left flex gap-7 p-6">
                <TextField
                    type="text"
                    placeholder="Search by..."
                    className="s:w-1/2 focus:outline-none md:w-1/3"
                    onChange={(e) => setSearch(e.target.value)}
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
                <FormControl className="s:w-1/3 md:w-1/5">
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
                        {categories.map((category) => {
                            return (
                                <MenuItem
                                    value={category.name}
                                    id={category.id.toString()}
                                    key={category.id}
                                >
                                    {category.name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </div>
            <div className=" mx-9 my-2">
                <h1 className="text-2xl">Favorited</h1>
                {/* display vendors if their id is in favoritedIds*/}
                <VendorCardDisplay
                    vendors={vendors.filter((vendor) =>
                        favorited.includes(vendor.name),
                    )}
                />
                <Divider className="my-4" />
                <VendorCardDisplay
                    vendors={vendors.filter(
                        (vendor) => !favorited.includes(vendor.name),
                    )}
                />
            </div>
        </>
    );
}

export default withCookies(VendorsSearch);
