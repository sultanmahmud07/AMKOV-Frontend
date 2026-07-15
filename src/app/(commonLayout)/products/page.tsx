import Products from '@/components/pages/Products/Products';
import type { Metadata } from 'next'

export const metadata: Metadata = {
      title: 'Digital Cameras for Wholesale, OEM and Global Distribution',
      description: "Explore AMKOV wholesale digital cameras, including vlogging, waterproof, optical zoom, video, instant-print and kids cameras for bulk and OEM orders. Partner with a leading manufacturer for custom branding.",
}

export default async function Page({
      searchParams,
}: {
      searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
      const filters = (await searchParams)

      return (
            <Products
                  searchParams={filters}
            ></Products>
      );
}
