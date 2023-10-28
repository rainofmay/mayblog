/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

const nextConfig = withContentlayer({
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
  reactStrictMode: false,
  swcMinify: false,
});

module.exports = nextConfig;
// const options = {
//   reactStrictMode: false,
//   swcMinify: false,
//   experimental: {
//     scrollRestoration: true,
//   },
// };

// module.exports = withContentlayer(options);
