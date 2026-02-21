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

// Mock data for your slider 
const sliderData = [
  {
    id: 1,
    tagline: "AMAZING TIME OFFER!",
    title: "Upto 50% Discount \nOn New 5K V-Log Cameras",
    image: "/home/main-banner-1.jpg", 
    link: "/shop/v-log-cameras",
    btnText: "SHOP NOW",
  },
  {
    id: 2,
    tagline: "NEW ARRIVALS",
    title: "Capture the Depths \nWith 48MP Waterproof Cameras",
    image: "/home/main-banner-2.jpg", 
    link: "/shop/waterproof-cameras",
    btnText: "DISCOVER MORE",
  },
];

export default function HeroSlider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  // Plugin for autoplay functionality
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  // Sync the carousel state with our custom dot indicators
  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full relative group">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full overflow-hidden"
        opts={{
          loop: true,
          align: "start",
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {sliderData.map((slide, index) => (
            <CarouselItem key={slide.id} className="w-full">
              {/* Main Slide Container */}
              <div className="relative w-full h-[450px] lg:h-[600px] overflow-hidden flex items-center">
                
                {/* Background Image with Slow Slide/Zoom Animation */}
                <div
                  className={`absolute inset-0 w-full h-full transition-transform ease-out ${
                    current === index
                      ? "scale-105 duration-10000" // Slow zoom/slide effect when active
                      : "scale-100 duration-500" // Resets when not active
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title.replace('\n', ' ')}
                    fill
                    className="object-cover object-center"
                    priority={index === 0}
                  />
                </div>

                {/* Gradient Overlay for Text Readability (Optional, adjust if needed) */}
                <div className="absolute inset-0 bg-linear-to-r from-white/80 via-secondary/40 to-transparent z-0 pointer-events-none" />

                {/* Left-Aligned Text Content */}
                <div className="container mx-auto  relative z-10 flex justify-start">
                  <div
                    className={`max-w-xl space-y-5 ${
                      current === index
                        ? "animate-in slide-in-from-bottom-10 fade-in duration-700 ease-out"
                        : "opacity-0"
                    }`}
                  >
                    <p className="font-bold text-sm tracking-widest text-[#023047] uppercase">
                      {slide.tagline}
                    </p>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-[#023047] leading-[1.1] whitespace-pre-line">
                      {slide.title}
                    </h1>
                    <div className="pt-4">
                      <Button
                        asChild
                        size="lg"
                        className="bg-[#3A9AFF] hover:bg-[#023047] text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg transition-all hover:scale-105 duration-300"
                      >
                        <Link href={slide.link}>{slide.btnText}</Link>
                      </Button>
                    </div>
                  </div>
                </div>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none z-20">
          <CarouselPrevious className="pointer-events-auto h-12 w-12 rounded-full border-none bg-[#3A9AFF]/90 text-white hover:bg-[#023047] hover:text-white transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-2 lg:group-hover:translate-x-8" />
          <CarouselNext className="pointer-events-auto h-12 w-12 rounded-full border-none bg-[#3A9AFF]/90 text-white hover:bg-[#023047] hover:text-white transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:-translate-x-2 lg:group-hover:-translate-x-8" />
        </div>
      </Carousel>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-20">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "bg-[#3A9AFF] w-8 h-2.5"
                : "bg-white/50 hover:bg-white w-2.5 h-2.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
}