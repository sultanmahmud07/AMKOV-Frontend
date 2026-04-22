import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AMKOV Privacy Policy | B2B Digital Camera Manufacturer",
  description: "See how AMKOV manages contact, order, cookie, and account data for B2B buyers seeking digital camera manufacturing, OEM, and wholesale support.",
};

const PrivacyPage = () => {
  return (
    <main className="min-h-screen  pb-16 bg-gray-50 selection:bg-[#3A9AFF] selection:text-white">

      {/* Container */}
      <div className="main-container bg-white  overflow-hidden">

        {/* Header Section */}
        <div className="bg-[#023047] px-8 py-12 md:px-12 text-center relative overflow-hidden">
          {/* Decorative subtle gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#3A9AFF]/20 to-transparent pointer-events-none"></div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight relative z-10">
            Privacy Policy for AMKOV
          </h1>
        </div>

        {/* Content Section */}
        <div className="p-4 md:p-12 text-gray-600 space-y-10">

          {/* 1. Information Collection */}
          <section>
            <h2 className="text-2xl font-bold text-[#023047] mb-4 border-b border-gray-100 pb-2">
              Information Collection
            </h2>
            <p className="leading-relaxed mb-4">
              We collect personal information from you when you use our website, register an account, make a purchase, or engage with our services. The types of information we collect include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-gray-800">Personal Identification Information:</strong> Name, email address, phone number, shipping/billing address.
              </li>
              <li>
                <strong className="text-gray-800">Payment Information:</strong> Credit/debit card details (if applicable), billing address.
              </li>
              <li>
                <strong className="text-gray-800">Automatically Collected Information:</strong> IP address, browser type, device type, and cookies (please see the Cookies section for more information).
              </li>
            </ul>
          </section>

          {/* 2. Method of Collection */}
          <section>
            <h2 className="text-2xl font-bold text-[#023047] mb-4 border-b border-gray-100 pb-2">
              Method of Collection
            </h2>
            <p className="leading-relaxed mb-4">
              We collect information through the following methods:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-gray-800">Contact and Registration Forms:</strong> When you create an account or contact us via forms on our website.
              </li>
              <li>
                <strong className="text-gray-800">Cookies and Tracking Technologies:</strong> To enhance user experience, we use cookies to gather data about your browsing behavior and preferences.
              </li>
              <li>
                <strong className="text-gray-800">Newsletter Signups:</strong> When you subscribe to our newsletter, we collect your email address and name.
              </li>
            </ul>
          </section>

          {/* 3. Usage of Data */}
          <section>
            <h2 className="text-2xl font-bold text-[#023047] mb-4 border-b border-gray-100 pb-2">
              Usage of Data
            </h2>
            <p className="leading-relaxed mb-4">
              The data we collect is used for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To process and fulfill orders or provide services.</li>
              <li>To improve our website, products, and services.</li>
              <li>To send marketing materials and promotional offers (if you opt-in).</li>
              <li>To respond to customer service requests and after-sales support.</li>
            </ul>
          </section>

          {/* 4. Third-Party Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-[#023047] mb-4 border-b border-gray-100 pb-2">
              Third-Party Sharing
            </h2>
            <p className="leading-relaxed mb-4">
              We may share your personal data with trusted third parties to assist with various aspects of our business operations. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong className="text-gray-800">Payment Processors:</strong> For payment transactions.
              </li>
              <li>
                <strong className="text-gray-800">Analytics Tools:</strong> Such as Google Analytics, to improve website performance.
              </li>
              <li>
                <strong className="text-gray-800">Advertising Partners:</strong> Including Facebook or Google Ads, to provide targeted marketing.
              </li>
            </ul>
            <p className="leading-relaxed">
              We ensure that all third parties comply with data protection regulations.
            </p>
          </section>

          {/* 5. Cookies & Tracking */}
          <section>
            <h2 className="text-2xl font-bold text-[#023047] mb-4 border-b border-gray-100 pb-2">
              Cookies & Tracking
            </h2>
            <p className="leading-relaxed mb-4">
              We use cookies to enhance your experience on our website, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong className="text-gray-800">Essential Cookies:</strong> Required for basic website functionality, such as managing user sessions and security.
              </li>
              <li>
                <strong className="text-gray-800">Performance Cookies:</strong> To track website usage and improve performance.
              </li>
              <li>
                <strong className="text-gray-800">Advertising Cookies:</strong> To provide personalized advertising based on your browsing behavior.
              </li>
            </ul>
            <p className="leading-relaxed">
              You can control cookie settings through your browser settings. You may opt out of cookies if you prefer, but please note that some website features may not function properly without them.
            </p>
          </section>

          {/* 6. User Rights/Choices */}
          <section>
            <h2 className="text-2xl font-bold text-[#023047] mb-4 border-b border-gray-100 pb-2">
              User Rights/Choices
            </h2>
            <p className="leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-gray-800">Right to Access:</strong> You can request a copy of the information we hold about you.
              </li>
              <li>
                <strong className="text-gray-800">Right to Update:</strong> You can update your personal information through your account settings.
              </li>
              <li>
                <strong className="text-gray-800">Right to Delete:</strong> You can request the deletion of your account and personal data (subject to legal obligations).
              </li>
              <li>
                <strong className="text-gray-800">Unsubscribe:</strong> You can unsubscribe from marketing emails at any time by clicking the &quot;unsubscribe&quot; link at the bottom of the email.
              </li>
            </ul>
          </section>

          {/* 7. Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-[#023047] mb-4 border-b border-gray-100 pb-2">
              Data Security
            </h2>
            <p className="leading-relaxed mb-4">
              We implement reasonable technical and organizational measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong className="text-gray-800">Encryption:</strong> For secure data transmission.
              </li>
              <li>
                <strong className="text-gray-800">Firewalls:</strong> To protect against unauthorized access.
              </li>
              <li>
                <strong className="text-gray-800">HTTPS:</strong> Secure connection for browsing.
              </li>
            </ul>
            <p className="leading-relaxed">
              However, no method of data transmission or storage is 100% secure, and we cannot guarantee complete security.
            </p>
          </section>

          {/* 8. Policy Updates */}
          <section>
            <h2 className="text-2xl font-bold text-[#023047] mb-4 border-b border-gray-100 pb-2">
              Policy Updates
            </h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. We encourage you to review this policy periodically to stay informed about how we protect your data.
            </p>
          </section>

          {/* 9. Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-[#023047] mb-4 border-b border-gray-100 pb-2">
              Contact Information
            </h2>
            <p className="leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy, or if you wish to exercise your rights regarding your personal data, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-10">
              <li>
                <strong className="text-gray-800">Email:</strong>{" "}
                <a href="mailto:services@amkov.com" className="text-[#3A9AFF] hover:underline">
                  services@amkov.com
                </a>
              </li>
              <li>
                <strong className="text-gray-800">Phone:</strong> +86-(0)755-8376 2022
              </li>
              <li>
                <strong className="text-gray-800">Address:</strong> 2/F, Building C, Aike Industrial Park, No.1, Lane 1, Dabao Road, Xin&apos;an Street, Bao&apos;an District, Shenzhen
              </li>
            </ul>

            <hr className="border-gray-200 mb-8" />

            <p className="leading-relaxed text-sm text-gray-500 bg-gray-50 p-6 rounded-xl border border-gray-100">
              This Privacy Policy ensures transparency regarding how AMKOV collects, uses, and shares personal data, providing users with the necessary rights and choices. It follows standard practices in data protection while making it easy for users to understand.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;