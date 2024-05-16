"use client";
import Link from "next/link";

export type CategoryCardProps = {
    vendorName: string;
    image: string;
};

export default function CategoryCard(props: CategoryCardProps) {
    return (
        <Link href={`/vendors?category=${props.vendorName}`}>
            <div className="group inline-grid w-full cursor-pointer rounded-sm font-Figtree">
                <div className="relative m-0 h-[25vh] rounded-sm">
                    <img
                        className="h-full w-full object-cover"
                        src={props.image}
                        alt={props.vendorName}
                        aspect-ratio={1 / 1}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-35 font-Figtree transition duration-150 group-hover:bg-opacity-60">
                        <h3 className="text-lg font-semibold text-white">
                            {props.vendorName}
                        </h3>
                    </div>
                </div>
            </div>
        </Link>
    );
}
