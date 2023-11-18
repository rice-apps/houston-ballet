"use client";
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import FavoriteStar from "./FavoriteStar";

type Props = {
    vendorPhoto: string;
    vendorName: string;
    vendorDescription: string;
    website: string;
    categories: string[];
};

export default function VendorCard(props: Props) {
    return (
        <Card className="flex flex-grow flex-col rounded-lg rounded-t-none border-black-300 h-[320px] max-w-[24rem] transform overflow-hidden border-2 bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="relative m-0 h-[25vh] rounded-t-lg border-b border-black"
            >
                <img
                    src={props.vendorPhoto}
                    alt="photo of vendor"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody className="flex-grow border-b border-gray-300 p-4">
                {" "}
                {/* Border at the bottom of the card body */}
                <div className="mb-2 flex flex-row justify-between">
                    <Typography
                        variant="h4"
                        color="blue-gray"
                        className="text-xl font-semibold"
                    >
                        {props.vendorName}
                    </Typography>
                    <FavoriteStar id={props.vendorName} />
                </div>
                <Typography
                    variant="lead"
                    color="gray"
                    className="mt-3 overflow-hidden overflow-ellipsis text-sm font-normal"
                >
                    {props.vendorDescription}
                </Typography>
                <a
                    href={props.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block hover:underline"
                >
                    {props.website}
                </a>
                {props.categories.map((category, index) => (
                    <span
                        key={index}
                        className="border-black-300 mb-2 mr-2 inline-block rounded-md border-2 px-3 py-1 text-sm" /* Border around categories */
                    >
                        {category}
                    </span>
                ))}
            </CardBody>
        </Card>
    );
}
