
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

export default function Home() {
  return (
    <div>
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
