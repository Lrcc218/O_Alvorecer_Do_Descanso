import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Libera de forma ampla todos os principais serviços de túnel usando curingas oficiais suportados
  allowedDevOrigins: [
    "*.loca.lt",
    "*.ngrok.io",
    "*.ngrok.app",
    "*.ngrok-free.app",
    "*.ngrok-free.dev",
    "*.gitpod.io",
    "*.github.dev",
    "*.idx.google.com",
    "172.31.87.66"
  ],

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
