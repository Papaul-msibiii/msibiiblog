/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
      },
      {
        hostname: "media.licdn.com",
        protocol: "https",
      },
      {
        hostname: "plus.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "unsplash.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
