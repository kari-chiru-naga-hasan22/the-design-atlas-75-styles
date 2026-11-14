import React, { useState } from 'react';
import { Type, Sliders, ArrowUpRight, Sparkles, RefreshCw, Layers } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const ExperimentalTypographyPage: React.FC = () => {
  const [fontWeight, setFontWeight] = useState(700);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [skewAngle, setSkewAngle] = useState(0);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-mono selection:bg-[#CCFF00] selection:text-black p-4 sm:p-8 overflow-hidden">
      {/* Typography Warped Marquee Banner */}
      <div className="border-y-2 border-[#CCFF00] py-2 bg-[#121212] text-[#CCFF00] text-xs font-bold uppercase tracking-widest overflow-hidden mb-8">
        <div className="animate-marquee whitespace-nowrap flex gap-10">
          <span>GLYPH MANIFESTO • VARIABLE AXIS INVERSION</span>
          <span>WEIGHT: [100 - 900] • WIDTH: [50% - 200%] • SLANT: [-20° - +20°]</span>
          <span>THE LETTERFORM LIBERATED FROM THE GRID</span>
          <span>GLYPH MANIFESTO • VARIABLE AXIS INVERSION</span>
        </div>
      </div>

      {/* Experimental Type Header */}
      <header className="max-w-7xl mx-auto flex items-center justify-between border-b border-white/20 pb-6 mb-12">
        <div>
          <div className="text-3xl sm:text-4xl font-black font-syne tracking-tighter text-white">
            GLYPH.MANIFESTO
          </div>
          <div className="text-[10px] text-[#CCFF00]">RADICAL VARIABLE TYPE FOUNDRY • TOKYO / BASEL</div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="hidden sm:inline text-white/50">AXIS: WGHT={fontWeight}</span>
          <button 
            onClick={() => { setFontWeight(900); setSkewAngle(-8); setLetterSpacing(4); }}
            className="px-4 py-2 bg-[#CCFF00] text-black font-bold text-xs uppercase hover:bg-white transition-colors cursor-pointer"
          >
            Extreme Axis Max
          </button>
        </div>
      </header>

      {/* Hero Section: Gigantic Variable Letterform Sculpture */}
      <section className="max-w-7xl mx-auto py-8 text-center space-y-8">
        <div 
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] font-syne leading-none uppercase tracking-tighter select-none transition-all duration-150"
          style={{
            fontWeight: fontWeight,
            letterSpacing: `${letterSpacing}px`,
            transform: `skewX(${skewAngle}deg)`
          }}
        >
          <span className="text-white hover:text-[#CCFF00] transition-colors">DE</span>
          <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '2px #FFFFFF' }}>CON</span>
          <span className="text-[#CCFF00]">STRUCT</span>
        </div>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/70 leading-relaxed font-sans pt-2">
          Typography is not merely a vehicle for language; it is an architectural sculpture occupying spatial coordinates in the retina. We liberate the glyph from legible servitude.
        </p>

        {/* Live Variable Font Axes Control Console */}
        <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-[#111116] border border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-left">
          <div className="space-y-2">
            <div className="flex justify-between font-bold">
              <span>WEIGHT (wght)</span>
              <span className="text-[#CCFF00]">{fontWeight}</span>
            </div>
            <input 
              type="range" min="200" max="900" step="50" value={fontWeight} 
              onChange={(e) => setFontWeight(Number(e.target.value))} 
              className="w-full accent-[#CCFF00] cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between font-bold">
              <span>TRACKING (opsz)</span>
              <span className="text-[#CCFF00]">{letterSpacing}px</span>
            </div>
            <input 
              type="range" min="-4" max="16" value={letterSpacing} 
              onChange={(e) => setLetterSpacing(Number(e.target.value))} 
              className="w-full accent-[#CCFF00] cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between font-bold">
              <span>SLANT (slnt)</span>
              <span className="text-[#CCFF00]">{skewAngle}°</span>
            </div>
            <input 
              type="range" min="-15" max="15" value={skewAngle} 
              onChange={(e) => setSkewAngle(Number(e.target.value))} 
              className="w-full accent-[#CCFF00] cursor-pointer"
            />
          </div>
        </div>

        {/* Hero Visual Composition: Letterform Sculpture Photography */}
        <div className="pt-6 max-w-4xl mx-auto p-3 bg-[#111116] border-2 border-[#CCFF00] shadow-[0_0_30px_rgba(204,255,0,0.15)]">
          <ImageBox
            src={MEDIA_ASSETS.experimentalTypography.sculpturalLetters}
            alt="Experimental 3D Typographic Sculpture and Letterpress Proof"
            aspectRatio="16/9"
            rounded="none"
            caption="Dimensional kinetic glyph projections carved from solid acrylic in darkroom void"
          />
        </div>
      </section>

      {/* Infinite Variable Font Marquee */}
      <section className="py-6 border-y border-white/20 bg-[#111116] my-8">
        <InfiniteImageMarquee
          speed="normal"
          images={[
            { src: MEDIA_ASSETS.experimentalTypography.sculpturalLetters, title: 'Glyph Architecture 01', tag: 'VARIABLE' },
            { src: MEDIA_ASSETS.experimentalTypography.posterTypography, title: 'Poster Deconstruct', tag: 'INK TRAPS' },
            { src: MEDIA_ASSETS.swissPunk.photostatFilm, title: 'Photostat Distortions', tag: 'WEINGART' },
            { src: MEDIA_ASSETS.editorial.monochromeEditorial, title: 'High-Contrast Monotype', tag: 'LEAD TYPE' }
          ]}
        />
      </section>

      {/* Experimental Type Specimen Gallery */}
      <section className="max-w-7xl mx-auto py-12 space-y-12">
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-white/20 pb-4">
          <div>
            <span className="text-xs text-[#CCFF00] uppercase tracking-widest">VARIABLE SPECIMENS</span>
            <h2 className="text-3xl sm:text-5xl font-black font-syne text-white mt-1">Radical Optical Families</h2>
          </div>
          <span className="text-xs text-white/50">OTF • WOFF2 • VARIABLE AXES</span>
        </div>

        <ImageGallery
          columns={3}
          theme="dark"
          items={[
            {
              src: MEDIA_ASSETS.experimentalTypography.posterTypography,
              title: 'Anarchy Grotesk Poster',
              subtitle: 'Asymmetric letterforms with deliberate baseline collision and variable ink trap expansions',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.swissPunk.photostatFilm,
              title: 'Weingart Monotype Distortions',
              subtitle: 'Camera distortion test sheets exploring optical density variations in darkroom chemicals',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.experimentalTypography.sculpturalLetters,
              title: 'Hyper Serif Kinetic',
              subtitle: 'Needle-thin hairline terminals tapering into razor sharp serif points of 0.25pt thickness',
              aspectRatio: '4/3'
            }
          ]}
        />
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto border-t border-white/20 py-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 gap-4">
        <div>GLYPH MANIFESTO TYPE FOUNDRY • TOKYO SHIBUYA</div>
        <div>VARIABLE FONTS FOR RADICAL VISUAL AGENTS • © 2026</div>
      </footer>
    </div>
  );
};
