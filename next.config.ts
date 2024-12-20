import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ssl.gstatic.com'
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com'
        }
      ],
    },
};

export default nextConfig;