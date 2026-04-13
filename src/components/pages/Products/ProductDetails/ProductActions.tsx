/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import {
      Facebook,
      Twitter,
      Instagram,
      Link2,
      Mail,
} from "lucide-react";
import SendQuoteModal from "@/components/module/Product/SendQuoteModal";
import { toast } from "sonner";

const ProductActions = () => {
      const [activeTab, setActiveTab] = useState("");
      const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

      const product = { _id: "123", name: "AMKOV 5K V-Log Camera" };


      // Smooth scroll handler
      const scrollToSection = (sectionId: string) => {
            setActiveTab(sectionId);
            const element = document.getElementById(sectionId);
            if (element) {
                  // The offset ensures the section isn't hidden behind the sticky menu
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = element.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;

                  window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                  });
            }
      };
      // =========================================
      // SOCIAL SHARE HANDLER
      // =========================================
      const handleShare = async (platform: string) => {
            // Get current URL dynamically
            const currentUrl = window.location.href;
            const shareText = `Check out this amazing product: ${product.name}`;

            switch (platform) {
                  case "facebook":
                        window.open(
                              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
                              "_blank",
                              "width=600,height=400"
                        );
                        break;

                  case "twitter":
                        window.open(
                              `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`,
                              "_blank",
                              "width=600,height=400"
                        );
                        break;

                  case "instagram":
                        // Instagram doesn't have a direct web-share link. 
                        // Try native mobile sharing first, otherwise fallback to copying the link.
                        if (navigator.share) {
                              try {
                                    await navigator.share({
                                          title: product.name,
                                          text: shareText,
                                          url: currentUrl,
                                    });
                              } catch (error) {
                                    console.error("Error sharing to mobile native share", error);
                              }
                        } else {
                              navigator.clipboard.writeText(currentUrl);
                              toast.success("Link copied! Paste it in Instagram to share.");
                        }
                        break;

                  case "copy":
                        navigator.clipboard.writeText(currentUrl);
                        toast.success("Product link copied to clipboard!");
                        break;

                  default:
                        break;
            }
      };
      return (
            <div className="w-full flex flex-col gap-6">


                  <button

                        onClick={() => scrollToSection("inquiry")}
                        // onClick={() => setIsQuoteModalOpen(true)}
                        className="relative flex items-center justify-center gap-2.5 bg-primary hover:bg-secondary text-white font-black px-6 h-10 rounded-md transition-all duration-300  border-primary group overflow-hidden"
                        style={{ animation: 'float-inquiry 3s ease-in-out infinite' }}
                  >
                        {/* 1. Continuous Moving Light Sweep */}
                        <div
                              className="absolute top-0 left-0 w-[50%] h-full bg-linear-to-r from-transparent via-primary/20 group-hover:via-white/30 to-transparent z-0 pointer-events-none"
                              style={{ animation: 'sweep-inquiry 3s infinite ease-in-out' }}
                        />

                        {/* 2. Live Pulsing Dot */}
                        <span className="relative flex h-2.5 w-2.5 items-center justify-center z-10">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75 duration-1000"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-white transition-colors"></span>
                        </span>

                        {/* Icon */}
                        <Mail size={16} strokeWidth={2.5} className="text-white transition-colors z-10" />

                        {/* Text */}
                        <span className="uppercase tracking-widest text-xs z-10">
                              Send Inquiry
                        </span>
                  </button>
                  {/* ========================================= */}
                  {/* SECONDARY ACTIONS */}
                  {/* ========================================= */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-4">

                        {/* ========================================= */}
                        {/* SOCIAL SHARE */}
                        {/* ========================================= */}
                        <div className="flex items-center flex-wrap gap-4">

                              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Share:
                              </span>

                              <div className="flex items-center gap-2">

                                    <button
                                          onClick={() => handleShare("facebook")}
                                          className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#1877F2] hover:border-[#1877F2] transition"
                                          aria-label="Share on Facebook"
                                    >
                                          <Facebook size={16} />
                                    </button>

                                    <button
                                          onClick={() => handleShare("twitter")}
                                          className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition"
                                          aria-label="Share on Twitter"
                                    >
                                          <Twitter size={16} />
                                    </button>

                                    <button
                                          onClick={() => handleShare("instagram")}
                                          className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#E4405F] hover:border-[#E4405F] transition"
                                          aria-label="Share on Instagram"
                                    >
                                          <Instagram size={16} />
                                    </button>

                                    <button
                                          onClick={() => handleShare("copy")}
                                          className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#023047] hover:border-[#023047] transition"
                                          aria-label="Copy Link"
                                    >
                                          <Link2 size={16} />
                                    </button>

                              </div>
                        </div>

                        {/* Inject custom animations safely into the page */}
                        <style dangerouslySetInnerHTML={{
                              __html: `
  @keyframes float-inquiry {
    0%, 100% { transform: translateY(0px); box-shadow: 0 0 15px rgba(58,154,255,0.3); }
    50% { transform: translateY(-4px); box-shadow: 0 8px 25px rgba(58,154,255,0.5); }
  }
  @keyframes sweep-inquiry {
    0% { transform: translateX(-150%) skewX(-15deg); }
    50%, 100% { transform: translateX(300%) skewX(-15deg); }
  }
`}} />

                  </div>

                  {/* ========================================= */}
                  {/* MODAL */}
                  {/* ========================================= */}
                  {isQuoteModalOpen && (
                        <SendQuoteModal
                              onClose={() => setIsQuoteModalOpen(false)}
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              product={product as any}
                        />
                  )}

            </div>
      );
};

export default ProductActions;