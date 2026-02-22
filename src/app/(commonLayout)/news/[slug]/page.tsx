
import BlogDetails from "@/components/module/News/NewsDetails";
import getAllBlogs from "@/lib/getAllBlogs";
import getBlogDetails from "@/lib/getBlogDetails";
import { IParams } from "@/types/index.interface";
import { INews } from "@/types/news.interface";

export const generateStaticParams = async () => {
  const blogs = await getAllBlogs(20);
  return blogs.data.data.map((blog: INews) => ({
    slug: String(blog.slug),
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const blog = await getBlogDetails(slug);

  return {
    title: blog?.data.metaTitle,
    description: blog?.data?.metaDescription,
  };
};

const page = async ({ params }: IParams) => {
      return (
            <div className="pt-20 md:pt-32">
                  {/* <Suspense fallback={<BlogDetailsLoader></BlogDetailsLoader>}>
                <BlogDetails slug={params?.slug}></BlogDetails>
            </Suspense> */}
                  <BlogDetails params={params}></BlogDetails>
            </div>
      )
}

export default page;