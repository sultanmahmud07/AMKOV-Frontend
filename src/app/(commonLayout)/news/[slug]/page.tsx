
import BlogDetails from "@/components/module/News/NewsDetails";
import { getBlogBySlug } from "@/services/blog/blog.service";
import { IParams } from "@/types/index.interface";

// export const generateStaticParams = async () => {
//   const blogs = await getAllBlogs(20);
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
  const blog = await getBlogBySlug(slug);

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