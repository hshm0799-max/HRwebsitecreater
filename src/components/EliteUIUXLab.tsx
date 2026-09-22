import { useState } from 'react';
import { Sparkles, Eye, Layers, Palette, RefreshCw, Smartphone, Monitor } from 'lucide-react';

export function EliteUIUXLab() {
  const [activeTheme, setActiveTheme] = useState<'cyber-blue' | 'neon-purple' | 'emerald-matrix'>('cyber-blue');
  const [wireframeMode, setWireframeMode] = useState(false);
  const [tiltAngle, setTiltAngle] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTiltAngle({ x, y });
  };

  const handleMouseLeave = () => {
    setTiltAngle({ x: 0, y: 0 });
  };

  return (
    <section id="uiux-lab-section" className="py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/40 border border-pink-500/30 text-pink-400 font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MODULE 07 // CINEMATIC 3D UI/UX LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-mono">
            Premium Cinematic Vector Experience
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto mt-2">
            We engineer glassmorphic spatial interfaces, dynamic view transformations, and fluid micro-interaction physics
            to maximize visitor retention and brand prestige across all devices.
          </p>
        </div>

        {/* Interactive Controls */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl mb-8 flex flex-wrap justify-between items-center gap-3 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Palette Matrix:</span>
            <button
              onClick={() => setActiveTheme('cyber-blue')}
              className={`px-3 py-1 rounded-lg border transition ${
                activeTheme === 'cyber-blue'
                  ? 'bg-blue-600/30 border-blue-500 text-blue-300 font-bold'
                  : 'bg-slate-950 border-slate-800 text-slate-400'
              }`}
            >
              Cyber Blue
            </button>
            <button
              onClick={() => setActiveTheme('neon-purple')}
              className={`px-3 py-1 rounded-lg border transition ${
                activeTheme === 'neon-purple'
                  ? 'bg-purple-600/30 border-purple-500 text-purple-300 font-bold'
                  : 'bg-slate-950 border-slate-800 text-slate-400'
              }`}
            >
              Neon Purple
            </button>
            <button
              onClick={() => setActiveTheme('emerald-matrix')}
              className={`px-3 py-1 rounded-lg border transition ${
                activeTheme === 'emerald-matrix'
                  ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300 font-bold'
                  : 'bg-slate-950 border-slate-800 text-slate-400'
              }`}
            >
              Matrix Green
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setWireframeMode(!wireframeMode)}
              className={`px-3 py-1 rounded-lg border transition flex items-center gap-1.5 ${
                wireframeMode
                  ? 'bg-yellow-950/40 border-yellow-500 text-yellow-300 font-bold'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{wireframeMode ? 'Wireframe Enabled' : 'Toggle 3D Wireframe'}</span>
            </button>
          </div>
        </div>

        {/* 3D Interactive Perspective Canvas */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative min-h-[380px] sm:min-h-[440px] bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 flex items-center justify-center overflow-hidden cursor-crosshair perspective-[1000px]"
        >
          {/* Ambient Lighting based on theme */}
          <div
            className={`absolute inset-0 pointer-events-none transition-all duration-700 blur-[100px] opacity-25 ${
              activeTheme === 'cyber-blue'
                ? 'bg-blue-600'
                : activeTheme === 'neon-purple'
                ? 'bg-purple-600'
                : 'bg-emerald-600'
            }`}
          />

          {/* Interactive Card with CSS 3D Tilt */}
          <div
            style={{
              transform: `rotateX(${tiltAngle.y}deg) rotateY(${tiltAngle.x}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            className={`w-full max-w-lg p-6 sm:p-8 rounded-2xl transition-colors shadow-2xl relative z-10 ${
              wireframeMode
                ? 'bg-transparent border-2 border-dashed border-yellow-500/80 font-mono text-yellow-400'
                : activeTheme === 'cyber-blue'
                ? 'glass-cyber-panel neon-border-glow text-white'
                : activeTheme === 'neon-purple'
                ? 'glass-cyber-panel neon-purple-glow text-white'
                : 'glass-cyber-panel neon-emerald-glow text-white'
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] font-mono tracking-widest uppercase opacity-70">
                // 3D SPATIAL VECTOR NODE
              </span>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 animate-spin" />
            </div>

            <h3 className="text-2xl font-black mb-3 tracking-tight">
              Responsive 60fps Micro-Transform
            </h3>

            <p className="text-xs opacity-80 mb-6 leading-relaxed">
              Hover over or touch this interactive container. Our agency models dynamic perspective shifts,
              mathematical padding scales, and sub-pixel antialiasing for maximum conversion impact.
            </p>

            <div className="grid grid-cols-2 gap-3 font-mono text-[11px] mb-4">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-[9px] opacity-60 block">PERSPECTIVE TILT</span>
                <span className="font-bold">
                  X: {tiltAngle.x.toFixed(1)}° | Y: {tiltAngle.y.toFixed(1)}°
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-[9px] opacity-60 block">RENDER ENGINE</span>
                <span className="font-bold">Hardware GPU V8</span>
              </div>
            </div>

            <div className="text-[10px] opacity-60 font-mono text-center">
              Move cursor across the canvas to test spatial perspective.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
