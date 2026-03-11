"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "zh", label: "中文" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex items-center gap-2" ref={dropdownRef}>
      
      {/* 1. Pill-Shaped Button (Matches your reference image) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#F4F7F9] hover:bg-[#E2E8F0] text-gray-600 px-4 py-2 rounded-full text-sm font-medium transition-colors"
      >
        <span>Language</span>
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>

      {/* 3. Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-12 left-0 w-36 bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden z-50 py-2"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setSelectedLang(lang);
                  setIsOpen(false);
                  // Add your actual language switching logic here (e.g., i18n, next-intl)
                }}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[#F4F7F9] ${
                  selectedLang.code === lang.code ? "text-[#3A9AFF] bg-[#F4F7F9]/50" : "text-gray-600"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}