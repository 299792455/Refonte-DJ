import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
    ],
  },
  eslint: {
    // ⛔ Ignore les erreurs ESLint pendant le build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

