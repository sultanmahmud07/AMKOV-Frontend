"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Reliable, high-quality images mapped to your Amkov categories
const categoryData = [
  {
    id: "optical-zoom",
    title: "Optical Zoom Camera",
    description: "Long-range photography with crystal clear detail.",
    // DSLR with a large optical zoom lens attached
    image: "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?q=80&w=600&auto=format&fit=crop",
    href: "/shop/optical-zoom-camera",
  },
  {
    id: "digital-zoom",
    title: "Digital Zoom Camera",
    description: "Compact and efficient digital scaling for everyday capture.",
    // Compact silver point-and-shoot digital camera
    image: "https://images.unsplash.com/photo-1585565804112-f201f68c48b4?q=80&w=600&auto=format&fit=crop",
    href: "/shop/digital-zoom-camera",
  },
  {
    id: "v-log",
    title: "V-Log Camera",
    description: "Designed for content creators with external mic support.",
    // Mirrorless camera mounted on a vlogging tripod
    image: "https://images.pexels.com/photos/3545426/pexels-photo-3545426.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/shop/v-log-camera",
  },
  {
    id: "video-cam",
    title: "Video Camera",
    description: "High-definition camcorders for capturing moving moments.",
    // Professional video camcorder
    image: "https://images.pexels.com/photos/2513993/pexels-photo-2513993.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/shop/video-camera",
  },
  {
    id: "waterproof",
    title: "Waterproof Camera",
    description: "Rugged, submersible gear for adventure photography.",
    // Rugged action camera (GoPro style)
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop",
    href: "/shop/waterproof-camera",
  },
  {
    id: "instant-print",
    title: "Instant Print Camera",
    description: "Snap and share immediately with built-in printing.",
    // Pink instant print camera (Polaroid/Instax style)
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=600&auto=format&fit=crop",
    href: "/shop/instant-print-camera",
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="container mx-auto">
        
        {/* Modern Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-1 max-w-2xl">
            <div className="inline-block px-3 bg-[#3A9AFF]/10 rounded-full">
              <span className="text-xs font-bold text-[#3A9AFF] uppercase tracking-wider">Our Collections</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-[#023047] tracking-tight">
              Shop By Categories
            </h2>
            <p className="text-gray-500 text-base lg:text-lg">
              Explore our specialized range of digital imaging solutions tailored for every need and environment.
            </p>
          </div>
          
          <Link 
            href="/categories" 
            className="hidden md:flex items-center gap-2 text-sm font-bold text-[#023047] hover:text-[#3A9AFF] transition-colors pb-2 border-b-2 border-transparent hover:border-[#3A9AFF]"
          >
            VIEW ALL CATEGORIES <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {categoryData.map((item) => (
            <Link 
              key={item.id} 
              href={item.href}
              className="group relative flex items-center bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(58,154,255,0.12)] hover:border-[#3A9AFF]/20 transition-all duration-500 ease-out hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Subtle hover background gleam */}
              <div className="absolute inset-0 bg-linear-to-br from-[#3A9AFF]/0 to-[#3A9AFF]/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Image Container with Animation */}
              <div className="relative w-28 h-28 lg:w-32 lg:h-32 shrink-0 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                  sizes="(max-width: 768px) 112px, 128px"
                />
              </div>

              {/* Text Content */}
              <div className="ml-5 flex flex-col justify-center flex-1 z-10">
                <h3 className="text-lg lg:text-xl font-bold text-[#023047] group-hover:text-[#3A9AFF] transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="mt-1.5 text-sm text-gray-500 line-clamp-2 pr-4 transition-colors duration-300 group-hover:text-gray-600">
                  {item.description}
                </p>

                {/* Modern Animated Link Button */}
                <div className="mt-4 flex items-center">
                   <span className="text-sm font-bold text-[#023047] group-hover:text-[#3A9AFF] transition-colors duration-300">
                     Shop Now
                   </span>
                   {/* Arrow slides in and changes color */}
                   <div className="ml-2 flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-400 group-hover:bg-[#3A9AFF] group-hover:text-white transition-all duration-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                     <ArrowRight size={14} strokeWidth={2.5} />
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile "View All" button */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link 
            href="/categories" 
            className="flex items-center gap-2 text-sm font-bold text-white bg-[#023047] px-6 py-3 rounded-full hover:bg-[#3A9AFF] transition-colors"
          >
            VIEW ALL CATEGORIES <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CategoryGrid;