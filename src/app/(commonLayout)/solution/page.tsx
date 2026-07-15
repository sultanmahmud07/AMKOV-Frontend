
import SolutionsPage from '@/components/pages/Solution/Solution';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: "OEM and ODM Camera Manufacturing Solutions | Amkov",
  },
  description: "Build custom and private-label cameras with AMKOV’s OEM and ODM manufacturing, R&D, mold development, quality control and global supply support.",
};

const Solution = () => {
  return (
    <SolutionsPage />
  );
};

export default Solution;