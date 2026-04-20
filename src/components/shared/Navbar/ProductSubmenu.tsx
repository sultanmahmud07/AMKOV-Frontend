"use client";

import { IProduct } from "@/types/product.interface";
import Image from "next/image";
import Link from "next/link";

const ProductSubmenu = ({ products }: { products?: IProduct[] | null }) => {
  return (
    <div className="w-full py-5">
      {/* Changed from grid to flex with overflow-x-auto.
        Added pb-6 (padding-bottom) so the hover animation (-translate-y-3) 
        doesn't get cut off by the overflow container.
      */}
      <div className="flex overflow-x-auto gap-4 md:gap-6 lg:gap-10 pb-6 custom-scrollbar scroll-smooth">
        
        {products?.map((item, i) => (
          <Link 
            key={i} 
            href={item.slug ? `/products/${item.slug}` : "/products"}
            // Added shrink-0 so items don't squish, and a fixed width to fit ~8 on large screens
            className="group shrink-0 w-24 sm:w-28 lg:w-[130px] flex flex-col items-center"
          >
            {/* Image Container with Animation */}
            <div className="relative aspect-square w-full transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-110">
              <div className="absolute w-full inset-0 transition-all duration-500">
                <Image
                  src={item.images?.[0] || "/default.png"}
                  alt={item.name}
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
            </div>

            {/* Text with Color Hover */}
             <h6 className="text-sm text-center font-semibold text-gray-600  transition-colors duration-300">
              {item.name.slice(0, 30)} {/* Limit to 30 characters for better display */}
            </h6>

            {/* Subtle animated underline dot indicator */}
            <span className="w-1 h-1 rounded-full bg-[#3A9AFF] mt-1 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"></span>
          </Link>
        ))}

      </div>

      {/* Global style to hide the physical scrollbar while keeping it functional for swiping/scrolling */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar { display: none; }
        .custom-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default ProductSubmenu;