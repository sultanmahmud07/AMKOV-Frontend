"use client";
import Image from "next/image";
import NavLink from "./NavLink";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { IUser } from "@/types/user.interface";
import UserProfileMenu from "./UserProfileMenu";
import { Search, Heart, Menu, ChevronDown, User, Download, X } from "lucide-react";
import Link from "next/link";
import CartButton from "@/components/pages/Cart/CartButton";
import MegaMenu from "./MegaMenu";
import CategorySubmenu from "./CategorySubmenu";
import ProductSubmenu from "./ProductSubmenu";
import SearchBar from "./SearchBar";
import { AnimatePresence } from "framer-motion";
import LoginModal from "@/components/auth/login-modal";
import MobileSidebar from "./MobileSidebar";
type Props = {
  accessToken?: string | null;
  userInfo?: IUser | null;
};

const Navbar = (props: Props) => {
  const [navToggle, setNavToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
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
    { href: "/categories", label: "CATEGORIES", role: "PUBLIC", hasDropdown: true },
    { href: "/products", label: "PRODUCTS", role: "PUBLIC", hasDropdown: true, },
    { href: "/solution", label: "Solution", role: "PUBLIC" },
    { href: "/about", label: "About", role: "PUBLIC" },
    { href: "/contact", label: "Contact", role: "PUBLIC", badge: "24/7" },
    // { href: "/deals", label: "TOP DEALS", role: "PUBLIC", hasDropdown: true, badge: "HOT" },
  ];

  return (
    <header className="w-full bg-white relative shadow">
      {/* ========================================= */}
      {/* 1. TOP BAR (Promos & Quick Links) - Hidden on Mobile */}
      {/* ========================================= */}
      <div className="hidden lg:block bg-[#3A9AFF] text-white text-xs py-2">
        <div className="main-container flex justify-between items-center">
          <p>OEM • ODM • Bulk Supply Available Worldwide</p>
          <div className="flex items-center gap-4 font-medium">
            <Link href="/news" className="hover:text-[#023047] transition">New Article</Link>
            <span className="w-px h-3 bg-white/50"></span>
            <Link href="/support" className="hover:text-[#023047] transition">Support</Link>
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
      <div className="main-container py-5 flex justify-between items-center gap-8">
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
        <SearchBar />

        {/* Action Icons - Desktop Only */}
        <div className="hidden lg:flex items-center gap-6 text-[#023047]">
          {accessToken ? (
            <UserProfileMenu userInfo={userInfo} />
          ) : (
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="hover:text-[#3A9AFF] transition cursor-pointer"
            >
              <User size={24} strokeWidth={1.5} />
            </button>
          )}

          <Link href="/wishlist" className="relative hover:text-[#3A9AFF] transition">
            <Heart size={24} strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-1.5 bg-[#3A9AFF] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
          </Link>

          <CartButton />
        </div>

        {/* Mobile Toggle Icon */}
        <div className="lg:hidden z-50">
          <button >
            <Search size={28} strokeWidth={1.5} className="text-[#023047] hover:text-[#3A9AFF] transition" />
          </button>
          <button onClick={() => setNavToggle(!navToggle)} className="text-[#023047] p-2">
            {navToggle ? <span className="text-2xl font-bold"><X /></span> : <Menu size={28} />}
          </button>
        </div>
      </div>
      <div className={`hidden lg:block w-full border-t border-gray-100 bg-white transition-all duration-300 ${isSticky ? "fixed top-0 left-0 right-0 z-40 shadow-md animate-in slide-in-from-top-2" : ""}`}>
        <div className="main-container flex justify-between items-center h-14">

          {/* Shop By Categories Dropdown */}
          <button className="flex items-center gap-3 bg-transparent text-[#023047] font-bold text-sm h-full px-2 hover:text-[#3A9AFF] transition">
            <Menu size={20} />
            SHOP BY CATEGORIES
          </button>

          <nav className="flex items-center gap-8 h-full">
            {navigationLinks.map((link, index) => (
              <div key={index} className=" group h-full flex items-center">

                <NavLink
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-bold text-[#023047] hover:text-[#3A9AFF] uppercase transition-colors duration-300 h-full"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} />}
                </NavLink>

                {link.label === "CATEGORIES" && (
                  <MegaMenu>
                    <CategorySubmenu />
                  </MegaMenu>
                )}

                {link.label === "PRODUCTS" && (
                  <MegaMenu>
                    <ProductSubmenu />
                  </MegaMenu>
                )}

              </div>
            ))}
          </nav>
          {/* Today's Deal */}
          <Link href="/download" className="flex items-center gap-2 text-sm font-bold text-green-600 hover:text-green-700 transition">
            <span className="flex h-5 w-5 items-center justify-center bg-green-100 rounded-full"><Download size={14} className="text-green-600" /></span>
            Guid Download
          </Link>
        </div>
      </div>
{/* ========================================= */}
      {/* SEPARATED MOBILE SLIDE-OUT MENU */}
      {/* ========================================= */}
      <MobileSidebar 
        isOpen={navToggle} 
        onClose={() => setNavToggle(false)} 
        accessToken={accessToken} 
        userInfo={userInfo} 
      />

      <AnimatePresence>
        {isLoginModalOpen && (
          <LoginModal onClose={() => setIsLoginModalOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;