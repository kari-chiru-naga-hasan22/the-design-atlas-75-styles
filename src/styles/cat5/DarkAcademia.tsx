import React, { useState } from 'react';
import { BookOpen, Bookmark, Shield, Feather, Key, Flame } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const DarkAcademiaPage: React.FC = () => {
  const [sealBroken, setSealBroken] = useState(false);

  return (
    <div className="min-h-screen bg-[#140C08] text-[#EAD9C0] font-serif selection:bg-[#7F1D1D] selection:text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Ancient Library Vault Top Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-[#A89278] border-b border-[#3D251A] pb-3 uppercase tracking-[0.25em]">
          <div>BODLEIAN SPECIAL COLLECTIONS • FELLOWSHIP ARCHIVE 1682</div>
          <div className="hidden sm:block">STATUS: CLASSIFIED UNDER CODEX III</div>
        </div>

        {/* Dark Academia Header */}
        <header className="flex flex-wrap items-center justify-between gap-6 py-4 border-b border-[#3D251A]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#2A160F] border border-[#B45309] flex items-center justify-center text-xl text-[#B45309] shadow-inner">
              📜
            </div>
            <div>
              <div className="text-3xl font-bold font-serif-luxury tracking-widest text-[#EAD9C0] uppercase">
                BLACKWOOD FELLOWSHIP
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[#B45309] uppercase">
                ANTIQUARIAN SCHOLARLY CIRCLE • OXFORD
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-serif-luxury tracking-widest text-[#C4B29B]">
            <a href="#codex" className="hover:text-[#EAD9C0] transition-colors">THE LATIN CODICES</a>
            <a href="#archives" className="hover:text-[#EAD9C0] transition-colors">MAHOGANY STACKS</a>
            <a href="#letters" className="hover:text-[#EAD9C0] transition-colors">WAX-SEALED EPISTLES</a>
          </div>

          <button 
            onClick={() => setSealBroken(true)}
            className="px-5 py-2.5 rounded bg-[#7F1D1D] hover:bg-[#991B1B] text-[#EAD9C0] font-serif-luxury text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-md flex items-center gap-2"
          >
            {sealBroken ? 'Seal Melted 🕯️' : 'Break Wax Seal'}
          </button>
        </header>

        {/* Hero Section: Candlelit Mahogany & Latin Inscriptions */}
        <section className="text-center space-y-6 py-6 max-w-4xl mx-auto">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#B45309] block">
            VERITAS VINCIT OMNIA • ANNO DOMINI MDCLXXXII
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal font-serif-luxury text-[#EAD9C0] leading-[1.08] uppercase">
            Ancient folios, <br />
            <span className="text-[#B45309] italic">nocturnal inquiries.</span>
          </h1>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-[#BAA790] leading-relaxed font-cormorant font-light">
            Behind the locked iron gates of the Radcliffe Camera, thirty fellows convene by candlelight. Deciphering erased palimpsests, forgotten astronomical charts, and classical Greek verse.
          </p>

          {/* Hero Visual Composition: Gothic Vault Library Photography */}
          <div className="pt-6 max-w-4xl mx-auto p-3 bg-[#1C120C] border border-[#3D251A] rounded-2xl shadow-2xl">
            <ImageBox
              src={MEDIA_ASSETS.darkAcademia.gothicLibrary}
              alt="Gothic Oxford University Library Stacks with High Vaulted Ceilings"
              aspectRatio="16/9"
              rounded="xl"
              caption="Carved oak bookcases holding 15th-century Latin incunabula illuminated by stained glass"
            />
          </div>

          <div className="pt-6 flex justify-center gap-4">
            <button className="px-8 py-3.5 rounded bg-[#2A160F] border border-[#B45309] hover:bg-[#3D251A] text-[#EAD9C0] font-serif-luxury text-xs uppercase tracking-widest transition-all cursor-pointer">
              Examine Palimpsest Manuscripts
            </button>
            <button className="px-8 py-3.5 rounded bg-[#7F1D1D] hover:bg-[#991B1B] text-[#EAD9C0] font-serif-luxury text-xs uppercase tracking-widest transition-all cursor-pointer">
              Apply For Fellowship Seat
            </button>
          </div>
        </section>

        {/* Infinite Antiquarian Library Marquee */}
        <div className="rounded-2xl border border-[#3D251A] overflow-hidden bg-[#1C120C] p-2">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.darkAcademia.gothicLibrary, title: 'Bodleian Duke Humfrey Library', tag: 'OXFORD 1488' },
              { src: MEDIA_ASSETS.darkAcademia.oxfordCloister, title: 'New College Gothic Cloister', tag: 'CLOISTERS' },
              { src: MEDIA_ASSETS.editorialMinimalism.openHardcoverBook, title: 'Illuminated Latin Vellum', tag: 'INCUNABULA' },
              { src: MEDIA_ASSETS.handDrawn.inkSketchbook, title: 'Iron Gall Ink Manuscript', tag: 'PALIMPSEST' }
            ]}
          />
        </div>

        {/* 3 Antiquarian Catalog Stacks Gallery */}
        <section id="codex" className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b border-[#3D251A] pb-3">
            <h3 className="text-3xl font-serif-luxury text-[#EAD9C0] uppercase">The Antiquarian Stacks</h3>
            <span className="font-mono text-xs text-[#B45309]">SPECIAL COLLECTIONS 1682</span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.darkAcademia.oxfordCloister,
                title: 'The Cloister Vaults',
                subtitle: 'Medieval quadrangle where fellows debate metaphysics beneath limestone arches',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.editorialMinimalism.openHardcoverBook,
                title: 'Vellum Astronomical Folios',
                subtitle: 'Hand-lettered celestial planetary orbits annotated with iron gall marginalia',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.darkAcademia.gothicLibrary,
                title: 'The Chained Book Library',
                subtitle: 'Rare leather-bound treatises anchored by wrought iron links to oak reading desks',
                aspectRatio: '4/3'
              }
            ]}
          />
        </section>

        {/* Dark Academia Footer */}
        <footer className="p-8 rounded-2xl bg-[#1C120C] border border-[#3D251A] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#A89278] gap-4">
          <div>BLACKWOOD FELLOWSHIP • RADCLIFFE SQUARE, OXFORD OX1</div>
          <div>IN NOCTIS SAPIENTIA • © 1682–2026</div>
        </footer>
      </div>
    </div>
  );
};
