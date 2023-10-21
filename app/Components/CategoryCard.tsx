"use client";
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";

export default function CategoryCard() {
    return (
        <Card className="mt-6 w-96">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-lg relative h-56"
            >
                <img
                    src="https://i.insider.com/617c0e6e1037b1001814f13e?width=1000&format=jpeg&auto=webp"
                    alt="snoopy"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="blue-gray">
                    Vendor Name
                </Typography>
            </CardBody>
        </Card>
    );
}
