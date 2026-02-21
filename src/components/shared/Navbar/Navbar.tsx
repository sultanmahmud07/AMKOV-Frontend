"use client";

import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { IUser } from "@/types/user.interface";
import UserProfileMenu from "./UserProfileMenu";
import { Search, Heart, ShoppingBag, Menu, ChevronDown, User, Download } from "lucide-react";

type Props = {
  accessToken?: string | null;
  userInfo?: IUser | null;
};

const Navbar = (props: Props) => {
  const [navToggle, setNavToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { accessToken, userInfo } = props;

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = navToggle ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navToggle]);

  // Handle sticky menu logic (triggers after scrolling past the top two bars)
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 130) { // Adjust this value based on your top bars' exact height
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigationLinks = [
    { href: "/", label: "HOME", role: "PUBLIC" },
    { href: "/shop", label: "SHOP", role: "PUBLIC", hasDropdown: true },
    { href: "/categories", label: "CATEGORIES", role: "PUBLIC", badge: "SALE" },
    { href: "/products", label: "PRODUCTS", role: "PUBLIC", badge: "HOT" },
    { href: "/deals", label: "TOP DEALS", role: "PUBLIC", hasDropdown: true },
  ];

  return (
    <header className="w-full bg-white relative">
      {/* ========================================= */}
      {/* 1. TOP BAR (Promos & Quick Links) - Hidden on Mobile */}
      {/* ========================================= */}
      <div className="hidden lg:block bg-[#3A9AFF] text-white text-xs py-2">
        <div className="container mx-auto flex justify-between items-center">
          <p>Get Upto 25% Discount On First Order: GET25OFF - <Link href="/shop" className="underline font-semibold hover:text-[#023047] transition">SHOP NOW</Link></p>
          <div className="flex items-center gap-4 font-medium">
            <Link href="/track-order" className="hover:text-[#023047] transition">Track Order</Link>
            <span className="w-px h-3 bg-white/50"></span>
            <Link href="/help" className="hover:text-[#023047] transition">Help Center</Link>
            <span className="w-px h-3 bg-white/50"></span>
            <button className="flex items-center gap-1 hover:text-[#023047] transition">English <ChevronDown size={12} /></button>
            <span className="w-px h-3 bg-white/50"></span>
            <button className="flex items-center gap-1 hover:text-[#023047] transition">$ USD <ChevronDown size={12} /></button>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* 2. MIDDLE BAR (Logo, Search, Actions) */}
      {/* ========================================= */}
      <div className="container mx-auto py-5 flex justify-between items-center gap-8">
        {/* Logo */}
        <div className="shrink-0 z-50">
          <Link href="/">
            <Image
              src="/logo/logo.png" // Ensure this path is correct
              alt="Amkov Logo"
              width={160}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Search Bar - Desktop Only */}
        <div className="hidden lg:flex flex-1 max-w-2xl border border-gray-300 rounded-full items-center pl-4 pr-1 h-12 focus-within:border-[#3A9AFF] transition-colors">
          <button className="flex items-center gap-2 text-sm text-gray-600 font-medium whitespace-nowrap pr-4 border-r border-gray-300">
            All Categories <ChevronDown size={16} />
          </button>
          <input 
            type="text" 
            placeholder="Search product here..." 
            className="flex-1 px-4 h-full outline-none text-sm bg-transparent"
          />
          <button className="h-10 w-10 flex items-center justify-center bg-transparent text-gray-500 hover:text-[#3A9AFF] transition">
            <Search size={20} />
          </button>
        </div>

        {/* Action Icons - Desktop Only */}
        <div className="hidden lg:flex items-center gap-6 text-[#023047]">
          {accessToken ? (
             <UserProfileMenu userInfo={userInfo} />
          ) : (
            <Link href="/login" className="hover:text-[#3A9AFF] transition">
              <User size={24} strokeWidth={1.5} />
            </Link>
          )}
          
          <Link href="/wishlist" className="relative hover:text-[#3A9AFF] transition">
            <Heart size={24} strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-1.5 bg-[#3A9AFF] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
          </Link>

          <Link href="/cart" className="flex items-center gap-2 hover:text-[#3A9AFF] transition">
            <div className="relative">
              <ShoppingBag size={24} strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-1.5 bg-[#3A9AFF] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">3</span>
            </div>
            <div className="flex flex-col text-xs leading-tight">
              <span className="text-gray-500 font-medium">My Cart</span>
              <span className="font-bold text-[#023047]">$530.00</span>
            </div>
          </Link>
        </div>

        {/* Mobile Toggle Icon */}
        <div className="lg:hidden z-50">
           <button onClick={() => setNavToggle(!navToggle)} className="text-[#023047] p-2">
              {navToggle ? <span className="text-2xl font-bold">&times;</span> : <Menu size={28} />}
           </button>
        </div>
      </div>

      {/* ========================================= */}
      {/* 3. BOTTOM MENU BAR (Sticky on Scroll) */}
      {/* ========================================= */}
      <div className={`hidden lg:block w-full border-t border-gray-100 bg-white transition-all duration-300 ${isSticky ? "fixed top-0 left-0 right-0 z-40 shadow-md animate-in slide-in-from-top-2" : ""}`}>
        <div className="container mx-auto flex justify-between items-center h-14">
          
          {/* Shop By Categories Dropdown */}
          <button className="flex items-center gap-3 bg-transparent text-[#023047] font-bold text-sm h-full px-2 hover:text-[#3A9AFF] transition">
            <Menu size={20} />
            SHOP BY CATEGORIES
          </button>

          {/* Main Navigation Links */}
          <nav className="flex items-center gap-8 h-full">
            {navigationLinks.map((link, index) => (
              <NavLink
                key={index}
                href={link.href}
                className="group flex items-center gap-1 text-sm font-bold text-[#023047] hover:text-[#3A9AFF] transition-colors duration-300 h-full relative"
              >
                <span className={`h-full flex items-center border-b-2 transition-colors duration-300 ${link.label === "HOME" ? "border-[#3A9AFF] text-[#3A9AFF]" : "border-transparent group-hover:border-[#3A9AFF]"}`}>
                   {link.label}
                </span>
                
                {link.hasDropdown && <ChevronDown size={14} className="text-gray-400 group-hover:text-[#3A9AFF]" />}
                
                {link.badge && (
                  <span className={`absolute top-0 -right-4 text-[9px] text-white px-1.5 py-0.5 rounded-sm ${link.badge === 'SALE' ? 'bg-[#3A9AFF]' : 'bg-red-500'}`}>
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Today's Deal */}
          <Link href="/deals" className="flex items-center gap-2 text-sm font-bold text-green-600 hover:text-green-700 transition">
             <span className="flex h-5 w-5 items-center justify-center bg-green-100 rounded-full"><Download size={14} className="text-green-600" /></span>
             Guid Download 
          </Link>
        </div>
      </div>

      {/* ========================================= */}
      {/* 4. MOBILE SLIDE-OUT MENU */}
      {/* ========================================= */}
      <div className={`fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-white shadow-xl transition-transform duration-300 ease-in-out transform z-30 overflow-y-auto ${navToggle ? "translate-x-0" : "-translate-x-full"} lg:hidden`}>
        <div className="p-4 space-y-6">
           {/* Mobile Search */}
           <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <input type="text" placeholder="Search..." className="flex-1 p-3 text-sm outline-none" />
              <button className="bg-[#3A9AFF] text-white px-4"><Search size={18} /></button>
           </div>

          {/* Mobile Links */}
          <div className="flex flex-col space-y-1">
            {navigationLinks.map((link, index) => (
              <NavLink
                key={index}
                onClick={() => setNavToggle(false)}
                href={link.href}
                className="flex items-center justify-between text-base font-semibold text-[#023047] p-3 border-b border-gray-100 hover:text-[#3A9AFF] hover:bg-gray-50"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={16} />}
              </NavLink>
            ))}
          </div>

          {/* Mobile Auth/Profile */}
          <div className="pt-4 flex flex-col gap-3">
             {accessToken ? (
                <div className="border border-gray-200 p-3 rounded-md flex justify-center">
                  <UserProfileMenu userInfo={userInfo} />
                </div>
              ) : (
                <>
                  <Button asChild className="w-full bg-[#3A9AFF] hover:bg-blue-600 text-white rounded-md h-11">
                    <Link href="/login" onClick={() => setNavToggle(false)}>Login</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-[#023047] text-[#023047] rounded-md h-11">
                    <Link href="/register" onClick={() => setNavToggle(false)}>Register</Link>
                  </Button>
                </>
              )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;