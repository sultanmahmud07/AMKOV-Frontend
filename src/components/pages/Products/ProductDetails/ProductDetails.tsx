"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProductImageGallery from "./ProductImageGallery"; // Adjust the import path as needed

import {
  ChevronRight,
  Home,
  Star,
  Check,
} from "lucide-react";
import ProductActions from "./ProductActions";

// --- MOCK DATA FOR AMKOV CAMERA ---
const product = {
  id: "amkov-5k-vlog",
  brand: "AMKOV",
  title: "AMKOV 5K V-Log Camera with Flip Screen",
  price: 247.0,
  originalPrice: 260.0,
  rating: 4.8,
  reviews: 124,
  stock: true,
  deliveryTime: "2-3 Days",
  features: [
    "5K Ultra HD video resolution for crystal clear content creation",
    "180-degree flip screen perfect for vlogging and selfies",
    "Built-in electronic image stabilization (EIS) for smooth footage",
    "Compatible with external microphones and wide-angle lenses",
  ],
  images: [
    "/home/product/5.jpg",
    "/home/product/2.jpg",
    "/home/product/3.jpg",
    "/home/product/4.jpg",
    "/home/product/6.jpg",
  ],
  colors: [
    { name: "Matte Black", hex: "#1f2022" },
    { name: "Silver", hex: "#e2e8f0" },
  ],
  bundles: [
    { name: "Camera Only", priceModifier: 0 },
    { name: "Creator Kit (+ Mic & Tripod)", priceModifier: 45 },
    { name: "Pro Bundle (+ Extra Batt & Lens)", priceModifier: 85 },
  ],
};

export default function ProductDetails({ slug }: { slug?: string }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedBundle, setSelectedBundle] = useState(product.bundles[0]);


  // Calculate final price based on bundle
  const currentPrice = product.price + selectedBundle.priceModifier;
  const oldPrice = product.originalPrice + selectedBundle.priceModifier;
  const discountPercent = Math.round(((oldPrice - currentPrice) / oldPrice) * 100);

  return (
    <div className="bg-white min-h-screen">
      {/* ========================================= */}
      {/* BREADCRUMBS */}
      {/* ========================================= */}
      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="main-container py-4 text-sm text-gray-500 font-medium flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-[#3A9AFF] transition-colors flex items-center gap-1">
            <Home size={16} /> Home
          </Link>
          <ChevronRight size={14} className="text-gray-400" />
          <Link href="/shop" className="hover:text-[#3A9AFF] transition-colors">
            Cameras
          </Link>
          <ChevronRight size={14} className="text-gray-400" />
          <Link href="/shop/v-log" className="hover:text-[#3A9AFF] transition-colors">
            V-Log Cameras
          </Link>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-[#023047] font-semibold">{product.title}</span>
        </div>
      </div>

      {/* ========================================= */}
      {/* MAIN PRODUCT SECTION */}
      {/* ========================================= */}
      {/* Important: Ensure the container holding the grid is `relative` so the zoom panel anchors correctly */}
      <div className="main-container py-8 lg:py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

          {/* LEFT: ISOLATED IMAGE GALLERY COMPONENT */}
          <ProductImageGallery images={product.images} title={product.title} />

          {/* RIGHT: PRODUCT DETAILS */}
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#3A9AFF] uppercase tracking-wider mb-2">
              {product.brand}
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#023047] mb-4 leading-tight">
              {product.title}
            </h1>

            {/* Price & Rating */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-end gap-2">
                <span className="text-gray-400 line-through text-lg">
                  ${oldPrice.toFixed(2)}
                </span>
                <span className="text-3xl font-extrabold text-[#3A9AFF]">
                  ${currentPrice.toFixed(2)}
                </span>
              </div>
              <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>
              <div className="flex items-center gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className={
                      star <= Math.floor(product.rating)
                        ? "fill-current"
                        : "text-gray-200 fill-current"
                    }
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">
                  ({product.reviews} Reviews)
                </span>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2 mb-8 text-gray-600 text-sm md:text-base">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#3A9AFF] mt-1 shrink-0">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-[#023047] mb-3">
                Color:{" "}
                <span className="text-gray-500 font-normal">
                  {selectedColor.name}
                </span>
              </h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${selectedColor.name === color.name
                        ? "border-[#3A9AFF] scale-110"
                        : "border-transparent hover:scale-110 shadow-sm"
                      }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {selectedColor.name === color.name &&
                      color.name === "Matte Black" && (
                        <Check size={14} className="text-white" />
                      )}
                    {selectedColor.name === color.name &&
                      color.name !== "Matte Black" && (
                        <Check size={14} className="text-[#023047]" />
                      )}
                  </button>
                ))}
              </div>
            </div>

            {/* Stock & Delivery Notification */}
            <div className="flex items-center gap-3 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div className="flex flex-col">
                <div className="flex items-center gap-4 text-sm font-bold">
                  <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded text-xs flex items-center gap-1">
                    <Check size={12} /> In Stock
                  </span>
                  <span className="text-red-500 bg-red-50 px-2 py-0.5 rounded text-xs">
                    Save {discountPercent}%
                  </span>
                </div>
                <span className="text-xs text-gray-500 mt-1">
                  Est. Delivery Time: {product.deliveryTime}
                </span>
              </div>
            </div>

            <ProductActions />
          </div>
        </div>
      </div>
    </div>
  );
}