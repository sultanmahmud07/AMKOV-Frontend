
import { INews } from '@/types/news.interface'
import { formattedDate } from '@/utils/dateFormated'
import { CalendarDays, MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewsCard = ({ news }: { news: INews }) => {

      return (
            <div
                  className="h-entry group flex flex-col gap-2 md:gap-3 news-card  bg-white overflow-hidden"
            >
                  <div className="news-image overflow-hidden rounded md:rounded-xl ">
                        <Image
                              src={news.thambnail}
                              alt={news.title}
                              width={400}
                              height={400}
                              className="u-photo  w-full aspect-video object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />
                  </div>
                  <h3 className="p-name capitalize md:pt-2 text-md md:text-xl text-black font-semibold">
                        {news.title}
                  </h3>
                  <p className="p-summary text-sm md:text-base">{news.metaDescription.slice(0, 140)}</p>
                  <p className='flex items-center gap-1 text-sm'><CalendarDays />
                        <time dateTime={new Date(news.createdAt).toISOString()}>
                              {formattedDate(news.createdAt)}
                        </time>

                  </p>
                  <Link className='u-url cursor-pointer' href={`/news/${news.slug}`}>
                        <p className='flex items-center gap-2 md:gap-4 text-sm text-primary font-semibold'>
                              Read More
                              <span><MoveRight /></span>
                        </p>
                  </Link>
            </div>
      )
}

export default NewsCard
