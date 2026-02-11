import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Élégance | Boutique de Vêtements Haut de Gamme",
  description: "Découvrez notre collection de vêtements raffinés alliant qualité exceptionnelle et style sophistiqué. L'élégance intemporelle pour une garde-robe responsable.",
  keywords: ["mode", "vêtements", "élégance", "boutique", "luxe", "qualité", "style", "Paris", "collection"],
  authors: [{ name: "Élégance" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Élégance | Boutique de Vêtements Haut de Gamme",
    description: "L'élégance intemporelle pour une garde-robe raffinée et responsable",
    url: "https://elegance.fr",
    siteName: "Élégance",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Élégance | Boutique de Vêtements",
    description: "L'élégance intemporelle pour une garde-robe raffinée",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
