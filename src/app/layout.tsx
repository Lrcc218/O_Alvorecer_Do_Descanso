import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "@/styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A Arquitetura do Descanso — Resgate as Noites de Sono da Sua Família",
  description:
    "Método acolhedor e baseado em ciência para o sono infantil. +300 famílias dormindo em paz. Conexão, empatia e noites restauradas.",
  openGraph: {
    title: "A Arquitetura do Descanso",
    description:
      "Resgate suas noites com um método empático e baseado em ciência do sono infantil.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Arquitetura do Descanso",
    description:
      "Resgate suas noites com um método empático e baseado em ciência do sono infantil.",
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "A Arquitetura do Descanso",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#0A1128",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
