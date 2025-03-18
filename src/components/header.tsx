"use client";

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <Link href={"/"} className="fixed p-6 text-5xl text-black cursor-pointer">
      DEJABUN
    </Link>
  );
};

export default Header;
