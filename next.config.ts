import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "obsphotogallery.s3.ap-southeast-1.amazonaws.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
