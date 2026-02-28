"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, Atom, Globe2 } from "lucide-react";

const features = [
  {
    id: "production",
    icon: Factory,
    title: "Complete Control",
    description: "We manage every step with our own R&D team, mold development, and production line, ensuring efficient and high-quality manufacturing.",
  },
  {
    id: "technology",
    icon: Atom,
    title: "Innovative Technology",
    description: "Our advanced test equipment allows us to perform rigorous quality testing to consistently meet and exceed international high standards.",
  },
  {
    id: "global",
    icon: Globe2,
    title: "Global Collaboration",
    description: "We work closely with distributors and wholesale partners around the world to build long-term relationships and grow together.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 50, damping: 15 }
  },
} as const;

export default function WhyChooseUs() {
  return (
    <section className="relative my-5 py-24 lg:py-32 bg-white overflow-hidden">

      {/* ========================================= */}
      {/* THE CURVED BACKGROUND IMAGE (Like your reference) */}
      {/* ========================================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] lg:w-[80%] h-[500px] lg:h-[600px] rounded-b-[50%] overflow-hidden pointer-events-none">
        {/* Soft, bright industrial/tech imagery */}
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop"
          alt="Manufacturing Background"
          fill
          className="object-cover opacity-30" // Lower opacity so it stays bright and soft
        />
        {/* Gradient that fades the image smoothly into the white background */}
        <div className="absolute inset-0 bg-linear-to-b from-white/20 via-white/60 to-white" />
      </div>

      <div className="main-container  relative z-10 pt-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-extrabold text-[#023047] mb-6 tracking-tight drop-shadow-sm"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-500 text-lg lg:text-xl"
          >
            Delivering excellence in digital imaging through total manufacturing control.
          </motion.p>
        </div>

        {/* Feature Grid (No boxes, just clean floating content) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon */}
              <div className="mb-6 relative">
                {/* Subtle blue accent behind the icon that pulses on hover */}
                <div className="absolute inset-0 bg-[#3A9AFF] rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform scale-150" />
                <feature.icon
                  size={56}
                  strokeWidth={1}
                  className="text-[#3A9AFF] relative z-10 group-hover:-translate-y-2 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-[#023047] mb-4 group-hover:text-[#3A9AFF] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}