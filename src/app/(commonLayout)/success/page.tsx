import Success from '@/components/module/Product/Success';
import type { Metadata } from 'next';
import Link from 'next/link';
import { GoHome } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';

export const metadata: Metadata = {
      title: 'hank You! T-power Fast EV Charging Solutions Await You',
      description: 'Thanks for visiting T-power! Check your SMS for our EV charger solutions: fast EV charging stations, home & electric car charger installation, plus reliable electric vehicle charging near me. Experience our EV charging solutions network. Join the green revolution today!',
}

export default function Page() {
      return (
            <div className="page">
                  <div className="container mx-auto text-[#1F1C1466] py-5 text-sm font-semibold flex items-center gap-1">
                        <span className="text-xl"><GoHome /></span>
                        <Link href={`/`} className="hover:text-primary">Home</Link>
                        <span><IoIosArrowForward /></span>
                        <span className="text-primary hidden md:block">Success</span>
                  </div>
                  <Success></Success>
            </div>
      );
}
