"use client";

import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex w-full items-center justify-between bg-ballet p-2">
            {/* Logo in the top left corner */}
            <Link href="/" className="shrink-0">
                <img
                    src="/logo.png"
                    alt="Company Logo"
                    className="h-10 w-auto"
                />
            </Link>

            <div className="flex-grow">
                <div className="items-left justify-left hidden md:flex">
                    <ul className="justify-left items-left mt-4 flex flex-wrap md:mt-0">
                        <li>
                            <Link
                                href="/vendors"
                                className="block px-4 py-2 text-white hover:bg-gray-200 hover:text-gray-700 md:hover:bg-transparent md:hover:text-blue-700"
                            >
                                Vendors
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/categories"
                                className="block px-4 py-2 text-white hover:bg-gray-200 hover:text-gray-700 md:hover:bg-transparent md:hover:text-blue-700"
                            >
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/map"
                                className="block px-4 py-2 text-white hover:bg-gray-200 hover:text-gray-700 md:hover:bg-transparent md:hover:text-blue-700"
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
