import { getCategories } from "@/lib/utils/utils";
import VendorsSearch from "../Components/VendorsSearch";
import "../globals.css";
import { Footer } from "../Components/Footer";
import Image from "next/image";
import { Suspense } from "react";
import VendorBackground from "../../public/vendorBackground.png";

export const metadata = {
    title: "Merchants",
    description: "Scroll through the merchants at the Nutcracker Market.",
    metadataBase: new URL("https://houston-ballet-official.vercel.app"),
    openGraph: {
        title: "Merchants",
        description: "Scroll through the merchants at the Nutcracker Market.",
        images: [
            {
                url: "/vendorBackground.png",
                alt: "Merchants Cover Image",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default async function VendorPage() {
    const vendors = (await getCategories()).getVendors();
    const categories = (await getCategories()).getCategories();
    const subtitle = (await getCategories()).getSubtitle("vendors");

    return (
        <>
            <div className="relative h-screen w-full overflow-hidden">
                <Image
                    // Adjust the path to your image
                    src={VendorBackground}
                    priority
                    alt="Merchant background"
                    className="z-0"
                    fill
                    sizes="100vh"
                    style={{
                        objectFit: "cover",
                    }}
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 z-20 flex flex-col justify-center p-5">
                    <h1
                        className="font-sans text-center text-4xl font-bold tracking-[.15em] text-white md:text-7xl"
                        role="heading"
                    >
                        MERCHANTS
                    </h1>
                    <h2 className="pt-3 text-center text-lg font-medium tracking-[.15em] text-white md:text-xl">
                        {subtitle ?? ""}
                    </h2>
                </div>
            </div>
            <Suspense>
                <VendorsSearch
                    originalVendors={vendors}
                    categories={categories}
                    aria-label="Merchant Search"
                />
            </Suspense>
            <Footer />
        </>
    );
}
