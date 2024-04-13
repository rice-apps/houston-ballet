import React from 'react'
import { Carousel } from 'flowbite-react';

export default function VendorImages(props: { images: string[] }) {
    if (props.images.length == 0) {
        return (<div className="h-60 w-60">
            <img src="/placeholder.jpg"></img>
        </div>)
    } else {
        return (
            <div className="ml-3">
              <Carousel className="h-60 w-60">
                {props.images.map((image, index) => (
                  <div key={index} className='relative overflow-hidden rounded-xl h-60'> 
                    <img className= "object-fill w-60 h-60" src={image} alt={`Gallery image ${index + 1}`} />
                  </div>
                ))}
              </Carousel>
            </div>
          );
    }
  }
  
  