"use client";
import { useState } from "react";
import { VendorCardDisplay } from "../Components/VendorCardDisplay";
import "../globals.css";

import {
    Typography,
} from "@material-tailwind/react";

export default function VendorPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredVendors, setFilteredVendors] = useState([]);
    return (
        <>
            <div className="bg-vendorBackground  h-128 flex flex-col content-center justify-center p-5">
                <h1 className="p-5" style={{ 
                    fontSize: '96px', 
                    fontWeight: 700, 
                    lineHeight: '114px', 
                    letterSpacing: '0.11em',
                    color: 'white', 
                    textAlign: 'center' }}>
                    VENDORS
                </h1>
                <h3 className="pt-3 text-xl font-medium" style={{ 
                    fontSize: '25px', 
                    fontWeight: 700, 
                    lineHeight: '30px', 
                    letterSpacing: '0.17em', 
                    textAlign: 'center',
                    color: 'white'}} >
                    Browse through our vendors with our diverse list of categories.
                </h3>
            </div>
            <div className="flex items-left justify-left p-6">
            <div className="relative flex items-center w-full max-w-xl">
                <input
                type="text"
                placeholder="Search by..."
                className="pl-10 pr-20 rounded-lg border-2 border-gray-300 bg-white h-10 w-full px-5 text-sm focus:outline-none"
                />
            <button
                className="absolute right-0 top-0 mt-1 mr-2 flex items-center justify-center"
                style={{
                    fontFamily: 'sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    lineHeight: 'normal',
                    letterSpacing: 'normal',
                    textAlign: 'left',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '8px',
                    cursor: 'pointer',
                    width: '32px', 
                    height: '32px',
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
            </button>
            </div>
        </div>

            <VendorCardDisplay />
        </>
    );
}
