"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function VoidHero() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(".char", {
        y: 120,
        opacity: 0,
        stagger: 0.03,
        duration: 2,
      }).from(
        ".meta-fade",
        {
          opacity: 0,
          y: 10,
          stagger: 0.1,
          duration: 1.5,
        },
        "-=1.5"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={container}
      className="relative h-screen w-full bg-[#E8E8E3] text-[#111111] flex flex-col justify-between p-8 md:p-20 overflow-hidden"
    >
      {/* 1. Subtle Background Mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <span className="text-[35vw] font-bold text-[#111111]/1.5 leading-none select-none tracking-tighter">
          MM
        </span>
      </div>

      {/* 2. Top Header (The Brand) */}
      <div className="relative z-10 flex justify-between items-start meta-fade">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em]">
            Midhu Muhammad
          </span>
          <span className="text-[9px] opacity-40 uppercase tracking-[0.3em]">
            Fullstack Developer
          </span>
        </div>
        <div className="flex gap-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] cursor-pointer hover:opacity-50 transition-opacity">
            Work
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] cursor-pointer hover:opacity-50 transition-opacity">
            Info
          </span>
        </div>
      </div>

      {/* 3. The Statement (The Essence) */}
      <div className="relative z-10 flex flex-col items-center md:items-start">
        <h1 className="text-[18vw] md:text-[16rem] font-bold uppercase leading-[0.7] tracking-[-0.08em] overflow-hidden">
          {"Syntax".split("").map((char, i) => (
            <span
              key={i}
              className="char inline-block will-change-transform hover:text-[#B8B8D1] transition-colors duration-500 cursor-default"
            >
              {char}
            </span>
          ))}
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-6 mt-2 meta-fade">
          {/* Subtle Serif contrast for 'architecture' */}
          <span className="italic font-serif text-3xl md:text-5xl text-[#B8B8D1] lowercase tracking-normal">
            architecture
          </span>

          {/* Minimalist Divider */}
          <div className="hidden md:block w-24 h-px bg-[#111111]/10" />

          {/* Technical Meta Tag */}
          <div className="flex flex-col md:items-start">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#111111]/60">
              MERN Stack Specialist
            </p>
            <span className="text-[8px] font-mono opacity-30 uppercase tracking-widest mt-1">
              Node // Express // React // Mongo
            </span>
          </div>
        </div>
      </div>

      {/* 4. Bottom Footer (The Context) */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-8 meta-fade">
        <div className="flex flex-col gap-1">
          <span className="text-[8px] uppercase tracking-widest opacity-30">
            Current Project
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest border-b border-[#111111]/20 pb-1">
           Ai Healthcare SaaS
          </span>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex flex-col items-end">
            <span className="text-[8px] uppercase tracking-widest opacity-30">
              Based
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Thrissur, IN
            </span>
          </div>
          <div className="w-px h-8 bg-[#111111]/10" />
          <div className="group cursor-pointer flex items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest group-hover:mr-2 transition-all">
              Enter
            </span>
            <div className="w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center text-[#E8E8E3]">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M1 9L9 1M9 1H1M9 1V9"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Grainy Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50" />
    </main>
  );
}
