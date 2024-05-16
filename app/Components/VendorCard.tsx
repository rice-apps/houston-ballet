import Link from "next/link";
import FavoriteStar from "./FavoriteStar";
import Image from "next/image";

type Props = {
    vendorPhoto: string;
    vendorName: string;
    vendorDescription: string;
    website: string;
    categories: string[];
    id: number;
};

export default function VendorCard(props: Props) {
    return (
        <Link href={`/vendors/${props.id}`}>
            <div
                className="group my-3 flex h-full max-w-full flex-grow transform flex-col rounded-sm border border-gray-400 bg-white font-Figtree shadow-md transition-transform hover:-translate-y-1"
                role="article"
                tabIndex={0}
                aria-labelledby={`vendorName-${props.id}`}
                aria-describedby={`vendorDesc-${props.id}`}
            >
                <div className="relative m-0 h-[28vh] rounded-b-none rounded-t-none border-b border-gray-400">
                    <Image
                        src={props.vendorPhoto}
                        alt={`Photo of ${props.vendorName}`}
                        style={{ objectFit: "cover" }}
                        fill
                    />
                </div>

                <div className="flex-grow rounded-b-sm border-b border-gray-400 pb-0 pl-4 pr-4 pt-4 transition-colors group-hover:bg-ballet">
                    <div className="bg-red flex flex-row justify-between group-hover:text-white">
                        <h4
                            className="text-xl font-semibold group-hover:text-white"
                            id={`vendorName-${props.id}`}
                        >
                            {props.vendorName}
                        </h4>
                        <div className="">
                            <FavoriteStar id={props.vendorName} />
                        </div>
                    </div>
                    <p
                        className="text-md overflow-hidden overflow-ellipsis font-normal text-gray-600 group-hover:text-white"
                        id={`vendorDesc-${props.id}`}
                    >
                        {props.vendorDescription}
                    </p>
                    <a
                        href={props.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 block hover:underline group-hover:text-white"
                        aria-label={`Visit ${props.vendorName}'s website`} // for clarity
                    >
                        {props.website}
                    </a>
                    {props.categories.map((category, index) => (
                        <span
                            key={index}
                            className="border-black-300 mb-2 mr-2 inline-block rounded-md border-2 px-3 py-1 text-sm group-hover:text-white"
                            role="button"
                            tabIndex={0}
                            aria-label={`Category: ${category}`}
                        >
                            {category}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
