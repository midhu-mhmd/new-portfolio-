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
    const ctx = gsap.context(() => {
      // Apply the Side-Pivot "Spatial Swing" logic here
      gsap.fromTo(
        innerRef.current,
        { 
          rotationY: -35,      // The "Door" angle
          x: "20%",            // Inward slide
          z: -600,             // Start in the distance
          opacity: 0,
          transformOrigin: "left center", // The hinge point
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
            scrub: 1.5,        // High inertia for cinematic feel
          },
        }
      );
    }, outerRef);

    return () => ctx.revert();
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