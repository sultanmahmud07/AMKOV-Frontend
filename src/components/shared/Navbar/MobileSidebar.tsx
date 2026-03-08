/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";
import {
      X,
      ChevronDown,
      Camera,
      Package,
      Info,
      Phone,
      House,
      MessageSquareDot,
      Download,
      HandHelping,
} from "lucide-react";
import UserProfileMenu from "./UserProfileMenu"; // Adjust path if needed
import Image from "next/image";

interface MobileSidebarProps {
      isOpen: boolean;
      onClose: () => void;
      accessToken?: string | null;
      userInfo?: any;
}

const MobileSidebar = ({ isOpen, onClose, accessToken, userInfo }: MobileSidebarProps) => {
      // State to handle which accordion menu is open
      const [openAccordion, setOpenAccordion] = useState<string | null>(null);

      const toggleAccordion = (menu: string) => {
            setOpenAccordion((prev) => (prev === menu ? null : menu));
      };

      // Mock data mapping to your Amkov categories
      const categories = [
            { name: "All Categories", href: "/categories" },
            { name: "Optical Zoom", href: "/products?category=optical-zoom" },
            { name: "Digital Zoom", href: "/products?category=digital-zoom" },
            { name: "V-Log Cameras", href: "/products?category=v-log" },
            { name: "Video Cameras", href: "/products?category=video" },
            { name: "Waterproof", href: "/products?category=waterproof" },
            { name: "Instant Print", href: "/products?category=instant-print" },
      ];

      const productLinks = [
            { name: "New Arrivals", href: "/products" },
            { name: "Best Sellers", href: "/products" },
            { name: "Accessories", href: "/products" },
            { name: "View All Products", href: "/products" },
      ];

      return (
            <>
                  {/* 1. DARK BACKDROP OVERLAY */}
                  <div
                        onClick={onClose}
                        className={`fixed inset-0 bg-[#023047]/60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                              }`}
                  />

                  {/* 2. SLIDE-IN DRAWER */}
                  <div
                        className={`fixed top-0 left-0 w-[85%] max-w-[360px] h-full bg-white z-50 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex flex-col lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
                              }`}
                  >
                        {/* Header */}
                        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-[#F8FAFC]">
                              <Link href="/">
                                    <Image
                                          src="/logo/logo.png" // Ensure this path is correct
                                          alt="Amkov Logo"
                                          width={160}
                                          height={50}
                                          className="h-10 w-auto"
                                    />
                              </Link>
                              <button
                                    onClick={onClose}
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200/50 text-gray-500 hover:bg-gray-200 hover:text-[#023047] transition-colors"
                              >
                                    <X size={20} />
                              </button>
                        </div>

                        {/* Footer / Auth Section */}
                        {/* <div className="p-3">
                              {!accessToken ? (
                                    <div className="flex flex-col gap-3">
                                          <div className="flex items-center gap-3 p-3 bg-[#F4F7F9] rounded-xl border border-gray-200">
                                               
                                          <UserProfileMenu userInfo={userInfo} />
                                                <div className="flex flex-col">
                                                      <span className="text-sm font-bold text-[#023047]">{userInfo?.name || "Welcome Back"}</span>
                                                      <span className="text-xs font-medium text-gray-500">Manage Account</span>
                                                </div>
                                          </div>
                                    </div>
                              ) : (
                                    <div className="flex gap-3">
                                          <Link href="/login" onClick={onClose} className="flex-1">
                                                <button className="w-full h-12 flex items-center justify-center bg-[#F4F7F9] text-[#023047] hover:bg-gray-200 font-bold rounded-xl transition-colors">
                                                      Log In
                                                </button>
                                          </Link>
                                          <Link href="/register" onClick={onClose} className="flex-1">
                                                <button className="w-full h-12 flex items-center justify-center bg-[#023047] text-white hover:bg-[#3A9AFF] font-bold rounded-xl transition-colors shadow-sm">
                                                      Register
                                                </button>
                                          </Link>
                                    </div>
                              )}
                        </div> */}
                        {/* Scrollable Navigation Area */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-2">

                              {/* Static Link: Home */}
                              <Link
                                    href="/"
                                    onClick={onClose}
                                    className="flex items-center gap-3 text-base font-bold text-[#023047] p-3 rounded-xl hover:bg-[#F4F7F9] hover:text-[#3A9AFF] transition-colors"
                              >
                                    <House size={18} className="text-gray-400" />
                                    Home
                              </Link>

                              {/* Accordion: Categories */}
                              <div className="rounded-xl overflow-hidden bg-white">
                                    <button
                                          onClick={() => toggleAccordion("categories")}
                                          className={`w-full flex items-center justify-between p-3 text-base font-bold transition-colors rounded-xl ${openAccordion === "categories" ? "text-[#3A9AFF] bg-[#F4F7F9]" : "text-[#023047] hover:bg-[#F4F7F9]"}`}
                                    >
                                          <div className="flex items-center gap-3">
                                                <Camera size={18} className={openAccordion === "categories" ? "text-[#3A9AFF]" : "text-gray-400"} />
                                                Categories
                                          </div>
                                          <ChevronDown size={18} className={`transition-transform duration-300 ${openAccordion === "categories" ? "rotate-180" : ""}`} />
                                    </button>

                                    {/* Expanded Content */}
                                    <div className={`grid transition-all duration-300 ease-in-out ${openAccordion === "categories" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                          <div className="overflow-hidden">
                                                <div className="pl-11 pr-3 py-2 flex flex-col gap-1">
                                                      {categories.map((cat, idx) => (
                                                            <Link
                                                                  key={idx}
                                                                  href={cat.href}
                                                                  onClick={onClose}
                                                                  className="py-2.5 text-sm font-semibold text-gray-500 hover:text-[#3A9AFF] transition-colors"
                                                            >
                                                                  {cat.name}
                                                            </Link>
                                                      ))}
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              {/* Accordion: Products */}
                              <div className="rounded-xl overflow-hidden bg-white">
                                    <button
                                          onClick={() => toggleAccordion("products")}
                                          className={`w-full flex items-center justify-between p-3 text-base font-bold transition-colors rounded-xl ${openAccordion === "products" ? "text-[#3A9AFF] bg-[#F4F7F9]" : "text-[#023047] hover:bg-[#F4F7F9]"}`}
                                    >
                                          <div className="flex items-center gap-3">
                                                <Package size={18} className={openAccordion === "products" ? "text-[#3A9AFF]" : "text-gray-400"} />
                                                Products
                                          </div>
                                          <ChevronDown size={18} className={`transition-transform duration-300 ${openAccordion === "products" ? "rotate-180" : ""}`} />
                                    </button>

                                    {/* Expanded Content */}
                                    <div className={`grid transition-all duration-300 ease-in-out ${openAccordion === "products" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                          <div className="overflow-hidden">
                                                <div className="pl-11 pr-3 py-2 flex flex-col gap-1">
                                                      {productLinks.map((link, idx) => (
                                                            <Link
                                                                  key={idx}
                                                                  href={link.href}
                                                                  onClick={onClose}
                                                                  className="py-2.5 text-sm font-semibold text-gray-500 hover:text-[#3A9AFF] transition-colors"
                                                            >
                                                                  {link.name}
                                                            </Link>
                                                      ))}
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              {/* Static Link: About */}
                              <Link
                                    href="/about"
                                    onClick={onClose}
                                    className="flex items-center gap-3 text-base font-bold text-[#023047] p-3 rounded-xl hover:bg-[#F4F7F9] hover:text-[#3A9AFF] transition-colors"
                              >
                                    <Info size={18} className="text-gray-400" />
                                    About Us
                              </Link>

                              {/* Static Link: Contact */}
                              <Link
                                    href="/solution"
                                    onClick={onClose}
                                    className="flex items-center gap-3 text-base font-bold text-[#023047] p-3 rounded-xl hover:bg-[#F4F7F9] hover:text-[#3A9AFF] transition-colors"
                              >
                                    <MessageSquareDot size={18} className="text-gray-400" />
                                    Solution
                              </Link>
                              {/* Static Link: Contact */}
                              <Link
                                    href="/download"
                                    onClick={onClose}
                                    className="flex items-center gap-3 text-base font-bold text-[#023047] p-3 rounded-xl hover:bg-[#F4F7F9] hover:text-[#3A9AFF] transition-colors"
                              >
                                    <Download size={18} className="text-gray-400" />
                                    Download
                              </Link>
                              {/* Static Link: Contact */}
                              <Link
                                    href="/support"
                                    onClick={onClose}
                                    className="flex items-center gap-3 text-base font-bold text-[#023047] p-3 rounded-xl hover:bg-[#F4F7F9] hover:text-[#3A9AFF] transition-colors"
                              >
                                    <HandHelping size={18} className="text-gray-400" />
                                    Support
                              </Link>
                              {/* Static Link: Contact */}
                              <Link
                                    href="/contact"
                                    onClick={onClose}
                                    className="flex items-center gap-3 text-base font-bold text-[#023047] p-3 rounded-xl hover:bg-[#F4F7F9] hover:text-[#3A9AFF] transition-colors"
                              >
                                    <Phone size={18} className="text-gray-400" />
                                    Contact
                              </Link>
                        </div>


                  </div>
            </>
      );
};

export default MobileSidebar;