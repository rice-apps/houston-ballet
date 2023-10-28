import VendorCard from "../Components/VendorCard"

interface VendorsPageProps {
  photo_path: string;
  name: string;
  description: string;
  website: string;
  categories: string[];
}

export default function VendorsPage({
  photo_path,
  name,
  description,
  website,
  categories,
}: VendorsPageProps) {
  return (
    <div>
      <VendorCard
        vendorPhoto={photo_path}
        vendorName={name}
        vendorDescription={description}
        website={website}
        categories={categories}
      />
    </div>
  );
}
