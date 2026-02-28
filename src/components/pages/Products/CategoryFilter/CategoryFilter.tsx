"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Star } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { ICategory } from "@/types/product.interface";

// --- MOCK DATA FOR NEW FILTERS ---
const brandOptions = [
  { name: "AMKOV", count: 42 },
  { name: "Nikon", count: 12 },
  { name: "Canon", count: 8 },
  { name: "Sony", count: 5 },
];

const availabilityOptions = [
  { label: "In stock", value: "in_stock", count: 17 },
  { label: "Not available", value: "out_of_stock", count: 1 },
];

const colorOptions = [
  { name: "Black", hex: "#000000", count: 4 },
  { name: "Blue", hex: "#3A9AFF", count: 7 },
  { name: "Gray", hex: "#6B7280", count: 3 },
  { name: "Green", hex: "#16A34A", count: 3 },
  { name: "Peach", hex: "#FDBA74", count: 2 },
  { name: "Pink", hex: "#F472B6", count: 1 },
  { name: "Purple", hex: "#A855F7", count: 1 },
];

const ratingOptions = [
  { value: "5", stars: 5, count: 15 },
  { value: "4", stars: 4, count: 9 },
  { value: "3", stars: 3, count: 0 },
  { value: "2", stars: 2, count: 0 },
  { value: "1", stars: 1, count: 0 },
];

// Price Constants
const MIN_PRICE_LIMIT = 0;
const MAX_PRICE_LIMIT = 2000;

interface CategoryFilterProps {
  categories: ICategory[];
}
// --- STATIC CAMERA CATEGORY DATA ---
const cameraCategories = [
  { id: "cat-optical", name: "Optical Zoom Cameras", slug: "optical-zoom", count: 24 },
  { id: "cat-digital", name: "Digital Zoom Cameras", slug: "digital-zoom", count: 18 },
  { id: "cat-video", name: "Video Cameras", slug: "video-cameras", count: 15 },
  { id: "cat-action", name: "Action Cameras", slug: "action-cameras", count: 12 },
  { id: "cat-instant", name: "Instant Print Cameras", slug: "instant-print", count: 9 },
  { id: "cat-kids", name: "Kids Cameras", slug: "kids-cameras", count: 22 },
  { id: "cat-vlog", name: "V-Log Cameras", slug: "vlog-cameras", count: 8 },
];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryFilter = ({ categories }: CategoryFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // State for Checkbox Arrays
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);

  // State for Workable Slider Price Filter
  const [priceRange, setPriceRange] = useState<number[]>([MIN_PRICE_LIMIT, MAX_PRICE_LIMIT]);

  // Sync state with URL on load
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedCategories(searchParams.get("category")?.split(",") || []);
    setSelectedBrands(searchParams.get("brands")?.split(",") || []);
    setSelectedAvailability(searchParams.get("availability")?.split(",") || []);
    setSelectedColors(searchParams.get("color")?.split(",") || []);
    setSelectedRatings(searchParams.get("rating")?.split(",") || []);
    
    const urlMin = Number(searchParams.get("minPrice")) || MIN_PRICE_LIMIT;
    const urlMax = Number(searchParams.get("maxPrice")) || MAX_PRICE_LIMIT;
    setPriceRange([urlMin, urlMax]);
  }, [searchParams]);

  // Generic Toggle Function for Checkboxes
  const handleToggle = (
    key: string, 
    value: string, 
    currentSelected: string[], 
    setFn: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    let updated = [...currentSelected];
    if (updated.includes(value)) {
      updated = updated.filter((item) => item !== value);
    } else {
      updated.push(value);
    }
    setFn(updated);

    // Update URL
    const params = new URLSearchParams(searchParams.toString());
    if (updated.length > 0) {
      params.set(key, updated.join(","));
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // Handler for Price Slider Commit (Triggers when user stops dragging)
  const handlePriceCommit = (value: number[]) => {
    const params = new URLSearchParams(searchParams.toString());
    
    // Only set minPrice if it's greater than the lowest limit
    if (value[0] > MIN_PRICE_LIMIT) params.set("minPrice", value[0].toString());
    else params.delete("minPrice");

    // Only set maxPrice if it's lower than the highest limit
    if (value[1] < MAX_PRICE_LIMIT) params.set("maxPrice", value[1].toString());
    else params.delete("maxPrice");

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // Helper to render stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={14}
        className={`${index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <div className="bg-white border border-gray-100 rounded-lg  p-5 md:p-6">
      
      {/* Main Header */}
      <h2 className="text-xl font-extrabold text-[#023047] mb-6 pb-4 border-b border-gray-100">
        Filter By
      </h2>

      <div className="space-y-8">
        
        {/* ================= CATEGORIES ================= */}
        {/* <div>
          <h3 className="text-sm font-bold text-[#023047] mb-4">Categories</h3>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat._id} className="flex items-center gap-3">
                <Checkbox
                  id={`cat-${cat.slug}`}
                  checked={selectedCategories.includes(cat.slug)}
                  onCheckedChange={() => handleToggle("category", cat.slug, selectedCategories, setSelectedCategories)}
                  className="data-[state=checked]:bg-[#3A9AFF] data-[state=checked]:border-[#3A9AFF]"
                />
                <label htmlFor={`cat-${cat.slug}`} className="text-sm text-gray-600 cursor-pointer hover:text-[#3A9AFF] transition-colors select-none leading-none">
                  {cat.name} <span className="text-gray-400 ml-1">({cat.productCount || 0})</span>
                </label>
              </li>
            ))}
          </ul>
        </div> */}
{/* ================= CATEGORIES ================= */}
<div>
  <h3 className="text-sm font-bold text-[#023047] mb-4">Categories</h3>
  <ul className="space-y-3">
    {cameraCategories.map((cat) => (
      <li key={cat.id} className="flex items-center gap-3">
        <Checkbox
          id={`cat-${cat.slug}`}
          checked={selectedCategories.includes(cat.slug)}
          onCheckedChange={() => handleToggle("category", cat.slug, selectedCategories, setSelectedCategories)}
          className="data-[state=checked]:bg-[#3A9AFF] data-[state=checked]:border-[#3A9AFF]"
        />
        <label htmlFor={`cat-${cat.slug}`} className="text-sm text-gray-600 cursor-pointer hover:text-[#3A9AFF] transition-colors select-none leading-none">
          {cat.name} <span className="text-gray-400 ml-1">({cat.count})</span>
        </label>
      </li>
    ))}
  </ul>
</div>
        {/* ================= BRANDS ================= */}
        <div>
          <h3 className="text-sm font-bold text-[#023047] mb-4">Brands</h3>
          <ul className="space-y-3">
            {brandOptions.map((brand) => (
              <li key={brand.name} className="flex items-center gap-3">
                <Checkbox
                  id={`brand-${brand.name}`}
                  checked={selectedBrands.includes(brand.name)}
                  onCheckedChange={() => handleToggle("brands", brand.name, selectedBrands, setSelectedBrands)}
                  className="data-[state=checked]:bg-[#3A9AFF] data-[state=checked]:border-[#3A9AFF]"
                />
                <label htmlFor={`brand-${brand.name}`} className="text-sm text-gray-600 cursor-pointer hover:text-[#3A9AFF] transition-colors select-none leading-none">
                  {brand.name} <span className="text-gray-400 ml-1">({brand.count})</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= AVAILABILITY ================= */}
        <div>
          <h3 className="text-sm font-bold text-[#023047] mb-4">Availability</h3>
          <ul className="space-y-3">
            {availabilityOptions.map((opt) => (
              <li key={opt.value} className="flex items-center gap-3">
                <Checkbox
                  id={`avail-${opt.value}`}
                  checked={selectedAvailability.includes(opt.value)}
                  onCheckedChange={() => handleToggle("availability", opt.value, selectedAvailability, setSelectedAvailability)}
                  className="data-[state=checked]:bg-[#3A9AFF] data-[state=checked]:border-[#3A9AFF]"
                />
                <label htmlFor={`avail-${opt.value}`} className="text-sm text-gray-600 cursor-pointer hover:text-[#3A9AFF] transition-colors select-none leading-none">
                  {opt.label} <span className="text-gray-400 ml-1">({opt.count})</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= PRICE SLIDER (SHADCN) ================= */}
        <div>
          <h3 className="text-sm font-bold text-[#023047] mb-3">Price Range</h3>
          
          {/* Dynamic Price Display */}
          <div className="flex justify-between text-sm text-gray-600 font-medium mb-4">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>

          {/* Shadcn Slider */}
          <Slider
            min={MIN_PRICE_LIMIT}
            max={MAX_PRICE_LIMIT}
            step={10}
            value={priceRange}
            onValueChange={setPriceRange} // Updates UI instantly while dragging
            onValueCommit={handlePriceCommit} // Updates URL only when user lets go
            className="**[[role=slider]]:border-[#3A9AFF] **[[role=slider]]:focus-visible:ring-[#3A9AFF] [&_[data-orientation=horizontal]_span[data-radix-slider-track]]:bg-gray-200 [&_[data-orientation=horizontal]_span[data-radix-slider-range]]:bg-[#3A9AFF]"
          />
        </div>

        {/* ================= COLORS ================= */}
        <div>
          <h3 className="text-sm font-bold text-[#023047] mb-4">Color</h3>
          <ul className="space-y-3">
            {colorOptions.map((color) => {
              const isActive = selectedColors.includes(color.name);
              return (
                <li key={color.name} className="flex items-center gap-3 cursor-pointer group">
                  <div 
                    onClick={() => handleToggle("color", color.name, selectedColors, setSelectedColors)}
                    className={`w-5 h-5 rounded-full flex items-center justify-center border-2 transition-all ${isActive ? 'border-gray-400 p-0.5' : 'border-transparent'}`}
                  >
                    <div className="w-full h-full rounded-full shadow-sm border border-gray-100" style={{ backgroundColor: color.hex }}></div>
                  </div>
                  
                  <label 
                    onClick={() => handleToggle("color", color.name, selectedColors, setSelectedColors)}
                    className={`text-sm text-gray-600 cursor-pointer group-hover:text-[#3A9AFF] transition-colors select-none leading-none ${isActive ? 'font-semibold text-[#023047]' : ''}`}
                  >
                    {color.name} <span className="text-gray-400 font-normal ml-1">({color.count})</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ================= AVERAGE RATING ================= */}
        <div>
          <h3 className="text-sm font-bold text-[#023047] mb-4">Average Rating</h3>
          <ul className="space-y-3">
            {ratingOptions.map((rating) => (
              <li key={rating.value} className="flex items-center gap-3">
                <Checkbox
                  id={`rating-${rating.value}`}
                  checked={selectedRatings.includes(rating.value)}
                  onCheckedChange={() => handleToggle("rating", rating.value, selectedRatings, setSelectedRatings)}
                  className="data-[state=checked]:bg-[#3A9AFF] data-[state=checked]:border-[#3A9AFF]"
                />
                <label htmlFor={`rating-${rating.value}`} className="cursor-pointer hover:text-[#3A9AFF] transition-colors select-none flex items-center gap-2">
                  <div className="flex gap-0.5 mt-0.5">
                    {renderStars(rating.stars)}
                  </div>
                  <span className="text-sm text-gray-400 ml-1 leading-none">({rating.count})</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CategoryFilter;