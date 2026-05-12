"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Search, CheckSquare, Square, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { IProduct } from "@/types/product.interface";
import axios from "axios";
import { BASEURL } from "@/utils/constant";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ProductSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalSelectedIds: string[];
  onToggleProduct: (id: string, product: IProduct) => void;
  onSelectAll: (currentViewProducts: IProduct[]) => void;
  onConfirm: () => void;
}

export default function ProductSelectionModal({
  isOpen,
  onClose,
  modalSelectedIds,
  onToggleProduct,
  onSelectAll,
  onConfirm,
}: ProductSelectionModalProps) {
  
  // State for fetched products and pagination
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10; // Items per page

  // Fetch products when modal opens or page changes
  useEffect(() => {
    if (!isOpen) return;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BASEURL}/product?page=${currentPage}&limit=${limit}`
        );
        console.log(response.data.meta)
        if (response.data && response.data.data) {
          setProducts(response.data.data);
          setTotalPages(response?.data?.meta?.totalPage || 1);
        }
      } catch (error) {
        console.error("Failed to fetch products for modal:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [isOpen, currentPage]);

  // Handle Pagination Clicks
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // Helper to determine if all products on the CURRENT page are selected
  const isAllCurrentPageSelected = 
    products.length > 0 && products.every(p => modalSelectedIds.includes(p._id));

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-110 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#023047]/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="bg-[#023047] px-6 py-4 flex items-center justify-between text-white shrink-0">
              <h3 className="text-lg font-bold tracking-wide">Select Products</h3>
              <button
                onClick={onClose}
                className="hover:bg-white/20 p-1.5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Filter Bar */}
            <div className="p-4 border-b border-gray-100 bg-[#F8FAFC] flex items-center gap-4 shrink-0">
              <span className="text-sm font-bold text-gray-600">Category:</span>
              <div className="relative w-64">
                <select className="w-full appearance-none bg-white border border-gray-200 rounded-lg p-2.5 text-sm outline-none focus:border-[#3A9AFF] text-gray-500 cursor-pointer">
                  <option>All Categories</option>
                  <option>Vlog Cameras</option>
                  <option>Waterproof Cameras</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <Search size={16} />
                </div>
              </div>
            </div>

            {/* Modal Table Area (Scrollable) */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <table className="w-full text-left text-sm relative">
                <thead className="bg-white sticky top-0 z-10 shadow-sm">
                  <tr className="border-b border-gray-200 text-gray-500 font-bold uppercase tracking-wider text-[11px]">
                    <th className="p-4 w-16 text-center">Select</th>
                    <th className="p-4 w-20">Product</th>
                    <th className="p-4">Product Name</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  
                  {loading ? (
                    /* Loading Skeleton Rows */
                    Array.from({ length: limit }).map((_, i) => (
                      <tr key={i} className="animate-pulse">
                        <td className="p-4 text-center">
                          <Skeleton width={20} height={20} className="rounded" />
                        </td>
                        <td className="p-4">
                          <Skeleton width={40} height={40} className="rounded-md" />
                        </td>
                        <td className="p-4">
                          <Skeleton width="60%" height={16} />
                        </td>
                      </tr>
                    ))
                  ) : products.length === 0 ? (
                     <tr>
                        <td colSpan={3} className="p-8 text-center text-gray-500 font-medium">
                          No products found.
                        </td>
                     </tr>
                  ) : (
                    /* Actual Data Rows */
                    products.map((product) => {
                      const isSelected = modalSelectedIds.includes(product._id);
                      return (
                        <tr
                          key={product._id}
                          onClick={() => onToggleProduct(product._id, product)}
                          className={`hover:bg-[#F4F7F9] transition-colors cursor-pointer ${
                            isSelected ? "bg-[#3A9AFF]/5" : ""
                          }`}
                        >
                          <td className="p-4 text-center">
                            <div className="inline-flex items-center justify-center">
                              {isSelected ? (
                                <CheckSquare size={20} className="text-[#3A9AFF]" fill="#3A9AFF" stroke="white" />
                              ) : (
                                <Square size={20} className="text-gray-300" />
                              )}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="w-10 h-10 relative bg-white border border-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                              <div className="absolute inset-0 bg-gray-50 flex items-center justify-center text-[8px] text-gray-400">Img</div>
                              <Image 
                                src={product?.images?.[0] || "/default.png"} 
                                alt={product.name || "Product"} 
                                fill 
                                className="object-contain p-0.5 relative z-5" 
                              />
                            </div>
                          </td>
                          <td className="p-4 text-[#023047] font-medium leading-relaxed">
                            {product.name}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Modal Footer (Pagination & Actions) */}
            <div className="border-t border-gray-200 p-4 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
              
              {/* Select All (Current Page) */}
              <button
                onClick={() => onSelectAll(products)}
                disabled={loading || products.length === 0}
                className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-[#3A9AFF] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAllCurrentPageSelected ? (
                  <CheckSquare size={18} className="text-[#3A9AFF]" fill="#3A9AFF" stroke="white" />
                ) : (
                  <Square size={18} className="text-gray-400" />
                )}
                Select page
              </button>

              {/* Pagination Controls */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={handlePrevPage}
                  disabled={currentPage === 1 || loading}
                  className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                
                <span className="text-sm font-bold text-gray-700 px-2">
                  Page {currentPage} of {totalPages}
                </span>
                
                <button 
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages || loading}
                  className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2 rounded cursor-pointer border border-gray-300 text-gray-600 text-sm font-bold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={onConfirm}
                  className="px-8 py-2 rounded cursor-pointer bg-[#3A9AFF] hover:bg-[#023047] text-white text-sm font-bold transition-colors shadow-sm"
                >
                  Confirm ({modalSelectedIds.length})
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}