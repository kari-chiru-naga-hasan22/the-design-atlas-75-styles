import React, { useState } from 'react';
import { Sparkles, Disc, Radio, Star, Volume2, Play, Heart, Zap, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const Y2KPage: React.FC = () => {
  const [cdSpinning, setCdSpinning] = useState(true);

  const triggerGlow = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.4 }
    });
  };

  return (
    <div className="min-h-screen bg-[#100D28] text-white font-sans selection:bg-[#F472B6] selection:text-black relative overflow-hidden">
      {/* Iridescent Chrome Starbursts in background */}
      <div className="absolute top-10 right-20 text-6xl text-[#F472B6] animate-pulse select-none opacity-40 pointer-events-none">✦</div>
      <div className="absolute bottom-20 left-10 text-7xl text-[#38BDF8] animate-bounce select-none opacity-40 pointer-events-none">✧</div>
      <div className="absolute top-1/2 left-1/4 text-4xl text-[#FDE047] select-none opacity-30 pointer-events-none">✦</div>

      {/* Y2K Millennium Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/20 backdrop-blur-md relative z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F472B6] via-[#38BDF8] to-white flex items-center justify-center text-xl shadow-[0_0_15px_#F472B6]">
            ✧
          </div>
          <div>
            <div className="text-2xl font-black font-orbitron tracking-widest bg-gradient-to-r from-[#F472B6] via-white to-[#38BDF8] bg-clip-text text-transparent">
              CYBERANGEL
            </div>
            <div className="text-[10px] font-mono tracking-widest text-[#38BDF8]">
              YEAR 2000 CYBER-POP ATELIER
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-orbitron tracking-widest text-white/80">
          <a href="#rave" className="hover:text-[#F472B6] transition-colors">RAVE WEAR</a>
          <a href="#cdrom" className="hover:text-[#F472B6] transition-colors">CD-ROM ARCHIVE</a>
          <a href="#winamp" className="hover:text-[#F472B6] transition-colors">MP3 VAULT</a>
        </div>

        <button 
          onClick={triggerGlow}
          className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F472B6] to-[#38BDF8] text-black font-orbitron font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(244,114,182,0.6)] hover:scale-105 transition-all cursor-pointer"
        >
          Enter 2000 Portal ✦
        </button>
      </nav>

      {/* Hero Section: Chrome & Starburst Euphoria */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#F472B6]/50 text-[#F472B6] text-xs font-orbitron tracking-wider shadow-[0_0_15px_rgba(244,114,182,0.3)]">
          <Sparkles size={14} /> MILLENNIUM CHROME DREAMS & IRIDESCENT SOUND
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-orbitron tracking-tight leading-none text-white drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]">
          CYBER <br />
          <span className="bg-gradient-to-r from-[#F472B6] via-white to-[#38BDF8] bg-clip-text text-transparent">
            EUPHORIA.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/80 font-light leading-relaxed font-sans">
          Welcome to the optimistic dawn of the year 2000. Translucent neon plastic iMacs, silver puffy jackets, glowing cyber starbursts, and high-energy millennium pop.
        </p>

        {/* Hero Visual Composition: Chrome Apparel & WinAMP Deck */}
        <div className="pt-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
          <div className="md:col-span-7 rounded-3xl p-2 bg-gradient-to-r from-[#F472B6]/40 via-cyan-400/40 to-yellow-300/40 border border-white/30 shadow-[0_0_30px_rgba(244,114,182,0.3)]">
            <ImageBox
              src={MEDIA_ASSETS.y2k.chromeMillennium}
              alt="Y2K Chrome Millennium Fashion Editorial"
              aspectRatio="16/9"
              rounded="2xl"
              caption="Iridescent liquid mercury vinyl jumpsuit with futuristic visor (Tokyo 2000)"
            />
          </div>

          {/* WinAMP Style Interactive Player Card */}
          <div className="md:col-span-5 p-6 rounded-3xl bg-[#1C1838] border-2 border-[#38BDF8] shadow-[0_0_30px_rgba(56,189,248,0.3)] space-y-4">
            <div className="flex items-center justify-between border-b border-white/20 pb-3">
              <span className="font-mono text-xs text-[#38BDF8] flex items-center gap-2">
                <Radio size={14} /> CYBERANGEL_WINAMP_V2.95.EXE
              </span>
              <span className="text-[10px] font-mono text-[#F472B6]">128 KBPS STEREO</span>
            </div>

            <div className="flex items-center gap-5">
              {/* Spinning Holographic CD-ROM */}
              <div 
                onClick={() => setCdSpinning(!cdSpinning)}
                className={`w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-400 via-pink-400 to-yellow-300 border-2 border-white/60 shadow-[0_0_20px_rgba(244,114,182,0.7)] flex items-center justify-center cursor-pointer shrink-0 ${cdSpinning ? 'animate-spin' : ''}`}
                style={{ animationDuration: '3s' }}
              >
                <div className="w-7 h-7 rounded-full bg-[#1C1838] border-2 border-white flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-white/50">TRACK #01 OF 14</div>
                <div className="text-base font-bold font-orbitron text-white">ANGEL_DUST.MP3</div>
                <div className="text-[11px] font-mono text-[#F472B6] mt-0.5">EUPHORIC TRANCE • 138 BPM</div>
                <div className="mt-2.5 flex items-center gap-2">
                  <button 
                    onClick={() => setCdSpinning(!cdSpinning)}
                    className="px-2.5 py-1 rounded bg-[#38BDF8] text-black font-mono font-bold text-[10px] uppercase cursor-pointer"
                  >
                    {cdSpinning ? 'PAUSE' : 'PLAY'}
                  </button>
                  <span className="text-[11px] font-mono text-white/60">03:42 / 05:18</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Y2K Cyber Filmstrip */}
      <section className="py-6 border-y border-white/20 bg-white/[0.03]">
        <InfiniteImageMarquee
          speed="normal"
          images={[
            { src: MEDIA_ASSETS.y2k.chromeMillennium, title: 'Mercury Suit 2000', tag: 'SHIBUYA 109' },
            { src: MEDIA_ASSETS.y2k.cyberrave, title: 'Trance Energy Warehouse', tag: 'UTRECHT 2001' },
            { src: MEDIA_ASSETS.avantGarde.holographicObject, title: 'Dichroic Crystal CD-ROM', tag: 'OPTICAL MEDIA' },
            { src: MEDIA_ASSETS.editorial.runwayFashion, title: 'Silver Puffer Couture', tag: 'PARIS COUTURE' }
          ]}
        />
      </section>

      {/* Y2K Streetwear Visual Showcase */}
      <section id="rave" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-white/20 pb-4">
          <div>
            <span className="text-xs font-mono text-[#F472B6] uppercase tracking-widest">MILLENNIUM ARCHIVE DROP</span>
            <h2 className="text-3xl sm:text-5xl font-black font-orbitron text-white mt-1">Harajuku & London Cyberwear</h2>
          </div>
          <span className="font-mono text-xs text-[#38BDF8]">AVAILABLE ON COMPACT DISC ONLY</span>
        </div>

        <ImageGallery
          columns={3}
          theme="dark"
          items={[
            {
              src: MEDIA_ASSETS.y2k.cyberrave,
              title: 'Sub-Bass Rave Horizon',
              subtitle: 'Glowsticks, UV blacklight reactivity and euphoria club culture',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.avantGarde.holographicObject,
              title: 'Holographic Polycarbonate',
              subtitle: 'Light dispersion prism layer bonded to cybernetic accessories',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.y2k.chromeMillennium,
              title: 'Liquid Chromium Shell',
              subtitle: 'Aerodynamic windbreaker fabricated from mirror-reflective mylar',
              aspectRatio: '4/3'
            }
          ]}
        />

        {/* 3 Detail Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-2xl mb-2 block">💿</span>
            <h4 className="text-lg font-bold font-orbitron text-white">Inflatable Bubble Vest</h4>
            <p className="mt-2 text-xs text-white/70 font-sans leading-relaxed">
              Translucent pink PVC inflatable air chambers with integrated headphone cable wire channels.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-2xl mb-2 block">🛸</span>
            <h4 className="text-lg font-bold font-orbitron text-white">Liquid Chrome Visor</h4>
            <p className="mt-2 text-xs text-white/70 font-sans leading-relaxed">
              One-piece wraparound polycarbonate sunglasses with 100% UV400 mirror silver coating.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-2xl mb-2 block">✨</span>
            <h4 className="text-lg font-bold font-orbitron text-white">Cyberstar Choker</h4>
            <p className="mt-2 text-xs text-white/70 font-sans leading-relaxed">
              Hand-polished stainless steel starburst pendant with iridescent dichroic crystal core.
            </p>
          </div>
        </div>
      </section>

      {/* Y2K Footer */}
      <footer className="border-t border-white/10 py-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-orbitron text-xs text-white/50">
        <div>CYBERANGEL 2000 APPAREL • TOKYO HARAJUKU & LONDON SOHO</div>
        <div>MILLENNIUM FOREVER • BEST VIEWED ON NETSCAPE • © 2000–2026</div>
      </footer>
    </div>
  );
};
