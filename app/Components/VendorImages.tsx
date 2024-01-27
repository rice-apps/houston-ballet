import React from 'react'
import { Carousel, Button } from 'flowbite-react';

export default function VendorImages() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-100 bg-black">
            <Carousel className="h-50 w-54">
                <div>
                    <img src="/alaska_fur.png" alt="..." />
                </div>
                <div>
                    <img src="/art_by_amy.png" alt="..." />
                </div>
            </Carousel>
       </div>
    );
}