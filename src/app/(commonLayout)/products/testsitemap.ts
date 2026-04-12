
import { IProduct } from "@/types/product.interface";

// Function to fetch products from your API
async function getProducts() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/product?page=1&limit=1000`);

  if (!result.ok) {
    throw new Error("There was an error fetching Product for the sitemap");
  }
  return result.json();
}

// Generate the sitemap
export default async function sitemap() {
  const products = await getProducts();

  return products?.data?.map((product: IProduct) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${product.slug}`,
    lastModified: product?.createdAt,
  }));
}