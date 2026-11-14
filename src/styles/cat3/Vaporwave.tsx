import React, { useState } from 'react';
import { Sparkles, Music, Play, Radio, Volume2, Waves, Eye } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const VaporwavePage: React.FC = () => {
  const [vhsEffect, setVhsEffect] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-[#0E1024] text-white font-sans selection:bg-[#C084FC] selection:text-black relative overflow-hidden">
      {/* VHS Scanlines Overlay */}
      {vhsEffect && (
        <div 
          className="absolute inset-0 pointer-events-none z-30 opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.5) 0px, rgba(0,0,0,0.5) 1px, transparent 1px, transparent 3px)'
          }}
        />
      )}

      {/* Vaporwave Neon Gradient Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#C084FC]/30 via-[#22D3EE]/30 to-[#FDA4AF]/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Vaporwave Japanese Mall Navbar */}
      <nav className="relative z-20 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-[#22D3EE]/30 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#C084FC] to-[#22D3EE] flex items-center justify-center text-xl shadow-[0_0_15px_#22D3EE]">
            🏛️
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black font-dm-serif tracking-widest text-[#22D3EE]">
              VIRTUAL PLAZA 仮想広場
            </div>
            <div className="text-[10px] font-mono tracking-widest text-[#C084FC]">
              CONSUMER PARADISE 1988 • RECLINING AMBIENT
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-white/80">
          <a href="#mall" className="hover:text-[#22D3EE] transition-colors">SHOPPING MALL</a>
          <a href="#busts" className="hover:text-[#22D3EE] transition-colors">STATUARY</a>
          <a href="#cassette" className="hover:text-[#22D3EE] transition-colors">LO-FI CASSETTES</a>
        </div>

        <button 
          onClick={() => setVhsEffect(!vhsEffect)}
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-[#22D3EE]/40 text-xs font-mono text-[#22D3EE] transition-all cursor-pointer"
        >
          VHS FILTER: {vhsEffect ? 'ON 📼' : 'OFF'}
        </button>
      </nav>

      {/* Hero Section: Marble Busts, Palms, and Checkered Floor */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:py-20 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#C084FC]/20 border border-[#C084FC]/50 text-[#C084FC] text-xs font-mono uppercase tracking-widest">
          リラックス • ENDLESS NOSTALGIA IN THE DIGITAL FOUNTAIN
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal font-dm-serif tracking-tight text-white leading-none">
          VIRTUAL <br />
          <span className="bg-gradient-to-r from-[#22D3EE] via-[#FDA4AF] to-[#C084FC] bg-clip-text text-transparent italic">
            PARADISE.
          </span>
        </h1>

        <div className="text-lg sm:text-2xl font-mono text-[#22D3EE] tracking-widest font-light">
          午前３時のエスカレーター • ESCALATOR AT 3:00 AM
        </div>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/70 leading-relaxed font-sans font-light">
          Step into the neon-lit, marble-floored atrium of a shopping plaza frozen forever in 1988. Slowed-down smooth jazz, neon fountains, and tranquil consumer daydreams.
        </p>

        {/* Hero Visual Composition: Neon Roman Bust & Chopped Tape Player */}
        <div className="pt-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
          <div className="md:col-span-7 rounded-3xl p-2 bg-gradient-to-r from-[#22D3EE]/30 via-[#C084FC]/30 to-[#FDA4AF]/30 border border-[#22D3EE]/40 shadow-[0_0_35px_rgba(34,211,238,0.25)]">
            <ImageBox
              src={MEDIA_ASSETS.vaporwave.statueNeon}
              alt="Hellenistic Marble Bust Bathed in Neon Light"
              aspectRatio="16/9"
              rounded="2xl"
              caption="Statue of Helios illuminated by magenta and cyan neon tubes (Plaza Atrium)"
            />
          </div>

          <div className="md:col-span-5 p-6 rounded-3xl bg-[#171A38] border-2 border-[#C084FC]/50 shadow-[0_0_40px_rgba(192,132,252,0.3)] space-y-4">
            <span className="text-xs font-mono text-[#22D3EE] uppercase tracking-wider block">
              ECHOING IN THE MALL ATRIUM
            </span>
            <h3 className="text-xl font-bold font-dm-serif text-white">MACINTOSH PLUS — リサフランク420</h3>
            <p className="text-xs text-white/60 font-mono leading-relaxed">
              CHOPPED & SLOWED 60% • ANALOG CASSETTE DECK WARBLE • 4-HEAD HI-FI VHS
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-4 py-2.5 rounded-lg bg-[#22D3EE] hover:bg-[#67e8f9] text-[#0E1024] font-bold text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
              >
                <Play size={14} className="fill-current" /> {isPlaying ? 'PAUSE CASSETTE' : 'PLAY LO-FI CASSETTE'}
              </button>
              <span className="text-xs font-mono text-white/50">4:20 MIN</span>
            </div>

            <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] font-mono text-[#FDA4AF]">
              <div>TEMPO: 72 BPM</div>
              <div>REVERB: 8.4 SEC</div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Vaporwave Marquee */}
      <section className="py-6 border-y border-[#22D3EE]/30 bg-white/[0.02]">
        <InfiniteImageMarquee
          speed="normal"
          images={[
            { src: MEDIA_ASSETS.vaporwave.statueNeon, title: 'Helios Marble Bust', tag: 'HELLENISTIC' },
            { src: MEDIA_ASSETS.vaporwave.palmGrid, title: 'Neon Palm Sunset', tag: 'MIAMI 1988' },
            { src: MEDIA_ASSETS.synthwave.arcadeCabinet, title: 'CRT Arcade Chamber', tag: 'KANJI LO-FI' },
            { src: MEDIA_ASSETS.retro70s.vinylPlayer, title: 'Pitch-Shifted Vinyl', tag: 'CASSETTE TAPE' }
          ]}
        />
      </section>

      {/* Shopping Mall Atrium & Busts Gallery */}
      <section id="busts" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-[#22D3EE]/30 pb-4">
          <div>
            <span className="text-xs font-mono text-[#FDA4AF] uppercase tracking-widest">ARCHITECTURAL RECLINING SUITE</span>
            <h2 className="text-3xl sm:text-5xl font-black font-dm-serif text-white mt-1">Plaza Statuary & Sunset Palms</h2>
          </div>
          <span className="font-mono text-xs text-[#22D3EE]">FLOOR 3F: ESCALATOR LEVEL</span>
        </div>

        <ImageGallery
          columns={3}
          theme="dark"
          items={[
            {
              src: MEDIA_ASSETS.vaporwave.palmGrid,
              title: 'Synth Sunset Palm Grove',
              subtitle: 'Silhouette fronds glowing against a pink and cyan horizon line',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.vaporwave.statueNeon,
              title: 'Helios Classical Vitrine',
              subtitle: 'White Carrara marble exposed to synthetic ultraviolet discharge',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.gradientDesign.auroraLiquid,
              title: 'Chromium Fountain Pool',
              subtitle: 'Submerged prismatic halogen lighting in the shopping atrium water display',
              aspectRatio: '4/3'
            }
          ]}
        />
      </section>

      {/* Vaporwave Footer */}
      <footer className="border-t border-[#22D3EE]/30 py-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-white/50">
        <div>VIRTUAL PLAZA CORP • TOKYO GINZA 1988 • 仮想空間</div>
        <div>NOSTALGIA FOREVER • ARIZONA ICED TEA 99¢ • © 1988–2026</div>
      </footer>
    </div>
  );
};
