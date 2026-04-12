"use client";
import React, { useState } from "react";
import Link from "next/link";
import ProductImageGallery from "./ProductImageGallery"; // Adjust the import path as needed
import {
  ChevronRight,
  Home,
  Check,
} from "lucide-react";
import ProductActions from "./ProductActions";
import { IProduct } from "@/types/product.interface";

export default function ProductDetails({ product }: { product?: IProduct }) {
  const uniqueColors = Array.from(
    new Set(product?.variations.map((variation) => variation.color))
  );
  const [selectedColor, setSelectedColor] = useState(uniqueColors[0] || "");
  // console.log("Product Details: ", product)
  return (
    <div className="bg-white min-h-screen">
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
          <span className="text-[#023047] font-semibold">{product?.slug}</span>
        </div>
      </div>

      <div className="main-container py-8 lg:py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

          <ProductImageGallery images={product?.images ?? []} title={product?.name ?? ""} />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#3A9AFF] uppercase tracking-wider mb-2">
              product brand
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#023047] mb-4 leading-tight">
              {product?.name}
            </h1>

            <ul className="space-y-2 mb-8 text-gray-600 text-sm md:text-base">
              {product?.bulletPoints.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#3A9AFF] mt-1 shrink-0">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mb-6">
              <h3 className="text-sm font-bold text-[#023047] mb-3">
                Color:{" "}
                <span className="text-gray-500 font-normal">
                  {selectedColor}
                </span>
              </h3>

              <div className="flex gap-3">
                {uniqueColors.map((colorName) => {
                  const isSelected = selectedColor === colorName;
                  const cssColor = colorName.toLowerCase().replace("matte ", "").replace(" ", "");

                  return (
                    <button
                      key={colorName}
                      onClick={() => setSelectedColor(colorName)}
                      className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${isSelected
                          ? "border-[#3A9AFF] scale-110"
                          : "border-gray-200 hover:scale-110 shadow-sm" // Changed to gray-200 so white buttons are visible
                        }`}
                      style={{ backgroundColor: cssColor }}
                    >
                      {isSelected && (
                        <Check
                          size={14}
                          // Dynamic checkmark color: white for dark backgrounds, dark blue for light ones
                          className={
                            colorName.toLowerCase().includes("black")
                              ? "text-white"
                              : "text-[#023047]"
                          }
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            <ProductActions />
          </div>
        </div>
      </div>
    </div>
  );
}