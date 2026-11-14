import React, { useState } from 'react';
import { StyleMeta } from '../../types';
import { X, Copy, Check, Palette, Type, Layout, Sparkles, Target, Compass } from 'lucide-react';

interface StyleBriefModalProps {
  styleMeta: StyleMeta;
  isOpen: boolean;
  onClose: () => void;
}

export const StyleBriefModal: React.FC<StyleBriefModalProps> = ({ styleMeta, isOpen, onClose }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#12131A] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-white/10 text-white/80 border border-white/10">
                Style #{String(styleMeta.num).padStart(2, '0')} / 75
              </span>
              <span className="text-xs text-white/50 font-sans tracking-wide uppercase">
                {styleMeta.category}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-syne tracking-tight text-white flex items-center gap-2">
              {styleMeta.name}
            </h2>
            <p className="text-sm text-white/60 mt-1 italic">
              Brand: <strong className="text-white font-semibold">{styleMeta.brandName}</strong> — “{styleMeta.tagline}”
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all cursor-pointer"
            aria-label="Close brief"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Grid */}
        <div className="space-y-6">
          {/* Brand & Purpose */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-white/50 mb-2">
                <Target size={14} className="text-blue-400" /> Purpose & Mission
              </div>
              <p className="text-sm text-white/90 leading-relaxed">{styleMeta.purpose}</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-white/50 mb-2">
                <Compass size={14} className="text-purple-400" /> Target Audience
              </div>
              <p className="text-sm text-white/90 leading-relaxed">{styleMeta.targetAudience}</p>
            </div>
          </div>

          {/* Visual Stance */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-white/50 mb-2">
              <Sparkles size={14} className="text-amber-400" /> Visual Identity & Art Direction
            </div>
            <p className="text-sm text-white/90 leading-relaxed">{styleMeta.visualDirection}</p>
          </div>

          {/* Color System */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-white/50">
                <Palette size={14} className="text-pink-400" /> Color System Palette (Click to Copy)
              </div>
              {copiedHex && (
                <span className="text-xs text-emerald-400 font-mono animate-pulse">
                  Copied {copiedHex}!
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {styleMeta.colorPalette.map((col, idx) => (
                <button
                  key={idx}
                  onClick={() => copyToClipboard(col.hex)}
                  className="flex flex-col text-left p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer"
                >
                  <div 
                    className="w-full h-10 rounded-md border border-black/20 shadow-inner mb-2"
                    style={{ backgroundColor: col.hex }}
                  />
                  <span className="text-xs font-medium text-white/90 truncate">{col.name}</span>
                  <span className="text-[11px] font-mono text-white/50 flex items-center justify-between mt-0.5">
                    {col.hex}
                    {copiedHex === col.hex ? <Check size={12} className="text-emerald-400" /> : <Copy size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Typography & Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-white/50 mb-2">
                <Type size={14} className="text-emerald-400" /> Typography Pairing
              </div>
              <div className="space-y-1.5">
                <div className="text-sm">
                  <span className="text-white/50">Display / Headline: </span>
                  <span className="font-semibold text-white">{styleMeta.typography.heading}</span>
                </div>
                <div className="text-sm">
                  <span className="text-white/50">Body / Text: </span>
                  <span className="font-semibold text-white">{styleMeta.typography.body}</span>
                </div>
                {styleMeta.typography.notes && (
                  <p className="text-xs text-white/60 italic pt-1 border-t border-white/5">
                    {styleMeta.typography.notes}
                  </p>
                )}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-white/50 mb-2">
                <Layout size={14} className="text-cyan-400" /> Grid Architecture
              </div>
              <p className="text-sm text-white/90 leading-relaxed">{styleMeta.gridSystem}</p>
            </div>
          </div>

          {/* Motion & Interaction */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-white/50 mb-2">
              <Sparkles size={14} className="text-orange-400" /> Motion & Interaction Philosophy
            </div>
            <p className="text-sm text-white/90 leading-relaxed">{styleMeta.animationDirection}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
            {styleMeta.tags.map((tag, i) => (
              <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/70">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
