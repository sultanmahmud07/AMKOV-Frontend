import ProductDetailLoader from "@/components/loaders/Products/ProductDetailLoader";
import ProductDetails from "@/components/pages/Products/ProductDetails/ProductDetails";
import ProductInformationWrapper from "@/components/pages/Products/ProductDetails/ProductInformationWrapper";
import RelatedProducts from "@/components/pages/Products/ProductDetails/RelatedProducts";
import getProductDetailsForMetadata from "@/lib/getProductDetailsForMetadata";
import { IParams } from "@/types/index.interface";
import { Suspense } from "react";

// export const generateStaticParams = async () => {
//   const projects = await getProductsForMetadata(20);
//   return projects.data.map((project: IProduct) => ({
//     slug: String(project.slug),
//   }));
// };

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = await getProductDetailsForMetadata(slug);

  return {
    title: project?.data?.metaTitle,
    description: project?.data?.metaDescription,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...project?.data?.images],
    },
    alternates: {
      canonical: `/products/${slug}`,
    },
  };
};


const page = async ({ params }: IParams) => {
  const { slug } = await params;
  const productData = await getProductDetailsForMetadata(slug);
  const product = productData?.data;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product?.name || "",
    "image": product?.images?.[0] || "/default.png",
    "brand": {
      "@type": "Brand",
      "name": "AMKOV"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": product?.basePrice || 0,
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <Suspense key={slug} fallback={<ProductDetailLoader></ProductDetailLoader>}>
        <ProductDetails product={product}></ProductDetails>
        <Suspense fallback={
          <div className="h-96 flex items-center justify-center"><span className="text-gray-500">Loading product information...</span></div>}
        >
          <ProductInformationWrapper product={product} />
        </Suspense>
        <Suspense fallback={
          <div className="h-96 flex items-center justify-center"><span className="text-gray-500">Loading related products...</span></div>}
        >
          <RelatedProducts productId={product?._id} CategoryId={product?.categories?.[0]?._id} />
        </Suspense>
      </Suspense>

    </div>
  )
}

export default page