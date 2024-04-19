import React from "react";
import InterestsButton from "../Components/InterestsButton"
import { getCategories } from "@/lib/utils/utils";


export default async function WelcomePage() {
    // Get all categories
    const allCategories = (await getCategories()).getCategories().map((category) => ({"name": category.name, "icon": category.icon, "id": category.id}));

    return (
            <div className="flex flex-col sm:flex-row h-screen w-screen">
            <div className='h-1/2 w-screen py-10 sm:h-screen sm:w-1/2 bg-welcomeImage bg-cover flex flex-col items-center justify-center'>
                <h1 className='font-sans text-center text-3xl md:text-5xl lg:text-6xl font-bold tracking-[.15em] text-white'>WELCOME!</h1>
                <h2 className='pt-3 text-center text-lg md:text-xl font-medium tracking-[.15em] text-white'>FIRST TIME AT THE MARKET? </h2>
            </div>
            <div className="h-auto w-screen sm:h-screen sm:w-1/2 flex flex-col items-center justify-center">
                <h1 className="font-sans font-bold mt-4 text-2xl md:text-3xl lg:text-5xl tracking-[.15em] text-black text-center max-w-[10em]">CHOOSE YOUR INTERESTS...</h1>
                <h2 className="font-sans font-medium mt-3 px-1 text-base md:text-lg lg:text-xl tracking-wide text-black text-center max-w-[20em]">Please select your interests to personalize your experience and 
                discover the magic of ballet that resonates with you!</h2>
                <InterestsButton allCategories={allCategories}/>
            </div>
        </div>
    );
}
