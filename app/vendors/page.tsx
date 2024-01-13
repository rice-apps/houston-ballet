import { getCategories } from "@/lib/utils/utils";
import { VendorCardDisplay } from "../Components/VendorCardDisplay";
import "../globals.css";
import VendorsSearch from "../Components/VendorsSearch";

export default async function VendorPage() {
    const vendors = (await getCategories()).getVendors();

    return (
        <>
            <div className="flex  h-128 flex-col content-center justify-center bg-vendorBackground p-5">
                <h1 className="text-center font-sans text-5xl font-bold tracking-widest text-white">
                    VENDORS
                </h1>
                <h3 className="pt-3 text-center text-xl font-bold text-white">
                    BROWSE THROUGH OUR VENDORS WITH OUR DIVERSE LIST OF
                    CATEGORIES.
                </h3>
            </div>
            <VendorsSearch originalVendors={vendors}/>
        </>
    );
}
