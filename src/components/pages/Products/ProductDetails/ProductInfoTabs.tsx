"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProductInquiry from "./ProductInquiry";
import { IProduct } from "@/types/product.interface";

export default function ProductInfoTabs({ product, allProducts }: { product: IProduct; allProducts: IProduct[] }) {
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
      <div className="sticky top-0 md:top-20 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="main-container">
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
                Specifications
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
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("inquiry")}
                className={`py-4 border-b-[3px] transition-colors whitespace-nowrap ${activeTab === "inquiry"
                  ? "border-[#3A9AFF] text-[#023047]"
                  : "border-transparent hover:text-[#023047]"
                  }`}
              >
                Inquiry
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-container ">

        {/* ========================================= */}
        {/* DESCRIPTION SECTION */}
        {/* ========================================= */}
        <div id="description" className="scroll-mt-24 pt-5 md:pt-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#023047] mb-6 md:mb-8">
            Product Highlights
          </h2>

          {product?.description ? (
            <div
              className="text-gray-600 text-base md:text-lg leading-relaxed 
        /* Paragraph Spacing */
        [&>p]:mb-5 
        
        /* List Styling (Makes the numbers look clean and aligns the text) */
        [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-8 [&>ol>li]:mb-3 [&>ol>li]:pl-2
        
        /* Bold Text (Forces bold text to use your brand blue/dark color instead of default black) */
        [&_strong]:font-bold [&_strong]:text-[#023047]
        
        /* Image Styling (Makes images responsive, rounded, and adds a nice shadow) */
        [&_img]:w-full [&_img]:max-w-4xl [&_img]:h-auto [&_img]:rounded-2xl [&_img]:shadow-[0_10px_40px_rgba(0,0,0,0.1)] [&_img]:my-10 [&_img]:mx-auto [&_img]:border [&_img]:border-gray-100
        
        /* Overriding inline editor colors (Forces the HTML to use our Tailwind text-gray-600) */
        [&_span]:text-inherit!"

              // This injects your HTML safely
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          ) : (
            <p className="text-gray-400 italic">No description available for this product.</p>
          )}
        </div>

        {/* ========================================= */}
        {/* SPECIFICATIONS SECTION */}
        {/* ========================================= */}
        <div id="specifications" className="scroll-mt-24 pt-5 md:pt-16">
          <div className="border border-gray-200 rounded-xl overflow-hidden">

            {/* Table Header */}
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-sm font-bold text-[#3A9AFF] tracking-wider uppercase">
                Specifications
              </h3>
            </div>

            {/* Specifications List */}
            <div className="bg-white">
              {product?.specifications && product?.specifications?.length > 0 ? (
                product?.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex flex-col sm:flex-row sm:items-center px-6 py-4 text-sm ${index !== product.specifications.length - 1 ? "border-b border-gray-100" : ""
                      }`}
                  >
                    <div className="w-full sm:w-1/3 font-semibold text-gray-700 mb-1 sm:mb-0">
                      {spec.name}
                    </div>
                    <div className="w-full sm:w-2/3 text-gray-600">
                      {spec.value}
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-6 py-8 text-sm text-gray-400 text-center font-medium">
                  No specifications available for this product.
                </div>
              )}
            </div>

          </div>
        </div>
        {/* ========================================= */}
        {/* More Information SECTION */}
        {/* ========================================= */}
        <div id="more_info" className="scroll-mt-24 pt-6 md:pt-14">
          {/* <h2 className="text-xl md:text-2xl font-bold text-[#023047] my-4">Product Features</h2> */}
          <div className="grid grid-cols-1 md:max-w-5xl mx-auto gap-6">
            {
              product?.featureImages && product?.featureImages?.length > 0 ? (
                product.featureImages.map((imgUrl, idx) => (
                  <Image key={idx} src={imgUrl} alt={`Feature ${idx + 1}`} width={800} height={400} className="rounded-xl w-full object-cover" />
                ))
              ) : (
                <div className="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                  No feature images available.
                </div>
              )
            }
          </div>
        </div>
        {/* ========================================= */}
        {/* INQUIRY SECTION */}
        {/* ========================================= */}
        <ProductInquiry productId={product._id} allProducts={allProducts} />
      </div>
    </div>
  );
}