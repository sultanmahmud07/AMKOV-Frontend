
import Hero from "@/components/pages/Home/Hero";
import PromoSection from "@/components/pages/Home/PromoSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <PromoSection />
      {/* <Suspense fallback={<PopularToursSkeleton />}>
        <PopularTour />
      </Suspense> */}
      {/* <Suspense fallback={<PopularToursSkeleton />}>
        <MeetLocalGuides />
      </Suspense> */}
      {/* <Suspense fallback={<div>Loading Reviews...</div>}>
        <Reviews />
      </Suspense>
      <FaqSection /> */}
    </div>
  );
}
