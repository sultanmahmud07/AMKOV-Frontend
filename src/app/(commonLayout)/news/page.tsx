
import News from '@/components/pages/News/News';
import { getBlogs } from '@/services/blog/blog.service';
import type { Metadata } from 'next'

export const metadata: Metadata = {
      title: 'AMKOV Latest News – Digital Camera Updates & Innovations',
      description: 'Explore AMKOV camera buying guides, product comparisons, wholesale sourcing advice, OEM insights, reviews and digital imaging industry updates.',
}

export default async function Page() {

      const blogs = await getBlogs("page=1&limit=100");
      return (
            <News blogs={blogs?.data}></News>
      );
}
