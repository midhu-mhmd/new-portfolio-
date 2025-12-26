"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-animate", {
        opacity: 0,
        y: 40, // Reduced y distance for a more "sophisticated" feel
        filter: "blur(10px)",
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Subtle parallax on the background label
      gsap.to(".bg-label", {
        x: 100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-[170vh] py-60 px-6 bg-[#E2E2E2] text-[#111111] overflow-hidden flex flex-col"
    >
      {/* Ghost Background Text - The "Violet" Accent */}
      <div className="bg-label absolute top-20 left-[-5%] text-[20vw] font-bold text-[#B8B8D1] opacity-20 pointer-events-none whitespace-nowrap z-0">
        ARCHITECTURE
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Section label with Lavender accent line */}
        <div className="about-animate flex items-center gap-4 mb-24">
          <div className="w-8 h-[1px] bg-[#B8B8D1]" />
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#111111]/50 font-bold">
            Background / 01
          </h2>
          <div className="w-8 h-[1px] bg-[#B8B8D1]" />
        </div>

        {/* Hero text - Cyber Brutalist Style */}
        <h1 className="about-animate text-[clamp(2rem,6vw,5rem)] font-light max-w-5xl leading-[0.95] tracking-tighter uppercase mb-20">
          Crafting Scalable <br />
          <span className="italic font-serif lowercase text-[#B8B8D1]">
            digital
          </span>{" "}
          Architecture
        </h1>

        {/* Intro paragraph */}
        <p className="about-animate text-sm md:text-lg text-[#111111]/70 max-w-2xl mb-32 leading-relaxed uppercase tracking-tight">
          Specializing in the MERN stack to build high-performance applications
          where logic meets aesthetics. Focused on the intersection of code and
          design.
        </p>

        {/* Info Grid with Concrete Borders */}
        <div className="grid md:grid-cols-3 gap-0 border-t border-[#B8B8D1]/30 w-full text-left">
          <div className="about-animate p-8 border-b md:border-b-0 md:border-r border-[#B8B8D1]/30">
            <p className="mb-6 text-[10px] tracking-[0.3em] text-[#B8B8D1] font-bold uppercase">
              // Identity
            </p>
            <p className="text-[11px] leading-relaxed uppercase">
              Full-Stack Developer based in India. Engineering reliable backend
              systems with clean, brutalist interfaces.
            </p>
          </div>

          <div className="about-animate p-8 border-b md:border-b-0 md:border-r border-[#B8B8D1]/30">
            <p className="mb-6 text-[10px] tracking-[0.3em] text-[#B8B8D1] font-bold uppercase">
              // Evolution
            </p>
            <p className="text-[11px] leading-relaxed uppercase">
              From static structures to dynamic ecosystems. Mastering MongoDB,
              Express, React, and Node.js.
            </p>
          </div>

          <div className="about-animate p-8">
            <p className="mb-6 text-[10px] tracking-[0.3em] text-[#B8B8D1] font-bold uppercase">
              // Philosophy
            </p>
            <p className="text-[11px] leading-relaxed uppercase">
              Efficiency is beautiful. Optimization is mandatory. The future of
              the web is immersive and lean.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
