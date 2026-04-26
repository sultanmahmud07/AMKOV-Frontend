
import BlogDetails from "@/components/module/News/NewsDetails";
import getNewsDetailsForMetadata from "@/lib/getNewsDetailsForMetadata";
import { IParams } from "@/types/index.interface";

// export const generateStaticParams = async () => {
//   const blogs = await getNewsForMetadata();
//   return blogs?.data?.map((blog: INews) => ({
//     slug: String(blog.slug),
//   }));
// };

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const blog = await getNewsDetailsForMetadata(slug);

  return {
    title: blog?.data?.metaTitle,
    description: blog?.data?.metaDescription,
  };
};

const page = async ({ params }: IParams) => {
  return (
    <BlogDetails params={params}></BlogDetails>
  )
}

export default page;