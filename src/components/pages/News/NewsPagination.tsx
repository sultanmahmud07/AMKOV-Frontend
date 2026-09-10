"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

interface NewsPaginationProps {
  totalPages?: number;
  currentPage?: number;
  total?: number;
}

const NewsPagination = ({
  totalPages = 1,
  currentPage: propCurrentPage,
  total,
}: NewsPaginationProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage =
    propCurrentPage || Number(searchParams.get("page")) || 1;

  if (!totalPages || totalPages <= 1) {
    return null;
  }

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: true });
  };

  // Generate pagination items with ellipses
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 md:mt-12 pt-6 border-t border-gray-100">
      {/* Total Results Counter */}
      <div className="text-xs sm:text-sm text-gray-500 order-2 sm:order-1">
        Showing page <span className="font-semibold text-gray-800">{currentPage}</span> of{" "}
        <span className="font-semibold text-gray-800">{totalPages}</span>
        {total ? (
          <span className="hidden md:inline text-gray-400 ml-1">
            ({total} total articles)
          </span>
        ) : null}
      </div>

      {/* Pagination Controls */}
      <nav
        aria-label="Blog pagination"
        className="flex items-center gap-1.5 order-1 sm:order-2"
      >
        {/* Previous Page Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          aria-label="Go to previous page"
          className={clsx(
            "h-9 px-3 rounded-lg flex items-center gap-1 text-xs sm:text-sm font-medium transition-all duration-200 border",
            currentPage <= 1
              ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
              : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:text-black shadow-xs cursor-pointer"
          )}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Number Buttons & Ellipses */}
        <div className="flex items-center gap-1">
          {pages.map((item, index) => {
            if (item === "...") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="w-8 h-9 flex items-center justify-center text-xs text-gray-400 select-none"
                >
                  ...
                </span>
              );
            }

            const pageNum = Number(item);
            const isActive = pageNum === currentPage;

            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                aria-current={isActive ? "page" : undefined}
                aria-label={`Go to page ${pageNum}`}
                className={clsx(
                  "w-9 h-9 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer",
                  isActive
                    ? "bg-[#023047] text-white shadow-sm shadow-[#023047]/20 border border-[#023047]"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:text-black"
                )}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        {/* Next Page Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Go to next page"
          className={clsx(
            "h-9 px-3 rounded-lg flex items-center gap-1 text-xs sm:text-sm font-medium transition-all duration-200 border",
            currentPage >= totalPages
              ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
              : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:text-black shadow-xs cursor-pointer"
          )}
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </nav>
    </div>
  );
};

export default NewsPagination;
