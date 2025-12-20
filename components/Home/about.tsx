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
        y: 100,
        skewY: 3,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-[#0E0F0F] text-white flex flex-col items-center justify-center px-6"
    >
      {/* Title */}
      <h2 className="about-animate text-xs tracking-[0.35em] text-white/40 mb-24">
        ( ABOUT ME )
      </h2>

      {/* Main Heading */}
      <h1 className="about-animate text-3xl md:text-5xl text-center font-light mb-16 max-w-4xl leading-tight">
        A PASSIONATE MERN STACK DEVELOPER  
        CRAFTING MODERN, SCALABLE  
        WEB EXPERIENCES.
      </h1>

      {/* Intro Text (instead of image) */}
      <p className="about-animate text-sm md:text-base text-center text-white/60 max-w-2xl mb-28 leading-relaxed">
        I build full-stack applications using MongoDB, Express,
        React and Node.js — focusing on performance, clean
        architecture and immersive user experience.
      </p>

      {/* Bottom Grid */}
      <div className="grid md:grid-cols-3 gap-16 max-w-6xl text-xs text-white/60 leading-relaxed">
        <div className="about-animate">
          <p className="mb-4 tracking-widest text-white/40">+ MY IDENTITY</p>
          <p>
            A MERN STACK DEVELOPER BASED IN INDIA,
            SPECIALIZING IN FULL-STACK WEB APPLICATIONS,
            CLEAN UI AND ROBUST BACKEND SYSTEMS.
          </p>
        </div>

        <div className="about-animate">
          <p className="mb-4 tracking-widest text-white/40">+ MY GROWTH</p>
          <p>
            STARTED WITH CURIOSITY FOR HOW WEBSITES WORK.
            EVOLVED INTO BUILDING APIs, DATABASES AND
            SCALABLE FRONTENDS WITH REAL-WORLD PROJECTS.
          </p>
        </div>

        <div className="about-animate">
          <p className="mb-4 tracking-widest text-white/40">+ MY HOBBIES</p>
          <p>
            EXPLORING 3D WEBSITES, ANIMATIONS,
            LEARNING NEW TECH, UI DESIGN,
            AND BUILDING FUTURISTIC DIGITAL EXPERIENCES.
          </p>
        </div>
      </div>
    </section>
  );
}


