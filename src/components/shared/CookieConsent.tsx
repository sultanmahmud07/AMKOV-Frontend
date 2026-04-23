"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check local storage to see if the user already made a choice
    const consent = localStorage.getItem("amkov_cookie_consent");
    
    // If no choice has been made, show the popup after a brief 1-second delay
    if (!consent) {
      const timer = setTimeout(() => setShowConsent(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("amkov_cookie_consent", "accepted");
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem("amkov_cookie_consent", "declined");
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:w-[420px] z-9999"
        >
          <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 p-6 relative">
            
            {/* Close 'X' Button */}
            <button 
              onClick={handleDecline}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="mt-1 bg-[#3A9AFF]/10 p-3 rounded-xl text-[#3A9AFF] shrink-0">
                <Cookie size={24} />
              </div>
              
              <div className="flex-1 pr-4">
                <h3 className="text-lg font-extrabold text-[#023047] mb-2 tracking-tight">
                  We value your privacy
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-5">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies. 
                  <Link href="/privacy-policy" className="text-[#3A9AFF] hover:text-[#023047] hover:underline font-semibold ml-1 transition-colors">
                    Read Policy
                  </Link>
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleAccept}
                    className="flex-1 bg-[#023047] hover:bg-[#3A9AFF] text-white text-sm font-bold py-2.5 rounded-lg transition-colors shadow-sm"
                  >
                    Accept All
                  </button>
                  <button 
                    onClick={handleDecline}
                    className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-600 text-sm font-bold py-2.5 rounded-lg border border-gray-200 transition-colors"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}