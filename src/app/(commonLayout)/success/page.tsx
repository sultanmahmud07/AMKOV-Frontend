import Success from '@/components/module/Product/Success';
import type { Metadata } from 'next';
import Link from 'next/link';
import { GoHome } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';

export const metadata: Metadata = {
      title: 'AMKOV SMS Success – Confirmations & Digital Camera Alerts',
      description: 'Check the success of your AMKOV SMS notifications. Receive updates, confirmations, and alerts related to your digital camera orders and services.',
}

export default function Page() {
      return (
            <div className="page">
                  <div className="main-container text-[#1F1C1466] py-5 text-sm font-semibold flex items-center gap-1">
                        <span className="text-xl"><GoHome /></span>
                        <Link href={`/`} className="hover:text-primary">Home</Link>
                        <span><IoIosArrowForward /></span>
                        <span className="text-primary hidden md:block">Success</span>
                  </div>
                  <Success></Success>
            </div>
      );
}
