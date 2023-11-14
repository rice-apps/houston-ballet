export interface Category {
    name: string;
    vendors: Vendor[];
}
export interface Vendor {
    name: string;
    image: string;
    categories: string[] | undefined;
}
export class VendorsRepo {
    categories: Category[] = [];
    vendors: Vendor[] = [];
    constructor(categoriesJson: any) {
        this.categories = [];

        for (let category in categoriesJson) {
            this.categories.push({
                name: category,
                vendors: categoriesJson[category]
            })
        }
        let vendor_map = {}

        for (let category of this.categories) {
            for (let vendor of category.vendors) {
                if (vendor.name in vendor_map) {
                    vendor_map[vendor.name].categories.push(category.name)
                } else {
                    vendor_map[vendor.name] = {
                        name: vendor.name,
                        image: vendor.image,
                        categories: [category.name]
                    }
                }
            }
        }
        //console.log(JSON.stringify(vendor_map))
        this.vendors = []
        for (let vendor_name in vendor_map) {
            this.vendors.push(vendor_map[vendor_name])
        }
    }

    getVendors(): Vendor[] {
        return this.vendors;
    }

    getCategories(): Category[] {
        return this.categories;
    }

    getCategory(name: string): Category | undefined {
        return this.categories.find((category) => category.name == name);
    }

    getVendor(name: string): Vendor | undefined {
        return this.vendors.find((category) => category.name == name);
    }
}
