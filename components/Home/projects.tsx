"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectList = [
  {
    id: "01",
    title: "DRIPNEST",
    subtitle: "Apparel Engineering",
    tags: ["MERN", "JWT", "Tailwind"],
    description: "A high-performance custom apparel engine focusing on real-time visualization and secure e-commerce workflows. Built from scratch to handle complex personalization logic.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop",
    accent: "#B8B8D1"
  },
  {
    id: "02",
    title: "sovereign",
    subtitle: "Healthcare SaaS",
    tags: ["LLM", "Node.js", "Redis"],
    description: "A next-generation multi-clinic ecosystem featuring AI-driven symptom checking, automated ticketing, and multi-tenant isolation for hospital networks.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop",
    accent: "#D1B8B8"
  }
];

export default function EditorialProjects() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".project-item");
      
      items.forEach((item: any) => {
        const img = item.querySelector(".project-img");
        const title = item.querySelector(".project-title");
        
        // Image Parallax within its frame
        gsap.fromTo(img, 
          { yPercent: -15 }, 
          {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );

        // Text reveal animation
        gsap.from(title, {
          y: 100,
          skewY: 7,
          opacity: 0,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: item,
            start: "top 70%",
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="projects" className="bg-[#111111] text-[#E2E2E2] py-40">
      <div className="px-6 md:px-20 mb-32">
        <h2 className="text-[10px] uppercase tracking-[0.8em] text-white/30 mb-4">Selected Works // 2025</h2>
        <div className="w-full h-px bg-white/10" />
      </div>

      <div className="space-y-60">
        {projectList.map((proj, idx) => (
          <div key={idx} className="project-item relative flex flex-col items-center">
            
            {/* The Cinematic Frame */}
            <div className="relative w-full max-w-6xl aspect-[16/9] md:aspect-[21/9] overflow-hidden group cursor-pointer">
              <img 
                src={proj.image} 
                className="project-img w-full h-[140%] object-cover grayscale hover:grayscale-0 transition-[filter] duration-1000" 
                alt={proj.title}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
              
              {/* Corner Accents (Modern Minimalist) */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-white/40" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/40" />
            </div>

            {/* Content Overlay/Underlay */}
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 mt-12 px-6">
              <div className="md:col-span-1 text-5xl font-serif italic text-white/10">{proj.id}</div>
              
              <div className="md:col-span-6 overflow-hidden">
                <h3 className="project-title text-6xl md:text-8xl font-(--font-bebas) leading-none uppercase tracking-tighter">
                  {proj.title}
                </h3>
                <p className="text-xl md:text-2xl font-serif italic text-[#B8B8D1] mt-4 opacity-80">
                  {proj.subtitle}
                </p>
              </div>

              <div className="md:col-span-5 flex flex-col justify-end mt-8 md:mt-0 md:pl-20">
                <p className="text-sm leading-relaxed text-white/50 mb-8 uppercase tracking-tight">
                  {proj.description}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-10">
                  {proj.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono border border-white/20 px-3 py-1 rounded-full text-white/40">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-4 group w-fit">
                  <span className="text-xs font-bold uppercase tracking-widest group-hover:mr-4 transition-all">View Case Study</span>
                  <div className="w-12 h-px bg-white/40 group-hover:w-20 group-hover:bg-white transition-all" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none opacity-50" />
    </section>
  );
}