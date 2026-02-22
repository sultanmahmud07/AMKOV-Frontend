import getProductsByCategory from '@/lib/getProductsByCategory';
import Sorting from '../Sorting/Sorting';
import Pagination from './Pagination';
import { BsSearch } from "react-icons/bs";
import CategoryFilterWrapper from '../CategoryFilter/CategoryFilterWrapper';
type ProductsProps = {
      searchParams?: { [key: string]: string | string[] | undefined };
};
import ProductCard, { ProductType } from "@/components/module/Product/ProductCard";


// Demo Data mapped to camera/tech products
const trendingProducts: ProductType[] = [
  {
    id: 1,
    brand: "Amkov Pro",
    name: "5K V-Log Camera with Flip Screen",
    price: 200.0,
    originalPrice: null,
    rating: 4,
    reviews: 3,
    image: "/home/product/1.jpg",
    badge: "NEW",
    badgeColor: "bg-green-500",
  },
  {
    id: 2,
    brand: "TechGear",
    name: "Silicone Controller Grip Cover",
    price: 130.0,
    originalPrice: null,
    rating: 5,
    reviews: 2,
    image: "/home/product/2.jpg", // VR/Tech accessory
  },
  {
    id: 3,
    brand: "EcoShop",
    name: "Smart Watch Series 5 - Rose Gold",
    price: 150.0,
    originalPrice: null,
    rating: 4,
    reviews: 5,
    image: "/home/product/3.jpg",
  },
  {
    id: 4,
    brand: "MegaMart",
    name: "4K UHD Smart TV Monitor 43-inch",
    price: 190.0,
    originalPrice: null,
    rating: 4,
    reviews: 3,
    image: "/home/product/4.jpg",
  },
  {
    id: 5,
    brand: "SmartShop",
    name: "Premium Noise Cancelling Headphones",
    price: 175.5,
    originalPrice: 195.0,
    rating: 4,
    reviews: 3,
    image: "/home/product/5.jpg",
    badge: "-10%",
    badgeColor: "bg-red-500",
    hasTimer: true, // Mock UI for the timer shown in reference
  },
  {
    id: 6,
    brand: "Amkov",
    name: "48MP Waterproof Action Camera",
    price: 120.0,
    originalPrice: 150.0,
    rating: 5,
    reviews: 12,
    image: "/home/product/6.jpg",
    badge: "HOT",
    badgeColor: "bg-orange-500",
  },
];

const ProductsList = async ({  searchParams }:ProductsProps) => {
    const allProducts = await getProductsByCategory(searchParams);
 
    return (
        <div>
            <Sorting>
                <CategoryFilterWrapper></CategoryFilterWrapper> 
            </Sorting>
            {
                trendingProducts?.length > 0 ?
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-5 py-2">
                        {
                            trendingProducts.map((product:ProductType) => {
                                return (
                                    <ProductCard key={product.id} product={product}></ProductCard>
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
            <Pagination totalPages={allProducts.meta.totalPage} />
        </div>
    )
}

export default ProductsList