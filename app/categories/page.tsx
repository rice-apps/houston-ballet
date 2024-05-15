import { getCategories } from "@/lib/utils/utils";
import CategoryCard, { CategoryCardProps } from "../Components/CategoryCard";
import { Footer } from "../Components/Footer";

export const metadata = {
    title: "Merchant Categories",
    description: "Scroll through the categories of merchants at the Nutcracker Market.",
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
    return (
        <>
            <header className="flex h-screen flex-col content-center justify-center bg-categoryBackground p-5 bg-no-repeat bg-cover">
                <h1 className="font-sans text-center text-4xl md:text-7xl font-bold tracking-[.15em] text-white">
                    CATEGORIES
                </h1>
                <h3 className="pt-3 text-center text-lg md:text-xl font-medium tracking-[.15em] text-white">
                    {subtitle ?? ""}
                </h3>
            </header>
            <div className="py-6 px-5 sm:px-5 md:px-10 lg:px-20">
                <div className="grid gap-7 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {tempCardArray.map((card: CategoryCardProps) => {
                        return <CategoryCard {...card} key={card.vendorName} />;
                    })}
                </div>
            </div>
            <Footer/>
        </>
    );
}
