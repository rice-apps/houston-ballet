import React from 'react'
import { Carousel } from 'flowbite-react';

export default function VendorImages(props : {images: string[]}) {
    return (
        <div>
            <Carousel className="h-60 w-60">
                {props?.images.map((image, index) => (
                    <img src={image} key={index}/>
                ))}
            </Carousel>
       </div>
    );
}