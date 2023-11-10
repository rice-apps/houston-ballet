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

export function VendorCardDisplay() {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="h-full w-full">
                <VendorCardWrapper
                    photo_path="/boutique.jpg"
                    name="A Unique Boutique by Jeanette - TX"
                    description="Ladies' Fabulous Fashions & Unique Gifts X-Small thru Voluptuous"
                    website="https://accessorizeinstyle.com"
                    categories={["Fashion", "Gifts", "Accessories"]}
                />
            </div>
            <div className="h-full w-full">
                <VendorCardWrapper
                    photo_path="/alaska_fur.png"
                    name="Alaska Fur Gallery - AK"
                    description="Luxury Outerwear - Fur & Leather"
                    website="https://www.akfurgallery.com/"
                    categories={["Fashion", "Accessories", "Animal"]}
                />
            </div>
            <div className="h-full w-full">
                <VendorCardWrapper
                    photo_path="/bear_creek.png"
                    name="Bear Creek Smokehouse - TX"
                    description="Hickory smoked meats, soup mixes, gourmet delicacies & fudge"
                    website="https://bearcreeksmokehouse.com/"
                    categories={["Food", "Catering", "Shop"]}
                />
            </div>
        </div>
    );
}
