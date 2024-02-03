import { getCategories } from "@/lib/utils/utils";

export default async function CategoryPage() {
    const vendor = await getCategories();

    return (
        <div className="ck-content mx-12" dangerouslySetInnerHTML={{__html: vendor.about}}/>
    );
}
