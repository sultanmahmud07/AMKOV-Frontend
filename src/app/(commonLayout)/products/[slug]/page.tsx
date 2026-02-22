
import ProductDetailLoader from "@/components/Loaders/Products/ProductDetailLoader";
import ProductDetails from "@/components/pages/Products/ProductDetails/ProductDetails";
import ProductInfoTabs from "@/components/pages/Products/ProductDetails/ProductInfoTabs";
import ProductReviewSection from "@/components/pages/Products/ProductDetails/ProductReviewSection";
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
  return (
    <div>
      <Suspense key={slug} fallback={<ProductDetailLoader></ProductDetailLoader>}>
        <ProductDetails slug={slug}></ProductDetails>
        <ProductInfoTabs></ProductInfoTabs>
        <ProductReviewSection></ProductReviewSection>
      </Suspense>

    </div>
  )
}

export default page