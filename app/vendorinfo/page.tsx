import React from 'react';
import VendorHeader from '../Components/VendorHeader';
import VendorDescription from '../Components/VendorDescription';
import Contact from '../Components/Contact';

export default function Home() {
  return (
    <div className='bg-white flex flex-col'>
      <VendorHeader vendorName='ADELINE & CO.' tagOne='Accessories' tagTwo='Clothing' tagThree='Children'/>
      <div className=' flex flex-row ml-10 mt-10'>
        <VendorDescription lineOne="Hello! We are so glad you've joined us at Adeline & Co. Relax while shopping for something absolutely precious for the little girl in your life!" lineTwo='We specialize in little girl clothing and accessiories, newborn through 12 years. Happy shopping!'/>
        <img className='ml-20' src='assets/smilingGirl.png' />
        <div className='flex flex-col'>
          <img src='assets/blueBow.png' />
          <img src='assets/greenDress.png' />
        </div>
      </div>
      <Contact contactText='You can reach us Monday-Friday at shop@adelineandco.com. Expect a reply within 24-hours.' />
    </div>   
  );
};

