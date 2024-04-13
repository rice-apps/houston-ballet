import React from "react";
import InterestsButton from "../Components/InterestsButton"
import { getCategories } from "@/lib/utils/utils";


export default async function WelcomePage() {
    // Get all categories
    const allCategories = (await getCategories()).getCategories().map((category) => ({"name": category.name, "icon": category.icon, "id": category.id}));

    return (
            <div className="flex flex-row h-screen w-screen">
                <div className='h-screen w-1/2 bg-welcomeImage bg-cover bg-no-repeat bg-center flex flex-col left-0'>
                    <h1 className='font-sans bg-none text-center text-4xl mt-72 font-bold tracking-[.15em] text-white md:text-7xl'>WELCOME!</h1>
                    <h2 className='pt-3 text-center text-lg md:text-xl font-medium tracking-[.15em] text-white'>FIRST TIME AT THE MARKET? </h2>
                </div>
                <div className="h-screen w-1/2 flex flex-col">
                    <h1 className="font-sans font-bold ml-12 mt-28 text-4xl tracking-[.15em] text-black md:text-6xl">CHOOSE YOUR <br /> INTERESTS...</h1>
                    <h2 className="font-sans font-medium mt-8 ml-12 text-2xl tracking-wide text-black">Please select your interests to personalize your <br /> experience and 
                    discover the magic of ballet that <br /> resonates with you!</h2>
                    <InterestsButton allCategories={allCategories}/>
                </div>
            </div>
    );
}

