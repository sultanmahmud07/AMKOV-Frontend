"use client";

import React, { useState, useEffect, useRef } from 'react';
import { CheckCheck, ChevronDown, Search, X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// --- DEMO PRODUCT DATA ---
const DEMO_PRODUCTS = [
  { 
    id: 1, 
    name: "AMKOV Optical Zoom V-Log Camera 4K", 
    price: 247.00, 
    originalPrice: 260.00, 
    discount: "-5%",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=200&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    name: "AMKOV CD-M01 Digital Instant Print Camera", 
    price: 85.00, 
    originalPrice: null,
    discount: null,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=200&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    name: "Compact Kids Creative Camera Blue/Pink", 
    price: 16.00, 
    originalPrice: null,
    discount: null,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=200&auto=format&fit=crop" 
  },
];

const POPULAR_TERMS = ["Action Camera", "Optical Zoom", "Kids Camera"];

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 1. Initialize search term from URL on first load
  useEffect(() => {
    const q = searchParams.get("q");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (q) setSearchTerm(q);
  }, [searchParams]);

  // 2. Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    // Use mousedown to capture it before focus events fire
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 3. Prevent background scrolling when search is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Handle Search Execution (Click Icon or Press Enter)
  const executeSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchTerm.trim())}`);
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeSearch();
    }
  };

  const handleClear = () => {
    setSearchTerm("");
    inputRef.current?.focus();
  };

  return (
    <>
      {/* ========================================= */}
      {/* FULL SCREEN BLUR BACKDROP */}
      {/* ========================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#023047]/40 backdrop-blur-sm z-45"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* ========================================= */}
      {/* SEARCH BAR COMPONENT */}
      {/* ========================================= */}
      <div ref={wrapperRef} className="flex flex-1 max-w-2xl relative z-50">
        
        {/* Input Container */}
        <div className={`w-full flex items-center bg-white h-12 transition-all duration-300 pl-4 pr-1 ${
          isOpen 
            ? "border-t border-x border-[#3A9AFF] ring-4 ring-[#3A9AFF]/10 rounded-t-2xl" 
            : "border border-gray-300 rounded-full hover:border-gray-400"
        }`}>
          
          {/* Category Dropdown (Static for UI matching) */}
          <button 
            type="button"
            className="hidden md:flex items-center gap-2 text-sm text-gray-600 font-medium whitespace-nowrap pr-4 border-r border-gray-200 hover:text-[#3A9AFF] transition-colors"
          >
            All Categories <CheckCheck size={16} />
          </button>

          {/* Text Input */}
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search products, categories..."
            className="flex-1 px-4 h-full outline-none text-sm bg-transparent text-[#023047] placeholder:text-gray-400"
            autoComplete="off"
          />

          {/* Clear Icon (Only shows if there is text) */}
          <AnimatePresence>
            {searchTerm && (
              <motion.button 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={handleClear}
                className="h-8 w-8 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors mr-1"
                type="button"
              >
                <X size={16} strokeWidth={2.5} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Search Action Button */}
          <button 
            onClick={executeSearch}
            className={`h-9 w-10 flex items-center justify-center rounded-full transition-all duration-300 ${
              searchTerm.trim() && isOpen 
                ? "bg-[#3A9AFF] text-white shadow-md hover:bg-blue-600" 
                : "bg-transparent text-gray-500 hover:text-[#3A9AFF]"
            }`}
            type="button"
          >
            <Search size={20} strokeWidth={searchTerm.trim() && isOpen ? 2.5 : 2} />
          </button>
        </div>

        {/* ========================================= */}
        {/* DROPDOWN RESULT BAR */}
        {/* ========================================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white border border-[#3A9AFF] border-t-0 shadow-[0_20px_40px_rgba(0,0,0,0.15)] rounded-b-2xl overflow-hidden mt-0"
            >
              <div className="p-5">
                
                {/* Popular Search Terms */}
                <div className="mb-4">
                  <h4 className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-3">Popular search terms</h4>
                  <div className="flex flex-wrap gap-2">
                    {POPULAR_TERMS.map((term, index) => (
                      <button 
                        key={index}
                        onClick={() => {
                          setSearchTerm(term);
                          inputRef.current?.focus();
                        }}
                        className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-[#3A9AFF] hover:text-[#3A9AFF] hover:bg-[#3A9AFF]/5 transition-all"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-gray-100 my-4"></div>

                {/* Product Results */}
                <div className="flex flex-col gap-1">
                  {DEMO_PRODUCTS.map((product) => (
                    <Link 
                      href={`/products/${product.id}`} 
                      key={product.id}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-[#F8FAFC] transition-colors group"
                    >
                      {/* Image */}
                      <div className="relative w-14 h-14 rounded-lg bg-white border border-gray-100 overflow-hidden shrink-0 flex items-center justify-center p-1 shadow-sm">
                        <Image 
                          src={product.image} 
                          alt={product.name} 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {product.discount && (
                          <span className="absolute top-0 left-0 bg-red-500 text-white text-[9px] font-bold px-1 py-0.5 rounded-br-lg z-10">
                            {product.discount}
                          </span>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-[#023047] group-hover:text-[#3A9AFF] transition-colors line-clamp-1 mb-1">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-emerald-600">${product.price.toFixed(2)}</span>
                          {product.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

              </div>

              {/* Footer View All Link */}
              <div className="bg-gray-50 p-3 border-t border-gray-100 text-center">
                <button 
                  onClick={executeSearch}
                  className="text-sm font-semibold text-[#3A9AFF] hover:text-[#023047] transition-colors"
                >
                  {searchTerm ? `View all results for "${searchTerm}"` : "View all 24 results"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
};

export default SearchBar;