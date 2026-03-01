"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// --- EXPANDED HISTORY DATA (2003 - 2025) ---
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
    year: "2014",
    image: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=1000&auto=format&fit=crop",
    text: "Expanded our global distribution channels, partnering with major retail chains across Europe and North America to bring AMKOV products to a wider audience."
  },
  {
    year: "2016",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop",
    text: "Launched our first generation of creative cameras specifically designed for kids and outdoor sports, expanding our market reach beyond traditional digital cameras."
  },
  {
    year: "2017",
    image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=1000&auto=format&fit=crop",
    text: "Introduced advanced optical stabilization systems into our compact camera lines, setting a new industry standard for affordable, high-quality video capture."
  },
  {
    year: "2018",
    image: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=1000&auto=format&fit=crop",
    text: "Reached a major milestone of 5 million units sold globally. We also began early research into AI-assisted image processing algorithms."
  },
  {
    year: "2021",
    image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=1000&auto=format&fit=crop",
    text: "Achieved breakthroughs in instant print camera technology, bringing joy and immediate physical memories to thousands of customers worldwide."
  },
  {
    year: "2022",
    image: "https://images.unsplash.com/photo-1580828369019-2238b6938a53?q=80&w=1000&auto=format&fit=crop",
    text: "Opened a state-of-the-art, automated manufacturing facility in Shenzhen to drastically increase production capacity while reducing our carbon footprint."
  },
  {
    year: "2024",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1000&auto=format&fit=crop",
    text: "Embraced advanced AI algorithms for autofocus and image processing, launching our newest line of V-Log and Action cameras."
  },
  {
    year: "2025",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    text: "Celebrating over two decades of innovation. AMKOV continues to redefine digital imaging, pushing the boundaries of what is possible in compact consumer electronics."
  }
];

export default function History() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the timeline so the active year is always visible
  useEffect(() => {
    if (timelineRef.current) {
      const activeElement = timelineRef.current.children[activeIndex + 1] as HTMLElement; // +1 to account for the background line div
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeIndex]);

  return (
    <section className="pt-10 lg:pt-20 bg-[#F8FAFC] overflow-hidden">
      <div className="main-container mx-auto md:px-8 lg:px-12 max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-5 lg:mb-6 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#023047] mb-6 tracking-tight"
          >
            AMKOV Story
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 leading-relaxed text-lg mb-5"
          >
            AMKOV was registered worldwide at 2013, while behind it, was a 22 years&apos; cultivation in the camera industry. Follow the timeline to see our history, progress, and future orientation.
          </motion.p>
        </div>

        {/* ========================================= */}
        {/* MAIN LAYOUT: Left Timeline + Right Content */}
        {/* ========================================= */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 pt-5">
          
          {/* ----------------------------------------- */}
          {/* LEFT SIDE: Scrollable Timeline Slider */}
          {/* ----------------------------------------- */}
          <div className="w-full md:w-[180px] shrink-0 relative">
            
            {/* Scroll Fades for Desktop (Indicates more content above/below) */}
            <div className="hidden md:block absolute top-0 left-0 w-full h-8 bg-linear-to-b from-[#F8FAFC] to-transparent z-20 pointer-events-none"></div>
            <div className="hidden md:block absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-[#F8FAFC] to-transparent z-20 pointer-events-none"></div>

            <div 
              ref={timelineRef}
              className="relative flex flex-row md:flex-col overflow-x-auto md:overflow-y-auto max-h-[500px] pb-6 md:pb-12 md:pt-4 scrollbar-hide snap-x md:snap-y"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              
              {/* Background Line */}
              <div className="absolute top-7  left-0 w-[200%] h-0.5 md:w-0.5 md:h-[200%] md:top-0 md:left-[11px] bg-gray-200 z-0"></div>

              {historyData.map((item, index) => {
                const isActive = index === activeIndex;
                const isPast = index < activeIndex;

                return (
                  <button 
                    key={item.year}
                    onClick={() => setActiveIndex(index)}
                    className="relative flex flex-col md:flex-row items-center md:items-start md:justify-start min-w-[100px] md:min-w-0 md:py-8 group z-10 focus:outline-none snap-center md:snap-start"
                  >
                    {/* The Dot */}
                    <div className="h-14 flex items-center md:items-start md:h-auto shrink-0">
                      <div className={`w-6 h-6 rounded-full border-4 transition-all duration-300 bg-white shadow-sm mt-0 md:mt-1 ${
                        isActive 
                          ? "border-[#3A9AFF] bg-[#3A9AFF] scale-125 shadow-[0_0_15px_rgba(58,154,255,0.4)]" 
                          : isPast
                          ? "border-[#3A9AFF]"
                          : "border-gray-300 group-hover:border-gray-400"
                      }`} />
                    </div>
                    
                    {/* The Year Label */}
                    <span className={`mt-3 md:mt-0 md:ml-6 text-lg md:text-xl font-extrabold transition-colors duration-300 ${
                      isActive ? "text-[#3A9AFF]" : "text-gray-400 group-hover:text-gray-600"
                    }`}>
                      {item.year}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ----------------------------------------- */}
          {/* RIGHT SIDE: Animated Content Area */}
          {/* ----------------------------------------- */}
          <div className="flex-1 relative min-h-[450px] mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-xl p-4 md:p-6 lg:p-6 shadow-xl border border-gray-100 flex flex-col lg:flex-row gap-4 lg:gap-6 items-center "
              >
                
                {/* Image */}
                <div className="w-full lg:w-1/2 relative aspect-4/3 rounded-2xl overflow-hidden shadow-md bg-gray-50 shrink-0">
                  <Image 
                    src={historyData[activeIndex].image}
                    alt={`AMKOV History ${historyData[activeIndex].year}`}
                    fill
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#023047]/5 mix-blend-overlay"></div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-4xl lg:text-5xl font-extrabold text-[#023047] mb-6">
                    {historyData[activeIndex].year}
                  </h3>
                  <div className="w-12 h-1 bg-[#3A9AFF] mb-6 rounded-full"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {historyData[activeIndex].text}
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Tailwind utility for hiding scrollbar while keeping functionality */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}