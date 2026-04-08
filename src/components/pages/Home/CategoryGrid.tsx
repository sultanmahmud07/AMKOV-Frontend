import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Aperture } from "lucide-react";
import { getCategories } from "@/services/category/category.service";
import { ICategory } from "@/types/product.interface";

const CategoryGrid = async () => {
  const queryString = "limit=10";
  const categories = await getCategories(queryString);
  return (
    <section className="py-16 lg:py-24 bg-[#F4F7F9] relative overflow-hidden">

      {/* ========================================= */}
      {/* BACKGROUND VECTORS */}
      {/* ========================================= */}

      {/* Viewfinder Corners (Subtle framing) */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#023047]/10 pointer-events-none"></div>
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#023047]/10 pointer-events-none"></div>
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#023047]/10 pointer-events-none"></div>
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#023047]/10 pointer-events-none"></div>

      {/* Massive Rotating Aperture Ring (Watermark) */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] text-[#3A9AFF]/5 pointer-events-none animate-[spin_60s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
          <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1400px] relative z-10">

        {/* ========================================= */}
        {/* SIMPLE & CLEAN HEADER */}
        {/* ========================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex items-center gap-4">
            {/* Tech Vector Icon */}
            <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#3A9AFF] shadow-sm shrink-0">
              <Aperture size={22} className="animate-[spin_10s_linear_infinite]" />
            </div>

            {/* Simple Title */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#023047] tracking-tight">
                Shop By Categories
              </h2>
              <p className="text-gray-500 text-sm mt-1 font-medium">
                Explore our specialized range of digital imaging solutions.
              </p>
            </div>
          </div>

          <Link
            href="/categories"
            className="hidden md:flex items-center gap-2 text-sm font-bold text-[#023047] hover:text-[#3A9AFF] transition-all pb-1 border-b-2 border-transparent hover:border-[#3A9AFF]"
          >
            VIEW ALL CATEGORIES <ArrowRight size={16} />
          </Link>
        </div>

        {/* ========================================= */}
        {/* HEXAGONAL GRID CARDS */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-y-4 lg:gap-8">
          {categories?.data?.map((item: ICategory) => (
            <Link
              key={item._id}
              href={`/category/${item.slug}`}
              className="group relative flex items-center bg-white p-6 rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(58,154,255,0.08)] hover:border-[#3A9AFF]/30 transition-all duration-500 ease-out hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Background Vector Dot Grid */}
              <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none text-[#023047]">
                <svg width="100%" height="100%">
                  <pattern id={`pattern-${item._id}`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                  </pattern>
                  <rect width="100%" height="100%" fill={`url(#pattern-${item._id})`} />
                </svg>
              </div>

              {/* Image Container with Hexagon Clip-Path & Animated Vector Ring */}
              <div className="relative w-24 h-24 lg:w-28 lg:h-28 shrink-0 flex items-center justify-center">

                {/* Spinning Vector 'Focus Ring' */}
                <svg
                  className="absolute inset-0 w-full h-full text-[#3A9AFF]/20 group-hover:text-[#3A9AFF]/80 transition-colors duration-500 transform group-hover:rotate-180 ease-in-out scale-110"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.5" />
                </svg>

                {/* Hexagon Image Wrapper */}
                <div className="w-[85%] h-[85%] overflow-hidden bg-gray-50 [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] shadow-inner">
                  <Image
                    src={item.thumbnail || "/default.png"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-125 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                    sizes="(max-width: 768px) 96px, 112px"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="ml-5 flex flex-col justify-center flex-1 z-10">
                <h3 className="text-lg font-bold text-[#023047] group-hover:text-[#3A9AFF] transition-colors duration-300 leading-tight">
                  {item.name}
                </h3>

                <p className="mt-1.5 text-xs text-gray-500 line-clamp-2 pr-2 transition-colors duration-300 group-hover:text-gray-600 font-medium leading-relaxed">
                  {item.description}
                </p>

                {/* Modern Animated Link Button */}
                <div className="mt-4 flex items-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#023047] group-hover:text-[#3A9AFF] transition-colors duration-300">
                    Explore
                  </span>

                  {/* Arrow Vector Element */}
                  <div className="ml-2 flex items-center justify-center w-5 h-5 rounded bg-[#F0F4F8] text-[#023047] group-hover:bg-[#3A9AFF] group-hover:text-white transition-all duration-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile "View All" button */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/categories"
            className="flex items-center gap-2 text-xs font-bold text-white bg-[#023047] px-6 py-3 rounded-full hover:bg-[#3A9AFF] transition-all shadow-sm active:scale-95"
          >
            VIEW ALL CATEGORIES <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CategoryGrid;