import React, { useEffect, useState } from 'react';
import { Sparkles, Cpu } from 'lucide-react';

interface LiquidIntroLoaderProps {
  onComplete: () => void;
}

export function LiquidIntroLoader({ onComplete }: LiquidIntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFading(true);
            setTimeout(onComplete, 700);
          }, 200);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#06060B] flex flex-col items-center justify-center p-4 transition-opacity duration-700 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute w-96 h-96 rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />

      {/* Center Brand Mark & Loader */}
      <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center space-y-6">
        {/* Prismatic Rotating Cube Loader */}
        <div className="w-20 h-20 rounded-3xl border border-white/30 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(139,92,246,0.4)] flex items-center justify-center animate-spin-slow relative">
          <div className="absolute inset-2 rounded-2xl border border-white/20" />
          <Sparkles className="w-8 h-8 text-cyan-300 animate-pulse" />
        </div>

        {/* Title */}
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-violet-400 block mb-1">
            IMMERSIVE 3D EXPERIENCE
          </span>
          <h1 className="text-3xl font-black font-space tracking-tight text-white">
            LIQUID REALITY
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="w-full space-y-2">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-violet-500 via-cyan-400 to-amber-300 transition-all duration-75"
            />
          </div>
          <div className="flex justify-between items-center text-[11px] font-mono text-white/50">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3 h-3 text-cyan-400" /> WebGPU Initializing
            </span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
