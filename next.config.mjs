/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    domains: ["images.unsplash.com"], // add your domain here

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
