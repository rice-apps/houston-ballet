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
            vendorName: "he just like me",
            image: "https://yt3.googleusercontent.com/ytc/APkrFKbb5orhkZ5PsEhQKyTmJHuw7PFI40e3h-qYnENUVw=s900-c-k-c0x00ffffff-no-rj",
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
            <h1 className="text-5xl font-sans font-bold tracking-widest">
                CATEGORIES
            </h1>
            <h3 className="font-medium text-xl">
                Not sure what to find yet or just want to explore? Browse
                through our vendors with our diverse list of categories.
            </h3>
            <div className="flex flex-wrap">
                {tempCardArray.map((card: CategoryCardProps) => {
                    return <CategoryCard {...card} />;
                })}
            </div>
        </>
    );
}
