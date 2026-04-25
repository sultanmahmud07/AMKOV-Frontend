"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
      ChevronDown,
      PhoneCall,
      Mail,
      MessageCircleQuestionMark
} from "lucide-react";
import TechnicalBanner from "./TechnicalBanner";

interface ISupport {
      _id: string;
      title: string;
      description: string;
}
export default function SupportPage({ support }: { support: ISupport[] }) {
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
                                    {support.map((faq, index) => {
                                          const isOpen = openIndex === index;
                                          const Icon = MessageCircleQuestionMark;

                                          return (
                                                <div
                                                      key={faq._id}
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
                                                                        {faq.title}
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
                                                                                    {faq.description}
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
                                                <a href="mailto:service@amkov.com" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-[#023047] font-bold py-3.5 px-6 rounded-full transition-colors duration-300">
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


