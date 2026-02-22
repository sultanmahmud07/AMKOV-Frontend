import { Mail, MapPin, PhoneCallIcon } from 'lucide-react';
import CategoryFilter from './CategoryFilter'
import getAllCategories from '@/lib/getAllCategories';
import getContactInfo from '@/lib/getContactInfo';

const CategoryFilterWrapper = async () => {
  const categoriesData = await getAllCategories(10);
  const contactInfo = await getContactInfo()
  // console.log(categoriesData)
  return (
    <div>

      <h2 className="product-title mb-3 md:mb-5 text-2xl md:text-3xl text-black py-2 font-bold">EV Charger</h2>
      <CategoryFilter categories={categoriesData.data}></CategoryFilter>
      <div className="contact-card mt-5 mb-2 border-[1px] border-[#E2E2E2] rounded md:rounded-lg">
        <h4 className="p-2 bg-primary text-center text-white font-semibold rounded-t md:rounded-t-lg">Contact Here</h4>
         <div className="flex flex-col gap-2 md:gap-4 p-4 md:pb-6">
      {/* Phone */}
      <a
        href={`tel:${contactInfo.data.phone}`}
        className="flex items-center font-medium gap-3 text-[#000000] hover:text-[#1BAE70] transition-colors"
      >
        <span className="text-[#1BAE70]">
          <PhoneCallIcon size={20} />
        </span>
        <span className="text-base">{contactInfo.data.phone}</span>
      </a>

      {/* Email */}
      <a
        href={`mailto:${contactInfo.data.email}`}
        className="flex items-center font-medium gap-3 text-[#000000] hover:text-[#1BAE70] transition-colors"
      >
        <span className="text-[#1BAE70]">
          <Mail size={20} />
        </span>
        <span className="lowercase text-base">{contactInfo.data.email}</span>
      </a>

      {/* Address */}
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.data.address || "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center font-medium gap-3 text-[#000000] hover:text-[#1BAE70] transition-colors"
      >
        <span className="text-[#1BAE70]">
          <MapPin size={20} />
        </span>
        <span className="text-base">{contactInfo.data.address}</span>
      </a>
    </div>

      </div>
    </div>
  )
}

export default CategoryFilterWrapper