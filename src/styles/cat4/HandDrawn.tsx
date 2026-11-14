import React, { useState } from 'react';
import { Feather, BookOpen, Heart, Sparkles, Compass, PenTool } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const HandDrawnPage: React.FC = () => {
  const [doodleLikes, setDoodleLikes] = useState(48);

  return (
    <div className="min-h-screen bg-[#FFFBF2] text-[#23201D] font-serif selection:bg-[#8C7A6B] selection:text-white p-4 sm:p-8">
      {/* Hand-Drawn Sketchbook Page Container */}
      <div className="max-w-5xl mx-auto bg-white border-2 border-[#23201D] rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0_#23201D] space-y-10 relative">
        
        {/* Hand-Drawn Doodle Navigation */}
        <header className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-dashed border-[#23201D] pb-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl">✒️</div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-instrument tracking-tight text-[#23201D]">
                Ink & Sketchbook Tales
              </div>
              <div className="text-xs font-newsreader italic text-[#8C7A6B]">
                Handmade journals & botanical fountain pen inks
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm font-instrument italic">
            <a href="#stationery" className="hover:underline">Stationery</a>
            <a href="#inks" className="hover:underline">Oak Gall Inks</a>
            <a href="#diary" className="hover:underline">Daily Diary</a>
          </div>

          <button 
            onClick={() => setDoodleLikes(l => l + 1)}
            className="px-4 py-2 rounded-full border-2 border-[#23201D] hover:bg-[#FFFBF2] text-xs font-sans font-bold cursor-pointer transition-all flex items-center gap-1.5"
          >
            <span>Sketchbook Love:</span>
            <span className="text-red-500">♥</span>
            <span>{doodleLikes}</span>
          </button>
        </header>

        {/* Hero Section: Charcoal Doodles & Warm Literary Typography */}
        <section className="text-center space-y-6 max-w-3xl mx-auto py-4">
          <div className="inline-block px-3 py-1 rounded-full border border-[#23201D] bg-[#FFFBF2] text-xs font-sans tracking-wide">
            ~ Handcrafted with walnut gall ink & bamboo nibs ~
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal font-instrument italic text-[#23201D] leading-tight">
            Imperfections that make a soul feel warm.
          </h1>

          <p className="text-base sm:text-lg text-[#554E48] leading-relaxed font-newsreader max-w-xl mx-auto">
            In an era of sterile vector pixels, we cherish the wobble of a hand-drawn line, the accidental blot of dark ink, and the honest texture of rough cotton rag paper.
          </p>

          {/* Hero Visual Composition: Sketchbook & Ink Pots */}
          <div className="pt-4 max-w-2xl mx-auto p-3 bg-[#FFFBF2] border-2 border-[#23201D] rounded-2xl shadow-[6px_6px_0_#8C7A6B]">
            <ImageBox
              src={MEDIA_ASSETS.handDrawn.inkSketchbook}
              alt="Hand-bound Open Sketchbook with Fountain Pen and Botanical Studies"
              aspectRatio="16/9"
              rounded="xl"
              caption="Oak gall ink wash on 300gsm cold-pressed cotton paper (Devon Workshop)"
            />
          </div>
        </section>

        {/* Infinite Sketchbook Marquee */}
        <div className="border-2 border-dashed border-[#23201D] p-2 bg-[#FFFBF2] rounded-2xl">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.handDrawn.inkSketchbook, title: 'Botanical Field Journal', tag: 'DEVON 1890' },
              { src: MEDIA_ASSETS.handDrawn.watercolorPalette, title: 'Mineral Watercolor Cakes', tag: 'CERULEAN BLUE' },
              { src: MEDIA_ASSETS.editorialMinimalism.openHardcoverBook, title: 'Deckle Edge Notebook', tag: 'COTTON RAG' },
              { src: MEDIA_ASSETS.organicNature.livingFoliage, title: 'Foliage Studies', tag: 'PEN & INK' }
            ]}
          />
        </div>

        {/* Ink & Stationery Collection */}
        <section id="inks" className="space-y-6 pt-2">
          <div className="flex justify-between items-baseline border-b-2 border-dashed border-[#23201D] pb-3">
            <h3 className="text-2xl font-bold font-instrument text-[#23201D]">Artisanal Ink & Paper Catalogue</h3>
            <span className="font-newsreader italic text-xs text-[#8C7A6B]">Autumn Batch • Limited Run</span>
          </div>

          <ImageGallery
            columns={3}
            theme="minimal"
            items={[
              {
                src: MEDIA_ASSETS.handDrawn.watercolorPalette,
                title: 'Handmade Mineral Pigments',
                subtitle: 'Raw lapis lazuli and burnt sienna bound with clover honey and gum arabic',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.editorialMinimalism.openHardcoverBook,
                title: 'Deckle-Edged Cotton Journal',
                subtitle: '180 pages of handmade unpressed paper bound with waxed Irish linen thread',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.handDrawn.inkSketchbook,
                title: 'Botanical Ink Field Guide',
                subtitle: 'Walnut husk brown ink drawings observing wild ferns in Dartmoor',
                aspectRatio: '4/3'
              }
            ]}
          />
        </section>

        {/* Hand-Drawn Footer */}
        <footer className="pt-8 border-t-2 border-dashed border-[#23201D] flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-[#8C7A6B] gap-4">
          <div>INK & SKETCH TALES • DEVON COUNTRYSIDE WORKSHOP</div>
          <div>HAND-DRAWN WITH LOVE • © 2026</div>
        </footer>
      </div>
    </div>
  );
};
