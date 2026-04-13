
import News from '@/components/pages/News/News';
import { getBlogs } from '@/services/blog/blog.service';
import type { Metadata } from 'next'

export const metadata: Metadata = {
      title: 'T-Power EV Charger Blog | Innovating Charging & Renewable Energy',
      description: 'Stay ahead with the latest in EV charger technology, installation tips, best charging stations, level 2 charging, DC fast charging, home charging solutions, cost guides, and maintenance advice. Discover expert insights to power your electric vehicle journey today!',
}

export default async function Page() {

      const blogs = await getBlogs("page=1&limit=100");
      return (
            <News blogs={blogs?.data}></News>
      );
}
