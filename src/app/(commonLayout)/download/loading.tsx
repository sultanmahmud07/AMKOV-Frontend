import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
      // Array for the horizontal product/manual cards (5 columns)
      const cardPlaceholders = new Array(10).fill(null);

      return (
            <div className="w-full bg-gray-50 min-h-screen">

                  {/* --- 1. HERO SECTION (Dark Theme) --- */}
                  <div className="bg-[#023047] relative z-10 py-16 md:py-24 flex flex-col items-center justify-center text-center border-b border-[#3A9AFF]/20">
                        {/* Subtle background grid pattern to match the image */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[2rem_2rem] opacity-30 pointer-events-none"></div>

                        <SkeletonTheme baseColor="#0a4361" highlightColor="#10577a">
                              <div className="main-container flex flex-col items-center relative z-20">
                                    {/* Breadcrumbs */}
                                    <Skeleton width={120} height={12} className="mb-6 opacity-70" />

                                    {/* Center Icon */}
                                    <Skeleton width={56} height={56} className="rounded-2xl mb-6" />

                                    {/* Main Title */}
                                    <Skeleton width={320} height={40} className="mb-4 md:w-[450px]" />

                                    {/* Subtitle */}
                                    <Skeleton width={280} height={14} className="mb-2 md:w-[600px] opacity-80" />
                                    <Skeleton width={200} height={14} className="md:w-[400px] opacity-80" />
                              </div>
                        </SkeletonTheme>
                  </div>

                  {/* --- 2. CONTENT SECTION (Light Theme) --- */}
                  <SkeletonTheme baseColor="#f1f5f9" highlightColor="#ffffff">

                        {/* Toggle Buttons (App / Manuals) */}
                        <div className="main-container flex justify-center -mt-8 relative z-30 mb-12">
                              <div className="bg-white p-1.5 rounded-2xl shadow-md border border-gray-100 flex gap-2">
                                    <Skeleton width={140} height={45} className="rounded-xl" />
                                    <Skeleton width={140} height={45} className="rounded-xl" />
                              </div>
                        </div>

                        <div className="main-container pb-20">
                              {/* Section Header */}
                              <div className="flex items-center justify-between mb-8">
                                    <Skeleton width={200} height={28} />
                                    <Skeleton width={100} height={14} className="hidden sm:block" />
                              </div>

                              {/* 5-Column Cards Grid */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                    {cardPlaceholders.map((_, index) => (
                                          <div
                                                key={index}
                                                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col items-center text-center"
                                          >
                                                {/* Center Document Icon */}
                                                <div className="mb-5">
                                                      <Skeleton width={64} height={64} className="rounded-2xl" />
                                                </div>

                                                {/* Title */}
                                                <div className="w-full flex justify-center mb-2">
                                                      <Skeleton width="80%" height={16} />
                                                </div>

                                                {/* Subtitle (Language & Size) */}
                                                <div className="w-full flex justify-center mb-6">
                                                      <Skeleton width="50%" height={12} />
                                                </div>

                                                {/* Download Button */}
                                                <div className="w-full mt-auto">
                                                      <Skeleton height={40} className="rounded-xl w-full" />
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>

                  </SkeletonTheme>
            </div>
      );
};

export default Loading;