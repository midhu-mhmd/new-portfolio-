"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Environment, useCursor } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "JavaScript","TypeScript","React","Next.js",
  "Node.js","Express","MongoDB","GSAP",
  "Three.js","Tailwind","HTML5",
  "CSS3","Git","REST APIs","Figma"
];

/* WORD */
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
      scale={hovered ? 1.25 : 1}
    >
      <Text
        fontSize={0.45}
        color={hovered ? "#ffffff" : "#9ca3af"}
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
    const radius = 4;

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
        )
      });
    }
    return arr;
  }, []);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={group}>
      {words.map((w, i) => (
        <Word key={i} text={w.text} position={w.pos} />
      ))}
    </group>
  );
}

/* SECTION */
export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });
  }, []);

  return (
<section
  ref={sectionRef}
  id="skills"
  className="relative py-40"
>
  {/* CANVAS WRAPPER */}
  <div className="relative w-full h-130">
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Cloud />
      <Environment preset="city" />
    </Canvas>

    {/* OVERLAY TEXT */}
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
      <p className="text-xs tracking-[0.4em] text-white/40 mb-6 uppercase">
        ( Capabilities )
      </p>

      <h2
        ref={titleRef}
        className="text-6xl md:text-8xl font-bold text-white text-center"
      >
        DIGITAL <br /> ARSENAL
      </h2>
    </div>
  </div>
</section>
  );
}
