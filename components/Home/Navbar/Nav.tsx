"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const Nav = () => {
  const [open, setOpen] = useState(false);

  const menuItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full h-[12vh] z-50">
      <div className="flex items-center justify-between h-full w-[90%] mx-auto">

        {/* Brand */}
        <Link
          href="/"
          className={`${bebas.className} text-white text-lg uppercase`}
        >
          midhu_mhmd
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 text-[10px] text-white/70">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="uppercase tracking-[0.25em] hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-[12vh] left-0 w-full bg-black/95">
          <div className="flex flex-col items-center gap-8 py-10 text-white/80 text-sm">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="uppercase tracking-widest hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
