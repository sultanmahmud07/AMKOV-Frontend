import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
    // 6 placeholders for the main blog grid (2 rows of 3)
    const mainBlogPlaceholders = new Array(6).fill(null);
    // 5 placeholders for the Top News sidebar
    const topNewsPlaceholders = new Array(5).fill(null);

    return (
        <div className="w-full bg-white min-h-screen pb-12">
            <SkeletonTheme baseColor="#f1f5f9" highlightColor="#ffffff">
                
                {/* Optional Hero/Header Area */}
                {/* <div className="bg-gray-50 relative z-10 py-12 md:py-20 border-b border-gray-100">
                    <div className="main-container">
                        <div className="flex flex-col items-center justify-center gap-3 md:gap-5">
                            <Skeleton width={300} height={32} />
                            <Skeleton width={150} height={16} />
                        </div>
                    </div>
                </div> */}

                <div className="main-container flex flex-col md:flex-row gap-8 lg:gap-12 py-8 md:py-12">
                    
                    {/* --- LEFT: MAIN BLOGS GRID (3/4 Width) --- */}
                    <div className="w-full md:w-[70%] lg:w-3/4">
                        {/* Section Title */}
                        <div className="mb-8">
                            <Skeleton width={180} height={36} />
                        </div>

                        {/* 3-Column Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {mainBlogPlaceholders.map((_, index) => (
                                <div key={index} className="flex flex-col">
                                    {/* Blog Image */}
                                    <Skeleton height={200} className="rounded-xl mb-4 w-full" />
                                    
                                    {/* Blog Title (2 Lines) */}
                                    <div className="mb-3">
                                        <Skeleton count={2} height={18} className="mb-1" />
                                    </div>

                                    {/* Blog Excerpt (3 Lines) */}
                                    <div className="mb-4">
                                        <Skeleton count={3} height={12} className="mb-1.5" />
                                    </div>

                                    {/* Meta (Date & Read More) */}
                                    <div className="mt-auto flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <Skeleton circle width={16} height={16} />
                                            <Skeleton width={100} height={14} />
                                        </div>
                                        <Skeleton width={80} height={14} className="mt-1 text-[#3A9AFF]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- RIGHT: TOP NEWS SIDEBAR (1/4 Width) --- */}
                    <div className="w-full md:w-[30%] lg:w-1/4 hidden md:block">
                        {/* Sidebar Container */}
                        <div className="border border-gray-100 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                            
                            {/* Sidebar Header */}
                            <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                                <Skeleton width={100} height={20} />
                            </div>

                            {/* Sidebar List Items */}
                            <div className="p-5 flex flex-col gap-6">
                                {topNewsPlaceholders.map((_, index) => (
                                    <div key={index} className="flex gap-4 items-start">
                                        {/* Small Thumbnail */}
                                        <div className="shrink-0">
                                            <Skeleton width={80} height={60} className="rounded-lg" />
                                        </div>
                                        
                                        {/* Title & Date */}
                                        <div className="flex-1 flex flex-col">
                                            <Skeleton count={3} height={12} className="mb-3" />
                                            <div className="flex justify-end items-center gap-1.5">
                                                <Skeleton circle width={12} height={12} />
                                                <Skeleton width={70} height={10} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </SkeletonTheme>
        </div>
    );
};

export default Loading;