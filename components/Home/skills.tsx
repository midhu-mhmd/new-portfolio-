"use client";

import { useEffect, useRef, useMemo, useState, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, useCursor, Float } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "Express", "MongoDB", "GSAP",
  "Three.js", "Tailwind", "HTML5",
  "CSS3", "Git", "REST APIs", "Figma"
];

/* WORD COMPONENT */
function Word({ text, position }: { text: string; position: THREE.Vector3 }) {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useCursor(hovered);

  useFrame(({ camera }) => {
    if (!ref.current) return;
    ref.current.lookAt(camera.position);
  });

  return (
    <group
      ref={ref}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      <Text
        fontSize={0.4}
        color={hovered ? "#111111" : "#B8B8D1"}
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
}

/* CLOUD */
function Cloud() {
  const group = useRef<THREE.Group>(null);

  const words = useMemo(() => {
    const arr: { text: string; pos: THREE.Vector3 }[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5));
    const radius = 4.5;

    for (let i = 0; i < skills.length; i++) {
      const y = 1 - (i / (skills.length - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;

      arr.push({
        text: skills[i],
        pos: new THREE.Vector3(
          Math.cos(theta) * r * radius,
          y * radius,
          Math.sin(theta) * r * radius
        ),
      });
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y += 0.002;
    group.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <group ref={group}>
      {/* Wireframe Core */}
      <mesh>
        <sphereGeometry args={[4.2, 32, 32]} />
        <meshBasicMaterial
          color="#B8B8D1"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>

      {words.map((w, i) => (
        <Word key={i} text={w.text} position={w.pos} />
      ))}
    </group>
  );
}

/* MAIN SECTION */
export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        filter: "blur(15px)",
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
   <section
  ref={sectionRef}
  id="skills"
  className="relative py-20 md:py-32 bg-[#E2E2E2] overflow-hidden"
>
  {/* Background Text */}
  <div className="absolute inset-0 flex items-center justify-center text-[25vw] font-black text-[#B8B8D1] opacity-10 pointer-events-none select-none z-0">
    SKILLS
  </div>

  {/* CANVAS CONTAINER 
    h-[400px] for mobile 
    md:h-[600px] for desktop 
  */}
  <div className="relative w-full h-[400px] md:h-[600px] z-10">
    <Canvas 
      camera={{ position: [0, 0, 12], fov: 35 }} 
      dpr={[1, 2]}
      // This ensures the canvas takes up 100% of the parent div
      style={{ width: '100%', height: '100%' }} 
    >
      <ambientLight intensity={1} />

      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Cloud />
        </Float>
      </Suspense>
    </Canvas>

    {/* Overlay Text */}
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
      <p className="text-[10px] tracking-[0.6em] text-[#111111]/40 mb-4 uppercase font-bold">
        Technical Stack
      </p>

      <h2
        ref={titleRef}
        className="text-5xl md:text-8xl lg:text-9xl font-light text-[#111111] text-center tracking-tighter leading-[0.8] uppercase"
      >
        Digital <br />
        <span className="italic font-serif lowercase text-[#B8B8D1]">
          arsenal
        </span>
      </h2>

      <div className="mt-8 md:mt-12 w-px h-16 md:h-24 bg-gradient-to-b from-[#B8B8D1] to-transparent" />
    </div>
  </div>
</section>
  );
}

