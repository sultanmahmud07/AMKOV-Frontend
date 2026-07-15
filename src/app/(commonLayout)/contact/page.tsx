import { Metadata } from 'next';
import ContactBanner from '@/components/pages/Contact/ContactBanner';
import ContactSection from '@/components/pages/Contact/ContactSection';
import Script from 'next/script';

export const metadata: Metadata = {
      title: "Contact AMKOV for OEM, ODM & Wholesale Camera Inquiries",
      description: "Contact AMKOV for OEM and ODM camera manufacturing, wholesale pricing, product samples, distributor partnerships or technical support. Get in touch with our team in Shenzhen today to discuss your project.",
      keywords: [
            "customer support",
            "contact AMKOV",
            "camera support",
            "help center"
      ],
}
const ContactPage = () => {
      const contactJsonLd = {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact AMKOV for OEM, ODM & Wholesale Camera Inquiries",
            "description": "Contact AMKOV for OEM and ODM camera manufacturing, wholesale pricing, product samples, distributor partnerships or technical support.",
            "url": "https://www.amkov.com/contact",
            "mainEntity": {
                  "@type": "Organization",
                  "name": "AMKOV",
                  "alternateName": "Shenzhen Amkovery Technology Co., Ltd",
                  "url": "https://www.amkov.com/",
                  "logo": "https://www.amkov.com/logo/logo.png",
                  "contactPoint": [
                        {
                              "@type": "ContactPoint",
                              "telephone": "+86 18926413822",
                              "contactType": "customer service",
                              "email": "service@amkov.com",
                              "availableLanguage": ["English", "Chinese"]
                        }
                  ],
                  "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "2/F, Building C, Aike Industrial Park, No.1, Lane 1, Dabao Road, Xin'an Street, Bao'an District",
                        "addressLocality": "Shenzhen",
                        "addressRegion": "Guangdong",
                        "postalCode": "518000",
                        "addressCountry": "CN"
                  }
            }
      };

      return (
            <div className="">
                  <ContactBanner />
                  <ContactSection />
                  <Script
                        id="contact-json-ld"
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                              __html: JSON.stringify(contactJsonLd).replace(/</g, '\\u003c'),
                        }}
                  />
            </div>
      );
};

export default ContactPage;