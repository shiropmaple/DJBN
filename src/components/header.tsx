"use client";

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full z-10 h-[70px] fixed bg-white flex justify-center items-center">
      <Link
        className="w-full h-full max-w-[1200px] justify-start p-5 text-4xl grandstander"
        href={"/"}
      >
        DEJABUN
      </Link>
    </div>
  );
};

export default Header;
