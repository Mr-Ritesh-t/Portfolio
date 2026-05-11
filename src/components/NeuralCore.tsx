import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const NeuralCore = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || 600;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Group to hold everything
    const group = new THREE.Group();
    scene.add(group);

    // Core Geometry
    const coreGeom = new THREE.IcosahedronGeometry(1.2, 2);
    const coreMat = new THREE.MeshStandardMaterial({ 
      color: 0x4030FF, 
      wireframe: true,
      emissive: 0x4030FF,
      emissiveIntensity: 1,
      transparent: true,
      opacity: 0.8
    });
    const core = new THREE.Mesh(coreGeom, coreMat);
    group.add(core);

    // Inner Glow Sphere
    const glowGeom = new THREE.SphereGeometry(0.8, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x4030FF,
      transparent: true,
      opacity: 0.2
    });
    const glow = new THREE.Mesh(glowGeom, glowMat);
    group.add(glow);

    // Rings
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x4030FF, transparent: true, opacity: 0.2 });
    
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2, 0.01, 16, 100), ringMat);
    ring1.rotation.x = Math.PI / 2;
    group.add(ring1);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.005, 16, 100), ringMat);
    ring2.rotation.y = Math.PI / 2;
    group.add(ring2);

    // Particles
    const particlesCount = 1500;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    const particlesGeom = new THREE.BufferGeometry();
    particlesGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0x4030FF,
      size: 0.02,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particlesGeom, particlesMat);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pLight1 = new THREE.PointLight(0x4030FF, 2, 10);
    pLight1.position.set(2, 2, 2);
    scene.add(pLight1);

    camera.position.z = 5;

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      core.rotation.x += 0.005;
      core.rotation.y += 0.008;
      
      ring1.rotation.z += 0.002;
      ring2.rotation.x += 0.003;
      
      particles.rotation.y += 0.0005;
      
      // Subtle pulse
      const scale = 1 + Math.sin(Date.now() * 0.002) * 0.05;
      glow.scale.set(scale, scale, scale);
      
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 opacity-70 flex items-center justify-center min-h-[600px] pointer-events-none"
    />
  );
};

export default NeuralCore;
