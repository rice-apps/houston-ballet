import VendorHeader from "../../Components/VendorHeader";
import VendorImages from "../../Components/VendorImages";
import VendorDescription from "../../Components/VendorDescription";
import Contact from "../../Components/Contact";
import { getCategories } from "@/lib/utils/utils";

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

export default async function VendorInfoPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const repo = await getCategories();
  const vendor = repo
    .getVendors()
    .find((vendor) => vendor.id.toString() === slug);

  console.log(vendor);
  return (
    <div className="bg-white flex flex-col min-h-screen justify-between">
      <VendorHeader
        vendorName={vendor?.name ?? ""}
        tags={vendor?.categories ?? []}
      />
      <div className=" flex flex-row ml-10 mt-10">
        <VendorDescription description={vendor?.description ?? ""} />
        <VendorImages images={vendor?.additionalImages.length == 0 ? ["/placeholder.jpg"] : vendor?.additionalImages ?? ["/placeholder.jpg"]} />
      </div>
      <Contact contactText="You can reach us Monday-Friday at shop@adelineandco.com. Expect a reply within 24-hours." />
    </div>
  );
}
