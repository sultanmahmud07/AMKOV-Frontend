import Categories from "@/components/pages/Categories/Categories";

export default async function CategoriesPage({ searchParams }: { searchParams: { type?: string } }) {
  const { type } = await searchParams;
  console.log(type)
  return (
    <div>
      <Categories />
    </div>
  );
}
