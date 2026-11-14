import React, { useState } from 'react';
import { Headphones, Shield, Activity, Battery, ArrowRight, Zap, Check } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const PremiumProductPage: React.FC = () => {
  const [activeDriverView, setActiveDriverView] = useState<'assembled' | 'exploded'>('assembled');
  const [preordered, setPreordered] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0F1D] text-white font-sans selection:bg-[#EA580C] selection:text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Aerospace Engineering Spec Header */}
        <header className="p-6 rounded-3xl bg-[#0F172A] border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EA580C] text-black font-bold flex items-center justify-center text-xl shadow-lg shadow-orange-500/20">
              <Headphones size={22} className="text-white" />
            </div>
            <div>
              <div className="text-xl font-bold font-space tracking-tight text-white">APEX ONE TITANIUM</div>
              <div className="text-[10px] font-mono tracking-widest text-[#94A3B8] uppercase">
                AEROSPACE GRADE 5 TITANIUM PLANAR HEADPHONES
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase text-slate-300">
            <a href="#driver" className="hover:text-[#EA580C] transition-colors">PLANAR DRIVER</a>
            <a href="#specs" className="hover:text-[#EA580C] transition-colors">SPECIFICATIONS</a>
            <a href="#reviews" className="hover:text-[#EA580C] transition-colors">LAB REPORTS</a>
          </div>

          <button 
            onClick={() => setPreordered(true)}
            className="px-5 py-2.5 rounded-full bg-[#EA580C] hover:bg-[#c2410c] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 transition-all cursor-pointer flex items-center gap-2"
          >
            {preordered ? (
              <>
                <Check size={14} /> Reserved (#APX-104)
              </>
            ) : (
              'Pre-Order ($799)'
            )}
          </button>
        </header>

        {/* Hero Section: Titanium Engineering & Exploded Visualizer */}
        <section className="text-center space-y-6 py-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EA580C]/15 border border-[#EA580C]/40 text-[#EA580C] text-xs font-mono uppercase tracking-wider">
            <Zap size={14} /> 100MM PLANAR MAGNETIC TRANSDUCERS
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold font-space tracking-tight text-white leading-tight">
            Forged in Grade 5 Titanium. <br />
            <span className="text-[#EA580C]">Acoustic Perfection.</span>
          </h1>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            CNC-milled from solid billets of aerospace titanium. Sub-nanometer planar magnetic diaphragms producing frequency response from 5Hz to 52kHz with zero audible distortion.
          </p>

          {/* Hero Visual Composition: Precision Engineered Headphones */}
          <div className="pt-6 max-w-3xl mx-auto p-4 bg-[#0F172A] border border-white/15 rounded-3xl shadow-2xl text-left">
            <ImageBox
              src={activeDriverView === 'assembled' ? MEDIA_ASSETS.premiumProduct.machinedTitanium : MEDIA_ASSETS.premiumProduct.explodedChassis}
              alt="Apex One Machined Titanium Planar Headphones"
              aspectRatio="16/9"
              rounded="2xl"
              caption={activeDriverView === 'assembled' ? 'Assembled Grade 5 titanium earcups with perforated lambskin memory foam' : 'Exploded view: Neodymium magnet array and 1.5-micron planar diaphragm'}
            />

            <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono">
              <span className="text-slate-400">VIEW MODE: {activeDriverView.toUpperCase()}</span>
              <button
                onClick={() => setActiveDriverView(activeDriverView === 'assembled' ? 'exploded' : 'assembled')}
                className="px-4 py-1.5 rounded-full border border-[#EA580C] text-[#EA580C] hover:bg-[#EA580C] hover:text-white transition-all cursor-pointer"
              >
                TOGGLE EXPLODED VIEW
              </button>
            </div>
          </div>
        </section>

        {/* Infinite CNC Machining Marquee */}
        <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#0F172A] p-2">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.premiumProduct.machinedTitanium, title: 'Apex One Titanium', tag: 'GRADE 5' },
              { src: MEDIA_ASSETS.premiumProduct.explodedChassis, title: 'Exploded Magnet Array', tag: 'NEODYMIUM' },
              { src: MEDIA_ASSETS.darkMode.oledDarkAudio, title: 'CNC Billet Milling', tag: '5-AXIS CNC' },
              { src: MEDIA_ASSETS.skeuomorphism.luxuryWatchMovement, title: 'Micro-Tolerance Gasket', tag: '0.01MM' }
            ]}
          />
        </div>

        {/* 4 Titanium Engineering Spec Cards */}
        <section id="specs" className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-4 border-t border-white/10">
          <div className="p-6 rounded-2xl bg-[#0F172A] border border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-[#EA580C] uppercase">FREQUENCY RANGE</span>
            <div className="text-2xl font-bold font-space text-white">5Hz — 52kHz</div>
            <div className="text-xs text-slate-400 font-mono">Ultra-wide sub-bass</div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F172A] border border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-[#EA580C] uppercase">TOTAL DISTORTION</span>
            <div className="text-2xl font-bold font-space text-white">&lt; 0.05% THD</div>
            <div className="text-xs text-slate-400 font-mono">Measured at 100dB SPL</div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F172A] border border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-[#EA580C] uppercase">BATTERY RUNTIME</span>
            <div className="text-2xl font-bold font-space text-white">65 HOURS</div>
            <div className="text-xs text-slate-400 font-mono">Continuous LDAC playback</div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F172A] border border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-[#EA580C] uppercase">CHASSIS WEIGHT</span>
            <div className="text-2xl font-bold font-space text-white">340 GRAMS</div>
            <div className="text-xs text-slate-400 font-mono">Ultra-lightweight titanium</div>
          </div>
        </section>

        {/* Multi-Angle Transducer Gallery */}
        <section id="driver" className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
            <h3 className="text-2xl font-bold font-space text-white">Planar Magnetic Acoustic Chambers</h3>
            <span className="font-mono text-xs text-[#EA580C]">AUSTIN ACOUSTIC LABS</span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.premiumProduct.explodedChassis,
                title: 'Exploded Magnet Array Assembly',
                subtitle: 'Push-pull double-sided neodymium magnets generating 1.5 Tesla magnetic flux',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.darkMode.oledDarkAudio,
                title: 'CNC Precision Baffle Milling',
                subtitle: 'Machined from single aerospace titanium billet with 5-axis continuous toolpath',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.premiumProduct.machinedTitanium,
                title: 'Apex One Assembled Headset',
                subtitle: 'Ultra-plush lambskin ear cushions filled with slow-recovery acoustic memory foam',
                aspectRatio: '4/3'
              }
            ]}
          />
        </section>

        {/* Premium Product Footer */}
        <footer className="p-8 rounded-3xl bg-[#0F172A] border border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <div>APEX TITANIUM ACOUSTICS • AUSTIN, TEXAS & ZÜRICH</div>
          <div>PRECISION HARDWARE ENGINEERING • © 2026</div>
        </footer>
      </div>
    </div>
  );
};
