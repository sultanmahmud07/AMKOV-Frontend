import Checkout from '@/components/pages/Checkout/Checkout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Checkout | AMKOV Digital Cameras",
  description: "Secure checkout page to complete your AMKOV camera purchase.",
  alternates: {
    canonical: '/checkout',
  },
};

const CheckoutPage = () => {
  return (
    <div>
      <Checkout></Checkout>
    </div>
  );
};

export default CheckoutPage;