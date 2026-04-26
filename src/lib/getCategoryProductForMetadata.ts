
import { BASEURL } from "@/utils/constant";

export default async function getCategoryProductsForMetadata(slug: string) {
  try {
    const url = `${BASEURL}/category/${slug}`;
    const response = await fetch(url,
      {
        cache: "no-store"
        // next: {
        //   revalidate: 5,
        // }
      }
    );
    const data = await response.json();
    return data || null;
  } catch (error) {
    console.error("Products fetch error:", error);
    throw new Error("Error fetching product by category!");
  }
}
