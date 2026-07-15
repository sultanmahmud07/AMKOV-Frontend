import { Metadata } from 'next';
import AboutBanner from '@/components/pages/About/AboutBanner';
import Certification from '@/components/pages/About/Certification';
import History from '@/components/pages/About/History';
import Culture from '@/components/pages/About/Culture';
import Company from '@/components/pages/About/Company';
import FactoryImages from '@/components/pages/About/FactoryImages';

export const metadata: Metadata = {
  title: {
    absolute: "About AMKOV | Digital Camera Brand & Manufacturer",
  },
  description: "Learn about AMKOV’s camera manufacturing experience, global brand history, R&D capabilities, quality control and digital imaging product development.",
  keywords: [
    "about AMKOV",
    "digital cameras",
    "innovation",
    "technology",
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
      <FactoryImages />
      <Certification />
    </div>
  );
};

export default AboutPage;