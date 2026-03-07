"use client";

import { useState } from "react";
import Link from "next/link";
import {
      Heart,
      Facebook,
      Twitter,
      Instagram,
      Link2,
      Mail,
      ShoppingCart,
      Zap,
} from "lucide-react";
import SendQuoteModal from "@/components/module/Product/SendQuoteModal";
import { toast } from "sonner";

const ProductActions = () => {
      const [quantity, setQuantity] = useState(1);
      const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

      const product = { _id: "123", name: "AMKOV 5K V-Log Camera" };
      const addToCart = () => {
            // Implement your add to cart logic here
            toast.success(`Added ${quantity} of ${product.name} to cart.`);
      }
      const addToWishlist = () => {
            // Implement your add to wishlist logic here
            toast.success(`Added ${quantity} of ${product.name} to wishlist.`);
      }
      return (
            <div className="w-full flex flex-col gap-6">

                  {/* ========================================= */}
                  {/* QUANTITY + BUY ACTIONS */}
                  {/* ========================================= */}
                  <div className="flex flex-col lg:flex-row gap-4">

                        {/* Quantity */}
                        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white h-[52px] w-full lg:w-36">
                              <button
                                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                    className="w-12 h-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
                              >
                                    -
                              </button>

                              <span className="flex-1 text-center font-semibold text-[#023047]">
                                    {quantity}
                              </span>

                              <button
                                    onClick={() => setQuantity((prev) => prev + 1)}
                                    className="w-12 h-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
                              >
                                    +
                              </button>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 flex-1">

                              {/* Add to Cart */}
                              <button onClick={addToCart} className="flex items-center justify-center gap-2 flex-1 bg-primary hover:bg-[#2c85e3] text-white font-bold h-[52px] rounded-xl transition shadow-md hover:shadow-lg py-3 md:py-0">
                                    <ShoppingCart size={18} />
                                    Add to Cart
                              </button>

                              {/* Buy Now */}
                              <Link href="/cart" className="flex-1">
                                    <button className="flex items-center justify-center gap-2 w-full bg-[#023047] cursor-pointer hover:bg-black text-white font-bold h-[52px] rounded-xl transition shadow-md hover:shadow-lg">
                                          <Zap size={18} />
                                          Buy Now
                                    </button>
                              </Link>

                        </div>
                  </div>

                  {/* ========================================= */}
                  {/* SECONDARY ACTIONS */}
                  {/* ========================================= */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-4">

                        {/* Wishlist */}
                        <button onClick={addToWishlist} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-red-500 transition group">
                              <Heart size={18} className="group-hover:fill-current" />
                              Add to Wishlist
                        </button>

                        {/* Inject custom animations safely into the page */}
                        <style dangerouslySetInnerHTML={{
                              __html: `
  @keyframes float-inquiry {
    0%, 100% { transform: translateY(0px); box-shadow: 0 0 15px rgba(58,154,255,0.3); }
    50% { transform: translateY(-4px); box-shadow: 0 8px 25px rgba(58,154,255,0.5); }
  }
  @keyframes sweep-inquiry {
    0% { transform: translateX(-150%) skewX(-15deg); }
    50%, 100% { transform: translateX(300%) skewX(-15deg); }
  }
`}} />

                        <button
                              onClick={() => setIsQuoteModalOpen(true)}
                              className="relative flex items-center justify-center gap-2.5 bg-white hover:bg-primary text-[#023047] hover:text-white font-black px-6 h-10 rounded-xl transition-all duration-300  border-primary group overflow-hidden"
                              style={{ animation: 'float-inquiry 3s ease-in-out infinite' }}
                        >
                              {/* 1. Continuous Moving Light Sweep */}
                              <div
                                    className="absolute top-0 left-0 w-[50%] h-full bg-linear-to-r from-transparent via-primary/20 group-hover:via-white/30 to-transparent z-0 pointer-events-none"
                                    style={{ animation: 'sweep-inquiry 3s infinite ease-in-out' }}
                              />

                              {/* 2. Live Pulsing Dot */}
                              <span className="relative flex h-2.5 w-2.5 items-center justify-center z-10">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary group-hover:bg-white opacity-75 duration-1000"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary group-hover:bg-white transition-colors"></span>
                              </span>

                              {/* Icon */}
                              <Mail size={16} strokeWidth={2.5} className="text-primary group-hover:text-white transition-colors z-10" />

                              {/* Text */}
                              <span className="uppercase tracking-widest text-xs z-10">
                                    Send Inquiry
                              </span>
                        </button>

                  </div>

                  {/* ========================================= */}
                  {/* SOCIAL SHARE */}
                  {/* ========================================= */}
                  <div className="flex items-center  flex-wrap gap-4">

                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Share:
                        </span>

                        <div className="flex items-center gap-2">

                              <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#1877F2] hover:border-[#1877F2] transition">
                                    <Facebook size={16} />
                              </button>

                              <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition">
                                    <Twitter size={16} />
                              </button>

                              <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#E4405F] hover:border-[#E4405F] transition">
                                    <Instagram size={16} />
                              </button>

                              <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#023047] hover:border-[#023047] transition">
                                    <Link2 size={16} />
                              </button>

                        </div>
                  </div>

                  {/* ========================================= */}
                  {/* MODAL */}
                  {/* ========================================= */}
                  {isQuoteModalOpen && (
                        <SendQuoteModal
                              onClose={() => setIsQuoteModalOpen(false)}
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              product={product as any}
                        />
                  )}

            </div>
      );
};

export default ProductActions;