import React from 'react';
import Map from '../Components/Map';

export default function Home() {
  return (
    <>
      <div className='absolute z-0 bg-mapBackground bg-cover w-full h-128 flex flex-col content-center justify-center p-5'>
      </div>
      <div className="relative z-20 flex h-128 flex-col justify-center p-5">
        <h1 className='font-sans top-20 bg-none text-center text-4xl font-bold tracking-[.15em] text-white md:text-7xl'>MAP</h1>
        <h3 className='pt-3 text-center text-lg md:text-xl font-medium tracking-[.15em] text-white'>NAVIGATING THE MARKET? FIND MERCHANTS EASILY WITH OUR INTERACTIVE MAP. </h3>
      </div>
      <div></div>

      <Map />
    </>
  );
};

