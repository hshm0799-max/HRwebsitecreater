import { Zap, MessageSquare, ArrowRight, ShieldCheck, Cpu, Terminal, Compass, Globe, Sparkles, Code2 } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';
import { ActiveModuleId } from '../types';
import { Live3DAnimation } from './Live3DAnimation';

interface HeroSectionProps {
  onNavigate: (mod: ActiveModuleId) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <header
      id="hero-cinematic-header"
      className="relative min-h-[85vh] flex flex-col justify-center items-center overflow-hidden py-12 sm:py-16 px-4 sm:px-6 text-center"
    >
      <div className="max-w-6xl z-10 relative w-full">
        {/* Top Flagship Banner */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-900/95 border border-blue-500/50 text-xs font-mono text-blue-300 tracking-wider mb-6 uppercase shadow-xl backdrop-blur">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span className="font-black text-white">🇮🇳 INDIA'S #1 TOP WEB DEVELOPER AGENCY</span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-purple-400 hidden sm:inline">RANCHI HQ & LUCKNOW REGIONAL HUB</span>
          <span className="text-slate-600 hidden md:inline">|</span>
          <span className="text-yellow-400 hidden md:inline">1000+ GOOGLE AI SEO TRAFFIC</span>
        </div>

        {/* Main Headings */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-4 uppercase tracking-tight text-white leading-tight font-mono">
          World's Most Advanced <br />
          <span className="text-neon-shimmer text-neon-border-glow px-4 py-1 rounded-2xl bg-slate-900/80 inline-block mt-2">
            3D Web & Cloud Stack
          </span>
        </h1>

        {/* Subtitle / Mission Statement */}
        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8 font-sans leading-relaxed">
          Deploying <span className="text-blue-400 font-bold font-mono">5-Layer</span> to{' '}
          <span className="text-purple-400 font-bold font-mono">20-Layer</span> deep network web structures with
          zero-loading layout metrics, Google AI Search (SGE) traffic domination, and 60fps cinematic 3D motion.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
          <button
            id="hero-explore-services-btn"
            onClick={() => onNavigate('services')}
            className="group relative px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white font-black text-xs uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] flex items-center gap-2.5 font-mono border border-blue-400/50 overflow-hidden cursor-pointer"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="font-extrabold tracking-wider">Explore Developer Services</span>
            <ArrowRight className="w-4 h-4 text-blue-200 group-hover:translate-x-1.5 transition duration-300" />
          </button>

          <button
            id="hero-explore-pricing-btn"
            onClick={() => onNavigate('pricing')}
            className="px-6 py-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-blue-500 text-white font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition shadow-lg flex items-center gap-2 font-mono"
          >
            <span>Live Plans (₹10k - ₹2L)</span>
          </button>

          <a
            id="hero-whatsapp-uplink-btn"
            href={AGENCY_CONFIG.whatsappMessage(
              'Hello HRwesitecreateragency Ranchi & Lucknow Team! I want to hire India #1 Web Developer Agency to deploy a custom 3D web platform. Please share details.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-xl bg-slate-900/90 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-950/40 font-bold text-xs uppercase tracking-widest transition flex items-center gap-2 font-mono"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Uplink</span>
          </a>

          <button
            id="hero-map-btn"
            onClick={() => onNavigate('map')}
            className="px-5 py-4 rounded-xl bg-slate-900/80 border border-blue-500/30 text-blue-300 hover:text-white hover:border-blue-400 font-bold text-xs uppercase tracking-widest transition flex items-center gap-1.5 font-mono"
          >
            <Globe className="w-4 h-4 text-blue-400" />
            <span>Google Map 🗺️</span>
          </button>
        </div>

        {/* Live 3D Animation Showcase in Hero */}
        <div className="max-w-4xl mx-auto mb-10">
          <Live3DAnimation interactive={true} />
        </div>

        {/* Feature Pills: Ranchi + Lucknow + V8 + SEO */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto text-left font-mono text-[11px]">
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5 glass-cyber-panel">
            <Compass className="w-4 h-4 text-blue-400 shrink-0" />
            <div>
              <div className="text-white font-semibold">Ranchi HQ Station</div>
              <div className="text-slate-400 text-[10px]">Ratu Road, Pahari Mandir</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5 glass-cyber-panel">
            <Globe className="w-4 h-4 text-purple-400 shrink-0" />
            <div>
              <div className="text-white font-semibold">Lucknow Regional Hub</div>
              <div className="text-slate-400 text-[10px]">Gomti Nagar & Hazratganj</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5 glass-cyber-panel">
            <Cpu className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <div className="text-white font-semibold">60 FPS 3D Motion</div>
              <div className="text-slate-400 text-[10px]">Hardware WebGL & Canvas</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5 glass-cyber-panel">
            <Zap className="w-4 h-4 text-yellow-400 shrink-0" />
            <div>
              <div className="text-white font-semibold">1,000+ Keyword SEO</div>
              <div className="text-slate-400 text-[10px]">Google AI Search Rank #1</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
