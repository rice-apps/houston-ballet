import React from 'react';
import Image from "next/image";
import MapCover from '../../public/assets/MapCover.png';

export default function MapTitle({subtitle}: {subtitle: string}){

    return (
        <div className="relative flex flex-col content-center justify-center p-5 h-screen overflow-hidden">
    <Image
        priority
        // Update this path to where your image is stored
        src={MapCover}
        alt='Map background'
        className='z-0'
        fill
        sizes="100vw"
        style={{
            objectFit: "cover"
        }} />
    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col content-center justify-center z-10">
        <h1 className='font-sans text-center text-4xl md:text-7xl font-bold tracking-[.15em] text-white'>MAP</h1>
        <h2 className='pt-3 text-center text-lg md:text-xl font-medium tracking-[.15em] text-white'>{subtitle ?? ""}</h2>
    </div>
</div>
    );
};
