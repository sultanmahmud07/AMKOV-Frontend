import type { MetadataRoute } from "next";
import { ICategory } from "@/types/product.interface";
import { BASEURL } from "@/utils/constant";

const SITE_URL = (process.env.NEXT_PUBLIC_BASE_URL || "https://amkov.com").replace(/\/+$/, "");

async function getCategories(): Promise<ICategory[]> {
  try {
    const res = await fetch(`${BASEURL}/category?limit=1000`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching categories for category/sitemap.xml:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const categories = await getCategories();
  const now = new Date();

  return categories
    .filter((category) => category?.slug)
    .map((category: ICategory) => ({
      url: `${SITE_URL}/category/${category.slug}`,
      lastModified: category.updatedAt
        ? new Date(category.updatedAt)
        : category.createdAt
        ? new Date(category.createdAt)
        : now,
      changeFrequency: "weekly",
      priority: 0.8,
    }));
}