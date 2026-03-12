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

const factoryImages = [
  "/about/factory/1.jpg",
  "/about/factory/2.jpg",
  "/about/factory/3.jpg",
  "/about/factory/4.jpg",
  "/about/factory/5.jpg",
  "/about/factory/6.jpg",
];

export default function FactoryImages() {
  return (
    <section className="py-8 md:py-20 bg-white text-center relative overflow-hidden">
      
      {/* ========================================= */}
      {/* HEADER SECTION */}
      {/* ========================================= */}
      <div className="mb-4 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#023047] tracking-tight mb-4">
          R & D Manufacturing
        </h2>
        <p className="text-gray-500 font-medium max-w-2xl mx-auto px-4">
          Take a look inside our state-of-the-art facility where we develop and manufacture precision camera technology.
        </p>
      </div>

      {/* ========================================= */}
      {/* COVERFLOW GALLERY WITH LIGHTBOX */}
      {/* ========================================= */}
      <PhotoProvider maskOpacity={0.9} speed={() => 300}>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ 
            clickable: true,
            // Custom class for the factory pill dots
            el: '.custom-factory-pagination', 
          }}
          // Showing fewer slides than certificates because factory photos are wider
          slidesPerView={3} 
          coverflowEffect={{
            rotate: 0,
            stretch: -20,
            depth: 120,
            modifier: 2,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="max-w-7xl mx-auto pb-16 px-4"
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
            1400: { slidesPerView: 3 },
          }}
        >
          {factoryImages.map((src, index) => (
            <SwiperSlide key={index} className="group">
              <PhotoView src={src}>
                {/* 3D Floating Image Container */}
                <div className="relative bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-3xl border border-gray-100 p-2 flex items-center justify-center h-[250px] md:h-[400px] cursor-zoom-in overflow-hidden transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(58,154,255,0.15)] group-hover:border-[#3A9AFF]/30">
                  
                  {/* Image wrapper to ensure the padding looks like a crisp white frame */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={src}
                      alt={`Factory Facility ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  {/* Hover Overlay Hint (Magnifying Glass) */}
                  <div className="absolute inset-0 bg-[#023047]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none rounded-3xl">
                    <div className="bg-white/90 backdrop-blur-md shadow-md p-4 rounded-full text-[#3A9AFF] translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <Search size={24} strokeWidth={2.5} />
                    </div>
                  </div>

                </div>
              </PhotoView>
            </SwiperSlide>
          ))}

          {/* Dedicated container for custom dots */}
          <div className="custom-factory-pagination flex justify-center gap-2 mt-5 md:mt-10"></div>
        </Swiper>
      </PhotoProvider>

      {/* ========================================= */}
      {/* CUSTOM SWIPER & DOT STYLES */}
      {/* ========================================= */}
      <style jsx global>{`
        /* Premium Center Zoom for the active coverflow slide */
        .swiper-slide-active > div {
          transform: scale(1.03);
          border-color: rgba(58, 154, 255, 0.4);
          box-shadow: 0 20px 50px rgba(2, 48, 71, 0.12);
          z-index: 10;
        }

        /* Custom Dots Styling targeting the factory pagination */
        .custom-factory-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #cbd5e1; /* Tailwind slate-300 */
          opacity: 0.6;
          border-radius: 9999px;
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          margin: 0 4px !important;
          cursor: pointer;
        }

        .custom-factory-pagination .swiper-pagination-bullet:hover {
          opacity: 1;
          background-color: #94a3b8; /* Tailwind slate-400 */
        }

        /* The Active Dot Expands into a Pill shape */
        .custom-factory-pagination .swiper-pagination-bullet-active {
          width: 32px;
          background-color: #3A9AFF; /* Brand Blue */
          opacity: 1;
          box-shadow: 0 0 10px rgba(58, 154, 255, 0.5);
        }
      `}</style>
    </section>
  );
}