import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CategorySolutionsLoading = () => {
    // 6 placeholders for the category cards (2 rows of 3)
    const cardPlaceholders = new Array(6).fill(null);

    return (
        <div className="w-full bg-[#f8fafc] py-12 md:py-20 relative overflow-hidden">
            <SkeletonTheme baseColor="#e2e8f0" highlightColor="#f8fafc">
                <div className="main-container relative z-10">
                    
                    {/* --- HEADER SECTION --- */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
                        {/* Left Side: Icon + Titles */}
                        <div className="flex items-center gap-4">
                            {/* Header Icon */}
                            <div className="shrink-0">
                                <Skeleton circle width={50} height={50} />
                            </div>
                            <div className="flex flex-col gap-2">
                                {/* Title */}
                                <Skeleton width={280} height={28} className="md:w-[350px]" />
                                {/* Subtitle */}
                                <Skeleton width={250} height={14} className="md:w-[500px]" />
                            </div>
                        </div>

                        {/* Right Side: Browse Link */}
                        <div className="hidden md:block shrink-0">
                            <Skeleton width={220} height={16} />
                        </div>
                    </div>

                    {/* --- GRID SECTION (3 Columns) --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cardPlaceholders.map((_, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center gap-6"
                            >
                                {/* Left Side: Circular Product Image */}
                                <div className="shrink-0">
                                    <Skeleton circle width={100} height={100} />
                                </div>

                                {/* Right Side: Content */}
                                <div className="flex-1 flex flex-col justify-center">
                                    {/* Category Title */}
                                    <div className="mb-2">
                                        <Skeleton width="80%" height={20} />
                                    </div>

                                    {/* Category Description (2 lines) */}
                                    <div className="mb-4">
                                        <Skeleton width="100%" height={12} className="mb-1" />
                                        <Skeleton width="75%" height={12} />
                                    </div>

                                    {/* Explore Link */}
                                    <div>
                                        <Skeleton width={80} height={12} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </SkeletonTheme>
        </div>
    );
};

export default CategorySolutionsLoading;