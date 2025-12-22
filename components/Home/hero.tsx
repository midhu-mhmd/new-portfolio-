"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

/* ------------------ 3D BACKGROUND ------------------ */

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.0008;
    ref.current.rotation.x = mouse.y * 0.1;
    ref.current.rotation.y = mouse.x * 0.1;
  });

  const positions = new Float32Array(1500 * 3);
  for (let i = 0; i < positions.length; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

/* ------------------ HERO ------------------ */

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.from(titleRef.current, {
      y: 120,
      opacity: 0,
      rotateX: 40,
      z: -200,
      filter: "blur(10px)",
      duration: 1.6,
      ease: "expo.out",
    }).from(
      subRef.current,
      {
        y: 40,
        opacity: 0,
        filter: "blur(6px)",
        duration: 1,
        ease: "power3.out",
      },
      "-=0.6"
    );
  }, []);

  return (
    <section className="relative py-48 overflow-hidden text-white">
      
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.6} />
          <Particles />
        </Canvas>
      </div>

      {/* Text */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h1
          ref={titleRef}
          className="text-[clamp(2.8rem,6vw,6.5rem)] font-light tracking-tight leading-tight"
        >
          The Future Starts
          <br />
          with Your Vision
        </h1>

        <p
          ref={subRef}
          className="mt-6 max-w-xl text-white/60 text-lg"
        >
          Designing immersive digital experiences with technology & purpose
        </p>
      </div>
    </section>
  );
}


