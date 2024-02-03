"use client";

import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";

export type WelcomeCategoryCardProps = {
    categoryName: String;
};

export default function CategoryCard(props: WelcomeCategoryCardProps) {
    return (
        <>
            <Card className="border-black-300 mb-2 mr-2 inline-block rounded-md border-2 px-3 py-1 text-sm group-hover:text-white">
            <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="relative m-0 h-[5vh] rounded-t-md rounded-b-none border-b border-black"
                >
                    <p></p>
                    <Typography className="h4 group-hover:text-white">
                        {props.categoryName}
                    </Typography>
                </CardHeader>
            </Card>
        </>
    );
}
