"use client";
import React from "react";
import { useEffect, useState } from "react";
import WelcomeCategoryCard, { WelcomeCategoryCardProps } from "../Components/WelcomeCategoryCard";
import card from "@material-tailwind/react/theme/components/card";
import InterestsButton from "../Components/InterestsButton"
import local from "next/font/local";


export default function WelcomePage() {
    // Get all categories
    // const allCategories = getCategories().getCategories();
    // const tempCategoryArray: Array<WelcomeCategoryCardProps> = [];
    // for (let category of allCategories) {
    //     tempCategoryArray.push({
    //         categoryName: category.name,
    //     });
    // }

    // var selectedInterests = JSON.parse(localStorage.getItem('interests') ?? "")

    const handleInterestSelect = (category: WelcomeCategoryCardProps) => {
        // localStorage.setItem("interests", )
    }

    // // Initialize localStorage if necessary
    // if (!localStorage.getItem("interests")) {
    //     localStorage.setItem("interests", `[]`)
    // }

    // const [interests, setInterests] = useState([]);
    // useEffect(() => {
    //     const interestsTemp = JSON.parse(localStorage.getItem('interests') ?? "");
    //     setInterests(interestsTemp);
    //     console.log(interestsTemp);
    // }, [localStorage.getItem('interests')])


    return (
        <>
            <div className="flex flex-row h-screen">
                <div className='h-full w-1/2 bg-welcomeImage bg-cover flex flex-col left-0'>
                    <h1 className='font-sans bg-none text-center text-4xl mt-72 font-bold tracking-[.15em] text-white md:text-7xl'>WELCOME!</h1>
                    <h2 className='pt-3 text-center text-lg md:text-xl font-medium tracking-[.15em] text-white'>FIRST TIME AT THE MARKET? </h2>
                </div>
                <div className="h-full w-1/2 flex flex-col">
                    <h1 className="font-sans font-bold ml-12 mt-20 text-4xl tracking-[.15em] text-black">CHOOSE YOUR <br /> INTERESTS ...</h1>
                    <h2 className="font-sans font-medium ml-12 text-sm text-black">Please select your interests to personalize your experience and discover the magic of ballet that resonates with you!</h2>
                    <InterestsButton/>
                </div>
            </div>
        </>
    );
}

