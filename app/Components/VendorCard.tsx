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
        <div className="max-w-[24rem] h-[400px] flex flex-col transform overflow-hidden rounded-lg bg-white shadow-md border border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="relative flex-shrink-0 border-b border-gray-300"> {/* Border at the bottom of the image */}
                <div className="h-48 w-full overflow-hidden"> 
                    <img
                        src={props.vendorPhoto}
                        alt="photo of vendor"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
            <Card className="flex flex-col flex-grow rounded-lg rounded-t-none">
                <CardBody className="flex-grow p-4 border-b border-gray-300"> {/* Border at the bottom of the card body */}
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
                        className="mt-3 text-sm font-normal overflow-ellipsis overflow-hidden"
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
                            className="mb-2 mr-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600 border border-blue-300" /* Border around categories */
                        >
                            {category}
                        </span>
                    ))}
                </CardFooter>
            </Card>
        </div>
    );
}

