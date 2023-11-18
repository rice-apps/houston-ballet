import { getCategories } from "@/lib/utils/utils";
import { VendorCardDisplay } from "../Components/VendorCardDisplay";
import "../globals.css";

export default async function VendorPage() {
    const vendors = (await getCategories()).getVendors();

    return (
        <>
            <div className="flex  h-128 flex-col content-center justify-center bg-vendorBackground p-5">
                <h1 className="text-center font-sans text-5xl font-bold tracking-widest text-white">
                    VENDORS
                </h1>
                <h3 className="pt-3 text-center text-xl font-medium text-white">
                    BROWSE THROUGH OUR VENDORS WITH OUR DIVERSE LIST OF
                    CATEGORIES.
                </h3>
            </div>
            <div className="items-left justify-left flex p-6">
                <div className="relative flex w-full max-w-xl items-center">
                    <input
                        type="text"
                        placeholder="Search by..."
                        className="h-10 w-full rounded-lg border-2 border-gray-300 bg-white px-5 pl-10 pr-20 text-sm focus:outline-none"
                    />
                    <button
                        className="absolute right-0 top-0 mr-2 mt-1 flex items-center justify-center"
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "0.875rem",
                            fontWeight: "500",
                            lineHeight: "normal",
                            letterSpacing: "normal",
                            textAlign: "left",
                            border: "none",
                            borderRadius: "50px",
                            padding: "8px",
                            cursor: "pointer",
                            width: "32px",
                            height: "32px",
                        }}
                        aria-label="Search"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15.8 14.8L20 19 15.8 14.8ZM10 15C13.866 15 17 11.866 17 8C17 4.134 13.866 1 10 1C6.134 1 3 4.134 3 8C3 11.866 6.134 15 10 15Z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <VendorCardDisplay vendors={vendors} />
        </>
    );
}
