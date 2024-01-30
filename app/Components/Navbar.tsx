"use client";

import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex w-full items-center justify-between bg-ballet p-2">
            {/* Logo in the top left corner */}
            <Link href="/" className="shrink-0">
                <img
                    src="/nutcrackerLogo.png"
                    alt="Company Logo"
                    className="h-10 w-auto"
                />
            </Link>

            <div className="flex-grow">
                <div className="items-left justify-left hidden md:flex">
                    <ul className="justify-left items-left mt-4 flex flex-wrap gap-4 md:mt-0">
                        <li>
                            <Link
                                href="/vendors"
                                className="ml-5 block px-4 py-2 text-white hover:bg-gray-200 md:hover:bg-transparent md:hover:underline"
                            >
                                Vendors
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/categories"
                                className="block px-4 py-2 text-white hover:bg-gray-200 md:hover:bg-transparent md:hover:underline"
                            >
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/map"
                                className="block px-4 py-2 text-white hover:bg-gray-200 md:hover:bg-transparent md:hover:underline"
                            >
                                Map
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
