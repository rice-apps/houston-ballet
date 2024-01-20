const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                nutcrackerBackground:
                    "url('../public/nutcrackerBackground.png')",
                vendorBackground: "url('../public/vendorBackground.png')",
            },
            colors: {
                ballet: "#33323c",
            },
            height: {
                128: "32rem",
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
    plugins: [],
};
