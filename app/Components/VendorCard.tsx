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
        <Card className="border-black-300 group flex h-[320px] max-w-[24rem] flex-grow transform flex-col rounded-lg border-2 bg-white shadow-md transition-transform hover:-translate-y-1">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="relative m-0 h-[25vh] rounded-t-lg"
            >
                <img
                    src={props.vendorPhoto}
                    alt="photo of vendor"
                    className="h-full w-full rounded-t-lg object-cover"
                />
            </CardHeader>
            <CardBody className="flex-grow rounded-b-lg border-b border-gray-300 p-4 group-hover:bg-ballet">
                <div className="mb-2 flex flex-row justify-between group-hover:text-white">
                    <Link href={`/vendors/${props.id}`}>
                        <Typography
                            variant="h4"
                            color="blue-gray"
                            className="text-xl font-semibold group-hover:text-white cursor-pointer"
                        >
                            {props.vendorName}
                        </Typography>
                    </Link>
                    <FavoriteStar id={props.vendorName} />
                </div>
                <Link href={`/vendors/${props.id}`}>
                <Typography
                    variant="lead"
                    color="gray"
                    className="mt-3 overflow-hidden overflow-ellipsis text-sm font-normal group-hover:text-white"
                >
                    {props.vendorDescription}
                </Typography>
                </Link>
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
    );
}


