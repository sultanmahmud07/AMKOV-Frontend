import { Mail, Phone, MapPin, Clock, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ContactForm from './ContactForm'; // Adjust path if needed

const ContactSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24 relative z-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

        {/* ========================================= */}
        {/* LEFT COLUMN: Contact Info & CTA */}
        {/* ========================================= */}
        <div className="lg:col-span-1 space-y-8">

          {/* Contact Information Card */}
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-8 md:p-10">
            <h3 className="text-2xl font-extrabold text-[#023047] mb-8">Contact Information</h3>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#3A9AFF]/10 text-[#3A9AFF] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#3A9AFF] group-hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col justify-center h-12">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Global Sales</p>
                  <a href="mailto:service@amkov.com" className="text-[#023047] font-semibold hover:text-[#3A9AFF] transition-colors">
                    service@amkov.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#3A9AFF]/10 text-[#3A9AFF] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#3A9AFF] group-hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col justify-center h-12">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Call Us</p>
                  <a href="tel:008613713986978" className="text-[#023047] font-semibold hover:text-[#3A9AFF] transition-colors">
                    0086 13713986978
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#3A9AFF]/10 text-[#3A9AFF] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#3A9AFF] group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Headquarters</p>
                  <p className="text-[#023047] font-semibold leading-relaxed">
                    2/F, Building C, Aike Industrial Park, No.1, Lane 1, Dabao Road, Xin&apos;an Street, Bao&apos;an District, Shenzhen
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <h4 className="text-sm font-bold text-[#023047] mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#3A9AFF]" /> Business Hours
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Monday - Friday: 9:00 AM - 6:00 PM (GMT+6)<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>

          {/* Technical Support CTA Card */}
          <div className="bg-linear-to-br from-[#023047] to-[#044160] rounded-2xl shadow-lg p-8 md:p-10 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3A9AFF] rounded-full mix-blend-multiply filter blur-2xl opacity-40 translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10 flex flex-col items-center">
              <HelpCircle className="w-12 h-12 text-[#3A9AFF] mb-4" />
              <h3 className="font-bold text-2xl mb-2">Need Tech Support?</h3>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                Check out our comprehensive troubleshooting guide to find answers instantly.
              </p>
              <Link
                href="/support"
                className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-[#3A9AFF] border border-white/20 hover:border-[#3A9AFF] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300"
              >
                Visit Support Center <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>

        {/* ========================================= */}
        {/* RIGHT COLUMN: Form & Map */}
        {/* ========================================= */}
        <div className="lg:col-span-2 space-y-8">

          {/* Contact Form Wrapper */}
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-8 md:p-12">
            <h2 className="text-3xl font-extrabold text-[#023047] mb-2">Send an Inquiry</h2>
            <p className="text-gray-500 mb-10 text-lg">
              Fill out the form below to discuss OEM/ODM manufacturing, wholesale pricing, or distributorship opportunities.
            </p>

            <ContactForm />
          </div>

          {/* Map Embed */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-[350px] relative">
            <iframe
              // Using Google Maps embed tailored to your exact Baidu location name
              src="https://maps.google.com/maps?q=%E8%89%BE%E5%8F%AF%E5%B7%A5%E4%B8%9A%E5%9B%ADC%E6%A0%8B&t=m&z=16&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md text-xs font-bold text-[#023047] border border-gray-100">
              📍 AMKOV Global HQ
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;