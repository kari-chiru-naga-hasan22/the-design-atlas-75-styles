import React, { useState } from 'react';
import { Sparkles, Eye, Disc, Volume2, Sun, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const PsychedelicPage: React.FC = () => {
  const [warpIntensity, setWarpIntensity] = useState(30);

  const handleTrip = () => {
    confetti({
      particleCount: 60,
      spread: 90,
      origin: { y: 0.4 }
    });
  };

  return (
    <div className="min-h-screen bg-[#1F0738] text-white font-sans selection:bg-[#FACC15] selection:text-black relative overflow-hidden">
      {/* Hypnotic Swirling Rainbow Radial Gradients */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-35 blur-[120px] pointer-events-none animate-spin"
        style={{
          background: 'conic-gradient(from 0deg, #EC4899, #FACC15, #06B6D4, #7C3AED, #EC4899)',
          animationDuration: `${Math.max(10, 60 - warpIntensity)}s`
        }}
      />

      {/* Groovy Psychedelic Navbar */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-pink-500/30 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#EC4899] via-[#FACC15] to-[#06B6D4] flex items-center justify-center text-2xl animate-spin" style={{ animationDuration: '8s' }}>
            🌀
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black font-syne tracking-tight bg-gradient-to-r from-[#FACC15] via-[#EC4899] to-[#06B6D4] bg-clip-text text-transparent">
              KALEIDOSCOPE
            </div>
            <div className="text-[10px] font-mono tracking-widest text-[#FACC15] uppercase">
              LIQUID LIGHT ODYSSEY 1967–2026
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-mono font-bold tracking-widest text-pink-200">
          <a href="#projections" className="hover:text-[#FACC15] transition-colors">LIQUID LIGHT SHOWS</a>
          <a href="#groove" className="hover:text-[#FACC15] transition-colors">PSYCHEDELIC ROCK</a>
          <a href="#trip" className="hover:text-[#FACC15] transition-colors">CONSCIOUSNESS EXPANSION</a>
        </div>

        <button 
          onClick={handleTrip}
          className="px-5 py-2.5 rounded-full bg-[#FACC15] hover:bg-[#fde047] text-black font-black font-syne text-xs uppercase tracking-wider shadow-[0_0_20px_#FACC15] hover:scale-105 transition-all cursor-pointer"
        >
          Expand Mind ✨
        </button>
      </nav>

      {/* Hero Section: Concentric Swirl & Acid Color Saturation */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-400 text-pink-300 font-mono text-xs uppercase tracking-widest">
          <Sparkles size={14} /> VIBRATING CHROMATIC FREQUENCIES
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-syne tracking-tight text-white leading-none">
          DISSOLVE INTO <br />
          <span className="bg-gradient-to-r from-[#FACC15] via-[#EC4899] to-[#06B6D4] bg-clip-text text-transparent italic">
            THE INFINITE.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-xl text-pink-100 font-light leading-relaxed font-sans">
          Overhead mineral oil projectors swirl vibrant colored dyes between heated glass plates. Experience synesthetic euphoria where visual geometry breathes to sonic vibration.
        </p>

        {/* Hero Visual Composition: Liquid Light Show Photography */}
        <div className="pt-4 max-w-4xl mx-auto p-3 rounded-3xl bg-black/60 border-2 border-[#FACC15] shadow-[0_0_35px_rgba(250,204,21,0.3)]">
          <ImageBox
            src={MEDIA_ASSETS.psychedelic.liquidLightShow}
            alt="Overhead Projector Mineral Oil Liquid Light Show"
            aspectRatio="16/9"
            rounded="2xl"
            caption="Direct physical swirl of oil and aniline dye illuminated at the Fillmore Auditorium (1967)"
          />
        </div>

        {/* Interactive Hypnotic Warp Slider */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3 p-3 rounded-full bg-black/40 border border-pink-400/40 text-xs font-mono">
            <span className="text-[#FACC15]">HYPNOTIC SPIN RATE:</span>
            <input 
              type="range" min="10" max="50" value={warpIntensity} 
              onChange={(e) => setWarpIntensity(Number(e.target.value))} 
              className="accent-[#EC4899] cursor-pointer"
            />
            <span className="text-[#06B6D4] font-bold">{warpIntensity} RPM</span>
          </div>

          <button 
            onClick={handleTrip}
            className="px-8 py-3.5 rounded-full bg-[#EC4899] hover:bg-[#db2777] text-white font-syne font-black text-xs uppercase tracking-wider shadow-[0_0_25px_#EC4899] cursor-pointer"
          >
            Enter Trip Chamber 👁️
          </button>
        </div>
      </section>

      {/* Infinite Psychedelic Marquee */}
      <section className="py-6 border-y border-pink-500/40 bg-black/50 my-8">
        <InfiniteImageMarquee
          speed="normal"
          images={[
            { src: MEDIA_ASSETS.psychedelic.liquidLightShow, title: 'Fillmore Oil Plates', tag: 'SAN FRANCISCO' },
            { src: MEDIA_ASSETS.psychedelic.acidPoster, title: 'Wes Wilson Typographics', tag: 'ACID POSTER' },
            { src: MEDIA_ASSETS.gradientDesign.auroraLiquid, title: 'Prismatic Aurora Bloom', tag: 'DISSOLVE' },
            { src: MEDIA_ASSETS.abstractArt.colorExplosion, title: 'Solarized Retinal Waves', tag: 'HAIGHT-ASHBURY' }
          ]}
        />
      </section>

      {/* Trippy Projections Gallery */}
      <section id="projections" className="max-w-7xl mx-auto py-12 px-6 space-y-12">
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-pink-500/30 pb-4">
          <div>
            <span className="text-xs font-mono text-[#FACC15] uppercase tracking-widest">OPTICAL IMMERSION</span>
            <h2 className="text-3xl sm:text-5xl font-black font-syne text-white mt-1">Liquid Light Projections & Posters</h2>
          </div>
          <span className="font-mono text-xs text-pink-300">AVALON BALLROOM 1968</span>
        </div>

        <ImageGallery
          columns={3}
          theme="dark"
          items={[
            {
              src: MEDIA_ASSETS.psychedelic.acidPoster,
              title: 'Wes Wilson Hand-Lettered Gig',
              subtitle: 'Flame-shaped lettering expanding to the boundaries of the poster frame',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.psychedelic.liquidLightShow,
              title: 'Overhead Clock Face Oil Immersion',
              subtitle: 'Heated glass trays creating organic capillary fluid branches to psych rock riffs',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.gradientDesign.auroraLiquid,
              title: 'Stroboscopic Aurora Wave',
              subtitle: 'Multi-frequency strobe flashes illuminating floating kaleidoscopic prisms',
              aspectRatio: '4/3'
            }
          ]}
        />
      </section>

      {/* Psychedelic Footer */}
      <footer className="relative z-10 border-t border-pink-500/30 py-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-pink-300/60">
        <div>KALEIDOSCOPE ODYSSEY • HAIGHT-ASHBURY, SAN FRANCISCO CA</div>
        <div>PEACE, LOVE & EXPANDED CONSCIOUSNESS • © 1967–2026</div>
      </footer>
    </div>
  );
};
