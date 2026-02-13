import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vapartners.com.tr',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'vapartners.com.tr',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
