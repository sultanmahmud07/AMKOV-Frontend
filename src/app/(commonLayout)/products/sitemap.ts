import type { MetadataRoute } from "next";
import { IProduct } from "@/types/product.interface";
import { BASEURL } from "@/utils/constant";

const SITE_URL = (process.env.NEXT_PUBLIC_BASE_URL || "https://amkov.com").replace(/\/+$/, "");

async function getProducts(): Promise<IProduct[]> {
  try {
    const res = await fetch(`${BASEURL}/product?limit=1000`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching products for products/sitemap.xml:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();
  const now = new Date();

  return products
    .filter((product) => product?.slug)
    .map((product: IProduct) => ({
      url: `${SITE_URL}/products/${product.slug}`,
      lastModified: product.updatedAt
        ? new Date(product.updatedAt)
        : product.createdAt
        ? new Date(product.createdAt)
        : now,
      changeFrequency: "weekly",
      priority: 0.8,
    }));
}