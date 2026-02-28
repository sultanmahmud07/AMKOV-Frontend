import Checkout from '@/components/pages/Checkout/Checkout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Checkout | NativeWays",
  description: "Learn about the NativeWays story. We are bridging the gap between curious travelers and passionate local experts to create authentic, unforgettable journeys.",

};

const CheckoutPage = () => {
  return (
    <div>
      <Checkout></Checkout>
    </div>
  );
};

export default CheckoutPage;