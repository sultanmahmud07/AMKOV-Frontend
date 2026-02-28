import ProductCard, { ProductType } from "@/components/module/Product/ProductCard";


// Demo Data mapped to camera/tech products
const relatedProducts: ProductType[] = [
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
  {
    id: 6,
    brand: "Amkov",
    name: "48MP Waterproof Action Camera",
    price: 120.0,
    originalPrice: 150.0,
    rating: 5,
    reviews: 12,
    image: "/home/product/7.jpg",
    badge: "HOT",
    badgeColor: "bg-orange-500",
  },
  {
    id: 7,
    brand: "Amkov",
    name: "48MP Waterproof Action Camera",
    price: 120.0,
    originalPrice: 150.0,
    rating: 5,
    reviews: 12,
    image: "/home/product/9.jpg",
    badge: "HOT",
    badgeColor: "bg-orange-500",
  },
];
const RelatedProducts = async () => {
  // const searchParams= {category: product.categories[0].slug, limit:200}

  // console.log(relatedProducts)

  return (
    <section className="py-6 md:pb-10">
      <div className="main-container">
        <h2 className="main-title text-2xl md:text-4xl text-black py-4 md:py-8 font-bold">You might also like</h2>
        {
          relatedProducts?.length > 0 ?
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 pt-2 md:pt-5">
              {
                relatedProducts?.map((product: ProductType) => {
                  return (
                    <ProductCard key={product.id} product={product}></ProductCard>
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
