import React from "react";
import { getCategories } from "@/lib/utils/utils";
import WelcomeCategoryCard, { WelcomeCategoryCardProps} from "../Components/WelcomeCategoryCard";
import card from "@material-tailwind/react/theme/components/card";


export default async function WelcomePage() {
    // Get all categories
    // const categories = await getCategories();

    const tempCategoryArray: Array<String> = ["Christmas/Holiday", "Apparel", "Gourmet Food"];

    return (
        <>
            <div className='bg-welcomeImage bg-cover flex flex-col'>
            
                <h1 className=' text-center text-7xl tracking-widest font-extrabold text-white'>WELCOME</h1>
                <h2 className='pt-3 mt-5 text-center text-lg font-semibold text-white'>BROWSE THROUGH OUR VENDORS... AND CATEGORIES. </h2>
                <div className="flex flex-row shadow-md" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'absolute',
                    textAlign: 'left',
                    maxWidth: '100%',
                    zIndex: 3
                }}>
                </div>
            </div>

            <div>
                {tempCategoryArray.map((category) => (
                    <button
                        className="h-10 px-5 text-gray-600 transition-colors duration-150 border border-gray-600 rounded-lg focus:shadow-outline hover:bg-gray-600 hover:text-indigo-100"
                        key={category}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </>
    );
}

