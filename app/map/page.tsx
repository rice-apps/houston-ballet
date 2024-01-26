import React from 'react';
import MapTitle from '../Components/MapTitle';
import Map from '../Components/Map';

export default function Home() {
  return (
    <div>
      {/* exporting components of the Vendor Info Page in sequential order */}
      {/* <VendorHeader /> 
      <VendorDescription height = {96} />
      <VendorPictures height = {96} />
      <Contact /> */}
      {/* exporting components of the Map Page in sequential order */}
      <MapTitle />
      <Map />
    </div>
  );
};

