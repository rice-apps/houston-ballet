import React from 'react';
import VendorHeader from './Components/VendorHeader';
import VendorDescription from './Components/VendorDescription';

export default function Home() {
  return (
    <div>
      {/*Changing part of page color to be grey*/}

      <div className='w-screen h-14 bg-gray-300'></div>
      {/* Make rest of page have white background*/}
      <VendorHeader height={96} />
      <VendorDescription height={96} />
    </div>
    
  );
};

