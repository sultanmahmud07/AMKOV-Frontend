import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Heart, Zap, Sparkles, Printer, Factory } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Global Instant Camera Manufacturer | B2B OEM & Wholesale | AMKOV",
  description: "AMKOV is a trusted instant camera manufacturer offering inkless thermal printing, custom brand casing, private label firmware, and bulk B2B supply.",
  alternates: {
    canonical: "/instant-camera-oem",
  },
};

export default function InstantCameraOEMPage() {
  const specs = [
    {
      icon: <Printer className="text-[#3A9AFF]" size={28} />,
      title: "Inkless Thermal Print Heads",
      desc: "Our thermal print engines print black-and-white photos in seconds without expensive ink cartridges, ensuring cost-efficient operations for B2B buyers.",
    },
    {
      icon: <Sparkles className="text-[#3A9AFF]" size={28} />,
      title: "Custom Photo Frames & Filters",
      desc: "Configure proprietary borders, logo templates, cute cartoon frames, and photo stamps in the camera software that prints directly onto the thermal paper.",
    },
    {
      icon: <Shield className="text-[#3A9AFF]" size={28} />,
      title: "BPA-Free Thermal Paper Supply",
      desc: "We supply customized BPA-free, BPS-free thermal paper rolls and self-adhesive sticker rolls in bulk, maintaining a stable supply chain for your brand.",
    },
    {
      icon: <Factory className="text-[#3A9AFF]" size={28} />,
      title: "Private Labeling & Shell Customization",
      desc: "Complete OEM customization from custom ABS colors and silkscreen branding to unique product designs and customized user guides in 40+ languages.",
    },
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20 overflow-hidden">
      {/* Banner */}
      <div className="relative w-full py-20 lg:py-28 flex flex-col items-center justify-center bg-[#023047]">
        <div className="absolute inset-0 bg-linear-to-t from-[#023047] via-transparent to-[#023047]/80 pointer-events-none" />
        <div className="main-container relative z-10 flex flex-col items-center text-center">
          <ScrollReveal y={20}>
            <span className="inline-block py-1 px-3 rounded-full bg-[#3A9AFF]/20 border border-[#3A9AFF]/30 text-[#3A9AFF] text-xs font-bold uppercase tracking-widest backdrop-blur-sm mb-4">
              Instant Photography B2B
            </span>
          </ScrollReveal>
          <ScrollReveal y={20} delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
              A Global Instant Camera Manufacturer
            </h1>
          </ScrollReveal>
          <ScrollReveal y={20} delay={0.2} className="max-w-2xl">
            <p className="text-gray-300 text-lg md:text-xl">
              Create the next trending instant print camera. AMKOV is an instant camera manufacturer providing B2B wholesale, custom mold design, and OEM branding since 2013.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-container py-16 space-y-20">
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <ScrollReveal x={-40} className="w-full lg:w-1/2">
            <div className="w-12 h-1 bg-[#3A9AFF] mb-6 rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#023047] mb-6 leading-tight">
              Grow Your Business with a Professional Instant Camera Manufacturer
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Instant photography has recaptured the imagination of modern consumers, merging digital screen convenience with tangible print physical keepsakes. As a dedicated B2B **instant camera manufacturer**, AMKOV provides the full solution.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our high-speed assembly facilities in Shenzhen house advanced clean rooms, mechanical pick-and-place print-engine aligners, and automated thermal performance testing benches.
            </p>
          </ScrollReveal>
          <ScrollReveal x={40} delay={0.2} className="w-full lg:w-1/2">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
              <h3 className="text-xl font-bold text-[#023047] border-b pb-4 border-gray-100">B2B Manufacturing Benefits</h3>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-[#3A9AFF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">Cost-Effective Thermal Printing</h4>
                  <p className="text-gray-600 text-sm">Requires no ink, ribbons, or toner. Print a photo for less than $0.01 per sheet.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-[#3A9AFF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">Global Language Customization</h4>
                  <p className="text-gray-600 text-sm">We configure user guides and camera UI menus to cover over 40 languages for international distribution.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-[#3A9AFF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">Full Accessory Supply Chain</h4>
                  <p className="text-gray-600 text-sm">We provide thermal paper, stickers, colorful markers, carry pouches, and cute cartoon cases in bulk.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Capabilities Grid */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#023047]">Wholesale Instant Camera Features</h2>
            <p className="text-gray-600">Partner with AMKOV as your instant camera manufacturer to customize hardware specs, paper supplies, and firmware graphics.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specs.map((item, idx) => (
              <ScrollReveal y={30} delay={idx * 0.1} key={idx} className="bg-white p-8 rounded-3xl shadow-md border border-gray-50 flex gap-6 hover:shadow-lg transition">
                <div className="bg-[#3A9AFF]/10 p-4 rounded-2xl h-fit shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#023047]">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal y={30} className="pt-10">
          <div className="bg-[#023047] rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden text-white">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold">Ready to Partner with a Professional Instant Camera Manufacturer?</h2>
              <p className="text-gray-300 text-lg">
                Tell us about your target market. Contact our instant print hardware division today for sample orders, print-speed configurations, or OEM pricing.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="bg-[#3A9AFF] text-white py-4 px-10 rounded-full font-bold inline-flex items-center gap-2 hover:bg-[#2c86df] transition shadow-lg hover:shadow-xl"
                >
                  Contact Instant Cam Specialists <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
