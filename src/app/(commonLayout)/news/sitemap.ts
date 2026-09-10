import type { MetadataRoute } from "next";
import { INews } from "@/types/news.interface";
import { BASEURL } from "@/utils/constant";

const SITE_URL = (process.env.NEXT_PUBLIC_BASE_URL || "https://amkov.com").replace(/\/+$/, "");

async function getBlogs(): Promise<INews[]> {
  try {
    const res = await fetch(`${BASEURL}/blog?limit=1000`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching blogs for news/sitemap.xml:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs();
  const now = new Date();

  return blogs
    .filter((news) => news?.slug)
    .map((news: INews) => ({
      url: `${SITE_URL}/news/${news.slug}`,
      lastModified: (news as any).updatedAt
        ? new Date((news as any).updatedAt)
        : news.createdAt
        ? new Date(news.createdAt)
        : now,
      changeFrequency: "weekly",
      priority: 0.7,
    }));
}