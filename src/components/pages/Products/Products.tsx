import { Suspense } from "react";
import ProductsList from "./ProductsList/ProductsList";
import ProductBanner from "./ProductBanner";
import CategoryMenubar from "./CategoryMenubar";
import ProductsLoader from "@/components/loaders/Products/ProductsLoader";
import { getCategories } from "@/services/category/category.service";

type ProductsProps = {
      searchParams?: { [key: string]: string | string[] | undefined };
};

const Products = async ({ searchParams }: ProductsProps) => {
      const queryString = "limit=50";
      const categories = await getCategories(queryString);
      return (
            <div className="">
                  <ProductBanner />
                  <CategoryMenubar categories={categories?.data} />
                  <Suspense fallback={<ProductsLoader />}>
                        <ProductsList
                              searchParams={searchParams}
                        ></ProductsList>
                  </Suspense>
            </div>
      )
}

export default Products;