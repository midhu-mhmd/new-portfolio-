"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    if (rendererRef.current) return; // prevent double renderer

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Mesh
    const geometry = new THREE.IcosahedronGeometry(1.5, 1);
    const material = new THREE.MeshStandardMaterial({
      color: "#ffffff",
      wireframe: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Light
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    let animationId: number;

    const animate = () => {
      mesh.rotation.x += 0.003;
      mesh.rotation.y += 0.003;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (mountRef.current) {
        mountRef.current.innerHTML = "";
      }

      rendererRef.current = null;
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10" />;
}
