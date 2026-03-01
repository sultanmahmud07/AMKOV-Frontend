"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Target, Eye, Gem } from "lucide-react";

// --- CULTURE DATA ---
const cultureData = [
  {
    id: 1,
    title: "Logo Meaning",
    desc: "The Perfect Combination of Intelligence and Vision.",
    watermark: "LOGO",
    icon: Sparkles,
    image: "/about/culture/1.jpg", // Placeholder - replace with actual image URL
    tags: []
  },
  {
    id: 2,
    title: "Our Mission",
    desc: "To Make a Difference in the world of digital imaging.",
    watermark: "MISSION",
    icon: Target,
    image: "/about/culture/2.jpg",
    tags: []
  },
  {
    id: 3,
    title: "Our Vision",
    desc: "Make AMKOV your Well-laying Choice for global partnerships.",
    watermark: "VISION",
    icon: Eye,
    image: "/about/culture/3.jpg", 
    tags: []
  },
  {
    id: 4,
    title: "Our Values",
    desc: "The core principles that drive our innovation and teamwork.",
    watermark: "VALUES",
    icon: Gem,
    image: "/about/culture/4.jpg", 
    tags: [
      "Passion", "Commitment", "Responsibility", 
      "Appreciation", "Give", "Trust", 
      "Win-win", "Possibility"
    ]
  }
];

export default function Culture() {
  // Set the first item as active by default
  const [active, setActive] = useState<number>(0);

  return (
    <section className="py-10 lg:py-20 bg-white overflow-hidden">
      <div className="main-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#023047] tracking-tight mb-4"
            >
              AMKOV Culture
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1.5 bg-[#3A9AFF] rounded-full"
            />
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-sm text-sm md:text-base"
          >
            Discover the philosophy, vision, and core values that have driven our digital imaging innovation for over two decades.
          </motion.p>
        </div>

        {/* ========================================= */}
        {/* INTERACTIVE EXPANDING ACCORDION */}
        {/* ========================================= */}
        <div className="flex flex-col lg:flex-row h-[800px] lg:h-[600px] w-full gap-4">
          
          {cultureData.map((item, index) => {
            const isActive = active === index;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)} // Expands on hover for Desktop
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  layout: { type: "spring", stiffness: 60, damping: 15 },
                  opacity: { duration: 0.5, delay: index * 0.1 }
                }}
                className={`relative overflow-hidden rounded-4xl cursor-pointer group flex items-end ${
                  isActive ? "flex-4 lg:flex-5" : "flex-1"
                }`}
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Dark Gradient Overlay for Readability */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive ? "bg-linear-to-t from-[#023047] via-[#023047]/60 to-transparent opacity-90" : "bg-[#023047]/60"
                }`} />

                {/* Massive Watermark Text (Only visible when active) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-10 -right-10 text-[80px] lg:text-[140px] font-black tracking-tighter text-white/5 select-none pointer-events-none origin-bottom-right"
                    >
                      {item.watermark}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Content Container */}
                <div className="relative z-10 w-full p-6 md:p-8 flex flex-col h-full justify-end">
                  
                  {/* Icon & Title (Always Visible) */}
                  <div className={`flex items-center gap-4 transition-all duration-300 ${isActive ? "mb-4" : "mb-0"}`}>
                    <div className={`flex items-center justify-center shrink-0 rounded-full transition-colors ${
                      isActive ? "w-12 h-12 bg-[#3A9AFF] text-white" : "w-10 h-10 bg-white/20 text-white backdrop-blur-sm"
                    }`}>
                      <Icon size={isActive ? 24 : 20} />
                    </div>
                    {/* On Desktop, hide text if inactive to keep pillars clean. Show on mobile always. */}
                    <h3 className={`text-white font-bold whitespace-nowrap transition-all duration-300 ${
                      isActive ? "text-2xl md:text-3xl opacity-100" : "text-lg lg:opacity-0 lg:translate-x-4"
                    }`}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Expanded Content (Only visible when active) */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isActive ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-6">
                      {item.desc}
                    </p>

                    {/* Tags for Values */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 max-w-xl">
                        {item.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm font-semibold text-white border border-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}