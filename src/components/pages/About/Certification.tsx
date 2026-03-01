"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Image from "next/image";

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
];

export default function Certification() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">
        Certification
      </h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 0,
          stretch: -20,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="max-w-7xl mx-auto"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1400: { slidesPerView: 5 },
        }}
      >
        {certificates.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow rounded border border-gray-200 p-2 flex items-center justify-center h-[350px] transition-all duration-300">
              <Image
                src={src}
                alt="certificate"
                width={600}
                height={800}
                className="max-h-full w-auto object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional Premium Center Zoom */}
      <style jsx global>{`
        .swiper-slide-active {
          transform: scale(1.08);
          transition: 0.4s ease;
        }
      `}</style>
    </section>
  );
}