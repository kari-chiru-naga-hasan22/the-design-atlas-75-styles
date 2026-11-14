import React, { useState } from 'react';
import { Moon, Volume2, Play, Pause, Headphones, Activity, Sparkles } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const DarkModePage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [binauralFreq, setBinauralFreq] = useState(40); // 40Hz Gamma focus

  return (
    <div className="min-h-screen bg-[#050507] text-[#F4F4F5] font-sans selection:bg-[#8B5CF6] selection:text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* OLED Pitch Black Nav Bar */}
        <header className="p-6 rounded-2xl bg-[#0D0D12] border border-zinc-800 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#181822] border border-zinc-700 flex items-center justify-center text-violet-400 text-lg shadow-inner">
              <Moon size={20} />
            </div>
            <div>
              <div className="text-xl font-bold font-inter text-white">VOID AUDIO</div>
              <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                OLED DEEP WORK ACOUSTICS • ZERO EYE STRAIN
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase text-zinc-400">
            <a href="#waves" className="hover:text-violet-400 transition-colors">40Hz GAMMA</a>
            <a href="#soundscapes" className="hover:text-violet-400 transition-colors">MIDNIGHT RAIN</a>
            <a href="#gallery" className="hover:text-violet-400 transition-colors">STUDIO RIGS</a>
          </div>

          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-5 py-2.5 rounded-full bg-[#181822] hover:bg-[#222230] border border-violet-500/40 text-violet-300 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} className="fill-current" />}
            <span>{isPlaying ? 'PAUSE VOID' : 'START 40HZ FOCUS'}</span>
          </button>
        </header>

        {/* Hero Section: True OLED Black & Micro-Luminance */}
        <section className="text-center space-y-6 py-12 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/40 border border-violet-800/40 text-violet-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles size={14} /> #050507 TRUE OLED CONTRAST RATIO
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Deep silence for <br />
            <span className="text-violet-400">peak midnight code.</span>
          </h1>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Eliminate cognitive visual fatigue. Designed exclusively for programmers and nocturnal researchers working in pitch dark rooms with OLED displays.
          </p>

          {/* Hero Visual Audio Hardware Box */}
          <div className="pt-8">
            <div className="p-6 rounded-3xl bg-[#0D0D12] border border-zinc-800 max-w-3xl mx-auto space-y-6 text-left shadow-2xl">
              <ImageBox
                src={MEDIA_ASSETS.darkMode.oledDarkAudio}
                alt="Audiophile Midnight Soundstation"
                aspectRatio="16/9"
                caption="Acoustic console engineered for pitch-black studios and zero visual glare."
                className="rounded-2xl overflow-hidden border border-zinc-800"
              />

              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-400">BINAURAL FOCUS CARRIER</span>
                <span className="text-violet-400 font-bold">{binauralFreq} Hz (GAMMA)</span>
              </div>

              {/* Animated Waveform Display */}
              <div className="h-16 flex items-center justify-between gap-1 px-4 bg-black/60 rounded-xl border border-zinc-900">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 rounded-full bg-violet-500 ${isPlaying ? 'animate-pulse' : 'opacity-40'}`}
                    style={{
                      height: `${Math.sin(i * 0.5) * 20 + 26}px`,
                      animationDelay: `${i * 0.05}s`
                    }}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-2 text-xs font-mono text-zinc-500">
                <span>FREQ:</span>
                <input 
                  type="range" min="10" max="60" value={binauralFreq} 
                  onChange={(e) => setBinauralFreq(Number(e.target.value))} 
                  className="flex-1 accent-violet-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ambient Infinite Marquee */}
        <section className="py-2">
          <InfiniteImageMarquee
            speed="slow"
            images={[
              { src: MEDIA_ASSETS.darkMode.oledDarkAudio, title: 'OLED Audio Rig' },
              { src: MEDIA_ASSETS.darkMode.midnightDesk, title: 'Midnight Desk Workspace' },
              { src: MEDIA_ASSETS.monochromatic.blackWhiteArchitecture, title: 'Minimalist Monolith' },
              { src: MEDIA_ASSETS.darkLuxury.obsidianLounge, title: 'Obsidian Environment' }
            ]}
          />
        </section>

        {/* 3 Dark Mode Audio Engines */}
        <section id="waves" className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-zinc-800">
          <div className="p-6 rounded-2xl bg-[#0D0D12] border border-zinc-800 space-y-2">
            <span className="text-xs font-mono text-violet-400">01 / GAMMA WAVE</span>
            <h3 className="text-lg font-bold text-white">40Hz Cognitive Coherence</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Resonates neural networks to synchronize sensory processing during intense debugging marathons.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0D0D12] border border-zinc-800 space-y-2">
            <span className="text-xs font-mono text-violet-400">02 / BROWNIAN RAIN</span>
            <h3 className="text-lg font-bold text-white">Deep Low-Pass Masking</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Filtered acoustic noise spectrum that blankets disruptive environmental chatter and traffic sirens.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0D0D12] border border-zinc-800 space-y-2">
            <span className="text-xs font-mono text-violet-400">03 / CIRCADIAN REST</span>
            <h3 className="text-lg font-bold text-white">Zero Blue Light Photons</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              UI palette tested to prevent retinal melanopsin disruption, preserving natural melatonin sleep cycles.
            </p>
          </div>
        </section>

        {/* Studio Environments Gallery */}
        <section id="gallery" className="space-y-6 pt-4">
          <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
            <h2 className="text-xl font-bold text-white">MIDNIGHT WORKSPACES // ZERO EYE STRAIN</h2>
            <span className="text-xs font-mono text-zinc-500">OPTIMIZED FOR HDR OLED PANELS</span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.darkMode.midnightDesk,
                title: 'Nocturnal Lab',
                subtitle: 'Low-lux environment',
                category: 'HARDWARE'
              },
              {
                src: MEDIA_ASSETS.darkMode.oledDarkAudio,
                title: 'Reference Monitors',
                subtitle: 'Planar magnetic acoustic drivers',
                category: 'AUDIO'
              },
              {
                src: MEDIA_ASSETS.darkLuxury.obsidianLounge,
                title: 'Acoustic Chamber',
                subtitle: 'Decoupled dampening architecture',
                category: 'SPACE'
              }
            ]}
          />
        </section>

        {/* Dark Mode Footer */}
        <footer className="p-6 rounded-2xl bg-[#0D0D12] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div>VOID FOCUS AUDIO • REYKJAVIK & BERLIN</div>
          <div>OLED OPTICAL PERFECTION • © 2026</div>
        </footer>
      </div>
    </div>
  );
};
