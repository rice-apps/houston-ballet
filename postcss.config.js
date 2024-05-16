const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: [
      './app/**/*.{js,jsx,ts,tsx}',
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    safelist: {
      standard: ["html", "body"],
      deep: [
        // whitelist all CSS classes that start
        // with "mt-" and "mb-"
        /^mt-/,
        /^mb-/,
        // whitelist the "highlighted" class
        "highlighted",
      ],
    }
  },
];

module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};