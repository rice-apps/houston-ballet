import React from "react"

export default function Map(){
  return (
    // <div className='bg-white flex flex-col content-center justify-center p-10'>
    <div className="justify-left flex flex-wrap items-center gap-7 p-6">
      <iframe 
        title="Mappedin Map" 
        name="Mappedin Map" 
        scrolling="no" 
        width="100%" 
        height="650" 
        src="https://maker.mappedin.com/map/65347b743538e4288124470d?embedded=true%22%3E&map=Ground%20Floor"
        ></iframe>
    </div>
  );
};
