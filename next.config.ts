import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net https://player.vimeo.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://www.facebook.com https://www.googletagmanager.com;
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self' https://player.vimeo.com https://www.googletagmanager.com;
    connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://www.facebook.com https://vimeo.com;
`;

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Configuração de Headers de Segurança (HTTP Security Headers)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Previne MIME-type sniffing
          },
          {
            key: "X-Frame-Options",
            value: "DENY", // Impede clickjacking (site não pode ser colocado em iframes de terceiros)
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload", // HSTS obrigatório (Força HTTPS)
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""), // Política restrita de fontes de scripts/imagens
          },
        ],
      },
    ];
  },

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
