/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        runtime: "experimental-edge",
      },
    reactStrictMode: true,
    swcMinify: true,

    images: {
        domains: ['1.bp.blogspot.com', 'blogger.googleusercontent.com', 'lh3.googleusercontent.com'],
    },
};

module.exports = nextConfig;
