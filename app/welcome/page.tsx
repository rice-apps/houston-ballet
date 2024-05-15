import React from "react";
import InterestsButton from "../Components/InterestsButton"
import { getCategories } from "@/lib/utils/utils";
import Link from "next/link";
import { Footer } from "../Components/Footer";
import Image from "next/image"
import WelcomeBackground from "../../public/welcomeImage.png"

export const metadata = {
    title: "Nutcracker Market",
    description: "Welcome to the Nutcracker Market!",
}

export default async function WelcomePage() {
    // Get all categories
    const allCategories = (await getCategories()).getCategories().map((category) => ({"name": category.name, "icon": category.icon, "id": category.id}));

    return (
        <div className="flex flex-col sm:flex-row h-screen w-screen">
        <div className='relative h-1/2 sm:h-screen w-screen sm:w-1/2 py-64 flex flex-col items-center justify-center'>
            <Image
                priority
                // Adjust the path to your image
                src={WelcomeBackground}
                alt='Welcome background'
                className='z-0'
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover"
                }} />
            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-10'>
                <h1 className='font-sans text-center text-3xl md:text-5xl lg:text-6xl font-bold tracking-[.15em] text-white'>WELCOME!</h1>
                <h2 className='pt-3 text-center text-lg md:text-xl font-medium tracking-[.15em] text-white'>FIRST TIME AT THE MARKET? </h2>
            </div>
        </div>
        <div className="h-auto w-screen sm:h-screen sm:w-1/2 flex flex-col items-center justify-center">
            <h1 className="font-sans font-bold mt-4 text-2xl md:text-3xl lg:text-5xl tracking-[.15em] text-black text-center max-w-[10em]">CHOOSE YOUR INTERESTS...</h1>
            <h2 className="font-sans font-medium mt-3 px-1 text-base md:text-lg lg:text-xl tracking-wide text-black text-center max-w-[20em]">
                Please select your interests to personalize your experience and 
                discover the magic of ballet that resonates with you!
            </h2>
            <InterestsButton allCategories={allCategories}/>
            <div className="py-10">
                <Link href={`/vendors`}>
                    <div className="pl-5">
                        <button className="focus:shadow-outline inline-flex h-10 items-center rounded-lg bg-slate-700 px-5 text-white transition-colors duration-150 hover:bg-slate-800">
                            <span>Continue</span>
                        </button>
                    </div>
                </Link>
            </div>
            <Footer/>
        </div>
    </div>
    );
}
