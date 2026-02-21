"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// 1. Explicit TypeScript Interface to solve type errors
interface Article {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
}

// 2. Updated data with the new 3rd image URL
const articles: Article[] = [
  {
    id: "vlogging-tips",
    title: "10 Essential Tips for Vlogging in Low Light Environments",
    category: "Tutorials",
    image: "https://images.unsplash.com/photo-1551636898-47668aa61de2?q=80&w=800&auto=format&fit=crop",
    href: "/blog/vlogging-low-light",
  },
  {
    id: "optical-digital-zoom",
    title: "Optical vs. Digital Zoom: Which Camera Gear is Right for You?",
    category: "Gear Guide",
    image: "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?q=80&w=800&auto=format&fit=crop",
    href: "/blog/optical-vs-digital-zoom",
  },
  {
    id: "landscape-photography",
    title: "Mastering Landscape Photography on Your Next Adventure",
    category: "Tips & Tricks",
    // Replaced 3rd image with a high-quality landscape/adventure photography shot
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
    href: "/blog/landscape-photography",
  },
];

// 3. Explicitly typed Framer Motion Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  }, 
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 80, damping: 15 } 
  },
};

export default function PopularArticles() {
  return (
    <section className="pb-12 lg:pb-20 bg-white">
      <div className="container mx-auto ">
        
        {/* Header with the center-aligned horizontal line behind it */}
        <div className="relative flex items-center justify-center mb-12">
          {/* Faint horizontal line */}
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          {/* Title sitting on top with a white background masking the line */}
          <div className="relative bg-white px-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#023047] tracking-tight">
              Most Popular Articles
            </h2>
          </div>
        </div>

        {/* Article Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {articles.map((article) => (
            <motion.div 
              key={article.id} 
              variants={cardVariants}
              // Added Framer Motion hover animation for a premium lifting effect
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
            >
              <Link 
                href={article.href}
                className="group relative block h-80 lg:h-[380px] w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500"
              >
                {/* Background Image */}
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Dark Gradient Overlay for text legibility */}
                <div className="absolute inset-0 bg-linear-to-t from-[#023047]/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                {/* Content Container (Anchored to bottom) */}
                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 flex flex-col justify-end z-10">
                  
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block bg-[#3A9AFF] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded shadow-sm">
                      {article.category}
                    </span>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-white font-bold text-lg lg:text-xl line-clamp-3 leading-snug group-hover:text-[#3A9AFF] transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}