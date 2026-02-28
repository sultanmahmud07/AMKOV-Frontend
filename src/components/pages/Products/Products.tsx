import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { Suspense } from "react";
import CategoryFilterWrapper from "./CategoryFilter/CategoryFilterWrapper";
import ProductsList from "./ProductsList/ProductsList";
import ProductFilterLoader from "@/components/Loaders/Products/ProductFilter";
import Link from "next/link";

type ProductsProps = {
      searchParams?: { [key: string]: string | string[] | undefined };
};


const Products = ({ searchParams }: ProductsProps) => {

      return (
            <div className="">
                  <div className="main-container pt-3 text-[#1F1C1466] text-sm font-semibold flex items-center gap-1">
                        <span className="text-xl"><GoHome /></span>
                        <Link href={`/`} className="hover:text-primary">Home</Link>
                        <span><IoIosArrowForward /></span>
                        <span className="text-primary">Products</span>
                  </div>
                  <div className="main-container flex gap-3 md:gap-6 py-5 md:py-8">
                        <div className="category_menu w-full md:w-1/4 hidden md:block">
                              <Suspense fallback={<ProductFilterLoader></ProductFilterLoader>}>
                                    <CategoryFilterWrapper ></CategoryFilterWrapper>
                              </Suspense>
                        </div>
                        <div className="category_product w-full md:w-3/4">
                              <Suspense fallback={<ProductFilterLoader></ProductFilterLoader>}>
                                    <ProductsList
                                          searchParams={searchParams}
                                    ></ProductsList>
                              </Suspense>
                        </div>
                  </div>
            </div>
      )
}

export default Products;