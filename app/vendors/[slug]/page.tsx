import VendorHeader from "../../Components/VendorHeader";
import VendorDescription from "../../Components/VendorDescription";
import Contact from "../../Components/Contact";
import Image from "next/image";
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

  return (
    <div className="bg-white flex flex-col min-h-screen justify-between">
      <VendorHeader
        vendorName={vendor?.name ?? ""}
        tagOne={vendor?.categories?.[0] ?? ""}
        tagTwo={vendor?.categories?.[1] ?? ""}
        tagThree={vendor?.categories?.[2] ?? ""}
      />
      <div className=" flex flex-row ml-10 mt-10">
        <VendorDescription
          lineOne={vendor?.description ?? ""}
          lineTwo={vendor?.description ?? ""}
        />
        <img className="ml-20 object-cover" src={vendor?.image} width={256} />
        <div className="flex flex-col ml-5">
          <img className="object-cover" src={vendor?.image} width={128} />
          <img className="object-cover" src={vendor?.image} width={128} />
        </div>
      </div>
      <Contact contactText="You can reach us Monday-Friday at shop@adelineandco.com. Expect a reply within 24-hours." />
    </div>
  );
}
