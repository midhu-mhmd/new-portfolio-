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
        y: 80,
        duration: 1.4,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-40 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Section label */}
        <h2 className="about-animate text-xs tracking-[0.35em] text-white/40 mb-24">
          ( ABOUT )
        </h2>

        {/* Hero text */}
        <h1 className="about-animate text-3xl md:text-5xl font-light max-w-4xl leading-tight mb-16">
          A MERN STACK DEVELOPER<br />
          BUILDING SCALABLE, MODERN<br />
          DIGITAL EXPERIENCES.
        </h1>

        {/* Intro paragraph */}
        <p className="about-animate text-sm md:text-base text-white/60 max-w-2xl mb-32 leading-relaxed">
          I design and develop full-stack web applications using
          MongoDB, Express, React and Node.js — focused on
          performance, architecture and immersive interaction.
        </p>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-16 text-left max-w-6xl text-xs text-white/60">
          
          <div className="about-animate">
            <p className="mb-4 tracking-widest text-white/40">
              + IDENTITY
            </p>
            <p>
              MERN STACK DEVELOPER BASED IN INDIA,
              PASSIONATE ABOUT BUILDING RELIABLE
              BACKEND SYSTEMS AND CLEAN USER INTERFACES.
            </p>
          </div>

          <div className="about-animate">
            <p className="mb-4 tracking-widest text-white/40">
              + GROWTH
            </p>
            <p>
              STARTED FROM SIMPLE WEB PAGES,
              PROGRESSED INTO DATABASES, APIs,
              AUTHENTICATION AND SCALABLE APPLICATIONS.
            </p>
          </div>

          <div className="about-animate">
            <p className="mb-4 tracking-widest text-white/40">
              + INTERESTS
            </p>
            <p>
              EXPLORING 3D WEBSITES, ANIMATIONS,
              PERFORMANCE OPTIMIZATION,
              AND FUTURE-DRIVEN WEB EXPERIENCES.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}


