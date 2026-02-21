
import CaptureAndCreate from "@/components/pages/Home/CaptureAndCreate";
import CategoryGrid from "@/components/pages/Home/CategoryGrid";
import CooperationMode from "@/components/pages/Home/CooperationMode";
import Hero from "@/components/pages/Home/Hero";
import LatestProducts from "@/components/pages/Home/LatestProducts";
import PopularArticles from "@/components/pages/Home/PopularArticles";
import PromoSection from "@/components/pages/Home/PromoSection";
import ServiceFeatures from "@/components/pages/Home/ServiceFeatures";
import TrendingProducts from "@/components/pages/Home/TrendingProducts";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<p>Loading categories...</p>}>
        <CategoryGrid />
      </Suspense>
      <PromoSection />
      <Suspense fallback={<p>Loading trending products...</p>}>
        <TrendingProducts />
      </Suspense>
      <Suspense fallback={<p>Loading latest products...</p>}>
        <LatestProducts />
      </Suspense>
      {/* <FaqSection /> */}
      <CaptureAndCreate />
      <CooperationMode />
      {/* <Suspense fallback={<div>Loading Reviews...</div>}>
        <ProductReviews />
      </Suspense> */}
      <ServiceFeatures />
      <PopularArticles />
    </div>
  );
}
