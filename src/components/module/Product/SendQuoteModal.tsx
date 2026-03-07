"use client";

import NumberWithCountry from '@/components/shared/NumberWithCountry/NumberWithCountry'
import { IProduct } from '@/types/product.interface'
import { BASEURL } from '@/utils/constant'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import { Send, Camera } from 'lucide-react'
import Image from 'next/image'

interface SendQuoteModalProps {
  onClose: () => void
  product?: IProduct
}

const SendQuoteModal: React.FC<SendQuoteModalProps> = ({ onClose, product }) => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    businessName: '',
    notes: ''
  })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const data = {
      ...formData,
      productRef: product?._id,
    }

    try {
      const response = await axios.post(`${BASEURL}/query/create`, data)

      if (response?.data?.success) {
        toast.success('Quote sent successfully!')
      } else {
        toast.success('Your quote has been submitted!')
      }

      setFormData({
        name: '',
        email: '',
        contact: '',
        businessName: '',
        notes: ''
      })

      onClose()
      router.push('/success')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error)
      toast.error(error?.response?.data?.message || 'Something went wrong!')
    } finally {
      setLoading(false)
    }
  }

  return (
    // 1. FULL SCREEN BLURRED BACKGROUND
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8">
      {/* Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#023047]/70 backdrop-blur-md cursor-pointer"
      />

      {/* 2. THE MODAL CONTAINER (Landscape Layout) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative w-full max-w-[1000px] bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]"
      >
        
        {/* Close Button (Floating Top Right) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#023047] transition-colors z-20 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-sm"
        >
          <IoClose size={24} />
        </button>

        {/* ========================================= */}
        {/* LEFT COLUMN: BRAND/PRODUCT SPOTLIGHT */}
        {/* ========================================= */}
        <div className="w-full md:w-2/5 bg-[#023047] relative overflow-hidden flex flex-col shrink-0">
          
          {/* Abstract Vector Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg viewBox="0 0 400 600" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,0 L400,0 L400,600 Z" fill="#3A9AFF" />
              <circle cx="200" cy="100" r="150" fill="none" stroke="#3A9AFF" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="200" cy="100" r="100" fill="none" stroke="#3A9AFF" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative z-10 p-8 md:p-10 flex flex-col h-full text-white">
            
            <div className="mb-auto">
              <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                Business Inquiry
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-4">
                Capture the <span className="text-[#3A9AFF]">Best Deal.</span>
              </h2>
              <p className="text-slate-300 text-sm font-medium leading-relaxed max-w-[280px]">
                Submit your requirements for bulk pricing, OEM/ODM services, or distribution partnerships.
              </p>
            </div>

            {/* Product Image or Fallback */}
            <div className="mt-8 relative w-full aspect-square bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-6 backdrop-blur-sm">
              {product?.images?.[0] ? (
                <Image 
                  src={product.images[0]} 
                  alt={product.name || "Product"} 
                  fill 
                  className="object-contain p-4 drop-shadow-2xl"
                />
              ) : (
                <Camera size={80} className="text-[#3A9AFF]/30" strokeWidth={1} />
              )}
            </div>

            {product?.name && (
              <div className="mt-6 text-center">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Inquiring About</p>
                <p className="text-sm font-bold text-white line-clamp-2">{product.name}</p>
              </div>
            )}
          </div>
        </div>

        {/* ========================================= */}
        {/* RIGHT COLUMN: THE FORM */}
        {/* ========================================= */}
        <div className="w-full md:w-3/5 p-8 md:p-10 lg:p-12 overflow-y-auto custom-scrollbar">
          
          <div className="mb-8">
            <h3 className="text-2xl font-extrabold text-[#023047] mb-2 tracking-tight">
              Request a Quote
            </h3>
            <p className="text-gray-500 text-sm font-medium">
              Please fill in your details below. Our team will get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-[#023047] uppercase tracking-widest mb-1.5">
                  Full Name <span className="text-[#3A9AFF]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3.5 text-sm outline-none focus:border-[#3A9AFF] focus:bg-white transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-[#023047] uppercase tracking-widest mb-1.5">
                  Email Address <span className="text-[#3A9AFF]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3.5 text-sm outline-none focus:border-[#3A9AFF] focus:bg-white transition-all"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Contact (Uses your custom component) */}
              <div>
                {/* NOTE: Ensure `NumberWithCountry` accepts a `label` prop or hide its internal label 
                  so it doesn't clash with this one. I am passing an empty label to your component.
                */}
                <label className="block text-xs font-bold text-[#023047] uppercase tracking-widest mb-1.5">
                  Contact Number <span className="text-[#3A9AFF]">*</span>
                </label>
                <div className="rounded-xl border border-gray-200 bg-gray-50 overflow-hidden focus-within:border-[#3A9AFF] focus-within:bg-white transition-all pb-1">
                  <NumberWithCountry
                    value={formData.contact || undefined}
                    onChange={(val) => setFormData({ ...formData, contact: val || "" })}
                    className="w-full text-sm px-3 pt-2"
                    label="" 
                  />
                </div>
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-xs font-bold text-[#023047] uppercase tracking-widest mb-1.5">
                  Business Name <span className="text-gray-400 font-normal normal-case">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="e.g. Amkov Electronics"
                  className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3.5 text-sm outline-none focus:border-[#3A9AFF] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-[#023047] uppercase tracking-widest mb-1.5">
                Project Details <span className="text-gray-400 font-normal normal-case">(Optional)</span>
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Tell us about your requirements, quantity needed, or customization requests..."
                rows={4}
                className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3.5 text-sm outline-none focus:border-[#3A9AFF] focus:bg-white transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-[#3A9AFF] hover:bg-[#023047] text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_4px_14px_rgba(58,154,255,0.3)] hover:shadow-[0_6px_20px_rgba(2,48,71,0.4)] disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider text-sm flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Submit Inquiry <Send size={16} />
                  </>
                )}
              </button>
            </div>
          </form>

        </div>
      </motion.div>

      {/* Optional: Add custom scrollbar styling for the right panel if content gets too tall on small screens */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1; 
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8; 
        }
      `}} />
    </div>
  )
}

export default SendQuoteModal