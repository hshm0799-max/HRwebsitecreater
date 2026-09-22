import { useState } from 'react';
import {
  Code,
  Layers,
  Database,
  Search,
  ShoppingCart,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  ExternalLink,
  Laptop,
  Palette,
  Eye,
  Sliders,
  Monitor,
  Smartphone,
  Cpu,
  Globe,
  Clock,
  X,
  Radio,
  FileCode,
  Check,
} from 'lucide-react';
import { SERVICES_DATA, DEVELOPER_SHOWCASE_IMAGES, AGENCY_CONFIG } from '../data/agencyData';
import { ServiceItem, ActiveModuleId } from '../types';

interface ServicesSectionProps {
  onNavigate?: (mod: ActiveModuleId) => void;
}

export function ServicesSection({ onNavigate }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedBlueprint, setSelectedBlueprint] = useState<ServiceItem | null>(null);

  // Live Graphic Design Studio State
  const [studioColor, setStudioColor] = useState<'cyan' | 'violet' | 'emerald' | 'amber'>('cyan');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'spatial' | 'mobile'>('desktop');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Graphic Design color map
  const colorStyles = {
    cyan: {
      accent: 'from-blue-500 to-cyan-400',
      border: 'border-cyan-500/40',
      text: 'text-cyan-400',
      glow: 'shadow-[0_0_30px_rgba(6,182,212,0.25)]',
      bgGlow: 'bg-cyan-500/10',
    },
    violet: {
      accent: 'from-purple-500 to-pink-500',
      border: 'border-purple-500/40',
      text: 'text-purple-400',
      glow: 'shadow-[0_0_30px_rgba(168,85,247,0.25)]',
      bgGlow: 'bg-purple-500/10',
    },
    emerald: {
      accent: 'from-emerald-500 to-teal-400',
      border: 'border-emerald-500/40',
      text: 'text-emerald-400',
      glow: 'shadow-[0_0_30px_rgba(16,185,129,0.25)]',
      bgGlow: 'bg-emerald-500/10',
    },
    amber: {
      accent: 'from-amber-500 to-orange-400',
      border: 'border-amber-500/40',
      text: 'text-amber-400',
      glow: 'shadow-[0_0_30px_rgba(245,158,11,0.25)]',
      bgGlow: 'bg-amber-500/10',
    },
  };

  // Bespoke Graphic Design Icon and Graphic Badge for each service
  const getGraphicDesignIcon = (id: string) => {
    switch (id) {
      case 'cinematic-3d':
        return {
          icon: <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />,
          bgGradient: 'from-pink-500/20 via-purple-500/10 to-transparent',
          borderGlow: 'border-pink-500/40 group-hover:border-pink-400',
          ringColor: 'border-pink-500/30',
          badge: '60 FPS WEBGL',
          badgeColor: 'bg-pink-950/80 text-pink-300 border-pink-700/60',
          metric: 'Hardware Accelerated',
        };
      case 'fullstack-mern':
        return {
          icon: <Code className="w-6 h-6 text-blue-400" />,
          bgGradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
          borderGlow: 'border-blue-500/40 group-hover:border-blue-400',
          ringColor: 'border-blue-500/30',
          badge: 'V8 RUNTIME',
          badgeColor: 'bg-blue-950/80 text-blue-300 border-blue-700/60',
          metric: 'Zero Cold Start',
        };
      case 'custom-api':
        return {
          icon: <Database className="w-6 h-6 text-purple-400" />,
          bgGradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
          borderGlow: 'border-purple-500/40 group-hover:border-purple-400',
          ringColor: 'border-purple-500/30',
          badge: 'HMAC-SHA256',
          badgeColor: 'bg-purple-950/80 text-purple-300 border-purple-700/60',
          metric: 'Sub-10ms Latency',
        };
      case 'seo-matrix':
        return {
          icon: <Search className="w-6 h-6 text-amber-400" />,
          bgGradient: 'from-amber-500/20 via-yellow-500/10 to-transparent',
          borderGlow: 'border-amber-500/40 group-hover:border-amber-400',
          ringColor: 'border-amber-500/30',
          badge: 'PAGE #1 SGE',
          badgeColor: 'bg-amber-950/80 text-amber-300 border-amber-700/60',
          metric: '1,000+ Keywords',
        };
      case 'ecommerce-hub':
        return {
          icon: <ShoppingCart className="w-6 h-6 text-emerald-400" />,
          bgGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
          borderGlow: 'border-emerald-500/40 group-hover:border-emerald-400',
          ringColor: 'border-emerald-500/30',
          badge: '50K+ SKU MESH',
          badgeColor: 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60',
          metric: 'Zero Drop Checkout',
        };
      default:
        return {
          icon: <ShieldCheck className="w-6 h-6 text-red-400" />,
          bgGradient: 'from-red-500/20 via-orange-500/10 to-transparent',
          borderGlow: 'border-red-500/40 group-hover:border-red-400',
          ringColor: 'border-red-500/30',
          badge: '15-MIN SLA',
          badgeColor: 'bg-red-950/80 text-red-300 border-red-700/60',
          metric: '24/7 Hotline Live',
        };
    }
  };

  const categories = [
    { id: 'all', label: 'All Capabilities', count: SERVICES_DATA.length },
    { id: 'spatial', label: '3D Spatial & WebGL', count: 1 },
    { id: 'fullstack', label: 'Full-Stack Cloud', count: 1 },
    { id: 'backend', label: 'APIs & Security', count: 1 },
    { id: 'growth', label: 'Google AI SEO', count: 1 },
    { id: 'commercial', label: 'E-Commerce', count: 1 },
    { id: 'support', label: '24/7 SLA Command', count: 1 },
  ];

  const filteredServices = SERVICES_DATA.filter((srv) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'spatial') return srv.id === 'cinematic-3d';
    if (activeCategory === 'fullstack') return srv.id === 'fullstack-mern';
    if (activeCategory === 'backend') return srv.id === 'custom-api';
    if (activeCategory === 'growth') return srv.id === 'seo-matrix';
    if (activeCategory === 'commercial') return srv.id === 'ecommerce-hub';
    if (activeCategory === 'support') return srv.id === 'incident-sla';
    return true;
  });

  return (
    <section id="services-section" className="py-16 px-4 sm:px-6 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Flagship Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/80 via-purple-950/60 to-slate-950 border border-blue-500/40 glass-cyber-panel relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-bold">🇮🇳 INDIA'S #1 TOP WEB DEVELOPER AGENCY // RANCHI HQ & LUCKNOW HUB</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase font-mono tracking-tight leading-tight">
                Architectural Web Engineering & Live 3D Studio
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Deploying enterprise full-stack systems, fluid 3D WebGL interfaces, and 1,000+ Google AI search traffic
                funnels engineered by Ranchi & Lucknow's master development units.
              </p>
            </div>

            {/* Quick Live Launch Action Area */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs w-full lg:w-auto">
              <a
                href={AGENCY_CONFIG.whatsappMessage(
                  'Hello HRwesitecreateragency! I want to hire India #1 Web Developer Agency to deploy a custom web architecture.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-extrabold transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(59,130,246,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] w-full sm:w-auto overflow-hidden cursor-pointer"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" style={{ animationDuration: '8s' }} />
                <span>Deploy Developer Service</span>
                <ArrowRight className="w-4 h-4 text-blue-200 group-hover:translate-x-1 transition" />
              </a>

              {onNavigate && (
                <button
                  onClick={() => onNavigate('calculator')}
                  className="px-5 py-4 rounded-2xl bg-slate-900/90 border border-slate-700 hover:border-blue-400 text-slate-200 hover:text-white transition font-bold w-full sm:w-auto text-center"
                >
                  Calculate Budget
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Live Graphic Design Studio Preview Bar */}
        <div className="mb-14 p-6 rounded-3xl bg-slate-950/90 border border-slate-800 glass-cyber-panel relative overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-purple-400">
                <Palette className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LIVE GRAPHIC DESIGN & 3D STUDIO ENGINE</span>
                </div>
                <h3 className="text-lg font-bold text-white font-mono">
                  Interactive Vector Styling & Layout Visualizer
                </h3>
              </div>
            </div>

            {/* Interactive Color Palette Selector */}
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-slate-400 text-[11px] mr-1 hidden sm:inline">Theme Color:</span>
              <button
                onClick={() => setStudioColor('cyan')}
                className={`px-3 py-1.5 rounded-xl border text-[11px] font-bold transition flex items-center gap-1.5 ${
                  studioColor === 'cyan'
                    ? 'bg-cyan-950 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Cyber Cyan</span>
              </button>
              <button
                onClick={() => setStudioColor('violet')}
                className={`px-3 py-1.5 rounded-xl border text-[11px] font-bold transition flex items-center gap-1.5 ${
                  studioColor === 'violet'
                    ? 'bg-purple-950 border-purple-400 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>Electric Violet</span>
              </button>
              <button
                onClick={() => setStudioColor('emerald')}
                className={`px-3 py-1.5 rounded-xl border text-[11px] font-bold transition flex items-center gap-1.5 ${
                  studioColor === 'emerald'
                    ? 'bg-emerald-950 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Matrix Emerald</span>
              </button>
              <button
                onClick={() => setStudioColor('amber')}
                className={`px-3 py-1.5 rounded-xl border text-[11px] font-bold transition flex items-center gap-1.5 ${
                  studioColor === 'amber'
                    ? 'bg-amber-950 border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Solar Amber</span>
              </button>
            </div>
          </div>

          {/* Dynamic Studio Telemetry Strip */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800/80 flex items-center gap-2.5">
              <Cpu className={`w-4 h-4 ${colorStyles[studioColor].text}`} />
              <div>
                <div className="text-[10px] text-slate-500 uppercase">Vector Render</div>
                <div className="text-white font-bold">60 FPS Hardware WebGL</div>
              </div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800/80 flex items-center gap-2.5">
              <Sparkles className={`w-4 h-4 ${colorStyles[studioColor].text}`} />
              <div>
                <div className="text-[10px] text-slate-500 uppercase">Graphic Layout</div>
                <div className="text-white font-bold">Glassmorphic Vectors</div>
              </div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800/80 flex items-center gap-2.5">
              <Radio className={`w-4 h-4 ${colorStyles[studioColor].text} animate-pulse`} />
              <div>
                <div className="text-[10px] text-slate-500 uppercase">Live Pipeline</div>
                <div className="text-emerald-400 font-bold">Instant VIP WhatsApp</div>
              </div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800/80 flex items-center gap-2.5">
              <Globe className={`w-4 h-4 ${colorStyles[studioColor].text}`} />
              <div>
                <div className="text-[10px] text-slate-500 uppercase">Google AI Search</div>
                <div className="text-yellow-400 font-bold">Rank #1 SGE Protocol</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Title & Subheading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/40 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>FULL SYSTEM CAPABILITIES // ARCHITECTURAL TIERS</span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-mono tracking-tight">
            Specialized Web Development Services
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-sans leading-relaxed">
            Every service is hand-crafted with custom TypeScript, hardware-accelerated 3D shaders, zero WordPress bloat,
            and guaranteed Google first-page organic performance.
          </p>
        </div>

        {/* Category Navigation Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl border transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-400 text-white font-bold shadow-lg scale-105'
                  : 'bg-slate-900/90 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-950 text-slate-500'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredServices.map((srv) => {
            const graphic = getGraphicDesignIcon(srv.id);

            return (
              <div
                key={srv.id}
                id={`service-card-${srv.id}`}
                className="p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/60 transition-all duration-300 glass-cyber-panel flex flex-col justify-between group relative overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
              >
                {/* Decorative Subtle Corner Aura */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/15 transition duration-500" />

                <div className="space-y-5 relative z-10">
                  {/* Card Header: Bespoke Graphic Design Icon & Disciplinary Badge */}
                  <div className="flex items-center justify-between">
                    {/* Layered Graphic Design Icon Shield */}
                    <div className="relative">
                      {/* Rotating Dashed Outer Cyber Ring */}
                      <div
                        className={`absolute -inset-1.5 rounded-3xl border border-dashed ${graphic.ringColor} animate-spin opacity-50 group-hover:opacity-100 transition duration-500`}
                        style={{ animationDuration: '24s' }}
                      />
                      {/* Ambient Inner Glow Backdrop */}
                      <div
                        className={`relative p-3.5 rounded-2xl bg-gradient-to-br ${graphic.bgGradient} bg-slate-950 border ${graphic.borderGlow} shadow-lg transition-transform duration-300 group-hover:scale-110 flex items-center justify-center`}
                      >
                        {graphic.icon}
                      </div>
                    </div>

                    {/* Graphic Feature Badge */}
                    <div className="flex flex-col items-end gap-1.5">
                      {srv.badge && (
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-black bg-blue-950/90 text-blue-300 border border-blue-600/50 shadow">
                          {srv.badge}
                        </span>
                      )}
                      <span
                        className={`px-2.5 py-0.5 rounded-md text-[9px] font-mono font-bold border ${graphic.badgeColor}`}
                      >
                        {graphic.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title and Category */}
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                      <span>{srv.category}</span>
                      <span>•</span>
                      <span className="text-emerald-400">{graphic.metric}</span>
                    </div>
                    <h4 className="text-xl font-black text-white group-hover:text-blue-400 transition font-mono mt-1 tracking-tight leading-snug">
                      {srv.title}
                    </h4>
                    <p className="text-slate-400 text-xs mt-2.5 font-sans leading-relaxed">{srv.description}</p>
                  </div>

                  {/* Architecture Features Checklist */}
                  <div className="space-y-2 pt-3 border-t border-slate-800/80">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold mb-1">
                      Key Deliverables:
                    </div>
                    {srv.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold mb-1.5">
                      Production Stack:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {srv.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800/90 text-[10px] font-mono text-slate-400 group-hover:border-slate-700 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price & Two Ultra-Stylish Buttons */}
                <div className="pt-6 mt-6 border-t border-slate-800 relative z-10 space-y-4">
                  <div className="flex items-center justify-between font-mono">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider">Starting Investment</div>
                      <div className="text-lg font-black text-emerald-400 tracking-tight">{srv.startingPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider">Turnaround</div>
                      <div className="text-xs font-bold text-blue-400 flex items-center justify-end gap-1">
                        <Clock className="w-3 h-3 text-blue-400" />
                        <span>{srv.deliverySpeed}</span>
                      </div>
                    </div>
                  </div>

                  {/* Button Cluster */}
                  <div className="space-y-2">
                    {/* Primary Stylish Button: Deploy Service with Live Shimmer & Ping */}
                    <a
                      href={AGENCY_CONFIG.whatsappMessage(
                        `Hello HRwesitecreateragency Ranchi & Lucknow HQ! I want to deploy the [${srv.title}] service (${srv.startingPrice}). Please initiate system setup.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(168,85,247,0.55)] overflow-hidden cursor-pointer"
                    >
                      {/* Animated Shimmer Light Beam */}
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />

                      {/* Live Pulse Beacon */}
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>

                      <span>Deploy Service Now</span>
                      <ArrowRight className="w-4 h-4 text-blue-200 group-hover/btn:translate-x-1 transition duration-300" />
                    </a>

                    {/* Secondary Stylish Button: Inspect Blueprint Modal */}
                    <button
                      onClick={() => setSelectedBlueprint(srv)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white font-mono text-xs font-semibold transition flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-blue-400" />
                      <span>Inspect Live Blueprint</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Web Developer In-Action Showcase Gallery */}
        <div className="mt-12 pt-12 border-t border-slate-800/80">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs mb-3 shadow">
              <Laptop className="w-3.5 h-3.5 text-blue-400" />
              <span>DEVELOPER LAB GALLERY // ACTUAL WORKSPACE & CODING RIGS</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white uppercase font-mono tracking-tight">
              Inside Our Engineering Lab & Workstations
            </h3>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto mt-2 font-sans">
              A view inside the actual developer workstations and high-frequency deployment screens across Ranchi HQ
              and Lucknow Regional Hub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEVELOPER_SHOWCASE_IMAGES.map((imgItem) => (
              <div
                key={imgItem.id}
                className="group rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl hover:border-slate-600 transition-all duration-300 flex flex-col glass-cyber-panel"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-950">
                  <img
                    src={imgItem.imageUrl}
                    alt={imgItem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur border border-slate-800 text-[10px] font-mono text-blue-400 font-bold">
                    {imgItem.category}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3 font-mono text-xs">
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition">
                      {imgItem.title}
                    </h4>
                    <p className="text-slate-400 text-xs mt-1.5 font-sans leading-relaxed">{imgItem.description}</p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                    {imgItem.techTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800/80 text-[10px] text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal: Interactive Live Architecture Blueprint Inspector */}
        {selectedBlueprint && (
          <div
            id="blueprint-modal-overlay"
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div
              id="blueprint-modal-card"
              className="max-w-2xl w-full bg-slate-900 border border-blue-500/50 rounded-3xl p-6 sm:p-8 font-mono shadow-2xl relative overflow-hidden glass-cyber-panel max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-[10px] text-blue-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SYSTEM BLUEPRINT // {selectedBlueprint.category}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1 uppercase">
                    {selectedBlueprint.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedBlueprint(null)}
                  className="p-2 rounded-full bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-4 mb-6 text-xs">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300 font-sans leading-relaxed">
                  {selectedBlueprint.description}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-[10px] text-slate-500 uppercase">Starting Budget</div>
                    <div className="text-lg font-bold text-emerald-400 mt-0.5">{selectedBlueprint.startingPrice}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-[10px] text-slate-500 uppercase">SLA Deployment Window</div>
                    <div className="text-lg font-bold text-blue-400 mt-0.5">{selectedBlueprint.deliverySpeed}</div>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-bold mb-2">
                    Architectural Milestones:
                  </div>
                  <div className="space-y-2">
                    {selectedBlueprint.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-2.5 text-slate-300 text-xs"
                      >
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-bold mb-2">
                    Verified Tech Stack:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedBlueprint.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-800">
                <a
                  href={AGENCY_CONFIG.whatsappMessage(
                    `Hello HRwesitecreateragency! I reviewed the blueprint for [${selectedBlueprint.title}]. Let's deploy this architecture.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider transition text-center shadow-lg flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span>Deploy Via WhatsApp Now</span>
                </a>

                {onNavigate && (
                  <button
                    onClick={() => {
                      setSelectedBlueprint(null);
                      onNavigate('calculator');
                    }}
                    className="py-3.5 px-5 rounded-xl bg-slate-950 border border-slate-700 hover:border-blue-400 text-slate-200 text-xs font-bold transition text-center"
                  >
                    Customizer
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
