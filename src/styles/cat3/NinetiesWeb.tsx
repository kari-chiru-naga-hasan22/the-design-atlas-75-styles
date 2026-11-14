import React, { useState } from 'react';
import { Terminal, Globe, Award, Download, Flame, HardDrive, Cpu, Radio } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const NinetiesWebPage: React.FC = () => {
  const [guestCount, setGuestCount] = useState(14028);

  return (
    <div className="min-h-screen bg-[#008080] text-black font-mono p-2 sm:p-6 selection:bg-[#0000FF] selection:text-white">
      {/* Windows 95 Window Frame Container */}
      <div className="max-w-5xl mx-auto bg-[#C0C0C0] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-black shadow-[4px_4px_0_#000]">
        
        {/* Windows 95 Title Bar */}
        <div className="bg-[#000080] text-white px-3 py-1.5 flex items-center justify-between font-bold text-xs select-none">
          <div className="flex items-center gap-2">
            <span>🌐</span>
            <span>Netscape Navigator - [Welcome to WebStation '96 Homepage]</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="w-4 h-4 bg-[#C0C0C0] text-black border-t border-l border-white border-r border-b border-black flex items-center justify-center font-black text-[10px]">_</button>
            <button className="w-4 h-4 bg-[#C0C0C0] text-black border-t border-l border-white border-r border-b border-black flex items-center justify-center font-black text-[10px]">□</button>
            <button className="w-4 h-4 bg-[#C0C0C0] text-black border-t border-l border-white border-r border-b border-black flex items-center justify-center font-black text-[10px]">✕</button>
          </div>
        </div>

        {/* Windows 95 Menu Bar */}
        <div className="border-b border-gray-600 px-3 py-1 flex items-center gap-4 text-xs bg-[#C0C0C0]">
          <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>F</u>ile</span>
          <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>E</u>dit</span>
          <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>V</u>iew</span>
          <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>B</u>ookmarks</span>
          <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>O</u>ptions</span>
          <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>H</u>elp</span>
        </div>

        {/* URL Address Bar */}
        <div className="border-b-2 border-gray-500 p-2 flex items-center gap-2 text-xs bg-[#C0C0C0]">
          <span className="font-bold">Location:</span>
          <div className="flex-1 bg-white border-t border-l border-gray-700 border-r border-b border-white px-2 py-1 font-mono text-black">
            http://www.geocities.com/SiliconValley/Pioneer/1996/index.html
          </div>
        </div>

        {/* Scrolling Animated Marquee */}
        <div className="bg-[#FFFF00] text-[#FF0000] py-1 border-y-2 border-black font-black text-xs uppercase overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex gap-8">
            <span>⚠️ UNDER CONSTRUCTION! EXCUSE OUR DUST! ⚠️</span>
            <span>BEST VIEWED IN NETSCAPE NAVIGATOR 3.0 AT 800X600 WITH 256 COLORS</span>
            <span>DON'T FORGET TO SIGN MY GUESTBOOK!</span>
            <span>⚠️ UNDER CONSTRUCTION! EXCUSE OUR DUST! ⚠️</span>
          </div>
        </div>

        {/* Main Content Area in Classic Times / Courier */}
        <div className="p-4 sm:p-8 space-y-8 bg-[#FFFFF0] border border-gray-500 m-2">
          
          <div className="text-center space-y-2">
            <h1 className="text-3xl sm:text-5xl font-black font-serif text-[#000080] tracking-tight">
              WELCOME TO WEBSTATION '96!
            </h1>
            <div className="text-xs text-[#800000] font-bold">
              [ OFFICIAL HOMEPAGE OF THE CYBERSPACE PIONEERS WEBRING ]
            </div>
            <hr className="border-t-2 border-gray-400 my-4" />
          </div>

          {/* Under Construction Notice Table */}
          <div className="p-4 bg-[#FFFF99] border-2 border-dashed border-[#FF0000] flex items-center gap-4">
            <div className="text-3xl">🚧</div>
            <div className="text-xs">
              <strong className="text-[#FF0000]">PARDON OUR APPEARANCE:</strong> This website was handcrafted using Notepad and HTML 3.2. Dialup modem connections running at 28.8 kbps please wait for graphics to load!
            </div>
          </div>

          {/* Hero Visual Composition: The 1996 CRT Hardware Workstation */}
          <div className="p-4 bg-[#C0C0C0] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-black space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-[#000080]">
              <span>SERVER_ROOM_BAY_01.JPG [28.8 KBPS DOWNLOAD]</span>
              <span className="text-gray-600">800x600 • 256 COLORS</span>
            </div>

            <div className="border border-black bg-black p-1">
              <ImageBox
                src={MEDIA_ASSETS.ninetiesWeb.retroCRT}
                alt="1990s Beige CRT Monitor Computer Station"
                aspectRatio="16/9"
                rounded="none"
                caption="Pentium Pro 200MHz workstation running Windows 95 with 33.6kbps US Robotics modem"
              />
            </div>
          </div>

          {/* Infinite 90s Web Hardware Filmstrip */}
          <div className="border-2 border-black bg-[#C0C0C0] p-1">
            <InfiniteImageMarquee
              speed="normal"
              images={[
                { src: MEDIA_ASSETS.ninetiesWeb.retroCRT, title: 'Sony Trinitron 17" CRT', tag: 'VGA 1024x768' },
                { src: MEDIA_ASSETS.ninetiesWeb.vintageServer, title: 'BSD Unix Server Tower', tag: 'APACHE 1.1' },
                { src: MEDIA_ASSETS.synthwave.arcadeCabinet, title: 'Coin-Op Arcade Rig', tag: 'CRT MONITOR' },
                { src: MEDIA_ASSETS.retro70s.vintageAmplifier, title: 'Sound Blaster AWE32', tag: 'MIDI SYNTH' }
              ]}
            />
          </div>

          {/* 90s Web Layout Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-4 bg-[#E0E0E0] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-800">
              <h3 className="font-bold text-sm text-[#000080] mb-2">⭐ COOL SITES</h3>
              <ul className="space-y-1.5 list-disc list-inside text-[#0000FF] underline">
                <li><a href="#" className="hover:text-[#FF0000]">Yahoo! Search Directory</a></li>
                <li><a href="#" className="hover:text-[#FF0000]">AltaVista Web Query</a></li>
                <li><a href="#" className="hover:text-[#FF0000]">Space Jam Official Site</a></li>
                <li><a href="#" className="hover:text-[#FF0000]">Mirabilis ICQ Chat (98a)</a></li>
              </ul>
            </div>

            <div className="p-4 bg-[#E0E0E0] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-800">
              <h3 className="font-bold text-sm text-[#000080] mb-2">💾 SHAREWARE DL</h3>
              <ul className="space-y-1.5 list-disc list-inside text-[#0000FF] underline">
                <li><a href="#" className="hover:text-[#FF0000]">WinZip 6.0 (v60b.zip)</a></li>
                <li><a href="#" className="hover:text-[#FF0000]">WinAMP 1.90 (Freeware)</a></li>
                <li><a href="#" className="hover:text-[#FF0000]">Doom Shareware Ep. 1</a></li>
                <li><a href="#" className="hover:text-[#FF0000]">mIRC v5.02 for Win95</a></li>
              </ul>
            </div>

            <div className="p-4 bg-[#E0E0E0] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-800">
              <h3 className="font-bold text-sm text-[#000080] mb-2">✉️ GUESTBOOK</h3>
              <p className="mb-3 text-[11px]">
                You are visitor number:
              </p>
              <div className="inline-block px-3 py-1 bg-black text-[#00FF00] font-mono font-bold text-lg border border-gray-500 shadow-inner">
                {String(guestCount).padStart(6, '0')}
              </div>
              <div className="mt-3">
                <button 
                  onClick={() => setGuestCount(c => c + 1)}
                  className="px-3 py-1 bg-[#C0C0C0] border-t border-l border-white border-r border-b border-black text-xs font-bold hover:bg-gray-300 cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
                >
                  Sign My Guestbook! ✍️
                </button>
              </div>
            </div>
          </div>

          {/* WebRing Navigation Bar */}
          <div className="p-4 bg-[#C0C0C0] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-black text-center text-xs space-y-2">
            <div className="font-bold text-[#000080]">
              [ THIS SITE IS A MEMBER OF THE NETSCAPE '96 WEBRING ]
            </div>
            <div className="flex justify-center gap-6 text-[#0000FF] underline font-bold">
              <a href="#">&lt;&lt; PREVIOUS SITE</a>
              <a href="#">[ RANDOM SITE ]</a>
              <a href="#">[ LIST SITES ]</a>
              <a href="#">NEXT SITE &gt;&gt;</a>
            </div>
          </div>
        </div>

        {/* Windows 95 Status Bar */}
        <div className="border-t border-gray-500 bg-[#C0C0C0] px-3 py-1 text-xs flex items-center justify-between text-gray-700">
          <span>Document: Done</span>
          <span>Security: Unencrypted Connection (Port 80)</span>
        </div>
      </div>
    </div>
  );
};
