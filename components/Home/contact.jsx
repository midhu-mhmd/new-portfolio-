"use client";

import React from "react";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#E2E2E2] text-[#111111] font-sans flex flex-col overflow-hidden selection:bg-[#B8B8D1] selection:text-[#111111]">
      
      {/* Background Ghost Element - The Violet highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-[#B8B8D1] opacity-10 pointer-events-none select-none z-0">
        HELLO
      </div>

      {/* --- Main Center Content --- */}
      <main className="grow flex flex-col justify-center items-center z-10 relative mt-10 md:mt-0">
        
        {/* Secondary Nav (Refined with Lavender Dividers) */}
        <nav className="flex items-center gap-6 md:gap-12 text-[10px] font-bold tracking-[0.4em] text-[#111111]/40 uppercase mb-8">
          {['Home', 'About', 'Skills', 'Projects'].map((item, index) => (
            <React.Fragment key={item}>
              <span className="hover:text-[#111111] cursor-pointer transition-colors">{item}</span>
              {index !== 3 && <span className="w-1 h-1 rounded-full bg-[#B8B8D1]" />}
            </React.Fragment>
          ))}
        </nav>

        {/* Big Name Title - Scaled & Tightened */}
        <h1 className="text-[14vw] md:text-[8rem] leading-[0.8] font-light uppercase tracking-tighter text-[#111111] text-center">
          midhu <br />
          <span className="italic font-serif lowercase text-[#B8B8D1] ml-[0.2em]">mhmd</span>
        </h1>

        {/* Social Links - Structural List style */}
        <div className="flex gap-10 mt-12 text-[10px] font-bold uppercase tracking-[0.2em] border-y border-[#B8B8D1]/30 py-4 px-8">
          {['LinkedIn', 'Telegram', 'WhatsApp'].map((link) => (
            <a 
              key={link} 
              href="#" 
              className="hover:text-[#B8B8D1] transition-all duration-300 relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#B8B8D1] transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Email - Cyber Accent */}
        <div className="mt-12 group cursor-pointer">
          <a href="mailto:mhmdmidhu@gmail.com" className="flex flex-col items-center">
            <span className="text-[9px] uppercase tracking-[0.5em] text-[#B8B8D1] mb-2 font-bold">Get in touch</span>
            <span className="text-sm md:text-xl font-light uppercase tracking-tight group-hover:italic transition-all">
              mhmdmidhu@gmail.com
            </span>
          </a>
        </div>
      </main>

      {/* --- Footer Area --- */}
      <div className="w-full z-10 mt-auto">
        
        {/* Massive Footer Text - Concrete Fill */}
        <div className="w-full overflow-hidden leading-none border-t border-[#B8B8D1]/20 pt-4">
          <h2 className="text-[10vw] font-black uppercase text-center text-[#111111]/5 tracking-tighter whitespace-nowrap select-none">
            Mern Stack Developer — Based in India — 2025
          </h2>
        </div>

        {/* Footer Metadata */}
        <footer className="flex flex-col md:flex-row justify-between items-center px-10 py-8 text-[9px] uppercase tracking-[0.3em] text-[#111111]/40">
          
          <div className="mb-4 md:mb-0">
            © 2025 All rights reserved. <span className="text-[#111111]">Architecture by Midhu</span>
          </div>

          {/* "Fnsh" Pill Button - Concrete & Violet Style */}
          <button className="group relative border border-[#B8B8D1] rounded-full px-6 py-2 overflow-hidden transition-all hover:border-[#111111]">
            <span className="relative z-10 group-hover:text-[#E2E2E2] transition-colors text-[#111111]">fnsh .</span>
            <div className="absolute inset-0 bg-[#111111] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </footer>
      </div>
    </div>
  );
}
