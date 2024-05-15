import { getCategories } from "@/lib/utils/utils";
import VendorsSearch from "../Components/VendorsSearch";
import "../globals.css";
import { Footer } from "../Components/Footer";
import Image from "next/image";
export const metadata = {
    title: "Merchants",
    description: "Scroll through the merchants at the Nutcracker Market.",
}

export default async function VendorPage() {
    const vendors = (await getCategories()).getVendors();
    const categories = (await getCategories()).getCategories();
    const subtitle = (await getCategories()).getSubtitle("vendors");
    
    return <>
<div className="relative h-screen w-full overflow-hidden">
    <Image
        // Adjust the path to your image
        src="/vendorBackground.png"
        priority
        alt="Vendor background"
        className="z-0"
        fill
        sizes="100vw"
        style={{
            objectFit: "cover"
        }} />
    <div className="absolute top-0 left-0 right-0 bottom-0 z-20 flex flex-col justify-center p-5">
        <h1 className="font-sans text-center text-4xl font-bold tracking-[.15em] text-white md:text-7xl" role="main">
            VENDORS
        </h1>
        <h3 className="pt-3 text-center text-lg md:text-xl font-medium tracking-[.15em] text-white">
            {subtitle ?? ""}
        </h3>
    </div>
</div>

<VendorsSearch originalVendors={vendors} categories={categories} aria-label="Vendor Search"/>
<Footer/>
</>;
}
