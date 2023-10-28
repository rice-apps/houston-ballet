"use client"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

type Props = {
    vendorPhoto: string
    vendorName: string
    vendorDescription: string
    website: string
    categories: string[]
  }

export default function VendorCard(props: Props) {
    return (
        <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                    width={32}
                    height={32}
                    className="avatar w-8 bg-opacity-0 mr-2"
                    src={props.vendorPhoto}
                    alt="photo of vendor"
                />
            </CardHeader>

            <CardBody>
                <Typography variant="h4" color="blue-gray">
                    {props.vendorName}
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                    {props.vendorDescription}
                </Typography>
                <a href={props.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {props.website}
                 </a>
            </CardBody>

            <CardFooter className="flex items-center justify-between">
                {props.categories.map((category, index) => (
                <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                    {category}
                </span>
                ))}
            </CardFooter>
        </Card>
    )
}