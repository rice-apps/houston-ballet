"use client"
import React, {useState} from 'react';
import VendorsPage from './Pages/VendorsPage';
import "./globals.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredVendors, setFilteredVendors] = useState([]);
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Welcome to Nutcracker Market Vendors</h1>
        <p className="text-gray-600">Explore a world of unique products and gifts from our wonderful vendors.</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search Vendors"
            className="border border-gray-300 px-2 py-1 rounded-l-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded-r-md hover:bg-blue-600"
          >
            Search
          </button>
        </div>
       </div>
        
      <VendorsPage></VendorsPage>
    </main>
  );
}
