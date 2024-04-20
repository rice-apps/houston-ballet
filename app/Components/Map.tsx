'use client'
import React from "react"
import { useSearchParams } from 'next/navigation'

export default function Map(){
  const locationParams = useSearchParams()
 
  const location = locationParams?.get('location')
  return (
    <div className='bg-white flex flex-col content-center justify-center p-10'>
      <iframe 
        title="Mappedin Map" 
        name="Mappedin Map" 
        scrolling="no" 
        width="100%" 
        height="650" 
        src={`https://maker.mappedin.com/map/65347b743538e4288124470d?embedded=true%22%3E&map=Ground%20Floor&location=${location}`}
        ></iframe>
    </div>
  );
};
