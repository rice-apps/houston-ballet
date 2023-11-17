"use client";

import VendorCard from "./VendorCard";
import { Vendor } from "@/lib/utils/repository";
import FavoriteStar from "./FavoriteStar";

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
        <>
            <VendorCard
                key={name}
                vendorPhoto={photo_path}
                vendorName={name}
                vendorDescription={description}
                website={website}
                categories={categories}
            />
        </>
    );
}

export function VendorCardDisplay({vendors}:{vendors: Vendor[]}) {
    const elements = [];
    for (const vendor of vendors) {
        elements.push(
            <>
                <div className="h-full w-full">
                    <VendorCardWrapper
                        photo_path={vendor.image}
                        name={vendor.name}
                        description={vendor.description}
                        website={""}
                        categories={vendor.categories ?? []}
                    />
                    <FavoriteStar id={vendor.name} />
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
