/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import Image from "next/image";
import { X, Trash2, Plus, Search, CheckSquare, Square } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- MOCK DATA (Based on your reference image) ---
const allProducts = [
  { id: "1", name: "V02 8X optical zoom PIP shooting vlog camera 5K dual lens...", img: "/home/product/1.jpg" },
  { id: "2", name: "F3B 1300MA Big capacity Battery 3 Lens 13MP 2.8\"IPS Screen...", img: "/home/product/2.jpg" },
  { id: "3", name: "48MP 1080P Waterproof Camera with 5 Meters Waterproof", img: "/home/product/3.jpg" },
  { id: "4", name: "CD-F3L 64MP 5K WiFi Digital Beauty Camera with Dual Lens...", img: "/home/product/4.jpg" },
  { id: "5", name: "CD-R2H 64MP 4K Digital Zoom Camera with 180° Flipping...", img: "/home/product/5.jpg" },
  { id: "6", name: "CD-V01 64MP 5K 16X Digital VLOG Camera with Remote...", img: "/home/product/6.jpg" },
  { id: "7", name: "Waterproof Kids Camera with 3 Meters Waterproof and 2.0...", img: "/home/product/7.jpg" },
];

export default function ProductInquiry() {
  // Main form state (Defaults to the second product like your reference image)
  const [selectedProducts, setSelectedProducts] = useState([allProducts[1]]);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Temporary state for the modal's checkboxes before hitting "OK"
  const [modalSelectedIds, setModalSelectedIds] = useState<string[]>([]);
  
  // Form input state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // When opening modal, sync the temporary state with the currently selected products
  const handleOpenModal = () => {
    setModalSelectedIds(selectedProducts.map(p => p.id));
    setIsModalOpen(true);
  };

  // Toggle individual checkbox inside modal
  const handleToggleProduct = (id: string) => {
    setModalSelectedIds(prev => 
      prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
    );
  };

  // Select / Deselect All inside modal
  const handleSelectAll = () => {
    if (modalSelectedIds.length === allProducts.length) {
      setModalSelectedIds([]); // Deselect all
    } else {
      setModalSelectedIds(allProducts.map(p => p.id)); // Select all
    }
  };

  // Confirm selection from modal
  const handleModalOk = () => {
    const newlySelected = allProducts.filter(p => modalSelectedIds.includes(p.id));
    setSelectedProducts(newlySelected);
    setIsModalOpen(false);
  };

  // Remove product from main form
  const handleRemoveProduct = (id: string) => {
    setSelectedProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div id="inquiry" className="scroll-mt-24 pt-6 md:pt-16 w-full">
      
      {/* ========================================= */}
      {/* 1. MAIN INQUIRY FORM */}
      {/* ========================================= */}
      <div className="">
        
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#023047] mb-2 tracking-tight">
            Product Inquiry
          </h2>
          <p className="text-gray-500 text-sm font-medium">
            Have a question about purchasing a product or solution? Fill in the form and we&apos;ll respond within 7 working days.
          </p>
        </div>

        {/* Selected Products Table */}
        <div className="w-full border border-gray-200 rounded-md overflow-hidden mb-4">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F8FAFC] text-gray-600 font-bold border-b border-gray-200 uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-4 w-24">Product</th>
                  <th className="p-4">Product Name</th>
                  <th className="p-4 w-24 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {selectedProducts.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="p-8 text-center text-gray-400 font-medium">
                      No products selected. Click Add Products to choose.
                    </td>
                  </tr>
                ) : (
                  selectedProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4">
                        <div className="w-12 h-12 relative bg-white border border-gray-100 rounded overflow-hidden flex items-center justify-center">
                          {/* Fallback styling if image fails to load */}
                          <div className="absolute inset-0 bg-gray-100/50 flex items-center justify-center text-[8px] text-gray-400 text-center">Img</div>
                          <Image src={product.img || "/home/product/1.jpg"} alt="Product" fill className="object-contain p-1 relative z-10" />
                        </div>
                      </td>
                      <td className="p-4 text-[#023047] font-semibold">{product.name}</td>
                      <td className="p-4 text-center">
                        <button 
                          onClick={() => handleRemoveProduct(product.id)}
                          className="text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50 p-2 rounded-lg transition-colors"
                          title="Remove"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Products Button */}
        <button 
          onClick={handleOpenModal}
          className="flex items-center gap-2 bg-[#3A9AFF] hover:bg-[#023047] text-white px-5 py-2.5 rounded cursor-pointer text-xs md:text-sm font-bold transition-all shadow-sm hover:shadow-md mb-8"
        >
          <Plus size={16} /> Add Products
        </button>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-xs font-bold text-[#023047] uppercase tracking-widest mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded bg-gray-50 border border-gray-200 p-3.5 text-sm outline-none focus:border-[#3A9AFF] focus:bg-white transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#023047] uppercase tracking-widest mb-2">
              Your E-mail address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full rounded bg-gray-50 border border-gray-200 p-3.5 text-sm outline-none focus:border-[#3A9AFF] focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-xs font-bold text-[#023047] uppercase tracking-widest mb-2">
            Inquiry Message <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={5}
            placeholder="Please enter your inquiry details, quantity needed, etc..."
            className="w-full rounded bg-gray-50 border border-gray-200 p-3.5 text-sm outline-none focus:border-[#3A9AFF] focus:bg-white transition-all resize-none"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button className="w-full md:w-auto bg-secondary hover:bg-primary cursor-pointer text-white px-12 py-4 rounded text-sm font-black uppercase tracking-widest transition-all shadow-md hover:shadow-xl">
            Submit Inquiry
          </button>
        </div>

      </div>

      {/* ========================================= */}
      {/* 2. PRODUCT SELECTION MODAL */}
      {/* ========================================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
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
              <div className="bg-secondary px-6 py-4 flex items-center justify-between text-white shrink-0">
                <h3 className="text-lg font-bold tracking-wide">Select Products</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
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
                    <option>Please select a type</option>
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
                <table className="w-full text-left text-sm">
                  <thead className="bg-white sticky top-0 z-10 shadow-sm">
                    <tr className="border-b border-gray-200 text-gray-500 font-bold uppercase tracking-wider text-[11px]">
                      <th className="p-4 w-16 text-center">Select</th>
                      <th className="p-4 w-20">Product</th>
                      <th className="p-4">Product Name</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {allProducts.map((product) => {
                      const isSelected = modalSelectedIds.includes(product.id);
                      return (
                        <tr 
                          key={product.id} 
                          onClick={() => handleToggleProduct(product.id)}
                          className={`hover:bg-[#F4F7F9] transition-colors cursor-pointer ${isSelected ? "bg-[#3A9AFF]/5" : ""}`}
                        >
                          <td className="p-4 text-center">
                            {/* Custom Checkbox */}
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
                              <Image src={product.img} alt="Product" fill className="object-contain p-0.5 relative z-10" />
                            </div>
                          </td>
                          <td className="p-4 text-[#023047] font-medium leading-relaxed">
                            {product.name}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Modal Footer (Pagination & Actions) */}
              <div className="border-t border-gray-200 p-4 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                
                {/* Select All */}
                <button 
                  onClick={handleSelectAll}
                  className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-[#3A9AFF]"
                >
                  {modalSelectedIds.length === allProducts.length ? (
                    <CheckSquare size={18} className="text-[#3A9AFF]" fill="#3A9AFF" stroke="white" />
                  ) : (
                    <Square size={18} className="text-gray-400" />
                  )}
                  Select all
                </button>

                {/* Mock Pagination */}
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">&lt;</button>
                  <button className="w-8 h-8 rounded bg-[#2b2b2b] text-white flex items-center justify-center text-sm font-bold">1</button>
                  <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-sm">2</button>
                  <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-sm">3</button>
                  <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">&gt;</button>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2 rounded cursor-pointer border border-gray-300 text-gray-600 text-sm font-bold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleModalOk}
                    className="px-8 py-2 rounded cursor-pointer bg-primary hover:bg-[#023047] text-white text-sm font-bold transition-colors shadow-sm"
                  >
                    OK
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}