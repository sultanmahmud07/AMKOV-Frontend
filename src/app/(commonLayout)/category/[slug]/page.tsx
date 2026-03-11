
import ProductDetailLoader from "@/components/loaders/Products/ProductDetailLoader";
import ProductsLoader from "@/components/loaders/Products/ProductsLoader";
import CategoryMenubar from "@/components/pages/Products/CategoryMenubar";
import ProductBanner from "@/components/pages/Products/ProductBanner";
import ProductDetails from "@/components/pages/Products/ProductDetails/ProductDetails";
import ProductInfoTabs from "@/components/pages/Products/ProductDetails/ProductInfoTabs";
import ProductReviewSection from "@/components/pages/Products/ProductDetails/ProductReviewSection";
import RelatedProducts from "@/components/pages/Products/ProductDetails/RelatedProducts";
import ProductsList from "@/components/pages/Products/ProductsList/ProductsList";
import { IParams } from "@/types/index.interface";
import { Suspense } from "react";

// export const generateStaticParams = async () => {
//   const projects = await getAllProjects({limit:20});
//   return projects.data.map((project: IProject) => ({
//     slug: String(project.slug),
//   }));
// };

// export const generateMetadata = async ({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) => {
//   const { slug } = await params;
//   const project = await getProductDetails(slug);

//   return {
//     title: project?.meta?.title,
//     description: project?.meta?.description, 
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...project.images],
//     },
//   };
// };


const page = async ({ params }: IParams) => {
  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // await delay(5 * 60 * 1000);
  const slug = (await params).slug
  const searchParams = { slug }
  return (
    <div>
      <ProductBanner />
      <CategoryMenubar />
      <Suspense fallback={<ProductsLoader />}>
        <ProductsList
          searchParams={searchParams}
        ></ProductsList>
      </Suspense>

    </div>
  )
}

export default page