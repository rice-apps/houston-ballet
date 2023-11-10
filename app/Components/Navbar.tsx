"use client";

export default function NavBar() {
    return (
        <nav className="flex flex-wrap items-center bg-ballet p-2">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                <div
                    className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
                    id="navbar-sticky"
                >
                    <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
                        <li>
                            <a
                                href="/vendorspage"
                                className="block py-2 pl-3 pr-4 text-white"
                            >
                                Vendor Page
                            </a>
                        </li>
                        <li>
                            <a
                                href="/categoriespage"
                                className="block py-2 pl-3 pr-4 text-white"
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
