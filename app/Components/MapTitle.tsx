import React from "react";
import Image from "next/image";
import MapCover from "../../public/assets/MapCover.png";

export default function MapTitle({ subtitle }: { subtitle: string }) {
    return (
        <div className="relative flex h-screen flex-col content-center justify-center overflow-hidden p-5">
            <Image
                priority
                // Update this path to where your image is stored
                src={MapCover}
                alt="Map background"
                className="z-0"
                fill
                sizes="100vh"
                style={{
                    objectFit: "cover",
                }}
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col content-center justify-center">
                <h1
                    className="font-sans text-center text-4xl font-bold tracking-[.15em] text-white md:text-7xl"
                    role="heading"
                >
                    MAP
                </h1>
                <h2 className="pt-3 text-center text-lg font-medium tracking-[.15em] text-white md:text-xl">
                    {subtitle ?? ""}
                </h2>
            </div>
        </div>
    );
}
