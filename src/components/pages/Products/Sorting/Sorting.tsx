"use client";
import React, { Suspense, useState } from 'react'
import { FiFilter } from 'react-icons/fi'
import { useRouter, useSearchParams } from 'next/navigation'
import { IoClose } from 'react-icons/io5';
import ProductFilterForMobileLoader from '@/components/Loaders/Products/ProductFilterForMobile';
import { Search } from 'lucide-react';

const limitData = ["09", "20", "30", "40", "50", "60"];

const Sorting = ({
  children,
}: {
  children: React.ReactNode
}
) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLimitChange = (e:any) => {
    const value = e.target.value;

    const current = new URLSearchParams(searchParams.toString());
    current.set("limit", value); // set or replace limit param
    router.push(`?${current.toString()}`);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSortChange = (e:any) => {
    const value = e.target.value;

    const current = new URLSearchParams(searchParams.toString());
    current.set("sortOrder", value); // set or replace sortOrder param
    router.push(`?${current.toString()}`);
  };
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };
  return (
    <div className="search_and_sort py-2">
      <div className="flex items-center justify-between">
        {/* Open Filter Menu  */}
        <button
          id="open_side_menu"
          type="button"
          onClick={toggleSideMenu}
          className="open_category_menu md:hidden text-md font-bold hover:text-primary">
          <FiFilter />
        </button>
        <div className="search-input w-1/2 h-12 relative text-sm hidden md:block">
        <span className='absolute z-10 top-[12px] left-4'><Search size={22} /></span>
          <input className='absolute w-full h-full p-2 pl-12 border-none outline-none bg-[#E8F7F1] rounded md:rounded-md text-sm' type='text' placeholder='Search..' />
        </div>
        <div className="flex items-center justify-end gap-3 text-sm md:text-base">
          <div className="sort_by flex items-center gap-1 text-sm md:text-base">
            <span className="md:mr-2">View:</span>
            <select
              className=" bg-[E8F7F1] h-12 px-4 rounded md:rounded-md border-2 border-[#E8F7F1]"
              onChange={handleLimitChange}
              value={searchParams.get("limit") || "09"}
            >
              {limitData.map((limit, i) => (
                <option  key={i} value={limit}>
                  {limit}
                </option>
              ))}
            </select>
          </div>

          <div className="sort_by flex items-center gap-1 text-sm md:text-base">
            <span className="md:mr-2">Sort by:</span>
            <select
              className="h-12 px-4 rounded md:rounded-md bg-[E8F7F1] border-2 border-[#E8F7F1]"
              onChange={handleSortChange}
              value={searchParams.get("sortOrder") || ""}
            >
              <option value="asc">A - Z</option>
              <option value="desc">Z - A</option>
            </select>
          </div>
        </div>
        {/*========== Filter option for mobile device ======== */}
        {/* Side Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-80 bg-white z-[100] shadow-lg transform transition-transform duration-300 ${isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="p-4 flex items-center justify-between border-b">
            <h3 className="text-sm font-semibold">Product Filter</h3>
            <button
              onClick={toggleSideMenu}
              className="text-xl text-gray-600 hover:text-red-500"
            >
              <IoClose />
            </button>
          </div>
          <div className="mobile_filter_wraper w-full p-3 overflow-y-auto max-h-[calc(100vh-60px)]">
            <Suspense fallback={<ProductFilterForMobileLoader></ProductFilterForMobileLoader>}>
              {/* <CategoryFilterWrapper></CategoryFilterWrapper> */}
              {children}
            </Suspense>
          </div>
        </div>

        {/* Overlay */}
        {isSideMenuOpen && (
          <div
            onClick={toggleSideMenu}
            className="fixed inset-0 bg-black bg-opacity-40 z-[99] transition-opacity duration-300"
          ></div>
        )}
      </div>
    </div>
  );
};

export default Sorting;
