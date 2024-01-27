import React from 'react'
import { Carousel } from 'flowbite-react';

export default function VendorImages() {
    return (
        <div>
            <Carousel className="h-60 w-60">
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