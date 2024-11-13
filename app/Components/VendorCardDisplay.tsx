"use client";
import { useMemo } from "react";
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
interface VendorCardDisplayProps {
    vendors: Vendor[];
    showInterests: boolean;
    showFavorites: boolean;
}

const VendorCardDisplay: React.FC<VendorCardDisplayProps> = ({
    vendors,
    showInterests,
    showFavorites,
}) => {
    const elements = useMemo(() => {
        return vendors.map((vendor) => (
            <li key={vendor.id}>
                <VendorCardWrapper
                    photo_path={vendor.image}
                    name={vendor.name}
                    description={vendor.shortDesc}
                    website={""}
                    categories={vendor.categories ?? []}
                    id={vendor.id}
                />
            </li>
        ));
    }, [vendors]);

    if (elements.length === 0) {
        return (
            <div className="flex h-96 items-center justify-center">
                <div
                    className="Metric text-center text-xl font-medium"
                    key="no_res"
                >
                    No{" "}
                    {showInterests
                        ? "interests"
                        : showFavorites
                          ? "favorites"
                          : "vendors"}{" "}
                    found.
                </div>
            </div>
        );
    }

    return <ul>{elements}</ul>;
};

export default React.memo(VendorCardDisplay);
