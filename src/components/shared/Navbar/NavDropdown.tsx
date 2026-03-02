"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { FiChevronDown } from "react-icons/fi";

export type SubLink = { label: string; href: string };
export type NavItem = { label: string; href: string; role?: string; subLinks?: SubLink[] };

type Props = {
  item: NavItem;
  isMobile?: boolean;
  onLinkClick: () => void;
};

export default function NavDropdown({ item, isMobile, onLinkClick }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  // --------------------------------------------------------
  // NO SUBMENU: Render normal link matching original design
  // --------------------------------------------------------
  if (!item.subLinks || item.subLinks.length === 0) {
    if (isMobile) {
      return (
        <NavLink
          onClick={onLinkClick}
          href={item.href}
          className="block text-lg font-medium text-gray-800 hover:text-primary transition p-2 hover:bg-gray-50 rounded-md"
        >
          {item.label}
        </NavLink>
      );
    }
    
    // Desktop normal link
    return (
      <NavLink
        onClick={onLinkClick}
        href={item.href}
        className="relative group flex items-center gap-2 font-semibold text-sm transition-colors duration-300 after:absolute after:content-[''] after:bg-emerald-600 after:h-0.5 after:w-0 after:left-0 after:-bottom-1.5 after:transition-all after:duration-300 hover:after:w-full"
      >
        {item.label}
      </NavLink>
    );
  }

  // --------------------------------------------------------
  // HAS SUBMENU: MOBILE (Accordion Design)
  // --------------------------------------------------------
  if (isMobile) {
    return (
      <div className="flex flex-col space-y-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-lg font-medium text-gray-800 hover:text-primary transition p-2 hover:bg-gray-50 rounded-md"
        >
          {item.label}
          <FiChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {/* Mobile Accordion Content */}
        <div className={`flex flex-col pl-4 border-l-2 border-gray-100 ml-2 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
          {item.subLinks.map((sub, i) => (
            <NavLink
              key={i}
              onClick={onLinkClick}
              href={sub.href}
              className="block text-base text-gray-600 hover:text-primary transition p-2 hover:bg-gray-50 rounded-md"
            >
              {sub.label}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }

  // --------------------------------------------------------
  // HAS SUBMENU: DESKTOP (Hover Dropdown Design)
  // --------------------------------------------------------
  return (
    <div className="relative group flex items-center">
      {/* Desktop Trigger */}
      <div className="relative group flex items-center gap-1 font-semibold text-sm transition-colors duration-300 py-3 cursor-pointer hover:text-primary after:absolute after:content-[''] after:bg-emerald-600 after:h-0.5 after:w-0 after:left-0 after:bottom-1.5 after:transition-all after:duration-300 hover:after:w-full">
        <Link href={item.href} onClick={onLinkClick}>{item.label}</Link>
        <FiChevronDown className="group-hover:rotate-180 transition-transform duration-300 mt-0.5" />
      </div>

      {/* Invisible bridge so mouse doesn't lose hover when moving down */}
      <div className="absolute top-[100%] left-0 w-full h-4 bg-transparent z-40"></div>

      {/* Desktop Dropdown Panel */}
      <div className="absolute left-0 top-[100%] mt-2 hidden group-hover:flex flex-col bg-white shadow-lg border border-gray-100 rounded-md min-w-[200px] z-50 overflow-hidden py-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        {item.subLinks.map((sub, i) => (
          <Link
            key={i}
            href={sub.href}
            onClick={onLinkClick}
            className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-colors"
          >
            {sub.label}
          </Link>
        ))}
      </div>
    </div>
  );
}