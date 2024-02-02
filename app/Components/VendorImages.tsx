import React from 'react'
import { Carousel } from 'flowbite-react';

export default function VendorImages() {
    return (
        <div>
            <Carousel className="h-60 w-60">
                <div>
                    <img src="/akfurgallery1.jpg" alt="..." />
                </div>
                <div>
                    <img src="/akfurgallery2.jpeg" alt="..." />
                </div>
                <div>
                    <img src="/akfurgallery3.png" alt="..." />
                </div>
                <div>
                    <img src="/akfurgallery4.png" alt="..." />
                </div>
            </Carousel>
       </div>
    );
}