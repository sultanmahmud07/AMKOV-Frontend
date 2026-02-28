import { Metadata } from 'next';
import ContactBanner from '@/components/pages/Contact/ContactBanner';
import ContactSection from '@/components/pages/Contact/ContactSection';

export const metadata: Metadata = {
      title: "Contact Us | NativeWays Support & Inquiries",
      description: "Have questions or need assistance? Get in touch with the NativeWays support team. We are here to help travelers and guides 24/7 with bookings, safety, and general inquiries.",
      keywords: [
            "customer support",
            "contact NativeWays",
            "travel help",
            "nativeways phone number",
            "nativeways email",
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