import React from "react";
import { getCategories } from "@/lib/utils/utils";
import WelcomeCategoryCard, { WelcomeCategoryCardProps } from "../Components/WelcomeCategoryCard";
import card from "@material-tailwind/react/theme/components/card";
import InterestsButton from "../Components/InterestsButton"


export default async function WelcomePage() {
    // Get all categories
    const allCategories = (await getCategories()).getCategories()
    // const tempCategoryArray: Array<WelcomeCategoryCardProps> = [];
    // for (let category of categories.getCategories()) {
    //     tempCategoryArray.push({
    //         categoryName: category.name,
    //     });
    // }

    // const tempCategoryArray: Array<String> = ["Christmas/Holiday", "Apparel", "Gourmet Food"];

    return (
        <>
        <div className="flex flex-row h-screen">
            <div className='h-full w-1/2 bg-welcomeImage bg-cover flex flex-col left-0'>        
                <h1 className='font-sans top-40 bg-none text-center text-4xl font-bold tracking-[.15em] text-white md:text-7xl'>WELCOME!</h1>
                <h2 className='pt-3 text-center text-lg md:text-xl font-medium tracking-[.15em] text-white'>FIRST TIME AT THE MARKET? </h2>
            </div>
            <div className="h-full w-1/2 flex items-center justify-center text-white"></div>
        </div>

        {/* <div className="flex flex-row h-screen">
    <div className='h-full w-1/2 bg-welcomeImage bg-cover flex flex-col left-0'>        
        <h1 className='font-sans top-40 bg-none text-center text-4xl font-bold tracking-[.15em] text-white md:text-7xl'>WELCOME!</h1>
        <h2 className='pt-3 text-center text-lg md:text-xl font-medium tracking-[.15em] text-white'>FIRST TIME AT THE MARKET? </h2>
    </div>
    <div className="h-full w-1/2 bg-black flex items-center justify-center text-white">
        HIII
    </div>
</div> */}


            {/* <div className='absolute z-10 right-0'> */}
                {/* <InterestsButton allCategories={allCategories} /> */}
                {/* {tempCategoryArray.map((category, index) => (
                    <button
                        className="h-10 px-5 text-gray-600 type = radio transition-colors duration-150 border border-gray-600 rounded-lg focus:shadow-outline hover:bg-gray-600 focus:bg-white hover:text-indigo-100"
                        key={index}
                    >
                        {category.categoryName}
                    </button>
                ))} */}
            {/* </div> */}
        </>
    );
}

