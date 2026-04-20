/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Trash2, Plus, Search, CheckSquare, Square } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { IProduct } from "@/types/product.interface";
import axios from "axios";
import { toast } from "sonner";
import { BASEURL } from "@/utils/constant";
import { useRouter } from "next/navigation";

export default function ProductInquiry({ productId, allProducts }: { productId: string; allProducts: IProduct[] }) {

  // 1. Initialize selected products by finding the one that matches productId
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>(() => {
    const defaultProduct = allProducts.find(p => p._id === productId);
    return defaultProduct ? [defaultProduct] : [];
  });
  const router = useRouter()

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Temporary state for the modal's checkboxes before hitting "OK"
  const [modalSelectedIds, setModalSelectedIds] = useState<string[]>([]);

  // 2. Form input state updated to include 'phone'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle generic input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // When opening modal, sync the temporary state with the currently selected products
  const handleOpenModal = () => {
    setModalSelectedIds(selectedProducts.map(p => p._id));
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
      setModalSelectedIds(allProducts.map(p => p._id)); // Select all
    }
  };

  // Confirm selection from modal
  const handleModalOk = () => {
    const newlySelected = allProducts.filter(p => modalSelectedIds.includes(p._id));
    setSelectedProducts(newlySelected);
    setIsModalOpen(false);
  };

  // Remove product from main form
  const handleRemoveProduct = (id: string) => {
    setSelectedProducts(prev => prev.filter(p => p._id !== id));
  };

  // 3. API Submit Handler
  const handleSubmit = async () => {
    // Basic validation
    if (!formData.email || !formData.message) {
      toast.warning("Please fill in your email and message.");
      return;
    }

    try {
      setIsSubmitting(true);

      // Construct payload exactly as requested
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        inquiryType: "PRODUCT",
        products: selectedProducts.map(p => p._id)
      };
      const response = await axios.post(`${BASEURL || "https://api.devshimul.com/api/v1"}/contact/create`, payload);
      if (response.data) {
        toast.success("Inquiry submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSelectedProducts([]);
        router.push('/success')
      }
    } catch (error) {
      console.log("Error submitting inquiry:", error);
      toast.error("Failed to submit inquiry. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
                    <tr key={product._id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4">
                        <div className="w-12 h-12 relative bg-white border border-gray-100 rounded overflow-hidden flex items-center justify-center">
                          {/* Fallback styling if image fails to load */}
                          <div className="absolute inset-0 bg-gray-100/50 flex items-center justify-center text-[8px] text-gray-400 text-center">Img</div>
                          <Image src={product?.images[0] || "/default.png"} alt="Product" fill className="object-contain p-1 relative z-10" />
                        </div>
                      </td>
                      <td className="p-4 text-[#023047] font-semibold">{product.name}</td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => handleRemoveProduct(product._id)}
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
              name="name"
              value={formData.name}
              onChange={handleInputChange}
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
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className="w-full rounded bg-gray-50 border border-gray-200 p-3.5 text-sm outline-none focus:border-[#3A9AFF] focus:bg-white transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#023047] uppercase tracking-widest mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 000-0000"
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
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Please enter your inquiry details, quantity needed, etc..."
            className="w-full rounded bg-gray-50 border border-gray-200 p-3.5 text-sm outline-none focus:border-[#3A9AFF] focus:bg-white transition-all resize-none"
          ></textarea>
        </div>

        <div className="flex justify-center md:justify-start">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full md:w-auto bg-secondary hover:bg-primary cursor-pointer text-white px-12 py-4 rounded text-sm font-black uppercase tracking-widest transition-all shadow-md hover:shadow-xl disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
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
                      const isSelected = modalSelectedIds.includes(product._id);
                      return (
                        <tr
                          key={product._id}
                          onClick={() => handleToggleProduct(product._id)}
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
                              <Image src={product?.images?.[0] || "/default.png"} alt="Product" fill className="object-contain p-0.5 relative z-10" />
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