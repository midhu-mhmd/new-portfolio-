"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#111111] text-[#E8E8E3] pt-40 pb-10 px-6 md:px-20 selection:bg-[#B8B8D1] selection:text-[#111111]">
      
      {/* 1. PRIMARY CONTACT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-0 items-start border-t border-white/5 pt-16">
        
        {/* Email - Large Editorial Focus */}
        <div className="md:col-span-5 space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#B8B8D1] font-bold">Connect // Direct</h4>
          <a 
            href="mailto:mhmdmidhu@gmail.com" 
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter hover:italic transition-all duration-500 inline-block group"
          >
            Say Hello 
            <span className="block text-sm mt-4 font-mono opacity-40 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500">
               → mhmdmidhu@gmail.com
            </span>
          </a>
        </div>

        {/* Location - Real Time Interaction */}
        <div className="md:col-span-3 space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Node // Location</h4>
          <div className="space-y-1">
             <p className="text-xl font-medium uppercase tracking-tighter">Thrissur, India</p>
             <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono opacity-40">UTC +5:30</span>
                <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] uppercase tracking-widest opacity-40">Active Now</span>
             </div>
          </div>
        </div>

        {/* Social - Architectural Links */}
     <div className="md:col-span-3 space-y-6">
  <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">
    Social Architecture
  </h4>
  <div className="flex flex-col gap-3">
    {[
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/midhu-mhmd/' },
      { name: 'GitHub', url: 'https://github.com/midhu-mhmd' }
    ].map((social) => (
      <a 
        key={social.name} 
        href={social.url}
        target="_blank"             
        rel="noopener noreferrer"  
        className="group flex justify-between items-center border-b border-white/5 pb-2 hover:border-[#B8B8D1] transition-colors"
      >
        <span className="text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
          {social.name}
        </span>
        <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
          ↗
        </span>
      </a>
    ))}
  </div>
</div>

        {/* Status Orb */}
        <div className="md:col-span-1 flex justify-end">
          <div className="relative w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group cursor-help">
            <div className="absolute inset-0 rounded-full border border-[#B8B8D1]/20 animate-ping opacity-20" />
            <div className="w-2 h-2 bg-[#B8B8D1] rounded-full" />
            {/* Tooltip on hover */}
            <span className="absolute -top-10 right-0 whitespace-nowrap text-[8px] uppercase tracking-widest bg-white text-black px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
               Open for projects
            </span>
          </div>
        </div>
      </div>

      {/* 2. LARGE BRANDING OVERLAY (Awwwards Signature) */}
      <div className="mt-40 overflow-hidden pointer-events-none select-none">
        <h2 className="text-[14.5vw] font-bold uppercase leading-[0.7] tracking-tighter text-white/2">
           Muhammed
        </h2>
      </div>

      {/* 3. FINAL FOOTER BAR */}
      <div className="mt-10 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col gap-2">
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/20">
            © {currentYear} Midhu Muhammad — Personal Portfolio
          </p>
          <div className="flex gap-4 opacity-20 hover:opacity-100 transition-opacity">
             <span className="text-[8px] font-mono tracking-tighter font-bold uppercase">Lat: 9.9312° N</span>
             <span className="text-[8px] font-mono tracking-tighter font-bold uppercase">Long: 76.2673° E</span>
          </div>
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col items-end gap-1">
             <span className="text-[8px] uppercase tracking-widest opacity-20">Design & Code</span>
             <span className="text-[10px] font-bold uppercase tracking-widest">Next.js // GSAP</span>
          </div>
          <div className="flex flex-col items-end gap-1">
             <span className="text-[8px] uppercase tracking-widest opacity-20">Typeface</span>
             <span className="text-[10px] font-bold uppercase tracking-widest italic">Bebas // Serif</span>
          </div>
        </div>

      </div>
    </footer>
  );
}