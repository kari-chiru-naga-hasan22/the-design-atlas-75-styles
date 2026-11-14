import React, { useState } from 'react';
import { Heart, Shield, Swords, Sparkles, Coins, Gamepad2, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const PixelArtPage: React.FC = () => {
  const [coins, setCoins] = useState(128);
  const [health, setHealth] = useState(5);

  const inventory = [
    { name: 'IRON SWORD +2', icon: '⚔️', stats: '+18 ATK' },
    { name: 'MANA POTION', icon: '🧪', stats: '+50 MP' },
    { name: 'DRAGON SHIELD', icon: '🛡️', stats: '+24 DEF' },
    { name: 'MAGIC BOOTS', icon: '👢', stats: '+15 SPD' }
  ];

  const handleCoinCollect = () => {
    setCoins(c => c + 10);
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.3 }
    });
  };

  return (
    <div className="min-h-screen bg-[#181425] text-[#FEE761] font-pixel selection:bg-[#FF0044] selection:text-white p-4 sm:p-8">
      {/* 8-Bit Top Status Bar */}
      <div className="max-w-5xl mx-auto border-4 border-[#3F3F74] bg-[#262B44] p-4 flex flex-wrap items-center justify-between gap-4 text-xs mb-8">
        <div className="flex items-center gap-3">
          <span className="text-[#FF0044]">HP:</span>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`text-sm ${i < health ? 'text-[#FF0044]' : 'text-[#63646B]'}`}>
                ♥
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 text-[#00E436]">
          <span>LEVEL: 24</span>
          <span>•</span>
          <span>CLASS: CHIPTUNE PALADIN</span>
        </div>

        <button 
          onClick={handleCoinCollect}
          className="flex items-center gap-2 px-3 py-1 bg-[#FEE761] text-[#181425] border-2 border-black hover:bg-white cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
        >
          <span>COINS:</span>
          <span className="text-[#181425] font-bold">{coins} G</span>
        </button>
      </div>

      {/* Main 8-Bit Quest Hero Window */}
      <main className="max-w-5xl mx-auto border-4 border-[#3F3F74] bg-[#181425] p-6 sm:p-10 space-y-10 text-center">
        
        <div className="space-y-4">
          <span className="text-[10px] text-[#00E436] tracking-widest uppercase block">
            -- WORLD 4-2: BITFORGE DUNGEON --
          </span>
          <h1 className="text-2xl sm:text-4xl text-[#FF0044] leading-relaxed drop-shadow-[4px_4px_0_#000]">
            BITFORGE QUEST
          </h1>
          <p className="text-xs sm:text-sm text-[#C0CBDC] max-w-xl mx-auto leading-loose font-mono">
            LEVEL UP YOUR COMPANIONS IN HAND-PIXELED 16-BIT RETRO GLORY. ZERO POLYGONS. 100% UNALIASED SPRITES.
          </p>
        </div>

        {/* Hero Visual Composition: Handheld Console & Pixel Realm */}
        <div className="border-4 border-[#3F3F74] bg-[#262B44] p-3 text-left space-y-3">
          <div className="flex justify-between items-center text-[10px] text-[#00E436]">
            <span>DUNGEON_CAMERA_FEED.DMP</span>
            <span>SPRITE RES: 320x240 @ 60FPS</span>
          </div>
          <div className="border-2 border-black">
            <ImageBox
              src={MEDIA_ASSETS.pixelArt.retroHandheld}
              alt="Retro Handheld Gaming Console with Pixel Graphics"
              aspectRatio="16/9"
              rounded="none"
              caption="Custom 8-bit FPGA handheld executing cycle-accurate tilemap scrolls"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 text-xs pt-2">
          <button 
            onClick={handleCoinCollect}
            className="px-6 py-4 bg-[#FF0044] hover:bg-[#ff265f] text-white border-4 border-black shadow-[4px_4px_0_#00E436] active:translate-x-1 active:translate-y-1 transition-all cursor-pointer"
          >
            ⚔️ SLAY GOBLIN (+10G)
          </button>
          <button 
            onClick={() => setHealth(5)}
            className="px-6 py-4 bg-[#00E436] hover:bg-[#34f062] text-[#181425] border-4 border-black shadow-[4px_4px_0_#FF0044] active:translate-x-1 active:translate-y-1 transition-all cursor-pointer"
          >
            🧪 DRINK POTION (RESTORE HP)
          </button>
        </div>

        {/* Infinite Chiptune Dungeon Marquee */}
        <div className="border-4 border-[#3F3F74] bg-[#262B44] p-1">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.pixelArt.retroHandheld, title: 'Game Boy Color DMG', tag: 'Z80 CPU' },
              { src: MEDIA_ASSETS.synthwave.arcadeCabinet, title: 'Neo Geo MVS Rig', tag: '16-BIT 68000' },
              { src: MEDIA_ASSETS.ninetiesWeb.retroCRT, title: 'PVM RGB Monitor', tag: '240P SCANLINES' },
              { src: MEDIA_ASSETS.pixelArt.chiptuneKeyboard, title: 'FM Sound Synthesizer', tag: 'YM2612 CHIP' }
            ]}
          />
        </div>

        {/* Inventory Matrix */}
        <div className="pt-8 border-t-4 border-[#3F3F74] text-left">
          <div className="text-xs text-[#00E436] mb-4">INVENTORY PACKET (SLOTS: 4/16):</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {inventory.map((item, i) => (
              <div key={i} className="p-4 border-2 border-[#3F3F74] bg-[#262B44] space-y-2">
                <div className="text-2xl">{item.icon}</div>
                <div className="text-[10px] text-white font-bold">{item.name}</div>
                <div className="text-[9px] text-[#00E436]">{item.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 8-Bit Footer */}
      <footer className="max-w-5xl mx-auto border-4 border-[#3F3F74] bg-[#262B44] p-4 text-[10px] text-center text-[#8B9BB4] mt-8">
        BITFORGE QUEST RPG STUDIO • INSERT COIN TO CONTINUE • © 1989–2026
      </footer>
    </div>
  );
};
