/** @type {import('next').NextConfig} */
const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
const withPurgeCSSModules = require('next-purge-css-modules');

const nextConfig = {
    // output: "export",
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'hb-bucket-2023.s3.us-east-1.amazonaws.com',
              pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'd13lc4w4003kwe.cloudfront.net',
                pathname: '**',
            },
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    experimental: {
        optimizePackageImports: ['flowbite-react']
    },
};

const purgeConfig = {
    content: path.join(__dirname, 'app/**/*.{js,jsx,ts,tsx}'),
    enableDevPurge: true,
    safelist: ['body', 'html'],
};

module.exports = withBundleAnalyzer(withPurgeCSSModules(purgeConfig, nextConfig));
