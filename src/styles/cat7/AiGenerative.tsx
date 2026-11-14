import React, { useState } from 'react';
import { Cpu, Sparkles, Terminal, Activity, ArrowRight, Zap } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const AiGenerativePage: React.FC = () => {
  const [temperature, setTemperature] = useState(0.7);
  const [synapseSteps, setSynapseSteps] = useState(24);

  return (
    <div className="min-h-screen bg-[#070814] text-white font-sans selection:bg-[#06B6D4] selection:text-black p-4 sm:p-8 relative overflow-hidden">
      {/* Latent Diffusion Synaptic Glowing Lights in background */}
      <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-[#06B6D4]/20 via-[#D946EF]/20 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Frontier AI Header */}
        <header className="p-6 rounded-3xl bg-[#0F1124] border border-cyan-500/30 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#06B6D4] to-[#D946EF] flex items-center justify-center font-bold text-black text-xl shadow-lg shadow-cyan-500/20">
              <Cpu size={22} className="text-white" />
            </div>
            <div>
              <div className="text-xl font-bold font-plus-jakarta text-white">SYNAPTIC AI LAB</div>
              <div className="text-[10px] font-mono tracking-widest text-[#06B6D4] uppercase">
                AUTONOMOUS LATENT SPACE & MULTI-AGENT INTELLIGENCE
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase text-slate-300">
            <a href="#latent" className="hover:text-[#06B6D4] transition-colors">LATENT MANIFOLD</a>
            <a href="#gallery" className="hover:text-[#06B6D4] transition-colors">DIFFUSION FIELDS</a>
            <a href="#weights" className="hover:text-[#06B6D4] transition-colors">WEIGHT TENSORS</a>
          </div>

          <button className="px-5 py-2.5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400 text-cyan-300 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer">
            Access API Gateway
          </button>
        </header>

        {/* Hero Section: Latent Space Neural Flow */}
        <section className="text-center space-y-6 py-12 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider backdrop-blur-md">
            <Sparkles size={14} /> 1.2 TRILLION PARAMETER MULTIMODAL FOUNDATION
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-syne tracking-tight text-white leading-none">
            AUTONOMOUS <br />
            <span className="bg-gradient-to-r from-[#06B6D4] via-[#D946EF] to-[#818CF8] bg-clip-text text-transparent">
              LATENT INTELLECT.
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Synaptic engineers self-evolving cognitive models that reason across high-dimensional latent vectors. Reasoning chains, dynamic agent swarms, and instantaneous code generation.
          </p>

          {/* Hero Neural Synapse Image & Hyperparameter Box */}
          <div className="pt-8">
            <div className="p-6 rounded-3xl bg-[#0F1124] border border-cyan-500/30 max-w-3xl mx-auto space-y-6 text-left shadow-2xl">
              <ImageBox
                src={MEDIA_ASSETS.aiGenerative.neuralSynapse}
                alt="Neural Network Latent Manifold"
                aspectRatio="16/9"
                caption="High-dimensional neural diffusion manifold visualizing cross-attention weights."
                className="rounded-2xl overflow-hidden border border-cyan-500/20"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-400">LATENT TEMPERATURE</span>
                    <span className="text-[#06B6D4] font-bold">{temperature}</span>
                  </div>
                  <input 
                    type="range" min="0" max="1" step="0.05" value={temperature} 
                    onChange={(e) => setTemperature(Number(e.target.value))} 
                    className="w-full accent-[#06B6D4] cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-400">DIFFUSION STEPS</span>
                    <span className="text-[#D946EF] font-bold">{synapseSteps} STEPS</span>
                  </div>
                  <input 
                    type="range" min="10" max="50" step="2" value={synapseSteps} 
                    onChange={(e) => setSynapseSteps(Number(e.target.value))} 
                    className="w-full accent-[#D946EF] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Generative Infinite Marquee */}
        <section className="py-2">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.aiGenerative.neuralSynapse, title: 'Synapse Flow' },
              { src: MEDIA_ASSETS.aiGenerative.latentTopology, title: 'Latent Manifold' },
              { src: MEDIA_ASSETS.gradientDesign.auroraLiquid, title: 'Aurora Vector' },
              { src: MEDIA_ASSETS.holographic.lightFieldDispersion, title: 'Dispersion Tensor' }
            ]}
          />
        </section>

        {/* 3 Neural Architecture Innovations */}
        <section id="latent" className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-white/10">
          <div className="p-8 rounded-3xl bg-[#0F1124] border border-cyan-500/20 space-y-3">
            <span className="text-xs font-mono text-[#06B6D4]">ARCHITECTURE 01</span>
            <h3 className="text-2xl font-bold font-syne text-white">Hierarchical Swarm Routing</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Specialized expert sub-networks dynamically activated in parallel, reducing inference compute costs by 70%.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0F1124] border border-[#D946EF]/20 space-y-3">
            <span className="text-xs font-mono text-[#D946EF]">ARCHITECTURE 02</span>
            <h3 className="text-2xl font-bold font-syne text-white">Continuous Latent Memory</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Vector state representations persisted across million-token conversational contexts without information degradation.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0F1124] border border-[#818CF8]/20 space-y-3">
            <span className="text-xs font-mono text-[#818CF8]">ARCHITECTURE 03</span>
            <h3 className="text-2xl font-bold font-syne text-white">Formal Mathematical Verification</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Automated neuro-symbolic theorem provers checking generated code logic before execution in production.
            </p>
          </div>
        </section>

        {/* Generative Diffusion Gallery */}
        <section id="gallery" className="space-y-6 pt-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <h2 className="text-2xl font-bold font-syne text-white">LATENT TOPOLOGY & MANIFOLD ATLAS</h2>
            <span className="text-xs font-mono text-[#06B6D4]">MULTI-DIMENSIONAL EMBEDDINGS</span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.aiGenerative.latentTopology,
                title: 'High-D Manifold',
                subtitle: 'Continuous vector space clustering',
                category: 'TENSORS'
              },
              {
                src: MEDIA_ASSETS.aiGenerative.neuralSynapse,
                title: 'Attention Pathways',
                subtitle: 'Multi-head flash attention weights',
                category: 'INFERENCE'
              },
              {
                src: MEDIA_ASSETS.gradientDesign.auroraLiquid,
                title: 'Diffusion Energy',
                subtitle: 'Score-based denoising trajectory',
                category: 'DIFFUSION'
              }
            ]}
          />
        </section>

        {/* AI Footer */}
        <footer className="p-8 rounded-3xl bg-[#0F1124] border border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <div>SYNAPTIC NEURAL NETWORKS INC. • SAN FRANCISCO & ZÜRICH</div>
          <div>COGNITIVE LATENT INTELLIGENCE • © 2026</div>
        </footer>
      </div>
    </div>
  );
};
