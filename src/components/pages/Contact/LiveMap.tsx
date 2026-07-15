"use client";

import { useState, useEffect } from "react";

const LiveMap = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
        Loading Map...
      </div>
    );
  }

  return (
    <iframe
      title="AMKOV HQ Google Maps Location"
      // Using Google Maps embed tailored to your exact Baidu location name
      src="https://maps.google.com/maps?q=%E8%89%BE%E5%8F%AF%E5%B7%A5%E4%B8%9A%E5%9B%ADC%E6%A0%8B&t=m&z=16&output=embed&iwloc=near"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="grayscale hover:grayscale-0 transition-all duration-700"
    >
      Your browser does not support inline frames. Please visit Google Maps directly to view the location.
    </iframe>
  );
};

export default LiveMap;
