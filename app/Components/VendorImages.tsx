import React from 'react'
import { Carousel, FlowbiteCarouselTheme } from 'flowbite-react';

const customTheme: FlowbiteCarouselTheme = {
  indicators: {
    active: {
      off: "bg-gray-800/50 hover:bg-gray-800",
      on: "bg-gray-800 dark:bg-gray-800",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/40 group-hover:bg-gray-800/80 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-grat-800 dark:text-gray-800 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x",
  },
};


export default function VendorImages(props: { images: string[] }) {
    if (props.images.length == 0) {
        return (<div className="h-72 w-72">
            <img src="/placeholder.jpg"></img>
        </div>)
    } else {
        return (
            <Carousel className="h-72 w-72" slideInterval={5000} theme={customTheme}>
              {props.images.map((image, index) => (
                <div key={index} className='relative overflow-hidden rounded-xl h-72'> 
                  <img className= "object-fill w-72 h-72" src={image} alt={`Gallery image ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          );
    }
  }
  
  