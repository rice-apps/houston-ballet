import { getCategories } from "@/lib/utils/utils";
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
            <div className="flex min-h-screen flex-col bg-white">
                <VendorHeader
                    vendorName={vendor?.name ?? ""}
                    vendorImage={vendor?.image ?? ""}
                    tags={vendor?.categories ?? []}
                />
                <div className="items-center md:items-stretch mt-10 flex h-full w-full flex-col justify-around gap-x-16 gap-y-16 px-10 md:flex-row">
                    <VendorDescription
                        description={vendor?.description ?? ""}
                    />
                    <VendorImages images={vendor?.additionalImages ?? []} />
                </div>
            </div>
        </Transition>
    );
}
