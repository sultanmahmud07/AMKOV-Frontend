import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Data matching the B2B Cooperation Mode section
const cooperationData = [
  {
    id: "oem",
    title: "OEM Solution",
    description: "Our OEM service is suitable for enterprises that wish to provide high-quality cameras under their own brand. With our advanced technology and facilities, we can tailor products that meet market demands for you. Our R&D team will work closely with you to design the ideal product.",
    href: "/solutions/oem",
    image: "/home/cooperation/1.jpg", 
  },
  {
    id: "odm",
    title: "ODM Solution",
    description: "From conceptualization to mass production, our ODM solutions turn your vision into reality. Leverage our experienced R&D engineers to create unique, market-ready digital imaging products from scratch. We handle the entire design, prototyping, testing, and manufacturing lifecycle.",
    href: "/solutions/odm",
    image: "/home/cooperation/2.jpg", 
  },
  {
    id: "distribution",
    title: "AMKOV Distribution",
    description: "Partner with Amkov as an authorized global distributor. We offer highly competitive wholesale margins, comprehensive marketing materials, and dedicated account support. Join our growing network and bring our innovative digital imaging solutions to retail markets worldwide.",
    href: "/distribution",
    image: "/home/cooperation/3.jpg", 
  },
];

export default function CooperationMode() {
  return (
    <section className="py-14 lg:py-20 bg-[#F8FAFC]">
      <div className="container mx-auto">
        
        {/* Modern Left-Aligned Header */}
        <div className="max-w-2xl mb-6 lg:mb-10">
          <div className="inline-flex items-center gap-2 px-3 rounded-full bg-[#3A9AFF]/10 text-[#3A9AFF] text-sm font-bold tracking-wider uppercase mb-2">
             <span className="w-2 h-2 rounded-full bg-[#3A9AFF] animate-pulse"></span>
             Partnership
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#023047] tracking-tight mb-4">
            Cooperation Mode
          </h2>
          <p className="text-lg text-gray-500">
            Tailored manufacturing and distribution solutions designed to scale your imaging business globally.
          </p>
        </div>

        {/* Expanding Flex-Cards Container */}
        {/* Mobile: Stacks vertically. Desktop: Sits side-by-side horizontally */}
        <div className="flex flex-col lg:flex-row gap-4 h-[800px] lg:h-[600px] w-full">
          {cooperationData.map((item, index) => (
            <Link 
              key={item.id} 
              href={item.href}
              // The Magic: flex-1 by default, expanding to flex-[2.5] on hover
              className="group relative flex-1 hover:flex-[2.5] transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] overflow-hidden rounded-3xl bg-[#023047] shadow-sm hover:shadow-2xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-linear-to-t from-[#023047] via-[#023047]/60 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-70" />

              {/* Content Positioned at Bottom */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                
                {/* Number & Title Row */}
                <div className="flex items-center gap-4 mb-2 lg:mb-4">
                  {/* Sequence Number Circle */}
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center text-white font-bold shrink-0 transition-colors duration-500 group-hover:bg-[#3A9AFF] group-hover:border-[#3A9AFF]">
                    0{index + 1}
                  </div>
                  
                  {/* Title (Kept on one line to prevent messy wrapping during animation) */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white whitespace-nowrap drop-shadow-md">
                    {item.title}
                  </h3>
                </div>

                {/* Expanding Description Area */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                  <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150 flex flex-col justify-end">
                    
                    <p className="text-white/90 text-sm lg:text-base leading-relaxed mb-6 max-w-xl pl-14 lg:pl-16">
                      {item.description}
                    </p>
                    
                    {/* Animated Link */}
                    <div className="pl-14 lg:pl-16 flex items-center gap-2 text-[#3A9AFF] font-bold text-sm uppercase tracking-wider">
                      Learn More 
                      <ArrowRight size={18} className="-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-300" />
                    </div>
                    
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}