import React, { useState } from 'react';
import { Sparkles, Star, BookOpen, Compass, Heart, Wand2, ArrowUpRight } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const IllustrativeDesignPage: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<number>(0);

  const chapters = [
    {
      title: 'CHAPTER I • THE WHISPERING OAK',
      companion: 'Pip the Hazel Owl',
      quest: 'Seeking the fallen Starlight Crystal in the Mossy Glade',
      quote: '“True bravery is small enough to fit inside an acorn shell.”'
    },
    {
      title: 'CHAPTER II • THE CELESTIAL CLOCKMAKER',
      companion: 'Barnaby the Brass Hare',
      quest: 'Winding the great pendulum of the Moon Tower',
      quote: '“Time is merely fairy dust dancing to the rhythm of wonder.”'
    },
    {
      title: 'CHAPTER III • THE ENCHANTED ARCHIPELAGO',
      companion: 'Coraline the Sea Otter',
      quest: 'Sailing paper galleons across the Phosphorescent Bay',
      quote: '“Every wave carries a story that only the quietest ears may hear.”'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFBEB] text-[#4C1D95] font-sans selection:bg-[#FBBF24] selection:text-black relative overflow-x-hidden">
      
      {/* Whimsical Storybook Border Top */}
      <div className="w-full bg-[#4C1D95] py-2 px-4 text-center text-xs font-mono font-bold tracking-widest text-[#FBBF24]">
        ✨ STORYCRAFT KINGDOM // HAND-ILLUSTRATED PICTURE BOOKS &amp; ANIMATED FAIRYTALES ✨
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Fairytale Storybook Header */}
        <header className="bg-white border-4 border-[#4C1D95] p-5 rounded-3xl shadow-[8px_8px_0px_#FBBF24] flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FBBF24] border-2 border-[#4C1D95] flex items-center justify-center text-2xl shadow-[3px_3px_0px_#4C1D95]">
              🏰
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-dm-serif text-[#4C1D95] tracking-tight">
                Storycraft <span className="text-[#059669]">Kingdom</span>
              </div>
              <div className="text-[11px] font-mono tracking-wider text-[#4C1D95]/70 uppercase">
                HANDCRAFTED PICTURE BOOKS &amp; WONDERFUL ADVENTURES
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono font-bold text-[#059669]">
              <Sparkles className="w-4 h-4 text-[#FBBF24]" />
              <span>MAGIC METER: 100% WONDER</span>
            </div>
            <button className="px-5 py-2.5 rounded-full bg-[#4C1D95] text-white font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#059669] transition-colors shadow-[3px_3px_0px_#FBBF24] cursor-pointer">
              OPEN STORYBOOK
            </button>
          </div>
        </header>

        {/* Hero Section: Whimsical Fairytale Landscape & Mascots */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FBBF24]/30 border-2 border-[#4C1D95] text-xs font-mono font-bold uppercase tracking-wider text-[#4C1D95]">
              <Wand2 className="w-4 h-4 text-[#4C1D95]" />
              A WORLD WHERE EVERY PAGE COMES ALIVE
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal font-dm-serif text-[#4C1D95] leading-[1.05]">
              WHERE DREAMS <br />
              <span className="italic text-[#059669] underline decoration-wavy decoration-[#FBBF24]">
                ARE PAINTED
              </span> <br />
              IN GOLDEN LIGHT.
            </h1>

            <p className="text-base sm:text-lg text-[#4C1D95]/80 max-w-xl font-medium leading-relaxed font-sans">
              We paint picture books with watercolor brushes, pen-and-ink crosshatching, 
              and endless imagination. Follow tiny brave hedgehogs, friendly castle dragons, 
              and starlight navigators as they unlock the quiet magic hidden in ordinary days.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-8 py-4 rounded-full bg-[#4C1D95] text-white font-mono text-xs uppercase font-bold tracking-widest border-2 border-[#4C1D95] shadow-[5px_5px_0px_#FBBF24] hover:bg-[#FBBF24] hover:text-[#4C1D95] transition-all cursor-pointer">
                BEGIN CHAPTER ONE
              </button>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#4C1D95]">
                <Heart className="w-4 h-4 text-[#FBBF24] fill-current" />
                LOVED BY 250,000 YOUNG DREAMERS
              </div>
            </div>
          </div>

          {/* Hero Storybook Watercolor Media Container */}
          <div className="lg:col-span-5">
            <div className="bg-white border-4 border-[#4C1D95] p-4 rounded-3xl shadow-[12px_12px_0px_#059669] space-y-4">
              <div className="flex justify-between items-center text-xs font-mono font-bold border-b-2 border-[#4C1D95]/20 pb-2">
                <span className="text-[#059669]">THE TALES OF EVERWOOD</span>
                <span className="text-[#4C1D95]">FOLIO ILLUSTRE</span>
              </div>

              <ImageBox
                src={MEDIA_ASSETS.illustrative.watercolorStorybook}
                alt="Enchanted Storybook Watercolor Fairytale Forest"
                aspectRatio="4/3"
                caption="Hand-painted gouache and watercolor woodland with starlight fireflies."
                className="rounded-2xl overflow-hidden border-2 border-[#4C1D95]"
              />

              {/* Illustrated Mascot Vignette */}
              <div className="bg-[#FFFBEB] border-2 border-dashed border-[#4C1D95] rounded-xl p-3 text-center space-y-1">
                <div className="text-xs font-mono font-bold uppercase text-[#059669]">
                  COMPANION: {chapters[activeChapter].companion}
                </div>
                <div className="text-sm font-dm-serif font-bold text-[#4C1D95]">
                  {chapters[activeChapter].title}
                </div>
                <p className="text-[11px] italic text-[#4C1D95]/80 font-sans">
                  {chapters[activeChapter].quote}
                </p>
              </div>

              {/* Chapter navigation tabs */}
              <div className="grid grid-cols-3 gap-2">
                {chapters.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveChapter(idx)}
                    className={`py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      activeChapter === idx
                        ? 'bg-[#4C1D95] text-white shadow-sm'
                        : 'bg-[#FFFBEB] text-[#4C1D95] border border-[#4C1D95]/30 hover:bg-white'
                    }`}
                  >
                    TALE 0{idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Storybook Infinite Marquee */}
        <section className="py-2 border-y-4 border-[#4C1D95] bg-white">
          <InfiniteImageMarquee
            speed="slow"
            images={[
              { src: MEDIA_ASSETS.illustrative.watercolorStorybook, title: 'Everwood Forest Glade', tag: 'WATERCOLOR' },
              { src: MEDIA_ASSETS.illustrative.enchantedFairytaleForest, title: 'The Starlight Castle', tag: 'GOUACHE' },
              { src: MEDIA_ASSETS.cottagecore.wildflowers, title: 'Wildflower Field Tea', tag: 'PICTURE BOOK' },
              { src: MEDIA_ASSETS.organicNature.riverStone, title: 'Handmade Story Mascot', tag: 'MAGIC' }
            ]}
          />
        </section>

        {/* 3 Illustrated Storybook Series Gallery */}
        <section className="space-y-6 pt-4">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-dm-serif text-[#4C1D95]">
              OUR ENCHANTED ART PRINT ARCHIVES
            </h2>
            <div className="h-1 flex-1 bg-[#4C1D95]/20" />
            <span className="text-xs font-mono font-bold text-[#059669]">SPRING RELEASES</span>
          </div>

          <ImageGallery
            columns={3}
            theme="pop"
            items={[
              {
                src: MEDIA_ASSETS.illustrative.watercolorStorybook,
                title: 'The Whispering Oak',
                subtitle: 'Pip the Hazel Owl under moonlight',
                category: 'WATERCOLOR'
              },
              {
                src: MEDIA_ASSETS.illustrative.enchantedFairytaleForest,
                title: 'The Celestial Clockmaker',
                subtitle: 'Barnaby the Brass Hare Winds the Stars',
                category: 'GOUACHE'
              },
              {
                src: MEDIA_ASSETS.cottagecore.wildflowers,
                title: 'The Little Moss Cottage',
                subtitle: 'A tiny field mouse preparing chamomile soup',
                category: 'FAIRYTALE'
              }
            ]}
          />
        </section>

        {/* Storybook Callout Banner */}
        <div className="bg-[#4C1D95] text-white p-8 sm:p-12 rounded-3xl border-4 border-[#FBBF24] shadow-[10px_10px_0px_#059669] text-center space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FBBF24]">
            SPECIAL COLLECTOR’S HARDBOUND EDITION
          </div>
          <h3 className="text-2xl sm:text-4xl font-dm-serif font-normal max-w-2xl mx-auto">
            "Every child is an artist who still remembers how to talk to fireflies."
          </h3>
          <div className="pt-2">
            <button className="px-8 py-3.5 rounded-full bg-[#FBBF24] text-[#4C1D95] font-mono text-xs uppercase font-black tracking-wider hover:bg-white transition-colors cursor-pointer">
              ORDER GOLD-FOIL HARDBACK GIFT BOX
            </button>
          </div>
        </div>

        {/* Fairytale Footer */}
        <footer className="border-t-4 border-[#4C1D95] pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono font-bold text-[#4C1D95]">
          <div className="flex items-center gap-2">
            <span>📖 STORYCRAFT KINGDOM PICTURE BOOKS</span>
            <span>•</span>
            <span>PRINTED ON SUSTAINABLE RECYCLED PAPER</span>
          </div>
          <div>
            MADE WITH FAIRY DUST &amp; PURE LOVE • 2026
          </div>
        </footer>

      </div>
    </div>
  );
};
