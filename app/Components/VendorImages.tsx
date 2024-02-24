import React from 'react'
import { Carousel } from 'flowbite-react';

export default function VendorImages(props : {images : string[]}) {
    console.log(props.images);
    return (
        <div>
            <Carousel className="h-60 w-60">
                {props.images.map((image) =>
                    <div>
                        <img src = {image} alt = ".." />
                    </div>
                )}
            </Carousel>
       </div>
    );
}