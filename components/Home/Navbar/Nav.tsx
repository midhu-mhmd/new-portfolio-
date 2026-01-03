"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for background blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-[100] transition-all duration-500">
      {/* 1. Main Navigation Bar */}
      <div className={`
        flex items-center justify-between mx-auto px-8 md:px-12 transition-all duration-500
        ${scrolled ? "h-[8vh] bg-[#E8E8E3]/80 backdrop-blur-xl border-b border-[#111111]/5" : "h-[12vh] bg-transparent"}
      `}>
        
        {/* Brand - Letter Spacing is key for 2026 minimal look */}
        <Link
          href="/"
          className={`${bebas.className} text-[#111111] text-2xl uppercase tracking-[0.2em] hover:opacity-50 transition-opacity`}
        >
          M.MHMD
        </Link>

        {/* Desktop Menu - "The Technical List" */}
        <div className="hidden md:flex items-center gap-12">
          {menuItems.map((item, i) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group flex items-center gap-2 overflow-hidden"
            >
              <span className="text-[8px] font-bold opacity-30 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
              <span className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.3em] transition-transform duration-300 group-hover:-translate-y-[120%]">
                {item}
              </span>
              <span className="absolute left-4 text-[10px] font-bold text-[#B8B8D1] uppercase tracking-[0.3em] transition-transform duration-300 translate-y-[120%] group-hover:translate-y-0">
                {item}
              </span>
            </Link>
          ))}
          <div className="w-10 h-[1px] bg-[#111111]/20 ml-4" />
        </div>

        {/* Hamburger - Brutalist Style */}
        <button
          className="group relative w-8 h-8 flex flex-col justify-center gap-1.5 z-[110]"
          onClick={() => setOpen(!open)}
        >
          <motion.div 
            animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className="w-full h-[1.5px] bg-[#111111] origin-center transition-all" 
          />
          <motion.div 
            animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            className="w-full h-[1.5px] bg-[#111111] origin-center transition-all" 
          />
        </button>
      </div>

      {/* 2. Full-Screen Mobile/Overlay Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 95% 5%)" }}
            animate={{ clipPath: "circle(150% at 95% 5%)" }}
            exit={{ clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#111111] text-[#E8E8E3] z-[105] flex flex-col justify-center p-8 md:p-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-20">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-[0.5em] opacity-40 font-bold mb-10 text-[#B8B8D1]">Navigation // Index</span>
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-6"
                    >
                      <span className="text-[12px] font-mono opacity-30">0{i + 1}</span>
                      <h2 className={`${bebas.className} text-[15vw] md:text-[8vw] uppercase leading-none tracking-tighter group-hover:italic group-hover:text-[#B8B8D1] transition-all`}>
                        {item}
                      </h2>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Sidebar Info in Menu */}
              <div className="hidden md:flex flex-col justify-end items-end text-right space-y-8">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest opacity-40">Socials</span>
                  <div className="flex flex-col gap-1 text-sm font-bold uppercase tracking-widest">
                    <a href="https://www.linkedin.com/in/midhu-mhmd/" className="hover:text-[#B8B8D1]">LinkedIn</a>
                    <a href="https://github.com/midhu-mhmd" className="hover:text-[#B8B8D1]">GitHub</a>
                    <a href="/cv.png" className="hover:text-[#B8B8D1]">Read.cv</a>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest opacity-40">Local Time</span>
                  <p className="text-xl font-mono uppercase tracking-widest">23:45 IST</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
