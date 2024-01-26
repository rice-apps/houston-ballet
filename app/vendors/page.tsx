import { getCategories } from "@/lib/utils/utils";
import VendorsSearch from "../Components/VendorsSearch";
import "../globals.css";

export default async function VendorPage() {
    const vendors = (await getCategories()).getVendors();
    const categories = (await getCategories()).getCategories();
    return (
        <>
            <div className="h-128 w-full bg-violet-950 absolute opacity-40 z-10">
            </div>
            <div className="h-128 w-full bg-vendorBackground p-5 absolute z-0">
            </div>
            <div className="h-128 flex flex-col justify-center p-5 z-20 relative">
                <h1 className="text-center font-sans text-5xl font-bold tracking-widest text-white bg-none top-20">
                    VENDORS
                </h1>
                <h3 className="pt-3 text-center text-xl font-bold text-white">
                    BROWSE THROUGH OUR VENDORS WITH OUR DIVERSE LIST OF
                    CATEGORIES.
                </h3>
            </div>
            <div></div>
            
            <VendorsSearch originalVendors={vendors} categories={categories}/>
        </>
    );
}
