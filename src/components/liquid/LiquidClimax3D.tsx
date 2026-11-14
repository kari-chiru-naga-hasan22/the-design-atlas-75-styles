import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ArrowUpRight, Sparkles, Code } from 'lucide-react';

export function LiquidClimax3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 550;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    container.appendChild(renderer.domElement);

    // Studio Environment
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const envScene = new THREE.Scene();
    const bgSphere = new THREE.Mesh(
      new THREE.SphereGeometry(15, 32, 16),
      new THREE.MeshBasicMaterial({ color: 0x04040a, side: THREE.BackSide })
    );
    envScene.add(bgSphere);

    const addLight = (color: number, pos: [number, number, number]) => {
      const p = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), new THREE.MeshBasicMaterial({ color }));
      p.position.set(...pos);
      p.lookAt(0, 0, 0);
      envScene.add(p);
    };

    addLight(0x8b5cf6, [-6, 6, -4]);
    addLight(0x06b6d4, [6, -5, -4]);
    addLight(0xf97316, [0, 8, -2]);

    scene.environment = pmremGenerator.fromScene(envScene).texture;

    // Monumental Crystal Glass Monolith
    const monolithGeo = new THREE.IcosahedronGeometry(2.0, 1);
    const monolithMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xffffff),
      metalness: 0.04,
      roughness: 0.02,
      transmission: 0.98,
      ior: 1.62,
      thickness: 2.8,
      specularIntensity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transparent: true,
      envMapIntensity: 2.2,
    });
    const monolith = new THREE.Mesh(monolithGeo, monolithMat);
    scene.add(monolith);

    // Floating Glass Ember Particles
    const particleCount = 70;
    const particleGeo = new THREE.TetrahedronGeometry(0.08, 0);
    const particleMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transmission: 0.9,
      roughness: 0.1,
      transparent: true,
    });

    const particlesGroup = new THREE.Group();
    scene.add(particlesGroup);

    const particleSpeeds: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < particleCount; i++) {
      const p = new THREE.Mesh(particleGeo, particleMat);
      p.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6
      );
      particlesGroup.add(p);
      particleSpeeds.push({
        x: (Math.random() - 0.5) * 0.005,
        y: Math.random() * 0.008 + 0.002,
        z: (Math.random() - 0.5) * 0.005,
      });
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const light1 = new THREE.DirectionalLight(0xa855f7, 3.5);
    light1.position.set(6, 6, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0x06b6d4, 3.0);
    light2.position.set(-6, -4, 4);
    scene.add(light2);

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

      // Slow majestic monolith rotation
      monolith.rotation.y = elapsed * 0.15;
      monolith.rotation.x = Math.sin(elapsed * 0.2) * 0.2;

      // Floating embers
      particlesGroup.children.forEach((p, i) => {
        const speed = particleSpeeds[i];
        p.position.y += speed.y;
        p.position.x += speed.x;
        p.rotation.x += 0.01;
        p.rotation.y += 0.015;

        // Reset if float out of top
        if (p.position.y > 4.5) {
          p.position.y = -4.5;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      pmremGenerator.dispose();
      monolithGeo.dispose();
      monolithMat.dispose();
    };
  }, []);

  return (
    <section className="relative py-32 px-4 max-w-7xl mx-auto overflow-hidden">
      <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#090912] via-[#05050A] to-black p-8 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-violet-600/20 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-cyan-600/20 blur-[130px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column (6 Cols): Monumental Typography */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE HORIZON OF COMPUTATIONAL GLASS</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black font-space tracking-tight text-white leading-none">
              LIGHT HAS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300">
                ANOTHER FORM.
              </span>
            </h2>

            <p className="text-lg md:text-xl text-white/70 max-w-md font-light leading-relaxed">
              Explore the beauty of a digital world shaped by light, motion, and real-time GPU-accelerated refraction.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#playground"
                className="px-6 py-3.5 rounded-2xl bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Launch Playground <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/naughtyduk/liquidGL"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all hover:scale-105 inline-flex items-center gap-2 backdrop-blur-md"
              >
                <Code className="w-4 h-4" /> View liquidGL on GitHub
              </a>
            </div>
          </div>

          {/* Right Column (6 Cols): Monumental 3D Monolith Scene */}
          <div className="lg:col-span-6 relative h-[420px] md:h-[500px] flex items-center justify-center">
            <div ref={containerRef} className="w-full h-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
