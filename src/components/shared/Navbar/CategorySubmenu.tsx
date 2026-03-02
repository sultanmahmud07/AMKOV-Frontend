import Image from "next/image";
import Link from "next/link";

const categoryGroups = [
  {
    title: "Camera Types",
    items: [
      "Vlog Cameras",
      "Action Cameras",
      "Kids Cameras",
      "Instant Cameras",
      "Video Cameras",
    ],
  },
  {
    title: "Resolution",
    items: [
      "4K Cameras",
      "5K Cameras",
      "HD Cameras",
      "Optical Zoom",
      "Digital Zoom",
    ],
  },
  {
    title: "Usage",
    items: [
      "Travel",
      "Sports",
      "YouTube",
      "Photography",
      "Underwater",
    ],
  },
];

const featured = [
  {
    name: "5K V-Log Camera",
    price: "$200",
    img: "/home/product/1.jpg",
  },
  {
    name: "Waterproof Action Cam",
    price: "$150",
    img: "/home/product/2.jpg",
  },
];

const CategorySubmenu = () => {
  return (
    <div className="grid grid-cols-5 gap-10">

      {/* Category Columns */}
      {categoryGroups.map((group, i) => (
        <div key={i}>
          <h4 className="font-bold text-[#023047] mb-4">
            {group.title}
          </h4>
          <ul className="space-y-2">
            {group.items.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={`/categories/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-sm text-gray-600 hover:text-[#3A9AFF]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Featured Products */}
      <div className="col-span-2 border-l pl-8">
        <h4 className="font-bold text-[#023047] mb-4">
          Featured Products
        </h4>

        <div className="grid grid-cols-2 gap-4">
          {featured.map((item, i) => (
            <Link key={i} href="/products" className="group">
              <div className="border rounded-lg p-3 hover:shadow-md transition">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="h-24 mx-auto object-contain"
                />
                <p className="text-sm mt-2 text-[#023047] group-hover:text-[#3A9AFF]">
                  {item.name}
                </p>
                <span className="text-xs text-gray-500">
                  {item.price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CategorySubmenu;