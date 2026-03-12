"use client";

import Image from "next/image";
import Link from "next/link";

// Matching the exact items from your reference image
const productCategories = [
  {
    name: "Optical Zoom Camera",
    img: "/home/product/1.jpg", // Replace with your actual image paths
    href: "/products/optical-zoom",
  },
  {
    name: "Digital Zoom Camera",
    img: "/home/product/2.jpg",
    href: "/products/digital-zoom",
  },
  {
    name: "V-Log Camera",
    img: "/home/product/3.jpg",
    href: "/products/v-log",
  },
  {
    name: "Video Camera",
    img: "/home/product/4.jpg",
    href: "/products/video",
  },
  {
    name: "Waterproof Camera",
    img: "/home/product/5.jpg",
    href: "/products/waterproof",
  },
  {
    name: "Instant Print Camera",
    img: "/home/product/6.jpg",
    href: "/products/instant-print",
  },
  {
    name: "Kids Camera",
    img: "/home/product/7.jpg",
    href: "/products/kids",
  },
  {
    name: "Kids Camera",
    img: "/home/product/8.jpg",
    href: "/products/kids",
  },
];

const ProductSubmenu = () => {
  return (
    // Removed opacity-0 so it shows up natively inside your MegaMenu wrapper
    <div className="w-full py-5">
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 lg:gap-10">
        
        {productCategories.map((item, i) => (
          <Link 
            key={i} 
            href={item.href} 
            className="group "
          >
            {/* Image Container with Animation */}
            <div className="relative aspect-square w-full  transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-110">
              {/* Added drop shadow that intensifies on hover */}
              <div className="absolute w-full inset-0  transition-all duration-500">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="h-full w-full"
                  sizes="150px"
                />
              </div>
            </div>

            {/* Text with Color Hover */}
            <h6 className="text-sm text-center font-semibold text-gray-600  transition-colors duration-300">
              {item.name}
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