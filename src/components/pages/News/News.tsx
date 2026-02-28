
import NewsCard from "@/components/module/News/NewsCard"
import RecentBlogs from "./RecentBlogs"
import { INews } from "@/types/news.interface"

const News = async ({ blogs }: { blogs: INews[] }) => {
      // const contactInfo = await getContactInfo()
      // const contact = contactInfo.data;
      return (
            <section className="py-5 md:py-8">
                  <div className="main-container">
                        <div className="layout flex flex-col md:flex-row gap-5">
                              <div className="w-full md:w-3/4 ">
                                    <h2 className="main-title text-2xl md:text-4xl text-black py-4 md:py-5 font-bold">Our Blogs</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 md:gap-y-10 py-5 ">
                                          {
                                                blogs.map((news, i) => {
                                                      return (
                                                            <NewsCard key={i} news={news}></NewsCard>


                                                      )
                                                })
                                          }
                                    </div>
                              </div>
                              <div className="w-full md:w-1/4 mt-5 md:mt-8">
                                    <RecentBlogs></RecentBlogs>
                                    <div className="contact-card my-5 md:mt-8 border border-[#E2E2E2] rounded md:rounded-lg">
                                          <h4 className="p-2 text-xl md:text-2xl text-primary text-center border-b border-primary font-semibold rounded-t md:rounded-t-lg md:py-3">Free Quote</h4>
                                          {/* <div className="flex flex-col gap-2 md:gap-4 p-4  md:pb-6">
                                                <p>Your Project, Our Expertise: Every project is different — and we’re here to make sure you get the right solution from the start. At T-Power, we take the time to understand your needs before offering a quote that truly fits your goals.</p>
                                                <p> Simply share a few details about your project, and we’ll provide a free, no-obligation estimate that’s clear, accurate, and tailored to you. Expect professional guidance, transparent pricing, and practical solutions that deliver long-term performance and value.</p>
                                                <p> Let’s take the first step toward powering your next success.</p>
                                                <p className="flex md:pt-4 items-center font-semibold gap-3 text-[#000000]">
                                                      <span className="text-[#1BAE70]">
                                                            <PhoneCallIcon />
                                                      </span>
                                                      <a href={`tel:${contact.phone}`} className="text-sm hover:text-primary">
                                                            {contact.phone}
                                                      </a>
                                                </p>

                                                <p className="flex items-center font-semibold gap-3 text-[#000000]">
                                                      <span className=" text-[#1BAE70]">
                                                            <Mail />
                                                      </span>
                                                      <a href={`mailto:${contact.email}`} className="lowercase text-sm hover:text-primary">
                                                            {contact.email}
                                                      </a>
                                                </p>
                                                <div className="l">
                                                      <SendInquiryButton></SendInquiryButton>
                                                </div>
                                          </div> */}
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default News
