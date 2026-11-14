import React, { useState } from 'react';
import { ArrowUpRight, FastForward, Activity, Zap, Play, Volume2 } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const KineticBrutalismPage: React.FC = () => {
  const [velocityFPS, setVelocityFPS] = useState<number>(120);

  return (
    <div className="min-h-screen bg-[#CBD5E1] text-[#09090B] font-sans selection:bg-[#FF5500] selection:text-white relative overflow-x-hidden">
      
      {/* High-Velocity Looping Marquee Ribbon */}
      <div className="bg-[#09090B] text-[#00FFFF] py-3 border-b-4 border-black overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-[marquee_12s_linear_infinite] text-sm font-black font-mono uppercase tracking-widest">
          ⚡ CONCRETE VELOCITY // 120 FPS STRUCTURAL CINEMA // HEAVY SLABS IN HIGH KINETIC FLIGHT // MAXIMUM GRAVITY IMPACT // RAW INDUSTRIAL ENERGY // ⚡
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Brutalist Raw Concrete Header */}
        <header className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_#09090B] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FF5500] border-3 border-black flex items-center justify-center text-white font-black text-2xl shadow-[4px_4px_0px_#09090B]">
              <FastForward className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black uppercase tracking-tight font-syne leading-none">
                CONCRETE <span className="text-[#FF5500]">VELOCITY</span>
              </div>
              <div className="text-xs font-mono font-bold tracking-widest text-[#09090B]/70 uppercase">
                EXTREME MOTION STUDIO • RAW STRUCTURAL ACTION
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-[#09090B] text-[#00FFFF] px-3 py-1 text-xs font-mono font-bold border-2 border-black">
              CAPTURE RATE: {velocityFPS} FPS
            </div>
            <button 
              onClick={() => setVelocityFPS(prev => prev === 120 ? 240 : 120)}
              className="px-4 py-2 bg-[#FF5500] text-white font-mono text-xs uppercase font-black border-2 border-black shadow-[4px_4px_0px_#09090B] hover:bg-black transition-colors cursor-pointer"
            >
              BOOST OVERCLOCK
            </button>
          </div>
        </header>

        {/* Hero Section: Heavy Concrete Monolith in Kinetic Velocity */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-[#09090B] text-[#00FFFF] font-mono text-xs font-black uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_#FF5500] transform -rotate-1">
              HEAVYWEIGHT BRUTALISM SLAMMED AT HIGH SPEED
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.88] font-syne">
              RAW SLABS. <br />
              <span className="text-[#FF5500] bg-white px-3 border-4 border-black inline-block transform rotate-1 shadow-[6px_6px_0px_#09090B]">
                UNSTOPPABLE
              </span> <br />
              MOMENTUM.
            </h1>

            <p className="text-base sm:text-lg font-bold text-[#09090B]/80 max-w-xl font-mono leading-relaxed">
              We shoot high-speed cinema for extreme downhill descents, rally stages, 
              and monumental architecture. We don't glide or float—we smash into the screen 
              with raw asphalt texture and 240 frames of uncompressed shutter speed.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-8 py-4 bg-[#09090B] text-white font-mono text-xs uppercase font-black tracking-widest border-4 border-black shadow-[6px_6px_0px_#FF5500] hover:bg-[#FF5500] transition-all transform hover:-translate-y-1 cursor-pointer">
                LAUNCH HIGH-FPS SHOWREEL
              </button>
              <div className="flex items-center gap-2 text-xs font-mono font-bold">
                <Activity className="w-4 h-4 text-[#FF5500]" />
                SHUTTER ANGLE: 180° GLOBAL SHUTTER
              </div>
            </div>
          </div>

          {/* Hero High-Velocity Cinema ImageBox */}
          <div className="lg:col-span-5">
            <div className="bg-white border-4 border-black p-4 shadow-[10px_10px_0px_#09090B] space-y-4">
              <div className="flex justify-between items-center text-xs font-mono font-bold border-b-2 border-black pb-2">
                <span>CINEMA SLATE: #08</span>
                <span className="text-[#FF5500]">RED RAPTOR 8K</span>
              </div>

              <ImageBox
                src={MEDIA_ASSETS.kineticBrutalism.downhillSpeedAction}
                alt="High-Speed Extreme Downhill Kinetic Action"
                aspectRatio="4/3"
                caption="High-speed 240 FPS shutter capture of extreme downhill velocity through alpine terrain."
                className="border-2 border-black"
              />

              {/* Kinetic Speedometer */}
              <div className="bg-[#09090B] p-4 text-center space-y-1 border-2 border-black text-[#00FFFF]">
                <div className="text-4xl font-black font-syne tracking-tight">
                  {velocityFPS} <span className="text-lg font-mono text-white">FPS</span>
                </div>
                <div className="text-[11px] font-mono text-white/70">
                  DYNAMIC RANGE: 17+ STOPS • GLOBAL SHUTTER
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* High-Velocity Marquee */}
        <section className="py-2 border-y-4 border-black bg-white">
          <InfiniteImageMarquee
            speed="fast"
            images={[
              { src: MEDIA_ASSETS.kineticBrutalism.downhillSpeedAction, title: 'Extreme Alpine Downhill', tag: '240FPS' },
              { src: MEDIA_ASSETS.kineticBrutalism.rawAsphaltDrift, title: 'Asphalt Tire Smoke', tag: '1000FPS' },
              { src: MEDIA_ASSETS.brutalism.barbicanConcrete, title: 'Concrete Monolith Slabs', tag: 'BRUTAL' },
              { src: MEDIA_ASSETS.motionFirst.velocityShockwave, title: 'Supersonic Fluid Wake', tag: 'KINETIC' }
            ]}
          />
        </section>

        {/* 3 Action Film Case Studies Gallery */}
        <section className="space-y-6 pt-4">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl font-black uppercase tracking-tight font-syne">
              MOMENTUM PRODUCTIONS
            </h2>
            <div className="h-2 flex-1 bg-black" />
            <span className="text-xs font-mono font-bold bg-[#09090B] text-white px-3 py-1">
              SEASON 2026
            </span>
          </div>

          <ImageGallery
            columns={3}
            theme="pop"
            items={[
              {
                src: MEDIA_ASSETS.kineticBrutalism.downhillSpeedAction,
                title: 'Alpine Downhill Rift',
                subtitle: 'Val d’Isère Chute 80mph',
                category: 'ACTION CINEMA'
              },
              {
                src: MEDIA_ASSETS.kineticBrutalism.rawAsphaltDrift,
                title: 'Brutalist Asphalt Drift',
                subtitle: 'Rotterdam Port Terminal 1000fps',
                category: 'MOTORSPORT'
              },
              {
                src: MEDIA_ASSETS.brutalism.barbicanConcrete,
                title: 'Concrete Monolith Vault',
                subtitle: 'London Barbican raw textured balconies',
                category: 'ARCHITECTURE'
              }
            ]}
          />
        </section>

        {/* Footer */}
        <footer className="border-t-4 border-black pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono font-bold uppercase">
          <div>
            CONCRETE VELOCITY FILMS // HIGH-SPEED INDUSTRIAL MOTION
          </div>
          <div>
            POWER, MASS &amp; ACCELERATION • 2026
          </div>
        </footer>

      </div>
    </div>
  );
};
