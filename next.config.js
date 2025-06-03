// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [], // Add domains here if you use external images
    },
    trailingSlash: false,
    output: 'standalone', // Useful if deploying to Docker/Vercel Serverless
};

module.exports = nextConfig;
