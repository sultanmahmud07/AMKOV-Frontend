import CategoryFilter from './CategoryFilter';
import getAllCategories from '@/lib/getAllCategories';

const CategoryFilterWrapper = async () => {
  // Fetch category data
  const categoriesData = await getAllCategories(10);

  return (
    <aside className="w-full">
      <CategoryFilter categories={categoriesData?.data || []} />
    </aside>
  );
}

export default CategoryFilterWrapper;