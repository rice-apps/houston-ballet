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
            <div className="flex min-h-screen flex-col justify-between bg-white">
                <VendorHeader
                    vendorName={vendor?.name ?? ""}
                    tags={vendor?.categories ?? []}
                />
                <div className=" ml-10 mt-10 flex flex-row">
                    <VendorDescription
                        description={vendor?.description ?? ""}
                    />
                    <VendorImages images={vendor?.additionalImages ?? []} />
                </div>
                <Contact contactText="You can reach us Monday-Friday at shop@adelineandco.com. Expect a reply within 24-hours." />
            </div>
        </Transition>
    );
}
