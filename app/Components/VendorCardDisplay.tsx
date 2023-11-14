import { getCategories } from "@/lib/utils/utils";
import VendorCard from "./VendorCard";

interface VendorsPageProps {
    photo_path: string;
    name: string;
    description: string;
    website: string;
    categories: string[];
}

export function VendorCardWrapper({
    photo_path,
    name,
    description,
    website,
    categories,
}: VendorsPageProps) {
    return (
        <div>
            <VendorCard
                vendorPhoto={photo_path}
                vendorName={name}
                vendorDescription={description}
                website={website}
                categories={categories}
            />
        </div>
    );
}

export async function VendorCardDisplay() {
    const vendors = (await getCategories()).getVendors();
    const elements = [];
    for (const vendor of vendors) {
        elements.push(
            <>
                <div className="h-full w-full">
                    <VendorCardWrapper
                        photo_path={vendor.image}
                        name={vendor.name}
                        description={vendor.description}
                        website={"TODO: add website field"}
                        categories={vendor.categories ?? []}
                    />
                </div>
            </>
        )
    }
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {elements}
        </div>
    );
}
