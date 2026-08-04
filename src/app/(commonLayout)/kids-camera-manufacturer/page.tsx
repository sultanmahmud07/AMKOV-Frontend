import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Heart, Smile, Sparkles, Award } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Kids Camera Manufacturer & Custom B2B Wholesale | AMKOV",
  description: "As a premier kids camera manufacturer, AMKOV offers safe, food-grade materials, creative designs, custom firmware, and wholesale supply for global brands.",
  alternates: {
    canonical: "/kids-camera-manufacturer",
  },
};

export default function KidsCameraManufacturerPage() {
  const customSpecs = [
    {
      icon: <Shield className="text-[#3A9AFF]" size={28} />,
      title: "Safe, Eco-Friendly Materials",
      desc: "Our kids cameras are manufactured with food-grade ABS housing and soft silicone protective covers that are completely BPA-free, odorless, and drop-resistant.",
    },
    {
      icon: <Smile className="text-[#3A9AFF]" size={28} />,
      title: "Creative Customized UI & Games",
      desc: "Pre-load child-friendly cartoon startup frames, custom stickers, digital filters, and educational mini-games (e.g. Snake, Sokoban) inside the firmware.",
    },
    {
      icon: <Sparkles className="text-[#3A9AFF]" size={28} />,
      title: "Instant Thermal Printing",
      desc: "Offer kids the magic of instant photography. We produce hybrid digital kids cameras with integrated inkless thermal printing systems for zero-cost instant paper prints.",
    },
    {
      icon: <Award className="text-[#3A9AFF]" size={28} />,
      title: "Bespoke Packaging & Cartoon Straps",
      desc: "Pack your cameras in cartoon boxes with branded neck straps, custom colored charging cables, sticker packs, and user manuals translated in multiple languages.",
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
              Kids Segment Manufacturing
            </span>
          </ScrollReveal>
          <ScrollReveal y={20} delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
              A Leading Kids Camera Manufacturer
            </h1>
          </ScrollReveal>
          <ScrollReveal y={20} delay={0.2} className="max-w-2xl">
            <p className="text-gray-300 text-lg md:text-xl">
              Launch child-safe, premium digital cameras under your brand. AMKOV is an industry-trusted kids camera manufacturer helping toy brands and electronics distributors win market share.
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
              Grow Your Toy Brand with a Specialized Kids Camera Manufacturer
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The children's smart toy segment has experienced massive year-on-year growth globally. As a specialized **kids camera manufacturer**, AMKOV designs cameras that are lightweight, durable, and packed with fun interactive elements.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our factory operates specialized plastic injection lines, silicone casting tooling, and quality assurance stations optimized for B2B toy safety certifications (EN71, ASTM, CPC, and CE).
            </p>
          </ScrollReveal>
          <ScrollReveal x={40} delay={0.2} className="w-full lg:w-1/2">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
              <h3 className="text-xl font-bold text-[#023047] border-b pb-4 border-gray-100">Toy Safety & QC Standards</h3>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-[#3A9AFF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">EN71 & CPC Certification Compliance</h4>
                  <p className="text-gray-600 text-sm">Our children’s toys satisfy global safety guidelines for chemical, physical, and mechanical hazards.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-[#3A9AFF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">Drop-Testing & Shockproof Case Design</h4>
                  <p className="text-gray-600 text-sm">Every model features shock-absorbing structures to survive standard child play drop impacts.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-[#3A9AFF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">Eye-Protection IPS Screens</h4>
                  <p className="text-gray-600 text-sm">We use high-definition IPS panels with blue-light reduction characteristics to protect children's vision.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Capabilities Grid */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#023047]">Wholesale Kids Camera Customizations</h2>
            <p className="text-gray-600">Partner with AMKOV as your kids camera manufacturer to customize everything from the exterior shell to internal educational apps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customSpecs.map((item, idx) => (
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
              <h2 className="text-3xl md:text-4xl font-extrabold">Ready to Consult a Leading Kids Camera Manufacturer?</h2>
              <p className="text-gray-300 text-lg">
                Tell us about your brand goals. Contact our toy manufacturing department today for wholesale price lists, product catalogs, or safe material test reports.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="bg-[#3A9AFF] text-white py-4 px-10 rounded-full font-bold inline-flex items-center gap-2 hover:bg-[#2c86df] transition shadow-lg hover:shadow-xl"
                >
                  Contact Toy Specialists <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
