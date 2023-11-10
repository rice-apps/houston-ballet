"use client";

export default function NavBar() {
    return (
        <nav className="flex items-center flex-wrap bg-slate-700 p-2 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a
                                href="/vendorpage"
                                className="block py-2 pl-3 pr-4 text-white"
                            >
                                Vendor Page
                            </a>
                        </li>
                        <li>
                            <a
                                href="/categorypage"
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
