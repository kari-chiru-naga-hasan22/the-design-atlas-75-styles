import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export interface VideoBoxProps {
  poster: string;
  videoSrc?: string;
  title: string;
  aspectRatio?: '16/9' | '4/3' | '21/9';
  className?: string;
  tag?: string;
  autoPlay?: boolean;
}

export const VideoBox: React.FC<VideoBoxProps> = ({
  poster,
  videoSrc,
  title,
  aspectRatio = '16/9',
  className = '',
  tag = 'FILM CINEMA 4K',
  autoPlay = false
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);

  const aspectClass = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '21/9': 'aspect-[21/9]'
  }[aspectRatio];

  return (
    <div className={`relative overflow-hidden group border border-black/20 bg-black ${aspectClass} ${className}`}>
      {videoSrc && isPlaying ? (
        <video
          src={videoSrc}
          poster={poster}
          autoPlay={isPlaying}
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={poster}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {/* Film grain effect & dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

      {/* Top Tag */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest border border-white/20">
        {tag}
      </div>

      {/* Controls Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-16 h-16 rounded-full bg-white/90 text-black flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-white transition-all cursor-pointer"
        >
          {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current translate-x-0.5" />}
        </button>
      </div>

      {/* Bottom Title Bar */}
      <div className="absolute bottom-4 inset-x-4 z-10 flex justify-between items-center text-white text-xs font-mono">
        <span className="font-bold uppercase tracking-wider">{title}</span>
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-2 rounded bg-black/60 hover:bg-black transition-colors"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
