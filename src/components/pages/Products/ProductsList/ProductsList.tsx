import getProductsByCategory from '@/lib/getProductsByCategory';
import Pagination from './Pagination';
import { BsSearch } from "react-icons/bs";
type ProductsProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};
import ProductCard from "@/components/module/Product/ProductCard";
import { IProduct } from '@/types/product.interface';



const ProductsList = async ({ searchParams }: ProductsProps) => {
  const allProducts = await getProductsByCategory(searchParams);
// console.log("Product :", allProducts)
  return (
    <div className="main-container py-3 md:py-5">
      {
        allProducts?.data?.length > 0 ?
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-3 py-2">
            {
              allProducts?.data?.map((product: IProduct) => {
                return (
                  <ProductCard key={product._id} product={product}></ProductCard>
                )
              })
            }
          </div>
          :
          <div className="flex items-center justify-center flex-col gap-2 md:gap-3 py-10 md:py-20">
            <h3 className='text-sm text-center uppercase md:text-xl'>Search No Result</h3>
            <p className='text-sm md:text-base text-center text-gray-400'>We&apos;re sorry. We cannot find any matches for your search term.</p>
            <span className='text-3xl md:text-5xl text-gray-400 py-2 md:py-4'>
              <BsSearch />
            </span>
          </div>
      }
      <Pagination totalPages={allProducts?.meta?.totalPage} />
    </div>
  )
}

export default ProductsList