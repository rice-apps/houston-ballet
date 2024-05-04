import { getCategories } from "@/lib/utils/utils";
import VendorsSearch from "../Components/VendorsSearch";
import "../globals.css";

export default async function VendorPage() {
    const vendors = (await getCategories()).getVendors();
    const categories = (await getCategories()).getCategories();
    return (
        <>
            <div className="absolute z-0 h-screen w-full bg-vendorBackground p-5 bg-no-repeat bg-cover" role="banner"></div>
            <div className="relative z-20 flex h-screen flex-col justify-center p-5">
                <h1 className="font-sans top-20 bg-none text-center text-4xl font-bold tracking-[.15em] text-white md:text-7xl" role="main">
                    VENDORS
                </h1>
                <h3 className="pt-3 text-center text-lg md:text-xl font-medium tracking-[.15em] text-white">
                    BROWSE THROUGH OUR VENDORS WITH OUR DIVERSE LIST OF
                    CATEGORIES.
                </h3>
            </div>
            <div></div>

            <VendorsSearch originalVendors={vendors} categories={categories} aria-label="Vendor Search"/>
        </>
    );
}
