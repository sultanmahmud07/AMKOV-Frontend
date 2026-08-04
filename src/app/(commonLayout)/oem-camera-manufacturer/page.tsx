import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, Settings, Shield, Award, Users } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Camera OEM Manufacturer & Wholesale Production | AMKOV",
  description: "Partner with AMKOV, a leading camera OEM manufacturer. We provide B2B wholesale camera production, custom molding, private labeling, and supply chain solutions since 2013.",
  alternates: {
    canonical: "/oem-camera-manufacturer",
  },
};

export default function OEMCameraManufacturerPage() {
  const capabilities = [
    {
      icon: <Settings className="text-[#3A9AFF]" size={28} />,
      title: "Custom Mold & Tooling",
      desc: "Our in-house design and engineering teams develop custom product molds, housing designs, and unique product dimensions to match your brand requirements.",
    },
    {
      icon: <Factory className="text-[#3A9AFF]" size={28} />,
      title: "Silkscreen Logo & Branding",
      desc: "Apply your brand logos, custom housing colors, and private labels directly on the hardware with precision silkscreening and premium finishes.",
    },
    {
      icon: <Shield className="text-[#3A9AFF]" size={28} />,
      title: "Bespoke Firmware & Startup Screens",
      desc: "Deploy custom start screens, translation menus, audio prompts, and bespoke camera UI layouts to deliver an fully branded user experience.",
    },
    {
      icon: <Award className="text-[#3A9AFF]" size={28} />,
      title: "Branded Packaging Design",
      desc: "Receive customized box packaging, user guides in 40+ languages, accessories layout, and complete master cartons designed to be retail-ready.",
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
              B2B Camera Solutions
            </span>
          </ScrollReveal>
          <ScrollReveal y={20} delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
              Your Trusted Camera OEM Manufacturer
            </h1>
          </ScrollReveal>
          <ScrollReveal y={20} delay={0.2} className="max-w-2xl">
            <p className="text-gray-300 text-lg md:text-xl">
              Turn your digital imaging ideas into premium, retail-ready products. AMKOV provides turnkey OEM camera manufacturer services for distributors, global brands, and wholesalers.
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
              Leading the Industry in Camera OEM Manufacturing
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              As an experienced **camera OEM manufacturer** based in Shenzhen, China, AMKOV offers global businesses the exact support they need to develop, customize, and supply high-quality digital cameras. We bring over a decade of factory production, testing compliance, and design specialization.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Whether you need to launch a custom-branded vlogging camera, action camera, or children’s model, our modern assembly lines can produce bulk quantities to match strict schedules.
            </p>
          </ScrollReveal>
          <ScrollReveal x={40} delay={0.2} className="w-full lg:w-1/2">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
              <h3 className="text-xl font-bold text-[#023047] border-b pb-4 border-gray-100">Our B2B OEM Standards</h3>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-[#3A9AFF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">ISO9001 Factory Compliance</h4>
                  <p className="text-gray-600 text-sm">Every assembly process adheres to strict international production standards for efficiency.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-[#3A9AFF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">Certifications (CE, FCC, RoHS)</h4>
                  <p className="text-gray-600 text-sm">All products go through strict testing to satisfy your local import and customs guidelines.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-[#3A9AFF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">100% Quality Inspection</h4>
                  <p className="text-gray-600 text-sm">Pre-shipment functional testing guarantees low defect rates for consumer peace of mind.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Capabilities Grid */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#023047]">Customization & OEM Capabilities</h2>
            <p className="text-gray-600">Explore the custom elements we specialize in as a camera OEM manufacturer to give your brand a competitive edge.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((item, idx) => (
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
              <h2 className="text-3xl md:text-4xl font-extrabold">Ready to Partner with a Professional Camera OEM Manufacturer?</h2>
              <p className="text-gray-300 text-lg">
                Get in touch with our B2B manufacturing experts in Shenzhen to discuss customization details, bulk wholesale rates, or custom sample pricing.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="bg-[#3A9AFF] text-white py-4 px-10 rounded-full font-bold inline-flex items-center gap-2 hover:bg-[#2c86df] transition shadow-lg hover:shadow-xl"
                >
                  Contact OEM Specialists <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
