"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Valid, high-quality images mapped to the specific use-cases
const featureCards = [
  {
    id: "vlog",
    title: "Vlog Life",
    subtitle: "Share your story with steady, high-res shots.",
    image: "/home/capture/1.jpg",
  },
  {
    id: "underwater",
    title: "Underwater Worlds",
    subtitle: "Explore the depths with 4K waterproof gear.",
    image: "/home/capture/6.jpg",
  },
  {
    id: "interface",
    title: "Pro Interface",
    subtitle: "Intuitive controls built for fast-paced creators.",
    image: "/home/capture/3.jpg",
  },
  {
    id: "kids",
    title: "First Adventures",
    subtitle: "Easy-to-use, durable cameras for big discoveries.",
    image: "/home/capture/4.jpg",
  },
  {
    id: "night",
    title: "Night Mode Magic",
    subtitle: "Vibrant cityscapes and clear starry nights.",
    image: "/home/capture/5.jpg",
  },
];

export default function CaptureAndCreate() {
  return (
    <section className="py-10 lg:py-16 bg-white relative">
      <div className="main-container">

        {/* Main Layout Container: Splits into Left Sticky Sidebar and Right Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">

          {/* ========================================= */}
          {/* LEFT SIDEBAR: Sticky Text Content */}
          {/* ========================================= */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-14 h-14 rounded-full bg-[#F8FAFC] border border-gray-100 flex items-center justify-center mb-8">
                <Camera size={24} className="text-[#3A9AFF]" />
              </div>

              <h2 className="text-4xl lg:text-6xl font-extrabold text-[#023047] mb-6 tracking-tight leading-[1.1]">
                Capture <br className="hidden lg:block" /> & Create
              </h2>

              <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-md">
                Relive your best moments with innovative camera technology. Designed for every environment, from professional studio vlogs to extreme underwater dives.
              </p>

              <Link
                href="/explore"
                className="group inline-flex items-center gap-3 text-[#023047] font-bold text-lg hover:text-[#3A9AFF] transition-colors duration-300"
              >
                <span className="border-b-2 border-[#023047] group-hover:border-[#3A9AFF] pb-1 transition-colors">
                  Explore Collection
                </span>
                <div className="w-8 h-8 rounded-full bg-[#023047] group-hover:bg-[#3A9AFF] text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-2">
                  <ArrowRight size={16} />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* ========================================= */}
          {/* RIGHT SIDE: Offset/Staggered Scrolling Grid */}
          {/* ========================================= */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-y-20">
            {featureCards.map((card, index) => {
              // Create the offset effect: move every second card down on desktop
              const isEvenColumn = index % 2 !== 0;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94], // Smooth cinematic easing
                    delay: index * 0.1 // Slight delay for each card
                  }}
                  className={`flex flex-col group ${isEvenColumn ? "md:mt-16 lg:mt-32" : ""}`}
                >
                  <Link href={`/shop/${card.id}`} className="block w-full">
                    {/* Image Container with Parallax-style hover zoom */}
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-100 mb-6 shadow-md transition-shadow duration-500 group-hover:shadow-2xl">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Dark overlay that fades out on hover */}
                      <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0"></div>
                    </div>

                    {/* Minimalist Text Content below the image */}
                    <div>
                      <h3 className="text-2xl font-bold text-[#023047] mb-2 group-hover:text-[#3A9AFF] transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed max-w-sm">
                        {card.subtitle}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}