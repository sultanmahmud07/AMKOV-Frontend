
import Hero from "@/components/pages/Home/Hero";
import FaqSection from "@/components/pages/Home/FaqSection";
import Reviews from "@/components/pages/Home/Reviews";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Suspense fallback={<PopularToursSkeleton />}>
        <PopularTour />
      </Suspense> */}
      {/* <Suspense fallback={<PopularToursSkeleton />}>
        <MeetLocalGuides />
      </Suspense> */}
      <Suspense fallback={<div>Loading Reviews...</div>}>
        <Reviews />
      </Suspense>
      <FaqSection />
    </div>
  );
}
