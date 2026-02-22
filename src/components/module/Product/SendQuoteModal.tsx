'use client'

import NumberWithCountry from '@/components/shared/NumberWithCountry/NumberWithCountry'
import { Button } from '@/components/ui/button'
import { IProduct } from '@/types/product.interface'
import { BASEURL } from '@/utils/constant'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { toast } from 'react-toastify'

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

      // ✅ Check success status
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
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-2xl mx-4 shadow-lg relative p-6 md:p-10">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-2xl text-gray-600 hover:text-red-500"
        >
          <IoClose />
        </button>

        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-6">
          Get a Free Quote
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 quote-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#000000] font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Write, what’s your name?"
                className="w-full rounded-md bg-[#0000000D] p-3 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-[#000000] font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-md bg-[#0000000D] p-3 outline-none"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* <div>
                <label className="block text-sm text-[#000000] font-medium mb-1">Contact number</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full rounded-md bg-[#0000000D] p-3 outline-none"
                  required
                />
              </div> */}
                <NumberWithCountry
                value={formData.contact || undefined}
                onChange={(val) => setFormData({ ...formData, contact: val || "" })}
                className="w-full"
              />
            <div>
              <label className="block text-sm text-[#000000] font-medium mb-1">
                Business name <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Enter your Business name"
                className="w-full rounded-md bg-[#0000000D] p-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#000000] font-medium mb-1">
              Notes <span className="text-gray-400">(optional)</span>
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="What’s on your mind?"
              rows={4}
              className="w-full rounded-md bg-[#0000000D] p-3 outline-none"
            />
          </div>

          {/* Submit button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-green-700 text-white font-semibold px-10 md:px-14 py-2 rounded-md transition disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </div>
          {
            product?._id &&
            <p className="text-primary text-sm mt-2">
              <span className="text-yellow-500">Quote For : </span>
              {product?.name}
            </p>
          }
        </form>
      </div>
    </div>
  )
}

export default SendQuoteModal
