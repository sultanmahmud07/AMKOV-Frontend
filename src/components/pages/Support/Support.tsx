"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
      ChevronDown,
      LifeBuoy,
      Camera,
      HardDrive,
      BatteryMedium,
      ThermometerSun,
      Focus,
      Image as ImageIcon,
      ScanLine,
      ZoomIn,
      Maximize,
      Zap,
      PhoneCall,
      Mail
} from "lucide-react";
import TechnicalBanner from "./TechnicalBanner";

// --- FAQ CONTENT PROVIDED BY YOU ---
const faqs = [
      {
            id: 1,
            icon: Camera,
            question: "The camera looks blurry and unclear, is it broken?",
            answer: "Please check if there is dust, fingerprints, or dirt on the lens or screen. If there is, gently wipe it with a clean and soft lens cleaning cloth. If the cloth is not soft enough, it may scratch the lens or display screen."
      },
      {
            id: 2,
            icon: HardDrive,
            question: "What is the situation when the camera prompts an error when inserting a memory card? How to solve it?",
            answer: "Please try formatting the memory card first. If it cannot be formatted, or if it still prompts to format after formatting, this is caused by a memory card error. Please replace the memory card with a new one for use in this camera. 4K cameras are recommended to use U2 or higher speed cards, while other cameras are recommended to use C10 or higher speed cards."
      },
      {
            id: 3,
            icon: BatteryMedium,
            question: "If the camera is not used for a long time, do I need to remove the battery?",
            answer: "Please remove the camera battery and place it in a dust-free, dry environment with a temperature not exceeding 30 ℃. To extend the battery life, please discharge it before storage. Please fully charge the battery and then fully discharge it at least once every 3 months."
      },
      {
            id: 4,
            icon: ThermometerSun,
            question: "Is it normal for the camera body to heat up after a period of use?",
            answer: "It is normal for the camera body to heat up after a period of use. If the heat is severe, it is recommended to remove the battery or immediately turn off the camera and return it to the seller for testing."
      },
      {
            id: 5,
            icon: Focus,
            question: "What is the reason why the camera cannot take photos by lightly pressing the photo button?",
            answer: "Usually, the camera's photo button has two gears. Lightly pressing it is the focus function, and then pressing down a few more buttons after focusing is the photo function."
      },
      {
            id: 6,
            icon: ImageIcon,
            question: "What is the reason why the photos taken by the camera are more blurry and less clear?",
            answer: "Generally, cameras do not have anti shake function or electronic anti shake function. Please try to keep the camera stable when taking photos, and do not immediately move the camera when storing photos. Moving the camera after the storage is completed will reduce the blurring situation."
      },
      {
            id: 7,
            icon: ScanLine,
            question: "My camera may not be in focus in some scenes. Is there a problem with it?",
            answer: "The contrast focusing algorithm currently used in general card cameras or mirrorless cameras is difficult to distinguish the data gap in some scenes, and may not be in focus. This is a phenomenon that occurs in these types of cameras. You can adjust the angle or use a background board to cover the background for improvement."
      },
      {
            id: 8,
            icon: ScanLine, // Reusing icon for focus/macro
            question: "My camera works fine in the distance, but it's not clear up close. Is there a problem with it?",
            answer: "This depends on whether the same camera you purchased has AF or macro function, usually only cameras with AF or macro function can capture closer objects clearly."
      },
      {
            id: 9,
            icon: ZoomIn,
            question: "What is the reason for the poor zoom photography effect of my camera?",
            answer: "If the camera is a digital zoom camera, theoretically the larger the zoom factor, the worse it will be."
      },
      {
            id: 10,
            icon: Maximize,
            question: "Is it better to have a larger pixel size for taking photos and recording in the camera?",
            answer: "It is recommended to set the camera to the same pixel size as its actual photosensitive chip for shooting. The larger the size, the more storage space it occupies during recording."
      },
      {
            id: 11,
            icon: Zap,
            question: "What is the reason for the slow charging of the camera?",
            answer: "Usually, cameras do not have fast charging, so under normal circumstances, it takes 2-3 hours to charge the camera."
      }
];

export default function SupportPage() {
      const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

      const toggleAccordion = (index: number) => {
            setOpenIndex(openIndex === index ? null : index);
      };

      return (
            <div className="bg-[#F8FAFC] min-h-screen pb-20">
                  <TechnicalBanner />

                  {/* ========================================= */}
                  {/* FAQ SECTION */}
                  {/* ========================================= */}
                  <div className="main-container pt-16 lg:pt-24 pb-12">
                        <div className="max-w-5xl mx-auto px-4 md:px-8">

                              <div className="text-center mb-12">
                                    <h2 className="text-3xl font-extrabold text-[#023047] mb-3">Frequently Asked Questions</h2>
                                    <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                              </div>

                              {/* Accordion List */}
                              <div className="space-y-4">
                                    {faqs.map((faq, index) => {
                                          const isOpen = openIndex === index;
                                          const Icon = faq.icon;

                                          return (
                                                <div
                                                      key={faq.id}
                                                      className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "border-primary shadow-[0_10px_30px_rgba(58,154,255,0.08)]" : "border-gray-200 hover:border-gray-300"
                                                            }`}
                                                >
                                                      <button
                                                            onClick={() => toggleAccordion(index)}
                                                            className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group"
                                                      >
                                                            <div className="flex items-center gap-4 pr-4">
                                                                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? "bg-primary/10 text-primary" : "bg-gray-50 text-gray-400 group-hover:bg-gray-100 group-hover:text-primary"
                                                                        }`}>
                                                                        <Icon size={20} />
                                                                  </div>
                                                                  <h3 className={`font-bold text-base md:text-lg transition-colors duration-300 ${isOpen ? "text-primary" : "text-[#023047] group-hover:text-primary"
                                                                        }`}>
                                                                        {faq.question}
                                                                  </h3>
                                                            </div>
                                                            <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "border-primary bg-primary text-white rotate-180" : "border-gray-200 text-gray-400 group-hover:border-primary group-hover:text-primary"
                                                                  }`}>
                                                                  <ChevronDown size={16} />
                                                            </div>
                                                      </button>

                                                      <AnimatePresence initial={false}>
                                                            {isOpen && (
                                                                  <motion.div
                                                                        initial={{ height: 0, opacity: 0 }}
                                                                        animate={{ height: "auto", opacity: 1 }}
                                                                        exit={{ height: 0, opacity: 0 }}
                                                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                                                  >
                                                                        <div className="px-5 md:px-6 pb-6 pt-0">
                                                                              <div className="pl-14 text-gray-600 leading-relaxed text-sm md:text-base border-t border-gray-50 pt-4">
                                                                                    {faq.answer}
                                                                              </div>
                                                                        </div>
                                                                  </motion.div>
                                                            )}
                                                      </AnimatePresence>
                                                </div>
                                          );
                                    })}
                              </div>

                        </div>
                  </div>

                  {/* ========================================= */}
                  {/* BOTTOM CONTACT CTA */}
                  {/* ========================================= */}
                  <div className="main-container pb-10 pt-8">
                        <div className="max-w-5xl mx-auto px-4 md:px-8">
                              <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">

                                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                          <div className="text-left">
                                                <h3 className="text-2xl font-bold text-[#023047] mb-2">Still need assistance?</h3>
                                                <p className="text-gray-500 max-w-md">
                                                      If you couldn&apos;t find the answer you were looking for, our technical support team is ready to help you directly.
                                                </p>
                                          </div>

                                          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
                                                <a href="mailto:support@amkov.com" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-[#023047] font-bold py-3.5 px-6 rounded-full transition-colors duration-300">
                                                      <Mail size={18} /> Email Us
                                                </a>
                                                <Link href="/contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-[#023047] text-white font-bold py-3.5 px-6 rounded-full transition-colors duration-300 shadow-md">
                                                      <PhoneCall size={18} /> Contact Support
                                                </Link>
                                          </div>
                                    </div>

                              </div>
                        </div>
                  </div>

            </div>
      );
}


