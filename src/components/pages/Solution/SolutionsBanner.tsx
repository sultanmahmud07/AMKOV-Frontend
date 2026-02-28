"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

const SolutionsBanner = () => {
  // Track the vertical scroll position of the window
  const { scrollY } = useScroll();

  // --- SCROLL ANIMATIONS ---
  // Background Image: Moves down slightly (parallax) and zooms in as you scroll
  const bgY = useTransform(scrollY, [0, 500], ["0%", "20%"]);
  const bgScale = useTransform(scrollY, [0, 500], [1, 1.15]);
  
  // Overlay/Content: Fades out and translates down as you scroll away
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentY = useTransform(scrollY, [0, 300], ["0px", "50px"]);

  return (
    <div className="relative w-full py-24 lg:py-32 flex flex-col items-center justify-center overflow-hidden bg-[#023047]">
      
      {/* ========================================= */}
      {/* ANIMATED BACKGROUND IMAGE */}
      {/* ========================================= */}
      <motion.div 
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 w-full h-full origin-top"
      >
        <Image
          src="/solution/solution-bg.jpg"
          alt="Solutions Background"
          fill
          className="object-cover object-center opacity-20 mix-blend-overlay"
          priority
        />
      </motion.div>

      {/* STATIC GRADIENT OVERLAY */}
      {/* Note: I added pointer-events-none to ensure it doesn't block interactions */}
      <div className="absolute inset-0 bg-linear-to-t from-[#023047] via-transparent to-[#023047]/80 pointer-events-none" />

      {/* ========================================= */}
      {/* ANIMATED CONTENT WRAPPER */}
      {/* ========================================= */}
      <motion.div 
        style={{ opacity: contentOpacity, y: contentY }}
        className="main-container relative z-10 flex flex-col items-center text-center"
      >
        <ScrollReveal y={20}>
          <span className="inline-block py-1 px-3 rounded-full bg-[#3A9AFF]/20 border border-[#3A9AFF]/30 text-[#3A9AFF] text-xs font-bold uppercase tracking-widest backdrop-blur-sm mb-4">
            Global Manufacturing
          </span>
        </ScrollReveal>

        <ScrollReveal y={20} delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight shadow-black drop-shadow-md">
            Our Solutions
          </h1>
        </ScrollReveal>

        <ScrollReveal y={20} delay={0.2}>
          <h2 className="text-xl md:text-2xl font-semibold text-[#3A9AFF] mb-8">
            Tailored to Your Needs
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-slate-300 leading-relaxed md:text-lg max-w-3xl">
            We are a factory in China specializing in the development of high-quality cameras. We offer three key solutions: OEM, ODM, and AMKOV brand distribution.
          </p>
        </ScrollReveal>
      </motion.div>
      
    </div>
  );
};

export default SolutionsBanner;