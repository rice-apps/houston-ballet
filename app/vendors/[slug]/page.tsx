import VendorHeader from '../../Components/VendorHeader';
import VendorDescription from '../../Components/VendorDescription';
import { getCategories } from '@/lib/utils/utils';

// generate the page at build time
// with generateStaticParams by looking at getCategories
// and getVendors
export async function generateStaticParams() {
    const repo = await getCategories();  
    return repo.getVendors().map((vendor) => {
      return {
        slug: vendor.id.toString(),
      };
    }); 
}
  
export default async function VendorInfoPage({params:{slug}} : {params: {slug: string}}) {
    const repo = await getCategories();  
    const vendor = repo.getVendors().find((vendor) => vendor.id.toString() === slug);

    return (
        <div>
            <p>
                {vendor?.categories}
            </p>
            <VendorHeader height={96} />
            <VendorDescription height={96} />
        </div>
    );
}