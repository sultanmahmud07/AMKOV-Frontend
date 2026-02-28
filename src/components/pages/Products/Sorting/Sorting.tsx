"use client";

import React, { Suspense, useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { useRouter, useSearchParams } from 'next/navigation';
import { IoClose } from 'react-icons/io5';
import ProductFilterForMobileLoader from '@/components/Loaders/Products/ProductFilterForMobile';

const limitData = ["09", "18", "27", "36", "45"]; // Adjusted to multiples of 3 for nice grid layouts

const Sorting = ({
  productsCount,
  children,
}: {
  productsCount: number;
  children: React.ReactNode;
}) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const current = new URLSearchParams(searchParams.toString());
    current.set("limit", value);
    router.push(`?${current.toString()}`);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const current = new URLSearchParams(searchParams.toString());
    current.set("sortOrder", value);
    router.push(`?${current.toString()}`);
  };

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div className="w-full pb-4 mb-4 border-b border-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Left: Product Count & Mobile Filter Toggle */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <p className="text-gray-500 text-sm md:text-base">
            Showing <span className="font-bold text-[#023047]">{productsCount}</span> Products
          </p>

          {/* Mobile Filter Button */}
          <button
            type="button"
            onClick={toggleSideMenu}
            className="md:hidden flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-sm text-sm font-semibold text-[#023047] hover:border-[#3A9AFF] hover:text-[#3A9AFF] transition-colors"
          >
            <FiFilter size={16} /> Filter
          </button>
        </div>

        {/* Right: Sorting & Limit Dropdowns */}
        <div className="flex items-center justify-between sm:justify-end gap-3 md:gap-4 w-full sm:w-auto">
          
          {/* View Limit */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <label className="text-sm text-gray-500 hidden lg:block">Show:</label>
            <select
              className="w-full sm:w-auto h-10 px-3 bg-white border border-gray-200 text-[#023047] text-sm rounded-sm  cursor-pointer hover:border-gray-300 transition-colors appearance-none pr-8 relative bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23023047%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-size-[10px_10px] bg-no-repeat bg-position-[right_10px_center]"
              onChange={handleLimitChange}
              value={searchParams.get("limit") || "09"}
            >
              {limitData.map((limit, i) => (
                <option key={i} value={limit}>
                  {limit} per page
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <label className="text-sm text-gray-500 hidden lg:block">Sort:</label>
            <select
              className="w-full sm:w-auto h-10 px-3 bg-white border border-gray-200 text-[#023047] text-sm rounded-sm focus:outline-none cursor-pointer hover:border-gray-300 transition-colors appearance-none pr-2 relative bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23023047%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-size-[10px_10px] bg-no-repeat bg-position-[right_10px_center]"
              onChange={handleSortChange}
              value={searchParams.get("sortOrder") || ""}
            >
              <option value="" disabled>Select sorting</option>
              <option value="asc">Alphabetical (A - Z)</option>
              <option value="desc">Alphabetical (Z - A)</option>
            </select>
          </div>

        </div>
      </div>

      {/* ========================================= */}
      {/* MOBILE FILTER SIDE MENU                   */}
      {/* ========================================= */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] max-w-[80vw] bg-white z-100 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-100 shrink-0">
          <h3 className="text-lg font-extrabold text-[#023047]">Filters</h3>
          <button
            onClick={toggleSideMenu}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors"
          >
            <IoClose size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          <Suspense fallback={<ProductFilterForMobileLoader />}>
            {children}
          </Suspense>
        </div>
      </div>

      {/* Overlay Background for Mobile Menu */}
      {isSideMenuOpen && (
        <div
          onClick={toggleSideMenu}
          className="fixed inset-0 bg-[#023047]/40 backdrop-blur-sm z-90 transition-opacity duration-300"
        />
      )}
    </div>
  );
};

export default Sorting;