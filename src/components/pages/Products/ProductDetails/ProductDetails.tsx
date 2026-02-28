"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Home,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  Star,
  Heart,
  BarChart2,
  Check,
  Facebook,
  Twitter,
  Instagram,
  Link2
} from "lucide-react";

// --- MOCK DATA FOR AMKOV CAMERA ---
const product = {
  id: "amkov-5k-vlog",
  brand: "AMKOV",
  title: "AMKOV 5K V-Log Camera with Flip Screen",
  price: 247.00,
  originalPrice: 260.00,
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
    "https://images.unsplash.com/photo-1585565804112-f201f68c48b4?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585565804112-f201f68c48b4?q=80&w=800&auto=format&fit=crop",
  ],
  colors: [
    { name: "Matte Black", hex: "#1f2022" },
    { name: "Silver", hex: "#e2e8f0" },
  ],
  bundles: [
    { name: "Camera Only", priceModifier: 0 },
    { name: "Creator Kit (+ Mic & Tripod)", priceModifier: 45 },
    { name: "Pro Bundle (+ Extra Batt & Lens)", priceModifier: 85 },
  ]
};

export default function ProductDetails({ slug }: { slug?: string }) {
  // State for interactivity
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedBundle, setSelectedBundle] = useState(product.bundles[0]);
  const [quantity, setQuantity] = useState(1);

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
          <Link href="/shop" className="hover:text-[#3A9AFF] transition-colors">Cameras</Link>
          <ChevronRight size={14} className="text-gray-400" />
          <Link href="/shop/v-log" className="hover:text-[#3A9AFF] transition-colors">V-Log Cameras</Link>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-[#023047] font-semibold">{product.title}</span>
        </div>
      </div>

      {/* ========================================= */}
      {/* MAIN PRODUCT SECTION */}
      {/* ========================================= */}
      <div className="main-container py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

          {/* LEFT: IMAGE GALLERY */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails (Vertical on Desktop, Horizontal on Mobile) */}
            <div className="flex md:flex-col gap-3 md:w-24 shrink-0 overflow-x-auto md:overflow-visible relative">
              <button className="hidden md:flex w-full h-8 items-center justify-center bg-gray-50 text-gray-400 hover:text-[#3A9AFF] rounded-t-lg border border-b-0 border-gray-200">
                <ChevronUp size={20} />
              </button>

              <div className="flex md:flex-col gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-20 h-20 md:w-full md:h-24 rounded-lg overflow-hidden border-2 transition-all shrink-0 bg-gray-50 ${activeImage === idx ? "border-[#3A9AFF]" : "border-gray-200 hover:border-gray-300"
                      }`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                  </button>
                ))}
              </div>

              <button className="hidden md:flex w-full h-8 items-center justify-center bg-gray-50 text-gray-400 hover:text-[#3A9AFF] rounded-b-lg border border-t-0 border-gray-200">
                <ChevronDown size={20} />
              </button>
            </div>

            {/* Main Image */}
            <div className="relative w-full aspect-square md:aspect-4/3 lg:aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center">
              <Image
                src={product.images[activeImage]}
                alt={product.title}
                fill
                className="object-contain p-8 mix-blend-multiply"
                priority
              />
              {/* Navigation Arrows */}
              <button
                onClick={() => setActiveImage(prev => prev === 0 ? product.images.length - 1 : prev - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-[#3A9AFF] transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setActiveImage(prev => prev === product.images.length - 1 ? 0 : prev + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-[#3A9AFF] transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

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
                <span className="text-gray-400 line-through text-lg">${oldPrice.toFixed(2)}</span>
                <span className="text-3xl font-extrabold text-[#3A9AFF]">${currentPrice.toFixed(2)}</span>
              </div>
              <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>
              <div className="flex items-center gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className={star <= Math.floor(product.rating) ? "fill-current" : "text-gray-200 fill-current"} />
                ))}
                <span className="text-sm text-gray-500 ml-2">({product.reviews} Reviews)</span>
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
              <h3 className="text-sm font-bold text-[#023047] mb-3">Color: <span className="text-gray-500 font-normal">{selectedColor.name}</span></h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${selectedColor.name === color.name ? "border-[#3A9AFF] scale-110" : "border-transparent hover:scale-110 shadow-sm"
                      }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {selectedColor.name === color.name && color.name === "Matte Black" && <Check size={14} className="text-white" />}
                    {selectedColor.name === color.name && color.name !== "Matte Black" && <Check size={14} className="text-[#023047]" />}
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
                <span className="text-xs text-gray-500 mt-1">Est. Delivery Time: {product.deliveryTime}</span>
              </div>
            </div>

            {/* Actions: Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* Quantity Selector */}
              <div className="flex items-center justify-between border border-gray-200 rounded-full w-32 shrink-0 bg-white">
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="w-10 h-12 flex items-center justify-center text-gray-500 hover:text-[#3A9AFF] transition-colors"
                >-</button>
                <span className="font-bold text-[#023047]">{quantity}</span>
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="w-10 h-12 flex items-center justify-center text-gray-500 hover:text-[#3A9AFF] transition-colors"
                >+</button>
              </div>

              {/* Add to Cart Button */}
              <button className="flex-1 bg-[#3A9AFF] hover:bg-[#023047] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                ADD TO CART
              </button>
            </div>

            {/* Buy Now Button */}
            <button className="w-full bg-[#023047] hover:bg-gray-800 text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 mb-8 shadow-md">
              BUY IT NOW
            </button>

            {/* Utilities (Wishlist & Compare) */}
            <div className="flex items-center gap-6 border-b border-gray-200 pb-6 mb-6">
              <button className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#3A9AFF] transition-colors group">
                <Heart size={18} className="group-hover:fill-current" /> Add to Wishlist
              </button>
              <button className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#3A9AFF] transition-colors">
                <BarChart2 size={18} /> Add to Compare
              </button>
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-4 text-sm font-semibold text-gray-700">
              Share:
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#3A9AFF] hover:text-white transition-colors"><Facebook size={14} /></button>
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#3A9AFF] hover:text-white transition-colors"><Twitter size={14} /></button>
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#3A9AFF] hover:text-white transition-colors"><Instagram size={14} /></button>
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#3A9AFF] hover:text-white transition-colors"><Link2 size={14} /></button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}