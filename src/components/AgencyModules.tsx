import { useState } from 'react';
import {
  Users,
  Shield,
  FileCode,
  Layers,
  ArrowRight,
  TrendingUp,
  Cpu,
  PhoneCall,
  Calendar,
  Briefcase,
  Lock,
  FileCheck,
  RotateCcw,
  CheckCircle,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { ActiveModuleId } from '../types';
import { AGENCY_CONFIG, TEAM_MEMBERS, PORTFOLIO_PROJECTS } from '../data/agencyData';

interface AgencyModulesProps {
  moduleId: ActiveModuleId;
  onNavigate: (id: ActiveModuleId) => void;
}

export function AgencyModules({ moduleId, onNavigate }: AgencyModulesProps) {
  // Consultation booking state
  const [consultName, setConsultName] = useState('');
  const [consultPhone, setConsultPhone] = useState('');
  const [consultDate, setConsultDate] = useState('');
  const [consultType, setConsultType] = useState('Full-Stack Architectural Architecture');
  const [consultConfirmed, setConsultConfirmed] = useState(false);

  const handleBookConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*Live Video Consultation Booking Request*
Client: ${consultName}
Phone: ${consultPhone}
Preferred Date/Time: ${consultDate}
Discussion Area: ${consultType}
Ranchi HQ Node: Confirmed`;

    window.open(AGENCY_CONFIG.whatsappMessage(msg), '_blank');
    setConsultConfirmed(true);
  };

  if (moduleId === 'about') {
    return (
      <div id="about-agency-module" className="py-16 px-4 sm:px-6 font-mono text-xs">
        <div className="max-w-3xl mx-auto bg-slate-900/90 p-8 sm:p-10 rounded-2xl border border-slate-800 shadow-2xl">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">// MODULE 02</div>
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-6 uppercase text-blue-400">
            // Core Origin Profile
          </h1>
          <p className="text-slate-300 mb-5 leading-relaxed text-sm">
            HRwesitecreateragency was founded with a single sovereign vision: to architect the world's most dynamic,
            cinematic, and high-frequency computing platforms. Managed from our flagship Ranchi Headquarters with our
            Lucknow Regional Hub, we build and maintain next-generation full-stack architectures for market leaders.
          </p>
          <p className="text-slate-400 leading-relaxed mb-6">
            We embed cryptographic security nodes, edge-caching layers, and 1,000+ Google AI Search matrix funnels to
            guarantee peak performance. Whether you need a 5-Layer static authority website or a 20-Layer deep network
            enterprise stack, we deliver production-ready systems on time, every time.
          </p>

          <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-800 my-6 text-[11px]">
            <div>
              <span className="text-slate-500 block">BASE HEADQUARTERS</span>
              <span className="text-white font-bold">Ratu Road, Near Pahari Mandir, Ranchi</span>
            </div>
            <div>
              <span className="text-slate-500 block">CORE PIPELINE FOCUS</span>
              <span className="text-white font-bold">3D Stack, Custom APIs, SEO Matrix</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => onNavigate('pricing')}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl uppercase transition tracking-wider"
            >
              Explore Tiers
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="px-5 py-2.5 bg-slate-950 border border-slate-800 text-slate-400 hover:text-white rounded-xl transition"
            >
              Back to Terminal
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (moduleId === 'team') {
    return (
      <div id="team-matrix-module" className="py-16 px-4 sm:px-6 font-mono text-xs">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">// MODULE 03</div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
              // System Engineers Matrix
            </h1>
            <p className="text-slate-400 text-xs mt-2">
              The high-velocity engineers stationed at Ranchi Core Node architecting scalable web nodes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="text-white font-bold text-sm">{member.role}</div>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-emerald-400 font-semibold">
                    {member.status}
                  </span>
                </div>
                <div className="text-blue-400 text-[11px] uppercase mb-3 font-semibold">
                  {member.specialty} // {member.nodeId}
                </div>
                <p className="text-slate-400 leading-relaxed text-xs mb-4">{member.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('home')}
              className="px-5 py-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded-xl transition"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (moduleId === 'api-dev') {
    return (
      <div id="api-dev-module" className="py-16 px-4 sm:px-6 font-mono text-xs">
        <div className="max-w-3xl mx-auto bg-slate-900/90 p-8 rounded-2xl border border-slate-800">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">// MODULE 05</div>
          <h1 className="text-xl font-bold text-white uppercase mb-4 text-purple-400">
            // Custom API & Microservices Pipeline
          </h1>
          <p className="text-slate-300 mb-6 leading-relaxed text-sm">
            We construct high-throughput RESTful and GraphQL endpoints reinforced with enterprise-grade JWT signatures,
            cryptographic tokens, and automated rate-limiting security shields.
          </p>

          <div className="space-y-3 mb-6">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-emerald-400 font-bold block mb-1">POST /api/v1/auth/tokenized-handshake</span>
              <p className="text-slate-400 text-[11px]">
                Cryptographic authentication module executing HMAC SHA-256 and asymmetric Ed25519 token signatures.
              </p>
            </div>
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-blue-400 font-bold block mb-1">GET /api/v1/cluster/telemetry-mesh</span>
              <p className="text-slate-400 text-[11px]">
                Real-time server telemetry stream with sub-10ms response time and automated query sharding.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => onNavigate('pricing')}
              className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold uppercase transition"
            >
              View API Engine Pricing (₹50,000)
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="px-5 py-2.5 bg-slate-950 border border-slate-800 text-slate-400 hover:text-white rounded-xl transition"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (moduleId === 'portfolio') {
    return (
      <div id="portfolio-module" className="py-16 px-4 sm:px-6 font-mono text-xs">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">// MODULE 09</div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
              // Deployed Architecture Directory
            </h1>
            <p className="text-slate-400 text-xs mt-2">
              High-scale commercial deployments engineered by HRwesitecreateragency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-blue-500/40 transition"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-base font-bold text-white">{proj.title}</span>
                    <span className="text-[9px] px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/30 text-blue-400">
                      {proj.category}
                    </span>
                  </div>
                  <div className="text-purple-400 text-[11px] font-semibold mb-3">
                    {proj.layerArchitecture}
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">{proj.description}</p>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-emerald-400 font-semibold mb-4">
                    Telemetry: {proj.metrics}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                  {proj.tech.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 text-[10px] border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold uppercase transition"
            >
              Deploy a Custom Project With Ranchi HQ
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (moduleId === 'cases') {
    return (
      <div id="case-studies-module" className="py-16 px-4 sm:px-6 font-mono text-xs">
        <div className="max-w-3xl mx-auto bg-slate-900/90 p-8 rounded-2xl border border-slate-800 shadow-xl">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">// MODULE 10</div>
          <h1 className="text-xl font-bold text-white mb-4 uppercase text-yellow-500">
            // Enterprise Case File Matrix
          </h1>
          <p className="text-slate-300 mb-6 leading-relaxed text-sm">
            We audited a major high-scale corporate enterprise experiencing critical server bottlenecks and an alarming
            78% bounce rate. Following our complete script refactoring and 20-Layer deep network infrastructure deployment:
          </p>

          <div className="space-y-4 mb-8">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white text-xs">Page interactive speed improved by 400%.</span>
                <p className="text-slate-400 text-[11px] mt-0.5">
                  Lighthouse score jumped from 22/100 to 99/100 across mobile and desktop devices.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white text-xs">Google visibility parameters updated to top ranks within 14 days.</span>
                <p className="text-slate-400 text-[11px] mt-0.5">
                  Over 10,000+ localized search keywords locked onto first page Google results in Jharkhand.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('home')}
            className="px-5 py-2.5 bg-slate-950 border border-slate-800 text-blue-400 hover:text-white rounded-xl transition"
          >
            Return to Core Cluster
          </button>
        </div>
      </div>
    );
  }

  if (moduleId === 'tech-stack') {
    return (
      <div id="tech-stack-module" className="py-16 px-4 sm:px-6 font-mono text-xs">
        <div className="max-w-2xl mx-auto bg-slate-900/90 p-8 rounded-2xl border border-slate-800">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">// MODULE 12</div>
          <h1 className="text-xl font-bold text-white uppercase mb-4 text-blue-400">
            // System Language Matrix
          </h1>
          <p className="text-slate-300 mb-6 leading-relaxed">
            We engineer clean, modern runtime execution engines free from bloated dependencies or legacy code. Every
            system features strict TypeScript validation, containerized deployment, and sub-10ms edge caching:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300 font-bold mb-8">
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>React / Next.js Nodes</span>
            </div>
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Node.js / Express Clusters</span>
            </div>
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span>MongoDB / PostgreSQL Mesh</span>
            </div>
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-500" />
              <span>Tailwind CSS Vector System</span>
            </div>
          </div>

          <button
            onClick={() => onNavigate('home')}
            className="px-5 py-2.5 bg-slate-950 border border-slate-800 text-slate-400 hover:text-white rounded-xl transition"
          >
            Return to Main Terminal
          </button>
        </div>
      </div>
    );
  }

  if (moduleId === 'support') {
    return (
      <div id="support-module" className="py-16 px-4 sm:px-6 font-mono text-xs">
        <div className="max-w-xl mx-auto bg-slate-900/90 p-8 rounded-2xl border border-slate-800 text-center shadow-xl">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">// MODULE 13</div>
          <h1 className="text-2xl font-bold uppercase mb-3 text-emerald-400">
            24/7 Priority Incident Desk
          </h1>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Instant routing for real-time server latency alerts, packet drops, route failure diagnostics, and high-priority
            change request pipeline execution.
          </p>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-left mb-6 text-[11px] text-slate-400 space-y-2">
            <div className="flex justify-between">
              <span>Incident Response SLA:</span>
              <span className="text-emerald-400 font-bold">&lt; 15 Minutes</span>
            </div>
            <div className="flex justify-between">
              <span>Ranchi Emergency Cell:</span>
              <span className="text-white font-bold">{AGENCY_CONFIG.displayPhone}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={AGENCY_CONFIG.whatsappMessage('URGENT: Priority Incident Desk Uplink requested for production website.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl uppercase tracking-wider transition flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Uplink to Live Engineer On-Call</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (moduleId === 'consultation') {
    return (
      <div id="consultation-module" className="py-16 px-4 sm:px-6 font-mono text-xs">
        <div className="max-w-md mx-auto bg-slate-900/90 p-8 rounded-2xl border border-slate-800 shadow-2xl">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">// MODULE 14</div>
          <h1 className="text-xl font-bold text-white mb-3 uppercase text-blue-400">
            // Sync Consultation Channel
          </h1>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Schedule an architectural strategy session directly with our Chief Systems Engineers at Ranchi HQ and Lucknow
            Hub to map your system configuration and technical roadmap.
          </p>

          {consultConfirmed && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs">
              Slot router open! Redirecting pipeline to WhatsApp agent matrix.
            </div>
          )}

          <form onSubmit={handleBookConsultation} className="space-y-4">
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Your Full Name</label>
              <input
                type="text"
                required
                value={consultName}
                onChange={(e) => setConsultName(e.target.value)}
                placeholder="e.g. Anand Roy"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-[11px] text-slate-400 mb-1">WhatsApp / Calling Number</label>
              <input
                type="tel"
                required
                value={consultPhone}
                onChange={(e) => setConsultPhone(e.target.value)}
                placeholder="+91 9876543210"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Preferred Consultation Area</label>
              <select
                value={consultType}
                onChange={(e) => setConsultType(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
              >
                <option>Full-Stack Architectural Architecture</option>
                <option>3D WebGL / Spatial Conversion Experience</option>
                <option>Custom API Tokenized Pipeline</option>
                <option>Local Ranchi Search Engine Domination</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Preferred Date / Time</label>
              <input
                type="text"
                value={consultDate}
                onChange={(e) => setConsultDate(e.target.value)}
                placeholder="Tomorrow 3:00 PM IST"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase rounded-xl transition shadow"
            >
              Initiate Live Booking
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (moduleId === 'careers') {
    return (
      <div id="careers-module" className="py-16 px-4 sm:px-6 font-mono text-xs">
        <div className="max-w-2xl mx-auto bg-slate-900/90 p-8 rounded-2xl border border-slate-800 shadow-xl">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">// MODULE 15</div>
          <h1 className="text-xl font-bold mb-3 uppercase text-blue-400">
            // Join The Sovereign Engineering Core
          </h1>
          <p className="text-slate-300 mb-6 leading-relaxed">
            We are constantly searching for brutal clean-code architects who can design custom API clusters effortlessly.
            No resume fluff; only proven production code repositories.
          </p>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 mb-6 text-slate-400 leading-relaxed">
            Send your GitHub profiles directly to phone uplink pipeline:{' '}
            <span className="text-white font-bold block mt-1 text-sm">{AGENCY_CONFIG.displayPhone}</span>
          </div>

          <a
            href={AGENCY_CONFIG.whatsappMessage('Hello HRwesitecreateragency team! I want to submit my GitHub developer profile for engineering openings.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold uppercase transition"
          >
            Submit GitHub via WhatsApp
          </a>
        </div>
      </div>
    );
  }

  if (moduleId === 'industry') {
    return (
      <div id="industry-module" className="py-16 px-4 sm:px-6 font-mono text-xs">
        <div className="max-w-3xl mx-auto bg-slate-900/90 p-8 rounded-2xl border border-slate-800">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">// MODULE 16</div>
          <h1 className="text-xl font-bold text-white uppercase mb-4 text-emerald-400">
            // Enterprise Industry Verticals
          </h1>
          <p className="mb-6 text-slate-300 leading-relaxed">
            We design specialized, domain-tailored software systems for high-growth enterprise verticals with dedicated cryptographic protocols:
          </p>
          <div className="space-y-3 mb-6">
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
              <span className="text-blue-400 font-bold block text-sm">Hyper-Velocity Fintech Systems</span>
              <p className="text-slate-400 text-[11px] mt-1">
                Zero packet loss UPI routers, instant payment hooks, and high-frequency ledger processing.
              </p>
            </div>
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
              <span className="text-purple-400 font-bold block text-sm">Highly Scalable Multivendor E-Commerce Hubs</span>
              <p className="text-slate-400 text-[11px] mt-1">
                50,000+ dynamic SKU caching, instant facet filtering, and automated logistics sync.
              </p>
            </div>
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
              <span className="text-yellow-400 font-bold block text-sm">Healthcare & Diagnostic Portals</span>
              <p className="text-slate-400 text-[11px] mt-1">
                HIPAA-grade patient data encryption, appointment booking switches, and doctor tele-consultations.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('home')}
            className="px-5 py-2.5 bg-slate-950 border border-slate-800 text-slate-400 hover:text-white rounded-xl transition"
          >
            Return to Core Matrix
          </button>
        </div>
      </div>
    );
  }

  if (moduleId === 'privacy') {
    return (
      <div id="privacy-module" className="py-16 px-4 sm:px-6 font-mono text-xs">
        <div className="max-w-2xl mx-auto bg-slate-900/90 p-8 rounded-2xl border border-slate-800 shadow-xl">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">// MODULE 17</div>
          <h1 className="text-xl font-bold uppercase mb-4 text-slate-200">
            // Data Encryption Privacy Blueprint
          </h1>
          <p className="leading-relaxed text-slate-300 mb-6">
            Your proprietary API keys, client transmission parameters, and system logs remain strictly isolated within
            cryptographic memory buffers. We enforce zero third-party telemetry data leakage across all client clusters.
          </p>
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-400 space-y-2 mb-6">
            <div>• All storage credentials isolated in server-side memory buffers.</div>
            <div>• Zero third-party telemetry data leakage.</div>
            <div>• Encrypted client-to-server TLSv1.3 cryptographic tunneling.</div>
          </div>
          <button
            onClick={() => onNavigate('home')}
            className="px-5 py-2.5 bg-slate-950 border border-slate-800 text-blue-400 hover:text-white rounded-xl transition"
          >
            Return to Main Node
          </button>
        </div>
      </div>
    );
  }

  if (moduleId === 'terms') {
    return (
      <div id="terms-module" className="py-16 px-4 sm:px-6 font-mono text-xs">
        <div className="max-w-3xl mx-auto bg-slate-900/90 p-8 sm:p-10 rounded-2xl border border-slate-800 shadow-xl">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">// MODULE 18</div>
          <h1 className="text-xl font-bold text-white mb-4 uppercase text-blue-400">
            // Legal Framework Guidelines SLA
          </h1>
          <p className="text-slate-300 mb-4 leading-relaxed">
            All engineering packages (₹10,000 to ₹2,00,000) are evaluated transparently based on architectural layer depth,
            database cluster requirements, and custom API microservice throughput.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            Upon retainer confirmation, your dedicated production staging environment is initialized immediately. All
            delivery milestones adhere strictly to agreed SLA delivery windows with transparent git commit logs.
          </p>
          <button
            onClick={() => onNavigate('home')}
            className="px-5 py-2.5 bg-slate-950 border border-slate-800 text-slate-400 hover:text-white rounded-xl transition"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  if (moduleId === 'refund') {
    return (
      <div id="refund-module" className="py-16 px-4 sm:px-6 font-mono text-xs">
        <div className="max-w-2xl mx-auto bg-slate-900/90 p-8 rounded-2xl border border-slate-800 shadow-xl">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">// MODULE 19</div>
          <h1 className="text-xl font-bold uppercase mb-3 text-red-400">
            // Retainer Security & Refund Protocols
          </h1>
          <p className="text-slate-300 leading-relaxed mb-6">
            To ensure complete transparency during all development stages, project escrow checkpoints and milestone
            deliverables are monitored continuously. Retainers and booking validations follow strict SLA contract terms.
          </p>
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-400 mb-6">
            For escrow status inquiries or contract adjustments, reach Ranchi Command Desk directly at{' '}
            <span className="text-white font-bold">{AGENCY_CONFIG.displayPhone}</span>.
          </div>
          <button
            onClick={() => onNavigate('home')}
            className="px-5 py-2.5 bg-slate-950 border border-slate-800 text-slate-400 hover:text-white rounded-xl transition"
          >
            Return to Hub
          </button>
        </div>
      </div>
    );
  }

  return null;
}
