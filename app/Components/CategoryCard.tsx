"use client";
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";

export type CategoryCardProps = {
    vendorName: string,
    image: string
}

export default function CategoryCard(props: CategoryCardProps) {
    return (
        <Card className="m-6 w-96 border border-black rounded-lg">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 relative h-56 border-b border-black rounded-t-lg"
            >
                <img
                    src={props.image}
                    alt="snoopy"
                />
            </CardHeader>
            <CardBody className="p-4">
                <Typography variant="h4" color="blue-gray">
                    {props.vendorName}
                </Typography>
            </CardBody>
        </Card>
    );
}
