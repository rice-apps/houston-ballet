"use client";
import { useState } from "react";
import { VendorCardDisplay } from "../Components/VendorCardDisplay";
import "../globals.css";

export default function VendorPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredVendors, setFilteredVendors] = useState([]);
    return (
        <main className="flex min-h-screen flex-col items-center bg-gray-100 p-24">
            <div className="text-center">
                <h1 className="mb-4 text-3xl font-bold text-blue-800">
                    Welcome to Nutcracker Market Vendors
                </h1>
                <p className="text-gray-600">
                    Explore a world of unique products and gifts from our
                    wonderful vendors.
                </p>
            </div>

            <div className="flex flex-col items-center">
                <div className="mb-4 flex items-center">
                    <input
                        type="text"
                        placeholder="Search Vendors"
                        className="rounded-l-md border border-gray-300 px-2 py-1"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="rounded-r-md bg-blue-500 px-4 py-1 text-white hover:bg-blue-600">
                        Search
                    </button>
                </div>
            </div>

            <VendorCardDisplay />
        </main>
    );
}
