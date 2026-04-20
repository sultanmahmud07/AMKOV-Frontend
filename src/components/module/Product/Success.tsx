"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // <-- 1. Imported Variants here
import { ArrowRight, Clock, MailCheck, PackageSearch } from "lucide-react";
import Confetti from "react-confetti";

// Custom hook to get the exact window size for the confetti
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export default function Success() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  // Stop rendering confetti completely after 6 seconds for performance
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  // --- 2. Added : Variants to fix the TypeScript error ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <div className="relative flex items-center justify-center bg-white selection:bg-[#3A9AFF] selection:text-white min-h-[85vh]">
      
      {/* --- 3. Confetti Layer: Shifted -20px to the top --- */}
      {showConfetti && width > 0 && (
        <div className="absolute -top-16 left-0 right-0 bottom-0 z-50 pointer-events-none">
          <Confetti 
            width={width} 
            height={height + 20} // Added 20 to height so it reaches the bottom
            numberOfPieces={250} 
            recycle={false} 
            gravity={0.15}  
          />
        </div>
      )}

      {/* --- Ultra-Modern Background Accents --- */}
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
      
      {/* Soft Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-[#3A9AFF] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-2xl px-6 py-12 flex flex-col items-center text-center"
      >
        {/* --- 1. Sleek Animated Icon --- */}
        <motion.div variants={itemVariants} className="relative mb-8">
          <div className="w-20 h-20 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.1)]">
            <svg
              className="w-10 h-10 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </motion.div>

        {/* --- 2. Typography --- */}
        <motion.div variants={itemVariants} className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#023047] tracking-tight mb-4">
            Inquiry Confirmed.
          </h1>
          <p className="text-lg text-gray-500 font-medium">
            We’ve received your request. A dedicated account manager is currently reviewing your requirements.
          </p>
        </motion.div>

        {/* --- 3. Minimalist Timeline / Next Steps --- */}
        <motion.div 
          variants={itemVariants} 
          className="w-full max-w-md mt-12 mb-12 text-left bg-gray-50/50 backdrop-blur-xl border border-gray-100 rounded-2xl p-6"
        >
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 text-center">
            What happens next?
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 bg-white p-2 rounded-lg shadow-sm border border-gray-100 text-[#3A9AFF]">
                <MailCheck size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#023047]">Confirmation Sent</h4>
                <p className="text-xs text-gray-500 mt-1">A copy of your inquiry has been sent to your email.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-0.5 bg-white p-2 rounded-lg shadow-sm border border-gray-100 text-[#3A9AFF]">
                <Clock size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#023047]">Expert Review</h4>
                <p className="text-xs text-gray-500 mt-1">Our team will prepare pricing and details within 24 hours.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- 4. Premium Call to Actions --- */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          
          <Link 
            href="/products"
            className="group relative flex items-center justify-center gap-2 px-8 py-2 bg-[#023047] text-white font-bold rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
          >
            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <PackageSearch size={18} />
            <span>Continue Browsing</span>
          </Link>

          <Link 
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-2 bg-white text-gray-600 hover:text-[#023047] font-bold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto group"
          >
            Return Home
            <ArrowRight size={18} className="text-gray-400 group-hover:text-[#023047] group-hover:translate-x-1 transition-all" />
          </Link>

        </motion.div>
      </motion.div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}