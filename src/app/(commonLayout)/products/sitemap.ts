
import { IProduct } from "@/types/product.interface";
import { BASEURL } from "@/utils/constant";

// Function to fetch products from your API
async function getProducts() {
  const result = await fetch(`${BASEURL}/product/retrieve/all?page=1&limit=1000`);

  if (!result.ok) {
    throw new Error("There was an error fetching Product for the sitemap");
  }
  return result.json();
}

// Generate the sitemap
export default async function sitemap() {
  const products = await getProducts();

  return products?.data?.map((product:IProduct) => ({
    url: `https://t-power.com.au/products/${product.slug}`,
    lastModified: product?.createdAt,
  }));
}