import React, { useState } from 'react';
import { Compass, Shield, Radio, Activity, Target, AlertCircle, Rocket } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const SciFiPage: React.FC = () => {
  const [shieldCapacity, setShieldCapacity] = useState(94);
  const [warpLock, setWarpLock] = useState(false);

  return (
    <div className="min-h-screen bg-[#030612] text-[#F59E0B] font-mono selection:bg-[#06B6D4] selection:text-black p-4 sm:p-8 relative overflow-hidden">
      {/* Sci-Fi Tactical Reticle Background */}
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Fleet Orbital Command Header Bar */}
        <header className="p-4 sm:p-6 bg-[#080E24] border-2 border-[#F59E0B] shadow-[0_0_20px_rgba(245,158,11,0.2)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#F59E0B] text-black font-black flex items-center justify-center text-xl shadow-[0_0_10px_#F59E0B]">
              🚀
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black font-orbitron tracking-widest text-[#F59E0B]">
                AETHER STATION FLEET COMMAND
              </div>
              <div className="text-[10px] text-[#06B6D4] tracking-wider uppercase">
                ORBITAL DEFENSE TELEMETRY • SECTOR 04 // DEFCON 2
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-bold text-[#06B6D4]">
            <a href="#radar" className="hover:text-[#F59E0B] transition-colors">RADAR SWEEP</a>
            <a href="#telemetry" className="hover:text-[#F59E0B] transition-colors">QUANTUM WARP</a>
            <a href="#drones" className="hover:text-[#F59E0B] transition-colors">DRONE SWARM</a>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#06B6D4]">SHIELDS:</span>
            <span className="font-bold text-[#F59E0B]">{shieldCapacity}%</span>
          </div>
        </header>

        {/* Hero Section: Radar Sweep & Tactical Telemetry */}
        <section className="text-center space-y-6 py-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F59E0B]/10 border border-[#F59E0B] text-xs font-mono uppercase tracking-widest text-[#F59E0B]">
            <Target size={14} className="animate-spin text-[#06B6D4]" /> DEEP SPACE TACTICAL ARRAY ONLINE
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-orbitron tracking-tight text-white uppercase drop-shadow-[0_0_20px_#F59E0B] leading-none">
            ORBITAL FLEET <br />
            <span className="text-[#06B6D4] drop-shadow-[0_0_20px_#06B6D4]">COMMAND.</span>
          </h1>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-300 font-mono leading-relaxed">
            Real-time sub-space quantum telemetry monitoring 1,400 orbital defense satellites and asteroid interception shields across the Solar Kuiper Belt.
          </p>

          {/* Hero Visual Composition: Orbital Space Station */}
          <div className="pt-6 max-w-4xl mx-auto p-3 bg-[#080E24] border-2 border-[#06B6D4] shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            <ImageBox
              src={MEDIA_ASSETS.sciFi.orbitalStation}
              alt="Orbital Defense Deep Space Superstation in High Earth Orbit"
              aspectRatio="16/9"
              rounded="none"
              caption="Sector 04 Orbital Defense Grid: Tracking 2,800 interplanetary trajectories in real time"
            />
          </div>

          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setWarpLock(!warpLock)}
              className="px-8 py-4 bg-[#F59E0B] hover:bg-[#d97706] text-black font-orbitron font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_#F59E0B] cursor-pointer transition-all flex items-center gap-2"
            >
              <Activity size={16} /> {warpLock ? 'WARP DRIVE CHARGING (100%)' : 'INITIATE WARP CONVERGENCE'}
            </button>
            <button 
              onClick={() => setShieldCapacity(100)}
              className="px-8 py-4 bg-[#080E24] border-2 border-[#06B6D4] text-[#06B6D4] font-orbitron font-bold text-xs uppercase tracking-wider hover:bg-[#06B6D4] hover:text-black transition-all cursor-pointer"
            >
              RECHARGE DEFLECTORS
            </button>
          </div>
        </section>

        {/* Infinite Orbital Telemetry Marquee */}
        <div className="border-2 border-[#F59E0B] bg-[#080E24] p-2">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.sciFi.orbitalStation, title: 'Orbital Station Aether', tag: 'DEFCON 2' },
              { src: MEDIA_ASSETS.sciFi.commandTelemetry, title: 'Deep Space Telemetry', tag: 'RADAR' },
              { src: MEDIA_ASSETS.wireframe.cadSchematic, title: 'Sub-Space Quantum Flux', tag: 'WARP' },
              { src: MEDIA_ASSETS.terminal.serverAisles, title: 'Mainframe Defense Core', tag: 'TERABYTES' }
            ]}
          />
        </div>

        {/* Tactical Fleet Hexagonal Matrix Gallery */}
        <section id="radar" className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b-2 border-[#F59E0B]/30 pb-3">
            <h3 className="text-2xl font-black font-orbitron text-white">Orbital Defense Modules</h3>
            <span className="font-mono text-xs text-[#06B6D4]">SUBSPACE SENSOR ARRAYS</span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.sciFi.commandTelemetry,
                title: 'Graviton Wave Sensor Array',
                subtitle: 'Interferometer arrays detecting micro-fluctuations in spacetime fabric before hyper exits',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.wireframe.cadSchematic,
                title: 'Tachyon Interceptor Cannon',
                subtitle: 'Synchronized orbital particle cannons tracking incoming debris at 70 km/s',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.sciFi.orbitalStation,
                title: 'Aether Fleet Command Hub',
                subtitle: 'Main orbital docking hub supporting 600 autonomous drones and patrol cutters',
                aspectRatio: '4/3'
              }
            ]}
          />
        </section>

        {/* Sci-Fi Footer */}
        <footer className="p-6 border-t border-[#F59E0B]/30 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>AETHER STATION ORBITAL COMMAND • SECTOR 04, KUIPER REGION</div>
          <div>QUANTUM SENSOR ARRAYS • ALL SYSTEMS NOMINAL • © 2142–2026</div>
        </footer>
      </div>
    </div>
  );
};
