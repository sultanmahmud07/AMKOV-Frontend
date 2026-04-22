import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductsLoader = () => {
    // 10 placeholders perfectly fills 2 rows of 5 on desktop
    const placeholders = new Array(10).fill(null);

    return (
        // Using softer, modern gray colors for a premium loading feel
        <SkeletonTheme baseColor="#f1f5f9" highlightColor="#ffffff">
            <div className="main-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 py-5">
                {placeholders.map((_, index) => (
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
        </SkeletonTheme>
    );
};

export default ProductsLoader;