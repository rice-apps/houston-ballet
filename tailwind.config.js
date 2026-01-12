const fs = require('fs');
const path = require('path');

// Read the season from the build-time generated file
let season = 'fall'; // default fallback
try {
    const seasonConfig = JSON.parse(
        fs.readFileSync(path.join(__dirname, '.season.json'), 'utf-8')
    );
    season = seasonConfig.season;
} catch (error) {
    console.warn('Could not read .season.json, using default season: fall');
}

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
                categoryBackground: `url('../public/${season}/categoryBackground.png')`,
                nutcrackerBackground: `url('../public/${season}/background.png')`,
                vendorBackground: `url('../public/${season}/vendorBackground.png')`,
                mapBackground: `url('../public/${season}/MapCover.png')`,
                welcomeImage: `url('../public/${season}/welcomeImage.png')`,
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
