import ProductCard from "@/components/module/Product/ProductCard";
import { getProducts } from "@/services/product/product.service";
import { IProduct } from "@/types/product.interface";


const RelatedProducts = async ({ productSlug }: { productSlug: string }) => {
  const queryString = `category_slug=${productSlug}&page=1&limit=20`;
  const relatedProducts = await getProducts(queryString);
  return (
    <section className="py-6 md:pb-10">
      <div className="main-container">
        <h2 className="main-title text-2xl md:text-4xl text-black py-4 md:py-8 font-bold">You might also like</h2>
        {
          relatedProducts?.data?.length > 0 ?
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 pt-2 md:pt-5">
              {
                relatedProducts?.data?.map((product: IProduct) => {
                  return (
                    <ProductCard key={product._id} product={product}></ProductCard>
                  )
                })
              }
            </div>
            :
            <p className="py-5 text-center uppercase text-lg">No Similar product found!</p>
        }
      </div>
    </section>
  )
}

export default RelatedProducts
