"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { LifeBuoy } from "lucide-react";

const TechnicalBanner = () => {
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
          src="/solution/support-bg.jpg"
          alt="Support Background"
          fill
          className="object-cover object-center opacity-15 mix-blend-overlay"
          priority
        />
      </motion.div>

      {/* Static Gradient Overlay (Keeps text readable regardless of scroll) */}
      <div className="absolute inset-0 bg-linear-to-t from-[#023047] via-transparent to-[#023047]/80 pointer-events-none" />

      {/* ========================================= */}
      {/* ANIMATED CONTENT WRAPPER */}
      {/* ========================================= */}
      <motion.div 
        style={{ opacity: contentOpacity, y: contentY }}
        className="main-container relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center backdrop-blur-sm"
        >
          <LifeBuoy size={32} className="text-primary" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md"
        >
          Technical Support
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-300 leading-relaxed md:text-lg max-w-2xl px-4"
        >
          Find quick solutions, troubleshooting guides, and expert answers to keep your digital imaging gear running perfectly.
        </motion.p>
      </motion.div>

    </div>
  )
}

export default TechnicalBanner;