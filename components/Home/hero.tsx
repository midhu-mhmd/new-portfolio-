"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Float, PerspectiveCamera } from "@react-three/drei";
import { div } from "three/src/Three.TSL.js";

/* ------------------ 3D VISUAL ------------------ */

function GeometricShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    const { x, y } = state.mouse;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      y * 0.3,
      0.05
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      x * 0.3,
      0.05
    );
  });

  // 📱📲💻 Responsive scale
  const scale =
    viewport.width < 6 ? 1.3 : viewport.width < 10 ? 1.7 : 2;

  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#ffffff"
          speed={3}
          distort={0.4}
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

/* ------------------ HERO SECTION ------------------ */

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "expo.out", duration: 2 },
      });

      tl.from(".nav-reveal", {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
      })
        .from(
          titleRef.current,
          {
            y: 100,
            skewY: 7,
            opacity: 0,
            filter: "blur(15px)",
          },
          "-=1.2"
        )
        .from(
          ".ui-line",
          {
            scaleY: 0,
            transformOrigin: "top",
            opacity: 0,
            duration: 1.5,
          },
          "-=1"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#E2E2E2] text-white overflow-hidden selection:bg-white selection:text-black"
    >
      {/* Film Grain */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <GeometricShape />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-0 pointer-events-none">
        <div className="text-center overflow-hidden">
          <h1
            ref={titleRef}
            className="
              text-[clamp(1.5rem,10vw,12rem)]
              md:text-[clamp(4rem,10vw,8rem)]
              lg:text-[clamp(5rem,12vw,10rem)]
              font-extralight
              tracking-tighter
              leading-[0.95]
              uppercase
            "
          >
            Design <br />
            <span className="italic font-serif lowercase pl-[0.2em] tracking-normal">
              for
            </span>{" "}
            Digital
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-10 md:mt-16 flex flex-col items-center gap-4 md:gap-6">
          <div className="ui-line w-px h-16 md:h-24 bg-linear-to-b from-white/50 to-transparent" />
          <p className="nav-reveal font-mono text-[8px] md:text-[9px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/30">
            Scroll to Explore
          </p>
        </div>
      </div>
    </main>
  );
}



