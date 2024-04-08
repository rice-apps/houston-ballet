"use client";
import Link from "next/link";

import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";

export type CategoryCardProps = {
    vendorName: string;
    image: string;
};

export default function CategoryCard(props: CategoryCardProps) {
    return (
        <Link href={`/vendors?category=${props.vendorName}`}>
            <div role="link" aria-label={`View vendors for ${props.vendorName}`} tabIndex={0} style={{ textDecoration: 'none' }}>
            <Card className="group inline-grid w-full rounded-lg border border-black">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="relative m-0 h-[25vh] rounded-t-md rounded-b-none border-b border-black"
                >
                    <img
                        className="h-full w-full object-cover"
                        src={props.image}
                        alt={props.vendorName}
                    />
                </CardHeader>
                <CardBody className="rounded-b-md p-4 transition-colors group-hover:bg-ballet">
                    <Typography className="h4 group-hover:text-white">
                        {props.vendorName}
                    </Typography>
                </CardBody>
            </Card>
            </div>
        </Link>
    );
}
