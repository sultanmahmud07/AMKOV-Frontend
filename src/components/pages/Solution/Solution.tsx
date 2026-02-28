import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import WhyChooseUs from "./WhyChooseUs";
import SolutionsBanner from "./SolutionsBanner";

const solutionsData = [
      // ... (Keep your solutionsData array exactly the same as before)
      {
            id: "oem",
            title: "OEM (Original Equipment Manufacturer) Solutions",
            description: "Our OEM services help businesses customize high-quality cameras under their own brand. We have an in-house R&D team, mold development, and injection molding capabilities to ensure products meet your needs. We strictly control the production process for high quality and efficiency.",
            bullets: ["Custom design and branding.", "Advanced manufacturing processes.", "Strict quality control."],
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
            reverse: false,
      },
      {
            id: "odm",
            title: "ODM (Original Design Manufacturer) Solutions",
            description: "Our ODM services are perfect for clients seeking unique designs and innovative technology. Our R&D team handles the design, development, and production, and we use test equipment to ensure high product quality.",
            bullets: ["Unique and innovative designs.", "Integration of advanced technologies.", "Full support to ensure high quality."],
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
            reverse: true,
      },
      {
            id: "distribution",
            title: "AMKOV Brand Distribution",
            description: "In addition to OEM and ODM services, we offer the opportunity to distribute our own AMKOV brand. AMKOV cameras are known for their excellent performance and reliability, trusted by consumers worldwide. We provide full support to help global distributors succeed in their local markets.",
            bullets: ["High-quality AMKOV cameras.", "Marketing support.", "Stable and reliable supply chain."],
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
            reverse: false,
      }
];

export default function SolutionsPage() {
      return (
            <div className="bg-[#F8FAFC] min-h-screen pb-20 overflow-hidden">
                  <SolutionsBanner />

                  {/* ========================================= */}
                  {/* SOLUTIONS SECTIONS */}
                  {/* ========================================= */}
                  <div className="main-container py-10 lg:py-12 space-y-10 lg:space-y-20">
                        {solutionsData.map((solution) => (
                              <div
                                    key={solution.id}
                                    className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${solution.reverse ? "lg:flex-row-reverse" : ""
                                          }`}
                              >
                                    {/* Image Side - Animated horizontally */}
                                    <ScrollReveal x={solution.reverse ? 50 : -50} className="w-full lg:w-1/2">
                                          <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl group">
                                                <div className="absolute inset-4 border-2 border-white/20 rounded-2xl z-10 pointer-events-none"></div>
                                                <Image
                                                      src={solution.image}
                                                      alt={solution.title}
                                                      fill
                                                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-[#023047]/10 mix-blend-overlay"></div>
                                          </div>
                                    </ScrollReveal>

                                    {/* Text Side - Animated horizontally from the opposite direction */}
                                    <ScrollReveal x={solution.reverse ? -50 : 50} delay={0.2} className="w-full lg:w-1/2 flex flex-col justify-center">
                                          <div className="w-12 h-1 bg-[#3A9AFF] mb-6 rounded-full"></div>
                                          <h3 className="text-3xl lg:text-4xl font-extrabold text-[#023047] mb-6 leading-tight">
                                                {solution.title}
                                          </h3>
                                          <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                                {solution.description}
                                          </p>

                                          <ul className="space-y-4 mb-8">
                                                {solution.bullets.map((bullet, idx) => (
                                                      <li key={idx} className="flex items-start gap-3">
                                                            <CheckCircle2 className="text-[#3A9AFF] shrink-0 mt-0.5" size={22} />
                                                            <span className="text-gray-800 font-medium text-lg">{bullet}</span>
                                                      </li>
                                                ))}
                                          </ul>
                                    </ScrollReveal>
                              </div>
                        ))}
                  </div>
                  <WhyChooseUs />
                  {/* ========================================= */}
                  {/* BOTTOM B2B CALL TO ACTION */}
                  {/* ========================================= */}
                  <ScrollReveal y={30} className="main-container pt-5 pb-10">
                        <div className="relative bg-[#023047] rounded-3xl p-10 md:p-16 text-center shadow-2xl overflow-hidden group">

                              {/* 1. The Photographic Background */}
                              <Image
                                    src="https://images.unsplash.com/photo-1514315384763-ba401779410f?q=80&w=1920&auto=format&fit=crop"
                                    alt="Camera Lens Background"
                                    fill
                                    className="object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000 ease-out pointer-events-none"
                              />

                              {/* 2. The Brand Color Gradient Overlay (Ensures text is always readable) */}
                              <div className="absolute inset-0 bg-linear-to-br from-[#023047]/95 via-[#023047]/80 to-[#044160]/90"></div>

                              {/* 3. Subtle High-Tech Blueprint Grid */}
                              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none"></div>

                              {/* 4. Enhanced Ambient Glow Orbs (Bigger & softer blur) */}
                              <div className="absolute top-0 left-0 w-96 h-96 bg-[#3A9AFF] rounded-full mix-blend-screen filter blur-[120px] opacity-30 transform -translate-x-1/2 -translate-y-1/3 pointer-events-none"></div>
                              <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3A9AFF] rounded-full mix-blend-screen filter blur-[120px] opacity-30 transform translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

                              {/* 5. The Content */}
                              <div className="relative z-10">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
                                          Ready to elevate your camera business?
                                    </h2>
                                    <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                                          Whether you need customized OEM manufacturing, innovative ODM design, or to become an official AMKOV distributor, our team is ready to support your success.
                                    </p>
                                    <Link
                                          href="/contact"
                                          className="inline-flex items-center gap-2 bg-[#3A9AFF] hover:bg-white text-white hover:text-[#023047] font-bold py-3.5 px-10 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(58,154,255,0.4)] hover:shadow-xl hover:-translate-y-1 text-lg"
                                    >
                                          Get a Free Quote <ArrowRight size={20} className="ml-1" />
                                    </Link>
                              </div>
                        </div>
                  </ScrollReveal>

            </div>
      );
}