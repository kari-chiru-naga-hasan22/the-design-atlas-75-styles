import React, { useState, useEffect } from 'react';
import { LiquidNav } from './LiquidNav';
import { LiquidIntroLoader } from './LiquidIntroLoader';
import { LiquidHero3D } from './LiquidHero3D';
import { LiquidLensDraggable } from './LiquidLensDraggable';
import { LiquidExperienceSection } from './LiquidExperienceSection';
import { LiquidPlayground } from './LiquidPlayground';
import { LiquidMotionScene } from './LiquidMotionScene';
import { LiquidScienceOfLight } from './LiquidScienceOfLight';
import { LiquidSculptureGallery } from './LiquidSculptureGallery';
import { LiquidUIComponents } from './LiquidUIComponents';
import { LiquidColorSpectrum } from './LiquidColorSpectrum';
import { LiquidContentShowcase } from './LiquidContentShowcase';
import { LiquidClimax3D } from './LiquidClimax3D';
import { LiquidFooter } from './LiquidFooter';
import { ArrowDown, Sparkles, Layers, Cpu } from 'lucide-react';

interface LiquidRealityPageProps {
  onBackToAtlas?: () => void;
}

export function LiquidRealityPage({ onBackToAtlas }: LiquidRealityPageProps) {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis smooth scroll if available
  useEffect(() => {
    let lenisInstance: any = null;
    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        lenisInstance = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
        });

        function raf(time: number) {
          lenisInstance?.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      } catch (e) {
        // Fallback to native smooth scroll
      }
    };

    initLenis();

    return () => {
      if (lenisInstance) {
        lenisInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05050A] text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden font-sans">
      {/* Section 01: Cinematic Introduction Loader */}
      {loading && <LiquidIntroLoader onComplete={() => setLoading(false)} />}

      {/* Floating Navigation */}
      <LiquidNav onBackToAtlas={onBackToAtlas} />

      {/* Ambient background glow field */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-600/10 blur-[180px]" />
        <div className="absolute top-3/4 left-1/3 w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[160px]" />
      </div>

      <div className="relative z-10">
        {/* ======================================================== */}
        {/* SECTION 02: HERO — THE WORLD THROUGH GLASS */}
        {/* ======================================================== */}
        <section id="hero" className="relative pt-32 pb-20 px-4 min-h-screen flex flex-col items-center justify-center text-center max-w-7xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-xl text-xs font-mono text-white/80 mb-6 shadow-xl animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>POWERED BY LIQUIDGL • WEBGPU + THREE.JS PBR</span>
          </div>

          {/* Hero Headline */}
          <div className="max-w-5xl mx-auto space-y-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-space tracking-tight text-white leading-[0.95]">
              SEE THE WORLD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300">
                THROUGH GLASS.
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed pt-2">
              An entirely new dimension of light, depth, and liquid interaction. Real-time physical refraction for the modern web.
            </p>
          </div>

          {/* 3D Glass Centerpiece Sculpture */}
          <div className="w-full relative my-4">
            <LiquidHero3D />
          </div>

          {/* Draggable LiquidGL Refractive Lens Stage */}
          <LiquidLensDraggable />

          {/* Scroll Down Indicator */}
          <div className="flex flex-col items-center gap-2 pt-8 text-white/40 font-mono text-xs animate-bounce">
            <span className="tracking-widest uppercase text-[10px]">Scroll to enter exhibition</span>
            <ArrowDown className="w-4 h-4" />
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 03: THE LIQUID GLASS EXPERIENCE */}
        {/* ======================================================== */}
        <LiquidExperienceSection />

        {/* ======================================================== */}
        {/* SECTION 04: REFRACTION PLAYGROUND (THE NINE DIALS) */}
        {/* ======================================================== */}
        <LiquidPlayground />

        {/* ======================================================== */}
        {/* SECTION 05: GLASS IN MOTION (3D CINEMATIC SCENE) */}
        {/* ======================================================== */}
        <LiquidMotionScene />

        {/* ======================================================== */}
        {/* SECTION 06: THE SCIENCE OF LIGHT (OPTICS PHYSICS) */}
        {/* ======================================================== */}
        <div id="science">
          <LiquidScienceOfLight />
        </div>

        {/* ======================================================== */}
        {/* SECTION 07: IMMERSIVE 3D SCULPTURE GALLERY */}
        {/* ======================================================== */}
        <div id="gallery">
          <LiquidSculptureGallery />
        </div>

        {/* ======================================================== */}
        {/* SECTION 08: LIQUID INTERFACE COMPONENTS (APPLE-GRADE UI) */}
        {/* ======================================================== */}
        <div id="components">
          <LiquidUIComponents />
        </div>

        {/* ======================================================== */}
        {/* SECTION 09: A WORLD OF COLOR (SPECTRAL TINTS) */}
        {/* ======================================================== */}
        <LiquidColorSpectrum />

        {/* ======================================================== */}
        {/* SECTION 10: CONTENT BEHIND GLASS (INTERACTIVE SHOWCASE) */}
        {/* ======================================================== */}
        <LiquidContentShowcase />

        {/* ======================================================== */}
        {/* SECTION 11: FINAL CINEMATIC CLIMAX */}
        {/* ======================================================== */}
        <LiquidClimax3D />

        {/* ======================================================== */}
        {/* SECTION 12: FOOTER & COLOPHON */}
        {/* ======================================================== */}
        <LiquidFooter onBackToAtlas={onBackToAtlas} />
      </div>
    </div>
  );
}
