"use client";

import { Category, Vendor } from "@/lib/utils/repository";
import { useEffect, useMemo, useState } from "react";

function InterestsButton({ allCategories }: { allCategories: Category[] }) {
    const [interests, setInterests] = useState(false);

    return (
        <>
            <div>
                {allCategories.map((category, index) => (
                    <button
                        className="type = radio focus:shadow-outline h-10 rounded-lg border border-gray-600 px-5 text-gray-600 transition-colors duration-150 hover:bg-gray-600 hover:text-indigo-100 focus:bg-white"
                        key={index}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </>
    );
}

export default InterestsButton;
