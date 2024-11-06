import React from "react";
import MapTitle from "../Components/MapTitle";
import Map from "../Components/Map";
import { getCategories } from "@/lib/utils/utils";
import { Footer } from "../Components/Footer";
import { Suspense } from "react";

export const metadata = {
    title: "Nutcracker Market Map",
    description: "Find your way around the Nutcracker Market.",
    metadataBase: new URL("https://nutcracker-market.riceapps.org"),
    openGraph: {
        title: "Nutcracker Market Map",
        description: "Find your way around the Nutcracker Market.",
        images: [
            {
                url: "/assets/MapCover.png",
                alt: "Map Cover Image",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default async function Home() {
    const repo = await getCategories();
    const subtitle = repo.getSubtitle("map");
    const mapUrl = repo.getMapUrl();
    return (
        <div>
            {/* exporting components of the Vendor Info Page in sequential order */}
            {/* <VendorHeader /> 
      <VendorDescription height = {96} />
      <VendorPictures height = {96} />
      <Contact /> */}
            {/* exporting components of the Map Page in sequential order */}
            <Suspense>
                <Map url={mapUrl} />
            </Suspense>
            <Footer />
        </div>
    );
}
