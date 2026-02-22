// import ProductCard from "@/components/modules/Product/ProductCard"
// import getRelatedProducts from "@/lib/getReletedProducts"
// import { IProduct } from "@/types"

// const RelatedProducts = async ({product}:{product:IProduct}) => {
//       const searchParams= {category: product.categories[0].slug, limit:200}
//       const productData = await getRelatedProducts(searchParams)
//       // Filter out the product with the same ID
//       const relatedProducts = productData?.data?.filter(
//             (p: IProduct) => p?.slug !== product?.slug
//       )
//       // console.log(relatedProducts)

//       return (
//             <section className="py-6 md:pb-10">
//                   <div className="main-container">
//                           <h2 className="main-title text-2xl md:text-4xl text-black py-4 md:py-8 font-bold">Explore More Solutions</h2>
//                        {
//                         relatedProducts?.length > 0 ?
//                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 pt-2 md:pt-5">
//                               {
//                                     relatedProducts?.map((product:IProduct) => {
//                                           return (
//                                                 <ProductCard key={product._id} product={product}></ProductCard>
//                                           )
//                                     })
//                               }
//                         </div>
//                         :
//                         <p className="py-5 text-center uppercase text-lg">No Similar product found!</p>
//                        }
//                   </div>
//             </section>
//       )
// }

// export default RelatedProducts
