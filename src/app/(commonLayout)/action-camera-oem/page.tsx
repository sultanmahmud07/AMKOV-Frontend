import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Heart, Zap, Sparkles, Video, Eye, Settings } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Premium Action Camera OEM & Sports Cam Manufacturing | AMKOV",
  description: "Leading action camera OEM manufacturer AMKOV specializes in 4K sports cameras, waterproof casings, advanced stabilization firmware, and OEM/ODM branding.",
  alternates: {
    canonical: "/action-camera-oem",
  },
};

export default function ActionCameraOEMPage() {
  const specs = [
    {
      icon: <Video className="text-[#3A9AFF]" size={28} />,
      title: "4K Resolution & High Framerates",
      desc: "Produce sports action cameras with real 4K video resolution at 30/60fps, utilizing top-tier sensor ICs (Sony, Omnivision) and advanced processors.",
    },
    {
      icon: <Eye className="text-[#3A9AFF]" size={28} />,
      title: "Wide Angle & Waterproof Housing",
      desc: "Customize robust waterproof casings depth-rated down to 30 meters, custom colored bezels, and 170-degree ultra-wide-angle distortion-free glass lenses.",
    },
    {
      icon: <Zap className="text-[#3A9AFF]" size={28} />,
      title: "EIS Stabilization & WiFi Apps",
      desc: "Pre-program Electronic Image Stabilization (EIS) and custom companion WiFi apps for Android and iOS that support your company branding.",
    },
    {
      icon: <Settings className="text-[#3A9AFF]" size={28} />,
      title: "Complete Mounting Accessories",
      desc: "Bulk manufacture complete accessory mounting kits, including helmet mounts, bike brackets, floating sticks, chest straps, and custom travel bags.",
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
              Sports Video B2B
            </span>
          </ScrollReveal>
          <ScrollReveal y={20} delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
              A Premium Action Camera OEM
            </h1>
          </ScrollReveal>
          <ScrollReveal y={20} delay={0.2} className="max-w-2xl">
            <p className="text-gray-300 text-lg md:text-xl">
              Launch high-performance action cameras built to survive extreme environments. AMKOV is an action camera OEM offering full product design, customization, and factory production.
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
              Power Your Brand with a Top Action Camera OEM Manufacturer
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Adventure travel and extreme sports content creation continue to drive massive global interest. As an established **action camera OEM**, AMKOV provides specialized hardware design and firmware engineering for high-resolution action cams.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our factory operates dynamic assembly cells, high-accuracy sensor surface-mount lines, dust-free lens alignment cleanrooms, and automated underwater waterproofing pressure chamber tests.
            </p>
          </ScrollReveal>
          <ScrollReveal x={40} delay={0.2} className="w-full lg:w-1/2">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
              <h3 className="text-xl font-bold text-[#023047] border-b pb-4 border-gray-100">B2B Action Cam Standards</h3>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-[#3A9AFF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">Advanced EIS (Image Stabilization)</h4>
                  <p className="text-gray-600 text-sm">We develop robust multi-axis gyro algorithms inside the firmware to filter out rough vibration shakes.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-[#3A9AFF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">IP68 Pressure Chamber Verification</h4>
                  <p className="text-gray-600 text-sm">Every waterproof action camera casing is pressure-tested to ensure reliable underwater performance.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-[#3A9AFF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">Global Certification Compliance</h4>
                  <p className="text-gray-600 text-sm">We manufacture and certify product systems to meet international customs guidelines (CE, FCC, RoHS, REACH).</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Capabilities Grid */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#023047]">Wholesale Action Camera Configurations</h2>
            <p className="text-gray-600">Partner with AMKOV as your action camera OEM to customize hardware sensors, lens fields, application software, and custom travel bundles.</p>
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
              <h2 className="text-3xl md:text-4xl font-extrabold">Ready to Partner with a Professional Action Camera OEM?</h2>
              <p className="text-gray-300 text-lg">
                Discuss custom sports camera designs, sensor parameters, or custom package bundles. Contact our action camera division in Shenzhen today for quotes and sample evaluations.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="bg-[#3A9AFF] text-white py-4 px-10 rounded-full font-bold inline-flex items-center gap-2 hover:bg-[#2c86df] transition shadow-lg hover:shadow-xl"
                >
                  Contact Action Cam Specialists <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
