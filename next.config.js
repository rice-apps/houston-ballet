/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    typescript: {
        ignoreBuildErrors: true,
    },
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
};

module.exports = nextConfig;
