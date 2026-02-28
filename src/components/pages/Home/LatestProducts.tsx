/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 1. Custom Prev Arrow Component
const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -left-3 md:-left-5 lg:-left-6 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-[0_4px_15px_rgba(0,0,0,0.1)] text-gray-500 hover:bg-[#3A9AFF] hover:text-white hover:border-[#3A9AFF] transition-all duration-300"
      aria-label="Previous Slide"
    >
      <ChevronLeft size={20} strokeWidth={2.5} />
    </button>
  );
};

// 2. Custom Next Arrow Component
const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -right-3 md:-right-5 lg:-right-6 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-[0_4px_15px_rgba(0,0,0,0.1)] text-gray-500 hover:bg-[#3A9AFF] hover:text-white hover:border-[#3A9AFF] transition-all duration-300"
      aria-label="Next Slide"
    >
      <ChevronRight size={20} strokeWidth={2.5} />
    </button>
  );
};

// Valid High-Quality Camera Images
const latestProducts = [
  {
    id: "prod-1",
    name: "5K V-Log Camera with Flip Screen Dual Lens",
    rating: 4,
    reviews: 12,
    oldPrice: 200.0,
    newPrice: 190.0,
    discount: "-5%",
    // Silver compact camera
    image: "/home/product/7.jpg",
    timeLeft: { days: 689, hours: 15, minutes: 44, seconds: 23 },
  },
  {
    id: "prod-2",
    name: "48MP Waterproof Action Camera 1080P",
    rating: 5,
    reviews: 34,
    oldPrice: 150.0,
    newPrice: 142.5,
    discount: "-5%",
    // Rugged action camera
    image: "/home/product/8.jpg",
    timeLeft: { days: 695, hours: 10, minutes: 59, seconds: 21 },
  },
  {
    id: "prod-3",
    name: "64MP 5K WiFi Digital Beauty Camera CD-F3L",
    rating: 4,
    reviews: 8,
    oldPrice: 160.0,
    newPrice: 152.0,
    discount: "-5%",
    // Pink aesthetic camera
    image: "/home/product/9.jpg",
    timeLeft: { days: 687, hours: 10, minutes: 59, seconds: 21 },
  },
  {
    id: "prod-4",
    name: "8X Optical Zoom Digital Camera 2.8\" IPS",
    rating: 5,
    reviews: 21,
    oldPrice: 180.0,
    newPrice: 162.0,
    discount: "-10%",
    // Professional DSLR/Lens style
    image: "/home/product/10.jpg",
    timeLeft: { days: 120, hours: 5, minutes: 30, seconds: 15 },
  },
  {
    id: "prod-5",
    name: "Kids Instant Print Camera with Thermal Paper",
    rating: 4,
    reviews: 56,
    oldPrice: 85.0,
    newPrice: 76.5,
    discount: "-10%",
    // Instant/Polaroid style camera
    image: "/home/product/6.jpg",
    timeLeft: { days: 45, hours: 12, minutes: 10, seconds: 5 },
  },
];

const RatingStars = ({ rating, reviews }: { rating: number; reviews: number }) => {
  return (
    <div className="flex items-center gap-1 mb-2 mt-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={`${star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
              }`}
          />
        ))}
      </div>
      <span className="text-xs text-gray-500">({reviews})</span>
    </div>
  );
};

export default function LatestProducts() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Updated React-Slick configuration with Custom Arrows
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <CustomPrevArrow />, // Inject Custom Prev Arrow
    nextArrow: <CustomNextArrow />, // Inject Custom Next Arrow
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          arrows: false, // Usually best to hide arrows on mobile so users can just swipe
        },
      },
    ],
  };

  if (!mounted) return null;

  return (
    <section className="py-16 bg-white overflow-hidden">
      {/* Increased side padding to ensure arrows have room and don't get cut off */}
      <div className="main-container relative">

        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#023047] mb-2">
            Deal Of The Week
          </h2>
          <p className="text-sm text-gray-500">
            Discover our newest digital imaging technology and exclusive limited-time offers.
          </p>
        </div>

        <div className="-mx-3 relative">
          <Slider {...sliderSettings}>
            {latestProducts.map((product) => (
              <div key={product.id} className="px-3 pb-8 pt-2">
                <div className="group flex flex-row bg-white border border-gray-200 hover:border-[#3A9AFF] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 rounded-lg p-4 gap-2 h-full">

                  {/* Left Side: Image & Badge */}
                  <div className="relative w-2/5 shrink-0 flex items-center justify-center bg-gray-50/50 rounded-md p-2">
                    <div className="absolute top-2 left-2 z-10">
                      <span className="bg-[#EF4444] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                        {product.discount}
                      </span>
                    </div>

                    <div className="relative w-full aspect-square">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 40vw, 15vw"
                      />
                    </div>
                  </div>

                  {/* Right Side: Product Details */}
                  <div className="flex flex-col w-3/5 justify-between py-1">

                    <div>
                      <Link href={`/product/${product.id}`}>
                        <h3 className="text-sm font-semibold text-[#023047] line-clamp-2 hover:text-[#3A9AFF] transition-colors leading-snug h-10">
                          {product.name}
                        </h3>
                      </Link>
                      <RatingStars rating={product.rating} reviews={product.reviews} />
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-gray-400 line-through">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                      <span className="text-base font-bold text-[#3A9AFF]">
                        ${product.newPrice.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 mb-4">
                      <div className="flex flex-col items-center bg-gray-100/80 rounded px-1.5 py-1 min-w-8">
                        <span className="text-xs font-bold text-[#023047] leading-none mb-0.5">{product.timeLeft.days}</span>
                        <span className="text-[8px] text-gray-500 uppercase leading-none">Days</span>
                      </div>
                      <div className="flex flex-col items-center bg-gray-100/80 rounded px-1.5 py-1 min-w-8">
                        <span className="text-xs font-bold text-[#023047] leading-none mb-0.5">{product.timeLeft.hours}</span>
                        <span className="text-[8px] text-gray-500 uppercase leading-none">Hrs</span>
                      </div>
                      <div className="flex flex-col items-center bg-gray-100/80 rounded px-1.5 py-1 min-w-8">
                        <span className="text-xs font-bold text-[#023047] leading-none mb-0.5">{product.timeLeft.minutes}</span>
                        <span className="text-[8px] text-gray-500 uppercase leading-none">Min</span>
                      </div>
                      <div className="flex flex-col items-center bg-red-50 rounded px-1.5 py-1 min-w-8">
                        <span className="text-xs font-bold text-[#EF4444] leading-none mb-0.5">{product.timeLeft.seconds}</span>
                        <span className="text-[8px] text-[#EF4444] uppercase leading-none">Sec</span>
                      </div>
                    </div>

                    <Button className="w-full bg-[#3A9AFF] hover:bg-[#023047] text-white text-xs font-bold uppercase rounded-md h-7 transition-colors duration-300">
                      Add To Cart
                    </Button>

                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
}