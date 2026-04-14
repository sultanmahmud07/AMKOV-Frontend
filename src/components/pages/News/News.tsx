
import NewsCard from "@/components/module/News/NewsCard"
import RecentBlogs from "./RecentBlogs"
import { INews } from "@/types/news.interface"
import SidebarQuoteBox from "./SidebarQuoteBox"

const News = async ({ blogs }: { blogs: INews[] }) => {
      return (
            <section className="py-5 md:py-8">
                  <div className="main-container">
                        <div className="layout flex flex-col md:flex-row gap-5">
                              <div className="w-full md:w-3/4 ">
                                    <h2 className="main-title text-2xl md:text-4xl text-black py-4 md:py-5 font-bold">Our Blogs</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 md:gap-y-10 py-5 ">
                                          {
                                                blogs?.map((news, i) => {
                                                      return (
                                                            <NewsCard key={i} news={news}></NewsCard>


                                                      )
                                                })
                                          }
                                    </div>
                              </div>
                              <div className="w-full md:w-1/4 mt-5 md:mt-8">
                                    <RecentBlogs></RecentBlogs>
                                    <SidebarQuoteBox></SidebarQuoteBox>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default News
