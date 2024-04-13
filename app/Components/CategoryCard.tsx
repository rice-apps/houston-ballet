"use client";
import Link from "next/link";

import { Card, CardHeader, Typography } from "@material-tailwind/react";

export type CategoryCardProps = {
    vendorName: string;
    image: string;
};

export default function CategoryCard(props: CategoryCardProps) {
    return (
        <Link href={`/vendors?category=${props.vendorName}`}>
            <Card className="group inline-grid w-full rounded-sm cursor-pointer font-Figtree">
              <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="relative m-0 h-[25vh] rounded-sm"
              >
                  <img
                      className="h-full w-full object-cover"
                      src={props.image}
                      alt={props.vendorName}
                      aspect-ratio={1/1}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-35 group-hover:bg-opacity-60 flex items-center justify-center font-Figtree">
                      <Typography className="text-lg text-white font-semibold">
                          {props.vendorName}
                      </Typography>
                  </div>
              </CardHeader>
          </Card>
        </Link>
    );
}
