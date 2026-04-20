import Image from "next/image";
import Link from "next/link";
import { Eye, Send } from "lucide-react";
import { IProduct } from "@/types/product.interface";


export default function ProductCard({ product }: { product: IProduct }) {

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-3 md:p-4 flex flex-col h-full group/card hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden">
 {/* Top Badges (Shows all unique colors) */}
      {product.variations && product.variations.length > 0 && (
        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-1.5">
          {Array.from(new Set(product.variations.map((v) => v.color)))
            .filter(Boolean) // Removes any undefined/null colors
            .map((color, index) => (
              <span 
                key={index}
                className={`w-4 h-2 rounded shadow-sm`}
                style={{ backgroundColor: color }}
              >
              </span>
          ))}
        </div>
      )}

      {/* Action Buttons (Hover Reveal) */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 translate-x-10 opacity-0 group-hover/card:translate-x-0 group-hover/card:opacity-100 transition-all duration-300">
        <button className="w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center text-gray-500 hover:bg-[#3A9AFF] hover:text-white transition-colors">
          <Send size={16} />
        </button>
        <Link  href={`/products/${product.slug}`}className="w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center text-gray-500 hover:bg-[#3A9AFF] hover:text-white transition-colors">
          <Eye size={16} />
        </Link>
      </div>

      {/* Product Image Area */}
      <Link href={`/products/${product.slug}`} className="relative w-full aspect-square mb-4 flex items-center justify-center bg-gray-50/50 rounded-lg p-4">
        <Image
          src={product?.images?.[0] || "/default.png"}
          alt={product.name}
          fill
          className="object-contain mix-blend-multiply group-hover/card:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
        />

      </Link>

      {/* Product Info */}
      <div className="flex flex-col grow">
        <span className="text-xs text-gray-400 mb-1">{product.category?.name || "Category Name"}</span>

        <Link  href={`/products/${product.slug}`}>
          <h3 className="text-sm font-semibold text-[#023047] line-clamp-2 hover:text-[#3A9AFF] transition-colors mb-2">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto">

          {/* Add to Cart Button */}
          <Link  href={`/products/${product.slug}`} className="w-full border border-primary/35 bg-[#F4F5F7] hover:bg-[#3A9AFF] text-[#023047] hover:text-white text-xs font-bold py-2 md:py-3 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2">
            <span>View More</span>
          </Link>
        </div>
      </div>
    </div>
  );
}