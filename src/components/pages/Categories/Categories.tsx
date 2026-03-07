"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Send, Headset, LayoutGrid } from 'lucide-react';
import TopBanner from './TopBanner';

// --- MOCK DATA ---
const categoryData = [
  {
    id: "optical-zoom",
    title: "Optical Zoom Camera",
    description: "Long-range photography with crystal clear optical detail and precision.",
    image: "/category/1.jpg",
    href: "/shop/optical-zoom",
    itemCount: 12,
  },
  {
    id: "digital-zoom",
    title: "Digital Zoom Camera",
    description: "Compact and efficient digital scaling for everyday capture.",
    image: "/category/2.jpg",
    href: "/shop/digital-zoom",
    itemCount: 8,
  },
  {
    id: "v-log",
    title: "V-Log Camera",
    description: "Designed for content creators with external mic support.",
    image: "/category/3.jpg",
    href: "/shop/v-log",
    itemCount: 15,
  },
  {
    id: "video-cam",
    title: "Video Camera",
    description: "High-definition camcorders for capturing moving moments.",
    image: "/category/4.jpg",
    href: "/shop/video",
    itemCount: 6,
  },
  {
    id: "waterproof",
    title: "Waterproof Camera",
    description: "Rugged, submersible gear for adventure photography.",
    image: "/category/5.jpg",
    href: "/shop/waterproof",
    itemCount: 9,
  },
  {
    id: "instant-print",
    title: "Instant Print Camera",
    description: "Snap and share immediately with built-in thermal printing.",
    image: "/category/6.jpg",
    href: "/shop/instant-print",
    itemCount: 4,
  }
];

const popularProducts = [
  {
    id: "p1",
    name: "AMKOV 4K V-Log Master",
    price: "$247.00",
    rating: 5,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=200&auto=format&fit=crop",
    href: "/products/1"
  },
  {
    id: "p2",
    name: "CD-M01 Instant Print",
    price: "$85.00",
    rating: 4,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=200&auto=format&fit=crop",
    href: "/products/2"
  },
  {
    id: "p2",
    name: "CD-M01 Instant Print",
    price: "$85.00",
    rating: 4,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=200&auto=format&fit=crop",
    href: "/products/2"
  },
  {
    id: "p2",
    name: "CD-M01 Instant Print",
    price: "$85.00",
    rating: 4,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=200&auto=format&fit=crop",
    href: "/products/2"
  },
  {
    id: "p3",
    name: "Kids Creative Cam",
    price: "$16.00",
    rating: 5,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=200&auto=format&fit=crop",
    href: "/products/3"
  }
];

// --- FRAMER MOTION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
} as const;
const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
} as const;
const sidebarVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
} as const;


// =========================================
// 2. MAIN PAGE COMPONENT
// =========================================
const Categories = () => {
  return (
    <div className="min-h-screen bg-[#F0F4F8] pb-10 md:pb-24">
      <TopBanner />

      <div className="main-container py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12">
          
          {/* ----------------------------------------- */}
          {/* LEFT SIDEBAR */}
          {/* ----------------------------------------- */}
          <motion.div 
            variants={sidebarVariants}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1 lg:col-span-4 xl:col-span-3 flex flex-col gap-8"
          >
            {/* Unique Angular Popular Products Widget */}
            <div className="bg-white rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
              {/* Subtle Vector Line in BG */}
              <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-gray-50 to-transparent [clip-path:polygon(100%_0,100%_100%,0_100%)] pointer-events-none"></div>
              
              <h3 className="text-lg font-black text-[#023047] mb-6 border-b-2 border-gray-100 pb-3 inline-block">
                Trending Gear
              </h3>
              
              <div className="flex flex-col gap-6 relative z-10">
                {popularProducts.map((product) => (
                  <Link href={product.href} key={product.id} className="flex items-center gap-4 group">
                    <div className="relative w-16 h-16 bg-gray-100 shrink-0 [clip-path:polygon(0_0,100%_0,85%_100%,0_100%)] overflow-hidden">
                      <Image 
                        src={product.image} alt={product.name} fill 
                        className="object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" 
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-[13px] font-bold text-[#023047] group-hover:text-[#3A9AFF] transition-colors line-clamp-2 leading-tight mb-1">
                        {product.name}
                      </h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[15px] font-black text-[#023047]">{product.price}</span>
                        <div className="flex items-center gap-0.5">
                          <Star size={12} className="fill-[#3A9AFF] text-[#3A9AFF]" />
                          <span className="text-xs font-bold text-gray-500 ml-1">{product.rating}.0</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Angular Quotation CTA */}
            <div className="bg-[#023047] p-8 shadow-xl relative overflow-hidden group [clip-path:polygon(0_0,100%_0,100%_90%,90%_100%,0_100%)] rounded-tl-2xl rounded-tr-2xl">
              {/* Geometric Vector Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none group-hover:scale-105 transition-transform duration-700" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 L50 0 L100 100 Z" fill="none" stroke="#3A9AFF" strokeWidth="0.5" />
                <path d="M-20 120 L50 -20 L120 120 Z" fill="none" stroke="#3A9AFF" strokeWidth="1" />
              </svg>
              
              <div className="relative z-10 flex flex-col">
                <Headset size={36} strokeWidth={1.5} className="text-[#3A9AFF] mb-5" />
                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-wide">
                  OEM / Bulk
                </h3>
                <p className="text-slate-400 text-sm mb-8 font-light">
                  Partner with AMKOV for custom manufacturing and exclusive volume pricing.
                </p>
                <button className="w-full py-4 bg-[#3A9AFF] hover:bg-white hover:text-[#023047] text-white font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 [clip-path:polygon(0_0,95%_0,100%_50%,95%_100%,0_100%)] pl-2 pr-4">
                  Request Quote <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* ----------------------------------------- */}
          {/* RIGHT CONTENT (Angled Category Cards) */}
          {/* ----------------------------------------- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="order-1 lg:order-2 lg:col-span-8 xl:col-span-9 grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-8"
          >
            {categoryData.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <Link
                  href="/products?category=optical-zoom"
                  className="group relative flex flex-col sm:flex-row bg-white overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(58,154,255,0.15)] transition-all duration-500 h-full min-h-[220px]"
                >
                  {/* Background Abstract Vector (Visible on right side behind text) */}
                  <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none overflow-hidden">
                    <svg viewBox="0 0 100 100" className="w-full h-full transform translate-x-10 scale-150 group-hover:rotate-12 transition-transform duration-1000">
                      <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="currentColor" />
                    </svg>
                  </div>

                  {/* Image Left Side - WITH ANGULAR CLIP PATH */}
                  {/* On Mobile: Bottom is slanted. On Desktop: Right side is slanted inward */}
                  <div className="relative w-full sm:w-[45%] h-[200px] sm:h-auto shrink-0 bg-gray-900 overflow-hidden [clip-path:polygon(0_0,100%_0,100%_90%,0_100%)] sm:[clip-path:polygon(0_0,100%_0,85%_100%,0_100%)] z-10 transition-all duration-500 group-hover:sm:[clip-path:polygon(0_0,100%_0,92%_100%,0_100%)]">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, 300px"
                    />
                    
                    {/* Floating Item Count on Image */}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm border border-white/20">
                      {category.itemCount} Items
                    </div>
                  </div>

                  {/* Content Right Side */}
                  <div className="p-6 md:p-8 flex flex-col justify-center grow relative z-20 sm:-ml-4">
                    <h3 className="text-xl md:text-2xl font-black text-[#023047] mb-3 group-hover:text-[#3A9AFF] transition-colors leading-tight uppercase tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 relative z-10">
                      {category.description}
                    </p>

                    {/* Tech Arrow Link */}
                    <div className="flex items-center text-[#023047] group-hover:text-[#3A9AFF] font-black text-xs uppercase tracking-widest mt-auto transition-colors">
                      <span className="border-b-2 border-transparent group-hover:border-[#3A9AFF] pb-1 transition-all">Explore</span>
                      <ArrowRight size={18} className="ml-3 transform group-hover:translate-x-3 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Categories;