
import ViewCart from '@/components/pages/Cart/ViewCart';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shopping Cart | AMKOV Digital Cameras",
  description: "View items in your shopping cart and proceed to checkout.",
  alternates: {
    canonical: '/cart',
  },
};

const Cart = () => {
  return (
    <ViewCart />
  );
};

export default Cart;