import React, { useState } from 'react';
import { CheckSquare, Calendar, MessageSquare, Folder, Users, ArrowRight, Zap, Star } from 'lucide-react';
import { ImageBox, DeviceMockup, ImageGallery } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const FlatDesignPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tasks' | 'notes' | 'chat'>('tasks');

  const tasks = [
    { title: 'Finalize Q3 Product Roadmap', tag: 'Product', color: 'bg-[#1ABC9C]', done: true },
    { title: 'Update Brand Design Guidelines', tag: 'Design', color: 'bg-[#9B59B6]', done: true },
    { title: 'Deploy Microservices Cluster', tag: 'DevOps', color: 'bg-[#E67E22]', done: false },
    { title: 'Customer Feedback Review Sync', tag: 'Research', color: 'bg-[#3498DB]', done: false }
  ];

  const features = [
    {
      title: 'CLEAN DESKTOP WORKSPACE',
      subtitle: 'Zero drop shadows or optical fluff. Instant focus on collaborative projects.',
      category: 'MODERN DESK',
      year: 'FLAT UI',
      src: MEDIA_ASSETS.flatDesign.modernWorkspace,
      aspectRatio: '4/3' as const
    },
    {
      title: 'TABLET SYNC & SKETCH',
      subtitle: 'Synchronized cross-platform state across desktop, web, and tablet viewports.',
      category: 'MOBILITY',
      year: 'REALTIME',
      src: MEDIA_ASSETS.flatDesign.cleanTabletUI,
      aspectRatio: '4/3' as const
    }
  ];

  return (
    <div className="min-h-screen bg-[#ECF0F1] text-[#2C3E50] font-sans selection:bg-[#1ABC9C] selection:text-white">
      {/* 100% Flat Solid Navigation */}
      <nav className="bg-[#2C3E50] text-white px-6 py-5 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#1ABC9C] flex items-center justify-center font-bold text-white text-lg">
            ✓
          </div>
          <span className="text-xl font-bold tracking-tight">CLEARFLOW</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <a href="#workspace" className="hover:text-[#1ABC9C] transition-colors">Workspace</a>
          <a href="#features" className="hover:text-[#1ABC9C] transition-colors">Features</a>
          <a href="#tasks" className="hover:text-[#1ABC9C] transition-colors">Roadmap</a>
        </div>

        <button className="px-5 py-2.5 bg-[#1ABC9C] hover:bg-[#16a085] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer">
          Start Free Trial
        </button>
      </nav>

      {/* Hero Section: Crisp Flat Color Blocking */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center space-y-6">
        <div className="inline-block px-4 py-1.5 bg-[#34495E] text-[#1ABC9C] text-xs font-bold uppercase tracking-wider">
          ZERO SHADOWS • ZERO GRADIENTS • 100% PURE CLARITY
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#2C3E50] leading-tight max-w-4xl mx-auto">
          Work Without Distraction. <br />
          <span className="text-[#1ABC9C]">Pure Flat Productivity.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#7F8C8D] font-medium leading-relaxed">
          Clearflow removes the visual clutter of modern software. No drop shadows, no skeuomorphic fluff, no distracting animations. Just your work, organized with pure geometric focus.
        </p>

        {/* Device Mockup with Real Workspace Imagery */}
        <div id="workspace" className="max-w-4xl mx-auto pt-6">
          <DeviceMockup url="https://clearflow.workspace/projects" title="Clearflow Desktop v4">
            <ImageBox
              src={MEDIA_ASSETS.flatDesign.modernWorkspace}
              alt="Clearflow Modern Flat Workspace"
              aspectRatio="16/9"
              rounded="none"
              tag="LIVE CLIENT WORKSPACE"
            />
          </DeviceMockup>
        </div>
      </section>

      {/* 2-Column Flat Showcase Gallery */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-16 space-y-8">
        <div className="border-b-4 border-[#2C3E50] pb-4 flex justify-between items-end">
          <div>
            <span className="text-xs font-bold uppercase text-[#1ABC9C]">SYSTEM FEATURES</span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#2C3E50]">
              Built for Focus
            </h2>
          </div>
          <span className="text-xs font-bold text-[#7F8C8D]">FLAT DESIGN 2.0</span>
        </div>

        <ImageGallery items={features} columns={2} theme="minimal" />
      </section>

      {/* Interactive Task Cards */}
      <section id="tasks" className="max-w-4xl mx-auto px-6 py-12 space-y-4">
        <h3 className="text-xl font-bold uppercase tracking-tight text-[#2C3E50]">
          Active Sprint Execution
        </h3>
        <div className="space-y-2">
          {tasks.map((task, idx) => (
            <div key={idx} className="p-4 bg-white flex items-center justify-between border-l-4 border-[#1ABC9C]">
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 flex items-center justify-center text-white text-xs font-bold ${task.done ? 'bg-[#2ECC71]' : 'bg-[#BDC3C7]'}`}>
                  {task.done ? '✓' : ''}
                </div>
                <span className={`font-semibold text-sm ${task.done ? 'line-through text-[#BDC3C7]' : 'text-[#2C3E50]'}`}>
                  {task.title}
                </span>
              </div>
              <span className={`px-2 py-0.5 text-white text-xs font-bold ${task.color}`}>
                {task.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white p-8 text-center text-xs font-bold">
        CLEARFLOW WORKSPACE // MINIMAL FLAT ARCHITECTURE • 2026
      </footer>
    </div>
  );
};
