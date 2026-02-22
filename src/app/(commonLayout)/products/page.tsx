import Products from '@/components/pages/Products/Products';
import type { Metadata } from 'next'

export const metadata: Metadata = {
      title: 'Best EV Chargers | Top Fast Picks Compared & Reviewed',
      description: "Explore T-Power Pty Ltd.’s full range of EV chargers—reliable, fast, and energy-efficient solutions for every need. Shop our best-selling electric vehicle chargers today and power up your drive with the latest in EV charging technology!",
}

export default async function Page({
      searchParams,
}: {
      searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
      const filters = (await searchParams)
   
      return (
            <div className="page">
                  <Products
                        searchParams={filters}
                  ></Products>
            </div>
      );
}
