"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

interface ProductImageGalleryProps {
  images: string[];
  title: string;
}

export default function ProductImageGallery({ images, title }: ProductImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);

  // --- States and Refs ---
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [zoomSettings, setZoomSettings] = useState({
    backgroundPosition: "0% 0%",
  });
  const mainImageRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null); // Ref for thumbnail sliding

  // --- Auto-scroll active thumbnail into view ---
  useEffect(() => {
    if (thumbnailsRef.current) {
      const activeElement = thumbnailsRef.current.children[activeImage] as HTMLElement;
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center", // Keeps it centered on mobile horizontal scroll
        });
      }
    }
  }, [activeImage]);

  // --- Thumbnail Scrolling Handlers ---
  // 108px = Thumbnail Height (96px/h-24) + Gap (12px/gap-3)
  const handleScrollUp = () => {
    if (thumbnailsRef.current) {
      thumbnailsRef.current.scrollBy({ top: -108, behavior: "smooth" });
    }
  };

  const handleScrollDown = () => {
    if (thumbnailsRef.current) {
      thumbnailsRef.current.scrollBy({ top: 108, behavior: "smooth" });
    }
  };

  // --- Hover Zoom Logic ---
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mainImageRef.current) return;

    const { left, top, width, height } = mainImageRef.current.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;

    setZoomSettings({
      backgroundPosition: `${x}% ${y}%`,
    });
  };

  const handleMouseEnter = () => setZoomedImage(images[activeImage]);
  const handleMouseLeave = () => setZoomedImage(null);

  return (
    <PhotoProvider>
      {/* HOVER ZOOM PANEL */}
      {zoomedImage && (
        <div
          className="hidden lg:block absolute z-50 border-2 border-gray-200 rounded-2xl shadow-2xl bg-white overflow-hidden pointer-events-none"
          style={{
            right: "0",
            top: "4rem",
            width: "calc(50% - 0.4rem)",
            height: "600px",
            backgroundImage: `url(${zoomedImage})`,
            backgroundSize: "200%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: zoomSettings.backgroundPosition,
          }}
        />
      )}

      {/* LEFT: IMAGE GALLERY */}
      <div className="flex flex-col-reverse md:flex-row gap-4 lg:sticky lg:top-24">

        {/* Thumbnails Wrapper */}
        <div className="flex md:flex-col gap-3 md:w-24 shrink-0 relative">

          {/* Scroll Up Button (Only show if more than 5 images) */}
          {images.length > 5 && (
            <button
              onClick={handleScrollUp}
              className="hidden md:flex w-full h-8 items-center justify-center bg-gray-50 text-gray-400 hover:text-[#3A9AFF] rounded-t-lg border border-b-0 border-gray-200 shrink-0"
            >
              <ChevronUp size={20} />
            </button>
          )}

          {/* Scrollable Thumbnails Container */}
          <div
            ref={thumbnailsRef}
            className={`flex md:flex-col gap-3 overflow-x-auto md:overflow-y-hidden scroll-smooth scrollbar-hide ${images.length > 5 ? "md:max-h-[528px]" : "" // 528px fits exactly 5 images + 4 gaps
              }`}
          >
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative w-20 h-20 md:w-full md:h-24 rounded-lg overflow-hidden border-2 transition-all shrink-0 bg-gray-50 ${activeImage === idx
                    ? "border-[#3A9AFF]"
                    : "border-gray-200 hover:border-gray-300"
                  }`}
              >
                <Image src={img} alt={`${title} Thumbnail ${idx}`} fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Scroll Down Button (Only show if more than 5 images) */}
          {images.length > 5 && (
            <button
              onClick={handleScrollDown}
              className="hidden md:flex w-full h-8 items-center justify-center bg-gray-50 text-gray-400 hover:text-[#3A9AFF] rounded-b-lg border border-t-0 border-gray-200 shrink-0"
            >
              <ChevronDown size={20} />
            </button>
          )}
        </div>

        {/* Main Image Container */}
        <div
          ref={mainImageRef}
          className="relative w-full aspect-square md:aspect-4/3 lg:aspect-square bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center cursor-zoom-in group"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <PhotoView src={images[activeImage]}>
            <Image
              src={images[activeImage]}
              alt={title}
              width={800}
              height={600}
              className="object-contain w-full p-8 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0 lg:group-hover:opacity-100"
              priority
            />
          </PhotoView>

          {/* Internal Zoom effect for mobile/tablet */}
          <div
            className="absolute inset-0 lg:hidden group-hover:block rounded-2xl"
            style={{
              backgroundImage: `url(${images[activeImage]})`,
              backgroundSize: "250%",
              backgroundPosition: zoomSettings.backgroundPosition,
              display: zoomedImage && window.innerWidth < 1024 ? "block" : "none",
            }}
          />

          {/* Hint Icon */}
          <div className="absolute top-4 right-4 bg-white/70 p-2 rounded-full backdrop-blur-sm text-gray-500 group-hover:text-[#3A9AFF] pointer-events-none">
            <Search size={20} />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-[#3A9AFF] transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-[#3A9AFF] transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Global style to hide the physical scrollbar while keeping the logic functional */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </PhotoProvider>
  );
}