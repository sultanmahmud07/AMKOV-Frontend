import getAllBlogs from '@/lib/getAllBlogs';
import { INews } from '@/types';
import { formattedDate } from '@/utils/dateFormated';
import { CalendarDays } from 'lucide-react'
import Link from 'next/link';

const RecentBlogs = async () => {
 const blogs = await getAllBlogs(10);
    
      return (
            <div className='border-[1px] border-[#C7C7C7] rounded-md'>
                  <h3 className='text-xl font-bold p-3 border-b border-primary text-primary'>Top News</h3>
                  <div className="flex flex-col gap-3 md:gap-5 p-3 md:p-5">
                        {
                              blogs.data.data.map((blog:INews) => {
                                    return (
                                        <Link href={`/news/${blog.slug}`} key={blog._id} >
                                          <div className="blog-card p-3 rounded shadow">
                                                <h3 className="capitalize text-baser md:text-md text-black font-medium">
                                                      {blog.title}
                                                </h3>
                                                <p className='pt-2 flex items-center justify-end gap-1 text-xs'><span className='text-primary text-xs'><CalendarDays size={15}/></span>  {formattedDate(blog.createdAt)}</p>
                                          </div></Link>
                                    )
                              })
                        }
                  </div>
            </div>
      )
}

export default RecentBlogs
