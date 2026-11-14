import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface LiquidHero3DProps {
  tintColor?: string;
  roughness?: number;
  transmission?: number;
  ior?: number;
}

export function LiquidHero3D({
  tintColor = '#ffffff',
  roughness = 0.04,
  transmission = 0.96,
  ior = 1.54,
}: LiquidHero3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Procedural Studio Environment for Rich Glass Reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    // Create an internal scene with gradient lights to bake an environment map
    const envScene = new THREE.Scene();
    const lightSphereGeo = new THREE.SphereGeometry(10, 32, 16);
    const lightSphereMat = new THREE.MeshBasicMaterial({
      color: 0x110f22,
      side: THREE.BackSide,
    });
    envScene.add(new THREE.Mesh(lightSphereGeo, lightSphereMat));

    // Vibrant accent light panels in environment
    const panelGeo = new THREE.PlaneGeometry(8, 8);
    const violetPanel = new THREE.Mesh(
      panelGeo,
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6 })
    );
    violetPanel.position.set(-6, 4, -4);
    violetPanel.lookAt(0, 0, 0);
    envScene.add(violetPanel);

    const cyanPanel = new THREE.Mesh(
      panelGeo,
      new THREE.MeshBasicMaterial({ color: 0x06b6d4 })
    );
    cyanPanel.position.set(6, -3, -4);
    cyanPanel.lookAt(0, 0, 0);
    envScene.add(cyanPanel);

    const orangePanel = new THREE.Mesh(
      panelGeo,
      new THREE.MeshBasicMaterial({ color: 0xf97316 })
    );
    orangePanel.position.set(0, 7, -2);
    orangePanel.lookAt(0, 0, 0);
    envScene.add(orangePanel);

    const envMap = pmremGenerator.fromScene(envScene).texture;
    scene.environment = envMap;

    // Central Glass Sculpture: Complex Biomorphic Knotted Glass Sculpture
    const group = new THREE.Group();
    scene.add(group);

    // Glass Material
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(tintColor),
      metalness: 0.05,
      roughness: roughness,
      transmission: transmission,
      ior: ior,
      thickness: 2.4,
      specularIntensity: 1.0,
      specularColor: new THREE.Color(0xffffff),
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      transparent: true,
      opacity: 1,
      envMapIntensity: 1.8,
    });

    // 1. Core Glass Torus Knot
    const knotGeometry = new THREE.TorusKnotGeometry(1.6, 0.45, 180, 32, 2, 3);
    const knotMesh = new THREE.Mesh(knotGeometry, glassMaterial);
    group.add(knotMesh);

    // 2. Outer Orbiting Glass Rings (Thin Fresnel lenses)
    const ringMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xa78bfa),
      roughness: 0.1,
      transmission: 0.9,
      ior: 1.45,
      thickness: 0.8,
      transparent: true,
      opacity: 0.85,
    });
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.6, 0.06, 24, 100), ringMat);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.9, 0.04, 24, 100), ringMat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    group.add(ring2);

    // 3. Floating Internal Liquid Prisms
    const innerCrystalGeo = new THREE.OctahedronGeometry(0.7, 0);
    const innerCrystalMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x38bdf8),
      roughness: 0.02,
      transmission: 0.98,
      ior: 1.7,
      thickness: 1.5,
    });
    const innerCrystal = new THREE.Mesh(innerCrystalGeo, innerCrystalMat);
    group.add(innerCrystal);

    // Dynamic Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xa855f7, 3.5);
    dirLight1.position.set(5, 6, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x06b6d4, 3.0);
    dirLight2.position.set(-6, -4, 3);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xf97316, 2.5, 15);
    pointLight.position.set(0, 0, 4);
    scene.add(pointLight);

    // Mouse Movement Listener
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x * 0.8;
      mouseRef.current.targetY = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Group rotation
      group.rotation.x = Math.sin(elapsedTime * 0.3) * 0.2 + mouseRef.current.y * 0.6;
      group.rotation.y = elapsedTime * 0.4 + mouseRef.current.x * 0.6;

      // Orbiting rings
      ring1.rotation.z = elapsedTime * 0.25;
      ring2.rotation.x = -elapsedTime * 0.3;

      // Inner crystal counter-rotation
      innerCrystal.rotation.x = -elapsedTime * 0.6;
      innerCrystal.rotation.y = elapsedTime * 0.8;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      knotGeometry.dispose();
      glassMaterial.dispose();
      pmremGenerator.dispose();
    };
  }, [tintColor, roughness, transmission, ior]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[520px] md:h-[620px] lg:h-[700px] flex items-center justify-center pointer-events-none"
    />
  );
}
