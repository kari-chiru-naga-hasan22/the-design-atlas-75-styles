import React, { useState } from 'react';
import { Gauge, ArrowRight, Zap, RefreshCw, MoveRight, Activity, Disc } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const KineticDesignPage: React.FC = () => {
  const [velocity, setVelocity] = useState(85);

  return (
    <div className="min-h-screen bg-[#080B14] text-white font-sans selection:bg-[#1D4ED8] selection:text-white p-4 sm:p-8 overflow-hidden">
      {/* High-Velocity Marquee Loops */}
      <div className="bg-[#1D4ED8] text-white py-2 text-xs font-mono font-black uppercase tracking-widest overflow-hidden -mx-4 sm:-mx-8 mb-8 border-y-2 border-white">
        <div 
          className="animate-marquee whitespace-nowrap flex gap-12 font-space italic"
          style={{ animationDuration: `${Math.max(6, 40 - velocity * 0.3)}s` }}
        >
          <span>/// MOMENTUM LABS: CHOREOGRAPHED DIGITAL VELOCITY</span>
          <span>PHYSICS INERTIA ENGINE AT 120 FPS</span>
          <span>CURRENT SPEED: {velocity} M/S</span>
          <span>MASS × ACCELERATION = FORCE</span>
          <span>/// MOMENTUM LABS: CHOREOGRAPHED DIGITAL VELOCITY</span>
        </div>
      </div>

      {/* Kinetic Navbar */}
      <header className="max-w-7xl mx-auto flex items-center justify-between border-b border-white/20 pb-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#F97316] text-black font-black flex items-center justify-center text-xl italic font-space">
            K
          </div>
          <div>
            <div className="text-2xl font-black font-space italic tracking-tighter text-white">
              MOMENTUM.LABS
            </div>
            <div className="text-[10px] font-mono text-[#F97316] uppercase">
              CHOREOGRAPHED KINETIC INTERACTION STUDIO
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-space font-bold uppercase tracking-wider text-white/70">
          <a href="#choreo" className="hover:text-[#F97316] transition-colors">CHOREOGRAPHY</a>
          <a href="#springs" className="hover:text-[#F97316] transition-colors">SPRING CONSTANTS</a>
          <a href="#physics" className="hover:text-[#F97316] transition-colors">INTERTIA API</a>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-[#F97316] bg-black/50 px-3 py-1.5 rounded-lg border border-white/20">
          <Gauge size={16} />
          <span>{velocity} M/S</span>
        </div>
      </header>

      {/* Hero Section: Dynamic Velocity Typography */}
      <section className="max-w-7xl mx-auto py-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D4ED8]/20 border border-[#1D4ED8] text-white text-xs font-mono uppercase tracking-wider">
          <Zap size={14} className="text-[#F97316]" /> CHOREOGRAPHED PHYSICAL MOMENTUM
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-space italic tracking-tight uppercase leading-[0.9] text-white">
          MASS. <br />
          <span className="text-[#F97316]">VELOCITY.</span> <br />
          INERTIA.
        </h1>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-white/70 font-light leading-relaxed font-sans">
          Static interfaces belong in the print museum. We engineer web experiences that respond to physical finger acceleration, mass, dampening springs, and continuous kinetic recoil.
        </p>

        {/* Velocity Slider Control */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/20 font-mono text-xs">
            <span className="text-[#F97316]">CHOREOGRAPHY SPEED:</span>
            <input 
              type="range" min="20" max="120" value={velocity} 
              onChange={(e) => setVelocity(Number(e.target.value))} 
              className="accent-[#F97316] cursor-pointer"
            />
            <span className="text-white font-bold">{velocity} M/S</span>
          </div>

          <button className="px-8 py-3.5 bg-[#1D4ED8] hover:bg-blue-600 text-white font-space font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2">
            Accelerate Workspace <MoveRight size={16} />
          </button>
        </div>

        {/* Hero Visual Composition: High-Speed Motion Trails */}
        <div className="pt-6 max-w-4xl mx-auto p-2 bg-[#101424] border-2 border-[#1D4ED8] rounded-2xl shadow-[0_0_35px_rgba(29,78,216,0.3)]">
          <ImageBox
            src={MEDIA_ASSETS.kineticMotion.motionBlurHighSpeed}
            alt="Stroboscopic High Velocity Motion Blur Trajectory"
            aspectRatio="16/9"
            rounded="xl"
            caption="120 FPS physics spring integration with zero latency input interpolation"
          />
        </div>
      </section>

      {/* Infinite Kinetic Speed Marquee */}
      <section className="py-6 border-y border-white/20 bg-[#101424] my-8">
        <InfiniteImageMarquee
          speed="fast"
          images={[
            { src: MEDIA_ASSETS.kineticMotion.motionBlurHighSpeed, title: 'Velocity Streaks 120FPS', tag: 'RK4 SPRING' },
            { src: MEDIA_ASSETS.kineticMotion.velocityLines, title: 'Linear Acceleration', tag: 'INERTIA' },
            { src: MEDIA_ASSETS.motionFirst.highSpeedFluid, title: 'Fluid Hydrodynamics', tag: 'TURBULENCE' },
            { src: MEDIA_ASSETS.synthwave.deloreanGrid, title: 'High-G Recoil', tag: 'MOMENTUM' }
          ]}
        />
      </section>

      {/* Kinetic Physics Conveyor Grid */}
      <section className="max-w-7xl mx-auto py-12 space-y-12">
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-white/20 pb-4">
          <div>
            <span className="text-xs font-mono text-[#F97316] uppercase tracking-widest">SPRING DYNAMICS</span>
            <h2 className="text-3xl sm:text-5xl font-black font-space italic text-white mt-1">Choreographed Velocity Engine</h2>
          </div>
          <span className="font-mono text-xs text-white/50">SUB-MILLISECOND GPU TIME</span>
        </div>

        <ImageGallery
          columns={3}
          theme="dark"
          items={[
            {
              src: MEDIA_ASSETS.kineticMotion.velocityLines,
              title: 'Elastic Snap Boundary',
              subtitle: 'Continuous momentum carryover with non-linear spring return mechanics',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.motionFirst.highSpeedFluid,
              title: 'Viscous Fluid Dampening',
              subtitle: 'Fluid mechanics drag coefficients applied to heavy data table horizontal scrolls',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.kineticMotion.motionBlurHighSpeed,
              title: 'Stroboscopic Motion Vectors',
              subtitle: 'Sub-pixel coordinate motion tracking ensuring zero display jitter on high-refresh OLED panels',
              aspectRatio: '4/3'
            }
          ]}
        />
      </section>

      {/* Kinetic Footer */}
      <footer className="max-w-7xl mx-auto border-t border-white/20 py-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-white/40 gap-4">
        <div>MOMENTUM LABS • MOTION ARCHITECTURE • ZÜRICH & SAN FRANCISCO</div>
        <div>PHYSICS ENGINE FOR CREATIVE INTERFACES • © 2026</div>
      </footer>
    </div>
  );
};
