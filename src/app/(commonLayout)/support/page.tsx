
import SupportPage from '@/components/pages/Support/Support';
import { getSupport } from '@/services/support/support.service';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Digital Camera Support | Troubleshooting & FAQs | AMKOV",
  description: "Get expert camera support at AMKOV. Troubleshooting, product setup, FAQ assistance, repair services, and user guides for all AMKOV digital camera products.",

};

const Support = async () => {
  const support = await getSupport("page=1&limit=100");
  return (
    <SupportPage support={support?.data} />
  );
};

export default Support;