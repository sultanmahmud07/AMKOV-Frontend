"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiLogOut, FiUser, FiMap, FiBriefcase, FiSettings, FiLayers, FiUsers } from "react-icons/fi";
import { IUser } from "@/types/user.interface";
import Image from "next/image";
import { logoutUser } from "@/services/auth/logoutUser";
import { HiShoppingBag } from "react-icons/hi";
import { CiShop } from "react-icons/ci";

type Props = {
      userInfo?: IUser | null;
};


const UserProfileMenu: React.FC<Props> = ({ userInfo = null }) => {
      const [open, setOpen] = useState(false);
      const ref = useRef<HTMLDivElement | null>(null);

      useEffect(() => {
            function handleDocClick(e: MouseEvent) {
                  if (!ref.current) return;
                  if (!ref.current.contains(e.target as Node)) {
                        setOpen(false);
                  }
            }
            function handleKey(e: KeyboardEvent) {
                  if (e.key === "Escape") setOpen(false);
            }
            document.addEventListener("mousedown", handleDocClick);
            document.addEventListener("keydown", handleKey);
            return () => {
                  document.removeEventListener("mousedown", handleDocClick);
                  document.removeEventListener("keydown", handleKey);
            };
      }, []);

      const displayName = userInfo?.name ?? userInfo?.email?.split?.("@")[0] ?? "Guest";

      const handleSignOut = async () => {
            await logoutUser();
      };

      return (
            <div ref={ref} className="relative inline-block text-left">
                  {/* Trigger */}
                  <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                        className={`flex items-center gap-1 rounded cursor-pointer  focus:outline-none transition `}
                  >
                        <svg
                              className={`w-4 h-4 text-gray-500 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                        >
                              <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                        </svg>
                        {/* avatar */}
                        <div className="w-10 h-10 border-2 border-primary rounded-full bg-gray-100 overflow-hidden flex items-center justify-center text-sm font-semibold text-gray-700">
                              {userInfo?.picture ? (
                                    <Image src={userInfo?.picture} alt={displayName} width={100} height={100} className="w-full h-full object-cover" />
                              ) : (
                                    <Image src="/auth/default-user.jpg" alt={displayName} width={100} height={100} className="w-full h-full object-cover" />

                              )}
                        </div>
                  </button>

                  {/* Dropdown */}
                  <div
                        role="menu"
                        aria-hidden={!open}
                        className={`absolute left-0 mt-2 w-56 rounded bg-white shadow-lg  z-50 transform transition-all ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                              }`}
                  >
                        {/* header showing avatar + name */}
                        <div className="px-4 py-3 border-b border-gray-200">
                              <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center text-sm font-semibold text-gray-700">
                                          {userInfo?.picture ? (
                                                <Image src={userInfo.picture} alt={displayName} width={100} height={100} className="w-full h-full object-cover" />
                                          ) : (
                                                <Image src="/auth/default-user.jpg" alt={displayName} width={100} height={100} className="w-full h-full object-cover" />
                                          )}
                                    </div>
                                    <div>
                                          <div className="text-sm font-medium text-gray-900">{displayName}</div>
                                          <div className="text-xs text-gray-500">{userInfo?.email ?? ""}</div>
                                    </div>
                              </div>
                        </div>

                     {/* menu items */}
                        <div className="py-2 flex flex-col gap-1">
                              <Link href="/products" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-[#F8FAFC] hover:text-[#3A9AFF] transition-colors" role="menuitem">
                                    <CiShop className="w-5 h-5" />
                                    All Cameras
                              </Link>

                              <Link href="/dashboard/my-booking" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-[#F8FAFC] hover:text-[#3A9AFF] transition-colors" role="menuitem">
                                    <FiBriefcase className="w-4 h-4" />
                                    My Orders
                              </Link>

                              <Link href="/download" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-[#F8FAFC] hover:text-[#3A9AFF] transition-colors" role="menuitem">
                                    <FiLayers className="w-4 h-4" />
                                    Downloads & Manuals
                              </Link>

                              <Link href="/my-profile" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-[#F8FAFC] hover:text-[#3A9AFF] transition-colors" role="menuitem">
                                    <FiUser className="w-4 h-4" />
                                    Profile Settings
                              </Link>

                              <div className="border-t border-gray-100 my-1"></div>

                              <button
                                    onClick={handleSignOut}
                                    className="w-full text-left flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                                    role="menuitem"
                                    type="button"
                              >
                                    <FiLogOut className="w-4 h-4" />
                                    Logout
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default UserProfileMenu;
