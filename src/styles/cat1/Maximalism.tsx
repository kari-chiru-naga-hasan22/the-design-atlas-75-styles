import React, { useState } from 'react';
import { Sparkles, Flame, Volume2, Ticket, Zap, Radio, Globe, ArrowUpRight } from 'lucide-react';
import { ImageBox, InfiniteImageMarquee, ImageGallery } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const MaximalismPage: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<'FRI' | 'SAT' | 'SUN'>('FRI');

  const lineup = {
    FRI: [
      { artist: 'CYBER-CHRONIC DISCO', stage: 'HYPER-DOME', time: '23:00', genre: 'Industrial Gabber' },
      { artist: 'NEON SERPENT ORCHESTRA', stage: 'ACID JUNGLE', time: '01:00', genre: 'Modular Psych-Trance' },
      { artist: 'GLITCH WITCH & THE VOID', stage: 'NOISE CATHEDRAL', time: '02:45', genre: 'Breakcore Doom' }
    ],
    SAT: [
      { artist: 'ASTRAL TEKNO SHAMAN', stage: 'HYPER-DOME', time: '00:00', genre: 'Hardcore Rave' },
      { artist: 'PLASTIC CHROMATIC', stage: 'ACID JUNGLE', time: '02:15', genre: 'Hyperpop Punk' },
      { artist: 'DEATH BY SYNTHESIZER', stage: 'NOISE CATHEDRAL', time: '04:00', genre: 'Speedcore Drone' }
    ],
    SUN: [
      { artist: 'THE KINETIC RIOT CHOIR', stage: 'HYPER-DOME', time: '22:30', genre: 'Symphonic Noise' },
      { artist: 'LIQUID LASER CULT', stage: 'ACID JUNGLE', time: '00:30', genre: 'Acid Techno' },
      { artist: 'FINAL MATRIX COLLAPSE', stage: 'NOISE CATHEDRAL', time: '03:00', genre: 'Apocalyptic Ambient' }
    ]
  };

  const festivalVisuals = [
    { title: 'THE HYPER-DOME AT 3AM', src: MEDIA_ASSETS.maximalism.heroFestival, tag: 'HYPER-DOME' },
    { title: 'ACID JUNGLE LASER STAGE', src: MEDIA_ASSETS.maximalism.neonStreet, tag: 'ACID JUNGLE' },
    { title: 'PSYCHEDELIC PYRO CROWD', src: MEDIA_ASSETS.maximalism.crowdEnergy, tag: 'PYRO' },
    { title: 'KINETIC SOUND SHOCKWAVE', src: MEDIA_ASSETS.maximalism.colorfulArt, tag: 'MODULAR' }
  ];

  return (
    <div className="min-h-screen bg-[#0C021E] text-white overflow-x-hidden font-syne selection:bg-[#CCFF00] selection:text-black">
      {/* Top Warning Banner / Marquee */}
      <div className="bg-[#CCFF00] text-black py-2 overflow-hidden font-mono font-black text-xs uppercase tracking-widest border-b-4 border-black">
        <div className="animate-marquee whitespace-nowrap flex gap-8">
          <span>🚨 WARNING: EXTREME SENSORY SATURATION IN PROGRESS 🚨</span>
          <span>• 72 HOURS NON-STOP SOUND, FURY & OPTIC PYROTECHNICS •</span>
          <span>TICKETS 94% SOLD OUT</span>
          <span>• BERLIN TEMPELHOF SOUNDSTAGE •</span>
          <span>MORE IS NEVER ENOUGH •</span>
        </div>
      </div>

      {/* Wild Maximalist Navigation */}
      <nav className="p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4 border-b-4 border-[#FF0055] bg-[#170535]">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#FF0055] flex items-center justify-center font-black text-black text-xl rotate-12 shadow-[4px_4px_0_#CCFF00]">
            ⚡
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black italic tracking-tighter bg-gradient-to-r from-[#FF0055] via-[#CCFF00] to-[#00F0FF] bg-clip-text text-transparent">
              POLYCHROME
            </div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#CCFF00]">
              BIENNIAL CARNIVAL 2026
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 bg-[#0038FF] text-[#CCFF00] font-mono text-xs font-bold border-2 border-black rotate-[-3deg]">
            LIVE BROADCAST 📡
          </span>
          <button className="px-5 py-2.5 bg-[#FF0055] hover:bg-[#ff266f] text-white font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0_#CCFF00] hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer">
            GRAB WRISTBAND
          </button>
        </div>
      </nav>

      {/* Hero Section: Dense Layered Image & Typographic Collage */}
      <section className="relative px-4 sm:px-8 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-[#CCFF00] text-black font-mono font-black text-xs uppercase border-2 border-black rotate-[-2deg] shadow-[4px_4px_0_#FF0055]">
              OVERWHELM YOUR NERVOUS SYSTEM
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.88]">
              TOO MUCH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0055] via-[#CCFF00] to-[#00F0FF]">
                IS NEVER
              </span> <br />
              ENOUGH.
            </h1>

            <p className="text-lg sm:text-xl font-bold max-w-xl text-[#00F0FF] leading-snug">
              72 hours of deafening wall-of-sound synthesis, 400 lasers tearing through dry ice, and pure kaleidoscopic sensory excess.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-[#CCFF00] text-black font-black uppercase tracking-wider text-sm border-4 border-black shadow-[6px_6px_0_#FF0055] hover:translate-x-1 hover:translate-y-1 transition-transform">
                STAGE LINEUP &amp; TIMETABLE
              </button>
              <button className="px-6 py-4 bg-[#FF0055] text-white font-black uppercase tracking-wider text-sm border-4 border-black shadow-[6px_6px_0_#00F0FF]">
                CAMPING PASSES
              </button>
            </div>
          </div>

          {/* Overlapping Maximalist Photo Collage Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md h-[420px]">
              {/* Back Image: Neon Street */}
              <div className="absolute top-0 right-0 w-3/4 h-64 border-4 border-[#00F0FF] shadow-[8px_8px_0_#FF0055] transform rotate-6 overflow-hidden">
                <img
                  src={MEDIA_ASSETS.maximalism.neonStreet}
                  alt="Neon Street Night Carnival"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Front Image: Crowd Pyrotechnics */}
              <div className="absolute bottom-0 left-0 w-4/5 h-72 border-4 border-[#CCFF00] shadow-[10px_10px_0_#0C021E] transform -rotate-3 overflow-hidden">
                <img
                  src={MEDIA_ASSETS.maximalism.heroFestival}
                  alt="Festival Crowd Pyrotechnics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 px-3 py-1 bg-black text-[#CCFF00] font-mono text-xs font-black uppercase border border-[#CCFF00]">
                  TEMPELHOF 2026 LIVE
                </div>
              </div>

              {/* Sticker Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#FF0055] text-white border-4 border-black flex items-center justify-center font-black text-xs text-center uppercase rotate-12 shadow-[4px_4px_0_#CCFF00] z-20">
                100% RAW JOY
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Stage Marquee */}
      <section className="border-y-4 border-black bg-black py-4">
        <InfiniteImageMarquee images={festivalVisuals} speed="fast" />
      </section>

      {/* 3-Column Maximalist Stage Gallery */}
      <section className="px-4 sm:px-8 py-16 max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b-4 border-[#CCFF00] pb-4">
          <div>
            <span className="font-mono text-xs uppercase text-[#FF0055] font-black tracking-widest">
              STAGE DIRECTORY // OPTIC ARENAS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
              THE THREE SENSORY DOMES
            </h2>
          </div>
          <span className="px-4 py-2 bg-[#00F0FF] text-black font-mono font-black text-xs uppercase border-2 border-black">
            200,000 WATTS TOTAL OUTPUT
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'HYPER-DOME ARENA',
              desc: 'Suspended geodesic sphere with 360-degree LED dome projection and 40Hz sub-bass arrays.',
              src: MEDIA_ASSETS.maximalism.heroFestival,
              badge: 'CAPACITY 12,000'
            },
            {
              name: 'ACID JUNGLE',
              desc: 'Dense neon tropical botanical greenhouse with multi-laser diffraction tunnels and continuous fog.',
              src: MEDIA_ASSETS.maximalism.neonStreet,
              badge: 'ALL-NIGHT RAVING'
            },
            {
              name: 'NOISE CATHEDRAL',
              desc: 'Brutalist concrete hangar converted into a continuous sonic vibration chamber for experimental sound.',
              src: MEDIA_ASSETS.maximalism.crowdEnergy,
              badge: 'MAX VOLUME'
            }
          ].map((stage, idx) => (
            <div
              key={idx}
              className="bg-[#170535] border-4 border-black p-4 shadow-[8px_8px_0_#FF0055] hover:translate-x-1 hover:-translate-y-1 transition-transform space-y-4"
            >
              <div className="relative">
                <ImageBox
                  src={stage.src}
                  alt={stage.name}
                  aspectRatio="16/9"
                  border={true}
                  borderColor="border-black"
                />
                <span className="absolute top-2 right-2 px-2 py-0.5 bg-[#CCFF00] text-black font-mono text-[10px] font-black uppercase border border-black">
                  {stage.badge}
                </span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-[#00F0FF]">{stage.name}</h3>
              <p className="text-xs text-white/80 font-sans leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-[#170535] p-8 text-center space-y-4">
        <div className="text-3xl font-black text-[#CCFF00]">POLYCHROME CARNIVAL BERLIN 2026</div>
        <div className="text-xs font-mono text-white/60">NO CHILL • NO COMPROMISE • MORE IS ALWAYS MORE</div>
      </footer>
    </div>
  );
};
