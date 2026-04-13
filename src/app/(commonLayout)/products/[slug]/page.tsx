
import ProductDetailLoader from "@/components/loaders/Products/ProductDetailLoader";
import ProductDetails from "@/components/pages/Products/ProductDetails/ProductDetails";
import ProductInformationWrapper from "@/components/pages/Products/ProductDetails/ProductInformationWrapper";
import RelatedProducts from "@/components/pages/Products/ProductDetails/RelatedProducts";
import { getProductBySlug } from "@/services/product/product.service";
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
  const slug = (await params).slug
  const productData = await getProductBySlug(slug)
  return (
    <div>
      <Suspense key={slug} fallback={<ProductDetailLoader></ProductDetailLoader>}>
        <ProductDetails product={productData?.data}></ProductDetails>
        <Suspense fallback={
          <div className="h-96 flex items-center justify-center"><span className="text-gray-500">Loading product information...</span></div>}
        >
          <ProductInformationWrapper product={productData?.data} />
        </Suspense>
        <Suspense fallback={
          <div className="h-96 flex items-center justify-center"><span className="text-gray-500">Loading related products...</span></div>}
        >
          <RelatedProducts productId={productData?.data?._id} CategoryId={productData?.data?.category?._id} />
        </Suspense>
      </Suspense>

    </div>
  )
}

export default page