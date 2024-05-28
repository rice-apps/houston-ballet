export interface Category {
    name: string;
    image: string;
    icon: string;
    vendors: Vendor[];
    id: number;
}
export interface Vendor {
    shortDesc: string;
    description: string;
    name: string;
    originalName: string;
    the: boolean;
    mapId: number | undefined;
    image: string;
    additionalImages: string[];
    categories: string[] | undefined;
    id: number;
}

type Subtitles = {
    [key: string]: string;
};

export class VendorsRepo {
    categories: Category[] = [];
    vendors: Vendor[] = [];
    subtitle: Subtitles;
    url: string;
    constructor(categoriesJson: any, subtitle: any, url: string) {
        this.categories = [];
        this.subtitle = subtitle;
        this.url = url;
        for (let category in categoriesJson) {
            this.categories.push({
                name: category,
                vendors: categoriesJson[category].vendors,
                image: categoriesJson[category].image,
                id: categoriesJson[category].id,
                icon: categoriesJson[category].smallIcon
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
                        originalName: vendor.originalName,
                        mapId: vendor.mapId,
                        the: vendor.the,
                        image: vendor.image,
                        categories: [category.name],
                        id: vendor.id,
                        shortDesc: vendor?.shortDesc ?? "",
                        description: vendor?.description ?? "",
                        additionalImages: vendor.additionalImages
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
        return this.vendors.sort((a, b) => a.originalName.localeCompare(b.originalName));
    }

    getCategories(): Category[] {
        return this.categories.sort((a, b) => a.name.localeCompare(b.name));
    }

    getSubtitle(key: string): string {
        if (key in this.subtitle) {
            return this.subtitle[key];
        } else {
            return "";
        }
    }

    getCategory(name: string): Category | undefined {
        return this.categories.find((category) => category.name == name);
    }

    getVendor(name: string): Vendor | undefined {
        return this.vendors.find((category) => category.name == name);
    }
    
    getMapUrl() {
        return this.url;
    }
}
