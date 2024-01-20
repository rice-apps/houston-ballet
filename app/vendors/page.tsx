import { getCategories } from "@/lib/utils/utils";
import VendorsSearch from "../Components/VendorsSearch";
import "../globals.css";

export default async function VendorPage() {
    const vendors = (await getCategories()).getVendors();
    const categories = (await getCategories()).getCategories();
    return (
        <>
            <div className="flex h-128 flex-col content-center justify-center bg-vendorBackground p-5">
                <h1 className="text-center font-sans text-5xl font-bold tracking-widest text-white">
                    VENDORS
                </h1>
                <h3 className="pt-3 text-center text-xl font-bold text-white">
                    BROWSE THROUGH OUR VENDORS WITH OUR DIVERSE LIST OF
                    CATEGORIES.
                </h3>
            </div>
            <VendorsSearch originalVendors={vendors} categories={categories}/>
        </>
    );
}
