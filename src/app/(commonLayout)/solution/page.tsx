
import SolutionsPage from '@/components/pages/Solution/Solution';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Solution | NativeWays",
  description: "Learn about the NativeWays story. We are bridging the gap between curious travelers and passionate local experts to create authentic, unforgettable journeys.",

};

const Solution = () => {
  return (
    <SolutionsPage />
  );
};

export default Solution;