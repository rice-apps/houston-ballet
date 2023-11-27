"use client";

import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="bg-ballet p-2 flex justify-between items-center w-full">
            {/* Logo in the top left corner */}
            <Link href="/" className="shrink-0">
                <img
                    src="/logo.png" 
                    alt="Company Logo"
                    className="h-10 w-auto"
                />
            </Link>

            {/* Centered navbar items */}
            <div className="flex-grow">
                <div className="hidden items-center justify-center md:flex">
                    <ul className="flex justify-center flex-wrap items-center mt-4 md:mt-0">
                        <li>
                            <Link
                                href="/vendors"
                                className="block py-2 px-4 text-white hover:bg-gray-200 hover:text-gray-700 md:hover:bg-transparent md:hover:text-blue-700"
                            >
                                Vendors
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/categories"
                                className="block py-2 px-4 text-white hover:bg-gray-200 hover:text-gray-700 md:hover:bg-transparent md:hover:text-blue-700"
                            >
                                Categories
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
