import React, { useState, useEffect, useRef } from 'react';
import { Sliders, Copy, Check, Sparkles, Terminal, Cpu } from 'lucide-react';

interface PlaygroundSettings {
  refraction: number;
  thickness: number;
  frost: number;
  magnify: number;
  aberration: number;
  bevelDepth: number;
  bevelWidth: number;
  viscosity: number;
  tint: string;
}

const PRESETS: Record<string, PlaygroundSettings> = {
  Crystal: {
    refraction: 0.18,
    thickness: 1.5,
    frost: 0,
    magnify: 1.2,
    aberration: 0.12,
    bevelDepth: 0.08,
    bevelWidth: 0.22,
    viscosity: 0.7,
    tint: 'rgba(255, 255, 255, 0.03)',
  },
  Lavender: {
    refraction: 0.14,
    thickness: 2.0,
    frost: 3,
    magnify: 1.1,
    aberration: 0.35,
    bevelDepth: 0.07,
    bevelWidth: 0.2,
    viscosity: 0.6,
    tint: 'rgba(168, 85, 247, 0.22)',
  },
  Aurora: {
    refraction: 0.22,
    thickness: 2.2,
    frost: 1,
    magnify: 1.25,
    aberration: 0.6,
    bevelDepth: 0.1,
    bevelWidth: 0.28,
    viscosity: 0.5,
    tint: 'rgba(6, 182, 212, 0.25)',
  },
  Liquid: {
    refraction: 0.28,
    thickness: 2.8,
    frost: 2,
    magnify: 1.35,
    aberration: 0.45,
    bevelDepth: 0.12,
    bevelWidth: 0.32,
    viscosity: 0.35,
    tint: 'rgba(59, 130, 246, 0.18)',
  },
  Frost: {
    refraction: 0.06,
    thickness: 1.8,
    frost: 14,
    magnify: 1.0,
    aberration: 0.05,
    bevelDepth: 0.05,
    bevelWidth: 0.16,
    viscosity: 0.8,
    tint: 'rgba(255, 255, 255, 0.15)',
  },
  Chrome: {
    refraction: 0.35,
    thickness: 3.0,
    frost: 0,
    magnify: 1.4,
    aberration: 0.8,
    bevelDepth: 0.15,
    bevelWidth: 0.4,
    viscosity: 0.9,
    tint: 'rgba(230, 230, 255, 0.1)',
  },
  Sunset: {
    refraction: 0.16,
    thickness: 2.4,
    frost: 2,
    magnify: 1.15,
    aberration: 0.4,
    bevelDepth: 0.09,
    bevelWidth: 0.25,
    viscosity: 0.55,
    tint: 'rgba(249, 115, 22, 0.25)',
  },
};

export function LiquidPlayground() {
  const [activePreset, setActivePreset] = useState<string>('Crystal');
  const [settings, setSettings] = useState<PlaygroundSettings>(PRESETS['Crystal']);
  const [copied, setCopied] = useState(false);
  const livePaneRef = useRef<HTMLDivElement>(null);

  const handlePresetSelect = (presetName: string) => {
    setActivePreset(presetName);
    setSettings(PRESETS[presetName]);
  };

  const updateSetting = <K extends keyof PlaygroundSettings>(key: K, value: PlaygroundSettings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const copyCode = () => {
    const code = `import liquidGL from 'liquid-gl';

const glass = liquidGL({
  target: '.liquid-pane',
  snapshot: 'body',
  engine: 'auto',
  resolution: 2.0,
  refraction: ${settings.refraction},
  frost: ${settings.frost},
  aberration: ${settings.aberration},
  bevelDepth: ${settings.bevelDepth},
  bevelWidth: ${settings.bevelWidth},
  magnify: ${settings.magnify},
  tint: "${settings.tint}",
  interaction: 'fluid',
  interactionViscosity: ${settings.viscosity},
  specular: true,
  shadow: true
});`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="playground" className="relative py-28 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-300">
          <Sliders className="w-3.5 h-3.5" />
          <span>REAL-TIME CONFIGURATION ENGINE</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black font-space tracking-tight text-white">
          NINE DIALS. <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300">INFINITE GLASS.</span>
        </h2>
        <p className="text-base md:text-lg text-white/60">
          Tweak physical refractive parameters in real-time. Inspect the reactive shader feedback and copy production-ready code.
        </p>

        {/* 7 Preset Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {Object.keys(PRESETS).map((pName) => (
            <button
              key={pName}
              onClick={() => handlePresetSelect(pName)}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 ${
                activePreset === pName
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              {pName}
            </button>
          ))}
        </div>
      </div>

      {/* Main Studio Workspace: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (5 Cols): Live Code Inspector */}
        <div className="lg:col-span-5 bg-[#0C0C14] border border-white/15 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-white/60">
              <Terminal className="w-4 h-4 text-violet-400" />
              <span>liquidGL.config.ts</span>
            </div>
            <button
              onClick={copyCode}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy API'}</span>
            </button>
          </div>

          <pre className="font-mono text-xs md:text-sm text-white/80 overflow-x-auto leading-relaxed selection:bg-indigo-500 selection:text-white">
            <span className="text-purple-400">import</span> liquidGL <span className="text-purple-400">from</span> <span className="text-emerald-400">'liquid-gl'</span>;{'\n\n'}
            <span className="text-purple-400">const</span> glass = liquidGL({'{'}{'\n'}
            {'  '}<span className="text-sky-300">target</span>: <span className="text-emerald-400">'.lens-pane'</span>,{'\n'}
            {'  '}<span className="text-sky-300">snapshot</span>: <span className="text-emerald-400">'body'</span>,{'\n'}
            {'  '}<span className="text-sky-300">engine</span>: <span className="text-emerald-400">'auto'</span>, <span className="text-white/40">// WebGPU → WebGL2</span>{'\n'}
            {'  '}<span className="text-sky-300">resolution</span>: <span className="text-amber-400">2.0</span>,{'\n'}
            {'  '}<span className="text-sky-300">refraction</span>: <span className="text-amber-400">{settings.refraction.toFixed(2)}</span>,{'\n'}
            {'  '}<span className="text-sky-300">thickness</span>: <span className="text-amber-400">{settings.thickness.toFixed(1)}</span>,{'\n'}
            {'  '}<span className="text-sky-300">frost</span>: <span className="text-amber-400">{settings.frost}</span>,{'\n'}
            {'  '}<span className="text-sky-300">aberration</span>: <span className="text-amber-400">{settings.aberration.toFixed(2)}</span>,{'\n'}
            {'  '}<span className="text-sky-300">bevelDepth</span>: <span className="text-amber-400">{settings.bevelDepth.toFixed(3)}</span>,{'\n'}
            {'  '}<span className="text-sky-300">bevelWidth</span>: <span className="text-amber-400">{settings.bevelWidth.toFixed(3)}</span>,{'\n'}
            {'  '}<span className="text-sky-300">magnify</span>: <span className="text-amber-400">{settings.magnify.toFixed(2)}</span>,{'\n'}
            {'  '}<span className="text-sky-300">tint</span>: <span className="text-emerald-400">"{settings.tint}"</span>,{'\n'}
            {'  '}<span className="text-sky-300">interaction</span>: <span className="text-emerald-400">'fluid'</span>,{'\n'}
            {'  '}<span className="text-sky-300">viscosity</span>: <span className="text-amber-400">{settings.viscosity.toFixed(2)}</span>,{'\n'}
            {'  '}<span className="text-sky-300">specular</span>: <span className="text-rose-400">true</span>,{'\n'}
            {'  '}<span className="text-sky-300">shadow</span>: <span className="text-rose-400">true</span>{'\n'}
            {'}'});
          </pre>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" /> WebGPU Pipeline Active
            </span>
            <span>Zero Runtime Dependencies</span>
          </div>
        </div>

        {/* Right Column (7 Cols): Interactive Controls + Live Glass Display */}
        <div className="lg:col-span-7 space-y-6">
          {/* Live Reactive Glass Demonstration Frame */}
          <div className="relative h-64 md:h-72 rounded-3xl overflow-hidden border border-white/20 p-6 flex items-center justify-center shadow-xl">
            {/* Background Multi-chromatic Artwork to Refract */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-900 via-indigo-950 to-pink-900 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full bg-gradient-to-r from-amber-400 via-rose-500 to-indigo-500 blur-2xl opacity-60 animate-pulse" />
              <div className="absolute text-center select-none">
                <span className="text-6xl md:text-8xl font-black text-white/30 tracking-widest font-space">
                  REFRACT
                </span>
                <p className="text-xs font-mono text-white/50 uppercase tracking-widest">
                  Live Glass Transmission Layer
                </p>
              </div>
            </div>

            {/* Reactive Glass Panel Under Test */}
            <div
              ref={livePaneRef}
              style={{
                backdropFilter: `blur(${settings.frost}px) saturate(160%)`,
                WebkitBackdropFilter: `blur(${settings.frost}px) saturate(160%)`,
                backgroundColor: settings.tint,
                transform: `scale(${settings.magnify})`,
                boxShadow: `
                  0 20px 50px rgba(0,0,0,0.6),
                  inset 0 0 ${settings.bevelWidth * 100}px rgba(255,255,255,${settings.bevelDepth * 4}),
                  0 0 ${settings.aberration * 30}px rgba(6,182,212,0.4)
                `,
              }}
              className="relative z-10 w-4/5 max-w-md p-6 rounded-2xl border-2 border-white/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-mono font-bold tracking-wider text-white">
                    {activePreset.toUpperCase()} SPECIMEN
                  </span>
                </div>
                <span className="text-xs font-mono text-white/70">
                  {settings.refraction.toFixed(2)}x
                </span>
              </div>

              <div className="my-4">
                <p className="text-sm font-medium text-white/90">
                  Real-time refractive dispersion with multi-layered specular sheen and bevel rim lighting.
                </p>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-white/60">
                <span>Thickness: {settings.thickness}mm</span>
                <span>Frost: {settings.frost}px</span>
                <span>Aberration: {settings.aberration}</span>
              </div>
            </div>
          </div>

          {/* 9 Interactive Sliders */}
          <div className="bg-[#0C0C14] border border-white/10 rounded-3xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 1. Refraction */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-white/80">
                <span>Refraction Intensity</span>
                <span className="text-indigo-400">{settings.refraction.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.0"
                max="0.4"
                step="0.01"
                value={settings.refraction}
                onChange={(e) => updateSetting('refraction', parseFloat(e.target.value))}
                className="w-full accent-indigo-500"
              />
            </div>

            {/* 2. Glass Thickness */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-white/80">
                <span>Glass Thickness (mm)</span>
                <span className="text-indigo-400">{settings.thickness.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="4.0"
                step="0.1"
                value={settings.thickness}
                onChange={(e) => updateSetting('thickness', parseFloat(e.target.value))}
                className="w-full accent-indigo-500"
              />
            </div>

            {/* 3. Frost / Blur */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-white/80">
                <span>Frost Blur</span>
                <span className="text-indigo-400">{settings.frost}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="24"
                step="1"
                value={settings.frost}
                onChange={(e) => updateSetting('frost', parseInt(e.target.value))}
                className="w-full accent-indigo-500"
              />
            </div>

            {/* 4. Magnification */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-white/80">
                <span>Lens Magnification</span>
                <span className="text-indigo-400">{settings.magnify.toFixed(2)}x</span>
              </div>
              <input
                type="range"
                min="0.8"
                max="2.0"
                step="0.05"
                value={settings.magnify}
                onChange={(e) => updateSetting('magnify', parseFloat(e.target.value))}
                className="w-full accent-indigo-500"
              />
            </div>

            {/* 5. Chromatic Aberration */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-white/80">
                <span>Chromatic Aberration</span>
                <span className="text-indigo-400">{settings.aberration.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.0"
                max="1.0"
                step="0.02"
                value={settings.aberration}
                onChange={(e) => updateSetting('aberration', parseFloat(e.target.value))}
                className="w-full accent-indigo-500"
              />
            </div>

            {/* 6. Bevel Depth */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-white/80">
                <span>Bevel Depth</span>
                <span className="text-indigo-400">{settings.bevelDepth.toFixed(3)}</span>
              </div>
              <input
                type="range"
                min="0.01"
                max="0.2"
                step="0.005"
                value={settings.bevelDepth}
                onChange={(e) => updateSetting('bevelDepth', parseFloat(e.target.value))}
                className="w-full accent-indigo-500"
              />
            </div>

            {/* 7. Bevel Width */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-white/80">
                <span>Bevel Width</span>
                <span className="text-indigo-400">{settings.bevelWidth.toFixed(3)}</span>
              </div>
              <input
                type="range"
                min="0.05"
                max="0.45"
                step="0.01"
                value={settings.bevelWidth}
                onChange={(e) => updateSetting('bevelWidth', parseFloat(e.target.value))}
                className="w-full accent-indigo-500"
              />
            </div>

            {/* 8. Fluid Viscosity */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-white/80">
                <span>Fluid Viscosity</span>
                <span className="text-indigo-400">{settings.viscosity.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1.0"
                step="0.05"
                value={settings.viscosity}
                onChange={(e) => updateSetting('viscosity', parseFloat(e.target.value))}
                className="w-full accent-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
