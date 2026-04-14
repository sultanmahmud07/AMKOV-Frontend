"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
      type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// 1. Upgraded Data Structure (Supports both 'video' and 'image' types)
const sliderData = [
      {
            id: 1,
            type: "video", // Set type to video
            src: "/home/banner-video.mp4", // Path to your local video file
            fallbackImage: "/home/main-banner-1.jpg", // Shows while video loads
            tagline: "AMAZING TIME OFFER!",
            title: "Upto 50% Discount \nOn New 5K V-Log Cameras",
            link: "/products",
            btnText: "SHOP NOW",
      },
      {
            id: 2,
            type: "video",
            // Cinematic scenery - Perfect for "Travel V-Log" cameras
            src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_5MB.mp4",
            fallbackImage: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2000&auto=format&fit=crop",
            tagline: "AMAZING TIME OFFER!",
            title: "Up to 50% Discount \nOn New 5K V-Log Cameras",
            link: "/products",
            btnText: "SHOP NOW",
      },
      {
            id: 3,
            type: "image",
            src: "/home/main-banner-2.jpg",
            tagline: "NEW ARRIVALS",
            title: "Capture the Depths \nWith 48MP Waterproof Cameras",
            link: "/products",
            btnText: "DISCOVER MORE",
      },
      {
            id: 4,
            type: "video", // Another video slide for variety
            src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            fallbackImage: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2000&auto=format&fit=crop",
            tagline: "NEW ARRIVALS",
            title: "Capture the Depths \nWith 48MP Waterproof Cameras",
            link: "/products",
            btnText: "DISCOVER MORE",
      },
];

export default function BannerSlider() {
      const [api, setApi] = React.useState<CarouselApi>();
      const [current, setCurrent] = React.useState(0);

      // 2. Autoplay Configuration (8 seconds per slide gives time to read and watch)
      const plugin = React.useRef(
            Autoplay({ delay: 8000, stopOnInteraction: true })
      );

      React.useEffect(() => {
            if (!api) return;

            setCurrent(api.selectedScrollSnap());

            api.on("select", () => {
                  setCurrent(api.selectedScrollSnap());
            });
      }, [api]);

      return (
            <section className="w-full relative group bg-[#023047]">
                  <Carousel
                        setApi={setApi}
                        plugins={[plugin.current]}
                        className="w-full overflow-hidden"
                        opts={{
                              loop: true,
                              align: "start",
                              duration: 40, // Smoother, slightly slower slide transition
                        }}
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                  >
                        <CarouselContent>
                              {sliderData.map((slide, index) => {
                                    const isActive = current === index;

                                    return (
                                          <CarouselItem key={slide.id} className="w-full">
                                                <div className="relative w-full h-[86vh] overflow-hidden flex items-center">

                                                      {/* ========================================= */}
                                                      {/* BACKGROUND MEDIA (Video or Image) */}
                                                      {/* ========================================= */}
                                                      <div
                                                            className={`absolute inset-0 w-full h-full transition-transform ease-out ${isActive
                                                                  ? "scale-105 duration-10000" // Slow Ken Burns zoom effect
                                                                  : "scale-100 duration-700"
                                                                  }`}
                                                      >
                                                            {slide.type === "video" ? (
                                                                  <video
                                                                        autoPlay
                                                                        loop
                                                                        muted
                                                                        playsInline
                                                                        poster={slide.fallbackImage}
                                                                        className="object-cover object-center w-full h-full"
                                                                  >
                                                                        <source src={slide.src} type="video/mp4" />
                                                                        Your browser does not support the video tag.
                                                                  </video>
                                                            ) : (
                                                                  <Image
                                                                        src={slide.src}
                                                                        alt={slide.title.replace("\n", " ")}
                                                                        fill
                                                                        className="object-cover object-center"
                                                                        priority={index === 0}
                                                                  />
                                                            )}
                                                      </div>

                                                      {/* Modern Gradient Overlay for Text Readability */}
                                                      <div className="absolute inset-0 bg-linear-to-r from-[#023047]/90 via-[#023047]/50 to-transparent z-0 pointer-events-none" />

                                                      {/* ========================================= */}
                                                      {/* STAGGERED TEXT ANIMATIONS */}
                                                      {/* ========================================= */}
                                                      <div className="main-container relative z-10 flex justify-start w-full px-6 md:px-12">
                                                            <div className="max-w-2xl space-y-6">

                                                                  {/* Tagline */}
                                                                  <p
                                                                        className={`font-black text-sm tracking-[0.2em] text-[#3A9AFF] uppercase transition-all duration-700 ease-out ${isActive
                                                                              ? "opacity-100 translate-y-0 delay-300"
                                                                              : "opacity-0 translate-y-8"
                                                                              }`}
                                                                  >
                                                                        {slide.tagline}
                                                                  </p>

                                                                  {/* Title */}
                                                                  <h1
                                                                        className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight whitespace-pre-line transition-all duration-700 ease-out ${isActive
                                                                              ? "opacity-100 translate-y-0 delay-500"
                                                                              : "opacity-0 translate-y-8"
                                                                              }`}
                                                                  >
                                                                        {slide.title}
                                                                  </h1>

                                                                  {/* Button */}
                                                                  <div
                                                                        className={`pt-4 transition-all duration-700 ease-out ${isActive
                                                                              ? "opacity-100 translate-y-0 delay-700"
                                                                              : "opacity-0 translate-y-8"
                                                                              }`}
                                                                  >
                                                                        <Button
                                                                              asChild
                                                                              className="bg-[#3A9AFF] hover:bg-white text-white hover:text-[#023047] rounded-full px-10 py-7 text-sm font-black tracking-widest uppercase shadow-[0_8px_30px_rgba(58,154,255,0.3)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-1"
                                                                        >
                                                                              <Link href={slide.link}>{slide.btnText}</Link>
                                                                        </Button>
                                                                  </div>

                                                            </div>
                                                      </div>
                                                </div>
                                          </CarouselItem>
                                    );
                              })}
                        </CarouselContent>

                        {/* ========================================= */}
                        {/* CUSTOM NAVIGATION ARROWS */}
                        {/* ========================================= */}
                        <div className="absolute inset-0 flex items-center justify-between p-6 pointer-events-none z-20">
                              <CarouselPrevious className="pointer-events-auto h-14 w-14 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white hover:bg-white hover:text-[#023047] transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-2" />
                              <CarouselNext className="pointer-events-auto h-14 w-14 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white hover:bg-white hover:text-[#023047] transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:-translate-x-2" />
                        </div>
                  </Carousel>

                  {/* ========================================= */}
                  {/* MODERN PROGRESS DOTS */}
                  {/* ========================================= */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-20 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                        {sliderData.map((_, index) => (
                              <button
                                    key={index}
                                    onClick={() => api?.scrollTo(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                    className={`transition-all duration-500 ease-out rounded-full ${current === index
                                          ? "bg-[#3A9AFF] w-10 h-2 shadow-[0_0_10px_rgba(58,154,255,0.8)]"
                                          : "bg-white/40 hover:bg-white/80 w-2 h-2"
                                          }`}
                              />
                        ))}
                  </div>
            </section>
      );
}