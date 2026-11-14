import React, { useState } from 'react';
import { Play, Sparkles, Activity, FastForward, RotateCcw } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const MotionFirstPage: React.FC = () => {
  const [springBounces, setSpringBounces] = useState(0);

  return (
    <div className="min-h-screen bg-[#0A0D18] text-white font-sans selection:bg-[#84CC16] selection:text-black p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Motion Header */}
        <header className="p-6 rounded-3xl bg-[#13192B] border border-lime-500/30 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#84CC16] text-black font-black flex items-center justify-center text-xl shadow-lg shadow-lime-500/20">
              ⚡
            </div>
            <div>
              <div className="text-xl font-black font-space italic text-white">KINETIX MOTION</div>
              <div className="text-[10px] font-mono tracking-widest text-[#84CC16] uppercase">
                REAL-TIME PHYSICS & MOTION-FIRST WEB ENGINE
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-space font-bold uppercase text-slate-300">
            <a href="#springs" className="hover:text-[#84CC16] transition-colors">SPRING DYNAMICS</a>
            <a href="#gallery" className="hover:text-[#84CC16] transition-colors">VELOCITY FRAMES</a>
            <a href="#gestures" className="hover:text-[#84CC16] transition-colors">TOUCH INERTIA</a>
          </div>

          <button 
            onClick={() => setSpringBounces(b => b + 1)}
            className="px-5 py-2.5 rounded-full bg-[#84CC16] hover:bg-[#a3e635] text-black font-space font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-lime-500/20"
          >
            Trigger Spring Bounce ({springBounces})
          </button>
        </header>

        {/* Hero Section: Interactive Physics Dynamics */}
        <section className="text-center space-y-6 py-12 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/15 border border-lime-500/40 text-[#84CC16] text-xs font-mono uppercase tracking-wider">
            <Activity size={14} /> ZERO RIGID KEYFRAMES • 100% NUMERICAL PHYSICS
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-space italic tracking-tight text-white leading-none">
            INTERFACES THAT <br />
            <span className="text-[#84CC16]">BEND WITH MASS.</span>
          </h1>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Every element in Kinetix possesses physical weight, spring stiffness, and damping coefficients. When dragged or released, items recoil and settle with authentic real-world inertia.
          </p>

          {/* Hero High Speed Fluid Motion Box */}
          <div className="pt-8">
            <div className="p-6 rounded-3xl bg-[#13192B] border border-lime-500/30 max-w-3xl mx-auto space-y-6 text-left shadow-2xl">
              <ImageBox
                src={MEDIA_ASSETS.motionFirst.highSpeedFluid}
                alt="High Speed Dynamic Fluid Dynamics"
                aspectRatio="16/9"
                caption="High-speed dynamic trajectory analysis with physical spring resistance and fluid displacement."
                className="rounded-2xl overflow-hidden border border-lime-500/20"
              />

              {/* Interactive Spring Bounce Trigger */}
              <div 
                onClick={() => setSpringBounces(b => b + 1)}
                className="p-6 rounded-2xl bg-[#1C253D] border border-lime-500/40 text-center cursor-pointer shadow-lg transition-transform active:scale-95 hover:scale-[1.02] duration-200"
              >
                <div className="text-3xl mb-2 animate-bounce" style={{ animationDuration: '0.8s' }}>
                  🎾
                </div>
                <h4 className="font-space font-bold text-lg text-white">Click To Spring Recoil (Bounce #{springBounces})</h4>
                <p className="text-xs text-lime-400 font-mono mt-1">Stiffness: 380 | Damping: 24 | Mass: 1.4kg</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Velocity Infinite Marquee */}
        <section className="py-2">
          <InfiniteImageMarquee
            speed="fast"
            images={[
              { src: MEDIA_ASSETS.motionFirst.highSpeedFluid, title: 'High Speed Fluid' },
              { src: MEDIA_ASSETS.motionFirst.velocityShockwave, title: 'Velocity Shockwave' },
              { src: MEDIA_ASSETS.kineticMotion.motionBlurHighSpeed, title: 'Kinetic Blur' },
              { src: MEDIA_ASSETS.kineticMotion.velocityLines, title: 'Velocity Lines' }
            ]}
          />
        </section>

        {/* 3 Physics Capabilities */}
        <section id="springs" className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-white/10">
          <div className="p-8 rounded-3xl bg-[#13192B] border border-white/10 space-y-3">
            <span className="text-xs font-mono text-[#84CC16]">ENGINE 01</span>
            <h3 className="text-2xl font-bold font-space text-white">Continuous Velocity Handoff</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Releasing a swipe gesture transfers finger momentum seamlessly into scroll physics without unnatural deceleration thresholds.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#13192B] border border-white/10 space-y-3">
            <span className="text-xs font-mono text-cyan-400">ENGINE 02</span>
            <h3 className="text-2xl font-bold font-space text-white">Fluid Rubber-Banding</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Boundary edges stretch with progressive logarithmic resistance, giving users intuitive physical feedback when limits are reached.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#13192B] border border-white/10 space-y-3">
            <span className="text-xs font-mono text-[#84CC16]">ENGINE 03</span>
            <h3 className="text-2xl font-bold font-space text-white">Magnetic Snap Points</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Cards gravitate towards alignment anchors with organic soft landings, eliminating jarring instant snap cuts.
            </p>
          </div>
        </section>

        {/* Velocity Gallery */}
        <section id="gallery" className="space-y-6 pt-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <h2 className="text-2xl font-black font-space italic text-white">120 FPS VELOCITY TRAJECTORIES</h2>
            <span className="text-xs font-mono text-[#84CC16]">HIGH-SPEED INERTIA CAPTURE</span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.motionFirst.velocityShockwave,
                title: 'Shockwave Handoff',
                subtitle: 'Zero friction velocity preservation',
                category: 'KINETICS'
              },
              {
                src: MEDIA_ASSETS.kineticMotion.motionBlurHighSpeed,
                title: 'Radial Blur',
                subtitle: 'Rotational inertia dampening',
                category: 'BLUR SHADER'
              },
              {
                src: MEDIA_ASSETS.motionFirst.highSpeedFluid,
                title: 'Fluid Wake',
                subtitle: 'Viscosity particle resistance',
                category: 'AERO'
              }
            ]}
          />
        </section>

        {/* Motion Footer */}
        <footer className="p-8 rounded-3xl bg-[#13192B] border border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <div>KINETIX ENGINE • SAN FRANCISCO & STOCKHOLM</div>
          <div>MOTION-FIRST WEB EXPERIENCES • © 2026</div>
        </footer>
      </div>
    </div>
  );
};
