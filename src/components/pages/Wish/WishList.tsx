"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, ChevronRight, Heart, Trash2 } from "lucide-react";
import ProductCard, { ProductType } from "@/components/module/Product/ProductCard";


// Mock Data for the Wishlist
const wishlistItems: ProductType[] = [
  {
    id: 1,
    brand: "Amkov Pro",
    name: "5K V-Log Camera with Flip Screen",
    price: 200.0,
    originalPrice: 240.0,
    rating: 4.8,
    reviews: 124,
    image: "/home/product/1.jpg",
    badge: "SALE",
    badgeColor: "bg-[#3A9AFF]",
  },
  {
    id: 6,
    brand: "Amkov",
    name: "48MP Waterproof Action Camera",
    price: 120.0,
    originalPrice: 150.0,
    rating: 5,
    reviews: 12,
    image: "/home/product/2.jpg",
    badge: "HOT",
    badgeColor: "bg-orange-500",
  },
  {
    id: 3,
    brand: "Amkov",
    name: "8X Optical Zoom Point-and-Shoot",
    price: 150.0,
    originalPrice: null,
    rating: 4,
    reviews: 5,
    image: "/home/product/3.jpg",
  },
  {
    id: 4,
    brand: "MegaMart",
    name: "Instant Print Kids Camera",
    price: 85.0,
    originalPrice: null,
    rating: 4.5,
    reviews: 56,
    image: "/home/product/4.jpg",
  },
  {
    id: 6,
    brand: "Amkov",
    name: "48MP Waterproof Action Camera",
    price: 120.0,
    originalPrice: 150.0,
    rating: 5,
    reviews: 12,
    image: "/home/product/5.jpg",
    badge: "HOT",
    badgeColor: "bg-orange-500",
  },
];

export default function WishlistPage() {
  return (
    <div className="bg-[#F8FAFC] pb-20">
      
      {/* ========================================= */}
      {/* TOP HERO BANNER */}
      {/* ========================================= */}
      <div className="relative w-full h-[250px] lg:h-[300px] flex flex-col items-center justify-center overflow-hidden bg-[#023047]">
        {/* Decorative Background Image (Camera Lens) */}
        <Image 
          src="https://images.unsplash.com/photo-1514315384763-ba401779410f?q=80&w=1920&auto=format&fit=crop"
          alt="Wishlist Background"
          fill
          className="object-cover object-center opacity-20 mix-blend-overlay"
          priority
        />
        
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-linear-to-t from-[#023047] via-transparent to-transparent" />

        {/* Banner Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
            <Heart size={24} className="text-[#3A9AFF] fill-[#3A9AFF]" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight shadow-black drop-shadow-md">
            My Wishlist
          </h1>
          
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-gray-300 font-medium gap-2 bg-[#023047]/50 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-white">Wishlist</span>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* WISHLIST MAIN CONTENT */}
      {/* ========================================= */}
      <div className="container mx-auto py-6 lg:py-10">
        
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-2 bg-white p-4 border border-gray-100 shadow-sm">
          <h2 className="text-base md:text-lg font-bold text-[#023047]">
            Saved Items <span className="text-gray-400 font-normal">({wishlistItems.length})</span>
          </h2>
          
          {wishlistItems.length > 0 && (
            <button className="flex items-center gap-2 text-xs md:text-sm font-semibold text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors">
              <Trash2 size={16} /> Clear Wishlist
            </button>
          )}
        </div>

        {/* Product Grid */}
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {wishlistItems.map((product) => (
              <div key={product.id} className="relative group/wishlist">
                
                {/* Remove from wishlist button (Overlays the ProductCard) */}
                <button 
                  aria-label="Remove from wishlist"
                  className="absolute top-4 right-4 z-20 w-8 h-8 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover/wishlist:opacity-100 transition-all duration-300"
                >
                  <Trash2 size={14} />
                </button>

                {/* Using your exact ProductCard component */}
                <ProductCard product={product} />

              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
              <Heart size={32} className="text-gray-300" />
            </div>
            <h3 className="text-2xl font-bold text-[#023047] mb-2">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-8 max-w-md text-center">
              You haven&apos;t saved any products yet. Start exploring our collections and add your favorite items here!
            </p>
            <Link 
              href="/shop" 
              className="bg-[#3A9AFF] hover:bg-[#023047] text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md"
            >
              Continue Shopping
            </Link>
          </div>

        )}

      </div>
    </div>
  );
}