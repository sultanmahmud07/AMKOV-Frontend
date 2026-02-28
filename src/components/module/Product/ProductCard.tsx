import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, Star, ShoppingCart } from "lucide-react";

// Define the type based on your data structure
export interface ProductType {
  id: number;
  brand: string;
  name: string;
  price: number;
  originalPrice: number | null;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  badgeColor?: string;
  hasTimer?: boolean;
}

interface ProductCardProps {
  product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Helper to render stars moved inside the card component
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={14}
        className={`${
          index < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col h-full group/card hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden">
      {/* Top Badges */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className={`${product.badgeColor} text-white text-[10px] font-bold px-2 py-1 rounded-sm tracking-wider`}>
            {product.badge}
          </span>
        </div>
      )}

      {/* Action Buttons (Hover Reveal) */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 translate-x-10 opacity-0 group-hover/card:translate-x-0 group-hover/card:opacity-100 transition-all duration-300">
        <button className="w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center text-gray-500 hover:bg-[#3A9AFF] hover:text-white transition-colors">
          <Heart size={16} />
        </button>
        <button className="w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center text-gray-500 hover:bg-[#3A9AFF] hover:text-white transition-colors">
          <ShoppingCart size={16} />
        </button>
        <Link href={`/products/${"product-slug-here"}`} className="w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center text-gray-500 hover:bg-[#3A9AFF] hover:text-white transition-colors">
          <Eye size={16} />
        </Link>
      </div>

      {/* Product Image Area */}
      <Link href={`/products/${"product-slug-here"}`} className="relative w-full aspect-square mb-4 flex items-center justify-center bg-gray-50/50 rounded-lg p-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain mix-blend-multiply group-hover/card:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
        />
        
        {/* Mock Timer UI for specific products like the reference */}
        {product.hasTimer && (
           <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm shadow-sm px-3 py-1.5 rounded-md flex gap-3 text-center min-w-max">
              <div className="flex flex-col"><span className="text-xs font-bold leading-none text-[#023047]">695</span><span className="text-[8px] text-gray-500 uppercase">Days</span></div>
              <div className="flex flex-col"><span className="text-xs font-bold leading-none text-[#023047]">11</span><span className="text-[8px] text-gray-500 uppercase">Hrs</span></div>
              <div className="flex flex-col"><span className="text-xs font-bold leading-none text-[#023047]">39</span><span className="text-[8px] text-gray-500 uppercase">Min</span></div>
              <div className="flex flex-col"><span className="text-xs font-bold leading-none text-red-500">14</span><span className="text-[8px] text-gray-500 uppercase">Sec</span></div>
           </div>
        )}
      </Link>

      {/* Product Info */}
      <div className="flex flex-col grow">
        <span className="text-xs text-gray-400 mb-1">{product.brand}</span>
        
        <Link href={`/products/${"product-slug-here"}`}>
          <h3 className="text-sm font-semibold text-[#023047] line-clamp-2 hover:text-[#3A9AFF] transition-colors mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Ratings */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex gap-0.5">
            {renderStars(product.rating)}
          </div>
          <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
        </div>

        <div className="mt-auto">
          {/* Pricing */}
          <div className="flex items-center gap-2 mb-4">
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-base font-bold text-[#3A9AFF]">
              ${product.price.toFixed(2)}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-[#F4F5F7] hover:bg-[#3A9AFF] text-[#023047] hover:text-white text-xs font-bold py-3 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2">
            <span>ADD TO CART</span>
          </button>
        </div>
      </div>
    </div>
  );
}