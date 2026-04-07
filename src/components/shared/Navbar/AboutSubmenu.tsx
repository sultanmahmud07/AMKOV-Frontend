"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// UPDATED: Added #hash links to scroll to specific sections on the /about page
const aboutLinks = [
  { name: "Company", href: "/about#company" },
  { name: "History", href: "/about#history" },
  { name: "Culture", href: "/about#culture" },
  { name: "R & D Manufacturing", href: "/about#manufacturing" },
  { name: "Certification", href: "/about#certification" },
];

export default function AboutSubmenu() {
  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto flex items-stretch">
        
        {/* Left: Title & Vertical Line */}
        <div className="w-1/4 flex items-center justify-end pr-10 border-r border-gray-200 relative">
          <h2 className="text-3xl font-extrabold text-[#023047] tracking-tight">
            About Us
          </h2>
          <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-[3px] h-16 bg-[#3A9AFF] rounded-full"></div>
        </div>

        {/* Middle: Links */}
        <div className="w-1/3 flex flex-col justify-center pl-10 pr-6 space-y-5">
          {aboutLinks.map((link, i) => (
            <Link 
              key={i} 
              href={link.href} 
              className="group flex items-center justify-between text-gray-500 hover:text-[#3A9AFF] transition-colors"
            >
              <span className="text-sm font-semibold transition-transform duration-300 group-hover:translate-x-2">
                {link.name}
              </span>
              <ChevronRight 
                size={16} 
                className="text-gray-300 group-hover:text-[#3A9AFF] transition-transform duration-300 group-hover:translate-x-1" 
              />
            </Link>
          ))}
        </div>

        {/* Right: Featured Image */}
        <div className="w-5/12 pl-6 flex items-center">
          <div className="relative w-full h-[220px] rounded-2xl overflow-hidden group shadow-md">
            <Image 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" 
              alt="AMKOV Headquarters" 
              fill 
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-[#023047]/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>

      </div>
    </div>
  );
}