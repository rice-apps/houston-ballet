import { getCategories } from "@/lib/utils/utils";
import Transition from "../../Components/Transition";
import VendorDescription from "../../Components/VendorDescription";
import VendorHeader from "../../Components/VendorHeader";
import VendorImages from "../../Components/VendorImages";
import { Footer } from "@/app/Components/Footer";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata({ params }: Params) {
    const repo = await getCategories();
    const vendor = repo
        .getVendors()
        .find((vendor) => vendor.id.toString() === params.slug);

    return {
        title: vendor?.name ?? "",
        description: vendor?.shortDesc ?? "Nutcracker Market Merchant",
        openGraph: {
            title: vendor?.name ?? "",
            description: vendor?.shortDesc ?? "Nutcracker Market Merchant",
            images: [
                {
                    url: vendor?.image ?? "",
                    alt: vendor?.name ?? "",
                },
            ],
            locale: "en_US",
            type: "website",
        },
    };
}

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
                    mapId={vendor?.mapId}
                />
                <div className="mt-10 flex h-full w-full flex-col items-center justify-around gap-x-16 gap-y-16 px-10 md:flex-row md:items-stretch">
                    <VendorDescription description={vendor?.shortDesc ?? ""} />
                    <VendorImages images={vendor?.additionalImages ?? []} />
                </div>
            </div>
            <Footer />
        </Transition>
    );
}
