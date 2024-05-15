import localFont from "next/font/local";
// figtree (the good one)
const figtree = localFont({
    src: [
        {
            path: "../../public/fonts/Figtree-Italic-VariableFont_wght.ttf",
            weight: "400",
        },
        {
            path: "../../public/fonts/Figtree-VariableFont_wght.ttf",
            weight: "400",
        },
    ],
    variable: "--font-figtree",
});

export function Footer() {
    return (<footer className={figtree.className + " text-center m-x-auto text-sm my-9 px-3"}>
        © 2024 Houston Ballet. All Rights Reserved. Made with ❤️ by <a href="https://riceapps.org/" className="text-blue-600">RiceApps</a>.
    </footer>);
}