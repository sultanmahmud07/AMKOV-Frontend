/* eslint-disable @next/next/no-sync-scripts */
import "./globals.css";
import type { Metadata } from "next";
import { Geist_Mono, Oswald } from "next/font/google";
import LoginSuccessToast from "@/components/shared/LoginSuccessToast";
import LogoutSuccessToast from "@/components/shared/LogoutSuccessToast";
import { Toaster } from "sonner";
import { Suspense } from "react";
import NextTopLoader from 'nextjs-toploader';

import Head from "next/head";
import SocialIcons from "@/components/shared/SocialIcons";
import CookieConsent from "@/components/shared/CookieConsent";
import Script from "next/script";
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
  metadataBase: new URL('https://amkov.com'),
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
    title: 'AMKOV - Best Affordable Digital Cameras for Every Photographer',
    description: 'Amkov is for the best affordable digital cameras. Shop top-rated options for beginners & professionals, featuring high-quality photography and budget-friendly prices.',
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "Corporation"],
    "name": "AMKOV",
    "alternateName": "Shenzhen Amkovery Technology Co., Ltd",
    "url": "https://www.amkov.com/",
    "logo": "https://www.amkov.com/favicon.ico",
    "foundingDate": "2013",
    "founders": [
      {
        "@type": "Person",
        "name": "AMKOV Team"
      }
    ],
    "description": "Shenzhen Amkovery Technology Co., Ltd is a company with 22 years' experience dealing with photo & video products. We are specialized in products design, development and production. Our main products are Optical Zoom Camera, Digital Camera, Instant Print Camera, Creative Camera for Kids, Outdoor Special Camera etc. The company also provides OEM, ODM and bulk supply solutions for global partners.",
    "sameAs": [
      "https://www.linkedin.com/company/107824231/admin/page-posts/published/",
      "https://www.facebook.com/amkovcameras",
      "https://x.com/Amkovery",
      "https://www.instagram.com/amkovekim",
      "https://www.pinterest.com/aamkovery"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2/F, Building C, Aike Industrial Park, No.1, Lane 1, Dabao Road, Xin'an Street, Bao'an District, Shenzhen",
      "addressLocality": "Shenzhen",
      "addressRegion": "Guangdong",
      "postalCode": "518000",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86 13713986978",
      "contactType": "Customer Service",
      "email": "services@amkov.com",
      "availableLanguage": ["English", "Chinese"]
    },
    "brand": {
      "@type": "Brand",
      "name": "AMKOV",
      "url": "https://www.amkov.com"
    },
    "slogan": "Reliable Camera Manufacturing for Growing Brands.",
    "knowsAbout": [
      "Optical Zoom Camera",
      "Digital Zoom Camera",
      "V-Log Camera",
      "Video Camera",
      "Waterproof Camera",
      "Instant Print Camera",
      "Kids Camera",
      "OEM Camera Manufacturing",
      "ODM Camera Development",
      "Bulk Camera Supply",
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "OfferCatalog",
          "name": "AMKOV Camera Products and Manufacturing Solutions",
          "description": "AMKOV provides B2B camera products and manufacturing solutions, including optical zoom cameras, digital cameras, V-Log cameras, waterproof cameras, instant print cameras and kids cameras, along with OEM, ODM and bulk supply services for global brands, distributors and business partners."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "OEM Camera Manufacturing",
          "description": "AMKOV provides OEM camera manufacturing services for B2B clients, helping brands, wholesalers and distributors produce customized digital cameras, video cameras, waterproof cameras, instant print cameras and kids cameras with reliable production support."
        }
      }
    ]
  }


  return (
    <html lang="en">
      <Head>
        <script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            Weglot.initialize({
              api_key: 'wg_e911820c659a8b04a115fcc7f23f3fdb2'
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
        <SocialIcons />
        <Toaster position="bottom-right" richColors />
        <Suspense fallback={null}>
          <LoginSuccessToast />
          <LogoutSuccessToast />
        </Suspense>
        <CookieConsent />
      </body>
      <GoogleTagManager gtmId="GTM-K3RGLBD" />
      <Script
        id="json-ld-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      {/* Load the Weglot library */}
      {/* <Script
        src="https://cdn.weglot.com/weglot.min.js"
        strategy="beforeInteractive"
      />
      <Script id="weglot-init" strategy="afterInteractive">
        {`
            Weglot.initialize({
                api_key: 'wg_e911820c659a8b04a115fcc7f23f3fdb2'
            });
          `}
      </Script> */}
      {/* <script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
      <script>
        Weglot.initialize({
          api_key: 'wg_e911820c659a8b04a115fcc7f23f3fdb2'
    });
      </script> */}
    </html>
  );
}
