import CategoryCard, { CategoryCardProps } from "../Components/CategoryCard";

export default function CategoryPage() {
    // temp card array to be replaced by database info
    const tempCardArray: Array<CategoryCardProps> = [
        {
            vendorName: "snoopy",
            image: "https://www.peanuts.com/sites/default/files/prop-make-believe.jpg",
        },
        {
            vendorName: "flying",
            image: "https://i0.wp.com/divinebovinity.org/wp-content/uploads/2021/02/peanuts-9-scaled.jpg?fit=2560%2C1828&ssl=1",
        },
        {
            vendorName: "surf snoopy",
            image: "https://i.pinimg.com/originals/47/d7/2d/47d72db95ed72e4b0df2b0a4fad6a50a.png",
        },
        {
            vendorName: "laughing snoopy",
            image: "https://wallpapers.com/images/featured/snoopy-pictures-pl0xxh5fxjm8izmy.jpg",
        },
        {
            vendorName: "me fr",
            image: "https://i.pinimg.com/736x/5a/0d/9c/5a0d9c8ae6d3049eaefd28c8a58a656e.jpg",
        },
        {
            vendorName: "angry snoopy",
            image: "https://pbs.twimg.com/media/F-lgrs-b0AAZMEv?format=jpg&name=medium",
        },
    ];

    // how to get the metric font?
    return (
        <>
            <div className="bg-nutcrackerBackground h-128 flex flex-col content-center justify-center p-5">
                <h1 className="text-center font-sans text-5xl font-bold tracking-widest text-white">
                    CATEGORIES
                </h1>
                <h3 className="pt-3 text-center text-xl font-medium text-white">
                    BROWSE THROUGH OUR VENDORS WITH OUR DIVERSE LIST OF
                    CATEGORIES.
                </h3>
            </div>
            <div className="p-5">
                <div className="grid gap-7 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {tempCardArray.map((card: CategoryCardProps) => {
                        return <CategoryCard {...card} />;
                    })}
                </div>
            </div>
        </>
    );
}
