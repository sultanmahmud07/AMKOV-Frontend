import { Metadata } from 'next';
import ContactBanner from '@/components/pages/Contact/ContactBanner';
import ContactSection from '@/components/pages/Contact/ContactSection';

export const metadata: Metadata = {
      title: "Contact AMKOV for Camera Support, Queries, and Service",
      description: "Reach out to AMKOV for camera inquiries, support, or service. Our team is here to assist you with any questions regarding your AMKOV products.",
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