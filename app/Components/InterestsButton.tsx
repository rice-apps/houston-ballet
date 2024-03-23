import { getCategories } from "@/lib/utils/utils";
import { Category, Vendor } from "@/lib/utils/repository";

export default async function InterestsButton() {
    const allCategories = (await getCategories()).getCategories();
    return (
        <>
            <div className="flex flex-wrap gap-4 ml-12 mt-8 w-3/4">
                {allCategories.map((category, index) => (
                    <button
                        className="focus:shadow-outline h-10 rounded-lg border border-gray-600 px-5 text-gray-600 transition-colors duration-150 hover:bg-gray-600 hover:text-indigo-100  active:bg-blue-600  focus:bg-blue-600"
                        key={index}
                        // onClick={() => {
                        //     toggleInterest(category);
                        // }}
                    >
                        <input className ="hidden" type="radio"/>
                        {category.name}
                    </button>
                ))}
            </div>
        </>
    );
}

// import React, { useState, useEffect } from 'react';

// function InterestsComponent() {
//     const [allCategories, setAllCategories] = useState([
//         { name: 'Category 1', id: 1 },
//         { name: 'Category 2', id: 2 },
//         // Add more categories as needed
//     ]);

//     const [interests, setInterests] = useState([]);

//     useEffect(() => {
//         // Load interests from local storage on component mount
//         const storedInterests = JSON.parse(localStorage.getItem('interests')) || [];
//         setInterests(storedInterests);
//     }, []);

//     const toggleInterest = (category) => {
//         const index = interests.findIndex(interest => interest.id === category.id);
//         if (index !== -1) {
//             // If category is already in interests, remove it
//             const updatedInterests = [...interests.slice(0, index), ...interests.slice(index + 1)];
//             setInterests(updatedInterests);
//         } else {
//             // If category is not in interests, add it
//             const updatedInterests = [...interests, category];
//             setInterests(updatedInterests);
//         }
//     };

//     useEffect(() => {
//         // Update local storage when interests change
//         localStorage.setItem('interests', JSON.stringify(interests));
//     }, [interests]);

//     return (
//         <div className="flex flex-wrap gap-4 ml-12 mt-8 w-3/4">
//             {allCategories.map((category, index) => (
//                 <button
//                     className={`focus:shadow-outline h-10 rounded-lg border border-gray-600 px-5 text-gray-600 transition-colors duration-150 
//                     ${
//                         interests.some(interest => interest.id === category.id) ? 'bg-gray-600 text-indigo-100' : 'hover:bg-gray-600 hover:text-indigo-100'
//                     }`}
//                     key={index}
//                     onClick={() => {
//                         toggleInterest(category);
//                     }}
//                 >
//                     {category.name}
//                 </button>
//             ))}
//         </div>
//     );
// }

// export default InterestsComponent;
