
import { INews } from "@/types/news.interface";

// Function to fetch products from your API
async function getBlogs() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/blog?page=1&limit=1000`);

  if (!result.ok) {
    throw new Error("There was an error fetching blogs for the sitemap");
  }
  return result.json();
}

// Generate the sitemap
export default async function sitemap() {
  const blogsData = await getBlogs();

  return blogsData?.data?.map((news: INews) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/news/${news.slug}`,
    lastModified: news?.createdAt,
  }));
}