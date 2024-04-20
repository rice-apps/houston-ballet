import Link from "next/link";
import FavoriteStar from "./FavoriteStar";

function VendorHeader(props: {
    vendorName: string;
    vendorImage: string;
    tags: string[];
}) {
    return (
        <div className="flex flex-col" role="banner">
            {/* Back button */}
            <div className="flex flex-row pb-5 pl-10 pt-5">
                <Link href="/vendors" aria-label="Go back to vendor list">
                    <button className="focus:shadow-outline mt-7 inline-flex h-10 items-center rounded-lg bg-slate-700 px-5 text-white transition-colors duration-150 hover:bg-slate-800">
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
                <Link href={`/map?location=${props.vendorName}`}>
                    <div className="pl-5">
                        <button className="focus:shadow-outline mt-7 inline-flex h-10 items-center rounded-lg bg-slate-700 px-5 text-white transition-colors duration-150 hover:bg-slate-800">
                            <span>Show On Map</span>
                        </button>
                    </div>
                </Link>
            </div>

            {/*Vendor Name*/}
            <div
                className="flex flex-row"
                aria-label={`Vendor: ${props.vendorName}`}
            >
                <h1 className="ml-10 text-4xl font-extrabold tracking-widest text-gray-900">
                    {props.vendorName}
                </h1>
                <FavoriteStar id={props.vendorName} />
            </div>
            {/*Buttons*/}
            <div className="flex flex-row gap-x-3 pl-10 pt-5">
                {/*Tags*/}
                {props.tags?.map((i) => (
                    <button
                        className="focus:shadow-outline h-10 rounded-lg border border-gray-600 px-5 text-gray-600 transition-colors duration-150 hover:bg-gray-600 hover:text-indigo-100"
                        key={i}
                        aria-label={`Tag: ${props.tags}`}
                    >
                        {i}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default VendorHeader;
