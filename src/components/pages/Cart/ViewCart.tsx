"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ChevronLeft, ArrowRight, Truck, ShieldCheck } from "lucide-react";

// --- MOCK B2B CART DATA ---
const initialCart = [
  {
    id: 1,
    name: "AMKOV 5K V-Log Camera with Flip Screen",
    sku: "AMK-5K-VLOG-BLK",
    price: 247.00,
    originalPrice: 260.00,
    quantity: 10, // Higher default quantities for B2B
    image: "/home/product/8.jpg",
    attributes: "Color: Matte Black",
  },
  {
    id: 2,
    name: "48MP Waterproof Action Camera 4K",
    sku: "AMK-WP48-YEL",
    price: 120.00,
    originalPrice: 150.00,
    quantity: 25,
    image: "/home/product/9.jpg",
    attributes: "Color: Yellow",
  },
];

export default function ViewCart() {
  const [cartItems, setCartItems] = useState(initialCart);
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // --- CART FUNCTIONALITY ---
  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // --- CALCULATIONS ---
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-[#F8FAFC] py-6 lg:py-8">
      <div className="main-container">

        {/* Page Header */}
        <div className="mb-5 md:mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#023047] mb-2">Shopping Cart</h1>
          <p className="text-gray-500">Review your items before requesting a B2B quote.</p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#023047] mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven&apos;t added any products to your inquiry list yet.</p>
            <Link href="/products" className="inline-flex items-center gap-2 bg-primary hover:bg-[#023047] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

            {/* ========================================= */}
            {/* LEFT COLUMN: CART ITEMS TABLE */}
            {/* ========================================= */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6">

              <div className="bg-white rounded-lg shadow-sm border-t border-gray-100 overflow-hidden">
                {/* Desktop Table Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50 px-6 py-4 border-b border-gray-100 text-sm font-bold text-gray-500 uppercase tracking-wider">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>

                {/* Cart Items List */}
                <div className="divide-y divide-gray-100">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-4 md:p-6 flex flex-col md:grid md:grid-cols-12 gap-4 items-center">

                      {/* Product Info (Col 1-6) */}
                      <div className="col-span-6 w-full flex items-center gap-4">
                        <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-lg border border-gray-100 shrink-0 p-2">
                          <Image src={item.image} alt={item.name} fill className="object-contain mix-blend-multiply" />
                        </div>
                        <div className="flex flex-col flex-1">
                          <Link href={`/product/${item.id}`} className="font-bold text-[#023047] hover:text-[#3A9AFF] transition-colors line-clamp-2 leading-snug mb-1 text-sm md:text-base">
                            {item.name}
                          </Link>
                          <span className="text-xs text-gray-500 mb-1">SKU: {item.sku}</span>
                          <span className="text-xs text-gray-500 mb-3">{item.attributes}</span>

                          {/* Mobile Remove Button */}
                          <button onClick={() => removeItem(item.id)} className="md:hidden text-xs text-gray-400 hover:text-red-500 flex items-center gap-1 w-fit transition-colors">
                            <Trash2 size={14} /> Remove
                          </button>
                        </div>
                      </div>

                      {/* Price (Col 7-8) */}
                      <div className="col-span-2 w-full md:w-auto flex justify-between md:justify-center items-center font-bold text-[#023047]">
                        <span className="md:hidden text-sm text-gray-500 font-normal">Price:</span>
                        <div className="flex flex-col items-end md:items-center">
                          <span className="text-[#3A9AFF]">${item.price.toFixed(2)}</span>
                          {item.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">${item.originalPrice.toFixed(2)}</span>
                          )}
                        </div>
                      </div>

                      {/* Quantity Stepper (Col 9-10) */}
                      <div className="col-span-2 w-full md:w-auto flex justify-between md:justify-center items-center">
                        <span className="md:hidden text-sm text-gray-500 font-normal">Qty:</span>
                        <div className="flex items-center border border-gray-200 rounded-lg bg-white overflow-hidden w-28 h-10">
                          <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-[#3A9AFF] transition-colors"><Minus size={14} /></button>
                          <input type="text" readOnly value={item.quantity} className="w-full h-full text-center text-sm font-bold text-[#023047] outline-none" />
                          <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-[#3A9AFF] transition-colors"><Plus size={14} /></button>
                        </div>
                      </div>

                      {/* Line Total & Desktop Remove (Col 11-12) */}
                      <div className="col-span-2 w-full md:w-auto flex justify-between md:justify-end items-center gap-4">
                        <span className="md:hidden text-sm text-gray-500 font-normal">Total:</span>
                        <span className="font-extrabold text-[#023047]">${(item.price * item.quantity).toFixed(2)}</span>

                        <button onClick={() => removeItem(item.id)} className="hidden md:flex w-8 h-8 items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors shrink-0">
                          <Trash2 size={16} />
                        </button>
                      </div>

                    </div>
                  ))}
                </div>
              </div>

              {/* Special Instructions (Common for B2B) */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <label className="block text-sm font-bold text-[#023047] mb-2">
                  Special instructions for seller / Purchase Order (PO) Details
                </label>
                <textarea
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  rows={3}
                  placeholder="Enter your PO number or specific shipping requirements..."
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#3A9AFF] focus:ring-1 focus:ring-[#3A9AFF] transition-all resize-none"
                />
              </div>

              <Link href="/products" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#3A9AFF] transition-colors w-fit">
                <ChevronLeft size={16} /> Continue Shopping
              </Link>
            </div>


            {/* ========================================= */}
            {/* RIGHT COLUMN: ORDER SUMMARY (B2B Adjusted) */}
            {/* ========================================= */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 p-6 lg:p-8 sticky top-24">
                <h2 className="text-xl font-bold text-[#023047] mb-6 pb-4 border-b border-gray-100">Inquiry Summary</h2>

                {/* Totals */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Total Items</span>
                    <span className="font-medium">{totalItems}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-[#023047] pt-2">
                    <span>Subtotal</span>
                    <span className="text-[#3A9AFF]">${subtotal.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed text-right">
                    Taxes, freight, and volume discounts will be calculated upon quote approval.
                  </p>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Have a Distributor Code?</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#3A9AFF] transition-all"
                    />
                    <button className="px-4 py-2.5 bg-gray-100 text-[#023047] font-bold text-sm rounded-lg hover:bg-gray-200 transition-colors">
                      APPLY
                    </button>
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start gap-3 mb-6">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-[#3A9AFF] focus:ring-[#3A9AFF] cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                    I agree to the <Link href="/terms" className="text-[#3A9AFF] hover:underline">terms and conditions</Link> for wholesale purchasing.
                  </label>
                </div>

                {/* Action Button */}
                <button
                  disabled={!agreedToTerms}
                  className={`w-full flex items-center justify-center gap-2 font-bold py-4 rounded-xl transition-all duration-300 text-sm tracking-wide ${agreedToTerms
                      ? "bg-[#023047] hover:bg-[#3A9AFF] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                >
                  PROCEED TO QUOTE <ArrowRight size={18} />
                </button>

                {/* Trust Badges */}
                <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Truck size={18} className="text-[#3A9AFF]" />
                    <span>Global B2B Freight Options Available</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <ShieldCheck size={18} className="text-[#3A9AFF]" />
                    <span>Verified Wholesale Security Policy</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}