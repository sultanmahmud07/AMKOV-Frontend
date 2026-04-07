"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Search } from "lucide-react";

// CSS Imports
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "react-photo-view/dist/react-photo-view.css";

const certificates = [
  "/certificates/c1.jpg",
  "/certificates/c1.jpg",
  "/certificates/c1.jpg",
  "/certificates/c1.jpg",
  "/certificates/c1.jpg",
  "/certificates/c1.jpg",
  "/certificates/c1.jpg",
  "/certificates/c1.jpg",
  "/certificates/c1.jpg",
  "/certificates/c1.jpg",
  "/certificates/c1.jpg",
  "/certificates/c1.jpg",
  "/certificates/c1.jpg",
  "/certificates/c1.jpg",
  "/certificates/c1.jpg",
  "/certificates/c1.jpg",
  "/certificates/c1.jpg",
];

export default function Certification() {
  return (
    <section id="certification" className="py-8 md:py-20 bg-[#F8FAFC] text-center relative overflow-hidden">
      
      <div className="mb-8 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#023047] tracking-tight mb-4">
          Industry Certifications
        </h2>
        <p className="text-gray-500 font-medium max-w-xl mx-auto">
          Recognized globally for quality, safety, and manufacturing excellence. Click any certificate to view details.
        </p>
      </div>

      <PhotoProvider maskOpacity={0.9} speed={() => 300}>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ 
            clickable: true,
            // Custom class for our pagination container so we can style it
            el: '.custom-swiper-pagination', 
          }}
          slidesPerView={4}
          coverflowEffect={{
            rotate: 0,
            stretch: -10,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="max-w-7xl mx-auto pb-16 px-4"
          breakpoints={{
            320: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
            1400: { slidesPerView: 4.5 },
          }}
        >
          {certificates.map((src, index) => (
            <SwiperSlide key={index} className="group">
              <PhotoView src={src}>
                {/* The wrapper acts as the trigger for the lightbox. 
                  Added cursor-zoom-in and a hover overlay with a search icon for better UX.
                */}
                <div className="relative bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl border border-gray-100 p-3 flex items-center justify-center h-[300px] md:h-[400px] cursor-zoom-in overflow-hidden transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(58,154,255,0.15)] group-hover:border-[#3A9AFF]/30">
                  
                  <Image
                    src={src}
                    alt={`Certificate ${index + 1}`}
                    width={600}
                    height={800}
                    className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-[#023047]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur shadow-md p-3 rounded-full text-[#3A9AFF] translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <Search size={20} strokeWidth={2.5} />
                    </div>
                  </div>

                </div>
              </PhotoView>
            </SwiperSlide>
          ))}

          {/* Dedicated container for our custom dots */}
          <div className="custom-swiper-pagination flex justify-center gap-2 mt-10"></div>
        </Swiper>
      </PhotoProvider>

      {/* ========================================= */}
      {/* CUSTOM SWIPER & DOT STYLES */}
      {/* ========================================= */}
      <style jsx global>{`
        /* Premium Center Zoom for the active slide */
        .swiper-slide-active > div {
          transform: scale(1.05);
          border-color: rgba(58, 154, 255, 0.4);
          box-shadow: 0 20px 50px rgba(2, 48, 71, 0.1);
          z-index: 10;
        }

        /* Custom Dots Styling */
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #cbd5e1; /* Tailwind slate-300 */
          opacity: 0.6;
          border-radius: 9999px;
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          margin: 0 4px !important;
          cursor: pointer;
        }

        .custom-swiper-pagination .swiper-pagination-bullet:hover {
          opacity: 1;
          background-color: #94a3b8; /* Tailwind slate-400 */
        }

        /* The Active Dot Expands into a Pill shape */
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          width: 32px;
          background-color: #3A9AFF; /* Brand Blue */
          opacity: 1;
          box-shadow: 0 0 10px rgba(58, 154, 255, 0.5);
        }
      `}</style>
    </section>
  );
}