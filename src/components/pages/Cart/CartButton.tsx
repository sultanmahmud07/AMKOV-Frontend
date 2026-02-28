"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, X, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Mock Cart Data (Replace with your actual state/context)
const mockCartItems = [
  {
    id: 1,
    name: "AMKOV 5K V-Log Camera with Flip Screen",
    price: 247.00,
    originalPrice: 260.00,
    quantity: 1,
    image: "/home/product/1.jpg",
    color: "Matte Black",
  },
  {
    id: 2,
    name: "48MP Waterproof Action Camera",
    price: 120.00,
    originalPrice: null,
    quantity: 2,
    image: "/home/product/2.jpg",
    color: "Yellow",
  },
];

const CartButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Calculate Totals
  const subtotal = mockCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 15.00; // Flat rate for demo
  const total = subtotal + shipping;
  const itemCount = mockCartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {/* ========================================= */}
      {/* TRIGGER BUTTON (Sits in Navbar) */}
      {/* ========================================= */}
      <button 
        onClick={() => setIsOpen(true)}
        className="flex cursor-pointer items-center gap-2 hover:text-[#3A9AFF] transition-colors focus:outline-none"
      >
        <div className="relative">
          <ShoppingBag size={24} strokeWidth={1.5} />
          {itemCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-[#3A9AFF] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </div>
        <div className="hidden md:flex flex-col text-left text-xs leading-tight">
          <span className="text-gray-500 font-medium">My Cart</span>
          <span className="font-bold text-secondary">${subtotal.toFixed(2)}</span>
        </div>
      </button>

      {/* ========================================= */}
      {/* SLIDE-OUT SIDEBAR DRAWER */}
      {/* ========================================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Overlay Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-100"
            />

            {/* Sidebar Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-101 flex flex-col"
            >
              
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100 shrink-0 bg-white">
                <h2 className="text-xl font-extrabold text-secondary">Shopping Cart</h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors text-gray-400 hover:text-red-500"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Cart Items Scrollable Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {mockCartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <ShoppingBag size={48} className="mb-4 opacity-50" />
                    <p>Your cart is currently empty.</p>
                  </div>
                ) : (
                  mockCartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 group border-b border-gray-100 pb-4">
                      {/* Product Thumbnail */}
                      <div className="relative w-20 h-20 bg-gray-50 rounded-lg border border-gray-100 overflow-hidden shrink-0">
                        <Image 
                          src={item.image} 
                          alt={item.name} 
                          fill 
                          className="object-cover mix-blend-multiply p-1"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex flex-col flex-1">
                        <Link href={`/product/${item.id}`} onClick={() => setIsOpen(false)}>
                          <h3 className="text-sm font-bold text-secondary line-clamp-2 leading-snug group-hover:text-[#3A9AFF] transition-colors mb-1">
                            {item.name}
                          </h3>
                        </Link>
                        
                        {item.color && (
                          <span className="text-xs text-gray-500 mb-2">Color: {item.color}</span>
                        )}

                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-1 text-sm">
                            <span className="text-gray-500">{item.quantity} ×</span>
                            <span className="font-bold text-[#3A9AFF]">${item.price.toFixed(2)}</span>
                            {item.originalPrice && (
                              <span className="text-xs text-gray-400 line-through ml-1">${item.originalPrice.toFixed(2)}</span>
                            )}
                          </div>

                          <button className="text-gray-300 hover:text-red-500 transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Sidebar Footer (Totals & Checkout) */}
              {mockCartItems.length > 0 && (
                <div className="border-t border-gray-100 p-6 bg-gray-50 shrink-0">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{itemCount} Items</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-extrabold text-secondary pt-3 border-t border-gray-200">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Link 
                      href="/cart" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center bg-white border border-secondary text-secondary hover:bg-secondary hover:text-white font-bold py-3 rounded-full transition-all duration-300 text-sm"
                    >
                      VIEW CART
                    </Link>
                    <Link 
                      href="/checkout" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center bg-primary hover:bg-secondary text-white font-bold py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
                    >
                      CHECKOUT
                    </Link>
                  </div>
                </div>
              )}

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartButton;