import ProductsLoader from "@/components/loaders/Products/ProductsLoader";
import CategoryMenubar from "@/components/pages/Products/CategoryMenubar";
import ProductBanner from "@/components/pages/Products/ProductBanner";
import ProductsList from "@/components/pages/Products/ProductsList/ProductsList";
import getCategoryProductsForMetadata from "@/lib/getCategoryProductForMetadata";
import { getCategories } from "@/services/category/category.service";
import { Suspense } from "react";

// export const generateStaticParams = async () => {
//   const categories = await getCategoriesForMetadata();
//   return categories.data.map((category: ICategory) => ({
//     slug: String(category.slug),
//   }));
// };

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const category = await getCategoryProductsForMetadata(slug);

  return {
    title: category?.data?.name,
    description: category?.data?.description,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...category?.data?.thumbnail ? [category.data.thumbnail] : []],
    },
  };
};


const page = async ({ params, searchParams }: { params: { slug: string }, searchParams: { page?: string } }) => {
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