import React, { useState } from 'react';
import { Terminal, GitCommit, Play, Copy, Check, Cpu } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const MonospaceDeveloperPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'rust' | 'wasm' | 'diff'>('rust');

  const copyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#58A6FF] font-mono selection:bg-[#2EA043] selection:text-white relative">
      
      {/* ASCII Status Grid Line Top */}
      <div className="w-full bg-[#161B22] border-b border-[#30363D] px-4 py-1.5 text-xs text-[#8B949E] flex flex-wrap justify-between items-center font-mono">
        <div className="flex items-center gap-3">
          <span className="text-[#2EA043]">● RUNTIME STATUS: DETERMINISTIC</span>
          <span>BRANCH: main (commit 7e91a4f)</span>
        </div>
        <div className="flex items-center gap-4">
          <span>TARGET: wasm32-unknown-unknown</span>
          <span className="text-[#BC8CFF]">COMPILER: v1.82-edge</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Terminal Header */}
        <header className="border border-[#30363D] bg-[#161B22] p-4 flex flex-wrap justify-between items-center gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-[#2EA043]" />
            <div>
              <div className="text-xl font-bold tracking-tight text-white">
                SYNTAX.RUNTIME<span className="text-[#2EA043]">_</span>
              </div>
              <div className="text-[11px] text-[#8B949E]">
                ZERO-LATENCY DISTRIBUTED WASM MICRO-COMPILER
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <button 
              onClick={copyCode}
              className="px-3 py-1.5 border border-[#30363D] hover:border-[#58A6FF] text-[#8B949E] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#2EA043]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED TO CLIPBOARD' : 'curl -sSf https://syntax.sh | sh'}</span>
            </button>
          </div>
        </header>

        {/* Hero Section: Monospaced Code Engine */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block border border-[#2EA043]/40 bg-[#2EA043]/10 px-3 py-1 text-xs text-[#2EA043]">
              //! SYSTEM ARCHITECTURE SPECIFICATION
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              pub async fn <br />
              <span className="text-[#BC8CFF]">compile_deterministic</span>() <br />
              -&gt; Result&lt;<span className="text-[#58A6FF]">WasmBytes</span>, <span className="text-[#F85149]">Error</span>&gt;
            </h1>

            <p className="text-sm text-[#8B949E] leading-relaxed">
              Every operation executed with mathematical determinism. Single-digit nanosecond boot times, 
              zero garbage collection pauses, bit-identical bytecode across 40 edge regions.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-6 py-3 bg-[#2EA043] text-white text-xs font-bold hover:bg-[#238636] transition-colors border border-[#2EA043] flex items-center gap-2 cursor-pointer">
                <Play className="w-4 h-4 fill-current" /> EXECUTE IN BROWSER REPL
              </button>
              <span className="text-xs text-[#8B949E]">
                $ cargo install syntax-cli
              </span>
            </div>
          </div>

          {/* Interactive Code Panel with Syntax Highlighting */}
          <div className="lg:col-span-6">
            <div className="bg-[#161B22] border border-[#30363D] rounded shadow-2xl overflow-hidden text-xs">
              {/* Tab Bar */}
              <div className="flex bg-[#0D1117] border-b border-[#30363D] px-2">
                {(['rust', 'wasm', 'diff'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 uppercase font-bold border-b-2 transition-colors cursor-pointer ${
                      activeTab === tab
                        ? 'border-[#58A6FF] text-white bg-[#161B22]'
                        : 'border-transparent text-[#8B949E] hover:text-white'
                    }`}
                  >
                    {tab === 'rust' ? 'engine.rs' : tab === 'wasm' ? 'bytecode.wat' : 'git diff'}
                  </button>
                ))}
              </div>

              {/* Code Contents */}
              <div className="p-4 overflow-x-auto space-y-1 font-mono leading-relaxed">
                {activeTab === 'rust' && (
                  <>
                    <div className="text-[#8B949E]">// 01. Low-overhead memory pool arena</div>
                    <div><span className="text-[#BC8CFF]">use</span> syntax_runtime::prelude::*;</div>
                    <div>&nbsp;</div>
                    <div><span className="text-[#BC8CFF]">pub struct</span> <span className="text-[#FFA657]">ComputeEngine</span> {'{'}</div>
                    <div className="pl-4">arena: <span className="text-[#58A6FF]">ArenaAllocator</span>,</div>
                    <div className="pl-4">registers: [<span className="text-[#58A6FF]">u64</span>; <span className="text-[#79C0FF]">16</span>],</div>
                    <div>{'}'}</div>
                    <div>&nbsp;</div>
                    <div><span className="text-[#BC8CFF]">impl</span> <span className="text-[#FFA657]">ComputeEngine</span> {'{'}</div>
                    <div className="pl-4"><span className="text-[#BC8CFF]">pub fn</span> <span className="text-[#D2A8FF]">eval</span>(&amp;<span className="text-[#BC8CFF]">mut</span> <span className="text-[#79C0FF]">self</span>, op: <span className="text-[#58A6FF]">Opcode</span>) -&gt; <span className="text-[#58A6FF]">u64</span> {'{'}</div>
                    <div className="pl-8"><span className="text-[#BC8CFF]">match</span> op {'{'}</div>
                    <div className="pl-12"><span className="text-[#58A6FF]">Opcode</span>::Add(a, b) =&gt; <span className="text-[#79C0FF]">self</span>.registers[a] + <span className="text-[#79C0FF]">self</span>.registers[b],</div>
                    <div className="pl-12"><span className="text-[#58A6FF]">Opcode</span>::Jmp(target) =&gt; <span className="text-[#79C0FF]">self</span>.jump_direct(target),</div>
                    <div className="pl-8">{'}'}</div>
                    <div className="pl-4">{'}'}</div>
                    <div>{'}'}</div>
                  </>
                )}

                {activeTab === 'wasm' && (
                  <>
                    <div className="text-[#8B949E]">(; Compiled WebAssembly Text Format ;)</div>
                    <div>(module</div>
                    <div className="pl-4">(func <span className="text-[#58A6FF]">$eval</span> (param <span className="text-[#BC8CFF]">i32 i32</span>) (result <span className="text-[#BC8CFF]">i32</span>)</div>
                    <div className="pl-8">local.get <span className="text-[#79C0FF]">0</span></div>
                    <div className="pl-8">local.get <span className="text-[#79C0FF]">1</span></div>
                    <div className="pl-8"><span className="text-[#D2A8FF]">i32.add</span></div>
                    <div className="pl-4">)</div>
                    <div className="pl-4">(export <span className="text-[#2EA043]">"eval"</span> (func <span className="text-[#58A6FF]">$eval</span>))</div>
                    <div>)</div>
                  </>
                )}

                {activeTab === 'diff' && (
                  <>
                    <div className="text-[#8B949E]">diff --git a/src/scheduler.rs b/src/scheduler.rs</div>
                    <div className="text-[#8B949E]">--- a/src/scheduler.rs</div>
                    <div className="text-[#8B949E]">+++ b/src/scheduler.rs</div>
                    <div className="text-[#F85149]">- let latency = measure_microseconds();</div>
                    <div className="text-[#2EA043]">+ let latency = measure_sub_nanoseconds(); // Zero GC barrier</div>
                    <div className="text-[#2EA043]">+ arena.lock_free_commit();</div>
                  </>
                )}
              </div>

              {/* Status bar */}
              <div className="bg-[#0D1117] border-t border-[#30363D] px-4 py-2 flex justify-between items-center text-[11px] text-[#8B949E]">
                <span>UTF-8 • LF • Rust 2024</span>
                <span className="text-[#2EA043]">0 ERRORS • 0 WARNINGS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Monospace Developer Hardware Infrastructure Image */}
        <div className="border border-[#30363D] bg-[#161B22] p-4">
          <ImageBox
            src={MEDIA_ASSETS.monospaceDeveloper.mechanicalSwitches}
            alt="Mechanical Switches Macro Tactile Developer Rig"
            aspectRatio="16/9"
            caption="Low-latency ergonomic mechanical tactile switches with gold crosspoint contacts."
            className="border border-[#30363D]"
          />
        </div>

        {/* Developer CLI Infinite Marquee */}
        <section className="py-2 border-y border-[#30363D]">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.monospaceDeveloper.mechanicalSwitches, title: 'Mechanical Switch Matrix', tag: 'INPUT' },
              { src: MEDIA_ASSETS.monospaceDeveloper.serverPatchBay, title: 'Cat8 Fiber Patch Bay', tag: '100GBPS' },
              { src: MEDIA_ASSETS.terminal.serverAisles, title: 'Bare-Metal Node Cluster', tag: 'DETERMINISTIC' },
              { src: MEDIA_ASSETS.wireframe.cadSchematic, title: 'WASM Instruction Pipeline', tag: 'BYTECODE' }
            ]}
          />
        </section>

        {/* Distributed Edge Node Benchmark Grid */}
        <section className="space-y-6">
          <div className="flex justify-between items-center border-b border-[#30363D] pb-3 text-xs">
            <span className="text-white font-bold">// EDGE METRICS & REGION LATENCY</span>
            <span className="text-[#8B949E]">PING PROTOCOL: UDP QUIC</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { region: 'us-east-va', latency: '0.42 ms', coldBoot: '14 μs', status: 'ONLINE' },
              { region: 'eu-west-fra', latency: '0.68 ms', coldBoot: '18 μs', status: 'ONLINE' },
              { region: 'ap-east-tyo', latency: '0.51 ms', coldBoot: '16 μs', status: 'ONLINE' },
              { region: 'sa-east-gru', latency: '1.12 ms', coldBoot: '21 μs', status: 'ONLINE' }
            ].map((node, idx) => (
              <div key={idx} className="bg-[#161B22] border border-[#30363D] p-4 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white font-bold">{node.region}</span>
                  <span className="text-[#2EA043] font-mono text-[10px]">{node.status}</span>
                </div>
                <div className="text-xl font-bold text-[#58A6FF]">{node.latency}</div>
                <div className="text-[11px] text-[#8B949E] border-t border-[#30363D] pt-2 flex justify-between">
                  <span>COLD BOOT:</span>
                  <span className="text-white">{node.coldBoot}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Infrastructure Hardware Gallery */}
        <section className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b border-[#30363D] pb-3">
            <h2 className="text-xl font-bold text-white">// HARDWARE ARCHITECTURE & TELEMETRY</h2>
            <span className="text-xs text-[#2EA043]">TOP-OF-RACK SWITCHING</span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.monospaceDeveloper.mechanicalSwitches,
                title: 'Tactile Actuation',
                subtitle: 'Gateron Oil King linear switches',
                category: 'INPUT'
              },
              {
                src: MEDIA_ASSETS.monospaceDeveloper.serverPatchBay,
                title: 'High-Density Patch Bay',
                subtitle: 'Direct-attach copper SFP28 links',
                category: 'NETWORK'
              },
              {
                src: MEDIA_ASSETS.terminal.serverAisles,
                title: 'Cold Aisle Containment',
                subtitle: 'Direct-to-chip liquid cooling racks',
                category: 'DATACENTER'
              }
            ]}
          />
        </section>

        {/* Footer */}
        <footer className="border-t border-[#30363D] pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#8B949E]">
          <div>
            SYNTAX RUNTIME ENGINE • APACHE 2.0 / MIT OPEN SPECIFICATION
          </div>
          <div>
            100% DETERMINISTIC WASM EXECUTION • 2026
          </div>
        </footer>

      </div>
    </div>
  );
};
