"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Globe, ShieldCheck } from "lucide-react";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring" as const, stiffness: 50, damping: 15 } 
  },
};

export default function Company() {
  return (
    <section className="py-16 lg:py-28 bg-white overflow-hidden">
      <div className="main-container mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ========================================= */}
          {/* LEFT SIDE: TEXT CONTENT */}
          {/* ========================================= */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-[#3A9AFF] rounded-full"></div>
              <span className="text-[#3A9AFF] font-bold uppercase tracking-wider text-sm">
                Company Overview
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-[#023047] mb-8 leading-tight">
              About AMKOV
            </motion.h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <motion.p variants={itemVariants}>
                Shenzhen Amkovery Technology Co., Ltd is a company with <strong>22 years&apos; experience</strong> dealing with photo & video products. We are specialized in products design, development and production. Our main products are Optical Zoom Camera, Digital Camera, Instant Print Camera, Creative Camera for Kids, Outdoor Special Camera etc.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                Amkovery witnessed the development of the camera industry from film cameras to digital cameras. After years of learning, accumulating and progressing, our brand <strong>AMKOV has been registered worldwide since 2013</strong>. Depending on our experience and data, our team works hard in developing and improving products to provide everyone with valuable imaging solutions.
              </motion.p>
            </div>

            {/* Philosophy Highlight Block */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 p-6 bg-[#F8FAFC] border-l-4 border-[#3A9AFF] rounded-r-2xl shadow-sm relative"
            >
              <h4 className="font-bold text-[#023047] mb-2 flex items-center gap-2">
                <ShieldCheck size={20} className="text-[#3A9AFF]" />
                Our Design Philosophy
              </h4>
              <p className="text-gray-600 italic">
                &apos;Inspiration comes from life, creativity comes from experience, we work happily and live happily. Choosing AMKOV will bring you an excellent and wonderful visual experience. Let&apos;s move towards a future of co-creation and win-win.&apos;
              </p>
            </motion.div>

            {/* Key Stats Row */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#3A9AFF]/10 flex items-center justify-center text-[#3A9AFF] shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-[#023047]">22+</h4>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#3A9AFF]/10 flex items-center justify-center text-[#3A9AFF] shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-[#023047]">2013</h4>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Global Brand Est.</p>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* ========================================= */}
          {/* RIGHT SIDE: IMAGE WITH ANIMATION */}
          {/* ========================================= */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 40 }}
            className="relative lg:h-[700px] w-full flex items-center"
          >
            {/* Decorative Background Shape */}
            <div className="absolute top-10 -left-10 w-full h-[90%] bg-[#F8FAFC] rounded-[40px] z-0 hidden md:block"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 w-full aspect-4/5 lg:h-[85%] rounded-4xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
              
              {/* NOTE: Replace this image src with your actual AMKOV building image URL */}
              <Image 
                src="/about/about-company.jpg" // Placeholder - replace with actual image URL
                alt="AMKOV Headquarters"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Subtle Overlay to make the image look premium */}
              <div className="absolute inset-0 bg-linear-to-t from-[#023047]/40 via-transparent to-transparent opacity-60"></div>
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-[#3A9AFF] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  HQ
                </div>
                <div>
                  <p className="text-[#023047] font-bold text-lg leading-tight">Shenzhen</p>
                  <p className="text-gray-500 text-sm">Technology Co., Ltd</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}