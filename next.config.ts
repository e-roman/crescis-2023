import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'd2llx07cilb2cs.cloudfront.net',
      'd2s90tzqqa0vkb.cloudfront.net', // ← Este es el que falta
    ],
  },
};

export default nextConfig;
