"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MousePointer2, ChevronDown } from "lucide-react";

// --- EXPANDED HISTORY DATA WITH LONGER TEXT ---
const historyData = [
  {
    year: "2003",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    text: "In 2003, KIM LEE, the founder of AMKOV, entered the camera manufacturing industry and experienced the transition from CCD cameras to CMOS cameras. Recognizing the shift in digital imaging, AMKOV realized how important it was to do every detail well for the quality of a camera. This early dedication to precision engineering and optical excellence laid the groundwork for decades of innovation, ensuring that every lens and sensor combination was optimized for the best possible user experience."
  },
  {
    year: "2007",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    text: "In 2007, AMKOV established a factory in Dongguan -- Dongguan Amkovery (Huirui Technology) -- and participated in the structural design, mold development, and production of camera housings and components for digital cameras. They manufactured parts for some well-known camera Brands, gaining invaluable experience in mass production, quality control, and advanced supply chain management that would later empower their own proprietary product lines."
  },
  {
    year: "2010",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    text: "AMKOV expanded its R&D capabilities, heavily investing in optical zoom lens technology and solidifying its foundation as a premium digital imaging manufacturer. During this time, the engineering team filed several patents for advanced lens stabilization and compact sensor housing."
  },
  { year: "2013", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop", text: "The brand AMKOV was officially registered worldwide. We shifted our focus towards creating the perfect combination of Intelligence and Vision, gathering global feedback to improve our product lines." },
  { year: "2014", image: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=1000&auto=format&fit=crop", text: "Expanded our global distribution channels, partnering with major retail chains across Europe and North America to bring AMKOV products to a wider audience." },
  { year: "2016", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop", text: "Launched our first generation of creative cameras specifically designed for kids and outdoor sports, expanding our market reach beyond traditional digital cameras." },
  { year: "2017", image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=1000&auto=format&fit=crop", text: "Introduced advanced optical stabilization systems into our compact camera lines, setting a new industry standard for affordable, high-quality video capture." },
  { year: "2018", image: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=1000&auto=format&fit=crop", text: "Reached a major milestone of 5 million units sold globally. We also began early research into AI-assisted image processing algorithms." },
  { year: "2021", image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=1000&auto=format&fit=crop", text: "Achieved breakthroughs in instant print camera technology, bringing joy and immediate physical memories to thousands of customers worldwide." },
  { year: "2022", image: "https://images.unsplash.com/photo-1580828369019-2238b6938a53?q=80&w=1000&auto=format&fit=crop", text: "Opened a state-of-the-art, automated manufacturing facility in Shenzhen to drastically increase production capacity while reducing our carbon footprint." },
  { year: "2024", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1000&auto=format&fit=crop", text: "Embraced advanced AI algorithms for autofocus and image processing, launching our newest line of V-Log and Action cameras." },
  { year: "2025", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop", text: "Celebrating over two decades of innovation. AMKOV continues to redefine digital imaging, pushing the boundaries of what is possible in compact consumer electronics." }
];

export default function History() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the timeline so the active year is centered
  useEffect(() => {
    if (timelineRef.current) {
      const activeElement = timelineRef.current.children[activeIndex + 1] as HTMLElement; // +1 to account for progress bar
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeIndex]);

  const handleNext = () => {
    if (activeIndex < historyData.length - 1) setActiveIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex(prev => prev - 1);
  };

  // Calculate dynamic progress line width
  const progressPercentage = (activeIndex / (historyData.length - 1)) * 100;

  return (
    <section id="history" className="relative w-full min-h-[90vh] py-20 overflow-hidden bg-[#F8FAFC]">
      
      {/* ========================================= */}
      {/* 1. CINEMATIC BACKGROUND ANIMATION */}
      {/* ========================================= */}
      <motion.div 
        animate={{ scale: [1, 1.08, 1], rotate: [0, 0.5, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      >
        <Image 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2500&auto=format&fit=crop"
          alt="Mountain Peak Background"
          fill
          className="object-cover object-top opacity-20 mix-blend-multiply"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/70 to-[#F8FAFC] z-10 pointer-events-none"></div>

      <div className="main-container relative z-20 flex flex-col items-center">
        
        {/* ========================================= */}
        {/* 2. REFINED HEADER */}
        {/* ========================================= */}
        <div className="mb-14 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-[#023047] mb-4 tracking-tight"
          >
            AMKOV Story
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Registered worldwide in 2013, with over 22 years of cultivation in the camera industry. Follow the timeline to explore our history, progress, and future orientation.
          </motion.p>
        </div>

        {/* ========================================= */}
        {/* 3. VECTOR/SHAPE TIMELINE NAVIGATOR */}
        {/* ========================================= */}
        <div className="relative flex items-center mb-4 md:mb-16 px-12 w-full max-w-6xl">
          
          <button 
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="absolute left-0 w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-[#3A9AFF] hover:border-[#3A9AFF] hover:shadow-md transition-all disabled:opacity-30 disabled:pointer-events-none z-30"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Timeline Container */}
          <div 
            ref={timelineRef}
            className="w-full flex items-center overflow-x-auto scrollbar-hide snap-x relative py-6"
          >
            {/* Base Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            {/* Animated Active Line */}
            <motion.div 
              className="absolute top-1/2 left-0 h-0.5 bg-[#3A9AFF] -translate-y-1/2 z-0"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            {historyData.map((item, index) => {
              const isActive = index === activeIndex;
              const isPast = index <= activeIndex;

              return (
                <button 
                  key={item.year}
                  onClick={() => setActiveIndex(index)}
                  className="relative flex flex-col items-center justify-center min-w-[100px] sm:min-w-[120px] shrink-0 group z-10 snap-center outline-none"
                >
                  {/* Vector Step Indicator (Diamond Shape) */}
                  <div className="relative flex items-center justify-center w-8 h-8 mb-3">
                    {/* Active Halo */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeTimelineShape"
                        className="absolute inset-0 border-2 border-[#3A9AFF] rotate-45 rounded-sm"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                    {/* Inner Diamond */}
                    <div className={`w-2.5 h-2.5 rotate-45 rounded-sm transition-all duration-300 z-10 ${
                      isPast ? "bg-[#3A9AFF]" : "bg-gray-300 group-hover:bg-[#3A9AFF]/50"
                    }`} />
                  </div>
                  
                  {/* Year Text */}
                  <span className={`text-sm font-bold transition-colors duration-300 ${
                    isActive ? "text-[#3A9AFF]" : "text-gray-500 group-hover:text-[#3A9AFF]"
                  }`}>
                    {item.year}
                  </span>
                </button>
              );
            })}
          </div>

          <button 
            onClick={handleNext}
            disabled={activeIndex === historyData.length - 1}
            className="absolute right-0 w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-[#3A9AFF] hover:border-[#3A9AFF] hover:shadow-md transition-all disabled:opacity-30 disabled:pointer-events-none z-30"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* ========================================= */}
        {/* 4. REDESIGNED CONTENT CARD WITH VECTOR */}
        {/* ========================================= */}
        <div className="relative w-full max-w-6xl flex justify-center pb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_20px_60px_rgba(2,48,71,0.08)] rounded-3xl overflow-hidden flex flex-col lg:flex-row relative z-20"
            >
              
              {/* Abstract Vector Accent inside the card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-[#3A9AFF]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

              {/* Left Side: Image */}
              <div className="w-full lg:w-5/12 relative aspect-video lg:aspect-auto shrink-0 bg-gray-100 p-2">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
                  <Image 
                    src={historyData[activeIndex].image}
                    alt={`AMKOV History ${historyData[activeIndex].year}`}
                    fill
                    className="object-cover transition-transform duration-[1.5s] hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
              </div>

              {/* Right Side: Text Description (Scrollable for long text) */}
              <div className="w-full lg:w-7/12 flex flex-col p-8 lg:p-12 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-[#023047]">
                    {historyData[activeIndex].year}
                  </h3>
                  <div className="h-0.5 w-12 bg-[#3A9AFF] rounded-full"></div>
                </div>
                
                {/* Scrollable text container */}
                <div className="text-gray-600 text-sm md:text-base leading-[1.8] max-h-[220px] overflow-y-auto pr-4 custom-scrollbar">
                  {historyData[activeIndex].text}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* ========================================= */}
      {/* 5. SCROLL DOWN INDICATOR */}
      {/* ========================================= */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 z-20"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest mb-1 text-gray-400">Scroll</span>
        <MousePointer2 size={16} className="mb-1" />
        <ChevronDown size={14} className="opacity-50" />
      </motion.div>

      {/* Tailwind CSS adjustments for scrollbars */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Hide scrollbar for the horizontal timeline */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        /* Elegant thin scrollbar for the long text content */
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #3A9AFF; }
      `}} />
    </section>
  );
}