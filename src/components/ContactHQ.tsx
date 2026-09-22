import { useState } from 'react';
import { MapPin, Phone, MessageSquare, Crosshair, Send, Radio, Shield, Globe, Navigation, ExternalLink } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

export function ContactHQ() {
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [projectScope, setProjectScope] = useState('Professional Growth Tier');
  const [preferredHub, setPreferredHub] = useState<'ranchi' | 'lucknow'>('ranchi');
  const [notes, setNotes] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const handleSendQuery = (e: React.FormEvent) => {
    e.preventDefault();
    const queryText = `*New Architecture Inquiry for ${preferredHub === 'lucknow' ? 'Lucknow Regional Hub' : 'Ranchi Command HQ'}*
Name: ${senderName}
Phone/Contact: ${senderPhone}
Target Hub: ${preferredHub === 'lucknow' ? 'Lucknow (Gomti Nagar)' : 'Ranchi (Ratu Road)'}
Selected Scope: ${projectScope}
Requirement Notes: ${notes || 'Standard dynamic system deployment'}
Source: Command HQ Terminal`;

    window.open(AGENCY_CONFIG.whatsappMessage(queryText), '_blank');
    setSentNotice(true);
  };

  return (
    <section id="contact-hq-section" className="py-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: HQ Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase block mb-1">
                // MODULE 20: CENTRALIZED ARCHITECTURE STATIONS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-mono">
                Ranchi HQ & Lucknow Hub
              </h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed font-sans">
                Operating dual core nodes across <strong className="text-white">Ranchi (Jharkhand)</strong> and{' '}
                <strong className="text-white">Lucknow (Uttar Pradesh)</strong>, ready to build and deploy high-velocity
                3D websites, Google AI Search rankers, and full-stack cloud clusters.
              </p>
            </div>

            {/* Address Block 1: Ranchi Command Station */}
            <div className="flex items-start gap-4 bg-slate-900/90 p-5 rounded-2xl border border-slate-800 transition hover:border-blue-500/40 glass-cyber-panel">
              <div className="p-3 bg-blue-600/20 text-blue-400 rounded-xl shrink-0 mt-0.5 border border-blue-500/30">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-blue-400 font-mono uppercase tracking-wider font-bold">
                    PRIMARY ARCHITECTURE HQ (RANCHI)
                  </span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=23.3681,85.3087"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="font-bold text-xs sm:text-sm text-slate-200 mt-1 leading-snug">
                  {AGENCY_CONFIG.address}
                </p>
                <div className="text-[10px] font-mono text-slate-400 mt-1.5 flex items-center gap-1">
                  <Navigation className="w-3 h-3 text-emerald-400" />
                  <span>Landmark: Near Pahari Mandir, Kumhartoli, Ratu Road (23.3681° N, 85.3087° E)</span>
                </div>
              </div>
            </div>

            {/* Address Block 2: Lucknow Regional Hub */}
            <div className="flex items-start gap-4 bg-slate-900/90 p-5 rounded-2xl border border-purple-500/30 transition hover:border-purple-500/60 glass-cyber-panel">
              <div className="p-3 bg-purple-600/20 text-purple-400 rounded-xl shrink-0 mt-0.5 border border-purple-500/30">
                <Globe className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-purple-400 font-mono uppercase tracking-wider font-bold">
                    UTTAR PRADESH REGIONAL HUB (LUCKNOW)
                  </span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=26.8467,80.9462"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="font-bold text-xs sm:text-sm text-slate-200 mt-1 leading-snug">
                  {AGENCY_CONFIG.lucknowAddress}
                </p>
                <div className="text-[10px] font-mono text-slate-400 mt-1.5 flex items-center gap-1">
                  <Navigation className="w-3 h-3 text-purple-400" />
                  <span>Landmark: Vibhuti Khand & Hazratganj Core Corridor (26.8467° N, 80.9462° E)</span>
                </div>
              </div>
            </div>

            {/* Live Gateway & Direct Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                id="contact-whatsapp-link"
                href={AGENCY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-slate-900/90 p-4 rounded-xl border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold hover:bg-emerald-950/30 transition"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <div>
                  <div className="text-[9px] text-slate-400">WHATSAPP GATEWAY</div>
                  <span>{AGENCY_CONFIG.displayPhone}</span>
                </div>
              </a>

              <a
                id="contact-phone-call-link"
                href={`tel:${AGENCY_CONFIG.phone}`}
                className="flex items-center gap-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800 text-slate-300 text-xs font-mono font-bold hover:border-slate-700 hover:text-white transition"
              >
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <div>
                  <div className="text-[9px] text-slate-400">DIRECT VOICE DESK</div>
                  <span>{AGENCY_CONFIG.displayPhone}</span>
                </div>
              </a>
            </div>

            {/* Quick Dispatch Form */}
            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800/80 font-mono text-xs glass-cyber-panel">
              <div className="text-white font-bold mb-3 uppercase flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-blue-400" />
                <span>Instant Inquiry Dispatcher</span>
              </div>

              {sentNotice && (
                <div className="mb-3 p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs">
                  Inquiry forwarded to Master Architect uplink!
                </div>
              )}

              <form onSubmit={handleSendQuery} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPreferredHub('ranchi')}
                    className={`p-2 rounded-lg border text-center transition ${
                      preferredHub === 'ranchi'
                        ? 'bg-blue-600/30 border-blue-500 text-blue-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    Ranchi HQ
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreferredHub('lucknow')}
                    className={`p-2 rounded-lg border text-center transition ${
                      preferredHub === 'lucknow'
                        ? 'bg-purple-600/30 border-purple-500 text-purple-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    Lucknow Hub
                  </button>
                </div>

                <select
                  value={projectScope}
                  onChange={(e) => setProjectScope(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                >
                  <option>Starter Core Pack (₹10k - ₹15k)</option>
                  <option>Professional Growth Tier (₹20k - ₹25k)</option>
                  <option>Cinematic 3D WebGL Web Portal (₹20k - ₹40k)</option>
                  <option>1000+ Keyword SEO & AI Search Matrix (₹15k)</option>
                  <option>Advanced API Engine (₹50k Standard)</option>
                  <option>Enterprise Master Multi-Layer (₹1L - ₹2L)</option>
                </select>

                <textarea
                  rows={2}
                  placeholder="Describe your website design or business requirements..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                />

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold uppercase tracking-wider transition text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Dispatch To Command Line</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Radar Visual & Physical Node */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-3xl relative overflow-hidden font-mono glass-cyber-panel">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Crosshair className="w-3.5 h-3.5 text-blue-400" />
                  <span>DUAL RADAR LOCK // RANCHI & LUCKNOW</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-bold">SIGNAL OPERATIONAL</span>
              </div>

              {/* Radar circular animation */}
              <div className="relative w-full aspect-video bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                {/* Radar sweep lines */}
                <div className="absolute w-44 h-44 rounded-full border border-blue-500/20 animate-ping" />
                <div className="absolute w-28 h-28 rounded-full border border-purple-500/30" />
                <div className="absolute w-16 h-16 rounded-full border border-emerald-500/40" />

                {/* Ranchi Node Pin */}
                <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-white shadow-[0_0_12px_#3b82f6] animate-pulse" />
                  <span className="text-[9px] text-blue-300 font-bold bg-slate-950/90 px-1.5 py-0.5 rounded border border-blue-500/40 mt-1">
                    Ranchi HQ (23.3681° N)
                  </span>
                </div>

                {/* Lucknow Node Pin */}
                <div className="absolute top-1/3 right-1/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-purple-500 border-2 border-white shadow-[0_0_12px_#a855f7] animate-pulse" />
                  <span className="text-[9px] text-purple-300 font-bold bg-slate-950/90 px-1.5 py-0.5 rounded border border-purple-500/40 mt-1">
                    Lucknow Hub (26.8467° N)
                  </span>
                </div>
              </div>

              {/* Node Specifications */}
              <div className="grid grid-cols-2 gap-2 text-[11px] pt-3 text-slate-400">
                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[9px]">RANCHI HQ STATUS</span>
                  <span className="text-blue-400 font-bold">100% OPERATIONAL (4ms)</span>
                </div>
                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[9px]">LUCKNOW HUB STATUS</span>
                  <span className="text-purple-400 font-bold">100% OPERATIONAL (6ms)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
