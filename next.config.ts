import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // dirs: ['pages', 'components'],
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
