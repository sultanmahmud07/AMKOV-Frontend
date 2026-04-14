import Link from "next/link";
import { ArrowRight, CheckCircle2, BriefcaseBusiness } from "lucide-react";

export default function SidebarQuoteBox() {
  return (
    <div className="relative bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden lg:sticky lg:top-24 mt-8 md:mt-12">
      
      {/* Decorative Top Gradient / Shape */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#3A9AFF]/10 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#3A9AFF] to-[#023047]" />

      <div className="p-6 md:p-8 relative z-10">
        
        {/* Icon & Title */}
        <div className="w-12 h-12 bg-[#F4F7F9] rounded-xl flex items-center justify-center text-[#3A9AFF] mb-5 shadow-sm border border-gray-50">
          <BriefcaseBusiness size={24} strokeWidth={1.5} />
        </div>
        
        <h4 className="text-xl md:text-2xl font-extrabold text-[#023047] mb-3 leading-tight tracking-tight">
          Partner with AMKOV
        </h4>
        
        <p className="text-sm text-gray-500 leading-relaxed mb-6 font-medium">
          Looking for reliable manufacturing? Elevate your brand with our premium camera solutions and global support.
        </p>

        {/* Value Proposition List */}
        <ul className="space-y-3.5 mb-8">
          <li className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
            <span className="text-sm font-semibold text-gray-700 leading-tight">
              Wholesale & Volume Pricing
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
            <span className="text-sm font-semibold text-gray-700 leading-tight">
              Full OEM & ODM Capabilities
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
            <span className="text-sm font-semibold text-gray-700 leading-tight">
              Dedicated Account Manager
            </span>
          </li>
        </ul>

        {/* CTA Button */}
        <Link 
          href="/contact" 
          className="relative w-full bg-[#023047] hover:bg-[#3A9AFF] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-md hover:shadow-xl overflow-hidden"
        >
          {/* Subtle button sweep animation */}
          <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          
          <span className="relative z-10">Request Custom Quote</span>
          <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>
        
        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-gray-400 font-bold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Responding within 24 hours
        </div>

      </div>

      {/* Tailwind Animation for the button shimmer */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}