import React, { useState } from 'react';
import { Gauge, Zap, Flame, Radio, Play, Trophy, Disc, Activity } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const SynthwavePage: React.FC = () => {
  const [speed, setSpeed] = useState(140);
  const [activeCar, setActiveCar] = useState(0);

  const cars = [
    { name: '1984 TESTAROSSA 512', topSpeed: '290 KM/H', hp: '390 BHP', turbo: 'TWIN IHI' },
    { name: '1981 DELOREAN DMC-12', topSpeed: '210 KM/H', hp: '130 BHP', turbo: 'FLUX V6' },
    { name: '1987 COUNTACH 5000QV', topSpeed: '315 KM/H', hp: '455 BHP', turbo: 'V12 BARK' }
  ];

  return (
    <div className="min-h-screen bg-[#090014] text-white font-sans selection:bg-[#FF007F] selection:text-white relative overflow-hidden">
      {/* Synthwave Retrowave Sunset Half-Circle in Background */}
      <div className="absolute top-44 left-1/2 -translate-x-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-t from-[#FF007F] via-[#FF5E00] to-[#FFD600] blur-sm opacity-90 shadow-[0_0_80px_#FF007F] pointer-events-none" />

      {/* Outrun Navbar */}
      <nav className="relative z-20 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-[#00F0FF]/30 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#FF007F] text-black font-black text-xl flex items-center justify-center shadow-[0_0_20px_#FF007F]">
            🏎️
          </div>
          <div>
            <div className="text-2xl font-black font-orbitron tracking-widest text-[#00F0FF] drop-shadow-[0_0_10px_#00F0FF]">
              OUTRUN DRIFT
            </div>
            <div className="text-[10px] font-mono tracking-widest text-[#FF007F]">
              SYNTHWAVE ARCADE • HIGHWAY 1984
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-orbitron tracking-widest text-white/80">
          <a href="#race" className="hover:text-[#00F0FF] transition-colors">TIME ATTACK</a>
          <a href="#cars" className="hover:text-[#00F0FF] transition-colors">TURBO TESTAROSSA</a>
          <a href="#soundtrack" className="hover:text-[#00F0FF] transition-colors">RETROWAVE SOUNDS</a>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-[#00F0FF] bg-black/60 px-4 py-2 rounded-xl border border-[#00F0FF]/40">
          <Gauge size={16} className="text-[#FF007F]" />
          <span className="font-bold">{speed} KM/H</span>
        </div>
      </nav>

      {/* Hero Section: Chrome Headlines & Speed */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FF007F]/20 border border-[#FF007F] text-[#FF007F] text-xs font-orbitron uppercase tracking-widest shadow-[0_0_15px_#FF007F]">
          <Zap size={14} /> MIDNIGHT PALM COAST HIGHWAY • 140 BPM
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-orbitron italic tracking-tight text-white uppercase drop-shadow-[0_0_35px_#FF007F] leading-none">
          NEON <br />
          <span className="bg-gradient-to-r from-[#00F0FF] via-white to-[#FF007F] bg-clip-text text-transparent">
            VELOCITY.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/80 font-mono leading-relaxed pt-2">
          Drop the clutch into the neon twilight. Analog synth leads screaming across analog cassette decks while the wireframe horizon glows red.
        </p>

        {/* Speed Accelerate Slider Controller */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-black/70 border border-[#00F0FF] font-mono text-xs">
            <span className="text-[#00F0FF]">TURBO BOOST:</span>
            <input 
              type="range" min="80" max="260" value={speed} 
              onChange={(e) => setSpeed(Number(e.target.value))} 
              className="accent-[#FF007F] cursor-pointer"
            />
            <span className="font-bold text-[#FF007F]">{speed} KM/H</span>
          </div>

          <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF007F] to-[#FF5E00] hover:scale-105 text-white font-orbitron font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_#FF007F] transition-all cursor-pointer flex items-center gap-2">
            <Play size={14} className="fill-current" /> ENTER NIGHT TIME ATTACK
          </button>
        </div>

        {/* Hero Visual Composition: The Neon Supercar Horizon */}
        <div className="pt-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch text-left">
          <div className="md:col-span-8 rounded-3xl p-2 bg-gradient-to-tr from-[#FF007F]/30 to-[#00F0FF]/30 border-2 border-[#00F0FF]/50 shadow-[0_0_40px_rgba(0,240,255,0.3)]">
            <ImageBox
              src={MEDIA_ASSETS.synthwave.deloreanGrid}
              alt="Synthwave Outrun Sports Car on Highway"
              aspectRatio="16/9"
              rounded="2xl"
              caption="Twin-turbo sports coupe speeding down Ocean Boulevard at 02:00 AM"
            />
          </div>

          <div className="md:col-span-4 p-6 rounded-3xl bg-black/80 border-2 border-[#FF007F]/60 flex flex-col justify-between shadow-[0_0_30px_rgba(255,0,127,0.3)]">
            <div>
              <span className="text-[11px] font-mono text-[#00F0FF] uppercase tracking-wider">VEHICLE TELEMETRY</span>
              <h3 className="text-xl font-bold font-orbitron text-white mt-1">{cars[activeCar].name}</h3>
              <div className="mt-4 space-y-2 text-xs font-mono">
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span className="text-white/50">TOP SPEED:</span>
                  <span className="text-[#FF007F] font-bold">{cars[activeCar].topSpeed}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span className="text-white/50">POWER:</span>
                  <span className="text-[#00F0FF] font-bold">{cars[activeCar].hp}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span className="text-white/50">TURBO:</span>
                  <span className="text-yellow-400 font-bold">{cars[activeCar].turbo}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex gap-2">
              {cars.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCar(i)}
                  className={`flex-1 py-1.5 rounded text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                    activeCar === i
                      ? 'bg-[#FF007F] text-black shadow-[0_0_10px_#FF007F]'
                      : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                >
                  CAR 0{i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Outrun Marquee */}
      <section className="py-6 border-y border-[#00F0FF]/30 bg-black/60">
        <InfiniteImageMarquee
          speed="normal"
          images={[
            { src: MEDIA_ASSETS.synthwave.deloreanGrid, title: 'Highway 1984 Outrun', tag: 'TURBO V8' },
            { src: MEDIA_ASSETS.synthwave.arcadeCabinet, title: 'OutRun Sega Cabinet', tag: 'CRT YU SUZUKI' },
            { src: MEDIA_ASSETS.vaporwave.palmGrid, title: 'Miami Palm Dusk', tag: 'OCEAN DRIVE' },
            { src: MEDIA_ASSETS.retro70s.vinylPlayer, title: 'Synth Cassette Master', tag: 'ROLAND JUNO' }
          ]}
        />
      </section>

      {/* Outrun Arcade & Garage Gallery */}
      <section id="cars" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-[#00F0FF]/30 pb-4">
          <div>
            <span className="text-xs font-mono text-[#FF007F] uppercase tracking-widest">COIN-OPERATED NOSTALGIA</span>
            <h2 className="text-3xl sm:text-5xl font-black font-orbitron text-white mt-1">Arcade Chambers & Night Drivers</h2>
          </div>
          <span className="font-mono text-xs text-[#00F0FF]">100 CREDITS REMAINING • INSERT COIN</span>
        </div>

        <ImageGallery
          columns={3}
          theme="dark"
          items={[
            {
              src: MEDIA_ASSETS.synthwave.arcadeCabinet,
              title: 'Classic Neon CRT Arcade',
              subtitle: '15kHz scanlines and flashing 25-cent coin rejection levers',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.vaporwave.palmGrid,
              title: 'Sunken Boulevard Sunset',
              subtitle: 'Gradient sky fading into deep violet along coastline palms',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.synthwave.deloreanGrid,
              title: 'Outrun Highway Drift',
              subtitle: 'Speedometer needle pinned past 240 km/h with taillight streaks',
              aspectRatio: '4/3'
            }
          ]}
        />
      </section>

      {/* Wireframe Glowing 3D Grid Floor */}
      <div 
        className="w-full h-44 relative border-t-2 border-[#00F0FF] shadow-[0_-10px_40px_rgba(0,240,255,0.4)]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 0, 127, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.6) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: 'perspective(250px) rotateX(60deg)',
          transformOrigin: 'top center'
        }}
      />

      {/* Synthwave Footer */}
      <footer className="relative z-10 border-t border-[#00F0FF]/30 bg-[#06000D] py-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-orbitron text-xs text-white/50">
        <div>OUTRUN DRIFT RACING CLUB • MIAMI BEACH 1984</div>
        <div className="text-[#FF007F]">ANALOG SYNTH LEADS • 140 BPM FOREVER • © 1984–2026</div>
      </footer>
    </div>
  );
};
