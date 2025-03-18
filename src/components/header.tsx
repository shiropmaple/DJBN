"use client";

import React from "react";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className="fixed p-6 text-5xl text-black cursor-pointer"
    >
      DEJABUN
    </div>
  );
};

export default Header;
