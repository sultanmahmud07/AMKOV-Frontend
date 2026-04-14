import Products from '@/components/pages/Products/Products';
import type { Metadata } from 'next'

export const metadata: Metadata = {
      title: 'Amkov Digital Cameras – Vlog, Waterproof & Zoom Cameras',
      description: "Amkov offers digital cameras: high‑quality Vlog cameras, 4K zoom, waterproof, instant print & kids cameras for photography & video. Shop affordable options.",
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
