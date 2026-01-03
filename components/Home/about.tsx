"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SpatialAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const originalText = "I solve technical problems with cinematic solutions. My MERN stack architecture focuses on structural integrity and invisible code quality.";

  useEffect(() => {
    // 1. Safety check: Only split if it hasn't been split yet
    if (textRef.current && textRef.current.children.length === 0) {
      const words = originalText.split(" ");
      textRef.current.innerHTML = words
        .map(word => 
          `<span class="inline-block overflow-hidden">
            <span class="reveal-word inline-block translate-y-full will-change-transform">${word}&nbsp;</span>
          </span>`
        )
        .join("");
    }

    const ctx = gsap.context(() => {
      // 2. The Reveal: Faster stagger, smoother scrub
      gsap.to(".reveal-word", {
        y: 0,
        stagger: 0.015,
        ease: "expo.out", // More cinematic than power3
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%", // Start earlier for better feel
          end: "bottom 70%",
          scrub: 1, // Smooth following
        },
      });

      // 3. Parallax with Clamp (Prevents elements from flying off screen)
      gsap.to(".parallax-slow", {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".parallax-fast", {
        y: -250,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      id="about"
      className="relative min-h-screen bg-[#E8E8E3] py-32 px-6 md:px-20 overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="parallax-fast absolute top-[20%] right-[10%] opacity-10 select-none hidden lg:block">
        <h4 className="text-[12vw] font-bold font-[var(--font-bebas)] leading-none tracking-tighter uppercase">
          Logic
        </h4>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-5 flex flex-col justify-between space-y-20">
            <div className="parallax-slow">
              <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#B8B8D1] block mb-6">
                // System Philosophy
              </span>
              <div className="h-px w-20 bg-[#111111] mb-8" />
              <p className="text-xs font-medium uppercase tracking-widest text-[#111111]/60 leading-relaxed max-w-sm">
                I do not just build websites. I architect digital environments where performance and aesthetic are inseparable. 
              </p>
            </div>

            <div className="group relative w-64 h-80 bg-[#111111] p-8 flex flex-col justify-between overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
               <span className="text-[10px] text-[#B8B8D1] uppercase tracking-[0.4em]">Node // Mongo</span>
               <div className="space-y-4">
                  <div className="w-8 h-px bg-white/20" />
                  <p className="text-[#E2E2E2] text-xl font-serif italic lowercase leading-tight">
                    "Design is a formal response to a strategic question."
                  </p>
               </div>
               <div className="absolute -bottom-10 -right-10 text-[10rem] font-bold text-white/5 group-hover:text-white/10 transition-colors">
                  01
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Added aria-label for SEO/Accessibility */}
            <h2 
              ref={textRef}
              aria-label={originalText}
              className="text-[10vw] md:text-[5.5vw] font-bold leading-[0.9] tracking-tighter text-[#111111] uppercase whitespace-normal"
            >
              {originalText}
            </h2>

            <div className="grid grid-cols-2 gap-8 mt-24 border-t border-[#111111]/10 pt-12">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-40">Core Focus</span>
                <p className="text-[10px] font-bold uppercase mt-2">Scalable Ecosystems</p>
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-40">Method</span>
                <p className="text-[10px] font-bold uppercase mt-2">Brutalist Minimalism</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
