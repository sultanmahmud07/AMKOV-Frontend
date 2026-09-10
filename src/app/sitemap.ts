import type { MetadataRoute } from "next";
import { BASEURL } from "@/utils/constant";
import { IProduct, ICategory } from "@/types/product.interface";
import { INews } from "@/types/news.interface";

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
    console.error("Error fetching products for sitemap:", error);
    return [];
  }
}

async function getCategories(): Promise<ICategory[]> {
  try {
    const res = await fetch(`${BASEURL}/category?limit=1000`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching categories for sitemap:", error);
    return [];
  }
}

async function getNews(): Promise<INews[]> {
  try {
    const res = await fetch(`${BASEURL}/blog?limit=1000`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching news for sitemap:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, categories, newsList] = await Promise.all([
    getProducts(),
    getCategories(),
    getNews(),
  ]);

  const now = new Date();

  // 1. Static Core & High-Priority Landing Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/categories`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // High-Value B2B OEM / ODM Landing Pages
    {
      url: `${SITE_URL}/oem-camera-manufacturer`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/action-camera-oem`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/instant-camera-oem`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/kids-camera-manufacturer`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Information & Support Pages
    {
      url: `${SITE_URL}/solution`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/news`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/support`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/download`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Legal Pages
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 2. Dynamic Product Pages
  const productEntries: MetadataRoute.Sitemap = products
    .filter((product) => product?.slug)
    .map((product) => ({
      url: `${SITE_URL}/products/${product.slug}`,
      lastModified: product.updatedAt ? new Date(product.updatedAt) : (product.createdAt ? new Date(product.createdAt) : now),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  // 3. Dynamic Category Pages
  const categoryEntries: MetadataRoute.Sitemap = categories
    .filter((category) => category?.slug)
    .map((category) => ({
      url: `${SITE_URL}/category/${category.slug}`,
      lastModified: category.updatedAt ? new Date(category.updatedAt) : (category.createdAt ? new Date(category.createdAt) : now),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  // 4. Dynamic News / Blog Pages
  const newsEntries: MetadataRoute.Sitemap = newsList
    .filter((news) => news?.slug)
    .map((news) => ({
      url: `${SITE_URL}/news/${news.slug}`,
      lastModified: (news as any).updatedAt ? new Date((news as any).updatedAt) : (news.createdAt ? new Date(news.createdAt) : now),
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  return [...staticPages, ...productEntries, ...categoryEntries, ...newsEntries];
}