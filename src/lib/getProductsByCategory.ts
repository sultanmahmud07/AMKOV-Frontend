import { BASEURL } from "@/utils/constant";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function getProductsByCategory(searchParams: any) {
  try {
    const params = new URLSearchParams();

    console.log("SearchParams:", searchParams)
    // ✅ Required: Always include page and limit (with default values if not set)
    params.set("page", searchParams?.page || "1");
    params.set("limit", searchParams?.limit || "10");

    // ✅ Optional query filters
    if (searchParams?.category_slug) params.set("category_slug", searchParams.category_slug);
    if (searchParams?.viewOnRootPage) params.set("viewOnRootPage", searchParams.viewOnRootPage);
    if (searchParams?.tags) params.set("tags", searchParams.tags);
    if (searchParams?.sortBy) params.set("sortBy", searchParams.sortBy);
    if (searchParams?.sortOrder) params.set("sortOrder", searchParams.sortOrder);
    const url = `${BASEURL}/product?${params.toString()}`;

    const response = await fetch(url, {
      cache: "no-store",
    });

    const data = await response.json();
    return data || null;

  } catch (error) {
    console.error("Product fetch error:", error);
    throw new Error("Error fetching product by quries!");
  }
}
