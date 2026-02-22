"use client";

import  { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// Custom hook for window size
function useWindowSize() {
      const [size, setSize] = useState({ width: 0, height: 0 });

      useEffect(() => {
            function handleResize() {
                  setSize({ width: window.innerWidth, height: window.innerHeight });
            }

            // Set initial size
            handleResize();

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
      }, []);

      return size;
}

const Success = () => {
      const { width, height } = useWindowSize();

      return (
            <section className="py-5 md:py-10">
                  <div className="inset-0 flex items-center justify-center z-50">
                        {/* Confetti animation */}
                        <Confetti width={width} height={height} numberOfPieces={200} recycle={false} />

                        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-xl max-w-xl w-full text-center p-10">
                              {/* Success Icon */}
                              <div className=" mb-6">
                                   <Image src="/product/success-icon.svg" alt="Success" width={160} height={160} />
                              </div>

                              {/* Title */}
                              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You</h2>

                              {/* Subtitle */}
                              <p className="text-[#9F9C96] mb-6">
                                    Message sent successfully. We will contact you as soon as possible.
                              </p>

                              {/* Button */}
                              <Button
                                    className="px-6 md:px-10 cursor-pointer py-3  hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition"
                                    onClick={() => (window.location.href = "/")}
                              >
                                    Explore More
                              </Button>
                        </div>
                  </div>
            </section>
      );
};

export default Success;
