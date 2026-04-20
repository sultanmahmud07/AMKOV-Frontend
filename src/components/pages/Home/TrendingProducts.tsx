
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/module/Product/ProductCard";
import { getProducts } from "@/services/product/product.service";
import { IProduct } from "@/types/product.interface";


export default async function TrendingProducts() {
  const queryString = "limit=10&isTrendy=true"; 
  const products = await getProducts(queryString);
  return (
    <section className="py-16 bg-white">
      <div className="main-container">

        {/* Section Header */}
        <div className="md:text-center md:mb-10 mb-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#023047]">
            Trending Products
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative group hidden md:block">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products?.data?.map((product: IProduct) => (
                <CarouselItem
                  key={product._id}
                  // Responsive sizing: 1 on mobile, 2 on tablet, 4 on desktop, 5 on large screens
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Carousel Controls - Positioned outside like the reference */}
            <CarouselPrevious className="hidden md:flex -left-6 lg:-left-12 h-10 w-10 border-gray-200 bg-gray-50 text-gray-500 hover:bg-[#3A9AFF] hover:text-white hover:border-[#3A9AFF] transition-colors" />
            <CarouselNext className="hidden md:flex -right-6 lg:-right-12 h-10 w-10 border-gray-200 bg-gray-50 text-gray-500 hover:bg-[#3A9AFF] hover:text-white hover:border-[#3A9AFF] transition-colors" />
          </Carousel>
        </div>

        <div className="md:hidden grid grid-cols-2 gap-2">
          {
            products?.data?.map((product: IProduct) => {
              return (
                <ProductCard key={product._id} product={product} />
              )
            })
          }
        </div>
      </div>
    </section>
  );
}