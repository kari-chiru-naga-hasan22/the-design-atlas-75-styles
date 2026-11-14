import React, { useState } from 'react';
import { Compass, Lightbulb, Zap, Activity } from 'lucide-react';

export function LiquidScienceOfLight() {
  const [incidentAngle, setIncidentAngle] = useState(45); // degrees
  const [ior, setIor] = useState(1.52); // Glass default

  // Snell's Law calculation: n1 * sin(theta1) = n2 * sin(theta2)
  // Air n1 = 1.0, Glass n2 = ior
  const radIncident = (incidentAngle * Math.PI) / 180;
  const sinRefracted = (1.0 * Math.sin(radIncident)) / ior;
  const refractedAngle = Math.asin(Math.min(1.0, sinRefracted)) * (180 / Math.PI);

  // Chromatic dispersion angles (blue bends more than red)
  const iorRed = ior - 0.03;
  const iorBlue = ior + 0.04;
  const refractedAngleRed = Math.asin(Math.min(1.0, Math.sin(radIncident) / iorRed)) * (180 / Math.PI);
  const refractedAngleBlue = Math.asin(Math.min(1.0, Math.sin(radIncident) / iorBlue)) * (180 / Math.PI);

  // Fresnel Reflectance (Schlick's approximation)
  // R0 = ((n1 - n2) / (n1 + n2))^2
  const r0 = Math.pow((1.0 - ior) / (1.0 + ior), 2);
  const fresnel = r0 + (1 - r0) * Math.pow(1 - Math.cos(radIncident), 5);

  // Coordinates for the interactive ray diagram (SVG center at 200, 160)
  const cx = 240;
  const cy = 160;
  const rayLen = 140;

  // Incident ray enters from top left
  const inX = cx - Math.sin(radIncident) * rayLen;
  const inY = cy - Math.cos(radIncident) * rayLen;

  // Reflected ray bounces top right
  const refX = cx + Math.sin(radIncident) * rayLen;
  const refY = cy - Math.cos(radIncident) * rayLen;

  // Refracted rays bend into glass (bottom)
  const radRefRed = (refractedAngleRed * Math.PI) / 180;
  const outRedX = cx + Math.sin(radRefRed) * rayLen;
  const outRedY = cy + Math.cos(radRefRed) * rayLen;

  const radRefGreen = (refractedAngle * Math.PI) / 180;
  const outGreenX = cx + Math.sin(radRefGreen) * rayLen;
  const outGreenY = cy + Math.cos(radRefGreen) * rayLen;

  const radRefBlue = (refractedAngleBlue * Math.PI) / 180;
  const outBlueX = cx + Math.sin(radRefBlue) * rayLen;
  const outBlueY = cy + Math.cos(radRefBlue) * rayLen;

  return (
    <section className="relative py-28 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300">
          <Lightbulb className="w-3.5 h-3.5" />
          <span>OPTICAL PHYSICS & MATHEMATICAL FOUNDATION</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black font-space tracking-tight text-white">
          THE SCIENCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-400 to-violet-400">OF LIGHT</span>
        </h2>
        <p className="text-base md:text-lg text-white/60">
          Realistic glass is governed by strict wave mechanics: Snell's Law, chromatic dispersion vectors, and Fresnel equations executed in real-time GLSL fragment shaders.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Interactive Optical Ray Tracer Diagram */}
        <div className="lg:col-span-7 bg-[#0C0C14] border border-white/15 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <span className="text-xs font-mono text-white/70 flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-400" />
              SNELL'S REFRACTIVE RAY TRACER
            </span>
            <span className="text-xs font-mono text-amber-400 font-bold">
              θ₁: {incidentAngle}° → θ₂: {refractedAngle.toFixed(1)}°
            </span>
          </div>

          {/* SVG Ray Diagram */}
          <div className="w-full h-80 flex items-center justify-center relative bg-black/40 rounded-2xl border border-white/5 overflow-hidden">
            <svg viewBox="0 0 480 320" className="w-full h-full">
              {/* Boundary Plane: Air on top, Glass on bottom */}
              <rect x="0" y="160" width="480" height="160" fill="rgba(139, 92, 246, 0.08)" />
              <line x1="0" y1="160" x2="480" y2="160" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />

              {/* Surface Normal (dashed line) */}
              <line x1="240" y1="20" x2="240" y2="300" stroke="rgba(255,255,255,0.2)" strokeDasharray="4 4" strokeWidth="1" />

              {/* Labels */}
              <text x="30" y="50" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="monospace">MEDIUM 1: AIR (n₁ = 1.00)</text>
              <text x="30" y="270" fill="rgba(168,85,247,0.7)" fontSize="11" fontFamily="monospace">MEDIUM 2: GLASS (n₂ = {ior.toFixed(2)})</text>

              {/* Incident Ray (White/Yellow Beam) */}
              <line x1={inX} y1={inY} x2={cx} y2={cy} stroke="#FBBF24" strokeWidth="3" />
              <circle cx={inX} cy={inY} r="4" fill="#FBBF24" />

              {/* Reflected Ray (White, intensity scaled by Fresnel) */}
              <line
                x1={cx}
                y1={cy}
                x2={refX}
                y2={refY}
                stroke="#FFFFFF"
                strokeWidth={Math.max(1, fresnel * 4)}
                strokeOpacity={Math.max(0.3, fresnel)}
              />

              {/* Chromatic Dispersion Rays (Red, Green, Blue) */}
              {/* Red Beam */}
              <line x1={cx} y1={cy} x2={outRedX} y2={outRedY} stroke="#EF4444" strokeWidth="2.5" strokeOpacity="0.85" />
              {/* Green Beam */}
              <line x1={cx} y1={cy} x2={outGreenX} y2={outGreenY} stroke="#10B981" strokeWidth="2.5" strokeOpacity="0.85" />
              {/* Blue Beam */}
              <line x1={cx} y1={cy} x2={outBlueX} y2={outBlueY} stroke="#3B82F6" strokeWidth="2.5" strokeOpacity="0.85" />

              {/* Angle Arcs */}
              <circle cx={cx} cy={cy} r="30" fill="none" stroke="rgba(251,191,36,0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx={cx} cy={cy} r="4" fill="#FFFFFF" />
            </svg>

            {/* Dispersion Spectrum Legend */}
            <div className="absolute bottom-3 right-4 flex items-center gap-3 text-[10px] font-mono bg-black/70 px-3 py-1 rounded-lg border border-white/10">
              <span className="flex items-center gap-1 text-red-400"><span className="w-2 h-2 rounded-full bg-red-500" /> Red λ: 700nm</span>
              <span className="flex items-center gap-1 text-emerald-400"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Green λ: 530nm</span>
              <span className="flex items-center gap-1 text-blue-400"><span className="w-2 h-2 rounded-full bg-blue-500" /> Blue λ: 430nm</span>
            </div>
          </div>

          {/* Controls for Incident Angle and IOR */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-white/80">
                <span>Incident Angle (θ₁)</span>
                <span className="text-amber-400">{incidentAngle}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="85"
                value={incidentAngle}
                onChange={(e) => setIncidentAngle(parseInt(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-white/80">
                <span>Index of Refraction (IOR)</span>
                <span className="text-violet-400">{ior.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="2.42"
                step="0.02"
                value={ior}
                onChange={(e) => setIor(parseFloat(e.target.value))}
                className="w-full accent-violet-500"
              />
            </div>
          </div>
        </div>

        {/* Right: Optical Laws Breakdown Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Card 1: Snell's Law */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/40 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h4 className="font-bold text-white text-base">Snell's Law of Refraction</h4>
            </div>
            <p className="text-xs text-white/60 mb-3">
              Light alters velocity when crossing optical boundaries. The relationship between angles of incidence and refraction determines spatial magnification and visual displacement.
            </p>
            <div className="px-3 py-1.5 rounded-lg bg-black/50 font-mono text-xs text-amber-300 inline-block border border-white/5">
              n₁ · sin(θ₁) = n₂ · sin(θ₂)
            </div>
          </div>

          {/* Card 2: Chromatic Dispersion */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/40 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h4 className="font-bold text-white text-base">Cauchy Chromatic Dispersion</h4>
            </div>
            <p className="text-xs text-white/60 mb-3">
              Refractive index varies inversely with wavelength. Blue light bends sharper than red light, creating the iconic prismatic spectral fringe along glass bevels.
            </p>
            <div className="px-3 py-1.5 rounded-lg bg-black/50 font-mono text-xs text-pink-300 inline-block border border-white/5">
              n(λ) = A + B/λ² + C/λ⁴
            </div>
          </div>

          {/* Card 3: Fresnel Reflectance */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h4 className="font-bold text-white text-base">Schlick Fresnel Reflection</h4>
            </div>
            <p className="text-xs text-white/60 mb-3">
              Surfaces viewed head-on transmit mostly light; at grazing glancing angles, reflectance approaches 100%, producing brilliant specular edge highlights.
            </p>
            <div className="flex items-center justify-between font-mono text-xs text-cyan-300">
              <span>Current Reflectance: {(fresnel * 100).toFixed(1)}%</span>
              <span className="text-white/40">R(θ) = R₀ + (1-R₀)(1-cos θ)⁵</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
