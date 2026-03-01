import { Metadata } from 'next';
import AboutBanner from '@/components/pages/About/AboutBanner';
import Certification from '@/components/pages/About/Certification';
import History from '@/components/pages/About/History';
import Culture from '@/components/pages/About/Culture';
import RAndDManufacturing from '@/components/pages/About/RAndDManufacturing';
import Company from '@/components/pages/About/Company';

export const metadata: Metadata = {
  title: "About | Our Mission to Connect the World",
  description: "Learn about the NativeWays story. We are bridging the gap between curious travelers and passionate local experts to create authentic, unforgettable journeys.",
  keywords: [
    "about NativeWays",
    "travel startup",
    "sustainable tourism",
    "cultural exchange",
    "our story",
    "local travel community"
  ]
};

// ... Page component
const AboutPage = () => {
  return (
    <div className="">
      <AboutBanner />
      <Company />
      <History />
      <Culture />
      <RAndDManufacturing />
      <Certification />
    </div>
  );
};

export default AboutPage;