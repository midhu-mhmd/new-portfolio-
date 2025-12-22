"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".project");

    items?.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          delay: i * 0.15,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="px-10 py-40"
    >
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <h2 className="text-5xl md:text-6xl font-semibold mb-24">
          Selected Projects
        </h2>

        {/* PROJECTS */}
        <div className="space-y-24">
          {/* PROJECT 01 */}
          <div className="project group perspective">
            <div className="transition-transform duration-500 ease-out group-hover:rotate-x-6 group-hover:-translate-y-2">
              <h3 className="text-3xl md:text-4xl font-medium">
                AI Healthcare SaaS
              </h3>

              <p className="max-w-xl text-white/60 mt-4 leading-relaxed">
                A multi-tenant healthcare platform designed to assist patients
                through AI-powered symptom analysis, clinic discovery, and
                doctor recommendations. Built with scalability and real-world
                healthcare workflows in mind.
              </p>

              <span className="inline-block mt-6 text-sm text-white/40">
                Ongoing Project
              </span>
            </div>

            <div className="mt-10 h-px bg-white/10" />
          </div>

          {/* PROJECT 02 */}
          <div className="project group perspective">
            <div className="transition-transform duration-500 ease-out group-hover:rotate-x-6 group-hover:-translate-y-2">
              <h3 className="text-3xl md:text-4xl font-medium">
                DripNest
              </h3>

              <p className="max-w-xl text-white/60 mt-4 leading-relaxed">
                A custom streetwear platform allowing users to design, preview,
                and order premium t-shirts. Focused on a clean UI, smooth user
                flow, and a modern brand-driven experience.
              </p>

              <span className="inline-block mt-6 text-sm text-white/40">
                Completed Project
              </span>
            </div>

            <div className="mt-10 h-px bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}


