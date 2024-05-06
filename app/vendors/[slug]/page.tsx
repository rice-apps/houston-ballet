import { getCategories } from "@/lib/utils/utils";
import Contact from "../../Components/Contact";
import Transition from "../../Components/Transition";
import VendorDescription from "../../Components/VendorDescription";
import VendorHeader from "../../Components/VendorHeader";
import VendorImages from "../../Components/VendorImages";

// generate the page at build time
// with generateStaticParams by looking at getCategories
// and getVendors
export async function generateStaticParams() {
    const repo = await getCategories();
    return repo.getVendors().map((vendor) => {
        return {
            slug: vendor.id.toString(),
        };
    });
}

export default async function VendorInfoPage({
    params: { slug },
}: {
    params: { slug: string };
}) {
    const repo = await getCategories();
    const vendor = repo
        .getVendors()
        .find((vendor) => vendor.id.toString() === slug);

    return (
        <Transition>
            <div className="bg-white flex flex-col min-h-screen">
                <VendorHeader
                    vendorName={vendor?.name ?? ""}
                    vendorImage={vendor?.image ?? ""}
                    tags={vendor?.categories ?? []}
                />
                <div className="flex flex-col md:flex-row px-10 gap-y-16 mt-10 items-center md:items-between justify-around w-full h-full">
                    <VendorDescription
                        description={vendor?.description ?? ""}
                    />
                    <VendorImages images={vendor?.additionalImages ?? []} />
                </div>
            </div>
        </Transition>
    );
}
