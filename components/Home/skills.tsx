"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text, Float, Environment, useCursor } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", 
  "Node.js", "Express", "MongoDB", "GSAP", 
  "Three.js", "Tailwind", "WebGL", "Shaders"
];

/**
 * 1. The 3D Floating Word Component
 */
function Word({ children, position, vec = new THREE.Vector3() }: { children: string; position: THREE.Vector3; vec?: THREE.Vector3 }) {
  const ref = useRef<THREE.Group>(null);
  const textRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  
  useCursor(hovered); // Changes cursor on hover

  useFrame((state) => {
    if (!ref.current) return;
    
    // Animate the word always facing the camera
    ref.current.lookAt(state.camera.position);
    
    // Smooth hover scaling effect
    ref.current.scale.lerp(
      new THREE.Vector3(
        hovered ? 1.4 : 1, 
        hovered ? 1.4 : 1, 
        1
      ), 
      0.1
    );
  });

  return (
    <Float floatIntensity={2} rotationIntensity={1} speed={1.5}>
      <group
        ref={ref}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <Text
          ref={textRef}
          color={hovered ? "#ffffff" : "#a1a1aa"} // Zinc-400 to White
          fontSize={0.5}
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff" // Inter Bold
          anchorX="center"
          anchorY="middle"
          letterSpacing={-0.02}
        >
          {children}
        </Text>
      </group>
    </Float>
  );
}

/**
 * 2. The Cloud Geometry Logic
 */
function Cloud({ count = 4, radius = 20 }) {
  // Create a spherical distribution of points
  const words = useMemo(() => {
    const temp: { pos: THREE.Vector3; word: string }[] = [];
    const phiSpan = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < skills.length; i++) {
      const y = 1 - (i / (skills.length - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // radius at y
      const theta = phiSpan * i; // golden angle increment

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      // Scale up by radius
      temp.push({ 
        pos: new THREE.Vector3(x * radius, y * radius, z * radius), 
        word: skills[i % skills.length] 
      });
    }
    return temp;
  }, [radius]);

  // Rotation Logic based on mouse
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    // Slow constant rotation
    groupRef.current.rotation.y += 0.001;
    // Mouse interaction ease
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, state.mouse.y * 0.2, 0.1);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, state.mouse.x * 0.2 + groupRef.current.rotation.y, 0.1);
  });

  return (
    <group ref={groupRef}>
      {words.map((item, i) => (
        <Word key={i} position={item.pos}>
          {item.word}
        </Word>
      ))}
    </group>
  );
}

/**
 * 3. The Main Section Component
 */
export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation: Slide up with Reveal
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        filter: "blur(10px)",
      });

      // Background Parallax or Color Shift
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        backgroundColor: "#050505", // Subtle darken effect
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative h-[120vh] w-full bg-[#0E0F0F] text-white overflow-hidden cursor-move"
    >
      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 2]}>
          <fog attach="fog" args={['#0E0F0F', 0, 25]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#ffffff" intensity={1} />
          <Cloud count={8} radius={4.5} />
          {/* Post-processing or Environment could go here */}
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* HTML Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center mix-blend-difference">
          <p className="text-xs font-mono tracking-[0.4em] text-white/50 mb-6 uppercase">
            ( Capabilities )
          </p>
          <h2 
            ref={titleRef}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-white/20"
          >
            DIGITAL<br />ARSENAL
          </h2>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 text-sm animate-bounce">
        scroll to explore
      </div>
    </section>
  );
}
