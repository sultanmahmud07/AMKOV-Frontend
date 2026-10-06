

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// 1. Define the data structure for the promo blocks
const promoData = [
  {
    id: 1,
    tagline: "WHOLESALE SPOTLIGHT",
    title: "5K V-Log Cameras — High-Margin SKU for Creator-Focused Retailers",
    subTitle: "Private label ready. Flexible MOQ. Fast turnaround from Shenzhen.",
    image: "/home/banner/sub-banner-1.jpg",
    link: "/products",
    btnText: "Get Wholesale Pricing",
    // Premium soft ice-blue & glass gradient
    gradientClass:
      "from-[#e2f1fd]/95 via-[#e2f1fd]/80 via-45% sm:via-[#e2f1fd]/65 sm:via-55% to-transparent",
    badgeStyle: "bg-white/70 text-[#023047] border border-white/80 shadow-2xs",
    dotColor: "bg-[#3A9AFF]",
  },
  {
    id: 2,
    tagline: "FEATURED PRODUCT LINE",
    title: "48MP Waterproof Cameras — Built for Outdoor & Sports Retail",
    subTitle: "Ruggedized construction. Bulk supply available. OEM configurations supported.",
    image: "/home/banner/sub-banner-2.jpg",
    link: "/products",
    btnText: "Request a Sample",
    // Premium crystal aqua-teal & glass gradient
    gradientClass:
      "from-[#d6f4fa]/95 via-[#d6f4fa]/80 via-45% sm:via-[#d6f4fa]/65 sm:via-55% to-transparent",
    badgeStyle: "bg-white/70 text-[#023047] border border-white/80 shadow-2xs",
    dotColor: "bg-[#023047]",
  },
];

// 2. The Arrow Function Component
const PromoSection = () => {
  return (
    <section className="main-container py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
        {promoData.map((item) => (
          // Main Container for each block
          <div
            key={item.id}
            className="relative min-h-[260px] sm:min-h-[280px] lg:h-[310px] w-full rounded-2xl sm:rounded-3xl overflow-hidden group border border-white/60 shadow-[0_4px_24px_rgba(2,48,71,0.06)] hover:shadow-[0_16px_40px_rgba(2,48,71,0.12)] transition-all duration-500 bg-slate-100"
          >
            {/* ========================= */}
            {/* Background Image Layer    */}
            {/* ========================= */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={item.image}
                alt={item.title.replace("\n", " ")}
                fill
                className="object-cover object-[85%_center] sm:object-right md:object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Glassmorphic Gradient Overlay with Directional Blur */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.gradientClass} backdrop-blur-[3px] [mask-image:linear-gradient(to_right,black_50%,transparent_90%)] pointer-events-none`}
              />

              {/* Top Glass Specular Reflection Highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white/90 via-white/50 to-transparent pointer-events-none" />
            </div>

            {/* ========================= */}
            {/* Text Content Layer        */}
            {/* ========================= */}
            <div className="relative z-10 h-full p-6 sm:p-8 lg:p-10 flex flex-col justify-between items-start">
              
              {/* Glassmorphic Tagline Badge */}
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-md ${item.badgeStyle} text-[10px] sm:text-xs font-bold tracking-wider uppercase`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor} animate-pulse`} />
                {item.tagline}
              </div>

              {/* Title with smart width & sizing so it never overlaps the product */}
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-[#023047] leading-snug sm:leading-tight max-w-[70%] sm:max-w-[65%] md:max-w-[60%] my-auto drop-shadow-2xs">
                {item.title}
              </h3>

              {/* Glassmorphic Action Button */}
              <Link
                href={item.link}
                className="group/btn inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full backdrop-blur-md bg-[#023047] text-white hover:bg-[#3A9AFF] hover:shadow-[0_8px_20px_rgba(58,154,255,0.35)] border border-white/20 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-sm mt-2"
              >
                <span>{item.btnText}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoSection;