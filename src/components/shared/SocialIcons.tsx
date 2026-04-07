"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMessageCircle, FiX } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const SocialIcons = () => {
  // State to control visibility (Starts open by default, change to false if you want it closed initially)
  const [isOpen, setIsOpen] = useState(true);

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
      
      {/* Animated Icon List */}
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
                // Adding a slight stagger to each item as it enters
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Hover Label */}
                <span className="absolute right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-14 transition-all duration-300 bg-secondary text-white text-sm px-3 py-1 rounded shadow-md whitespace-nowrap pointer-events-none">
                  {item.label}
                </span>

                {/* Icon Container 
                    Note: I changed hover:translate-x-3 to hover:-translate-x-2 
                    so the icon smoothly pops OUT from the wall instead of sliding INTO the wall! 
                */}
                <span className="flex items-center justify-center bg-secondary text-white h-10 w-10 rounded-l text-2xl transition-transform duration-300 hover:-translate-x-2 shadow-sm">
                  {item.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center bg-primary text-white h-10 w-10 rounded-l text-xl transition-all duration-300 hover:bg-secondary cursor-pointer shadow-md mt-2"
        title={isOpen ? "Hide Contact Options" : "Show Contact Options"}
      >
        {/* Simple rotation animation on the icon when toggled */}
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <FiX /> : <FiMessageCircle />}
        </motion.div>
      </button>

    </div>
  );
};

export default SocialIcons;