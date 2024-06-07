import Link from "next/link";
export default function ErrorPage() {
    return (
        <div className="p-10">
            <header className="m-auto text-center">
                <h1 className="text-3xl" aria-label="Couldn't find page">
                    We could not find this page.
                </h1>
                <h2 className="text-xl text-blue-800">
                    <Link href="/" aria-label="Link to go back to home">
                        Go back to home page here.
                    </Link>
                </h2>
            </header>
        </div>
    );
}
