
import ProductRightLoader from "@/components/loaders/Products/ProductsRight";
// import ProductFilterLoader from "@/components/Loaders/Products/ProductFilter";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const Loading = () => {

      return (
            <div className="">
                  <SkeletonTheme baseColor="#b6bdd136" highlightColor="#19b4ef4d">
                        <div className="bg-black/20 relative z-10 py-20 md:py-32 lg:py-48">
                              <div className="main-container">
                                    <div className="flex flex-col items-center justify-center gap-3 md:gap-5">
                                          <Skeleton width="60%" height={20} />
                                          <Skeleton width={150} height={20} />
                                    </div>
                              </div>
                        </div>
                  </SkeletonTheme>
                  <div className="main-container flex gap-3 md:gap-6 py-5 md:py-8">
                        <div className="category_product w-full md:w-3/4">
                              <ProductRightLoader></ProductRightLoader>
                        </div>
                        <div className="category_menu w-full md:w-1/4 hidden md:block">
                              {/* <ProductFilterLoader></ProductFilterLoader> */}
                        </div>
                  </div>
            </div>
      )
}

export default Loading;