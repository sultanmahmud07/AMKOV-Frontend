"use client";

import { useState } from "react";
import Image from "next/image";
import { Trash2, Plus } from "lucide-react";
import { IProduct } from "@/types/product.interface";
import axios from "axios";
import { toast } from "sonner";
import { BASEURL } from "@/utils/constant";
import { useRouter } from "next/navigation";
import ProductSelectionModal from "./ProductSelectionModal";

export default function ProductInquiry({ product }: { product?: IProduct }) {
  // 1. Initialize selected products
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>(() => {
    return product ? [product] : [];
  });

  // NEW: Cache to store full product objects selected from the modal
  const [allProductsCache, setAllProductsCache] = useState<IProduct[]>(() => {
    return product ? [product] : [];
  });

  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSelectedIds, setModalSelectedIds] = useState<string[]>([]);

  // 2. Form input state
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
  const handleToggleProduct = (id: string, productObj: IProduct) => {
    setModalSelectedIds(prev =>
      prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
    );

    // Save the full product object to cache so we can render it in the table later
    setAllProductsCache(prev => {
      if (!prev.find(p => p._id === id)) {
        return [...prev, productObj];
      }
      return prev;
    });
  };

  // Select / Deselect All inside modal
  const handleSelectAll = (currentViewProducts: IProduct[]) => {
    const currentViewIds = currentViewProducts.map(p => p._id);
    const isAllSelected = currentViewIds.every(id => modalSelectedIds.includes(id));

    if (isAllSelected) {
      // Deselect all on current page
      setModalSelectedIds(prev => prev.filter(id => !currentViewIds.includes(id)));
    } else {
      // Select all on current page
      setModalSelectedIds(prev => Array.from(new Set([...prev, ...currentViewIds])));

      // Add to cache
      setAllProductsCache(prev => {
        const newCache = [...prev];
        currentViewProducts.forEach(p => {
          if (!newCache.find(cached => cached._id === p._id)) {
            newCache.push(p);
          }
        });
        return newCache;
      });
    }
  };

  // Confirm selection from modal
  const handleModalOk = () => { // Note: Use handleSelectionModalOk for SendQuoteModal
    // Filter from our cache instead of allProducts
    const newlySelected = allProductsCache.filter(p => modalSelectedIds.includes(p._id));
    setSelectedProducts(newlySelected);

    // Close modal (use setIsSelectionModalOpen(false) for SendQuoteModal)
    setIsModalOpen(false);
  };

  // Remove product from main form
  const handleRemoveProduct = (id: string) => {
    setSelectedProducts(prev => prev.filter(p => p._id !== id));
  };

  // 3. API Submit Handler
  const handleSubmit = async () => {
    if (!formData.email || !formData.message) {
      toast.warning("Please fill in your email and message.");
      return;
    }

    try {
      setIsSubmitting(true);
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        inquiryType: "PRODUCT",
        products: selectedProducts.map(p => p._id)
      };
      const response = await axios.post(`${BASEURL || "https://api.amkov.com/api/v1"}/contact/create`, payload);
      if (response.data) {
        toast.success("Inquiry submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSelectedProducts([]);
        router.push('/success');
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
      <div>
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
                          <div className="absolute inset-0 bg-gray-100/50 flex items-center justify-center text-[8px] text-gray-400 text-center">Img</div>
                          <Image src={product?.images?.[0] || "/default.png"} alt="Product" fill className="object-contain p-1 relative z-10" />
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
            <label className="block text-xs font-bold text-[#023047] uppercase tracking-widest mb-2">Your Name</label>
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
            <label className="block text-xs font-bold text-[#023047] uppercase tracking-widest mb-2">Phone Number</label>
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
      {/* 2. PRODUCT SELECTION MODAL (Extracted) */}
      {/* ========================================= */}
      <ProductSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modalSelectedIds={modalSelectedIds}
        onToggleProduct={handleToggleProduct}
        onSelectAll={handleSelectAll}
        onConfirm={handleModalOk}
      />

    </div>
  );
}