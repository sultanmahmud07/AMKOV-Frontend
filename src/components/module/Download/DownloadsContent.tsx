"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  DownloadCloud, 
  Smartphone, 
  Apple, 
  PlaySquare, 
  ChevronRight, 
  Home 
} from "lucide-react";
import Link from "next/link";

// --- MOCK DATA ---
const manuals = [
  { id: 'CD-M01', title: 'CD-M01 User Manual', size: '2.4 MB' },
  { id: 'CD-W01', title: 'CD-W01 User Manual', size: '1.8 MB' },
  { id: 'CD-V01-B', title: 'CD-V01 Bracket Folding', size: '3.1 MB' },
  { id: 'CD-V01', title: 'CD-V01 User Manual', size: '4.5 MB' },
  { id: 'CD-R5', title: 'CD-R5 User Manual', size: '1.2 MB' },
  { id: 'CD-R4', title: 'CD-R4 User Manual', size: '2.8 MB' },
  { id: 'CD-R3', title: 'CD-R3 Manual', size: '1.5 MB' },
  { id: 'CD-R2H', title: 'CD-R2H WiFi User Manual', size: '5.0 MB' },
  { id: 'CD-R2F', title: 'CD-R2F User Manual', size: '3.3 MB' },
  { id: 'CD-R1S', title: 'CD-R1S User Manual', size: '2.1 MB' },
  { id: 'CD-PB', title: 'CD-PB User Manual', size: '1.9 MB' },
  { id: 'CD-P01B', title: 'CD-P01B User Manual', size: '4.2 MB' },
];

export default function DownloadsContent() {
  const [activeTab, setActiveTab] = useState<"manuals" | "app">("manuals");

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* ========================================= */}
      {/* 1. TOP BANNER & BREADCRUMBS */}
      {/* ========================================= */}
      <div className="relative w-full py-20 lg:py-28 flex flex-col items-center justify-center overflow-hidden bg-[#023047]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#3A9AFF] opacity-20 blur-[100px]"></div>

        <div className="container relative z-10 flex flex-col items-center text-center px-4">
          <div className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} className="text-slate-500" />
            <span className="text-white">Downloads</span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 w-16 h-16 rounded-2xl bg-[#3A9AFF]/20 border border-[#3A9AFF]/30 flex items-center justify-center backdrop-blur-sm"
          >
            <DownloadCloud size={32} className="text-[#3A9AFF]" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight"
          >
            Downloads & Resources
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 text-lg max-w-2xl"
          >
            Get the latest instruction manuals, firmware updates, and official companion applications for your AMKOV devices.
          </motion.p>
        </div>
      </div>

      {/* ========================================= */}
      {/* 2. MAIN CONTENT AREA */}
      {/* ========================================= */}
      <div className="main-container  py-12 lg:py-16 ">
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100">
            <button 
              onClick={() => setActiveTab("app")}
              className={`relative px-6 md:px-8 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex items-center gap-2 ${
                activeTab === "app" ? "text-white" : "text-gray-500 hover:text-[#023047]"
              }`}
            >
              {activeTab === "app" && (
                <motion.div layoutId="activeTab" className="absolute inset-0 bg-[#3A9AFF] rounded-xl shadow-md" />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Smartphone size={18} /> APP Download
              </span>
            </button>

            <button 
              onClick={() => setActiveTab("manuals")}
              className={`relative px-6 md:px-8 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex items-center gap-2 ${
                activeTab === "manuals" ? "text-white" : "text-gray-500 hover:text-[#023047]"
              }`}
            >
              {activeTab === "manuals" && (
                <motion.div layoutId="activeTab" className="absolute inset-0 bg-[#3A9AFF] rounded-xl shadow-md" />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <FileText size={18} /> Instruction Manuals
              </span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          
          {/* --- TAB: INSTRUCTION MANUALS --- */}
          {activeTab === "manuals" && (
            <motion.div
              key="manuals"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-extrabold text-[#023047]">Instruction Manuals</h2>
                <span className="text-gray-500 text-sm font-medium">{manuals.length} files available</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {manuals.map((manual) => (
                  <div 
                    key={manual.id} 
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(58,154,255,0.08)] hover:border-[#3A9AFF]/30 transition-all duration-300 flex flex-col items-center text-center group"
                  >
                    <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300 shrink-0">
                      <FileText size={32} strokeWidth={1.5} />
                      <div className="absolute mt-8 ml-8 bg-white text-red-500 text-[9px] font-black px-1.5 py-0.5 rounded shadow-sm border border-red-100 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors">
                        PDF
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-[#023047] mb-2 leading-tight line-clamp-2 h-10 group-hover:text-[#3A9AFF] transition-colors">
                      {manual.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium mb-6">
                      English • {manual.size}
                    </p>
                    
                    <button className="w-full mt-auto py-2.5 bg-gray-50 hover:bg-[#023047] text-[#023047] hover:text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 border border-gray-200 hover:border-[#023047]">
                      <DownloadCloud size={16} /> Download
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* --- TAB: APP DOWNLOAD --- */}
          {activeTab === "app" && (
            <motion.div
              key="app"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col md:flex-row items-center gap-12"
            >
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block py-1 px-3 mb-4 rounded-full bg-[#3A9AFF]/10 text-[#3A9AFF] text-xs font-bold uppercase tracking-widest border border-[#3A9AFF]/20">
                  Official Companion App
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#023047] mb-4">
                  Connect & Control with AMKOV App
                </h2>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                  Unlock the full potential of your camera. Download the official app to transfer photos wirelessly, control your camera remotely, and update firmware instantly.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button className="flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-3.5 rounded-xl transition-colors">
                    <Apple size={28} />
                    <div className="text-left">
                      <p className="text-[10px] leading-none text-gray-300">Download on the</p>
                      <p className="text-sm font-bold leading-tight">App Store</p>
                    </div>
                  </button>
                  
                  <button className="flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-3.5 rounded-xl transition-colors">
                    <PlaySquare size={28} />
                    <div className="text-left">
                      <p className="text-[10px] leading-none text-gray-300">GET IT ON</p>
                      <p className="text-sm font-bold leading-tight">Google Play</p>
                    </div>
                  </button>
                </div>
              </div>

              <div className="shrink-0 flex flex-col items-center">
                <div className="w-48 h-48 bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center p-4">
                   <div className="text-center">
                     <Smartphone size={40} className="mx-auto text-gray-300 mb-2" />
                     <p className="text-xs text-gray-400 font-bold uppercase">Scan to Download</p>
                   </div>
                </div>
              </div>
            </motion.div>
          )}
          
        </AnimatePresence>

      </div>
    </div>
  );
}