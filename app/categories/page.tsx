import { getCategories } from "@/lib/utils/utils";
import CategoryCard, { CategoryCardProps } from "../Components/CategoryCard";
import { Footer } from "../Components/Footer";
import Image from "next/image";
import CategoryBackground from "../../public/categoryBackground.png";

export const metadata = {
    title: "Merchant Categories",
    description:
        "Scroll through the categories of merchants at the Nutcracker Market.",
    metadataBase: new URL("https://nutcracker-market.riceapps.org"),
    openGraph: {
        title: "Merchant Categories",
        description:
            "Scroll through the categories of merchants at the Nutcracker Market.",
        images: [
            {
                url: "/categoryBackground.png",
                alt: "Merchant Categories Cover Image",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default async function CategoryPage() {
    // temp card array to be replaced by database info
    const categories = await getCategories();
    const subtitle = (await getCategories()).getSubtitle("categories");

    const tempCardArray: Array<CategoryCardProps> = [];
    for (let category of categories.getCategories()) {
        tempCardArray.push({
            vendorName: category.name,
            image: category.image,
        });
    }

    // how to get the metric font?
    return (
        <>
            <header className="relative flex h-screen flex-col content-center justify-center overflow-hidden p-5">
                <Image
                    // Change this path to your actual image location
                    src={CategoryBackground}
                    priority
                    alt="Category background"
                    className="z-0"
                    fill
                    sizes="100vh"
                    style={{
                        objectFit: "cover",
                    }}
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col content-center justify-center">
                    <h1
                        className="font-sans text-center text-4xl font-bold tracking-[.15em] text-white md:text-7xl"
                        role="heading"
                    >
                        CATEGORIES
                    </h1>
                    <h2 className="pt-3 text-center text-lg font-medium tracking-[.15em] text-white md:text-xl">
                        {subtitle ?? ""}
                    </h2>
                </div>
            </header>
            <div className="px-5 py-6 sm:px-5 md:px-10 lg:px-20">
                <div className="grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {tempCardArray.map((card) => {
                        return <CategoryCard {...card} key={card.vendorName} />;
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}
