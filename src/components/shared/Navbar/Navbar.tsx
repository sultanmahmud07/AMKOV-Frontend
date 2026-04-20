"use client";
import Image from "next/image";
import NavLink from "./NavLink";
import React, { useEffect, useState } from "react";
import { IUser } from "@/types/user.interface";
import UserProfileMenu from "./UserProfileMenu";
import { Search, Menu, ChevronDown, User, X, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import Link from "next/link";
import MegaMenu from "./MegaMenu";
import ProductSubmenu from "./ProductSubmenu";
import SearchBar from "./SearchBar";
import { AnimatePresence, motion } from "framer-motion"; // Added motion import
import LoginModal from "@/components/auth/login-modal";
import MobileSidebar from "./MobileSidebar";
import LanguageSwitcher from "./LanguageSwitcher";
import SolutionSubmenu from "./SolutionSubmenu";
import AboutSubmenu from "./AboutSubmenu";
import { IProduct } from "@/types/product.interface";

type Props = {
  products?: IProduct[] | null;
  accessToken?: string | null;
  userInfo?: IUser | null;
};

const Navbar = (props: Props) => {
  const [navToggle, setNavToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // New state for Search Box

  const { products, accessToken, userInfo } = props;

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = navToggle ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navToggle]);

  // Handle sticky menu logic
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 130) {
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
    { href: "/products", label: "PRODUCTS", role: "PUBLIC", hasDropdown: true },
    { href: "/solution", label: "Solution", role: "PUBLIC", hasDropdown: false },
    { href: "/about", label: "About", role: "PUBLIC", hasDropdown: false },
    { href: "/download", label: "Download", role: "PUBLIC" },
    { href: "/news", label: "News", role: "PUBLIC" },
    { href: "/contact", label: "Contact", role: "PUBLIC", badge: "24/7" },
  ];

  return (
    <header className="w-full relative z-50">

      {/* ========================================= */}
      {/* 1. TOP BAR (Promos & Quick Links) */}
      {/* ========================================= */}
      <div className="hidden lg:block bg-[#3A9AFF] text-white text-xs py-2">
        <div className="main-container flex justify-between items-center">
          <p>OEM Manufacturing • ODM Development • Bulk Supply — Serving 50+ Countries Worldwide</p>
          <div className="flex items-center gap-4 font-medium">
            <Link href="/news" className="hover:text-[#023047] transition">New Article</Link>
            <span className="w-px h-3 bg-white/50"></span>
            <Link href="/support" className="hover:text-[#023047] transition">Support</Link>
            <span className="w-px h-3 bg-white/50"></span>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 ml-2">
              <a href="https://www.facebook.com/amkovcameras" target="_blank" rel="noopener noreferrer" className="hover:text-[#023047] transition-colors" aria-label="Facebook">
                <Facebook size={14} />
              </a>
              <a href="https://x.com/Amkovery" target="_blank" rel="noopener noreferrer" className="hover:text-[#023047] transition-colors" aria-label="Twitter">
                <Twitter size={14} />
              </a>
              <a href="https://www.instagram.com/amkovekim" target="_blank" rel="noopener noreferrer" className="hover:text-[#023047] transition-colors" aria-label="Instagram">
                <Instagram size={14} />
              </a>
              <a href="https://www.linkedin.com/company/shenzhen-amkovery-technology-co-ltd/" target="_blank" rel="noopener noreferrer" className="hover:text-[#023047] transition-colors" aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* 2. MIDDLE BAR WRAPPER (Handles Sticky Scroll) */}
      {/* ========================================= */}

      {/* Placeholder div prevents page content from jumping up when navbar becomes fixed */}
      {isSticky && <div className="h-20 w-full hidden lg:block"></div>}

      <div
        className={`w-full bg-white transition-all duration-300 border-b border-gray-100 ${isSticky
          ? "fixed top-0 left-0 right-0 z-50 shadow-md animate-in slide-in-from-top-2"
          : "relative z-40 shadow-sm"
          }`}
      >
        <div className="main-container py-5 flex justify-between items-center gap-8">

          {/* Logo */}
          <div className="shrink-0 z-50">
            <Link href="/">
              <Image
                src="/logo/logo.png"
                alt="Amkov Logo"
                width={160}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <nav className="flex items-center gap-5 h-full">
              {navigationLinks.map((link, index) => (
                <div key={index} className="group h-full flex items-center">
                  <NavLink
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-bold text-[#023047] hover:text-[#3A9AFF] uppercase transition-colors duration-300 h-full"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-300 group-hover:-rotate-180"
                      />
                    )}
                  </NavLink>
                  {link.label === "PRODUCTS" && (
                    <MegaMenu>
                      <ProductSubmenu products={products} />
                    </MegaMenu>
                  )}
                  {link.label === "Solution" && (
                    <MegaMenu>
                      <SolutionSubmenu />
                    </MegaMenu>
                  )}
                  {link.label === "About" && (
                    <MegaMenu>
                      <AboutSubmenu />
                    </MegaMenu>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Action Icons - Desktop */}
          <div className="hidden lg:flex items-center gap-6 text-[#023047]">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="search-button cursor-pointer hover:text-[#3A9AFF] transition"
            >
              {isSearchOpen ? <Search size={24} strokeWidth={1.5} className="text-primary" /> : <Search size={24} strokeWidth={1.5} />}
            </button>
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

            {/* ========================================= */}
            {/* NEW LANGUAGE SWITCHER COMPONENT */}
            {/* ========================================= */}
            <LanguageSwitcher />
          </div>

          {/* Action Icons - Mobile */}
          <div className="lg:hidden z-50 flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="search-button p-2"
            >
              {isSearchOpen ? (
                <X size={26} strokeWidth={1.5} className="text-[#023047]" />
              ) : (
                <Search size={26} strokeWidth={1.5} className="text-[#023047] hover:text-[#3A9AFF] transition" />
              )}
            </button>
            <button onClick={() => setNavToggle(!navToggle)} className="text-[#023047] p-2">
              {navToggle ? <span className="text-2xl font-bold"><X /></span> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* ========================================= */}
        {/* 3. EXPANDING SEARCH BOX (Desktop & Mobile) */}
        {/* ========================================= */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full bg-white shadow-xl  border-t border-gray-100 z-40"
            >
              <div className="main-container flex items-center justify-center gap-4 py-4">
                {/* Pass onClose if your SearchBar accepts it to close the menu on submit */}
                <SearchBar />
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="search-button cursor-pointer hover:text-[#3A9AFF] transition"
                >
                  {isSearchOpen ? <X size={24} strokeWidth={1.5} /> : <Search size={24} strokeWidth={1.5} />}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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

      {/* Login Modal */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <LoginModal onClose={() => setIsLoginModalOpen(false)} />
        )}
      </AnimatePresence>

    </header>
  );
};

export default Navbar;