/* eslint-disable @next/next/no-sync-scripts */
import "./globals.css";
import type { Metadata } from "next";
import { Geist_Mono, Oswald } from "next/font/google";
import LoginSuccessToast from "@/components/shared/LoginSuccessToast";
import LogoutSuccessToast from "@/components/shared/LogoutSuccessToast";
import { Toaster } from "sonner";
import { Suspense } from "react";
import NextTopLoader from 'nextjs-toploader';
import MobileNavbar from "@/components/shared/Navbar/BottomNavbar";
import SocialIcons from "@/components/shared/SocialIcons";
import Head from "next/head";
const geistOswald = Oswald({
  variable: "--font-geist-oswald",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nativeways.com'),
  title: {
    default: "Amkov Best Affordable Digital Cameras for Every Photographer",
    template: "%s | AMKOV",
  },
  description: "Amkov is for the best affordable digital cameras. Shop top-rated options for beginners & professionals, featuring high-quality photography and budget-friendly prices.",
  keywords: [
    "digital cameras",
    "affordable cameras",
    "photography equipment",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.amkov.com",
    siteName: "AMKOV",
    title: "AMKOV - Best Affordable Digital Cameras",
    description: "Amkov is for the best affordable digital cameras. Shop top-rated options for beginners & professionals, featuring high-quality photography and budget-friendly prices.",
    images: [
      {
        url: "/images/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "AMKOV Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMKOV - Best Affordable Digital Cameras",
    description: "Amkov is for the best affordable digital cameras. Shop top-rated options for beginners & professionals, featuring high-quality photography and budget-friendly prices.",
    images: ["/images/og-main.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
      <script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            Weglot.initialize({
              api_key: 'wg_e2364e3fc63b35cad9baa2fdee53de952'
            });
          `,
        }}
      ></script>
    </Head>
      <body
        className={`${geistOswald.variable} ${geistMono.variable} antialiased relative`}
      >
        <NextTopLoader
          color="#023047"
          height={4}
        />
        {children}
        <MobileNavbar />
        <SocialIcons />
        <Toaster position="bottom-right" richColors />
        <Suspense fallback={null}>
          <LoginSuccessToast />
          <LogoutSuccessToast />
        </Suspense>
      </body>
    </html>
  );
}
