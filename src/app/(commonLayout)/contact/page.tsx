import { Metadata } from 'next';
import ContactBanner from '@/components/pages/Contact/ContactBanner';
import ContactSection from '@/components/pages/Contact/ContactSection';

export const metadata: Metadata = {
      title: "Contact AMKOV for OEM, ODM & Wholesale Camera Inquiries",
      description: "Contact AMKOV for OEM and ODM camera manufacturing, wholesale pricing, product samples, distributor partnerships or technical support.",
      keywords: [
            "customer support",
            "contact AMKOV",
            "camera support",
            "help center"
      ],
}
const ContactPage = () => {
      return (
            <div className="">
                  <ContactBanner />
                  <ContactSection />
            </div>
      );
};

export default ContactPage;