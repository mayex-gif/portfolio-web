import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/es', // Tu nueva URL de inicio
      },
    ];
  },
  allowedDevOrigins: ['http://localhost:3000', 'http://169.254.83.107:3000'],
};

export default nextConfig;
