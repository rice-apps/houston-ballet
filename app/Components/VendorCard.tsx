"use client";
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import FavoriteStar from "./FavoriteStar";
import Link from "next/link";

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
            <Card className="group my-3 flex h-full max-w-full flex-grow transform flex-col rounded-sm border border-gray-400 bg-white shadow-md transition-transform hover:-translate-y-1 font-Figtree">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="relative m-0 h-[28vh] rounded-b-none rounded-t-none border-b border-gray-400"
                >
                    <img
                        src={props.vendorPhoto}
                        alt="photo of vendor"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>

                <CardBody className="flex-grow rounded-b-sm border-b border-gray-400 pt-4 pr-4 pb-0 pl-4 transition-colors group-hover:bg-ballet">
                    <div className="flex flex-row justify-between items-start group-hover:text-white bg-red"> {/* Adjust alignment here */}
                        <Typography
                            variant="h4"
                            color="blue-gray"
                            className="text-xl font-semibold group-hover:text-white"
                        >
                            {props.vendorName}
                        </Typography>
                        <div>
                            <FavoriteStar id={props.vendorName} />
                        </div>
                    </div>
                    <Typography
                        variant="lead"
                        color="gray"
                        className="overflow-hidden overflow-ellipsis text-md font-normal group-hover:text-white"
                    >
                        {props.vendorDescription}
                    </Typography>
                    <a
                        href={props.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 block hover:underline group-hover:text-white"
                    >
                        {props.website}
                    </a>
                    {props.categories.map((category, index) => (
                        <span
                            key={index}
                            className="border-black-300 mb-2 mr-2 inline-block rounded-md border-2 px-3 py-1 text-sm group-hover:text-white"
                        >
                            {category}
                        </span>
                    ))}
                </CardBody>
            </Card>
        </Link>
    );
}
