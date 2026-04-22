"use client";
import Link from "next/link";
import {
      X,
      Package,
      Info,
      Phone,
      House,
      MessageSquareDot,
      Download,
      HandHelping,
      Newspaper,
} from "lucide-react";
import Image from "next/image";

interface MobileSidebarProps {
      isOpen: boolean;
      onClose: () => void;
}

const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  

      return (
            <>
                  {/* 1. DARK BACKDROP OVERLAY */}
                  <div
                        onClick={onClose}
                        className={`fixed inset-0 bg-[#023047]/60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                              }`}
                  />

                  {/* 2. SLIDE-IN DRAWER */}
                  <div
                        className={`fixed top-0 left-0 w-[85%] max-w-[360px] h-full bg-white z-50 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex flex-col lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
                              }`}
                  >
                        {/* Header */}
                        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-[#F8FAFC]">
                              <Link href="/">
                                    <Image
                                          src="/logo/logo.png" // Ensure this path is correct
                                          alt="Amkov Logo"
                                          width={160}
                                          height={50}
                                          className="h-10 w-auto"
                                    />
                              </Link>
                              <button
                                    onClick={onClose}
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200/50 text-gray-500 hover:bg-gray-200 hover:text-[#023047] transition-colors"
                              >
                                    <X size={20} />
                              </button>
                        </div>

                        {/* Footer / Auth Section */}
                        {/* <div className="p-3">
                              {!accessToken ? (
                                    <div className="flex flex-col gap-3">
                                          <div className="flex items-center gap-3 p-3 bg-[#F4F7F9] rounded-xl border border-gray-200">
                                               
                                          <UserProfileMenu userInfo={userInfo} />
                                                <div className="flex flex-col">
                                                      <span className="text-sm font-bold text-[#023047]">{userInfo?.name || "Welcome Back"}</span>
                                                      <span className="text-xs font-medium text-gray-500">Manage Account</span>
                                                </div>
                                          </div>
                                    </div>
                              ) : (
                                    <div className="flex gap-3">
                                          <Link href="/login" onClick={onClose} className="flex-1">
                                                <button className="w-full h-12 flex items-center justify-center bg-[#F4F7F9] text-[#023047] hover:bg-gray-200 font-bold rounded-xl transition-colors">
                                                      Log In
                                                </button>
                                          </Link>
                                          <Link href="/register" onClick={onClose} className="flex-1">
                                                <button className="w-full h-12 flex items-center justify-center bg-[#023047] text-white hover:bg-[#3A9AFF] font-bold rounded-xl transition-colors shadow-sm">
                                                      Register
                                                </button>
                                          </Link>
                                    </div>
                              )}
                        </div> */}
                        {/* Scrollable Navigation Area */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-2">

                              {/* Static Link: Home */}
                              <Link
                                    href="/"
                                    onClick={onClose}
                                    className="flex items-center gap-3 text-base font-bold text-[#023047] p-3 rounded-xl hover:bg-[#F4F7F9] hover:text-[#3A9AFF] transition-colors"
                              >
                                    <House size={18} className="text-gray-400" />
                                    Home
                              </Link>

                              <Link
                                    href="/products"
                                    onClick={onClose}
                                    className="flex items-center gap-3 text-base font-bold text-[#023047] p-3 rounded-xl hover:bg-[#F4F7F9] hover:text-[#3A9AFF] transition-colors"
                              >
                                    <Package size={18} className="text-gray-400" />
                                    Products
                              </Link>

                              {/* Static Link: About */}
                              <Link
                                    href="/about"
                                    onClick={onClose}
                                    className="flex items-center gap-3 text-base font-bold text-[#023047] p-3 rounded-xl hover:bg-[#F4F7F9] hover:text-[#3A9AFF] transition-colors"
                              >
                                    <Info size={18} className="text-gray-400" />
                                    About Us
                              </Link>

                              {/* Static Link: Contact */}
                              <Link
                                    href="/solution"
                                    onClick={onClose}
                                    className="flex items-center gap-3 text-base font-bold text-[#023047] p-3 rounded-xl hover:bg-[#F4F7F9] hover:text-[#3A9AFF] transition-colors"
                              >
                                    <MessageSquareDot size={18} className="text-gray-400" />
                                    Solution
                              </Link>
                              {/* Static Link: Contact */}
                              <Link
                                    href="/download"
                                    onClick={onClose}
                                    className="flex items-center gap-3 text-base font-bold text-[#023047] p-3 rounded-xl hover:bg-[#F4F7F9] hover:text-[#3A9AFF] transition-colors"
                              >
                                    <Download size={18} className="text-gray-400" />
                                    Download
                              </Link>
                              {/* Static Link: Contact */}
                              <Link
                                    href="/support"
                                    onClick={onClose}
                                    className="flex items-center gap-3 text-base font-bold text-[#023047] p-3 rounded-xl hover:bg-[#F4F7F9] hover:text-[#3A9AFF] transition-colors"
                              >
                                    <HandHelping size={18} className="text-gray-400" />
                                    Support
                              </Link>
                              {/* Static Link: Contact */}
                              <Link
                                    href="/news"
                                    onClick={onClose}
                                    className="flex items-center gap-3 text-base font-bold text-[#023047] p-3 rounded-xl hover:bg-[#F4F7F9] hover:text-[#3A9AFF] transition-colors"
                              >
                                    <Newspaper size={18} className="text-gray-400" />
                                    News
                              </Link>
                              {/* Static Link: Contact */}
                              <Link
                                    href="/contact"
                                    onClick={onClose}
                                    className="flex items-center gap-3 text-base font-bold text-[#023047] p-3 rounded-xl hover:bg-[#F4F7F9] hover:text-[#3A9AFF] transition-colors"
                              >
                                    <Phone size={18} className="text-gray-400" />
                                    Contact
                              </Link>
                        </div>


                  </div>
            </>
      );
};

export default MobileSidebar;