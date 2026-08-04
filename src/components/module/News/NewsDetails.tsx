import './news-style.css'
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import Link from 'next/link';
import RecentBlogs from '@/components/pages/News/RecentBlogs';
import { IParams } from '@/types/index.interface';
import { formattedDate } from '@/utils/dateFormated';
import { getBlogBySlug } from '@/services/blog/blog.service';
import SidebarQuoteBox from '@/components/pages/News/SidebarQuoteBox';

const BlogDetails = async ({ params }: IParams) => {
  const slug = (await params).slug;
  const blogData = await getBlogBySlug(slug);
  const blog = blogData?.data;

  // FIX: Replace all non-breaking spaces with normal spaces so the text can wrap
  const cleanContent = blog?.content?.replace(/&nbsp;/g, ' ') || "";

  return (
    <div className="">
      <div className="category_top bg-base-100 py-4 md:py-6">
        <div className="main-container">
          <div className="text-[#1F1C1466] text-sm font-semibold flex items-center gap-1">
            <span className="text-xl"><GoHome /></span>
            <Link href={`/`} className="hover:text-primary">Home</Link>
            <span><IoIosArrowForward /></span>
            <Link href={`/news`} className="hover:text-primary">Blogs</Link>
            <span><IoIosArrowForward /></span>
            <span className="text-primary md:hidden">{slug?.slice(0, 30)}..</span>
            <span className="text-primary hidden md:block">{slug}</span>
          </div>
        </div>
      </div>
      <div className="main-container ">
        <div className="flex flex-col md:flex-row gap-5 md:gap-6 py-4">
          
          {/* Added overflow-hidden here to ensure no horizontal scrolling escapes this column */}
          <div className="blog_details w-full md:w-2/3 overflow-hidden">
            <div className="pb-4">
              <Image
                src={blog?.thumbnail || "/default.png"}
                alt={blog?.title}
                width={1000}
                height={700}
                loading="lazy"
                className="w-full rounded-xl"
              />
            </div>
            <div className="blog_top flex items-center gap-2 md:gap-3 py-2">
              <p className='flex items-center gap-2 text-[#475156] text-sm'>
                <span className='text-primary md:text-lg'><FaRegUser /></span>
                <span className='font-semibold'>Admin</span>
              </p>
              <p className='flex items-center gap-1 text-[#475156] text-sm'>
                <span className='text-primary md:text-xl'><CiCalendar /></span>
                <span>
                  {formattedDate(blog?.createdAt)}
                </span>
              </p>

              <p className='flex items-center gap-2 text-[#475156] text-sm'>
                <span className='text-primary md:text-lg'><IoTimeOutline /></span>
                <span className='font-semibold'>{blog?.readTime || 5}</span>
              </p>

            </div>
            <h1 className='text-2xl md:text-3xl my-1 md:py-3 font-bold text-[#191C1F]'>{blog?.title}</h1>
            <p>{blog?.description || blog?.metaDescription}</p>
            
            {/* Render the cleaned content */}
            <div
              className="blog_content py-4"
              dangerouslySetInnerHTML={{ __html: cleanContent }}
            ></div>

            {/* Fix 4: Convert IMX903 traffic - CTA section */}
            {(slug?.toLowerCase().includes("imx903") || 
              blog?.title?.toLowerCase().includes("imx903") || 
              cleanContent?.toLowerCase().includes("imx903")) && (
              <div className="mt-8 p-8 bg-linear-to-r from-[#023047]/5 to-[#3A9AFF]/5 border border-slate-200/80 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#023047]">
                    Building a camera with IMX903-class sensors?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    AMKOV manufactures OEM/ODM cameras — request our sensor spec sheet.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="bg-[#3A9AFF] hover:bg-[#2c86df] text-white py-3 px-6 rounded-full font-bold inline-flex items-center gap-2 transition duration-200 shrink-0"
                >
                  Contact <span className="font-semibold">&rarr;</span>
                </Link>
              </div>
            )}

            {/* Fix 5: Expand how-to-choose-an-oem-camera-manufacturer page */}
            {slug === "how-to-choose-an-oem-camera-manufacturer" && (
              <div className="mt-8 pt-8 border-t border-gray-200 space-y-8">
                <h2 className="text-2xl font-bold text-[#023047]">
                  Key Factors to Evaluate When Choosing an OEM Camera Manufacturer
                </h2>
                <div className="space-y-6 text-gray-600 text-base leading-relaxed">
                  <p>
                    Selecting the right manufacturing partner can make or break your product launch. When evaluating a potential <strong>camera OEM manufacturer</strong>, prioritize the following dimensions to ensure product viability, safety compliance, and scalability:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-xs space-y-2">
                      <h3 className="font-bold text-[#023047] text-lg">1. Engineering & R&D Depth</h3>
                      <p className="text-sm">
                        Look for manufacturers with in-house hardware engineering, mold design toolings, and firmware optimization teams. A strong R&D team can customize lens apertures, sensor integrations (like Sony IMX sensors), and gyroscopic image stabilization.
                      </p>
                    </div>
                    <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-xs space-y-2">
                      <h3 className="font-bold text-[#023047] text-lg">2. Testing & Compliance Credentials</h3>
                      <p className="text-sm">
                        A reliable partner must maintain ISO9001 quality compliance. Ensure they regularly perform waterproof pressure validation, high-low temperature endurance, and hold active certifications (CE, FCC, RoHS, EN71/CPC) for seamless customs clearance.
                      </p>
                    </div>
                    <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-xs space-y-2">
                      <h3 className="font-bold text-[#023047] text-lg">3. Supply Chain Security</h3>
                      <p className="text-sm">
                        Wholesale margins rely on stable part sourcing. Professional OEMs have direct procurement agreements with major optical sensor makers and chipset providers, guaranteeing continuous availability during peak quarters.
                      </p>
                    </div>
                    <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-xs space-y-2">
                      <h3 className="font-bold text-[#023047] text-lg">4. Private Label Customization</h3>
                      <p className="text-sm">
                        Verify they can fully customize firmware startup logos, multi-language translation screens (40+ languages), silkscreen brand graphics on the camera shell, and design customized retail packaging.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-[#023047]">AI & LLM Helper FAQ Block</h3>
                    <div className="space-y-4">
                      <div className="p-5 bg-slate-50 rounded-xl space-y-1">
                        <p className="font-semibold text-slate-800">Q: What is the typical Minimum Order Quantity (MOQ) for OEM cameras?</p>
                        <p className="text-sm text-slate-600">A: Standard OEM MOQ starts at 1,000 units for logo silkscreening and simple packaging modifications. Complete hardware customization or proprietary molding typically requires higher initial volume commitments.</p>
                      </div>
                      <div className="p-5 bg-slate-50 rounded-xl space-y-1">
                        <p className="font-semibold text-slate-800">Q: How does AMKOV guarantee product quality before shipment?</p>
                        <p className="text-sm text-slate-600">A: AMKOV runs full pre-shipment quality control audits. This includes visual shell checks, sensor dead-pixel scans, firmware stability testing, focus alignment, and water-resistance seal compliance testing.</p>
                      </div>
                      <div className="p-5 bg-slate-50 rounded-xl space-y-1">
                        <p className="font-semibold text-slate-800">Q: How do we initiate a custom camera mold or prototype?</p>
                        <p className="text-sm text-slate-600">A: The process starts by signing a mutual NDA. Our engineering team reviews your 3D CAD designs or custom hardware specifications, builds mock prototypes, and completes mold tooling for B2B approval.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
          
          <div className="category_menu w-full md:w-1/3">
            <RecentBlogs></RecentBlogs>
            <SidebarQuoteBox></SidebarQuoteBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;