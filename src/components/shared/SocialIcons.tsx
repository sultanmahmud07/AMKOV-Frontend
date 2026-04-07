"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { 
  FiPhone, 
  FiMessageCircle, 
  FiX, 
  FiChevronUp, 
  FiChevronDown 
} from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const SocialIcons = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  // States for scroll position detection
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if at the top (with a 20px buffer)
      setIsAtTop(currentScrollY < 20);

      // Check if at the bottom (with a 20px buffer)
      setIsAtBottom(currentScrollY + windowHeight >= documentHeight - 20);
    };

    // Run once on mount to check initial position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handlers
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  const contactData = [
    {
      icon: <FaWhatsapp />,
      link: `https://wa.me/13713986978`,
      label: "WhatsApp",
    },
    {
      icon: <MdOutlineEmail />,
      link: `mailto:services@amkov.com`,
      label: "services@amkov.com",
    },
    {
      icon: <FiPhone />,
      link: `tel:0086-(0)755-83762022`,
      label: "0086-(0)755-83762022",
    },
  ];

  return (
    <div className="fixed bottom-20 right-0 z-50 hidden md:flex flex-col items-end gap-2">
      
      {/* ========================================= */}
      {/* SCROLL UP BUTTON */}
      {/* ========================================= */}
      <AnimatePresence>
        {!isAtTop && (
          <motion.button
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: 40, marginBottom: 8 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="flex items-center justify-center cursor-pointer text-primary w-10 rounded-full text-xl transition-all duration-300  hover:text-secondary shadow-sm overflow-hidden"
            title="Scroll to Top"
          >
            <FiChevronUp />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ========================================= */}
      {/* SOCIAL ICONS LIST */}
      {/* ========================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3, staggerChildren: 0.1 }}
            className="flex flex-col gap-2"
          >
            {contactData.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="absolute right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-14 transition-all duration-300 bg-secondary text-white text-sm px-3 py-1 rounded shadow-md whitespace-nowrap pointer-events-none">
                  {item.label}
                </span>

                <span className="flex items-center justify-center bg-secondary text-white h-10 w-10 rounded-l text-2xl transition-transform duration-300 hover:-translate-x-2 shadow-sm">
                  {item.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================= */}
      {/* TOGGLE CONTACT BUTTON */}
      {/* ========================================= */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center bg-primary text-white h-10 w-10 rounded-l text-xl transition-all duration-300 hover:bg-secondary cursor-pointer shadow-md mt-2"
        title={isOpen ? "Hide Contact Options" : "Show Contact Options"}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <FiX /> : <FiMessageCircle />}
        </motion.div>
      </button>

      {/* ========================================= */}
      {/* SCROLL DOWN BUTTON */}
      {/* ========================================= */}
      <AnimatePresence>
        {!isAtBottom && (
          <motion.button
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 40, marginTop: 8 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToBottom}
            className="flex items-center justify-center cursor-pointer text-primary w-10 rounded-full text-xl transition-all duration-300  hover:text-secondary shadow-sm overflow-hidden"
            title="Scroll to Bottom"
          >
            <FiChevronDown />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
};

export default SocialIcons;