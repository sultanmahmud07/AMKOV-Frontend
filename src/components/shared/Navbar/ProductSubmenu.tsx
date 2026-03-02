import Image from "next/image";
import Link from "next/link";

const demoProducts = [
      {
            name: "5K V-Log Camera",
            img: "/home/product/1.jpg",
            price: "$200",
      },
      {
            name: "Smart Watch Series 5",
            img: "/home/product/4.jpg",
            price: "$150",
      },
      {
            name: "Action Cam Waterproof",
            img: "/home/product/2.jpg",
            price: "$170",
      },
      {
            name: "Digital Zoom Camera",
            img: "/home/product/3.jpg",
            price: "$120",
      },
];

const ProductSubmenu = () => {
      return (
            <div className="grid grid-cols-5 gap-10">

                  {/* Links */}
                  <div>
                        <h4 className="font-bold text-[#023047] mb-4">
                              Shop
                        </h4>
                        <ul className="space-y-2">
                              <li><Link href="/products/new" className="text-sm text-gray-600 hover:text-[#3A9AFF]">New Arrivals</Link></li>
                              <li><Link href="/products/best" className="text-sm text-gray-600 hover:text-[#3A9AFF]">Best Sellers</Link></li>
                              <li><Link href="/products/trending" className="text-sm text-gray-600 hover:text-[#3A9AFF]">Trending</Link></li>
                        </ul>
                  </div>

                  <div>
                        <h4 className="font-bold text-[#023047] mb-4">
                              Business
                        </h4>
                        <ul className="space-y-2">
                              <li><Link href="/bulk" className="text-sm text-gray-600 hover:text-[#3A9AFF]">Bulk Orders</Link></li>
                              <li><Link href="/oem" className="text-sm text-gray-600 hover:text-[#3A9AFF]">OEM</Link></li>
                              <li><Link href="/rfq" className="text-sm text-gray-600 hover:text-[#3A9AFF]">Request Quote</Link></li>
                        </ul>
                  </div>

                  {/* Product Grid */}
                  <div className="col-span-3 grid grid-cols-4 gap-4">
                        {demoProducts.map((item, i) => (
                              <Link key={i} href="/products" className="group">
                                    <div className="border rounded-lg p-3 hover:shadow-md transition text-center">
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
      );
};

export default ProductSubmenu;