import { getCategories } from "@/lib/utils/utils";
import CategoryCard, { CategoryCardProps } from "../Components/CategoryCard";
import { Footer } from "../Components/Footer";
import Image from "next/image";
import CategoryBackground from "../../public/categoryBackground.png";

export const metadata = {
    title: "Merchant Categories",
    description: "Scroll through the categories of merchants at the Nutcracker Market.",
    metadataBase: new URL('https://houston-ballet-official.vercel.app'),
    openGraph: {
        title: "Merchant Categories",
        description: "Scroll through the categories of merchants at the Nutcracker Market.",
        images: [
            {
                url: "/categoryBackground.png",
                alt: "Merchant Categories Cover Image",
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
}

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
    return <>
<header className="relative flex h-screen flex-col content-center justify-center p-5 overflow-hidden">
    <Image
        // Change this path to your actual image location
        src={CategoryBackground}
        priority
        alt='Category background'
        className='z-0'
        fill
        sizes="100vw"
        style={{
            objectFit: "cover"
        }} />
    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col content-center justify-center z-10">
        <h1 className="font-sans text-center text-4xl md:text-7xl font-bold tracking-[.15em] text-white">
            CATEGORIES
        </h1>
        <h3 className="pt-3 text-center text-lg md:text-xl font-medium tracking-[.15em] text-white">
            {subtitle ?? ""}
        </h3>
    </div>
</header>
<div className="py-6 px-5 sm:px-5 md:px-10 lg:px-20">
    <div className="grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tempCardArray.map((card) => {
            return <CategoryCard {...card} key={card.vendorName} />;
        })}
    </div>
</div>
<Footer/>
</>;
}
