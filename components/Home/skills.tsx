"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const expertise = [
  { id: "01", area: "Frontend", tools: "React.js / Next.js / TypeScript / GSAP / Framer Motion", desc: "Building immersive user interfaces with Redux Toolkit, React Query, and Material UI." },
  { id: "02", area: "Backend", tools: "Node.js / Express.js / REST APIs / JWT / RBAC", desc: "Architecting secure server-side systems with MVC logic and middleware-based authorization." },
  { id: "03", area: "Database", tools: "MongoDB / Mongoose / Redis / Aggregation", desc: "Designing complex schemas and high-performance aggregation pipelines for scalable data." },
  { id: "04", area: "DevOps & Tools", tools: "AWS / Vercel / Git / Docker / Vite", desc: "Managing cloud deployment pipelines and full-stack development ecosystems." },
];

export default function IndustrialSkills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a vertical "scrub" animation for the text blocks
      const items = gsap.utils.toArray(".skill-item");
      
      items.forEach((item: any) => {
        gsap.fromTo(item, 
          { opacity: 0.2, scale: 0.95, filter: "blur(4px)" },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            scrollTrigger: {
              trigger: item,
              start: "top 70%",
              end: "top 30%",
              scrub: true,
            }
          }
        );
      });

      // Background "Floating" Text
      gsap.to(".bg-text-float", {
        xPercent: -20,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="skills"
      className="relative min-h-screen bg-[#111111] text-[#E2E2E2] py-40 px-6 md:px-20 overflow-hidden"
    >
      {/* Background Kinetic Layer */}
      <div className="bg-text-float absolute top-20 left-0 whitespace-nowrap text-[25vw] font-black text-white/[0.02] leading-none select-none pointer-events-none">
        ENGINEERING SYSTEM ENGINEERING SYSTEM
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 border-b border-white/10 pb-12">
          <div className="overflow-hidden">
            <h2 className="text-[10px] uppercase tracking-[0.8em] text-[#B8B8D1] mb-6 font-bold block">
              Capabilities // 2026
            </h2>
            <h3 className="text-6xl md:text-8xl font-[var(--font-bebas)] leading-[0.85] uppercase tracking-tighter">
              The Technical <br /> <span className="text-white/40">Manifesto</span>
            </h3>
          </div>
          <div className="mt-8 md:mt-0 max-w-xs">
             <p className="text-[10px] leading-relaxed uppercase tracking-widest text-white/40">
               Focusing on the intersection of raw performance and visual storytelling. Built with the MERN stack and cinematic motion.
             </p>
          </div>
        </div>

        <div className="flex flex-col space-y-24 md:space-y-40">
          {expertise.map((item) => (
            <div key={item.id} className="skill-item flex flex-col md:flex-row gap-10 lg:gap-20 items-start md:items-end group">
              <span className="text-6xl md:text-8xl lg:text-[10rem] font-serif italic text-[#B8B8D1]/20 group-hover:text-[#B8B8D1] transition-colors duration-700">
                {item.id}
              </span>
              
              <div className="flex-1 border-l border-white/10 pl-10 md:pl-20 py-2">
                <h4 className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase tracking-tighter mb-6">
                  {item.area}
                </h4>
                <p className="text-base sm:text-lg md:text-xl text-white/60 font-light max-w-2xl mb-8 leading-snug">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-2 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.4em] text-[#B8B8D1]">
                  {item.tools.split(" / ").map(tool => (
                    <span key={tool} className="hover:text-white transition-colors cursor-crosshair">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Visual Element */}
              <div className="hidden lg:flex flex-col gap-1 items-end opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-20 h-px bg-white" />
                <div className="w-12 h-px bg-white" />
                <div className="w-16 h-px bg-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>
    </section>
  );
}