import PopularArticles from './PopularArticles';
import { getBlogs } from '@/services/blog/blog.service';

const BlogWrapper = async () => {
      const blogs = await getBlogs("page=1&limit=3");
      return (
            <PopularArticles blogs={blogs?.data} />
      )
}

export default BlogWrapper
