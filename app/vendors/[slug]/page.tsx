import VendorHeader from "../../Components/VendorHeader";
import VendorImages from "../../Components/VendorImages";
import VendorDescription from "../../Components/VendorDescription";
import Contact from "../../Components/Contact";
import { getCategories } from "@/lib/utils/utils";
import { Gallery } from "../../../lib/utils/ImageGrid";
import ImageGrid from "@/app/Components/ImageGrid";

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

// Images to be in the grid

const galleryImages = [
    {
      src: "/alaska_fur.png",
      width: 320,
      height: 174,
      isSelected: false,
      caption: "Test One",
    },
    {
      src: "/art_by_amy.png",
      width: 320,
      height: 174,
      isSelected: false,
      caption: "Test Two",
    },
    {
      src: "/bear_creek.png",
      width: 320,
      height: 174,
      isSelected: false,
      caption: "Test Three",
    },
    {
      src: "/akfurgallery4.png",
      width: 320,
      height: 174,
      isSelected: false,
      caption: "Test One",
    },
    {
      src: "/boutique.jpg",
      width: 320,
      height: 174,
      isSelected: false,
      caption: "Test Two",
    },
    {
      src: "/china_baroque.png",
      width: 320,
      height: 174,
      isSelected: false,
      caption: "Test Three",
    },
];

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
        tags={vendor?.categories ?? []}
      />
      <div className=" flex flex-row ml-10 mt-10">
        <VendorDescription description={vendor?.description ?? ""} />
          <div className='ml-16'><ImageGrid /></div>
      </div>
      <Contact contactText="You can reach us Monday-Friday at shop@adelineandco.com. Expect a reply within 24-hours." />
    </div>
  );
}
