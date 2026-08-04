import "./globals.css";
import type { Metadata } from "next";
import { Geist_Mono, Oswald } from "next/font/google";
import LoginSuccessToast from "@/components/shared/LoginSuccessToast";
import LogoutSuccessToast from "@/components/shared/LogoutSuccessToast";
import { Toaster } from "sonner";
import { Suspense } from "react";
import NextTopLoader from 'nextjs-toploader';
import SocialIcons from "@/components/shared/SocialIcons";
import CookieConsent from "@/components/shared/CookieConsent";
import { GoogleTagManager } from '@next/third-parties/google'

const geistOswald = Oswald({
  variable: "--font-geist-oswald",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.amkov.com'),
  title: {
    default: "AMKOV Best Camera Brand | ODM & OEM Camera Manufacturer",
    template: "%s | AMKOV",
  },
  description: "AMKOV is a digital camera manufacturer offering wholesale cameras, OEM, ODM, private-label production and global supply for brands and distributors. Discover our high-quality vlogging, waterproof, and kids cameras.",
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
    title: "ODM & OEM Camera Manufacturer | Wholesale Cameras | AMKOV",
    description: "AMKOV is a digital camera manufacturer offering wholesale cameras, OEM, ODM, private-label production and global supply for brands and distributors. Discover our high-quality vlogging, waterproof, and kids cameras.",
    images: [
      {
        url: "/images/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "AMKOV Platform Preview",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo/logo.png',
    shortcut: '/logo/logo.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ODM & OEM Camera Manufacturer | Wholesale Cameras | AMKOV',
    description: 'AMKOV is a digital camera manufacturer offering wholesale cameras, OEM, ODM, private-label production and global supply for brands and distributors. Discover our high-quality vlogging, waterproof, and kids cameras.',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'], // Must be an absolute URL
  },
  verification: {
    // google: '4ZX9CuFuA85qIneiid-Rf3CUuIMRPZQ0Z1TRa7sm_6Q',
    yandex: 'c014ce9b80f619cc',
    // other: {
    //   "msvalidate.01": "EC339A7B409661CBD12EB4814BCFB6F9",
    // },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-K3RGLBD" />
      <body
        className={`${geistOswald.variable} ${geistMono.variable} antialiased relative`}
      >
        <NextTopLoader
          color="#023047"
          height={4}
          showSpinner={false}
        />
        {children}
        <SocialIcons />
        <Toaster position="bottom-right" richColors />
        <Suspense fallback={null}>
          <LoginSuccessToast />
          <LogoutSuccessToast />
        </Suspense>
        <CookieConsent />
      </body>
    </html>
  );
}
