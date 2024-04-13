"use client";

import VendorCard from "./VendorCard";
import { Vendor } from "@/lib/utils/repository";

interface VendorsPageProps {
    photo_path: string;
    name: string;
    description: string;
    website: string;
    categories: string[];
    id: number;
}

export function VendorCardWrapper({
    photo_path,
    name,
    description,
    website,
    categories,
    id,
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
                id={id}
            />
        </>
    );
}

export function VendorCardDisplay({ vendors }: { vendors: Vendor[] }) {
    const elements = [];
    for (const vendor of vendors) {
        elements.push(
            <section className="h-full w-full" key={vendor.name} aria-label={`Vendor: ${vendor.name}`} tabIndex={0}>
                <VendorCardWrapper
                    photo_path={vendor.image}
                    name={vendor.name}
                    description={vendor.shortDesc}
                    website={""}
                    categories={vendor.categories ?? []}
                    id={vendor.id}
                />
            </section>,
        );
    }
    return (
        // flex wrap instead of grid
        <div className="grid grid-cols-1 flex-col gap-16 justify-between md:grid-cols-2 lg:grid-cols-3" role="list">
            {elements}
        </div>
    );
}
