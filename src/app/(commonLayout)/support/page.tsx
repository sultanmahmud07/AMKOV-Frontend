
import SupportPage from '@/components/pages/Support/Support';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Support | NativeWays",
  description: "Learn about the NativeWays story. We are bridging the gap between curious travelers and passionate local experts to create authentic, unforgettable journeys.",

};

const Support = () => {
  return (
    <SupportPage />
  );
};

export default Support;