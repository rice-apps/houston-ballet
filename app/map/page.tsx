import React from 'react';
import MapTitle from '../Components/MapTitle';
import Map from '../Components/Map';
import { getCategories } from '@/lib/utils/utils';
import { Footer } from '../Components/Footer';
import { Suspense } from 'react'

export const metadata = {
  title: "Nutcracker Market Map",
  description: "Find your way around the Nutcracker Market.",
}

export default async function Home() {
  const subtitle = (await getCategories()).getSubtitle("map");
  return (
    <div>
      {/* exporting components of the Vendor Info Page in sequential order */}
      {/* <VendorHeader /> 
      <VendorDescription height = {96} />
      <VendorPictures height = {96} />
      <Contact /> */}
      {/* exporting components of the Map Page in sequential order */}
      <MapTitle subtitle={subtitle}/>
      <Suspense>
        <Map />
      </Suspense>
      <Footer/>
    </div>
  );
};

