"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MegaMenu = ({ children }: Props) => {
  return (
    <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
      
      <div className="main-container py-10">
        {children}
      </div>

    </div>
  );
};

export default MegaMenu;