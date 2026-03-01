"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- HISTORY DATA ---
const historyData = [
  {
    year: "2003",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    text: "In 2003, KIM LEE, the founder of AMKOV, entered the camera manufacturing industry and experienced the transition from CCD cameras to CMOS cameras. More importantly, AMKOV realized how important it was to do every detail well for the quality of a camera."
  },
  {
    year: "2007",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    text: "In 2007, AMKOV established a factory in Dongguan -- Dongguan Amkovery (Huirui Technology) -- and participated in the structural design, mold development, and production of camera housings and components for digital cameras. They manufactured parts for some well-known camera Brands."
  },
  {
    year: "2010",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    text: "AMKOV expanded its R&D capabilities, heavily investing in optical zoom lens technology and solidifying its foundation as a premium digital imaging manufacturer."
  },
  {
    year: "2013",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    text: "The brand AMKOV was officially registered worldwide. We shifted our focus towards creating the perfect combination of Intelligence and Vision, gathering global feedback to improve our product lines."
  },
  {
    year: "2016",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop",
    text: "Launched our first generation of creative cameras specifically designed for kids and outdoor sports, expanding our market reach beyond traditional digital cameras."
  },
  {
    year: "2021",
    image: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=1000&auto=format&fit=crop",
    text: "Achieved breakthroughs in instant print camera technology, bringing joy and immediate physical memories to thousands of customers worldwide."
  },
  {
    year: "2024",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1000&auto=format&fit=crop",
    text: "Embraced advanced AI algorithms for autofocus and image processing, launching our newest line of V-Log and Action cameras."
  }
];

export default function History() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const handleNext = () => setActiveIndex((prev) => (prev < historyData.length - 1 ? prev + 1 : prev));

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#F8FAFC]">
      
    {/* ========================================= */}
      {/* 1. ANIMATED VIDEO BACKGROUND */}
      {/* ========================================= */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#F8FAFC]">
        <video 
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-multiply"
        >
          {/* Use a local path from your public folder! */}
          <source src="/videos/history-bg.mp4" type="video/mp4" />
          
          {/* Fallback reliable external URL just in case you haven't downloaded yours yet */}
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
          
          Your browser does not support the video tag.
        </video>
        
        {/* Soft white gradient overlay to ensure the text stays perfectly readable */}
        <div className="absolute inset-0 bg-linear-to-b from-secondary/70 via-white/80 to-[#F8FAFC]"></div>
      </div>

      <div className="main-container mx-auto  relative z-10 max-w-6xl">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#023047] mb-6 tracking-tight">
            AMKOV Story
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl text-lg">
            AMKOV was registered worldwide at 2013, while behind it, was a 22 years&apos; cultivation in the camera industry. Here we would like to follow the time clue to show you AMKOV history, progressing and future orientation.
          </p>
        </div>

        {/* ========================================= */}
        {/* 2. TIMELINE TABS */}
        {/* ========================================= */}
        <div className="relative flex items-center justify-between mb-16 lg:mb-24 px-4">
          
          <button 
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white text-gray-500 hover:text-[#3A9AFF] hover:border-[#3A9AFF] disabled:opacity-30 disabled:cursor-not-allowed transition-all shrink-0 z-20 shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="relative flex-1 mx-4 md:mx-8">
            <div className="absolute top-2 left-0 w-full h-0.5 bg-gray-200"></div>
            
            <div className="relative flex justify-between">
              {historyData.map((item, index) => {
                const isActive = index === activeIndex;
                const isPast = index < activeIndex;

                return (
                  <button 
                    key={item.year}
                    onClick={() => setActiveIndex(index)}
                    className="flex flex-col items-center group relative z-10"
                  >
                    <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 bg-white ${
                      isActive 
                        ? "border-[#3A9AFF] bg-[#3A9AFF] scale-125 shadow-[0_0_10px_rgba(58,154,255,0.4)]" 
                        : isPast
                        ? "border-[#3A9AFF]"
                        : "border-gray-300 group-hover:border-gray-400"
                    }`} />
                    
                    <span className={`mt-4 text-sm md:text-base font-bold transition-colors duration-300 ${
                      isActive ? "text-[#3A9AFF]" : "text-gray-400 group-hover:text-gray-600"
                    }`}>
                      {item.year}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <button 
            onClick={handleNext}
            disabled={activeIndex === historyData.length - 1}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white text-gray-500 hover:text-[#3A9AFF] hover:border-[#3A9AFF] disabled:opacity-30 disabled:cursor-not-allowed transition-all shrink-0 z-20 shadow-sm"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* ========================================= */}
        {/* 3. ANIMATED CONTENT AREA */}
        {/* ========================================= */}
        <div className="relative min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              
              <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                <Image 
                  src={historyData[activeIndex].image}
                  alt={`AMKOV History ${historyData[activeIndex].year}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-5xl md:text-6xl font-extrabold text-[#023047] mb-6">
                  {historyData[activeIndex].year}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {historyData[activeIndex].text}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}