import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Orbit, Sparkles } from 'lucide-react';

export function LiquidMotionScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 550;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // Studio Environment for high-end glass refraction
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const envScene = new THREE.Scene();
    const bgSphere = new THREE.Mesh(
      new THREE.SphereGeometry(15, 32, 16),
      new THREE.MeshBasicMaterial({ color: 0x07060f, side: THREE.BackSide })
    );
    envScene.add(bgSphere);

    // Gradient glow light emitters
    const addLightSlab = (col: number, pos: [number, number, number], rot: [number, number, number]) => {
      const slab = new THREE.Mesh(
        new THREE.PlaneGeometry(10, 10),
        new THREE.MeshBasicMaterial({ color: col })
      );
      slab.position.set(...pos);
      slab.rotation.set(...rot);
      envScene.add(slab);
    };

    addLightSlab(0x8b5cf6, [-8, 6, -5], [0, 0.5, 0]);
    addLightSlab(0x06b6d4, [8, -5, -6], [0, -0.5, 0]);
    addLightSlab(0xf97316, [0, 8, -4], [0.5, 0, 0]);

    scene.environment = pmremGenerator.fromScene(envScene).texture;

    // Materials
    const crystalGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.96,
      roughness: 0.03,
      ior: 1.55,
      thickness: 2.0,
      clearcoat: 1.0,
      specularIntensity: 1.0,
      transparent: true,
    });

    const violetGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0xc084fc,
      transmission: 0.92,
      roughness: 0.08,
      ior: 1.48,
      thickness: 1.8,
      transparent: true,
    });

    const cyanGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transmission: 0.94,
      roughness: 0.05,
      ior: 1.5,
      thickness: 1.6,
      transparent: true,
    });

    const amberGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0xfbbf24,
      transmission: 0.9,
      roughness: 0.1,
      ior: 1.58,
      thickness: 2.2,
      transparent: true,
    });

    // Meshes array
    const objects: { mesh: THREE.Mesh; rotSpeed: [number, number, number]; floatSpeed: number; floatAmp: number; basePos: [number, number, number] }[] = [];

    // 1. Central Glass Torus
    const torusMesh = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.38, 32, 100), crystalGlassMat);
    torusMesh.position.set(0, 0, 0);
    scene.add(torusMesh);
    objects.push({ mesh: torusMesh, rotSpeed: [0.005, 0.008, 0.003], floatSpeed: 1.2, floatAmp: 0.15, basePos: [0, 0, 0] });

    // 2. Violet Bevelled Cube
    const cubeMesh = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.3, 1.3), violetGlassMat);
    cubeMesh.position.set(-3.2, 1.4, -1);
    scene.add(cubeMesh);
    objects.push({ mesh: cubeMesh, rotSpeed: [0.008, 0.006, 0.004], floatSpeed: 1.8, floatAmp: 0.25, basePos: [-3.2, 1.4, -1] });

    // 3. Cyan Sphere with Caustic Refraction
    const sphereMesh = new THREE.Mesh(new THREE.SphereGeometry(1.0, 48, 48), cyanGlassMat);
    sphereMesh.position.set(3.4, -1.2, 0.5);
    scene.add(sphereMesh);
    objects.push({ mesh: sphereMesh, rotSpeed: [0.003, 0.005, 0.002], floatSpeed: 1.5, floatAmp: 0.2, basePos: [3.4, -1.2, 0.5] });

    // 4. Amber Octahedron Crystal
    const octaMesh = new THREE.Mesh(new THREE.OctahedronGeometry(1.1, 0), amberGlassMat);
    octaMesh.position.set(-2.8, -1.8, 0.8);
    scene.add(octaMesh);
    objects.push({ mesh: octaMesh, rotSpeed: [-0.007, 0.009, 0.005], floatSpeed: 2.0, floatAmp: 0.18, basePos: [-2.8, -1.8, 0.8] });

    // 5. Thin Curved Glass Sheet
    const sheetGeo = new THREE.CylinderGeometry(1.8, 1.8, 0.06, 32, 1, false, 0, Math.PI);
    const sheetMesh = new THREE.Mesh(sheetGeo, crystalGlassMat);
    sheetMesh.position.set(2.6, 2.0, -1.2);
    sheetMesh.rotation.z = Math.PI / 4;
    scene.add(sheetMesh);
    objects.push({ mesh: sheetMesh, rotSpeed: [0.004, -0.006, 0.008], floatSpeed: 1.4, floatAmp: 0.22, basePos: [2.6, 2.0, -1.2] });

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.8);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 4, 15);
    purpleLight.position.set(-4, 3, 2);
    scene.add(purpleLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 3.5, 15);
    cyanLight.position.set(4, -3, 2);
    scene.add(cyanLight);

    // Mouse movement
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      targetMouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener('mousemove', handleMouseMove);

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

      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      camera.position.x = currentMouseX * 1.2;
      camera.position.y = currentMouseY * 0.8;
      camera.lookAt(0, 0, 0);

      objects.forEach((item) => {
        item.mesh.rotation.x += item.rotSpeed[0];
        item.mesh.rotation.y += item.rotSpeed[1];
        item.mesh.rotation.z += item.rotSpeed[2];
        item.mesh.position.y = item.basePos[1] + Math.sin(elapsed * item.floatSpeed) * item.floatAmp;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      pmremGenerator.dispose();
    };
  }, []);

  return (
    <section className="relative py-28 px-4 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-3">
            <Orbit className="w-3.5 h-3.5" />
            <span>STUDIO 3D CINEMATICS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-space tracking-tight text-white">
            GLASS IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400">MOTION</span>
          </h2>
        </div>
        <p className="text-sm md:text-base text-white/60 max-w-md font-mono">
          Physically based light transmission, internal caustics, and volumetric dispersion interacting in real-time 3D space.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-[500px] md:h-[600px] rounded-3xl border border-white/10 bg-[#06060c] shadow-[0_20px_70px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        <div className="absolute top-6 left-6 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs font-mono text-white/70">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Move cursor to orbit camera perspective</span>
        </div>

        <div className="absolute bottom-6 right-6 flex items-center gap-4 text-xs font-mono text-white/50">
          <span>5 PBR Refractive Prisms</span>
          <span>•</span>
          <span>Multi-pass Transmission</span>
        </div>
      </div>
    </section>
  );
}
