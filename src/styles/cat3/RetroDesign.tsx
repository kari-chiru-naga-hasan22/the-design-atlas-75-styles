import React, { useState } from 'react';
import { Disc, Play, Pause, Volume2, Radio, Sparkles, Mic, Music, Sliders } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const RetroDesignPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState('01. SUNSET HIGHWAY GROOVE');

  const tracks = [
    { num: 'A1', title: 'SUNSET HIGHWAY GROOVE', duration: '4:18', bpm: '112' },
    { num: 'A2', title: 'PACIFIC COAST ANALOG DREAMS', duration: '5:02', bpm: '98' },
    { num: 'B1', title: 'RHODES ELECTRIC VIBES', duration: '3:45', bpm: '104' },
    { num: 'B2', title: 'MIDNIGHT CANYON CRUISE', duration: '6:12', bpm: '88' }
  ];

  return (
    <div className="min-h-screen bg-[#FEF3C7] text-[#451A03] font-serif selection:bg-[#D97706] selection:text-white">
      {/* 1970s Curved Rainbow Stripe Ribbon */}
      <div className="w-full flex h-3">
        <div className="flex-1 bg-[#D97706]" />
        <div className="flex-1 bg-[#EA580C]" />
        <div className="flex-1 bg-[#DC2626]" />
        <div className="flex-1 bg-[#9A3412]" />
      </div>

      {/* Retro 70s Header */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between border-b-2 border-[#B45309]">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#D97706] flex items-center justify-center text-white text-2xl shadow-md">
            📻
          </div>
          <div>
            <div className="text-3xl font-black font-dm-serif tracking-tight text-[#451A03]">
              VINYL & TAPE
            </div>
            <div className="text-[10px] font-mono tracking-widest text-[#B45309] uppercase">
              ANALOG HI-FI VAULT • EST. 1974
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-mono font-bold tracking-wider text-[#78350F]">
          <a href="#records" className="hover:text-[#D97706] transition-colors">CRATE DIGS</a>
          <a href="#turntables" className="hover:text-[#D97706] transition-colors">TUBE AMPS</a>
          <a href="#vault" className="hover:text-[#D97706] transition-colors">RECORD VAULT</a>
        </div>

        <button className="px-5 py-2.5 rounded-full bg-[#D97706] hover:bg-[#b45309] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer">
          Subscribe Vinyl Club
        </button>
      </header>

      {/* Hero Section: The Spinning 12-Inch Vinyl Record + Analog Photography */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="inline-block px-3 py-1 rounded bg-[#FDE68A] border border-[#D97706] text-xs font-mono font-bold text-[#92400E] uppercase tracking-wider">
            PURE 180-GRAM VIRGIN VINYL MASTERING
          </span>

          <h1 className="text-5xl sm:text-7xl font-normal font-dm-serif leading-[1.05] text-[#451A03]">
            Warm Analog Tubes. <br />
            <span className="text-[#D97706] italic">Golden 1974 Grooves.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#78350F] leading-relaxed max-w-xl font-sans">
            Streamed bits cannot replace physical lacquer grooves. Every month, we press an unreleased analog session directly from 2-inch master tapes to audiophile 180-gram vinyl.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-8 py-4 rounded-full bg-[#D97706] hover:bg-[#b45309] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 cursor-pointer transition-all"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} className="fill-white" />}
              <span>{isPlaying ? 'PAUSE NEEDLE' : 'DROP THE NEEDLE'}</span>
            </button>
            <span className="text-xs font-mono text-[#92400E] font-bold">
              CURRENT SESSION: {activeTrack}
            </span>
          </div>

          <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#B45309]/30 font-mono text-xs text-[#78350F]">
            <div>
              <div className="text-[10px] uppercase text-[#B45309]">SPEED</div>
              <div className="text-sm font-bold text-[#451A03]">33⅓ RPM MICROGROOVE</div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-[#B45309]">CARTRIDGE</div>
              <div className="text-sm font-bold text-[#451A03]">SHURE V15 TYPE III</div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-[#B45309]">HEADROOM</div>
              <div className="text-sm font-bold text-[#451A03]">+18 dB OVER 0 VU</div>
            </div>
          </div>
        </div>

        {/* Realistic Spinning 70s Vinyl Album Disc */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-72 h-72 sm:w-88 sm:h-88">
            <div 
              className={`w-full h-full rounded-full bg-[#18181B] border-4 border-[#27272A] shadow-2xl relative flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`}
              style={{ animationDuration: '3.5s' }}
            >
              <div className="w-5/6 h-5/6 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-4/6 h-4/6 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-3/6 h-3/6 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-[#D97706] text-white text-center flex flex-col items-center justify-center border-2 border-white/40 shadow-inner">
                      <span className="text-[9px] font-mono font-black uppercase">VINYL & TAPE</span>
                      <span className="text-xs font-bold font-serif">SIDE A</span>
                      <span className="text-[8px] font-mono">33⅓ RPM</span>
                      <div className="w-3 h-3 rounded-full bg-[#FEF3C7] border border-black mt-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Vintage Vinyl Marquee */}
      <section className="py-6 border-y-2 border-[#B45309] bg-[#FDE68A]/50">
        <InfiniteImageMarquee
          speed="normal"
          images={[
            { src: MEDIA_ASSETS.retro70s.vinylPlayer, title: 'Technics SL-1200 Direct Drive', tag: 'ANALOG MASTER' },
            { src: MEDIA_ASSETS.retro70s.vintageAmplifier, title: 'Marantz 2270 Stereophonic', tag: 'VALVE PREAMP' },
            { src: MEDIA_ASSETS.neumorphism.analogFaders, title: 'Neve 8078 Console Sliders', tag: '24-TRACK TAPE' },
            { src: MEDIA_ASSETS.neumorphism.audioDials, title: 'Pultec EQP-1A Tube EQ', tag: 'HARMONIC DRIVE' }
          ]}
        />
      </section>

      {/* Visual Showcase: Analog Hardware Vault */}
      <section id="turntables" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="border-4 border-[#B45309] rounded-2xl overflow-hidden shadow-xl bg-white p-2">
            <ImageBox
              src={MEDIA_ASSETS.retro70s.vinylPlayer}
              alt="Vintage Turntable Needle and Grooves"
              aspectRatio="16/9"
              rounded="xl"
              caption="Shure elliptical diamond stylus tracking pure microgroove vinyl"
            />
          </div>
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D97706]">
              ORIGINAL 1974 REVOX & MARANTZ HARMONICS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-dm-serif text-[#451A03]">
              Vacuum Tube Warmth, No Digital Compression
            </h2>
            <p className="text-base text-[#78350F] leading-relaxed font-sans">
              Modern digital recordings are aggressively crushed to sound loud on phone speakers. Our custom analog mastering chain retains the full 65dB dynamic range of live acoustic instruments.
            </p>
            <div className="p-4 rounded-xl bg-[#FDE68A] border border-[#D97706] text-xs font-mono text-[#92400E]">
              "The tactile feeling of setting the needle down is half of the musical ritual."
            </div>
          </div>
        </div>

        {/* 3-Column Gear Gallery */}
        <div id="vault" className="space-y-6">
          <div className="border-b-2 border-[#B45309] pb-3 flex justify-between items-baseline">
            <h3 className="text-2xl font-bold font-dm-serif text-[#451A03]">Crate Digger's Audiophile Inventory</h3>
            <span className="text-xs font-mono font-bold text-[#B45309]">CATALOG 1974-V12</span>
          </div>

          <ImageGallery
            columns={3}
            theme="swiss"
            items={[
              {
                src: MEDIA_ASSETS.retro70s.vintageAmplifier,
                title: 'Marantz 2270 Solid State',
                subtitle: 'Champagne anodized faceplate with warm blue tuning meter dial',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.neumorphism.audioDials,
                title: 'Telefunken V72 Tube Preamps',
                subtitle: 'German broadcast standard with EF804 tubes and custom transformers',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.retro70s.vinylPlayer,
                title: 'Garrard 301 Transcription Motor',
                subtitle: 'Heavy idler wheel drive with grease bearing and SME 3009 arm',
                aspectRatio: '4/3'
              }
            ]}
          />
        </div>
      </section>

      {/* Track Listing Crate */}
      <section id="records" className="border-t-2 border-[#B45309] bg-[#FDE68A] py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-baseline justify-between border-b-2 border-[#B45309] pb-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#92400E]">SESSION NO. 74-08</span>
              <h2 className="text-3xl font-bold font-dm-serif text-[#451A03]">Live at Sunset Sound Studios</h2>
            </div>
            <span className="font-mono text-xs text-[#B45309] font-bold">ALL ANALOG RECORDING (AAA)</span>
          </div>

          <div className="divide-y divide-[#D97706]/30">
            {tracks.map((t, idx) => (
              <div 
                key={idx}
                onClick={() => { setActiveTrack(t.title); setIsPlaying(true); }}
                className="py-4 flex items-center justify-between hover:bg-[#FCD34D]/60 px-4 rounded-xl cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm font-bold text-[#D97706]">{t.num}</span>
                  <span className="text-base font-bold text-[#451A03]">{t.title}</span>
                </div>
                <div className="flex items-center gap-6 font-mono text-xs text-[#92400E]">
                  <span>{t.bpm} BPM</span>
                  <span>{t.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retro 70s Footer */}
      <footer className="border-t-2 border-[#B45309] py-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-[#92400E]">
        <div>VINYL & TAPE RECORDINGS • SUNSET BLVD, HOLLYWOOD CA</div>
        <div>ANALOG TUBE SOUND • NEVER DIGITIZED • © 1974–2026</div>
      </footer>
    </div>
  );
};
