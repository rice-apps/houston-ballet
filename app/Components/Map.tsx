"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function Map({ url }: { url: string }) {
    const locationParams = useSearchParams();

    const location = locationParams?.get("location");
    return (
        <div className="flex h-screen flex-col content-center justify-center bg-white">
            <iframe
                title="Mappedin Map"
                name="Mappedin Map"
                scrolling="no"
                width="100%"
                height="100%"
                src={`${url}?embedded=true&location=${location}`}
            ></iframe>
        </div>
    );
}
