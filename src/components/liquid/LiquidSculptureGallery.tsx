import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Box, Sparkles, ChevronLeft, ChevronRight, Layers, Eye } from 'lucide-react';

interface SculptureData {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  geometryType: 'monolith' | 'mobius' | 'fluidTorus' | 'gyroscope' | 'obsidian' | 'celestial';
  ior: number;
  dispersion: number;
  tint: string;
  metalness: number;
  roughness: number;
}

const SCULPTURES: SculptureData[] = [
  {
    id: 'monolith',
    name: 'The Prismatic Monolith',
    subtitle: 'Geometric Refractive Monolith',
    description: 'Sharp bevelled hexagonal crystal prism engineered to split incident white light into vibrant rainbow dispersion fields.',
    geometryType: 'monolith',
    ior: 1.62,
    dispersion: 0.85,
    tint: '#ffffff',
    metalness: 0.05,
    roughness: 0.02,
  },
  {
    id: 'mobius',
    name: 'The Mobius Ribbon',
    subtitle: 'Non-orientable Fluid Manifold',
    description: 'An infinite single-sided continuous loop sculpted from high-index borosilicate glass with iridescent lavender rim lighting.',
    geometryType: 'mobius',
    ior: 1.54,
    dispersion: 0.65,
    tint: '#c084fc',
    metalness: 0.1,
    roughness: 0.04,
  },
  {
    id: 'fluidTorus',
    name: 'The Fluid Torus',
    subtitle: 'Viscous Surface Displacement',
    description: 'Liquid glass donut featuring procedural surface tension ripples that warp ambient environment reflections in real time.',
    geometryType: 'fluidTorus',
    ior: 1.48,
    dispersion: 0.45,
    tint: '#38bdf8',
    metalness: 0.02,
    roughness: 0.06,
  },
  {
    id: 'gyroscope',
    name: 'The Quantum Gyroscope',
    subtitle: 'Concentric Gimbal Rings',
    description: 'Three nested concentric glass gimbal rings spinning independently across orthogonal axes, bending light through multiple refractive strata.',
    geometryType: 'gyroscope',
    ior: 1.58,
    dispersion: 0.75,
    tint: '#818cf8',
    metalness: 0.08,
    roughness: 0.03,
  },
  {
    id: 'obsidian',
    name: 'The Obsidian Prism',
    subtitle: 'Smoked Volcanic Glass',
    description: 'Deep midnight smoked glass with champagne gold specular reflections, demonstrating low-transmission high-fresnel luxury optics.',
    geometryType: 'obsidian',
    ior: 1.75,
    dispersion: 0.25,
    tint: '#18181b',
    metalness: 0.2,
    roughness: 0.08,
  },
  {
    id: 'celestial',
    name: 'The Celestial Lens',
    subtitle: 'Astronomical Dual-Convex Optic',
    description: 'Ultra-pure silica dual-convex lens that magnifies starry particle coordinates with zero geometric spherical aberration.',
    geometryType: 'celestial',
    ior: 1.51,
    dispersion: 0.5,
    tint: '#fef08a',
    metalness: 0.02,
    roughness: 0.01,
  },
];

export function LiquidSculptureGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentSculpture = SCULPTURES[currentIndex];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // Studio Environment
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const envScene = new THREE.Scene();
    const bgSphere = new THREE.Mesh(
      new THREE.SphereGeometry(15, 32, 16),
      new THREE.MeshBasicMaterial({ color: 0x07060f, side: THREE.BackSide })
    );
    envScene.add(bgSphere);

    // Colored Panels for Refraction
    const addGlowPanel = (color: number, pos: [number, number, number]) => {
      const p = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), new THREE.MeshBasicMaterial({ color }));
      p.position.set(...pos);
      p.lookAt(0, 0, 0);
      envScene.add(p);
    };

    addGlowPanel(0x8b5cf6, [-6, 5, -4]);
    addGlowPanel(0x06b6d4, [6, -4, -4]);
    addGlowPanel(0xf97316, [0, 6, -3]);

    scene.environment = pmremGenerator.fromScene(envScene).texture;

    // Glass Material based on current sculpture
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(currentSculpture.tint),
      metalness: currentSculpture.metalness,
      roughness: currentSculpture.roughness,
      transmission: currentSculpture.id === 'obsidian' ? 0.65 : 0.95,
      ior: currentSculpture.ior,
      thickness: 2.2,
      specularIntensity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transparent: true,
      envMapIntensity: 1.8,
    });

    const group = new THREE.Group();
    scene.add(group);

    // Geometry Generation based on selected sculpture
    let mainMesh: THREE.Object3D;

    if (currentSculpture.geometryType === 'monolith') {
      const geo = new THREE.CylinderGeometry(1.4, 1.4, 2.8, 6);
      mainMesh = new THREE.Mesh(geo, glassMaterial);
    } else if (currentSculpture.geometryType === 'mobius') {
      const geo = new THREE.TorusKnotGeometry(1.3, 0.35, 128, 32, 2, 3);
      mainMesh = new THREE.Mesh(geo, glassMaterial);
    } else if (currentSculpture.geometryType === 'fluidTorus') {
      const geo = new THREE.TorusGeometry(1.4, 0.5, 32, 100);
      mainMesh = new THREE.Mesh(geo, glassMaterial);
    } else if (currentSculpture.geometryType === 'gyroscope') {
      mainMesh = new THREE.Group();
      const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.08, 24, 80), glassMaterial);
      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.08, 24, 80), glassMaterial);
      ring2.rotation.x = Math.PI / 2;
      const ring3 = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.08, 24, 80), glassMaterial);
      ring3.rotation.y = Math.PI / 2;
      mainMesh.add(ring1, ring2, ring3);
    } else if (currentSculpture.geometryType === 'obsidian') {
      const geo = new THREE.IcosahedronGeometry(1.6, 0);
      mainMesh = new THREE.Mesh(geo, glassMaterial);
    } else {
      // celestial dual-convex lens
      const geo = new THREE.SphereGeometry(1.8, 48, 48);
      geo.scale(1, 1, 0.35);
      mainMesh = new THREE.Mesh(geo, glassMaterial);
    }

    group.add(mainMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xa855f7, 3);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x06b6d4, 2.5);
    dirLight2.position.set(-5, -5, 3);
    scene.add(dirLight2);

    // Interactive pointer drag to rotate sculpture
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onPointerDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onPointerMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      group.rotation.y += deltaX * 0.01;
      group.rotation.x += deltaY * 0.01;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (!isDragging) {
        group.rotation.y += 0.008;
        group.rotation.x = Math.sin(elapsed * 0.5) * 0.15;
      }

      if (currentSculpture.geometryType === 'gyroscope' && mainMesh instanceof THREE.Group) {
        mainMesh.children[0].rotation.z += 0.01;
        mainMesh.children[1].rotation.x += 0.015;
        mainMesh.children[2].rotation.y += 0.02;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      pmremGenerator.dispose();
    };
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SCULPTURES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === SCULPTURES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-28 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-300 mb-3">
            <Box className="w-3.5 h-3.5" />
            <span>PERMANENT 3D ARCHIVE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-space tracking-tight text-white">
            SCULPTURE <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300">COLLECTION</span>
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all hover:scale-105"
            aria-label="Previous sculpture"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-mono text-white/60">
            0{currentIndex + 1} / 0{SCULPTURES.length}
          </span>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all hover:scale-105"
            aria-label="Next sculpture"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main 3D Display Stage + Spec Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#090910] border border-white/15 rounded-3xl p-6 md:p-10 shadow-2xl">
        {/* Left Column (7 Cols): Interactive 3D Canvas */}
        <div className="lg:col-span-7 relative h-[420px] md:h-[520px] rounded-2xl bg-black/50 border border-white/10 overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center">
          <div ref={containerRef} className="w-full h-full" />

          {/* Interactive Hint */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-[11px] font-mono text-white/60 pointer-events-none">
            <Eye className="w-3.5 h-3.5 text-violet-400" />
            <span>Click and drag to rotate 360°</span>
          </div>

          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-violet-600/30 border border-violet-500/40 text-[10px] font-mono text-violet-200">
            LIVE THREE.JS SCENE
          </div>
        </div>

        {/* Right Column (5 Cols): Curated Specifications */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-bold">
              {currentSculpture.subtitle}
            </span>
            <h3 className="text-3xl md:text-4xl font-black font-space text-white mt-1">
              {currentSculpture.name}
            </h3>
            <p className="text-sm text-white/70 mt-3 leading-relaxed">
              {currentSculpture.description}
            </p>
          </div>

          {/* Spec Matrix */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 font-mono text-xs">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <span className="text-white/40 block text-[10px] uppercase">Refraction Index</span>
              <span className="text-amber-400 font-bold text-base">{currentSculpture.ior} IOR</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <span className="text-white/40 block text-[10px] uppercase">Dispersion Rate</span>
              <span className="text-cyan-400 font-bold text-base">{currentSculpture.dispersion} λ</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <span className="text-white/40 block text-[10px] uppercase">Roughness</span>
              <span className="text-violet-400 font-bold text-base">{currentSculpture.roughness}</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <span className="text-white/40 block text-[10px] uppercase">Transmission</span>
              <span className="text-emerald-400 font-bold text-base">
                {currentSculpture.id === 'obsidian' ? '65%' : '96%'}
              </span>
            </div>
          </div>

          {/* Sculpture Thumbnails Selector */}
          <div className="pt-4 border-t border-white/10">
            <span className="text-[11px] font-mono text-white/40 uppercase tracking-wider block mb-3">
              Catalog Selection
            </span>
            <div className="grid grid-cols-6 gap-2">
              {SCULPTURES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-10 rounded-lg border font-mono text-xs font-bold transition-all ${
                    currentIndex === idx
                      ? 'border-violet-500 bg-violet-600/30 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] scale-105'
                      : 'border-white/10 bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
