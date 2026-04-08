"use client";

import { IProduct } from "@/types/product.interface";
import Image from "next/image";
import Link from "next/link";

const ProductSubmenu = ({ products }: { products?: IProduct[] | null }) => {
  return (
    <div className="w-full py-5">
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 lg:gap-10">
        
        {products?.map((item, i) => (
          <Link 
            key={i} 
            href={item.slug ? `/products/${item.slug}` : "/products"}
            className="group "
          >
            {/* Image Container with Animation */}
            <div className="relative aspect-square w-full  transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-110">
              {/* Added drop shadow that intensifies on hover */}
              <div className="absolute w-full inset-0  transition-all duration-500">
                <Image
                  src={item.images?.[0] || "/default.png"}
                  alt={item.name}
                  fill
                  className="h-full w-full"
                  sizes="150px"
                />
              </div>
            </div>

            {/* Text with Color Hover */}
            <h6 className="text-sm text-center font-semibold text-gray-600  transition-colors duration-300">
              {item.name.slice(0, 30)} {/* Limit to 30 characters for better display */}
            </h6>

            {/* Subtle animated underline dot indicator (Optional, adds a premium feel) */}
            <span className="w-1 h-1 rounded-full bg-[#3A9AFF] mt-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"></span>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default ProductSubmenu;