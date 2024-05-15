/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
    // output: "export",
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'hb-bucket-2023.s3.us-east-1.amazonaws.com',
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
};

module.exports = withBundleAnalyzer(nextConfig);
