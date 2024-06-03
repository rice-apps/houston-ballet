import React from "react";
import InterestsButton from "../Components/InterestsButton";
import { getCategories } from "@/lib/utils/utils";
import Link from "next/link";
import { Footer } from "../Components/Footer";
import Image from "next/image";
import WelcomeBackground from "../../public/welcomeImage.png";

export const metadata = {
    title: "Nutcracker Market",
    description: "Welcome to the Nutcracker Market!",
    metadataBase: new URL("https://houston-ballet-official.vercel.app"),
    openGraph: {
        title: "Nutcracker Market",
        description: "Welcome to the Nutcracker Market!",
        images: [
            {
                url: "/welcomeImage.png",
                alt: "Welcome Cover Image",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default async function WelcomePage() {
    // Get all categories
    const allCategories = (await getCategories())
        .getCategories()
        .map((category) => ({
            name: category.name,
            icon: category.icon,
            id: category.id,
        }));

    return (
        <div className="flex h-full min-h-screen w-screen flex-col sm:flex-row">
            <div className="relative flex h-auto min-h-screen w-screen flex-col items-center justify-center sm:w-1/2">
                <div className="absolute inset-0">
                    <Image
                        priority
                        // Adjust the path to your image
                        src={WelcomeBackground}
                        alt="Welcome background"
                        className="z-0"
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
                <div className="relative z-10 flex w-full flex-col items-center justify-center">
                    <h1 className="font-sans text-center text-3xl font-bold tracking-[.15em] text-white md:text-5xl lg:text-6xl">
                        WELCOME!
                    </h1>
                    <h2 className="pt-3 text-center text-lg font-medium tracking-[.15em] text-white md:text-xl">
                        FIRST TIME AT THE MARKET?{" "}
                    </h2>
                </div>
            </div>

            <div className="flex h-auto min-h-screen w-screen flex-col items-center justify-center sm:w-1/2">
                <h1 className="font-sans mt-4 max-w-[10em] text-center text-2xl font-bold tracking-[.15em] text-black md:text-3xl lg:text-5xl">
                    CHOOSE YOUR INTERESTS...
                </h1>
                <h2 className="font-sans mt-3 max-w-[20em] px-1 text-center text-base font-medium tracking-wide text-black md:text-lg lg:text-xl">
                    Please select your interests to personalize your experience
                    and discover the magic of ballet that resonates with you!
                </h2>
                <InterestsButton
                    allCategories={allCategories}
                ></InterestsButton>
                <div className="py-10">
                    <Link href={`/vendors`}>
                        <div className="pl-5">
                            <button className="focus:shadow-outline inline-flex h-10 items-center rounded-lg bg-slate-700 px-5 text-white transition-colors duration-150 hover:bg-slate-800">
                                <span>Continue</span>
                            </button>
                        </div>
                    </Link>
                </div>
                <Footer />
            </div>
        </div>
    );
}
