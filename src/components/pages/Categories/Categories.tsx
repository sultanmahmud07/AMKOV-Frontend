"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Camera } from 'lucide-react';

// Define the Category interface
interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  itemCount: number;
}

// Camera Category Data
const categoryData: Category[] = [
  {
    id: "optical-zoom",
    title: "Optical Zoom Camera",
    description: "Long-range photography with crystal clear optical detail.",
    image: "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?q=80&w=800&auto=format&fit=crop",
    href: "/shop/optical-zoom",
    itemCount: 12,
  },
  {
    id: "digital-zoom",
    title: "Digital Zoom Camera",
    description: "Compact and efficient digital scaling for everyday capture.",
    image: "https://images.unsplash.com/photo-1585565804112-f201f68c48b4?q=80&w=800&auto=format&fit=crop",
    href: "/shop/digital-zoom",
    itemCount: 8,
  },
  {
    id: "v-log",
    title: "V-Log Camera",
    description: "Designed for content creators with external mic support.",
    image: "https://images.pexels.com/photos/3545426/pexels-photo-3545426.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/shop/v-log",
    itemCount: 15,
  },
  {
    id: "video-cam",
    title: "Video Camera",
    description: "High-definition camcorders for capturing moving moments.",
    image: "https://images.pexels.com/photos/2513993/pexels-photo-2513993.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/shop/video",
    itemCount: 6,
  },
  {
    id: "waterproof",
    title: "Waterproof Camera",
    description: "Rugged, submersible gear for adventure photography.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop",
    href: "/shop/waterproof",
    itemCount: 9,
  },
  {
    id: "instant-print",
    title: "Instant Print Camera",
    description: "Snap and share immediately with built-in thermal printing.",
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=800&auto=format&fit=crop",
    href: "/shop/instant-print",
    itemCount: 4,
  }
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 }
  },
} as const;

const Categories = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]  pb-16 pt-10 lg:pb-24">
      <div className="container mx-auto">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-4 text-[#3A9AFF] font-bold tracking-wider uppercase text-sm"
          >
            <Camera size={18} />
            <span>Our Collections</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[#023047] mb-6"
          >
            Shop by Category
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            From professional vlogging setups to rugged underwater gear, find the perfect digital imaging solution for your next project.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categoryData.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <Link 
                href={category.href}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full"
              >
                {/* Image Wrapper */}
                <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-100">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Item Count Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#023047] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {category.itemCount} Products
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col grow">
                  <h3 className="text-2xl font-bold text-[#023047] mb-3 group-hover:text-[#3A9AFF] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-8 grow">
                    {category.description}
                  </p>
                  
                  {/* Animated 'Explore' Link */}
                  <div className="flex items-center text-[#3A9AFF] font-bold text-sm uppercase tracking-wider mt-auto">
                    Explore Series
                    <ArrowRight 
                      size={18} 
                      className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Categories;