import React, { useState } from 'react';
import { Terminal as TerminalIcon, ShieldAlert, Check, Play, HardDrive, Key, Cpu } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const TerminalPage: React.FC = () => {
  const [commandInput, setCommandInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'INIT KERNEL 6.12.4-ROOT-HARDENED...',
    'MEM TEST: 131072 MB OK. ZERO LEAKS DETECTED.',
    'CRYPTOGRAPHIC PRIVILEGE GRANTED (RING 0).',
    'TYPE "help", "scan", "status", OR "exploit" TO EXECUTE.'
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = commandInput.trim().toLowerCase();
    let response = '';

    if (cmd === 'help') {
      response = 'AVAILABLE OPERATORS: help, status, scan, exploit, clear, whoami';
    } else if (cmd === 'status') {
      response = 'SYSTEM HEALTH: 100% | ACTIVE TOR NODES: 6,420 | LATENCY: 1.2ms';
    } else if (cmd === 'scan') {
      response = 'PORT SCAN: 22 [OPEN], 443 [OPEN], 8080 [FILTERED]. ZERO ZERO-DAYS DETECTED.';
    } else if (cmd === 'exploit') {
      response = 'EXECUTING CVE-2026-9912 PRIVILEGE ESCALATION... ROOT ACHIEVED (UID 0).';
    } else if (cmd === 'whoami') {
      response = 'root@darknet-node-0x00 # UID=0 GID=0 (SYSTEM_OPERATOR)';
    } else if (cmd === 'clear') {
      setTerminalLogs([]);
      setCommandInput('');
      return;
    } else {
      response = `UNKNOWN COMMAND: "${cmd}". TYPE "help" FOR OPERATORS.`;
    }

    setTerminalLogs(prev => [...prev, `$ ${commandInput}`, response]);
    setCommandInput('');
  };

  return (
    <div className="min-h-screen bg-[#070A07] text-[#00FF66] font-mono selection:bg-[#00FF66] selection:text-black p-4 sm:p-8 relative">
      {/* CRT Scanline Simulation */}
      <div 
        className="absolute inset-0 pointer-events-none z-30 opacity-15"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.6) 0px, rgba(0,0,0,0.6) 1px, transparent 1px, transparent 2px)'
        }}
      />

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        
        {/* Terminal Window Header Bar */}
        <header className="p-4 bg-[#0F170F] border-2 border-[#00FF66] shadow-[0_0_20px_rgba(0,255,102,0.2)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TerminalIcon size={18} className="text-[#00FF66]" />
            <span className="font-bold text-xs uppercase tracking-wider">
              ROOT SHELL v6.12 // HARDWARE INTERFACE 0x00
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66] animate-pulse" />
            <span className="font-bold">KERNEL: ACTIVE</span>
          </div>
        </header>

        {/* ASCII Art Banner */}
        <div className="p-6 bg-black border-2 border-[#00FF66] text-[10px] sm:text-xs overflow-x-auto leading-none text-[#00FF66] select-none shadow-inner">
{`
██████╗  ██████╗  ██████╗ ████████╗     ██████╗ ██╗  ██╗ ██████╗  ██████╗ 
██╔══██╗██╔═══██╗██╔═══██╗╚══██╔══╝    ██╔═████╗╚██╗██╔╝██╔═████╗██╔═████╗
██████╔╝██║   ██║██║   ██║   ██║       ██║██╔██║ ╚███╔╝ ██║██╔██║██║██╔██║
██╔══██╗██║   ██║██║   ██║   ██║       ████╔╝██║ ██╔██╗ ████╔╝██║████╔╝██║
██║  ██║╚██████╔╝╚██████╔╝   ██║       ╚██████╔╝██╔╝ ██╗╚██████╔╝╚██████╔╝
╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝        ╚═════╝ ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ 
`}
        </div>

        {/* Interactive Shell Terminal */}
        <div className="p-6 bg-[#050A05] border-2 border-[#00FF66] rounded-xl shadow-[0_0_30px_rgba(0,255,102,0.15)] space-y-4">
          <div className="space-y-1.5 text-xs sm:text-sm max-h-72 overflow-y-auto">
            {terminalLogs.map((log, i) => (
              <div key={i} className={log.startsWith('$') ? 'text-white font-bold' : 'text-[#00FF66]'}>
                {log}
              </div>
            ))}
          </div>

          {/* Interactive Shell Input Form */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-4 border-t border-[#00FF66]/30">
            <span className="text-[#00FF66] font-bold text-sm">root@node0x00:~#</span>
            <input
              type="text"
              value={commandInput}
              onChange={(e) => setCommandInput(e.target.value)}
              placeholder="type 'help', 'scan', 'exploit', 'status'..."
              className="flex-1 bg-transparent text-[#00FF66] placeholder-[#008F11] font-mono text-sm focus:outline-none"
              autoFocus
            />
            <button type="submit" className="px-3 py-1 bg-[#00FF66] text-black font-bold text-xs uppercase hover:bg-white cursor-pointer">
              RUN
            </button>
          </form>
        </div>

        {/* Visual Hero Composition: Mainframe Server Racks */}
        <div className="p-3 bg-black border-2 border-[#00FF66] shadow-[0_0_30px_rgba(0,255,102,0.2)]">
          <ImageBox
            src={MEDIA_ASSETS.terminal.serverAisles}
            alt="Cold Aisle Server Farm with Glowing Blue and Green Optical Switch Racks"
            aspectRatio="16/9"
            rounded="none"
            caption="Node Cluster 0x00: Tier 4 biometric datacenter facility under constant liquid cooling"
          />
        </div>

        {/* Infinite Terminal Server Stream */}
        <div className="border-2 border-[#00FF66] bg-black p-2">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.terminal.serverAisles, title: 'Cold Aisle 0x00', tag: 'TIER-4' },
              { src: MEDIA_ASSETS.terminal.crtTelemetry, title: 'Phosphor Monitor Telemetry', tag: 'VT100' },
              { src: MEDIA_ASSETS.monospaceDeveloper.serverPatchBay, title: 'Optical Patch Bay', tag: '100GBPS' },
              { src: MEDIA_ASSETS.cyberpunk.neonHolograms, title: 'Kernel Root Ring 0', tag: 'POSIX' }
            ]}
          />
        </div>

        {/* 3 Mainframe Hardware Modules Gallery */}
        <section className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b-2 border-[#00FF66]/40 pb-3">
            <h3 className="text-xl font-bold font-mono text-[#00FF66] uppercase">HARDWARE_SUBSYSTEMS.LOG</h3>
            <span className="font-mono text-xs text-white/50">RING 0 PRIVILEGES</span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.terminal.crtTelemetry,
                title: 'CRT Phosphor Console',
                subtitle: 'P39 green phosphor tube running asynchronous serial console over RS-232',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.monospaceDeveloper.serverPatchBay,
                title: 'High-Density Patch Bay',
                subtitle: 'Single-mode optical interconnects linking distributed supercomputing nodes',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.terminal.serverAisles,
                title: 'Sub-Zero Liquid Chillers',
                subtitle: 'Dielectric immersion fluid cooling 128-core processors at continuous 4.8GHz clocks',
                aspectRatio: '4/3'
              }
            ]}
          />
        </section>

        {/* Terminal Footer */}
        <footer className="p-4 border-2 border-[#00FF66]/30 flex flex-col sm:flex-row items-center justify-between text-xs text-[#008F11] gap-4">
          <div>ROOT SHELL CONSOLE • LOCALHOST 127.0.0.1 • PORT 22 (SSH)</div>
          <div>ZERO TRACE DETECTED • © 2026 DARKNET OS</div>
        </footer>
      </div>
    </div>
  );
};
