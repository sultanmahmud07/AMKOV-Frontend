/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { IoMdArrowDropdown } from "react-icons/io";
import { ICategory } from "@/types";
import TRnDCapabilities from "./TRnDCapabilities";


// Specs (Brands)
const specs = ["Ac Charger", "Dc Charger", "Wall Mount"];

// Tags
const tags = [
  "Energy Solutions",
  "Solar Energy Solutions",
  "Customized Energy Systems",
  "Energy Storage Systems (ESS)",
  "Energy Storage Batteries",
  "Mobile Energy Storage Systems",
  "EV Charging Solutions",
  "AC EV Chargers",
  "DC Fast Chargers",
  "Portable & Dual-Plug EV Chargers",
];

















interface CategoryFilterProps {
  categories: ICategory[];
}

const CategoryFilter = ({ categories }: CategoryFilterProps) => {
  const [selectedPrice, setSelectedPrice] = useState<string>("All Price");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [selectedSpecs, setSelectedSpecs] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // 🧩 Helper: update one query param but keep all others
  const updateQueryParam = (key: string, value?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value.length > 0) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // 🧩 Sync selected category with search params
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // 🧩 Handle price range parsing
  useEffect(() => {
    if (!selectedPrice || selectedPrice === "All Price") {
      setMinPrice("");
      setMaxPrice("");
      return;
    }
    const match = selectedPrice.match(/\$?(\d+)\s*(?:to|-)?\s*\$?(\d+)?/);
    if (match) {
      const min = match[1];
      const max = match[2];
      setMinPrice(min || "");
      setMaxPrice(max || "");
    }
  }, [selectedPrice]);

  // ✅ CATEGORY: update only "category" param
  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    updateQueryParam("category", slug);
  };

  // ✅ PRICE: update only "minPrice" and "maxPrice" params
  const handlePriceFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (minPrice) params.set("minPrice", minPrice);
    else params.delete("minPrice");

    if (maxPrice) params.set("maxPrice", maxPrice);
    else params.delete("maxPrice");

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // ✅ SPECS: toggle and update only "specs" param
  const handleSpecsFilter = (spec: string) => {
    let updated = [...selectedSpecs];
    if (updated.includes(spec)) {
      updated = updated.filter((s) => s !== spec);
    } else {
      updated.push(spec);
    }
    setSelectedSpecs(updated);
    updateQueryParam("specs", updated.join(","));
  };

  // ✅ TAGS: toggle and update only "tags" param
  const handleTagFilter = (tag: string) => {
    let updated = [...selectedTags];
    if (updated.includes(tag)) {
      updated = updated.filter((t) => t !== tag);
    } else {
      updated.push(tag);
    }
    setSelectedTags(updated);
    updateQueryParam("tags", updated.join(","));
  };

  return (
    <div className="z-50 border-[1px] p-3 border-[#E2E2E2] rounded md:rounded-md">
      {/* CATEGORY FILTER */}
      <h6 className="text-[#000000] text-xs md:text-sm font-semibold flex items-center justify-between">
        Category
        <span className="text-primary text-2xl">
          <IoMdArrowDropdown />
        </span>
      </h6>

      <div className="border-b border-[#E4E7E9] py-4">
        <RadioGroup
          value={selectedCategory}
          onValueChange={handleCategoryChange}
          className="flex flex-col gap-3"
        >
          {categories.map((category) => (
            <div
              key={category._id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value={category.slug}
                  id={category.slug}
                  className="h-[20px] w-[20px]"

                />
                <Label
                  htmlFor={category.slug}
                  className="text-xs md:text-sm text-gray-700 cursor-pointer"
                >
                  {category.name}
                </Label>
              </div>
              <span className="bg-secondary px-2 text-xs rounded-xl">{category.productCount || 0}</span>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* PRICE RANGE FILTER */}
      {/* <h6 className="text-[#000000] text-xs md:text-sm font-semibold mt-4 md:mt-6 flex items-center justify-between mb-3">
        Flexible Pricing
      </h6>

      <div className="price_range flex items-center gap-2 md:gap-3">
        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="h-10 rounded p-2 border border-[#E4E7E9] outline-none w-16 md:w-20 text-center"
        />
        --
        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="h-10 rounded p-2 border border-[#E4E7E9] outline-none w-16 md:w-20 text-center"
        />
        <button
          onClick={handlePriceFilter}
          className="h-10 ml-2 px-3 bg-primary rounded text-white cursor-pointer flex items-center gap-1"
        >
          <span className="text-3xl">
            <IoMdArrowDropright />
          </span>
        </button>
      </div>

      <ul className="flex flex-col gap-3 border-b border-[#E4E7E9] py-4 pb-6">
        {priceRanges.map((price, index) => (
          <li key={index}>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                value={price}
                checked={selectedPrice === price}
                onChange={() => setSelectedPrice(price)}
                className="h-[18px] w-[18px] radio-primary"
              />
              <span className="text-xs md:text-sm text-gray-700">{price}</span>
            </label>
          </li>
        ))}
      </ul> */}

      <TRnDCapabilities />
      {/* SPECS FILTER */}
      <h6 className="text-[#000000] text-xs md:text-sm font-semibold mt-6 flex items-center justify-between mb-3">
        Specs
      </h6>
      <ul className="flex flex-col gap-3 border-b border-[#E4E7E9] pb-4">
        {specs.map((spec, index) => (
          <li key={index}>
            <label className="flex items-center space-x-2 cursor-pointer">
              <Checkbox
                checked={selectedSpecs.includes(spec)}
                onCheckedChange={() => handleSpecsFilter(spec)}
                className="h-[18px] w-[18px] checkbox-primary"
              />
              <span className="text-xs md:text-sm text-gray-700">{spec}</span>
            </label>
          </li>
        ))}
      </ul>

      {/* TAGS FILTER */}
      <h6 className="text-[#000000] text-xs md:text-sm font-semibold mt-6 flex items-center justify-between mb-3">
        Keywords
      </h6>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => handleTagFilter(tag)}
            className={`px-3 py-1 text-xs md:text-sm rounded-lg border-[1px] ${selectedTags.includes(tag)
              ? "bg-primary text-white border-primary"
              : "border-[#E2E2E2]"
              }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
