"use client";

export default function NavBar() {
    return (
        <nav className="bg-ballet p-2 flex justify-between items-center w-full">
            {/* Logo in the top left corner */}
            <a href="/" className="shrink-0">
                <img
                    src="/logo.png" 
                    alt="Company Logo"
                    className="h-10 w-auto"
                />
            </a>

            <div className="flex-grow">
                <div className="hidden items-left justify-left md:flex">
                    <ul className="flex justify-left flex-wrap items-left mt-4 md:mt-0">
                        <li>
                            <a
                                href="/vendorspage"
                                className="block py-2 px-4 text-white hover:bg-gray-200 hover:text-gray-700 md:hover:bg-transparent md:hover:text-blue-700"
                            >
                                Vendors
                            </a>
                        </li>
                        <li>
                            <a
                                href="/categoriespage"
                                className="block py-2 px-4 text-white hover:bg-gray-200 hover:text-gray-700 md:hover:bg-transparent md:hover:text-blue-700"
                            >
                                Categories
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
