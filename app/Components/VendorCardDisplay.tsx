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

export function VendorCardDisplay({
    vendors,
    showInterests,
    showFavorites,
}: {
    vendors: Vendor[];
    showInterests: boolean;
    showFavorites: boolean;
}) {
    const elements = [];
    for (const vendor of vendors) {
        elements.push(
            <li
                className="h-full w-full cursor-pointer"
                key={vendor.name}
                aria-label={`Merchant: ${vendor.name}`}
                tabIndex={0}
            >
                <VendorCardWrapper
                    photo_path={vendor.image}
                    name={vendor.name}
                    description={vendor.shortDesc}
                    website={""}
                    categories={vendor.categories ?? []}
                    id={vendor.id}
                />
            </li>,
        );
    }

    if (elements.length == 0) {
        return (
            <div className="flex h-96 items-center justify-center">
                <div
                    className="Metric text-center text-xl font-medium"
                    key={"no_res"}
                >
                    No{" "}
                    {showInterests
                        ? "interests"
                        : showFavorites
                          ? "favorites"
                          : "results"}{" "}
                    found.{" "}
                    {showInterests
                        ? "Try pressing on the interests button to clear interest filter."
                        : showFavorites
                          ? "Try pressing on the favorites button to clear favorite filter."
                          : ""}
                </div>
            </div>
        );
    }

    return (
        // flex wrap instead of grid
        <ul
            className="grid grid-cols-1 flex-col justify-between gap-16 md:grid-cols-2 lg:grid-cols-3"
            role="list"
        >
            {elements}
        </ul>
    );
}
