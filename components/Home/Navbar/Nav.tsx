import React from "react";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";



const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const Nav = () => {
  return (
    <nav className="fixed top-0 w-full h-[12vh] z-10000">

      <div className="flex items-center justify-between h-full w-[90%] mx-auto">

        {/* Brand */}
        <Link
          href="/"
          className={`${bebas.className} text-white text-lg tracking-tight uppercase leading-none inline-block relative`}
        >
          midhu_mhmd_
        </Link>

        {/* Menu */}
       <div className="hidden md:flex gap-12 text-[10px] text-white/70">
  {["About", "Skills", "Projects", "Contact"].map((item) => (
    <a
      key={item}
      href={`#${item.toLowerCase()}`}
      className="uppercase tracking-[0.25em] hover:text-white transition"
    >
      {item}
    </a>
  ))}
</div>


      </div>
    </nav>
  );
};

export default Nav;


