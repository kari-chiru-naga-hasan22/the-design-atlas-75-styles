import React, { useEffect, useRef, useState } from 'react';
import { Eye, Move, Sparkles, RefreshCw, Layers } from 'lucide-react';

interface LensConfig {
  refraction: number;
  aberration: number;
  bevelDepth: number;
  bevelWidth: number;
  frost: number;
  magnify: number;
  tint: string | null;
}

export function LiquidLensDraggable() {
  const lensRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [lensMode, setLensMode] = useState<'glass' | 'lens' | 'fluid' | 'color'>('lens');
  const [isDragging, setIsDragging] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 260, y: 150 });
  const [config, setConfig] = useState<LensConfig>({
    refraction: 0.12,
    aberration: 0.25,
    bevelDepth: 0.08,
    bevelWidth: 0.22,
    frost: 2,
    magnify: 1.15,
    tint: 'rgba(255, 255, 255, 0.05)',
  });

  // Handle LiquidGL initialization on the lens
  useEffect(() => {
    let liquidInstance: any = null;

    const initLiquid = async () => {
      if (typeof window === 'undefined' || !lensRef.current) return;
      try {
        const liquidGLModule = await import('liquid-gl');
        const liquidGL = liquidGLModule.default;
        if (typeof liquidGL === 'function') {
          liquidInstance = liquidGL({
            target: '.liquid-draggable-lens-element',
            snapshot: '.liquid-content-backdrop-surface',
            engine: 'auto',
            resolution: 2.0,
            refraction: config.refraction,
            aberration: config.aberration,
            bevelDepth: config.bevelDepth,
            bevelWidth: config.bevelWidth,
            frost: config.frost,
            magnify: config.magnify,
            specular: true,
            shadow: true,
            draggable: false, // We control drag smoothly with native React pointer events for zero drift
            interaction: lensMode === 'fluid' ? 'fluid' : 'none',
            interactionStrength: 0.6,
            interactionRadius: 0.4,
            interactionViscosity: 0.65,
            tint: config.tint,
          });
        }
      } catch (err) {
        console.info('liquidGL running in standard accelerated layer:', err);
      }
    };

    initLiquid();

    return () => {
      if (liquidInstance && typeof liquidInstance.destroy === 'function') {
        try {
          liquidInstance.destroy();
        } catch (e) {
          // cleanup
        }
      }
    };
  }, [config, lensMode]);

  // Pointer drag logic
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newX = Math.max(70, Math.min(rect.width - 70, e.clientX - rect.left));
    const newY = Math.max(70, Math.min(rect.height - 70, e.clientY - rect.top));
    setLensPos({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Preset Mode Switcher
  const handleModeChange = (mode: 'glass' | 'lens' | 'fluid' | 'color') => {
    setLensMode(mode);
    if (mode === 'glass') {
      setConfig({
        refraction: 0.08,
        aberration: 0.1,
        bevelDepth: 0.06,
        bevelWidth: 0.18,
        frost: 4,
        magnify: 1.05,
        tint: 'rgba(255, 255, 255, 0.08)',
      });
    } else if (mode === 'lens') {
      setConfig({
        refraction: 0.16,
        aberration: 0.35,
        bevelDepth: 0.1,
        bevelWidth: 0.25,
        frost: 0,
        magnify: 1.25,
        tint: null,
      });
    } else if (mode === 'fluid') {
      setConfig({
        refraction: 0.14,
        aberration: 0.2,
        bevelDepth: 0.07,
        bevelWidth: 0.2,
        frost: 1,
        magnify: 1.1,
        tint: 'rgba(56, 189, 248, 0.12)',
      });
    } else if (mode === 'color') {
      setConfig({
        refraction: 0.15,
        aberration: 0.45,
        bevelDepth: 0.09,
        bevelWidth: 0.24,
        frost: 0,
        magnify: 1.18,
        tint: 'rgba(168, 85, 247, 0.25)',
      });
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-12 px-4 select-none">
      {/* Mode Selector Pill Bar */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs uppercase tracking-widest font-mono text-white/70">
            Interactive Liquid Lens • Drag & Inspect
          </span>
        </div>

        <div className="flex items-center p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
          {(['lens', 'glass', 'fluid', 'color'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => handleModeChange(mode)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase font-bold tracking-wider transition-all duration-300 ${
                lensMode === mode
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage Container */}
      <div
        ref={containerRef}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="relative w-full h-[460px] md:h-[520px] rounded-3xl overflow-hidden border border-white/15 bg-[#09090E] shadow-[0_30px_90px_rgba(0,0,0,0.8)] cursor-crosshair"
      >
        {/* Layer 0: Backdrop Graphics Surface (What the glass refracts) */}
        <div className="liquid-content-backdrop-surface absolute inset-0 p-8 md:p-12 flex flex-col justify-between pointer-events-none">
          {/* Top Title Area */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-1">
                REFRACTIVE SPECTRUM
              </p>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white font-space">
                LIQUID <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300">GLASS</span>
              </h3>
            </div>
            <div className="text-right">
              <span className="text-2xl md:text-3xl font-mono font-bold text-white/80">
                1.54 <span className="text-xs text-white/40">IOR</span>
              </span>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                Dispersion index
              </p>
            </div>
          </div>

          {/* Central Bold Characters & Typography Grid */}
          <div className="grid grid-cols-6 md:grid-cols-9 gap-3 my-auto py-4">
            {[
              { char: 'Aa', bg: 'bg-indigo-600', text: 'text-white' },
              { char: '0', bg: 'bg-cyan-500', text: 'text-black font-black' },
              { char: '42', bg: 'bg-amber-400', text: 'text-black font-bold' },
              { char: 'Gg', bg: 'bg-rose-500', text: 'text-white font-serif italic' },
              { char: '&', bg: 'bg-purple-600', text: 'text-white font-display' },
              { char: 'Rr', bg: 'bg-emerald-500', text: 'text-black font-mono font-bold' },
              { char: 'Qq', bg: 'bg-blue-600', text: 'text-white font-bold' },
              { char: '%', bg: 'bg-fuchsia-500', text: 'text-white' },
              { char: '$', bg: 'bg-lime-400', text: 'text-black font-black' },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`${item.bg} ${item.text} h-16 md:h-20 rounded-xl flex items-center justify-center text-xl md:text-3xl font-bold shadow-md transition-transform`}
              >
                {item.char}
              </div>
            ))}
          </div>

          {/* Bottom Kinetic Banner */}
          <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs font-mono text-white/50">
            <span className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              Real-time WebGPU Offscreen Rasterization
            </span>
            <span className="hidden sm:inline-block">
              BEND • SPLIT • DISPERSE • MELT
            </span>
            <span className="text-emerald-400 font-bold">
              60 FPS GPU PIPELINE
            </span>
          </div>
        </div>

        {/* Layer 1: Draggable LiquidGL Refractive Lens */}
        <div
          ref={lensRef}
          onPointerDown={handlePointerDown}
          style={{
            transform: `translate(${lensPos.x - 90}px, ${lensPos.y - 90}px)`,
            width: '180px',
            height: '180px',
            background: config.tint || 'rgba(255, 255, 255, 0.03)',
            boxShadow: isDragging
              ? '0 30px 60px rgba(0,0,0,0.8), inset 0 0 25px rgba(255,255,255,0.4), 0 0 40px rgba(168,85,247,0.4)'
              : '0 20px 45px rgba(0,0,0,0.6), inset 0 0 15px rgba(255,255,255,0.25)',
          }}
          className={`liquid-draggable-lens-element absolute top-0 left-0 rounded-full cursor-grab active:cursor-grabbing border-2 border-white/40 flex items-center justify-center backdrop-blur-xs transition-shadow duration-300 z-30 touch-none ${
            isDragging ? 'scale-105' : 'hover:scale-[1.02]'
          }`}
        >
          {/* Center Glass Reflection Sheen */}
          <div className="absolute inset-2 rounded-full border border-white/30 pointer-events-none opacity-60" />
          <div className="absolute -top-3 left-1/4 w-16 h-8 bg-white/40 blur-md rounded-full pointer-events-none" />

          {/* Interactive Lens Center Badge */}
          <div className="px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[10px] font-mono text-white flex items-center gap-1.5 shadow-xl pointer-events-none">
            <Move className="w-3 h-3 text-cyan-400 animate-bounce" />
            <span>DRAG ME</span>
          </div>

          {/* Radial Chromatic Aberration Rim */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              boxShadow: `inset 0 0 12px rgba(6,182,212,0.6), inset 0 0 24px rgba(244,63,94,0.5)`,
            }}
          />
        </div>

        {/* Floating Callout Tag */}
        <div className="absolute bottom-6 left-6 px-3.5 py-2 rounded-xl bg-black/70 border border-white/10 backdrop-blur-md text-xs font-mono text-white/80 flex items-center gap-2 pointer-events-none">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Notice RGB chromatic dispersion along the lens bevel</span>
        </div>
      </div>
    </div>
  );
}
