"use client";

import { Send } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';

// B2B Specific Form Inputs
type ContactFormInputs = {
  firstName: string;
  lastName: string;
  companyName: string; // Added for B2B
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    console.log("Form Values:", data);

    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Show Success Toast
    toast.success("Inquiry sent successfully!", {
      description: "Our B2B sales team will contact you within 24 hours.",
    });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      
      {/* Name Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">First Name *</label>
          <input
            placeholder="e.g. John"
            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3A9AFF] transition-all ${errors.firstName ? 'border-red-500' : 'border-gray-200 focus:border-[#3A9AFF]'}`}
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <span className="text-xs text-red-500 font-medium">First Name is required</span>}
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Last Name *</label>
          <input
            placeholder="e.g. Doe"
            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3A9AFF] transition-all ${errors.lastName ? 'border-red-500' : 'border-gray-200 focus:border-[#3A9AFF]'}`}
            {...register("lastName", { required: true })}
          />
           {errors.lastName && <span className="text-xs text-red-500 font-medium">Last Name is required</span>}
        </div>
      </div>

      {/* Company & Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Company Name *</label>
          <input
            placeholder="e.g. Tech Retailers Inc."
            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3A9AFF] transition-all ${errors.companyName ? 'border-red-500' : 'border-gray-200 focus:border-[#3A9AFF]'}`}
            {...register("companyName", { required: true })}
          />
           {errors.companyName && <span className="text-xs text-red-500 font-medium">Company Name is required</span>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Business Email *</label>
          <input
            type="email"
            placeholder="you@company.com"
            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3A9AFF] transition-all ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-[#3A9AFF]'}`}
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-xs text-red-500 font-medium">Email is required</span>}
        </div>
      </div>

      {/* Phone & Subject Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Phone Number</label>
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#3A9AFF] focus:outline-none focus:ring-1 focus:ring-[#3A9AFF] transition-all"
            {...register("phone")}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Inquiry Type</label>
          <select
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#3A9AFF] focus:outline-none focus:ring-1 focus:ring-[#3A9AFF] transition-all cursor-pointer"
            {...register("subject")}
          >
            <option value="OEM/ODM Manufacturing">OEM / ODM Manufacturing</option>
            <option value="Wholesale Pricing">Wholesale / Bulk Pricing</option>
            <option value="Distributor Application">Become a Distributor</option>
            <option value="General Corporate Inquiry">General Corporate Inquiry</option>
          </select>
        </div>
      </div>

      {/* Message Area */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-700">Project Details / Message *</label>
        <textarea
          placeholder="Please describe your volume requirements, customization needs, or general inquiry..."
          className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3A9AFF] transition-all min-h-40 resize-none ${errors.message ? 'border-red-500' : 'border-gray-200 focus:border-[#3A9AFF]'}`}
          {...register("message", { required: true })}
        />
        {errors.message && <span className="text-xs text-red-500 font-medium">Message is required</span>}
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-[#023047] hover:bg-[#3A9AFF] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-4"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          <>
            <Send size={18} /> Send Inquiry
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;