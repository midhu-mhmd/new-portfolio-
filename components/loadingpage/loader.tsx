"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loading() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  return (
    <div className="fixed inset-0 z-99999 bg-[#0a4024] flex items-center justify-center">
      <div
        ref={textRef}
        className="text-white text-sm tracking-[0.4em] uppercase font-light"
      >
        Hello
      </div>
    </div>
  );
}