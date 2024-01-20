import { getCategories } from "@/lib/utils/utils";
import CategoryCard, { CategoryCardProps } from "../Components/CategoryCard";


export default async function CategoryPage() {
    // temp card array to be replaced by database info
    const categories = await getCategories();

    const tempCardArray: Array<CategoryCardProps> = [];
    for (let category of categories.getCategories()) {
        tempCardArray.push({
            vendorName: category.name,
            image: category.image
        });
    }

    return (
        <>
            <div className="bg-nutcrackerBackground h-128 flex flex-col content-center justify-center p-5">
                <h1 className="text-center font-sans text-7xl font-bold tracking-widest tracking-[.15em] text-white">
                    CATEGORIES
                </h1>
                <h3 className="pt-3 text-center text-xl font-medium tracking-[.15em] text-white">
                    BROWSE THROUGH OUR VENDORS WITH OUR DIVERSE LIST OF
                    CATEGORIES.
                </h3>
            </div>
            <div className="p-5">
                <div className="grid gap-7 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {tempCardArray.map((card: CategoryCardProps) => {
                        return <CategoryCard {...card} key={card.vendorName}/>;
                    })}
                </div>
            </div>
        </>
    );
}
