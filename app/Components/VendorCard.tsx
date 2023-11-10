"use client";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

type Props = {
    vendorPhoto: string;
    vendorName: string;
    vendorDescription: string;
    website: string;
    categories: string[];
};

export default function VendorCard(props: Props) {
    return (
        <div className="max-w-[24rem] transform overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="relative">
                <div className="h-32 w-32 overflow-hidden">
                    <img
                        src={props.vendorPhoto}
                        alt="photo of vendor"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
            <Card className="rounded-lg rounded-t-none">
                <CardBody className="p-4">
                    <Typography
                        variant="h4"
                        color="blue-gray"
                        className="mb-2 text-xl font-semibold"
                    >
                        {props.vendorName}
                    </Typography>
                    <Typography
                        variant="lead"
                        color="gray"
                        className="mt-3 text-sm font-normal"
                    >
                        {props.vendorDescription}
                    </Typography>
                    <a
                        href={props.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 block text-blue-600 hover:underline"
                    >
                        {props.website}
                    </a>
                </CardBody>

                <CardFooter className="p-4">
                    {props.categories.map((category, index) => (
                        <span
                            key={index}
                            className="mb-2 mr-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600"
                        >
                            {category}
                        </span>
                    ))}
                </CardFooter>
            </Card>
        </div>
    );
}
