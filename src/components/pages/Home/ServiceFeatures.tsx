import Link from "next/link";
import {
  Store,
  BookOpen,
  Headset,
  FolderDown,
  ChevronRight
} from "lucide-react";

// Data structure updated with unique neutral/soft colors for each card
const serviceData = [
  {
    id: "where-to-buy",
    title: "Where to buy",
    description: "Find authorized Amkov dealers and retail partners near you.",
    icon: Store,
    href: "/where-to-buy",
    // Cool Gray/Slate
    bgClass: "bg-slate-100",
    iconClass: "text-slate-600",
  },
  {
    id: "use-help",
    title: "Use Help",
    description: "Access user manuals, setup guides, and troubleshooting FAQs.",
    icon: BookOpen,
    href: "/help",
    // Warm Sand/Amber neutral
    bgClass: "bg-amber-50",
    iconClass: "text-amber-600",
  },
  {
    id: "service-support",
    title: "Service Support",
    description: "Get technical assistance and warranty support from our experts.",
    icon: Headset,
    href: "/support",
    // Soft Sage/Teal neutral
    bgClass: "bg-teal-50",
    iconClass: "text-teal-600",
  },
  {
    id: "download",
    title: "Download",
    description: "Get the latest firmware updates, software, and drivers.",
    icon: FolderDown,
    href: "/download",
    // Muted Indigo/Violet neutral
    bgClass: "bg-indigo-50",
    iconClass: "text-indigo-600",
  },
];

const ServiceFeatures = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="main-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {serviceData.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.href}
                className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-50 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(58,154,255,0.08)] hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Dynamically applied background color */}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${item.bgClass} group-hover:bg-[#3A9AFF]`}>
                  {/* Dynamically applied icon color */}
                  <Icon
                    size={32}
                    strokeWidth={1.5}
                    className={`${item.iconClass} group-hover:text-white transition-colors duration-300`}
                  />
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-[#023047] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mb-6 px-2 line-clamp-2">
                  {item.description}
                </p>

                {/* Animated Learn More Link */}
                <div className="mt-auto flex items-center text-sm font-bold text-gray-400 group-hover:text-[#3A9AFF] transition-colors duration-300">
                  <span>Learn More</span>
                  <ChevronRight
                    size={16}
                    className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;