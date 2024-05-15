/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    images: {
        domains: ['hb-bucket-2023.s3.us-east-1.amazonaws.com'],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
};

module.exports = nextConfig;
