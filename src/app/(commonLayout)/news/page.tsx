
import News from '@/components/pages/News/News';
import { getBlogs } from '@/services/blog/blog.service';
import type { Metadata } from 'next'

export const metadata: Metadata = {
      title: 'AMKOV Latest News – Digital Camera Updates & Innovations',
      description: 'Stay updated with AMKOV’s latest news on digital cameras, innovations, product updates, and photography trends. Explore exciting developments and announcements.',
}

export default async function Page() {

      const blogs = await getBlogs("page=1&limit=100");
      return (
            <News blogs={blogs?.data}></News>
      );
}
