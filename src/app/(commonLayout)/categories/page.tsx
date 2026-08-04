import Categories from "@/components/pages/Categories/Categories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AMKOV Camera Categories | OEM & ODM Camera Manufacturer",
  description: "Browse AMKOV digital camera categories, including vlogging, waterproof, optical zoom, video, instant-print and kids cameras.",
  alternates: {
    canonical: '/categories',
  },
};

export default async function CategoriesPage({ searchParams }: { searchParams: { type?: string } }) {
  const { type } = await searchParams;
  console.log(type)
  return (
    <div>
      <Categories />
    </div>
  );
}
