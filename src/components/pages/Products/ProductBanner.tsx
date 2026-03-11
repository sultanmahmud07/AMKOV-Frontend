"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductBannerSimpleProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function ProductBanner({
  title = "Product",
  subtitle = "Discover the next generation of AMKOV camera technology.",
  // Placeholder matching your dark, blue-tinted lens reference image
  backgroundImage = "/product/product-banner.jpg",
}: ProductBannerSimpleProps) {
  return (
    <section className="relative w-full h-[350px] md:h-[450px] overflow-hidden bg-[#0a0f16] flex flex-col items-center justify-center">
      
      {/* ========================================= */}
      {/* 1. CONTINUOUS BACKGROUND ANIMATION */}
      {/* ========================================= */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover object-center opacity-60"
          priority
        />
      </motion.div>

      {/* ========================================= */}
      {/* 2. CINEMATIC GRADIENT OVERLAYS */}
      {/* ========================================= */}
      {/* Darkens the edges so the text stays readable */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-black/80 z-0" />
      {/* Deep blue blend at the bottom to match the brand color */}
      <div className="absolute inset-0 bg-linear-to-t from-[#023047]/80 via-transparent to-black/40 z-0" />

      {/* ========================================= */}
      {/* 3. CENTERED TEXT CONTENT */}
      {/* ========================================= */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-2xl mb-4"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 font-medium drop-shadow-md"
        >
          {subtitle}
        </motion.p>

        {/* Glowing Accent Underline */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "80px" }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="h-1 bg-[#3A9AFF] mt-8 rounded-full shadow-[0_0_15px_rgba(58,154,255,0.8)]"
        />
        
      </div>
    </section>
  );
}