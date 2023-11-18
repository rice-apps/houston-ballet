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
        nutcrackerBackground: "url('../public/background.png')",
      },
      colors: {
        ballet: "#33323c",
      },
      height: {
        128: "32rem",
      }
    },
  },
  plugins: [],
}

