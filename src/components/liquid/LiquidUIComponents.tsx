import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, Search, Bell, Wifi, Bluetooth, Radio, Sparkles, Check, Command } from 'lucide-react';

export function LiquidUIComponents() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(78);
  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [btEnabled, setBtEnabled] = useState(true);
  const [spatialAudio, setSpatialAudio] = useState(true);
  const [activeTab, setActiveTab] = useState<'player' | 'controls' | 'palette'>('player');

  return (
    <section className="relative py-28 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PRODUCTION-GRADE INTERFACE DESIGN</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black font-space tracking-tight text-white">
          LIQUID INTERFACE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">COMPONENTS</span>
        </h2>
        <p className="text-base md:text-lg text-white/60">
          Reimagining human interfaces through physical optical refraction. Tactile, depth-aware components designed for spatial computing and next-generation operating systems.
        </p>

        {/* Tab Switcher */}
        <div className="flex gap-2 pt-2">
          {(['player', 'controls', 'palette'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all ${
                activeTab === tab
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              {tab === 'player' ? 'Media Player Dock' : tab === 'controls' ? 'Control Center' : 'Command Palette'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage with Rich Colored Underlay */}
      <div className="relative min-h-[460px] rounded-3xl p-8 md:p-14 overflow-hidden border border-white/20 shadow-2xl flex items-center justify-center bg-[#07070D]">
        {/* Underlay Dynamic Pattern (What the liquid UI refracts) */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-purple-600 blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-cyan-600 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-pink-500 blur-[120px]" />
        </div>

        {/* Tab 1: Refractive Media Player Dock */}
        {activeTab === 'player' && (
          <div className="relative z-10 w-full max-w-lg p-6 rounded-3xl border border-white/30 bg-white/[0.04] backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.7),inset_0_0_20px_rgba(255,255,255,0.25)] space-y-6">
            {/* Top Bar: Notification Pill */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-white/70">
              <span className="flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                Lossless Spatial Audio • 96kHz / 24-bit
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-white">
                DOLBY ATMOS
              </span>
            </div>

            {/* Album & Track Info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 via-pink-500 to-amber-400 flex items-center justify-center shadow-lg border border-white/20">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-bold text-white truncate">Chromatic Transmission</h4>
                <p className="text-xs text-white/60 font-mono">LiquidGL Soundscapes • 2026</p>
                <div className="flex items-center gap-1 mt-2">
                  {[40, 70, 25, 90, 60, 30, 85, 45, 95, 35, 75, 50, 80, 20, 65].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: isPlaying ? `${h * 0.25}px` : '4px' }}
                      className="w-1 bg-cyan-400 rounded-full transition-all duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-transform hover:scale-110">
                  <SkipBack className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl transition-transform hover:scale-110"
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-black" /> : <Play className="w-5 h-5 fill-black ml-0.5" />}
                </button>
                <button className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-transform hover:scale-110">
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              {/* Volume Slider */}
              <div className="flex items-center gap-2 w-36">
                <Volume2 className="w-4 h-4 text-white/60" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(parseInt(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Control Center */}
        {activeTab === 'controls' && (
          <div className="relative z-10 w-full max-w-md p-6 rounded-3xl border border-white/30 bg-white/[0.05] backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.7),inset_0_0_20px_rgba(255,255,255,0.25)] space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2">
              VisionOS Glass Control Surface
            </h4>

            {/* Quick Toggles Grid */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setWifiEnabled(!wifiEnabled)}
                className={`p-4 rounded-2xl border transition-all text-left ${
                  wifiEnabled
                    ? 'border-cyan-400/50 bg-cyan-500/20 text-white'
                    : 'border-white/10 bg-white/5 text-white/50'
                }`}
              >
                <Wifi className="w-6 h-6 mb-2 text-cyan-400" />
                <div className="text-sm font-bold">Ultra Wi-Fi 7</div>
                <div className="text-[10px] font-mono text-white/50">{wifiEnabled ? 'Connected (1.2 Gbps)' : 'Disabled'}</div>
              </button>

              <button
                onClick={() => setBtEnabled(!btEnabled)}
                className={`p-4 rounded-2xl border transition-all text-left ${
                  btEnabled
                    ? 'border-indigo-400/50 bg-indigo-500/20 text-white'
                    : 'border-white/10 bg-white/5 text-white/50'
                }`}
              >
                <Bluetooth className="w-6 h-6 mb-2 text-indigo-400" />
                <div className="text-sm font-bold">Bluetooth Glass</div>
                <div className="text-[10px] font-mono text-white/50">{btEnabled ? '3 Devices Paired' : 'Off'}</div>
              </button>
            </div>

            {/* Spatial Audio Toggle */}
            <div className="p-4 rounded-2xl border border-white/15 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-violet-600/30 text-violet-300 flex items-center justify-center font-bold">
                  3D
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Spatial Refraction Audio</div>
                  <div className="text-[10px] font-mono text-white/50">Dynamic head tracking enabled</div>
                </div>
              </div>
              <button
                onClick={() => setSpatialAudio(!spatialAudio)}
                className={`w-12 h-7 rounded-full p-1 transition-colors ${
                  spatialAudio ? 'bg-cyan-500' : 'bg-white/20'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    spatialAudio ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Command Palette */}
        {activeTab === 'palette' && (
          <div className="relative z-10 w-full max-w-xl p-6 rounded-3xl border border-white/30 bg-white/[0.05] backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.7),inset_0_0_20px_rgba(255,255,255,0.25)] space-y-4">
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-black/40 border border-white/15">
              <Search className="w-4 h-4 text-violet-400" />
              <input
                type="text"
                readOnly
                value="Refract background element..."
                className="bg-transparent text-sm text-white placeholder-white/40 focus:outline-none w-full font-mono"
              />
              <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white/60">
                ⌘K
              </span>
            </div>

            {/* Suggested Commands */}
            <div className="space-y-1.5 pt-2">
              {[
                { title: 'Enable Fluid Viscosity Simulation', tag: 'WebGPU Shader', hotkey: '↵' },
                { title: 'Switch to Borosilicate Glass Material (IOR 1.54)', tag: 'PBR Optics', hotkey: '⌘B' },
                { title: 'Export Production liquidGL Configuration', tag: 'TypeScript', hotkey: '⌘E' },
              ].map((cmd, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <Command className="w-4 h-4 text-white/40" />
                    <div>
                      <span className="text-xs font-bold text-white block">{cmd.title}</span>
                      <span className="text-[10px] font-mono text-white/40">{cmd.tag}</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/60">
                    {cmd.hotkey}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
