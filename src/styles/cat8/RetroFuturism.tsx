import React, { useState } from 'react';
import { Rocket, Orbit, Sparkles, Radio, Compass, ArrowUpRight } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const RetroFuturismPage: React.FC = () => {
  const [activeOrbitPhase, setActiveOrbitPhase] = useState<number>(2);

  const orbitalMissions = [
    { name: 'PROJECT SELENE I', objective: 'Establish pressurized lunar dome in the Sea of Tranquility', year: '1962', speed: '25,000 MPH' },
    { name: 'CHROME SPUTNIK V', objective: 'Triangulate planetary radio relays with cesium atomic clocks', year: '1964', speed: '18,500 MPH' },
    { name: 'AEROSPACE RAYGUN CRUISER', objective: 'Atmospheric hypersonic transit between New York and Tokyo in 45 minutes', year: '1968', speed: 'Mach 7.2' }
  ];

  return (
    <div className="min-h-screen bg-[#1E293B] text-[#FEF3C7] font-sans selection:bg-[#F97316] selection:text-white relative overflow-x-hidden">
      
      {/* Mid-Century Boomerang & Starburst Background Motif */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-full bg-[radial-gradient(#0D9488_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Googie Style Curved Boomerang Header */}
        <header className="bg-[#0F172A] border-4 border-[#0D9488] p-5 rounded-3xl shadow-[0px_0px_30px_rgba(13,148,136,0.2)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center text-black font-black text-2xl border-2 border-[#FEF3C7]">
              🚀
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black uppercase tracking-wider font-orbitron text-[#FEF3C7]">
                SPACELAB <span className="text-[#0D9488]">1962</span>
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[#F97316] uppercase">
                THE ATOMIC DREAM OF LUNAR BASES • GOOGIE AEROSPACE ARCHIVES
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 bg-[#1E293B] px-3 py-1.5 rounded-full border border-[#0D9488]/40">
              <Orbit className="w-4 h-4 text-[#F97316] animate-spin" />
              <span>ORBIT TRACK: {orbitalMissions[activeOrbitPhase].speed}</span>
            </div>
          </div>
        </header>

        {/* Hero Section: Mid-Century Atomic Starburst & Moon Rockets */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F97316] text-black font-mono text-xs font-black uppercase tracking-widest rounded-full">
              <Sparkles className="w-4 h-4" />
              WORLD'S FAIR PAVILION OF TOMORROW
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight font-orbitron text-[#FEF3C7] leading-tight">
              THE ATOMIC <br />
              <span className="text-[#0D9488]">HORIZON</span> <br />
              OF 1962.
            </h1>

            <p className="text-base sm:text-lg text-[#FEF3C7]/80 max-w-xl font-space-grotesk leading-relaxed">
              Before cynicism, there was pure wonder. We envisioned cities under glass domes on Mars, 
              nuclear-powered passenger sedans cruising the Pan-American highway, 
              and family vacations to lunar orbital hotels by 1975.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-8 py-4 bg-[#F97316] text-black font-orbitron text-xs uppercase font-black tracking-widest rounded-full hover:bg-[#0D9488] hover:text-white transition-all shadow-[0px_0px_20px_rgba(249,115,22,0.4)] cursor-pointer">
                BOARD THE SATURN SHUTTLE
              </button>
              <div className="flex items-center gap-2 text-xs font-mono text-[#FEF3C7]/60">
                <Radio className="w-4 h-4 text-[#0D9488]" />
                TELEMETRY FREQUENCY: 1420 MHZ
              </div>
            </div>
          </div>

          {/* Hero TWA Flight Center Media Container */}
          <div className="lg:col-span-5">
            <div className="bg-[#0F172A] border-4 border-[#0D9488] p-4 rounded-3xl shadow-2xl space-y-4">
              <ImageBox
                src={MEDIA_ASSETS.retroFuturism.twaWingedTerminal}
                alt="TWA Flight Center Space Age Winged Terminal Pavilion"
                aspectRatio="4/3"
                caption="Eero Saarinen's 1962 Winged Flight Pavilion at JFK. The architectural pinnacle of the Space Age."
                className="rounded-2xl overflow-hidden border border-[#0D9488]"
              />

              <div className="space-y-2 pt-1">
                <div className="text-xs font-mono text-[#0D9488] uppercase tracking-wider">
                  MISSION PHASE SELECT:
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {orbitalMissions.map((mission, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveOrbitPhase(idx)}
                      className={`p-2 rounded-lg border text-[10px] font-mono transition-all cursor-pointer ${
                        activeOrbitPhase === idx
                          ? 'border-[#F97316] bg-[#F97316]/20 text-[#FEF3C7] font-bold'
                          : 'border-[#0D9488]/30 hover:border-[#0D9488] text-[#FEF3C7]/60'
                      }`}
                    >
                      {mission.year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Space Age Infinite Marquee */}
        <section className="py-2 border-y-4 border-[#0D9488] bg-[#0F172A]">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.retroFuturism.twaWingedTerminal, title: 'TWA Winged Pavilion', tag: 'SAARINEN' },
              { src: MEDIA_ASSETS.retroFuturism.spiknikSatellite, title: 'Chrome Sputnik Satellite', tag: 'ORBIT' },
              { src: MEDIA_ASSETS.sciFi.orbitalStation, title: 'Lunar Torus Station', tag: 'PAN-AM' },
              { src: MEDIA_ASSETS.synthwave.deloreanGrid, title: 'Atomic Horizon Grid', tag: 'WORLD FAIR' }
            ]}
          />
        </section>

        {/* Googie Architecture & Atomic Wonders Gallery */}
        <section className="space-y-6 pt-4">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-orbitron uppercase text-[#FEF3C7]">
              WONDERS OF THE ATOMIC CENTURY
            </h2>
            <div className="h-1 flex-1 bg-[#0D9488]" />
            <span className="text-xs font-mono bg-[#0D9488] text-black font-black px-2 py-0.5 rounded">
              PAN-AM SPACE FLEET
            </span>
          </div>

          <ImageGallery
            columns={3}
            theme="pop"
            items={[
              {
                src: MEDIA_ASSETS.retroFuturism.twaWingedTerminal,
                title: 'TWA Flight Center',
                subtitle: 'Thin-shell concrete cantilever wings',
                category: 'GOOGIE'
              },
              {
                src: MEDIA_ASSETS.retroFuturism.spiknikSatellite,
                title: 'Atomic Sputnik Sphere',
                subtitle: 'Polished aluminum telemetry beacon',
                category: 'AEROSPACE'
              },
              {
                src: MEDIA_ASSETS.sciFi.orbitalStation,
                title: 'Rotary Lunar Gateway',
                subtitle: 'Artificial gravity centrifuge concourse',
                category: 'ORBIT'
              }
            ]}
          />
        </section>

        {/* Footer */}
        <footer className="border-t border-[#0D9488]/40 pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#FEF3C7]/50">
          <div>
            SPACELAB 1962 // ATOMIC AEROSPACE HISTORICAL COMMISSION
          </div>
          <div>
            THE FUTURE WAS BRIGHTER THEN • 1962–2026
          </div>
        </footer>

      </div>
    </div>
  );
};
