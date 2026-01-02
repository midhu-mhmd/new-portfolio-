"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AetherContact() {
  const container = useRef(null);
  const magneticButton = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Text Reveal on Scroll
      gsap.from(".reveal-text", {
        y: 200,
        skewY: 10,
        stagger: 0.1,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      });

      // 2. Magnetic Button Logic
      const moveButton = (e) => {
        if (!magneticButton.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = magneticButton.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        gsap.to(magneticButton.current, {
          x: x * 0.4,
          y: y * 0.4,
          duration: 0.6,
          ease: "power3.out",
        });
      };

      const resetButton = () => {
        if (!magneticButton.current) return;
        gsap.to(magneticButton.current, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.3)",
        });
      };

      const currentContainer = container.current;
      currentContainer?.addEventListener("mousemove", moveButton);
      currentContainer?.addEventListener("mouseleave", resetButton);

      return () => {
        currentContainer?.removeEventListener("mousemove", moveButton);
        currentContainer?.removeEventListener("mouseleave", resetButton);
      };
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={container}
      id="contact"
    className="relative min-h-screen w-full bg-[#0D0D0D] text-[#FFFFFF] px-6 md:px-20 pt-40 flex flex-col justify-between overflow-hidden">
      {/* Background Decorative Element: Subtle Noise/Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20">
          
          {/* Main Title Area */}
          <div className="flex-1">
            <div className="overflow-hidden mb-2">
              <span className="reveal-text block text-[10px] uppercase tracking-[0.6em] text-[#B8B8D1] mb-6 font-bold">
                Connection // 05
              </span>
            </div>
            
            <h2 className="text-[12vw] md:text-[10vw] font-bold leading-[0.8] uppercase tracking-tighter">
              <div className="overflow-hidden h-fit">
                <span className="reveal-text block">Elevate Your</span>
              </div>
              <div className="overflow-hidden h-fit">
                <span className="reveal-text block italic font-serif text-[9vw] text-[#B8B8D1] normal-case tracking-normal">
                  Digital Presence
                </span>
              </div>
            </h2>
          </div>

          {/* Magnetic CTA */}
          <div className="flex items-center justify-center pt-10">
            <div ref={magneticButton} className="relative group">
              <a 
                href="mailto:mhmdmidhu@gmail.com" 
                className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/10 flex items-center justify-center text-center p-8 transition-colors hover:border-white/40"
              >
                {/* Background reveal circle */}
                <div className="absolute inset-0 bg-[#E2E2E2] rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                
                <p className="relative z-10 text-[10px] md:text-xs font-bold uppercase tracking-widest leading-relaxed group-hover:text-black transition-colors duration-500">
                  Start a <br /> Project
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
