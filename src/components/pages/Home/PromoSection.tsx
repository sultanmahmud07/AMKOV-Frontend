

import Image from "next/image";
import Link from "next/link";

// 1. Define the data structure for the promo blocks
// Adjust the titles and image paths to match your actual Amkov content.
const promoData = [
  {
    id: 1,
    tagline: "BEST COLLECTION",
    title: "Explore The World \nWith 5K V-Log Cameras",
    image: "/home/sub-banner-1.jpg", // Replace with your actual image path
    link: "/shop/v-log-cameras",
    btnText: "SHOP NOW",
  },
  {
    id: 2,
    tagline: "TODAY'S BEST DEAL",
    title: "Underwater Mastery \n48MP Waterproof Gear",
    image: "/home/sub-banner-2.jpg", // Replace with your actual image path
    link: "/shop/waterproof-cameras",
    btnText: "SHOP NOW",
  },
];

// 2. The Arrow Function Component
const PromoSection = () => {
  return (
    <section className="main-container  py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {promoData.map((item) => (
          // Main Container for each block
          <div
            key={item.id}
            className="relative h-[250px] lg:h-[310px] w-full rounded-xl overflow-hidden group"
          >
            {/* ========================= */}
            {/* Background Image Layer    */}
            {/* ========================= */}
            {/* We use fill to make it behave like a background image.
                Added a subtle zoom effect on hover. */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={item.image}
                alt={item.title.replace("\n", " ")}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Optional Overlay: If your images are too busy or too dark 
                  for the dark text, uncomment the line below to add a 
                  subtle light gradient fade to improve readability.
              */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent pointer-events-none"></div> */}
            </div>

            {/* ========================= */}
            {/* Text Content Layer        */}
            {/* ========================= */}
            {/* z-10 ensures text sits on top of the image */}
            <div className="relative z-10 h-full p-8 lg:p-12 flex flex-col justify-center items-start">
              <p className="text-xs font-bold tracking-wider text-[#023047] uppercase mb-3">
                {item.tagline}
              </p>
              {/* whitespace-pre-line allows the \n in the data to create line breaks */}
              <h3 className="text-2xl lg:text-3xl font-extrabold text-[#023047] mb-6 leading-tight whitespace-pre-line">
                {item.title}
              </h3>

              {/* Styled Link matching the reference image */}
              <Link
                href={item.link}
                className="inline-block text-sm font-bold text-[#023047] border-b-2 border-[#023047]/30 pb-1 hover:text-[#3A9AFF] hover:border-[#3A9AFF] transition-all duration-300"
              >
                {item.btnText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoSection;