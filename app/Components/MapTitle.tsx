import React from 'react';


export default function MapTitle({subtitle: string}: {subtitle: string}){

    return (
        <div className='bg-mapBackground bg-cover flex flex-col content-center justify-center p-44'>
            <h1 className='mt-10 text-center text-7xl tracking-widest font-extrabold text-white'>MAP</h1>
            <h1 className='pt-3 mt-10 text-center text-lg font-semibold text-white'>NAVIGATING THE MARKET? FIND MERCHANTS EASILY WITH OUR INTERACTIVE MAP. </h1>
        </div>
    );
};
