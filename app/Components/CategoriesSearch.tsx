"use client";

import { InputAdornment, TextField } from "@mui/material";
import Fuse from "fuse.js";
import { useMemo, useState } from "react";
import CategoryCard, { CategoryCardProps } from "./CategoryCard";

export default function CategoriesSearch({
    originalCategories,
}: {
    originalCategories: CategoryCardProps[];
}) {
    const [query, setSearch] = useState("");
    const [categories, setCategories] = useState(originalCategories);
    useMemo(() => {
        if (query.trim() === "") {
            setCategories(originalCategories);
            return;
        }

        const options = {
            keys: ["vendorName"], // Add other keys if you want to search in other fields
            includeScore: true,
            threshold: 0.3, // Adjust this as needed
        };
        const fuse = new Fuse(originalCategories, options);
        const result = fuse.search(query);
        let finalResult = result.map((category) => category.item);
        if (finalResult.length === 0) {
            finalResult = originalCategories;
        }
        setCategories(finalResult);
    }, [query, originalCategories]);

    return (
        <>
            <div className="justify-left items-center gap-7 p-6">
                <TextField
                    type="text"
                    placeholder="Search by..."
                    className="w-1/2 focus:outline-none"
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
            </div>
            <div className="p-5">
                <div className="grid gap-7 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {categories.map((card: CategoryCardProps) => {
                        return <CategoryCard {...card} key={card.vendorName} />;
                    })}
                </div>
            </div>
        </>
    );
}
