import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
      // Array for the horizontal category menu placeholders
      const categoryPlaceholders = new Array(7).fill(null);
      // Array for the product grid placeholders (2 rows of 5)
      const productPlaceholders = new Array(10).fill(null);

      return (
            <div className="w-full">
                  {/* Using a modern, soft gray for the skeleton base to match white backgrounds */}
                  <SkeletonTheme baseColor="#f1f5f9" highlightColor="#ffffff">

                        {/* 1. Hero Section Skeleton */}
                        <div className="bg-[#111827] relative z-10 py-20 md:py-32 flex flex-col items-center justify-center text-center">
                              <div className="main-container flex flex-col items-center">
                                    <Skeleton width={200} height={48} className="mb-3" />
                                    <Skeleton width={350} height={16} className="max-w-full" />
                                    {/* Little blue divider line skeleton */}
                                    <Skeleton width={60} height={4} className="mt-5" baseColor="#3A9AFF" highlightColor="#7bc0ff" />
                              </div>
                        </div>

                        {/* 2. Horizontal Category Menu Skeleton */}
                        <div className="border-b border-gray-100 bg-white">
                              <div className="main-container">
                                    <div className="flex overflow-x-auto gap-6 md:gap-10 py-5 justify-start lg:justify-center custom-scrollbar">
                                          {categoryPlaceholders.map((_, idx) => (
                                                <div key={idx} className="shrink-0">
                                                      <Skeleton width={140} height={20} />
                                                </div>
                                          ))}
                                    </div>
                              </div>
                        </div>

                        {/* 3. Product Grid Skeleton (Full Width) */}
                        <div className="bg-gray-50/30">
                              <div className="main-container py-4 md:py-6">
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                                          {productPlaceholders.map((_, index) => (
                                                <div
                                                      key={index}
                                                      className="bg-white p-3 rounded-2xl border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)] flex flex-col h-full"
                                                >
                                                      {/* Top: Color Variation Dots */}
                                                      <div className="flex gap-1.5 mb-1">
                                                            <Skeleton circle width={10} height={10} />
                                                            <Skeleton circle width={10} height={10} />
                                                            <Skeleton circle width={10} height={10} />
                                                      </div>

                                                      {/* Middle: Product Image (Aspect Square for layout stability) */}
                                                      <div className="mb-2">
                                                            <Skeleton height={160} className="rounded-xl w-full" />
                                                      </div>

                                                      {/* Bottom: Text & Category Content */}
                                                      <div className="flex-1 flex flex-col">
                                                            {/* Category Name */}
                                                            <div className="mb-2">
                                                                  <Skeleton width="40%" height={10} />
                                                            </div>

                                                            {/* Product Title (2 Lines) */}
                                                            <div className="mb-2">
                                                                  <Skeleton width="95%" height={14} className="mb-1.5" />
                                                                  <Skeleton width="70%" height={14} />
                                                            </div>

                                                            {/* View More Button (Pill shape) */}
                                                            <div className="mt-auto">
                                                                  <Skeleton height={38} className="rounded-full" style={{ borderRadius: '9999px' }} />
                                                            </div>
                                                      </div>
                                                </div>
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </SkeletonTheme>

                  {/* Global style to hide the scrollbar on the mobile category menu */}
                  <style dangerouslySetInnerHTML={{
                        __html: `
                .custom-scrollbar::-webkit-scrollbar { display: none; }
                .custom-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />
            </div>
      );
};

export default Loading;