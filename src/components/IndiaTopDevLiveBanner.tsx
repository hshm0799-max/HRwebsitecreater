import { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Radio,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
  Clock,
  Award,
  Globe,
  CheckCircle2,
  Cpu,
  MapPin,
} from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface IndiaTopDevLiveBannerProps {
  onContactClick?: () => void;
}

export function IndiaTopDevLiveBanner({ onContactClick }: IndiaTopDevLiveBannerProps) {
  const [activeAlertIdx, setActiveAlertIdx] = useState(0);

  const liveAlerts = [
    '● LIVE: Ranchi HQ active on Enterprise Cloud & 20-Layer Mesh Nodes',
    '● LIVE: Lucknow Regional Hub indexing 1,000+ Google AI SEO keywords',
    '● DIRECT HOTLINE: Master Systems Architects On Standby (+91 7061899614)',
    '● PERFORMANCE SLA: 99+ Core Web Vitals with Sub-10ms Server Response',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAlertIdx((prev) => (prev + 1) % liveAlerts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [liveAlerts.length]);

  return (
    <section id="india-top-dev-live-banner" className="relative z-20 px-4 sm:px-6 pt-4 pb-2 font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-slate-950 via-blue-950/80 to-purple-950/80 border-2 border-blue-500/60 shadow-[0_0_50px_rgba(59,130,246,0.3)] glass-cyber-panel overflow-hidden">
          {/* Animated Background Laser Glow Beam */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Live Ticker Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-800/80 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-red-950/80 border border-red-500/50 text-red-300 font-bold tracking-wider text-[11px] uppercase flex items-center gap-1.5">
                <Radio className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} />
                <span>LIVE BROADCAST NOW</span>
              </span>
              <span className="text-slate-400 hidden md:inline text-[11px] transition-all duration-500 text-cyan-300">
                {liveAlerts[activeAlertIdx]}
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-slate-400">
              <span className="hidden sm:flex items-center gap-1 text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>GOVT. REGISTERED & MSME VERIFIED</span>
              </span>
              <span className="hidden lg:flex items-center gap-1 text-yellow-400 font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>4.98/5.0★ (120+ CLIENT REVIEWS)</span>
              </span>
            </div>
          </div>

          {/* Main Showcase Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Official India #1 Credentials */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-900/60 to-purple-900/60 border border-blue-400/50 text-blue-300 text-xs font-bold tracking-wider shadow">
                <span className="text-base">🇮🇳</span>
                <span className="text-white font-extrabold uppercase">
                  OFFICIALLY RECOGNIZED // INDIA'S #1 TOP WEBSITE DEVELOPER AGENCY
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                India's #1 Web Development Firm & 3D Engineering Command
              </h2>

              <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
                Headquartered at <strong className="text-white">Ranchi Ratu Road</strong> with our{' '}
                <strong className="text-white">Lucknow Regional Hub</strong>. We engineer high-velocity commercial
                platforms, 60fps 3D WebGL interfaces, and inject 1,000+ Google AI search traffic funnels with guaranteed
                first-page dominance.
              </p>

              {/* Verified Key Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs">
                  <div className="text-slate-500 text-[10px] uppercase font-bold">Ranchi Flagship HQ</div>
                  <div className="text-blue-400 font-bold flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-red-400 shrink-0" />
                    <span>Ratu Road, Ranchi</span>
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs">
                  <div className="text-slate-500 text-[10px] uppercase font-bold">Lucknow Regional Hub</div>
                  <div className="text-purple-400 font-bold flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-purple-400 shrink-0" />
                    <span>Gomti Nagar, LKO</span>
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs col-span-2 sm:col-span-1">
                  <div className="text-slate-500 text-[10px] uppercase font-bold">Client Success SLA</div>
                  <div className="text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>100% On-Time Delivery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Live Contact Desk & Interactive Call Uplink */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-6 rounded-3xl bg-slate-900/95 border-2 border-emerald-500/50 shadow-[0_0_35px_rgba(16,185,129,0.25)] relative overflow-hidden space-y-5">
                {/* Live Status Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      DIRECT ENGINEER HOTLINE // LIVE
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-bold">
                    SLA &lt; 30 SEC
                  </span>
                </div>

                {/* Primary Large Phone Call Uplink Button */}
                <a
                  id="live-banner-call-btn"
                  href={`tel:${AGENCY_CONFIG.phone}`}
                  className="group relative p-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 hover:from-emerald-500 hover:to-teal-500 text-white transition-all duration-300 flex items-center justify-between shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] overflow-hidden cursor-pointer"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  <div className="flex items-center gap-3.5 relative z-10">
                    <div className="p-3 rounded-xl bg-slate-950/70 text-emerald-400 group-hover:scale-110 transition shadow-inner">
                      <Phone className="w-6 h-6 animate-pulse text-emerald-300" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase text-emerald-200 tracking-wider font-semibold">
                        Tap To Call Chief Developer
                      </div>
                      <div className="text-xl sm:text-2xl font-black tracking-tight text-white font-mono">
                        {AGENCY_CONFIG.displayPhone}
                      </div>
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/10 group-hover:bg-white/20 transition relative z-10">
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition" />
                  </div>
                </a>

                {/* Secondary WhatsApp & Consultation Uplink */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    id="live-banner-whatsapp-btn"
                    href={AGENCY_CONFIG.whatsappMessage(
                      "Hello India #1 Web Developer Agency! I am contacting you directly from your live banner hotline to discuss my web project."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-2xl bg-slate-950 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 hover:text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp VIP Chat</span>
                  </a>

                  {onContactClick ? (
                    <button
                      onClick={onContactClick}
                      className="py-3 px-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-400 text-slate-300 hover:text-white font-bold text-xs transition flex items-center justify-center gap-2"
                    >
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span>Ranchi HQ Desk</span>
                    </button>
                  ) : (
                    <a
                      href={`mailto:${AGENCY_CONFIG.email}`}
                      className="py-3 px-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-400 text-slate-300 hover:text-white font-bold text-xs transition flex items-center justify-center gap-2"
                    >
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span>Email RFP Spec</span>
                    </a>
                  )}
                </div>

                {/* Real-time verified stats row */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>Calling Hours: 24/7 Priority SLA</span>
                  </span>
                  <span className="text-emerald-400 font-bold">100% Free Technical Audit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
