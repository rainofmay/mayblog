/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

const nextConfig = withContentlayer({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        // port: '',
        // pathname: '/cledow/**',
      },
    ],
  },
  swcMinify: false,
});

module.exports = nextConfig;
