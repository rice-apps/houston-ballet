const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            'Metric': ['"Metric-Regular"', 'serif'] 
          },
        extend: {
            backgroundImage: {
                categoryBackground:
                    "url('../public/categoryBackground.png')",
                nutcrackerBackground:
                    "url('../public/background.png')",
                vendorBackground:
                    "url('../public/vendorBackground.png')",
            },
            colors: {
                ballet: "#33323c",
            },
            height: {
                128: "32rem",
            },
        },
    },
    plugins: [],
};
