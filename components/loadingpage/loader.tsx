"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Simulate progress count
      const counter = { value: 0 };
      gsap.to(counter, {
        value: 100,
        duration: 2.5,
        ease: "power2.inOut",
        onUpdate: () => setProgress(Math.round(counter.value)),
      });

      // 2. Text Reveal
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 20, skewY: 5 },
        { 
          opacity: 1, 
          y: 0, 
          skewY: 0, 
          duration: 1.2, 
          ease: "expo.out",
          delay: 0.2 
        }
      );

      // 3. Exit Animation (The "Curtain" Slide)
      tl.to(loaderRef.current, {
        yPercent: -100,
        duration: 1.5,
        ease: "expo.inOut",
        delay: 1, // Wait for counter to finish
      });

    }, loaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-[#E2E2E2] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ghost Background Accent during loading */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[30vw] font-black text-[#B8B8D1] opacity-5 pointer-events-none uppercase">
          {progress}%
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Main Text */}
        <div ref={textRef} className="overflow-hidden">
          <div className="text-[#111111] text-[10px] tracking-[0.6em] uppercase font-bold mb-4">
            Midhu_Mhmd <span className="text-[#B8B8D1]">/</span> Architecture
          </div>
        </div>

        {/* Minimal Progress Bar (Concrete & Violet) */}
        <div className="w-48 h-[1px] bg-[#B8B8D1]/20 relative overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-full bg-[#111111] transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Counter UI */}
        <div 
          ref={progressRef}
          className="mt-6 font-serif italic text-4xl text-[#111111] lowercase"
        >
          {progress < 10 ? `0${progress}` : progress}
        </div>
      </div>

      {/* Decorative Corner Label */}
      <div className="absolute bottom-10 left-10 text-[9px] uppercase tracking-widest text-[#B8B8D1] font-bold">
        © 2025 // Initializing
      </div>
    </div>
  );
}