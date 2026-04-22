import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
    // 5 placeholders for the "Top News" sidebar list
    const topNewsPlaceholders = new Array(5).fill(null);

    return (
        <div className="w-full bg-white min-h-screen py-8 md:py-12">
            <SkeletonTheme baseColor="#f1f5f9" highlightColor="#ffffff">
                <div className="main-container flex flex-col md:flex-row gap-8 lg:gap-12">

                    {/* --- LEFT: MAIN BLOG CONTENT (~70% Width) --- */}
                    <div className="w-full md:w-2/3 lg:w-[70%]">

                        {/* Breadcrumbs */}
                        <div className="mb-6">
                            <Skeleton width={280} height={16} />
                        </div>

                        {/* Main Cover Image */}
                        <div className="mb-6">
                            <Skeleton height={400} className="rounded-2xl w-full md:height-[450px]" />
                        </div>

                        {/* Meta Information (Author, Date, Read Time) */}
                        <div className="flex items-center gap-4 md:gap-6 mb-8">
                            <Skeleton width={80} height={16} />
                            <Skeleton width={110} height={16} />
                            <Skeleton width={60} height={16} />
                        </div>

                        {/* Main H1 Title */}
                        <div className="mb-8">
                            <Skeleton width="90%" height={38} className="mb-2" />
                            <Skeleton width="60%" height={38} />
                        </div>

                        {/* Article Paragraphs (Simulating text blocks) */}
                        <div className="flex flex-col gap-6">
                            {/* Block 1 */}
                            <div>
                                <Skeleton count={3} height={16} className="mb-2" />
                                <Skeleton width="85%" height={16} />
                            </div>

                            {/* Block 2 */}
                            <div>
                                <Skeleton count={4} height={16} className="mb-2" />
                                <Skeleton width="65%" height={16} />
                            </div>

                            {/* Block 3 */}
                            <div>
                                <Skeleton count={2} height={16} className="mb-2" />
                                <Skeleton width="90%" height={16} />
                            </div>
                        </div>

                    </div>

                    {/* --- RIGHT: TOP NEWS SIDEBAR (~30% Width) --- */}
                    <div className="w-full md:w-1/3 lg:w-[30%]">
                        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] sticky top-24">

                            {/* Sidebar Header */}
                            <div className="p-4 border-b border-gray-100 bg-gray-50/80">
                                <Skeleton width={100} height={22} />
                            </div>

                            {/* Sidebar List Items */}
                            <div className="p-5 flex flex-col gap-6">
                                {topNewsPlaceholders.map((_, index) => (
                                    <div key={index} className="flex gap-4 items-start">

                                        {/* Thumbnail Image */}
                                        <div className="shrink-0">
                                            <Skeleton width={90} height={65} className="rounded-lg" />
                                        </div>

                                        {/* Title & Date Content */}
                                        <div className="flex-1 flex flex-col">
                                            <Skeleton count={2} height={13} className="mb-1.5" />
                                            <Skeleton width="70%" height={13} className="mb-3" />

                                            {/* Date aligned to the right */}
                                            <div className="flex justify-end items-center gap-1.5 mt-auto">
                                                <Skeleton circle width={12} height={12} />
                                                <Skeleton width={75} height={12} />
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