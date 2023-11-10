"use client";
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
        <Card className="group my-5 mr-5 w-64 rounded-lg border border-black">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="relative m-0 h-40 rounded-t-lg border-b border-black"
            >
                <img src={props.image} alt="snoopy" />
            </CardHeader>
            <CardBody className="rounded-b-md p-4 transition-colors group-hover:bg-ballet">
                <Typography className="h4 transition-colors group-hover:text-white">
                    {props.vendorName}
                </Typography>
            </CardBody>
        </Card>
    );
}
