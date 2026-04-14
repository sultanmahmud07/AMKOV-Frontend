"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- EXPANDED HISTORY DATA WITH LONGER TEXT ---
const historyData = [
  {
    year: "2003",
    image: "/about/story/3.jpg",
    text: "In 2003, KIM LEE, the founder of AMKOV, entered the camera manufacturing industry and experienced the transition from CCD cameras to CMOS cameras. More importantly, AMKOV realized how important it was to do every detail well for the quality of a camera."
  },
  {
    year: "2007",
    image: "/about/story/7.jpg",
    text: "In 2007, AMKOV established a factory in Dongguan -- Dongguan Amkovery (Huirui Technology) -- and participated in the structural design, mold development, and production of camera housings and components for digital cameras.  They manufactured parts for some well-known camera Brands and also sold digital cameras and digital camcorders."
  },
  {
    year: "2010",
    image: "/about/story/10.jpg",
    text: "In 2010, AMKOV independently developed its first camera (DC-110). In the same year, we registered the Brand - AMKOV, for manufacturing cameras. From then on, AMKOV officially started manufacturing digital cameras."
  },
  {
    year: "2013",
    image: "/about/story/13.jpg",
    text: "In 2013, AMKOV successfully developed two optical zoom cameras: the DC-110H and the DC-X3. The DC-110 is a 5x optical zoom compact camera equipped with an 8MP sensor. The DC-X3 is a 5x optical zoom camera equipped with a 16MP sensor, supporting 1080P video recording and film scanning functions.  It also holds a registered utility model patent in Germany."
  },
  {
    year: "2014",
    image: "/about/story/14.jpg",
    text: "In 2014, AMKOV developed the sports camera (AMK-5000S), a product that made AMKOV famous in the market. Later, we continued to develop sports camera Models: AMK-6000, AMK-7000"
  },
  {
    year: "2016",
    image: "/about/story/16.jpg",
    text: "In 2016, AMKOV successfully developed the optical zoom CD-OX5 mobile phone lens camera and successfully applied for a patent. In the same year, it developed a second digital camera, CDR2, and its classic design led to a successful patent registration in the United States."
  },
  {
    year: "2017",
    image: "/about/story/17.jpg",
    text: " In 2017, the AMKOV panoramic camera (Model: V360) was successfully launched. This camera boasted the smallest size in the industry at the time and was the first panoramic camera with a screen. It was exhibited at the Hong Kong Spring Electronics Fair in 2017 and received market recognition."
  },
  {
    year: "2018",
    image: "/about/story/18.jpg",
    text: "In 2018, AMKOV developed children's cameras and thermal printers, and successfully applied for a national invention patent. This series of cameras is also a product for which AMKOV is known in the market."
  },
  {
    year: "2021",
    image: "/about/story/21.jpg",
    text: "In 2021, AMKOV developed the Children's Magic Camera (AMK-M1), designed to inspire children's creativity.  This product features a unique AI scene replacement function, complete with a green screen, allowing children to create their own imaginative backgrounds and learn video creation and editing through the camera."
  },
  {
    year: "2022",
    image: "/about/story/22.jpg",
    text: "In 2022, AMKOV launched the V-LOG camera (CD-V01), specifically designed for V-loggers. It offers enhanced video quality and ease of use, making it an ideal tool for content creators."
  },
  {
    year: "2024",
    image: "/about/story/24.jpg",
    text: "In 2024, AMKOV launched the beauty camera (CD-F3L), which features a beauty fill light and beauty function. The fill light provides significant illumination in dark environments.  That same year, they also launched the optical zoom V-LOG camera (CD-R5H)."
  },
  {
    year: "2025",
    image: "/about/story/25.jpg",
    text: "As we enter 2025, our journey continues to advance in optical zoom cameras, digital cameras, and digital video. We look forward to launching more innovative products to meet the evolving needs of our customers."
  }
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
            AMKOV was registered worldwide at 2013, while behind it, was a 22 years’ cultivation in the camera industry. Here we would like to follow the time clue to show you AMKOV history, progressing and future orientation.
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
                    <div className={`w-2.5 h-2.5 rotate-45 rounded-sm transition-all duration-300 z-10 ${isPast ? "bg-[#3A9AFF]" : "bg-gray-300 group-hover:bg-[#3A9AFF]/50"
                      }`} />
                  </div>

                  {/* Year Text */}
                  <span className={`text-sm font-bold transition-colors duration-300 ${isActive ? "text-[#3A9AFF]" : "text-gray-500 group-hover:text-[#3A9AFF]"
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
                    width={800}
                    height={600}
                    className="w-full transition-transform duration-[1.5s] hover:scale-105"
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

    </section>
  );
}