"use client"
import { useSearchParams, useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";

const Pagination = ({ totalPages = 6 }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = Number(searchParams.get("page")) || 1;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePageChange = (page:any) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-6 md:mt-20">
      {/* Prev Button */}
      <button
        className={clsx(
          "w-8 h-8 border-2 rounded-full flex items-center justify-center text-primary",
          currentPage === 1 ? "border-gray-300 text-gray-400" : "border-primary"
        )}
        disabled={currentPage === 1}
        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
      >
        <IoIosArrowBack />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={clsx(
              "w-7 h-9 rounded text-sm flex items-center justify-center border",
              isActive
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary"
            )}
          >
            {String(page).padStart(2)}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        className={clsx(
          "w-8 h-8 border-2 rounded-full flex items-center justify-center text-primary",
          currentPage === totalPages ? "border-gray-300 text-gray-400" : "border-primary"
        )}
        disabled={currentPage === totalPages}
        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
