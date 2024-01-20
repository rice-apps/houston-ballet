/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
        extend: {
            backgroundImage: {
                nutcrackerBackground:
                    "url('../public/nutcrackerBackground.png')",
                vendorBackground:
                    "url('../public/vendorBackground.png')",
                mapBackground:
                    "url('/assets/MapCover.png')",
            },
            colors: {
                ballet: "#33323c",
            },
            height: {
                128: "32rem",
            },

          letterSpacing: {
            tightest: '-.075em',
            tighter: '-.05em',
            tight: '-.025em',
            normal: '0',
            wide: '.025em',
            wider: '.05em',
            widest: '.1em',
            widest: '.20em',
          }
        },
    },
  plugins: [],
}
