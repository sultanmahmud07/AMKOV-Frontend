'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

// All product categories exactly as requested
const categoryLinks = [
  { name: 'Optical Zoom Camera', slug: 'optical-zoom-camera' },
  { name: 'Digital Zoom Camera', slug: 'digital-zoom-camera' },
  { name: 'V-Log Camera', slug: 'v-log-camera' },
  { name: 'Video Camera', slug: 'video-camera' },
  { name: 'Waterproof Camera', slug: 'waterproof-camera' },
  { name: 'Instant Print Camera', slug: 'instant-print-camera' },
  { name: 'Kids Camera', slug: 'kids-camera' },
];

export default function CategoryMenubar() {
  const pathname = usePathname();

  return (
    <div className="w-full bg-white border-b border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative z-30">
      <div className="max-w-[1400px] mx-auto px-4">
        
        {/* Scrollable container for mobile, centered on desktop */}
        <ul className="flex items-center justify-start xl:justify-center gap-2 md:gap-4 overflow-x-auto custom-scrollbar">
          
          {categoryLinks.map(({ name, slug }) => {
            const href = `/category/${slug}`;
            const isActive = pathname === href;

            return (
              <li key={slug} className="relative shrink-0">
                <Link
                  href={href}
                  className={`relative flex items-center justify-center h-16 px-4 md:px-5 text-sm font-bold transition-all duration-300 group outline-none ${
                    isActive ? 'text-[#3A9AFF]' : 'text-[#023047] hover:text-[#3A9AFF]'
                  }`}
                >
                  {/* 1. HOVER ANIMATION: Soft rounded background that fades in */}
                  <span className="absolute inset-y-3 inset-x-1 rounded-xl bg-[#F4F7F9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                  {/* 2. TEXT ANIMATION: Slight physical lift on hover */}
                  <span className="group-hover:-translate-y-0.5 transition-transform duration-300">
                    {name}
                  </span>

                  {/* 3. ACTIVE SHAPE/VECTOR: Animated SVG Curve */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryShape" // This makes the shape smoothly slide between links!
                      className="absolute bottom-0 left-0 w-full flex justify-center"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    >
                      {/* Custom Vector Tab Shape with a glowing shadow */}
                      <svg
                        width="48"
                        height="6"
                        viewBox="0 0 48 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#3A9AFF] drop-shadow-[0_-3px_6px_rgba(58,154,255,0.5)]"
                      >
                        <path
                          d="M0 6C12 6 18 0 24 0C30 0 36 6 48 6H0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </motion.div>
                  )}
                </Link>
              </li>
            );
          })}

        </ul>
      </div>

      {/* Hide scrollbar for mobile swiping */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}