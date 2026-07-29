import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "us-east-1-shared-usea1-02.graphassets.com",
      },
      {
        protocol: "https",
        hostname: "aceternity.com",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
  