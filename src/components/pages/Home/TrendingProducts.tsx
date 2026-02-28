"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard, { ProductType } from "@/components/module/Product/ProductCard";


// Demo Data mapped to camera/tech products
const trendingProducts: ProductType[] = [
  {
    id: 1,
    brand: "Amkov Pro",
    name: "5K V-Log Camera with Flip Screen",
    price: 200.0,
    originalPrice: null,
    rating: 4,
    reviews: 3,
    image: "/home/product/1.jpg",
    badge: "NEW",
    badgeColor: "bg-green-500",
  },
  {
    id: 2,
    brand: "TechGear",
    name: "Silicone Controller Grip Cover",
    price: 130.0,
    originalPrice: null,
    rating: 5,
    reviews: 2,
    image: "/home/product/2.jpg", // VR/Tech accessory
  },
  {
    id: 3,
    brand: "EcoShop",
    name: "Smart Watch Series 5 - Rose Gold",
    price: 150.0,
    originalPrice: null,
    rating: 4,
    reviews: 5,
    image: "/home/product/3.jpg",
  },
  {
    id: 4,
    brand: "MegaMart",
    name: "4K UHD Smart TV Monitor 43-inch",
    price: 190.0,
    originalPrice: null,
    rating: 4,
    reviews: 3,
    image: "/home/product/4.jpg",
  },
  {
    id: 5,
    brand: "SmartShop",
    name: "Premium Noise Cancelling Headphones",
    price: 175.5,
    originalPrice: 195.0,
    rating: 4,
    reviews: 3,
    image: "/home/product/5.jpg",
    badge: "-10%",
    badgeColor: "bg-red-500",
    hasTimer: true, // Mock UI for the timer shown in reference
  },
  {
    id: 6,
    brand: "Amkov",
    name: "48MP Waterproof Action Camera",
    price: 120.0,
    originalPrice: 150.0,
    rating: 5,
    reviews: 12,
    image: "/home/product/6.jpg",
    badge: "HOT",
    badgeColor: "bg-orange-500",
  },
];

export default function TrendingProducts() {
  return (
    <section className="py-10 bg-white">
      <div className="main-container">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#023047]">
            Trending Products
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative group">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {trendingProducts.map((product) => (
                <CarouselItem
                  key={product.id}
                  // Responsive sizing: 1 on mobile, 2 on tablet, 4 on desktop, 5 on large screens
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Carousel Controls - Positioned outside like the reference */}
            <CarouselPrevious className="hidden md:flex -left-6 lg:-left-12 h-10 w-10 border-gray-200 bg-gray-50 text-gray-500 hover:bg-[#3A9AFF] hover:text-white hover:border-[#3A9AFF] transition-colors" />
            <CarouselNext className="hidden md:flex -right-6 lg:-right-12 h-10 w-10 border-gray-200 bg-gray-50 text-gray-500 hover:bg-[#3A9AFF] hover:text-white hover:border-[#3A9AFF] transition-colors" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}