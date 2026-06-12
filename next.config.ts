import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Libera de forma definitiva qualquer subdomínio do Ngrok para os recursos de Dev
  allowedDevOrigins: ["*.ngrok-free.dev", "172.31.87.66"],

  // Redirect build output to native Linux filesystem to bypass
  // WSL/Windows DrvFs IO lockfile errors ("Acesso negado / os error 5")
  distDir: "/tmp/.next-dev",

  // Declare Turbopack config block explicitly (Next.js 16 default bundler)
  // This silences the webpack-vs-turbopack ambiguity error
  turbopack: {},

  // Disable Turbopack persistent filesystem cache for dev —
  // the Rust-based lockfile mechanism fails on DrvFs mounted drives
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
