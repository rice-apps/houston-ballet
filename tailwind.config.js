/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./public/**/*.html",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/flowbite-react/lib/**/*.js",
    ],
    theme: {
        fontFamily: {
            Metric: ['"Metric-Regular"', "serif"],
            Figtree: ['"Figtree"', 'sans-serif'], // New font added
        },
        extend: {
            backgroundImage: {
                categoryBackground: "url('../public/fall/categoryBackground.png')",
                nutcrackerBackground: "url('../public/fall/background.png')",
                vendorBackground: "url('../public/fall/vendorBackground.png')",
                mapBackground: "url('../public/fall/MapCover.png')",
                welcomeImage: "url('../public/fall/welcomeImage.png')",
            },
            colors: {
                ballet: "#33323c",
            },
            height: {
                128: "32rem",
            },
            letterSpacing: {
                tightest: "-.075em",
                tighter: "-.05em",
                tight: "-.025em",
                normal: "0",
                wide: ".025em",
                wider: ".05em",
                widest: ".1em",
                widest: ".20em",
            },
            dropShadow: {
                glow: [
                    "0 35px 60px -15px rgba(255, 255, 0, 0.3)", // Modified to use yellow color
                ],
            },
            screens: {
                s: "400px",
            },
        },
    },
    plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
