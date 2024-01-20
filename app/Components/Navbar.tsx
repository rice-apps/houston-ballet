"use client";

import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="bg-ballet p-2 flex justify-between items-center w-full">
            {/* Logo in the top left corner */}
            <Link href="/" className="shrink-0 ml-5">
                <img
                    src="/nutcrackerLogo.png" 
                    alt="Company Logo"
                    className="h-10 w-auto"
                />
            </Link>

            <div className="flex-grow">
                <div className="hidden items-left justify-left md:flex">
                    <ul className="flex justify-left flex-wrap items-left mt-4 md:mt-0">
                        <li>
                            <Link
                                href="/vendors"
                                className="block py-2 px-4 text-xl mr-5 ml-5 text-white hover:text-white md:hover:bg-transparent md:hover:underline"
                            >
                                Vendors
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/categories"
                                className="block py-2 px-4 text-xl text-white hover:text-white md:hover:bg-transparent md:hover:underline"
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
