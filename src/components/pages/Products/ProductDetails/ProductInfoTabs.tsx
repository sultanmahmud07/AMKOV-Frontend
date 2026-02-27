"use client";

import React, { useState } from "react";
import Image from "next/image";

// Mock data tailored for an AMKOV Camera
const productSpecs = {
  details: [
    { label: "Color", value: "Matte Black / Silver" },
    { label: "Form Factor", value: "Compact Point-and-Shoot" },
    { label: "Sensor Type", value: "CMOS" },
    { label: "Effective Pixels", value: "48 Megapixels" },
  ],
  general: [
    { label: "Name of Seller", value: "AMKOV Digital Imaging Ltd." },
    { label: "Month and Year of Commodity", value: "Manufactured January 2026" },
    { label: "Commodity Name", value: "Digital V-Log Camera" },
    { label: "Item Width", value: "11.5 cm" },
    { label: "Item Height", value: "6.5 cm" },
    { label: "Item Weight", value: "245 g (with battery)" },
  ],
  connectivity: [
    { label: "Wireless", value: "Wi-Fi 802.11b/g/n, Bluetooth 5.0" },
    { label: "Ports", value: "USB Type-C, Micro HDMI, 3.5mm Mic Jack" },
  ]
};

export default function ProductInfoTabs() {
  const [activeTab, setActiveTab] = useState("description");

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // The offset ensures the section isn't hidden behind the sticky menu
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Optional: Update active tab on scroll (Intersection Observer logic can be added here if desired)

  return (
    <div className="w-full bg-white  border-t border-gray-100 rounded-b-3xl">

      {/* ========================================= */}
      {/* STICKY TOP MENU */}
      {/* ========================================= */}
      <div className="sticky top-12 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto">
          <ul className="flex items-center gap-8 text-sm md:text-base font-bold text-gray-500 overflow-x-auto no-scrollbar">
            <li>
              <button
                onClick={() => scrollToSection("description")}
                className={`py-4 border-b-[3px] transition-colors whitespace-nowrap ${activeTab === "description"
                    ? "border-[#3A9AFF] text-[#023047]"
                    : "border-transparent hover:text-[#023047]"
                  }`}
              >
                Description
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("specifications")}
                className={`py-4 border-b-[3px] transition-colors whitespace-nowrap ${activeTab === "specifications"
                    ? "border-[#3A9AFF] text-[#023047]"
                    : "border-transparent hover:text-[#023047]"
                  }`}
              >
                Product Details
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("more_info")}
                className={`py-4 border-b-[3px] transition-colors whitespace-nowrap ${activeTab === "more_info"
                    ? "border-[#3A9AFF] text-[#023047]"
                    : "border-transparent hover:text-[#023047]"
                  }`}
              >
                More Information
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("reviews")}
                className={`py-4 border-b-[3px] transition-colors whitespace-nowrap ${activeTab === "reviews"
                    ? "border-[#3A9AFF] text-[#023047]"
                    : "border-transparent hover:text-[#023047]"
                  }`}
              >
                Reviews
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto  pt-8 lg:pt-12">

        {/* ========================================= */}
        {/* DESCRIPTION SECTION */}
        {/* ========================================= */}
        <div id="description" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-bold text-[#023047] mb-4">Product Highlights</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Embrace a bold, high-tech aesthetic with the AMKOV 5K V-Log Camera. Designed specifically for content creators, it captures life in stunning Ultra-HD. Whether you are filming a bustling city street at night, capturing wide-angle travel shots, or recording intimate studio tutorials, this camera delivers uncompromised clarity and color depth. The intuitive interface ensures that both beginners and seasoned pros can start shooting immediately.
          </p>

          <h2 className="text-2xl font-bold text-[#023047] mb-4">The Creator Connection</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            This camera brings together advanced optics and seamless connectivity to create a workflow that is as futuristic as it is functional. Instantly transfer your raw 5K footage or 48MP photos directly to your smartphone via our dedicated Wi-Fi chip. From blinking recording tally lights to the sturdy, articulated flip screen, every piece of hardware is placed to put the creator first.
          </p>

          {/* Two Image Layout from your reference */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop"
                alt="Camera feature 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop"
                alt="Camera feature 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* SPECIFICATIONS SECTION */}
        {/* ========================================= */}
        <div id="specifications" className="scroll-mt-24">

          <div className="border border-gray-200 rounded-xl overflow-hidden">

            {/* Table Group 1 */}
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-sm font-bold text-[#3A9AFF] tracking-wider uppercase">Product Details</h3>
            </div>
            <div className="bg-white">
              {productSpecs.details.map((item, index) => (
                <div key={index} className={`flex flex-col sm:flex-row sm:items-center px-6 py-4 text-sm ${index !== productSpecs.details.length - 1 ? "border-b border-gray-100" : ""}`}>
                  <div className="w-full sm:w-1/3 font-semibold text-gray-700 mb-1 sm:mb-0">{item.label}</div>
                  <div className="w-full sm:w-2/3 text-gray-600">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Table Group 2 */}
            <div className="bg-gray-50 px-6 py-3 border-y border-gray-200">
              <h3 className="text-sm font-bold text-[#3A9AFF] tracking-wider uppercase">General Information</h3>
            </div>
            <div className="bg-white">
              {productSpecs.general.map((item, index) => (
                <div key={index} className={`flex flex-col sm:flex-row sm:items-center px-6 py-4 text-sm ${index !== productSpecs.general.length - 1 ? "border-b border-gray-100" : ""}`}>
                  <div className="w-full sm:w-1/3 font-semibold text-gray-700 mb-1 sm:mb-0">{item.label}</div>
                  <div className="w-full sm:w-2/3 text-gray-600">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Table Group 3 */}
            <div className="bg-gray-50 px-6 py-3 border-y border-gray-200">
              <h3 className="text-sm font-bold text-[#3A9AFF] tracking-wider uppercase">Connectivity</h3>
            </div>
            <div className="bg-white">
              {productSpecs.connectivity.map((item, index) => (
                <div key={index} className={`flex flex-col sm:flex-row sm:items-center px-6 py-4 text-sm ${index !== productSpecs.connectivity.length - 1 ? "border-b border-gray-100" : ""}`}>
                  <div className="w-full sm:w-1/3 font-semibold text-gray-700 mb-1 sm:mb-0">{item.label}</div>
                  <div className="w-full sm:w-2/3 text-gray-600">{item.value}</div>
                </div>
              ))}
            </div>

          </div>

        </div>
        {/* ========================================= */}
        {/* More Information SECTION */}
        {/* ========================================= */}
        <div id="more_info" className="scroll-mt-24 mt-6 md:mt-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#023047] my-4">More Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Image src="/temp/con-1.jpg" alt="More Information" width={800} height={400} className="rounded-xl w-full object-cover" />
            <Image src="/temp/con-2.jpg" alt="More Information" width={800} height={400} className="rounded-xl w-full object-cover" />
            <Image src="/temp/con-1.jpg" alt="More Information" width={800} height={400} className="rounded-xl w-full object-cover" />
          </div>
        </div>

      </div>
    </div>
  );
}