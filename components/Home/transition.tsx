"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SpatialSwingWrapper({ children }: { children: React.ReactNode }) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop & Tablet
      gsap.fromTo(
        innerRef.current,
        { 
          rotationY: -35,
          x: "20%",
          z: -600,
          opacity: 0,
          transformOrigin: "left center",
        },
        {
          rotationY: 0,
          x: "0%",
          z: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: outerRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1.5,
          },
        }
      );
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile - Reduced intensity
      gsap.fromTo(
        innerRef.current,
        { 
          rotationY: -10,
          x: "5%",
          z: -200,
          opacity: 0,
          transformOrigin: "left center",
        },
        {
          rotationY: 0,
          x: "0%",
          z: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: outerRef.current,
            start: "top 95%",
            end: "center 70%",
            scrub: 1,
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section 
      ref={outerRef} 
      className="relative min-h-screen overflow-visible z-10" 
      style={{ perspective: "2000px" }} // Sets the depth of the "room"
    >
      <div 
        ref={innerRef} 
        className="will-change-transform transform-gpu"
        style={{ transformStyle: "preserve-3d" }} // Vital for Y-axis rotation
      >
        {children}
      </div>
    </section>
  );
}