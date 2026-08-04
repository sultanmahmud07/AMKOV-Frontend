
import CategorySolutionsLoading from "@/components/loaders/Products/CategoryLoader";
import TrendyProductLoader from "@/components/loaders/Products/TrendyProductLoader";
import AboutHero from "@/components/pages/Home/AboutHero";
import BannerSlider from "@/components/pages/Home/Banner";
import BlogWrapper from "@/components/pages/Home/BlogWraper";
import CaptureAndCreate from "@/components/pages/Home/CaptureAndCreate";
import CategoryGrid from "@/components/pages/Home/CategoryGrid";
import CooperationMode from "@/components/pages/Home/CooperationMode";
import PromoSection from "@/components/pages/Home/PromoSection";
import ServiceFeatures from "@/components/pages/Home/ServiceFeatures";
import TrendingProducts from "@/components/pages/Home/TrendingProducts";
import { Suspense } from "react";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'es': '/?lang=es',
      'fr': '/?lang=fr',
      'de': '/?lang=de',
      'ja': '/?lang=ja',
      'zh-CN': '/?lang=zh-CN',
    }
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Corporation"],
  "name": "AMKOV",
  "inLanguage": ["en", "es", "fr", "de", "ja", "zh-CN"],
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
    "telephone": "+86 18926413822",
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
};

export default function Home() {
  return (
    <div>
      <Script
        id="json-ld-organization-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <BannerSlider />
      <Suspense fallback={<TrendyProductLoader />}>
        <TrendingProducts />
      </Suspense>
      <PromoSection />
      <Suspense fallback={<CategorySolutionsLoading />}>
        <CategoryGrid />
      </Suspense>
      <CaptureAndCreate />
      <AboutHero />
      <CooperationMode />
      <ServiceFeatures />
      <Suspense fallback={<div>Loading blog...</div>}>
        <BlogWrapper />
      </Suspense>
    </div>
  );
}
