/* eslint-disable @next/next/no-sync-scripts */
import "./globals.css";
import type { Metadata } from "next";
import { Geist_Mono, Oswald } from "next/font/google";
import LoginSuccessToast from "@/components/shared/LoginSuccessToast";
import LogoutSuccessToast from "@/components/shared/LogoutSuccessToast";
import { Toaster } from "sonner";
import { Suspense } from "react";
import NextTopLoader from 'nextjs-toploader';
import SocialIcons from "@/components/shared/SocialIcons";
import Head from "next/head";
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
    "@type": "Organization",
    "name": "AMKOV",
    "alternateName": "AMKOV",
    "url": "https://amkov.com",
    "logo": "https://amkov.com/logo.png",
    "foundingDate": "2013",
    "founders": [
      {
        "@type": "Person",
        "name": "AMKOV Team"
      }
    ],
    "description": "Shenzhen Amkovery Technology Co., Ltd is a company with 22 years' experience dealing with photo & video products. We are specialized in products design, development and production. Our main products are Optical Zoom Camera, Digital Camera, Instant Print Camera, Creative Camera for Kids, Outdoor Special Camera etc.",
    // "sameAs": [
    //   "https://www.linkedin.com/company/amkov-pty-ltd/",
    //   "https://www.facebook.com/amkovau",
    //   "https://x.com/AMKOVau",
    //   "https://www.instagram.com/amkov.au"
    // ],
    // "address": {
    //   "@type": "PostalAddress",
    //   "streetAddress": "Your Business Address Here",
    //   "addressLocality": "7 Technology Cct",
    //   "addressRegion": "Hallam VIC 3803",
    //   "postalCode": "1205",
    //   "addressCountry": "Australia"
    // },
    // "contactPoint": {
    //   "@type": "ContactPoint",
    //   "telephone": "1300 772 678",
    //   "contactType": "Customer Service",
    //   "availableLanguage": ["English", "Chinese"]
    // },
    // "brand": {
    //   "@type": "Brand",
    //   "name": "T-Power",
    //   "url": "https://amkov.com"
    // },
    // "slogan": "Empowering a smarter and more sustainable planet",
    // "knowsAbout": [
    //   "Renewable Energy",
    //   "Energy Storage Systems",
    //   "EV Charging Solutions",
    //   "Clean Technology",
    //   "Sustainable Energy Infrastructure"
    // ],
    // "makesOffer": [
    //   {
    //     "@type": "Offer",
    //     "itemOffered": {
    //       "@type": "Service",
    //       "name": "Energy Storage Systems",
    //       "description": "Custom-designed energy storage systems for commercial and industrial applications, ensuring reliability, efficiency, and sustainability."
    //     }
    //   },
    //   {
    //     "@type": "Offer",
    //     "itemOffered": {
    //       "@type": "Service",
    //       "name": "EV Charging Solutions",
    //       "description": "Public and private EV charging infrastructure with intelligent network management and seamless user experience."
    //     }
    //   }
    // ]
  }
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
    </html>
  );
}
