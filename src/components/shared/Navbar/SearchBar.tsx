"use client";

import React, { useState, useEffect, useRef } from 'react';
import { CheckCheck, Search, X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { IProduct } from '@/types/product.interface';

// Ensure this matches your .env file
const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL || "https://api.devshimul.com/api/v1";

const POPULAR_TERMS = ["Action Camera", "Optical Zoom", "Kids Camera"];

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // --- NEW: API State ---
  const [defaultProducts, setDefaultProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // --- NEW: Fetch Default Products ---
  useEffect(() => {
    const fetchDefaultProducts = async () => {
      try {
        setIsLoading(true);
        // Fetching 5 default products as requested
        const response = await axios.get(`${BASE_URL}/product?limit=4`);

        // Safely extract the array based on standard API responses
        if (response.data && response.data.data) {
          // If your data is nested in 'result' array, adjust this line if needed
          const productsArray = Array.isArray(response.data.data) ? response.data.data : (response.data.data.result || []);
          setDefaultProducts(productsArray);
        }
      } catch (error) {
        console.error("Failed to fetch default products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDefaultProducts();
  }, []);

  // 1. Initialize search term from URL on first load
  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setSearchTerm(q);
  }, [searchParams]);

  // 2. Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
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

  // Handle Search Execution
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

      <div ref={wrapperRef} className="flex flex-1 max-w-2xl relative z-50">

        <div className={`w-full flex items-center bg-white h-12 transition-all duration-300 pl-4 pr-1 ${isOpen
            ? "border-t border-x border-[#3A9AFF] ring-4 ring-[#3A9AFF]/10 rounded-t-2xl"
            : "border border-gray-300 rounded-full hover:border-gray-400"
          }`}>

          <button
            type="button"
            className="hidden md:flex items-center gap-2 text-sm text-gray-600 font-medium whitespace-nowrap pr-4 border-r border-gray-200 hover:text-[#3A9AFF] transition-colors"
          >
            All Categories <CheckCheck size={16} />
          </button>

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

          <button
            onClick={executeSearch}
            className={`h-9 w-10 flex items-center justify-center rounded-full transition-all duration-300 ${searchTerm.trim() && isOpen
                ? "bg-[#3A9AFF] text-white shadow-md hover:bg-blue-600"
                : "bg-transparent text-gray-500 hover:text-[#3A9AFF]"
              }`}
            type="button"
          >
            <Search size={20} strokeWidth={searchTerm.trim() && isOpen ? 2.5 : 2} />
          </button>
        </div>

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

                {/* --- NEW: Dynamic Product Mapping --- */}
                <div className="flex flex-col gap-1">
                  {isLoading ? (
                    <div className="py-4 text-center text-sm text-gray-400">Loading suggestions...</div>
                  ) : defaultProducts.length === 0 ? (
                    <div className="py-4 text-center text-sm text-gray-400">No products found.</div>
                  ) : (
                    defaultProducts.map((product) => (
                      <Link
                        href={`/products/${product.slug || product._id}`}
                        key={product._id}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-[#F8FAFC] transition-colors group"
                      >
                        <div className="relative w-14 h-14 rounded-lg bg-white border border-gray-100 overflow-hidden shrink-0 flex items-center justify-center p-1 shadow-sm">
                          <Image
                            src={product.images?.[0] || "/default.png"}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-[#023047] group-hover:text-[#3A9AFF] transition-colors line-clamp-1 mb-1">
                            {product.name}
                          </h4>
                          <div className="flex items-center gap-2">
                            {/* {product.basePrice ? (
                              <span className="text-sm font-bold text-emerald-600">
                                ${product.basePrice.toFixed(2)}
                              </span>
                            ) : (
                              <span className="text-sm font-bold text-gray-400">TBD</span>
                            )} */}
                            <span className='text-sm font-bold text-emerald-600'>
                              {product?.category?.name || "Uncategorized"}

                            </span>
                          </div>
                        </div>
                      </Link>
                    ))
                  )}
                </div>

              </div>

              <div className="bg-gray-50 p-3 border-t border-gray-100 text-center">
                <button
                  onClick={executeSearch}
                  className="text-sm font-semibold text-[#3A9AFF] hover:text-[#023047] transition-colors"
                >
                  {searchTerm ? `View all results for "${searchTerm}"` : "View all products"}
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