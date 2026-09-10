import NewsCard from "@/components/module/News/NewsCard";
import RecentBlogs from "./RecentBlogs";
import { INews } from "@/types/news.interface";
import SidebarQuoteBox from "./SidebarQuoteBox";
import NewsPagination from "./NewsPagination";

interface NewsProps {
  blogs: INews[];
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
}

const News = async ({ blogs, meta }: NewsProps) => {
  return (
    <section className="py-5 md:py-8">
      <div className="main-container">
        <div className="layout flex flex-col md:flex-row gap-5">
          {/* Main Blogs Area */}
          <div className="w-full md:w-3/4">
            <h2 className="main-title text-2xl md:text-4xl text-black py-4 md:py-5 font-bold">
              Our Blogs
            </h2>

            {blogs && blogs.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 md:gap-y-10 py-5">
                  {blogs.map((news, i) => (
                    <NewsCard key={news._id || i} news={news} />
                  ))}
                </div>

                {/* Blog Pagination */}
                <NewsPagination
                  totalPages={meta?.totalPage}
                  currentPage={meta?.page}
                  total={meta?.total}
                />
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <p className="text-lg text-gray-600 font-medium">
                  No blogs found for this page.
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Please check back later or return to the first page.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-1/4 mt-5 md:mt-8">
            <RecentBlogs />
            <SidebarQuoteBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
