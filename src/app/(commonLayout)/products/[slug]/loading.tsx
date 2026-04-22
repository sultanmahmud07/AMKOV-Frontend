import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductDetailLoader = () => {
  return (
    <SkeletonTheme baseColor="#f1f5f9" highlightColor="#ffffff">
      <div className="w-full bg-gray-50/30 pb-20">
        
        {/* --- Top Breadcrumb Bar --- */}
        <div className="bg-gray-50 py-4 border-b border-gray-100">
          <div className="main-container">
            <Skeleton width={350} height={14} />
          </div>
        </div>

        <div className="main-container pt-8 md:pt-12">
          
          {/* ========================================= */}
          {/* TOP SECTION: Gallery & Details            */}
          {/* ========================================= */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            
            {/* --- Left: Image Gallery --- */}
            <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4">
              {/* Vertical Thumbnails */}
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto shrink-0 custom-scrollbar">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} width={70} height={70} className="rounded-xl border border-gray-100" />
                ))}
              </div>
              {/* Main Large Image */}
              <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-8 flex items-center justify-center min-h-[300px] md:min-h-[500px]">
                <Skeleton width="80%" height={300} className="max-w-[400px]" />
              </div>
            </div>

            {/* --- Right: Product Info --- */}
            <div className="w-full lg:w-1/2 flex flex-col pt-2">
              {/* Brand Label */}
              <Skeleton width={120} height={12} className="mb-3 text-[#3A9AFF]" />
              
              {/* Main Title (2 Lines) */}
              <Skeleton width="90%" height={36} className="mb-2" />
              <Skeleton width="60%" height={36} className="mb-6" />

              {/* Bullet Points */}
              <div className="flex flex-col gap-3 mb-8">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex gap-2">
                    <Skeleton circle width={6} height={6} className="mt-1.5 shrink-0" />
                    <div className="flex-1">
                      <Skeleton width="100%" height={12} className="mb-1" />
                      {i % 2 === 0 && <Skeleton width="80%" height={12} />}
                    </div>
                  </div>
                ))}
              </div>

              {/* Color Selection */}
              <div className="mb-8">
                <Skeleton width={150} height={14} className="mb-3" />
                <div className="flex gap-3">
                  <Skeleton circle width={36} height={36} />
                  <Skeleton circle width={36} height={36} />
                </div>
              </div>

              {/* Send Inquiry Button */}
              <div className="mb-8 w-full max-w-md">
                <Skeleton height={50} className="rounded-xl w-full" />
              </div>

              {/* Share Icons */}
              <div className="flex items-center gap-4">
                <Skeleton width={60} height={12} />
                <div className="flex gap-3">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} circle width={24} height={24} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* BOTTOM SECTION: Tabs & Descriptions       */}
          {/* ========================================= */}
          <div className="mt-20 border-t border-gray-200">
            
            {/* Tabs Header */}
            <div className="flex gap-8 pt-6 pb-2 overflow-x-auto">
              <Skeleton width={90} height={20} />
              <Skeleton width={110} height={20} />
              <Skeleton width={80} height={20} />
              <Skeleton width={70} height={20} />
            </div>
            
            {/* Blue active line under first tab */}
            <Skeleton width={90} height={3} baseColor="#3A9AFF" highlightColor="#7bc0ff" className="-mt-[3px] mb-10" />

            {/* Product Highlights Text Block */}
            <div className="mb-12">
              <Skeleton width="250px" height={28} className="mb-6" />
              <div className="space-y-3 mb-6">
                <Skeleton width="100%" height={14} />
                <Skeleton width="95%" height={14} />
                <Skeleton width="85%" height={14} />
              </div>
              <div className="space-y-3">
                <Skeleton width="100%" height={14} />
                <Skeleton width="90%" height={14} />
              </div>
            </div>

            {/* Specifications Table Simulation */}
            <div className="bg-gray-50/50 rounded-2xl border border-gray-100 p-8">
              <Skeleton width={150} height={14} className="mb-8" />
              
              <div className="flex flex-col gap-6">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-10 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="w-full md:w-1/4 font-medium">
                      <Skeleton width="60%" height={14} />
                    </div>
                    <div className="w-full md:w-3/4">
                      <Skeleton width="80%" height={14} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ProductDetailLoader;