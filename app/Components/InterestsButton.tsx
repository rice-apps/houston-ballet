"use client"
import React, { useState, useEffect } from 'react';
import { Category } from "@/lib/utils/repository";

export default function InterestsButton({
    allCategories,
}: {
    allCategories: Category[];
}) {

    const [interests, setInterests] = useState<Category[]>([]);

    useEffect(() => {
        // Load interests from local storage on component mount
        if (!localStorage.getItem("interests")) {
            localStorage.setItem("Interests", "")
        }
        const storedInterests = JSON.parse(localStorage.getItem('interests')) || [];
        setInterests(storedInterests);
    }, []);
    
    const toggleInterest = (category: Category) => {
        console.log("Toggled interest ", category.name)
        const index = interests.findIndex(interest => interest.id === category.id);
        if (index !== -1) {
            // If category is already in interests, remove it
            const updatedInterests = [...interests.slice(0, index), ...interests.slice(index + 1)];
            setInterests(updatedInterests);
        } else {
            // If category is not in interests, add it
            const updatedInterests = [...interests, category];
            setInterests(updatedInterests);
        }
    };

    useEffect(() => {
        // Update local storage when interests change
        localStorage.setItem('interests', JSON.stringify(interests));
    }, [interests]);


    return (
        <div className="flex flex-wrap gap-4 ml-12 mt-8 w-3/4">
            {allCategories.map((category, index) => (
                <button
                    className={`focus:shadow-outline h-10 rounded-lg border border-gray-600 px-5 text-gray-600 transition-colors duration-150 hover:bg-gray-600 hover:text-indigo-100 
                    ${interests.some(interest => interest.id === category.id) ? 'bg-gray-600 text-indigo-100' : 'hover:bg-white hover:text-gray-600'
                        }`}
                    key={index}
                    onClick={() => {
                        toggleInterest(category);
                    }}
                >
                    <img src={category.icon} alt={category.name} className="w-4 h-4 inline-block ml-2" />
                    {category.name}
                </button>
            ))}
        </div>
    );
}
