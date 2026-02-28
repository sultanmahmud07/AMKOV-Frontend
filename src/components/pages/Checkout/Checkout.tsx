"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  FileText, 
  ChevronLeft, 
  ShieldCheck, 
  CheckCircle2, 
  Truck
} from 'lucide-react';

// --- MOCK B2B CART DATA ---
const checkoutItems = [
  {
    id: 1,
    name: "AMKOV 5K V-Log Camera with Flip Screen",
    sku: "AMK-5K-VLOG-BLK",
    price: 247.00,
    quantity: 10,
    image: "/home/product/1.jpg",
  },
  {
    id: 2,
    name: "48MP Waterproof Action Camera 4K",
    sku: "AMK-WP48-YEL",
    price: 120.00,
    quantity: 25,
    image: "/home/product/2.jpg",
  },
];

export default function Checkout() {
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Calculations
  const subtotal = checkoutItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalItems = checkoutItems.reduce((acc, item) => acc + item.quantity, 0);

  // Handle Submission (Mock)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  // --- SUCCESS STATE UI ---
  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#F8FAFC]">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-green-500" />
          </div>
          <h1 className="text-3xl font-extrabold text-[#023047] mb-4">Quote Requested!</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Thank you for your inquiry. Your request <strong>#REQ-009842</strong> has been successfully submitted. Our B2B sales team will review your requirements and send a formal invoice/quote within 24 hours.
          </p>
          <Link href="/products" className="inline-flex items-center justify-center bg-[#3A9AFF] hover:bg-[#023047] text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  // --- CHECKOUT / QUOTE FORM UI ---
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-6 lg:py-10">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <Link href="/cart" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#3A9AFF] transition-colors mb-2">
            <ChevronLeft size={16} /> Back to Cart
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#023047] mb-2">Request Wholesale Quote</h1>
          <p className="text-gray-500">Submit your company details to receive a formal invoice.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* ========================================= */}
          {/* LEFT COLUMN: FORM SECTIONS */}
          {/* ========================================= */}
          <div className="w-full lg:w-2/3 space-y-8">
            
            {/* 1. Company Information */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-[#023047] mb-6 flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-8 h-8 rounded-full bg-[#3A9AFF]/10 flex items-center justify-center text-[#3A9AFF]">
                  <Building2 size={18} />
                </div>
                Company Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Company Name *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3A9AFF] focus:ring-1 focus:ring-[#3A9AFF] transition-all" placeholder="e.g. Retail Tech Corp" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">First Name *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3A9AFF] focus:ring-1 focus:ring-[#3A9AFF] transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Last Name *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3A9AFF] focus:ring-1 focus:ring-[#3A9AFF] transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Business Email *</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3A9AFF] focus:ring-1 focus:ring-[#3A9AFF] transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number *</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3A9AFF] focus:ring-1 focus:ring-[#3A9AFF] transition-all" />
                </div>
              </div>
            </div>

            {/* 2. Shipping Address */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-[#023047] mb-6 flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-8 h-8 rounded-full bg-[#3A9AFF]/10 flex items-center justify-center text-[#3A9AFF]">
                  <MapPin size={18} />
                </div>
                Shipping Destination
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Country / Region *</label>
                  <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3A9AFF] focus:ring-1 focus:ring-[#3A9AFF] transition-all bg-white">
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="BD">Bangladesh</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Street Address *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3A9AFF] focus:ring-1 focus:ring-[#3A9AFF] transition-all" placeholder="Warehouse or Building address" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">City *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3A9AFF] focus:ring-1 focus:ring-[#3A9AFF] transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">State / Province</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3A9AFF] focus:ring-1 focus:ring-[#3A9AFF] transition-all" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">ZIP / Postal Code *</label>
                  <input required type="text" className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3A9AFF] focus:ring-1 focus:ring-[#3A9AFF] transition-all" />
                </div>
              </div>

              {/* Billing Toggle */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={billingSameAsShipping}
                    onChange={(e) => setBillingSameAsShipping(e.target.checked)}
                    className="w-5 h-5 rounded border-gray-300 text-[#3A9AFF] focus:ring-[#3A9AFF] cursor-pointer"
                  />
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-[#3A9AFF] transition-colors">
                    Billing address is the same as shipping address
                  </span>
                </label>
              </div>
            </div>

            {/* 3. PO Number & Additional Info */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-[#023047] mb-6 flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-8 h-8 rounded-full bg-[#3A9AFF]/10 flex items-center justify-center text-[#3A9AFF]">
                  <FileText size={18} />
                </div>
                Purchase Order Details
              </h2>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">PO Number (Optional)</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3A9AFF] focus:ring-1 focus:ring-[#3A9AFF] transition-all" placeholder="Enter PO Number if available" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Order Notes</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3A9AFF] focus:ring-1 focus:ring-[#3A9AFF] transition-all resize-none" placeholder="Special requirements, delivery instructions, etc." />
                </div>
              </div>
            </div>

          </div>

          {/* ========================================= */}
          {/* RIGHT COLUMN: ORDER SUMMARY */}
          {/* ========================================= */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 p-6 lg:p-8 lg:sticky lg:top-24">
              <h2 className="text-xl font-bold text-[#023047] mb-6 pb-4 border-b border-gray-100">Quote Summary</h2>

              {/* Items List */}
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-100 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {checkoutItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-16 h-16 bg-gray-50 rounded-lg border border-gray-100 shrink-0 p-1">
                      <Image src={item.image} alt={item.name} fill className="object-contain mix-blend-multiply" />
                      <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-white">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex flex-col flex-1 justify-center">
                      <h3 className="text-xs font-bold text-[#023047] line-clamp-2 mb-1">{item.name}</h3>
                      <span className="text-xs text-gray-500">SKU: {item.sku}</span>
                    </div>
                    <div className="font-bold text-[#023047] text-sm flex items-center">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal ({totalItems} items)</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Estimated Freight</span>
                  <span className="text-gray-400 italic">TBD upon review</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Taxes</span>
                  <span className="text-gray-400 italic">TBD upon review</span>
                </div>
                <div className="flex justify-between text-lg font-extrabold text-[#023047] pt-4 border-t border-gray-100">
                  <span>Estimated Total</span>
                  <span className="text-[#3A9AFF]">${subtotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-[#023047] hover:bg-[#3A9AFF] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed text-sm tracking-wide"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "SUBMIT QUOTE REQUEST"
                )}
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                No payment is required today. You will receive a formal invoice after our team reviews your request.
              </p>

              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <ShieldCheck size={18} className="text-[#3A9AFF]" /> 
                  <span>Secure B2B Processing</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Truck size={18} className="text-[#3A9AFF]" /> 
                  <span>Global Logistics Support</span>
                </div>
              </div>

            </div>
          </div>

        </form>
      </div>
    </div>
  );
}