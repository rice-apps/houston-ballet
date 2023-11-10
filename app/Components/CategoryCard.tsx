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
        <Card className="border border-black rounded-lg group w-64 mr-5 my-5">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 relative border-b border-black rounded-t-lg h-40"
            >
                <img src={props.image} alt="snoopy" />
            </CardHeader>
            <CardBody className="p-4 rounded-b-md group-hover:bg-ballet transition-colors">
                <Typography className="h4 group-hover:text-white transition-colors">
                    {props.vendorName}
                </Typography>
            </CardBody>
        </Card>
    );
}
