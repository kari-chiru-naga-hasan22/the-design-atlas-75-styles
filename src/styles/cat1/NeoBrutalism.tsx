import React, { useState } from 'react';
import { Rocket, Zap, Star, Sparkles, Check, ArrowRight, Code } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ImageBox, ImageGallery, DeviceMockup } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const NeoBrutalismPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');

  const triggerSparkle = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const templates = [
    {
      title: 'SAAS LAUNCH KIT',
      subtitle: 'Complete high-converting checkout and auth screens with 4px black borders.',
      category: 'COMMERCE UI',
      year: 'v3.2',
      src: MEDIA_ASSETS.neoBrutalism.colorfulGadget,
      aspectRatio: '4/3' as const
    },
    {
      title: 'DEV WORKSPACE DASH',
      subtitle: 'High contrast metrics, analytics charts, and telemetry status widgets.',
      category: 'DASHBOARD',
      year: 'v4.0',
      src: MEDIA_ASSETS.neoBrutalism.creativeDesk,
      aspectRatio: '4/3' as const
    },
    {
      title: 'POP DESIGN SYSTEM',
      subtitle: 'Figma token library with 200+ chunky icons, badges, and offset buttons.',
      category: 'DESIGN TOKENS',
      year: 'v2.8',
      src: MEDIA_ASSETS.neoBrutalism.popArtToy,
      aspectRatio: '4/3' as const
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFBEB] text-black font-sans selection:bg-[#FFE600] selection:text-black">
      {/* Neo-Brutalist Top Notification Bar */}
      <div className="bg-[#FFE600] border-b-3 border-black py-2.5 px-4 text-center text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2">
        <span>⚡ VERSION 3.0 DROPPED! 50+ FRESH COMPONENTS ADDED</span>
        <button 
          onClick={triggerSparkle}
          className="ml-2 px-2 py-0.5 bg-black text-white rounded text-[11px] font-mono hover:scale-105 transition-transform cursor-pointer"
        >
          CLAIM 40% OFF 🎁
        </button>
      </div>

      {/* Chunky Neo-Brutalist Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between border-b-3 border-black bg-white my-4 rounded-2xl shadow-[5px_5px_0px_#000]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FFE600] border-3 border-black flex items-center justify-center text-xl shadow-[3px_3px_0px_#000]">
            🔨
          </div>
          <span className="text-xl sm:text-2xl font-black tracking-tight font-syne">
            POPFORGE<span className="text-[#A855F7]">.DEV</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-bold">
          <a href="#showcase" className="hover:text-[#A855F7] transition-colors">Showcase</a>
          <a href="#templates" className="hover:text-[#A855F7] transition-colors">Templates</a>
          <a href="#pricing" className="hover:text-[#A855F7] transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={triggerSparkle}
            className="px-5 py-2.5 bg-[#FFE600] hover:bg-[#ffea33] text-black font-black text-xs uppercase tracking-wider rounded-xl border-3 border-black shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
          >
            Get PopForge 🔥
          </button>
        </div>
      </nav>

      {/* Hero Section: Saturated, Bold & Punchy with Real Workspace Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 bg-[#A855F7] text-white font-mono font-bold text-xs uppercase rounded-lg border-2 border-black shadow-[3px_3px_0px_#000] transform -rotate-2">
              ★ INDIE WEB DEVELOPER TOOLKIT ★
            </div>

            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight leading-[0.92] font-syne">
              BUILD FAST. <br />
              <span className="bg-[#FFE600] px-3 border-3 border-black inline-block transform rotate-1 shadow-[4px_4px_0px_#000]">
                STAND OUT.
              </span> <br />
              NO BORING SITES.
            </h1>

            <p className="text-base sm:text-lg font-bold text-neutral-800 max-w-xl leading-relaxed">
              Tired of bland monochromatic SaaS sites? PopForge gives you chunky high-contrast cards, retro offset drop shadows, and unapologetic 4px black borders that scream confidence.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={triggerSparkle}
                className="px-8 py-4 bg-[#FF6B6B] text-white font-black uppercase tracking-wider text-sm rounded-xl border-3 border-black shadow-[5px_5px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
              >
                <Zap className="w-4 h-4 fill-current" /> EXPLORE 50+ COMPONENTS
              </button>
              <button className="px-6 py-4 bg-white text-black font-black uppercase tracking-wider text-sm rounded-xl border-3 border-black shadow-[5px_5px_0px_#000]">
                READ THE DOCS
              </button>
            </div>
          </div>

          {/* Hero Media Container: Chunky Studio Mockup */}
          <div id="showcase" className="lg:col-span-5">
            <div className="bg-white border-4 border-black p-4 rounded-3xl shadow-[10px_10px_0px_#A855F7] space-y-4">
              <div className="flex justify-between items-center text-xs font-mono font-bold border-b-2 border-black pb-2">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF6B6B] border border-black" />
                  <span className="w-3 h-3 rounded-full bg-[#FFE600] border border-black" />
                  <span className="w-3 h-3 rounded-full bg-[#00F0FF] border border-black" />
                </span>
                <span className="text-[#A855F7]">POPFORGE_STUDIO.JSX</span>
              </div>

              <ImageBox
                src={MEDIA_ASSETS.neoBrutalism.heroStudio}
                alt="Creative Modern Indie Developer Workspace"
                aspectRatio="4/3"
                rounded="xl"
                border={true}
                borderColor="border-black border-2"
                tag="LIVE INTERFACE"
              />

              <div className="flex justify-between items-center text-xs font-mono font-bold">
                <span>COMPONENT ENGINE: REACT 19</span>
                <span className="bg-[#FFE600] px-2 py-0.5 border border-black">TAILWIND V4 READY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Column Template Showcase Gallery */}
      <section id="templates" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b-4 border-black pb-4">
          <div>
            <span className="font-mono text-xs uppercase text-[#FF6B6B] font-black tracking-widest">
              POP ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight font-syne">
              READY-TO-SHIP TEMPLATES
            </h2>
          </div>
          <button 
            onClick={triggerSparkle}
            className="px-4 py-2 bg-[#A855F7] text-white font-mono font-black text-xs uppercase rounded-xl border-2 border-black shadow-[3px_3px_0px_#000]"
          >
            GET ALL TEMPLATES ($49)
          </button>
        </div>

        <ImageGallery items={templates} columns={3} theme="pop" />
      </section>

      {/* Footer */}
      <footer className="border-t-3 border-black bg-white p-8 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono font-bold">
          <div>POPFORGE DEV // THE NEO-BRUTALIST CREATIVE TOOLKIT</div>
          <div>BUILT WITH BOLD SHADOWS AND PURE JOY • 2026</div>
        </div>
      </footer>
    </div>
  );
};
