import type { MetadataRoute } from "next";

const SITE_URL = (process.env.NEXT_PUBLIC_BASE_URL || "https://amkov.com").replace(/\/+$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/",
        "/dashboard/",
        "/cart",
        "/checkout",
        "/wishlist",
        "/profile",
        "/my-profile",
        "/change-password",
        "/login",
        "/register",
        "/forget-password",
        "/reset-password",
        "/success",
      ],
    },
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/products/sitemap.xml`,
      `${SITE_URL}/category/sitemap.xml`,
      `${SITE_URL}/news/sitemap.xml`,
    ],
  };
}