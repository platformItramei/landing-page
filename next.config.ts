import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BACKEND_BASE_URL: process.env.VITE_BACKEND_BASE_URL,
    NEXT_PUBLIC_EMAIL: process.env.VITE_EMAIL,
    NEXT_PUBLIC_PASSWORD: process.env.VITE_PASSWORD,
    NEXT_PUBLIC_FRONTEND_PRIVATE_KEY: process.env.VITE_FRONTEND_PRIVATE_KEY,
    NEXT_PUBLIC_BACKEND_PUBLIC_KEY: process.env.VITE_BACKEND_PUBLIC_KEY,
  },
};

export default nextConfig;
