"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare } from "lucide-react";

const ContactBanner = () => {
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
    <div className="relative w-full py-20 lg:py-24 flex flex-col items-center justify-center overflow-hidden bg-[#023047]">
      
      {/* ========================================= */}
      {/* ANIMATED BACKGROUND IMAGE */}
      {/* ========================================= */}
      <motion.div 
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 w-full h-full origin-top"
      >
        {/* Travel/Communication themed background image */}
        <Image 
          src="/contact/contact-bg.jpg"
          alt="Contact Background"
          fill
          className="object-cover object-center opacity-20 mix-blend-overlay"
          priority
        />
      </motion.div>

      {/* Decorative pattern overlay blended with the deep blue gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px] opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-t from-[#023047] via-transparent to-[#023047]/80 pointer-events-none" />

      {/* ========================================= */}
      {/* ANIMATED CONTENT WRAPPER */}
      {/* ========================================= */}
      <motion.div 
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-2xl mx-auto px-4 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 w-16 h-16 rounded-full bg-[#3A9AFF]/20 border border-[#3A9AFF]/30 flex items-center justify-center backdrop-blur-sm"
        >
          <MessageSquare size={32} className="text-[#3A9AFF]" />
        </motion.div>

        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block py-1.5 px-4 mb-6 rounded-full bg-[#3A9AFF]/10 text-[#3A9AFF] text-xs font-bold uppercase tracking-wider border border-[#3A9AFF]/30 shadow-sm"
        >
          Support 24/7
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md"
        >
          Get in Touch
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-slate-300 text-lg leading-relaxed md:text-xl"
        >
          Have a question about a tour? Want to become a guide? We&apos;re here to help you navigate your journey.
        </motion.p>
      </motion.div>

    </div>
  )
}

export default ContactBanner;