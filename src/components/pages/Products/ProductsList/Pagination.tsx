"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";

const Pagination = ({ totalPages = 6 }: { totalPages?: number }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-center gap-3 mt-10 md:mt-16">
      
      {/* Prev Button */}
      <button
        className={clsx(
          "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
          currentPage === 1
            ? "bg-gray-50 text-gray-300 border border-gray-100 cursor-not-allowed"
            : "bg-white text-[#023047] border border-gray-200 hover:border-primary hover:text-primary hover:shadow-sm"
        )}
        disabled={currentPage === 1}
        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        aria-label="Previous Page"
      >
        <IoIosArrowBack size={18} className="mr-0.5" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1.5">
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={clsx(
                "w-10 h-10 cursor-pointer rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center",
                isActive
                  ? "bg-secondary text-white shadow-md shadow-secondary/20"
                  : "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-[#023047]"
              )}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        className={clsx(
          "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
          currentPage === totalPages
            ? "bg-gray-50 text-gray-300 border border-gray-100 cursor-not-allowed"
            : "bg-white text-[#023047] border border-gray-200 hover:border-primary hover:text-primary hover:shadow-sm"
        )}
        disabled={currentPage === totalPages}
        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
        aria-label="Next Page"
      >
        <IoIosArrowForward size={18} className="ml-0.5" />
      </button>
      
    </div>
  );
};

export default Pagination;