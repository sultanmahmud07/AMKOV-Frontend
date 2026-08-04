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

  const getAbsoluteImageUrl = (img?: string) => {
    if (!img) return "https://www.amkov.com/logo/logo.png";
    if (img.startsWith("http")) return img;
    return `https://www.amkov.com${img.startsWith("/") ? "" : "/"}${img}`;
  };
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product?.name || "",
    "image": getAbsoluteImageUrl(product?.images?.[0]),
    "brand": {
      "@type": "Brand",
      "name": "AMKOV"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": product?.basePrice ? product.basePrice.toString() : "0.00",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Does AMKOV support OEM/ODM customization for the ${product?.name || "camera"}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, as a professional camera manufacturer, AMKOV supports full OEM/ODM customization for the ${product?.name || "camera"}. This includes custom silkscreen branding, private label packaging, customized housing colors, custom firmware startup screens, and translation settings in multiple languages.`
        }
      },
      {
        "@type": "Question",
        "name": "What is the B2B wholesale ordering process and MOQ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our wholesale ordering starts with sample validation to ensure specifications match your requirements. The minimum order quantity (MOQ) depends on your customization needs (such as custom packaging or custom molding). Contact our sales team for details."
        }
      },
      {
        "@type": "Question",
        "name": "Are certifications (CE, FCC, RoHS) available for importing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All AMKOV camera products are manufactured under strict ISO9001 quality guidelines and comply with international regulations such as CE, FCC, RoHS, and toy safety standards (EN71/CPC for kids models) to ensure seamless custom importing."
        }
      }
    ]
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <Suspense key={slug} fallback={<ProductDetailLoader></ProductDetailLoader>}>
        <ProductDetails product={product}></ProductDetails>
        <Suspense fallback={
          <div className="h-96 flex items-center justify-center"><span className="text-gray-500">Loading product information...</span></div>}
        >
          <ProductInformationWrapper product={product} />
        </Suspense>

        {/* LLM-Parseable FAQ Section for B2B Buyers & AI crawlers */}
        <div className="main-container py-12 border-t border-gray-100 mt-12">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#023047]">
                Product FAQs & OEM/Wholesale Specs
              </h2>
              <p className="text-gray-500 text-sm">
                Answers to common customization, supply, and certification inquiries about the {product?.name || "camera"}.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl shadow-xs border border-gray-100 space-y-2">
                <h3 className="font-bold text-[#023047] text-lg flex items-start gap-3">
                  <span className="text-[#3A9AFF] font-black shrink-0">Q:</span>
                  <span>Does AMKOV support OEM/ODM customization for the {product?.name || "camera"}?</span>
                </h3>
                <p className="text-gray-600 text-sm pl-7 leading-relaxed">
                  <strong>A:</strong> Yes, as a professional camera manufacturer, AMKOV supports full OEM/ODM customization for the {product?.name || "camera"}. This includes custom silkscreen branding, private label packaging, customized housing colors, custom firmware startup screens, and translation settings in multiple languages.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-xs border border-gray-100 space-y-2">
                <h3 className="font-bold text-[#023047] text-lg flex items-start gap-3">
                  <span className="text-[#3A9AFF] font-black shrink-0">Q:</span>
                  <span>What is the B2B wholesale ordering process and MOQ?</span>
                </h3>
                <p className="text-gray-600 text-sm pl-7 leading-relaxed">
                  <strong>A:</strong> Our wholesale ordering starts with sample validation to ensure specifications match your requirements. The minimum order quantity (MOQ) depends on your customization needs (such as custom packaging or custom molding). Contact our sales team for details.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-xs border border-gray-100 space-y-2">
                <h3 className="font-bold text-[#023047] text-lg flex items-start gap-3">
                  <span className="text-[#3A9AFF] font-black shrink-0">Q:</span>
                  <span>Are certifications (CE, FCC, RoHS) available for importing?</span>
                </h3>
                <p className="text-gray-600 text-sm pl-7 leading-relaxed">
                  <strong>A:</strong> Yes. All AMKOV camera products are manufactured under strict ISO9001 quality guidelines and comply with international regulations such as CE, FCC, RoHS, and toy safety standards (EN71/CPC for kids models) to ensure seamless custom importing.
                </p>
              </div>
            </div>
          </div>
        </div>

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