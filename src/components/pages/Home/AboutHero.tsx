"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section 
      className="relative mt-5 md:mt-10 w-full py-[10%] min-h-[400px] md:min-h-[500px] flex items-center bg-fixed bg-cover bg-no-repeat"
      style={{ 
        // Using your exact background image URL and positioning
        backgroundImage: "url('https://omo-oss-image1.thefastimg.com/portal-saas/pg2024112918520657832/cms/image/1306694c-869b-471b-8bd2-3b7e48435185.jpg')",
        backgroundPosition: "bottom center"
      }}
    >
      {/* Subtle Gradient Overlay: 
        This darkens the left side slightly so the white text is always readable 
        no matter what screen size the user is on, while keeping the building visible.
      */}
      <div className="absolute inset-0 bg-black/20 md:bg-linear-to-r md:from-secondary/30 md:via-black/5 md:to-transparent z-0 pointer-events-none"></div>

      {/* Content Container */}
      <div className="main-container relative z-10 w-full">
        <div className="max-w-2xl text-white">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight drop-shadow-md"
          >
            About AMKOV
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base leading-6 text-gray-100 font-light mb-8 drop-shadow-md"
          >
            Shenzhen Amkovery Technology Co,. Ltd is a company with 22 years’ experience dealing with photo &video products. We are specialized in products design, development and production. Our main products are Optical Zoom Camera, Digital Camera, Instant Print Camera, Creative Camera for Kids, Outdoor Special Camera etc. Amkovery witnessed the development of camera industry from film cameras to digital cameras. We have been focusing on photo&video products and keeping exploring, developing and progressing ourselves into this industry.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="/about#company" 
              className="inline-block px-8 py-2.5 rounded-full border border-white text-white text-sm font-medium hover:bg-white hover:text-[#023047] transition-colors duration-300 backdrop-blur-sm bg-white/5"
            >
              Learn More
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}