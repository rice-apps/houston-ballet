const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: [
      './app/**/*.{js,jsx,ts,tsx}',
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
    ],
    defaultExtractor: content => content.replace(/<style[^]+?<\/style>/gi, '').match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
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