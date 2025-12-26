"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    id: "01",
    title: "AI Healthcare SaaS",
    category: "Full Stack / AI Integration",
    status: "In Progress",
    desc: "A multi-tenant platform for patient diagnostics and clinic management.",
  },
  {
    id: "02",
    title: "DripNest Streetwear",
    category: "E-Commerce / Branding",
    status: "Completed",
    desc: "Custom apparel design interface with high-conversion checkout flow.",
  },
  {
    id: "03",
    title: "Neural Interface",
    category: "R&D / Three.js",
    status: "Case Study",
    desc: "Experimental UI for data visualization using neural network nodes.",
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal projects
      gsap.from(".project-row", {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: "#projects", // Use the ID instead of ref for better accuracy with pinning
          start: "top 90%",     // Start earlier
          toggleActions: "play none none reverse",
          // invalidateOnRefresh: true, // Crucial when using pinning on the parent
        },
      });

      // 2. Ghost text parallax
      gsap.to(".ghost-text", {
        xPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: "#projects",
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
      id="projects"
      className="relative py-40 bg-[#E2E2E2] text-[#111111] overflow-hidden"
    >
      {/* Background Ghost Label */}
      <div className="ghost-text absolute top-10 right-0 text-[18vw] font-black text-[#B8B8D1] opacity-10 pointer-events-none whitespace-nowrap z-0">
        SELECTED WORKS — 2025
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-[#111111]/10 pb-12">
          <div className="project-row">
            <p className="text-[10px] tracking-[0.5em] text-[#B8B8D1] font-bold uppercase mb-4">
              // Index
            </p>
            <h2 className="text-6xl md:text-8xl font-light tracking-tighter uppercase leading-[0.8]">
              Proven <br /> <span className="italic font-serif lowercase text-[#B8B8D1]">builds</span>
            </h2>
          </div>
          <p className="project-row text-xs uppercase tracking-widest text-[#111111]/50 mt-8 md:mt-0 max-w-[200px]">
            Focused on the intersection of technical logic and aesthetic purity.
          </p>
        </div>

        {/* Project List */}
        <div className="flex flex-col">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="project-row group relative py-12 border-b border-[#B8B8D1]/30 cursor-pointer flex flex-col md:flex-row md:items-center transition-all duration-500 hover:px-4"
            >
              {/* Ghost Lavender Underline on Hover */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B8B8D1] transition-all duration-700 ease-expo group-hover:w-full" />

              {/* ID & Category */}
              <div className="flex items-center gap-8 mb-4 md:mb-0 md:w-1/4">
                <span className="font-mono text-[10px] text-[#B8B8D1]">{project.id}</span>
                <span className="text-[10px] uppercase tracking-widest text-[#111111]/40 font-bold group-hover:text-[#111111] transition-colors">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <div className="md:w-2/4">
                <h3 className="text-4xl md:text-6xl font-light uppercase tracking-tighter transition-transform duration-500 group-hover:translate-x-2">
                  {project.title}
                </h3>
              </div>

              {/* Description & Status (Shown on larger screens) */}
              <div className="hidden md:flex flex-col items-end md:w-1/4 text-right">
                <p className="text-[11px] uppercase leading-relaxed text-[#111111]/60 max-w-[200px] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.desc}
                </p>
                <span className="text-[9px] px-2 py-1 border border-[#B8B8D1] text-[#B8B8D1] uppercase tracking-tighter">
                  {project.status}
                </span>
              </div>
              
              {/* Mobile Status Only */}
              <div className="md:hidden mt-4">
                 <span className="text-[9px] px-2 py-1 border border-[#B8B8D1] text-[#B8B8D1] uppercase">
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-32 flex justify-center project-row">
           <button className="group flex flex-col items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold">View Archive</span>
              <div className="w-12 h-[1px] bg-[#111111] group-hover:w-24 group-hover:bg-[#B8B8D1] transition-all duration-500" />
           </button>
        </div>
      </div>
    </section>
  );
}


