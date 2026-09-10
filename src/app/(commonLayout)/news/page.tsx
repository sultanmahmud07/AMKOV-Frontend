import News from "@/components/pages/News/News";
import { getBlogs } from "@/services/blog/blog.service";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AMKOV Latest News – Digital Camera Updates & Innovations",
  description:
    "Explore AMKOV camera buying guides, product comparisons, wholesale sourcing advice, OEM insights, reviews and digital imaging industry updates. Stay informed with our latest camera news and business resources.",
  alternates: {
    canonical: "/news",
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const page = typeof resolvedSearchParams?.page === "string" ? resolvedSearchParams.page : "1";
  const limit = typeof resolvedSearchParams?.limit === "string" ? resolvedSearchParams.limit : "12";

  const blogs = await getBlogs(`page=${page}&limit=${limit}`);

  return (
    <News
      blogs={blogs?.data || []}
      meta={blogs?.meta}
    />
  );
}
