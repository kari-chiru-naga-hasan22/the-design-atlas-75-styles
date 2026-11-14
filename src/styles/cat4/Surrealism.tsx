import React, { useState } from 'react';
import { Eye, Compass, Moon, Sparkles, Feather, Clock, Orbit } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const SurrealismPage: React.FC = () => {
  const [dreamLevel, setDreamLevel] = useState(1);

  return (
    <div className="min-h-screen bg-[#101426] text-[#F8FAFC] font-serif selection:bg-[#D97706] selection:text-black relative overflow-hidden">
      {/* Metaphysical Golden Celestial Eye in Background */}
      <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full bg-gradient-to-tr from-[#D97706]/20 via-[#F472B6]/20 to-transparent blur-[120px] pointer-events-none" />

      {/* Surrealist Floating Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between border-b border-white/10 backdrop-blur-md relative z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-[#D97706] flex items-center justify-center text-xl animate-pulse">
            👁️
          </div>
          <div>
            <div className="text-2xl font-normal font-cormorant tracking-widest uppercase text-white">
              ONEIRIC METAPHYSICS
            </div>
            <div className="text-[10px] tracking-[0.3em] font-sans text-[#D97706] uppercase">
              STUDIES IN SUBCONSCIOUS ARCHITECTURE
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-sans tracking-widest text-white/60">
          <a href="#dreams" className="hover:text-[#D97706] transition-colors">PARADOX CHAMBERS</a>
          <a href="#time" className="hover:text-[#D97706] transition-colors">MELTING CHRONOLOGY</a>
          <a href="#gravity" className="hover:text-[#D97706] transition-colors">NON-EUCLIDEAN STAIRS</a>
        </div>

        <button 
          onClick={() => setDreamLevel((dreamLevel % 3) + 1)}
          className="px-5 py-2 rounded-full border border-[#D97706] text-[#D97706] hover:bg-[#D97706] hover:text-black font-sans text-xs uppercase tracking-widest transition-all cursor-pointer"
        >
          Dream Layer: 0{dreamLevel} 🌙
        </button>
      </nav>

      {/* Hero Section: The Suspended Dreamscape */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-24 text-center space-y-8 relative z-10">
        <span className="text-xs font-sans tracking-[0.4em] uppercase text-[#D97706] block">
          WHERE GRAVITY BENDS AND THE AWAKE DREAM
        </span>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal font-cormorant tracking-tight text-white leading-tight">
          The Subconscious <br />
          <span className="text-[#D97706] italic font-serif">Awakening.</span>
        </h1>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-white/70 font-light leading-relaxed font-instrument italic">
          “Time does not tick forward like an arrow. It pools like warm honey upon desert stones, reflecting skies that were never born.”
        </p>

        {/* Hero Visual Composition: Desert Monolith & Metaphysical Portal */}
        <div className="pt-6 max-w-4xl mx-auto p-2 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl">
          <ImageBox
            src={MEDIA_ASSETS.surrealism.desertMonolith}
            alt="Surrealist Desert Monolith under Twilight Skies"
            aspectRatio="16/9"
            rounded="2xl"
            caption="Solitary metaphysical tower in silent red sand dunes under an eclipse sky (Cadaqués 1929)"
          />
        </div>
      </section>

      {/* Infinite Surrealist Marquee */}
      <section className="py-6 border-y border-white/10 bg-white/[0.02]">
        <InfiniteImageMarquee
          speed="normal"
          images={[
            { src: MEDIA_ASSETS.surrealism.desertMonolith, title: 'Cadaqués Monolith', tag: 'ONEIRIC' },
            { src: MEDIA_ASSETS.surrealism.paradoxArchitecture, title: 'Non-Euclidean Vaults', tag: 'PARADOX' },
            { src: MEDIA_ASSETS.avantGarde.prismSculpture, title: 'Suspended Oculi', tag: 'METAPHYSICS' },
            { src: MEDIA_ASSETS.abstractArt.fluidCanvas, title: 'Liquid Chronometer', tag: 'DALÍ ECHO' }
          ]}
        />
      </section>

      {/* Paradox Chambers Gallery */}
      <section id="dreams" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono text-[#D97706] uppercase tracking-widest">ONEIRIC ARCHITECTURE</span>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-white mt-1">Non-Euclidean Chambers & Melting Time</h2>
          </div>
          <span className="font-mono text-xs text-white/50">CHRONOLOGY SUSPENDED</span>
        </div>

        <ImageGallery
          columns={3}
          theme="dark"
          items={[
            {
              src: MEDIA_ASSETS.surrealism.paradoxArchitecture,
              title: 'The Infinite Portico',
              subtitle: 'Arches casting shadows in four directions simultaneously under a static moon',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.avantGarde.prismSculpture,
              title: 'Crystalline Oculus',
              subtitle: 'Prismatic lens refracting the subconscious memories of the observer',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.surrealism.desertMonolith,
              title: 'The Silent Obelisk',
              subtitle: 'Carved sandstone monument radiating low-frequency magnetic resonance',
              aspectRatio: '4/3'
            }
          ]}
        />
      </section>

      {/* Surrealism Footer */}
      <footer className="border-t border-white/10 py-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-white/40">
        <div>ONEIRIC METAPHYSICS ATELIER • VENICE & CADAQUÉS</div>
        <div>REALITY IS A CONSTRUCT • © 1924–2026</div>
      </footer>
    </div>
  );
};
