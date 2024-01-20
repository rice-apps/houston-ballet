"use client";

import { Vendor } from "@/lib/utils/repository";
import { VendorCardDisplay } from "./VendorCardDisplay";
import { useMemo, useState } from "react";
import Fuse from "fuse.js";

export default function VendorsSearch({
    originalVendors,
}: {
    originalVendors: Vendor[];
}) {
    const [query, setSearch] = useState("")
    const [vendors, setVendors] = useState(originalVendors);
    
    useMemo(() => {
        if (query.trim() === "") {
            setVendors(originalVendors);
            return;
        }
        const options = {
            keys: ['name', 'description'], // Add other keys if you want to search in other fields
            includeScore: true,
            threshold: 0.3 // Adjust this as needed
        };
        const fuse = new Fuse(originalVendors, options);

        const result = fuse.search(query);
        setVendors(result.map(({ item }) => item));
    }, [query, originalVendors]);

    return (
        <>
            
            <div className="items-left justify-left flex p-6">
                <div className="max-w-lg md:max-w-xl relative flex w-full items-center border-gray-600 border-2 rounded-lg bg-gray-300">
                    <input
                        type="text"
                        placeholder="Search by..."
                        className="h-10 w-full pl-5 pr-12 text-sm focus:outline-none"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div
                        className="flex items-center justify-center"
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "0.875rem",
                            fontWeight: "500",
                            lineHeight: "normal",
                            letterSpacing: "normal",
                            textAlign: "left",
                            border: "none",
                            padding: "8px",
                            cursor: "pointer",
                            width: "32px",
                            height: "100%",
                            marginRight: "1px",
                        }}
                        aria-label="Search"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15.8 14.8L20 19 15.8 14.8ZM10 15C13.866 15 17 11.866 17 8C17 4.134 13.866 1 10 1C6.134 1 3 4.134 3 8C3 11.866 6.134 15 10 15Z"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <VendorCardDisplay vendors={vendors} />
        </>
    );
}
