import React, { useState } from 'react';
import { BookOpen, Bookmark, ArrowUpRight, Share2, Eye } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const EditorialMinimalismPage: React.FC = () => {
  const [activeFootnote, setActiveFootnote] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1817] font-serif selection:bg-[#E7E5E4] selection:text-[#1A1817] relative">
      
      {/* Delicate Single Rule Top Border */}
      <div className="w-full h-[1px] bg-[#E7E5E4]" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 space-y-16">
        
        {/* Whisper-Quiet Header */}
        <header className="flex flex-col sm:flex-row justify-between items-baseline border-b border-[#E7E5E4] pb-8 gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-normal font-serif tracking-tight text-[#1A1817]">
              Essay &amp; Essence
            </h1>
            <div className="text-[11px] font-mono tracking-widest text-[#78716C] uppercase">
              A JOURNAL OF LONG-FORM INQUIRY &amp; CRITICAL AESTHETICS
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-[#78716C]">
            <span>FOLIO NO. 18</span>
            <span>AUTUMN 2026</span>
          </div>
        </header>

        {/* Essay Hero Header */}
        <article className="space-y-12">
          
          <div className="space-y-4 max-w-2xl mx-auto text-center sm:text-left">
            <div className="text-xs font-mono tracking-widest uppercase text-[#78716C]">
              ESSAY IN PHILOSOPHY &amp; DESIGN
            </div>

            <h2 className="text-4xl sm:text-6xl font-normal tracking-tight font-serif text-[#1A1817] leading-[1.12]">
              On the Silence of the Page
            </h2>

            <div className="text-xs font-mono text-[#78716C] pt-2 flex items-center gap-4">
              <span>BY PROF. ELENA ROSTAND</span>
              <span>•</span>
              <span>18 MIN READ</span>
            </div>
          </div>

          {/* Central Editorial Hardcover Showcase */}
          <div className="max-w-3xl mx-auto py-2">
            <ImageBox
              src={MEDIA_ASSETS.editorialMinimalism.openHardcoverBook}
              alt="Open Hardcover Book on Textured Mohawk Superfine Paper"
              aspectRatio="16/9"
              caption="Figure 01: Hand-bound hardcover monograph printed on 120gsm Mohawk Superfine Eggshell."
              className="border border-[#E7E5E4]"
            />
          </div>

          {/* Central Classical Reading Column */}
          <div className="max-w-2xl mx-auto space-y-8 text-lg sm:text-xl font-serif text-[#1A1817]/90 leading-[1.75] font-light text-justify">
            <p className="first-letter:text-6xl first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-[#1A1817]">
              In an age of relentless ocular stimulation, where every pixel screams for attention and micro-animations 
              compete for milliseconds of dopamine, the white page remains an act of resistance. 
              Typography was never invented to scream; it was invented to carry the subtle cadence of human breath across centuries.
              <button 
                onClick={() => setActiveFootnote(activeFootnote === 1 ? null : 1)}
                className="inline-flex items-center justify-center text-xs font-mono text-[#78716C] align-super px-1 hover:text-[#1A1817] cursor-pointer"
              >
                [1]
              </button>
            </p>

            {/* Footnote Drawer */}
            {activeFootnote === 1 && (
              <div className="bg-[#E7E5E4]/40 p-4 border-l-2 border-[#1A1817] text-xs font-sans text-[#78716C] my-4 transition-all">
                <span className="font-mono font-bold text-[#1A1817]">[1]</span> See Jan Tschichold, <em>The Form of the Book: Essays on the Morality of Good Design</em> (1975).
              </div>
            )}

            <p>
              When we reduce the margins to optimize for banner space, we do not merely crowd the text—we crowd the mind. 
              The vast whitespace surrounding a solitary paragraph is not empty void; it is the silence in the concert hall 
              before the cello sounds its first note. Without that silence, the note is merely noise.
            </p>

            <blockquote className="my-10 pl-6 border-l border-[#78716C] italic text-xl sm:text-2xl font-serif text-[#1A1817]">
              "The reader does not come to the book to be dazzled by the architect; the reader comes to converse with the author in privacy."
            </blockquote>

            <p>
              Consider the serif itself: not a decorative flourishing, but an optical footstep designed by stonecutters 
              in Rome to arrest the stroke cleanly against the sunlit marble. The serif guides the eye gently horizontally, 
              preventing ocular fatigue during hours of solitary study.
              <button 
                onClick={() => setActiveFootnote(activeFootnote === 2 ? null : 2)}
                className="inline-flex items-center justify-center text-xs font-mono text-[#78716C] align-super px-1 hover:text-[#1A1817] cursor-pointer"
              >
                [2]
              </button>
            </p>

            {activeFootnote === 2 && (
              <div className="bg-[#E7E5E4]/40 p-4 border-l-2 border-[#1A1817] text-xs font-sans text-[#78716C] my-4 transition-all">
                <span className="font-mono font-bold text-[#1A1817]">[2]</span> Father Edward Catich, <em>The Origin of the Serif: Brush Writing and Roman Letters</em> (1968).
              </div>
            )}

            <p>
              Here, on this page, there are no banner advertisements, no pop-up dialogs begging for email newsletters, 
              and no sticky sidebars calculating your scroll depth. There is only ink, cream paper, and the uninterrupted thought.
            </p>
          </div>

          {/* Action Row */}
          <div className="max-w-2xl mx-auto pt-8 border-t border-[#E7E5E4] flex flex-wrap justify-between items-center gap-4 text-xs font-mono text-[#78716C]">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1.5 hover:text-[#1A1817] transition-colors cursor-pointer">
                <Bookmark className="w-4 h-4" /> SAVE TO READING LIST
              </button>
              <button className="flex items-center gap-1.5 hover:text-[#1A1817] transition-colors cursor-pointer">
                <Share2 className="w-4 h-4" /> CITE ESSAY
              </button>
            </div>
            <span>PRINT EDITION PRINTED ON MOHAWK SUPERFINE</span>
          </div>

        </article>

        {/* Editorial Infinite Marquee */}
        <section className="py-2 border-y border-[#E7E5E4]">
          <InfiniteImageMarquee
            speed="slow"
            images={[
              { src: MEDIA_ASSETS.editorialMinimalism.openHardcoverBook, title: 'Hardcover Binding', tag: 'COLOPHON' },
              { src: MEDIA_ASSETS.editorialMinimalism.cottonPaperProof, title: 'Cotton Paper Proof', tag: 'LETTERPRESS' },
              { src: MEDIA_ASSETS.darkAcademia.gothicLibrary, title: 'Bodleian Study Hall', tag: 'ARCHIVE' },
              { src: MEDIA_ASSETS.swiss.gridPoster1, title: 'Typography Proof 16pt', tag: 'ESSAY' }
            ]}
          />
        </section>

        {/* Selected Reading Catalog Gallery */}
        <section className="pt-12 border-t border-[#E7E5E4] space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
            FROM THE SAME FOLIO COMPENDIUM
          </div>

          <ImageGallery
            columns={3}
            theme="minimal"
            items={[
              {
                src: MEDIA_ASSETS.editorialMinimalism.cottonPaperProof,
                title: 'Mohawk Superfine Proof',
                subtitle: 'Hot metal linotype letterpress impression',
                category: 'TYPOGRAPHY'
              },
              {
                src: MEDIA_ASSETS.editorialMinimalism.openHardcoverBook,
                title: 'The Form of the Book',
                subtitle: 'Smyth-sewn cloth binding with debossed spine',
                category: 'PRINT'
              },
              {
                src: MEDIA_ASSETS.darkAcademia.gothicLibrary,
                title: 'The Bodleian Desk',
                subtitle: 'Natural reading light and quiet reverence',
                category: 'SOLITUDE'
              }
            ]}
          />
        </section>

        {/* Colophon & Footer */}
        <footer className="border-t border-[#E7E5E4] pt-8 pb-16 flex flex-col sm:flex-row justify-between items-baseline gap-4 text-xs font-mono text-[#78716C]">
          <div>
            ESSAY &amp; ESSENCE // FOUNDED AT OXFORD 2018
          </div>
          <div className="text-right">
            SET IN NEWSREADER (PRODUCTION TYPE) • OPTICAL SIZE 16PT
          </div>
        </footer>

      </div>
    </div>
  );
};
