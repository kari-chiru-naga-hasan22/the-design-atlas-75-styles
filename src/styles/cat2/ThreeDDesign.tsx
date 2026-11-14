import React, { useState } from 'react';
import { Box, Layers, Eye, Compass, Move3d, Sparkles, ArrowRight } from 'lucide-react';
import { ImageBox, ImageGallery } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const ThreeDDesignPage: React.FC = () => {
  const [rotX, setRotX] = useState(25);
  const [rotY, setRotY] = useState(45);

  const dimensionalWorlds = [
    {
      title: 'ISOMETRIC TOPOLOGY ENGINE',
      subtitle: 'Real-time WebGL polygon subdivision with raytraced specular reflection.',
      category: 'VOLUMETRIC MESH',
      year: 'WEBGL 2.0',
      src: MEDIA_ASSETS.threeDDesign.isometricRenders,
      aspectRatio: '4/3' as const
    },
    {
      title: 'VOXEL REALM CHRONICLES',
      subtitle: 'Procedural voxel terrain generation streaming at 120 frames per second.',
      category: 'PROCEDURAL WORLD',
      year: 'GPU ACCELERATED',
      src: MEDIA_ASSETS.threeDDesign.spatialVoxel,
      aspectRatio: '4/3' as const
    }
  ];

  return (
    <div className="min-h-screen bg-[#070A14] text-white font-sans selection:bg-[#00F0FF] selection:text-black overflow-hidden relative">
      {/* 3D Atmospheric Depth Grid & Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* 3D Dimensional Navbar */}
      <nav className="relative z-20 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/10 sticky top-0 bg-[#070A14]/90 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-black shadow-lg shadow-cyan-500/20">
            <Move3d size={22} className="text-white" />
          </div>
          <div>
            <div className="text-xl font-black font-orbitron tracking-wider text-white">DIMENSION ZERO</div>
            <div className="text-[10px] font-mono text-cyan-400">VOLUMETRIC WEB REALMS</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-orbitron tracking-widest text-white/70">
          <a href="#worlds" className="hover:text-cyan-400 transition-colors">WORLDS</a>
          <a href="#cube" className="hover:text-cyan-400 transition-colors">CUBE ENGINE</a>
        </div>

        <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold font-orbitron text-xs tracking-wider transition-all shadow-lg shadow-cyan-500/20 cursor-pointer">
          Launch Canvas
        </button>
      </nav>

      {/* Hero Section: Volumetric 3D Scene with Real Render Showcase */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-orbitron">
          <Sparkles size={14} /> THREE.JS &amp; WEBGL CREATIVE ENGINE
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-orbitron tracking-tight text-white leading-tight">
          BUILD THE WEB IN <br />
          <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            TRUE 3D SPACE.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/70 font-light leading-relaxed">
          Break out of flat 2D viewport rectangles. Dimension Zero renders interactive volumetric environments, dynamic lighting reflections, and realtime camera projections.
        </p>

        {/* 3D Visual Mesh Showcase */}
        <div className="max-w-4xl mx-auto rounded-3xl p-4 bg-white/5 border border-white/20 backdrop-blur-xl shadow-2xl">
          <ImageBox
            src={MEDIA_ASSETS.threeDDesign.isometricRenders}
            alt="Interactive 3D Dimensional Architectural Mesh"
            aspectRatio="16/9"
            rounded="2xl"
            tag="RAYTRACED VOLUMETRIC SCENE"
          />
        </div>

        {/* Interactive 3D CSS Cube Manipulator */}
        <div id="cube" className="pt-8 flex flex-col items-center justify-center space-y-6">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            DRAG CONTROLLERS TO ROTATE POLYGON MATRIX:
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => setRotY(y => y + 45)}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-xs font-orbitron"
            >
              Y-AXIS +45°
            </button>
            <button 
              onClick={() => setRotX(x => x + 45)}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-xs font-orbitron"
            >
              X-AXIS +45°
            </button>
          </div>
        </div>
      </section>

      {/* 2-Column Dimensional Worlds Gallery */}
      <section id="worlds" className="relative z-10 max-w-7xl mx-auto px-6 py-16 space-y-8 border-t border-white/10">
        <div className="flex justify-between items-end border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-orbitron uppercase text-cyan-400">
              GPU RUNTIME
            </span>
            <h2 className="text-3xl font-orbitron font-bold text-white mt-1">
              Volumetric Worlds
            </h2>
          </div>
          <span className="text-xs font-mono text-white/50">WEBGL 2.0 PIXEL SHADERS</span>
        </div>

        <ImageGallery items={dimensionalWorlds} columns={2} theme="dark" />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-xs font-mono text-white/40">
        DIMENSION ZERO // PROCEDURAL 3D WEB REALMS • 2026
      </footer>
    </div>
  );
};
