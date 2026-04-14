import { Metadata } from 'next';
import AboutBanner from '@/components/pages/About/AboutBanner';
import Certification from '@/components/pages/About/Certification';
import History from '@/components/pages/About/History';
import Culture from '@/components/pages/About/Culture';
import Company from '@/components/pages/About/Company';
import FactoryImages from '@/components/pages/About/FactoryImages';

export const metadata: Metadata = {
  title: "About AMKOV - Leading Digital Camera Brand for Innovation",
  description: "Learn more about AMKOV, a top digital camera brand known for cutting-edge technology and customer-focused solutions. Discover our mission and vision.",
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