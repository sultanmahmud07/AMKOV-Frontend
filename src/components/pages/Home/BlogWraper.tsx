import getAllBlogs from '@/lib/getAllBlogs';
import PopularArticles from './PopularArticles';

const BlogWrapper = async () => {
      const blogs = await getAllBlogs(3);
      return (
            <PopularArticles blogs={blogs?.data} />
      )
}

export default BlogWrapper
