
import { INews } from "@/types/news.interface";
import { BASEURL } from "@/utils/constant";

// Function to fetch products from your API
async function getBlogs() {
  const result = await fetch(`${BASEURL}/news/retrieve/all?page=1&limit=1000`);

  if (!result.ok) {
    throw new Error("There was an error fetching blogs for the sitemap");
  }
  return result.json();
}

// Generate the sitemap
export default async function sitemap() {
  const blogsData = await getBlogs();

  return blogsData?.data?.data?.map((news:INews) => ({
    url: `https://t-power.com.au/news/${news.slug}`,
    lastModified: news?.createdAt,
  }));
}