import { getCategories } from "@/lib/utils/utils";
import CategoriesSearch from "../Components/CategoriesSearch";
import { CategoryCardProps } from "../Components/CategoryCard";

export default async function CategoryPage() {
    // temp card array to be replaced by database info
    const categories = await getCategories();
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
            <div className="flex h-128 flex-col content-center justify-center bg-categoryBackground p-5">
                <h1 className="font-sans text-center text-4xl font-bold tracking-[.15em] text-white md:text-7xl">
                    CATEGORIES
                </h1>
                <h3 className="pt-3 text-center text-lg font-medium tracking-[.15em] text-white">
                    BROWSE THROUGH OUR VENDORS WITH OUR DIVERSE LIST OF
                    CATEGORIES.
                </h3>
            </div>
            <CategoriesSearch originalCategories={tempCardArray} />
        </>
    );
}
