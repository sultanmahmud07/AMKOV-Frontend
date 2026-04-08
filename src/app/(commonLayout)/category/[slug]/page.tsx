import ProductsLoader from "@/components/loaders/Products/ProductsLoader";
import CategoryMenubar from "@/components/pages/Products/CategoryMenubar";
import ProductBanner from "@/components/pages/Products/ProductBanner";
import ProductsList from "@/components/pages/Products/ProductsList/ProductsList";
import { getCategories, getCategoryBySlug } from "@/services/category/category.service";
import { ICategory } from "@/types/product.interface";
import { Suspense } from "react";

export const generateStaticParams = async () => {
  const categories = await getCategories("limit=100");
  return categories.data.map((category: ICategory) => ({
    slug: String(category.slug),
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  return {
    title: category?.name,
    description: category?.description,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...category?.thumbnail ? [category.thumbnail] : []],
    },
  };
};


const page = async ({ params, searchParams }: { params: { slug: string }, searchParams: { page?: string } }) => {
  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // await delay(5 * 60 * 1000);
  const queryString = "limit=50";
  const categories = await getCategories(queryString);
  const slug = (await params).slug
  const pageNum = searchParams.page || "1";
  const searchParamsObj = { category_slug: slug, page: pageNum, limit: "20" }
    return (
      <div>
        <ProductBanner />
        <CategoryMenubar slug={slug} categories={categories?.data} />
        <Suspense fallback={<ProductsLoader />}>
          <ProductsList
            searchParams={searchParamsObj}
          ></ProductsList>
        </Suspense>

      </div>
    )
}

export default page