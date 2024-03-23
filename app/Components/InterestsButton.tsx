import { getCategories } from "@/lib/utils/utils";
import { Category, Vendor } from "@/lib/utils/repository";

export default async function InterestsButton() {
    const allCategories = (await getCategories()).getCategories();
    return (
        <>
            <div>
                {allCategories.map((category, index) => (
                    <button
                        className="type = radio focus:shadow-outline h-10 rounded-lg border border-gray-600 px-5 text-gray-600 transition-colors duration-150 hover:bg-gray-600 hover:text-indigo-100 focus:bg-white"
                        key={index}
                        // onClick={() => {
                        //     toggleInterest(category);
                        // }}
                    >
                        {category.name}
                    </button>

                ))}


            </div>
        </>
    );
}
