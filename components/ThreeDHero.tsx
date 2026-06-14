'use client';

import { useEffect, useRef } from 'react';

interface ThreeDHeroProps {
  title: string;
  subtitle: string;
}

export default function ThreeDHero({ title, subtitle }: ThreeDHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamic Three.js import
    import('three').then((THREE) => {
      if (!containerRef.current) return;

      // Scene setup
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xfef9f3);

      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight * 0.6);
      renderer.setPixelRatio(window.devicePixelRatio);
      containerRef.current.appendChild(renderer.domElement);

      // Create luxury geometric shapes
      const geometry = new THREE.IcosahedronGeometry(2, 4);
      const material = new THREE.MeshPhongMaterial({
        color: 0xc97a5e,
        emissive: 0x8b7d6b,
        shininess: 100,
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xd4af37, 1);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        mesh.rotation.x += 0.003;
        mesh.rotation.y += 0.005;
        renderer.render(scene, camera);
      };
      animate();

      // Handle window resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight * 0.6);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
      };
    });
  }, []);

  return <div ref={containerRef} className="w-full" />;
}
