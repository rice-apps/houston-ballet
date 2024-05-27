import Link from "next/link";
import FavoriteStar from "./FavoriteStar";
import Image from "next/image";

function VendorHeader(props: {
    vendorName: string;
    vendorImage: string;
    tags: string[];
    mapId: number | undefined;
}) {
    return (
        <div className="flex flex-col" role="banner">
    {/* Back button */}
    <div className="relative flex flex-row pb-5 pl-10 mb-5 pt-64">
    <Image
        priority
        // Ensure this is the correct path
        src={props.vendorImage}
        alt="Vendor background"
        className="z-0"
        fill
        sizes="276px"
        style={{
            objectFit: "cover",
            objectPosition: "center"
        }} />
    <div className="absolute bottom-0 left-0 right-0 flex gap-x-5 items-center pt-10 px-10 py-5 z-10">
        <Link href="/vendors" aria-label="Go back to vendor list">
            <button className="focus:shadow-outline inline-flex h-10 items-center rounded-lg bg-slate-700 px-5 text-white transition-colors duration-150 hover:bg-slate-800">
                <svg
                    className="mr-3 h-4 w-4 fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        d="M4.17294 8.91666L9.30627 14.05L8.00002 15.3333L0.666687 8L8.00002 0.666664L9.30627 1.95L4.17294 7.08333H15.3334V8.91666H4.17294Z"
                        fill="#F1F1F1"
                    />
                </svg>
                <span>Back</span>
            </button>
        </Link>
        <Link href={`/map?location=${props?.mapId} - ${props.vendorName}`}>
            <button className="focus:shadow-outline inline-flex h-10 items-center rounded-lg bg-slate-700 px-5 text-white transition-colors duration-150 hover:bg-slate-800">
                <span>Show On Map</span>
            </button>
        </Link>
    </div>
</div>



    {/* Vendor Name */}
    <div
        className="flex flex-row mx-10 gap-x-5"
        aria-label={`Vendor: ${props.vendorName}`}
        role="heading"
        aria-level="1"
    >
        <h1 className="text-4xl font-extrabold tracking-wider text-gray-900">
            {props.vendorName}
        </h1>
        <FavoriteStar id={props.vendorName} />
    </div>
    {/* Buttons */}
    <div className="flex flex-row gap-x-3 pl-10 pt-5">
        {/* Tags */}
        {props.tags?.map((i) => (
            <Link href={`/vendors?category=${i}`} key={i}>
                <button
                    className="focus:shadow-outline h-10 rounded-lg border border-gray-600 px-5 text-gray-600 transition-colors duration-150 hover:bg-gray-600 hover:text-indigo-100"
                    key={i}
                    aria-label={`Tag: ${i}`}
                >
                    {i}
                </button>
            </Link>
        ))}
    </div>
</div>
    );
}

export default VendorHeader;
