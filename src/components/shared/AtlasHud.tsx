import React, { useState, useEffect } from 'react';
import { StyleMeta } from '../../types';
import { STYLES_DATA } from '../../data/stylesData';
import { StyleBriefModal } from './StyleBriefModal';
import { ArrowLeft, ArrowRight, Grid, FileText, Sparkles, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AtlasHudProps {
  currentStyle: StyleMeta;
  onNavigate: (styleId: string) => void;
  onBackToGallery: () => void;
}

export const AtlasHud: React.FC<AtlasHudProps> = ({ currentStyle, onNavigate, onBackToGallery }) => {
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentIndex = STYLES_DATA.findIndex(s => s.id === currentStyle.id);
  const prevStyle = currentIndex > 0 ? STYLES_DATA[currentIndex - 1] : STYLES_DATA[STYLES_DATA.length - 1];
  const nextStyle = currentIndex < STYLES_DATA.length - 1 ? STYLES_DATA[currentIndex + 1] : STYLES_DATA[0];

  // Keyboard shortcut navigation (Left/Right arrows, Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowLeft') {
        onNavigate(prevStyle.id);
      } else if (e.key === 'ArrowRight') {
        onNavigate(nextStyle.id);
      } else if (e.key === 'Escape') {
        if (isBriefOpen) setIsBriefOpen(false);
        else onBackToGallery();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevStyle.id, nextStyle.id, isBriefOpen, onBackToGallery, onNavigate]);

  const triggerCelebration = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.1 }
    });
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/10 px-4 py-2.5 sm:px-6 shadow-xl transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left: Back to Gallery & Identity */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToGallery}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-xs sm:text-sm font-medium text-white/90 hover:text-white transition-all cursor-pointer group"
              title="Return to Central Gallery (Esc)"
            >
              <Grid size={15} className="text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline font-mono">ATLAS</span>
              <span className="sm:hidden font-mono">75</span>
            </button>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/10 border border-white/10 text-left transition-all cursor-pointer"
              >
                <span className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center font-mono text-xs font-bold text-white border border-white/10">
                  {String(currentStyle.num).padStart(2, '0')}
                </span>
                <div className="hidden md:block">
                  <div className="text-xs font-semibold text-white leading-tight flex items-center gap-1.5">
                    {currentStyle.name}
                    <ChevronDown size={12} className="text-white/40" />
                  </div>
                  <div className="text-[10px] text-white/50 truncate max-w-[150px]">
                    {currentStyle.brandName}
                  </div>
                </div>
                <ChevronDown size={14} className="md:hidden text-white/50" />
              </button>

              {/* Quick Jump Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-72 max-h-80 overflow-y-auto bg-[#14151f] border border-white/15 rounded-xl shadow-2xl p-2 z-50 animate-fadeIn">
                  <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-white/40 border-b border-white/10">
                    Jump to Style (1-75)
                  </div>
                  {STYLES_DATA.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        onNavigate(s.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 text-left rounded-lg text-xs transition-colors cursor-pointer ${
                        s.id === currentStyle.id
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'text-white/70 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span className="font-mono text-[10px] text-white/40">{String(s.num).padStart(2, '0')}</span>
                      <span className="truncate">{s.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Center: Prev / Next Buttons */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => onNavigate(prevStyle.id)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-white/80 hover:text-white transition-all cursor-pointer group"
              title={`Previous: ${prevStyle.name} (←)`}
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden sm:inline">#{String(prevStyle.num).padStart(2, '0')}</span>
            </button>

            <span className="text-xs font-mono text-white/40 px-1 hidden lg:inline">
              {currentStyle.num} / 75
            </span>

            <button
              onClick={() => onNavigate(nextStyle.id)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-white/80 hover:text-white transition-all cursor-pointer group"
              title={`Next: ${nextStyle.name} (→)`}
            >
              <span className="hidden sm:inline">#{String(nextStyle.num).padStart(2, '0')}</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Right: Creative Brief & Interactive Sparkle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('liquid-reality')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-600/30 to-cyan-600/30 hover:from-violet-600/50 hover:to-cyan-600/50 border border-cyan-400/30 text-xs font-medium text-cyan-200 shadow-sm transition-all cursor-pointer"
              title="Launch Flagship Liquid Reality 3D Experience"
            >
              <Sparkles size={14} className="text-cyan-400 animate-pulse" />
              <span className="hidden sm:inline">Liquid Reality (3D)</span>
            </button>

            <button
              onClick={() => setIsBriefOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600/30 to-purple-600/30 hover:from-blue-600/50 hover:to-purple-600/50 border border-blue-400/30 text-xs font-medium text-white shadow-sm transition-all cursor-pointer"
            >
              <FileText size={14} className="text-blue-300" />
              <span className="hidden sm:inline">Creative Brief</span>
              <span className="sm:hidden">Brief</span>
            </button>

            <button
              onClick={triggerCelebration}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-amber-300 hover:scale-110 transition-all cursor-pointer"
              title="Celebrate Design Craft"
            >
              <Sparkles size={14} />
            </button>
          </div>

        </div>
      </header>

      {/* Creative Brief Modal */}
      <StyleBriefModal
        styleMeta={currentStyle}
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
      />
    </>
  );
};
