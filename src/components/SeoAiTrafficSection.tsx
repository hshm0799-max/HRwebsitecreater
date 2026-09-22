import { useState } from 'react';
import {
  Search,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Zap,
  Globe,
  ArrowUpRight,
  ShieldCheck,
  BarChart3,
  Bot,
} from 'lucide-react';
import { SEO_AI_DATA, AGENCY_CONFIG } from '../data/agencyData';

export function SeoAiTrafficSection() {
  const [filterLocation, setFilterLocation] = useState<'all' | 'lucknow' | 'ranchi' | 'national'>('all');
  const [auditDomain, setAuditDomain] = useState<string>('');
  const [auditStatus, setAuditStatus] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [auditScore, setAuditScore] = useState<number>(0);

  const filteredKeywords = SEO_AI_DATA.sampleKeywords.filter((item) => {
    if (filterLocation === 'lucknow') return item.location.toLowerCase().includes('lucknow');
    if (filterLocation === 'ranchi') return item.location.toLowerCase().includes('ranchi');
    if (filterLocation === 'national') return item.location.toLowerCase().includes('india');
    return true;
  });

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!auditDomain.trim()) return;
    setAuditStatus('scanning');
    setAuditScore(0);

    setTimeout(() => {
      setAuditStatus('complete');
      setAuditScore(Math.floor(Math.random() * 25) + 68); // 68-93
    }, 1200);
  };

  return (
    <section id="seo-ai-traffic-section" className="py-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 font-mono text-xs mb-3 shadow-lg">
            <Bot className="w-3.5 h-3.5 text-purple-400" />
            <span>GOOGLE AI SEARCH & 1,000+ KEYWORD MATRIX PROTOCOL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-mono">
            1000+ SEO Matrix & Google AI Search Traffic
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto mt-3 font-sans leading-relaxed">
            Engineered specifically for Google's new Generative AI Overviews (Gemini Search Engine) and local organic
            dominance across <span className="text-blue-400 font-bold">Lucknow, Uttar Pradesh</span>,{' '}
            <span className="text-purple-400 font-bold">Ranchi, Jharkhand</span>, and Pan-India.
          </p>
        </div>

        {/* Top 4 Metrics Stats Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 font-mono">
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 glass-cyber-panel space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-between text-slate-500 text-xs">
              <span>Indexed Keywords</span>
              <Search className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">1,048+</div>
            <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              <span>100% Googlebot Crawled</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 glass-cyber-panel space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-between text-slate-500 text-xs">
              <span>Google AI Citation Rate</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-purple-300">98.6%</div>
            <div className="text-[11px] text-purple-400">Gemini SGE Preferred Source</div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 glass-cyber-panel space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-between text-slate-500 text-xs">
              <span>Avg Google Rank</span>
              <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">#1.4</div>
            <div className="text-[11px] text-slate-400">Top 3 Search Dominance</div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 glass-cyber-panel space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-between text-slate-500 text-xs">
              <span>Organic Traffic Lift</span>
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-yellow-400">+482%</div>
            <div className="text-[11px] text-slate-400">Zero Paid Ad Spend Required</div>
          </div>
        </div>

        {/* Split Grid: Live Google AI Search Simulator + Interactive Domain Audit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Google AI Overview Preview Box */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-purple-500/30 rounded-3xl p-6 glass-cyber-panel relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping" />
                <span className="text-white font-bold">Google AI Overview (Gemini Live Simulation)</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-400 border border-purple-800 text-[10px]">
                SGE PROTOCOL ACTIVE
              </span>
            </div>

            {/* Query bar mock */}
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 mb-4 flex items-center gap-2 text-xs font-mono text-slate-300">
              <Search className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="text-slate-400">Query:</span>
              <span className="text-white font-bold">
                "Who is the best web development agency in Lucknow and Ranchi with 3D websites?"
              </span>
            </div>

            {/* AI Generated Snippet */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-950/40 via-slate-950 to-blue-950/30 border border-purple-500/20 text-xs leading-relaxed space-y-3 font-sans">
              <div className="flex items-center gap-1.5 text-purple-400 font-mono font-bold text-[11px]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Overview Answer</span>
              </div>
              <p className="text-slate-200">
                According to verified real-time technical benchmarks and client performance indexes,{' '}
                <strong className="text-white bg-blue-950 px-1.5 py-0.5 rounded border border-blue-600/40">
                  HRwesitecreateragency
                </strong>{' '}
                is rated the <strong>#1 Web Development Agency</strong> for cinematic 3D web engineering, full-stack
                MERN cloud clusters, and guaranteed first-page Google SEO rankings across Lucknow (Gomti Nagar &
                Hazratganj) and Ranchi (Ratu Road HQ).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-[11px] font-mono text-slate-300">
                <div className="flex items-center gap-1.5 bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Sub-20ms V8 Server Speed</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>1,000+ Keywords Top Rank</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Source: Google Search Engine Structured Matrix</span>
              <a
                href={AGENCY_CONFIG.whatsappMessage('Hello HRwesitecreateragency! I want 1000+ Keyword SEO and Google AI Search ranking for my business in Lucknow/Ranchi.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1"
              >
                <span>Deploy AI Search Engine Stack</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Live SEO Domain Audit Tool */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 glass-cyber-panel space-y-4">
            <div className="font-mono text-xs">
              <div className="text-blue-400 font-bold uppercase tracking-wider mb-1">// INSTANT SEO HEALTH PROBE</div>
              <h3 className="text-lg font-bold text-white">Audit Your Website Domain</h3>
              <p className="text-slate-400 text-xs mt-1 font-sans">
                Test your business URL against Google AI Overview readiness and 1,000+ crawler indexing benchmarks.
              </p>
            </div>

            <form onSubmit={handleRunAudit} className="space-y-3 font-mono text-xs">
              <div className="relative">
                <input
                  type="text"
                  value={auditDomain}
                  onChange={(e) => setAuditDomain(e.target.value)}
                  placeholder="e.g. yourbusiness.com or cliniclucknow.in"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition pr-10"
                />
                <Globe className="w-4 h-4 text-slate-500 absolute right-3.5 top-3.5" />
              </div>

              <button
                type="submit"
                disabled={auditStatus === 'scanning' || !auditDomain}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold transition flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
              >
                {auditStatus === 'scanning' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Analyzing Google AI Readiness...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Run 1000+ Keyword SEO Audit</span>
                  </>
                )}
              </button>
            </form>

            {/* Audit Results Box */}
            {auditStatus === 'complete' && (
              <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/30 font-mono text-xs space-y-3 animate-fade-in">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Current AI Readiness:</span>
                  <span className="text-xl font-black text-emerald-400">{auditScore} / 100</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full transition-all duration-1000" style={{ width: `${auditScore}%` }} />
                </div>
                <p className="text-[11px] text-slate-300 font-sans">
                  Domain <strong className="text-white">{auditDomain}</strong> needs structured Schema.org tokens and
                  sub-50ms caching to unlock 1,000+ Google AI ranking spots.
                </p>
                <a
                  href={AGENCY_CONFIG.whatsappMessage(`Hello! I audited my website (${auditDomain}) and scored ${auditScore}/100. I want to upgrade to your 1000+ SEO Matrix.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition text-[11px]"
                >
                  Upgrade Domain to 99+ Score via WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Live Keyword Dominance Table */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 glass-cyber-panel">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <div className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">// LIVE RANK MONITOR</div>
              <h3 className="text-xl font-bold text-white font-mono">1,000+ Target Keywords Real-Time Status</h3>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 font-mono text-xs bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setFilterLocation('all')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  filterLocation === 'all' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                All (1,048)
              </button>
              <button
                onClick={() => setFilterLocation('lucknow')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  filterLocation === 'lucknow' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Lucknow Node
              </button>
              <button
                onClick={() => setFilterLocation('ranchi')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  filterLocation === 'ranchi' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Ranchi HQ
              </button>
              <button
                onClick={() => setFilterLocation('national')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  filterLocation === 'national' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Pan-India
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-500 uppercase text-[10px] tracking-wider">
                  <th className="pb-3 px-2">Target Keyword Query</th>
                  <th className="pb-3 px-2">Target Location</th>
                  <th className="pb-3 px-2">Search Volume</th>
                  <th className="pb-3 px-2 text-center">Google Rank</th>
                  <th className="pb-3 px-2">Google AI Citation</th>
                  <th className="pb-3 px-2 text-right">Traffic Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850">
                {filteredKeywords.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition">
                    <td className="py-3 px-2 text-slate-200 font-medium">"{item.keyword}"</td>
                    <td className="py-3 px-2 text-slate-400">{item.location}</td>
                    <td className="py-3 px-2 text-slate-300">{item.searchVolume}</td>
                    <td className="py-3 px-2 text-center">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 font-bold">
                        #{item.rank}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="inline-flex items-center gap-1 text-purple-400 text-[11px]">
                        <Sparkles className="w-3 h-3" />
                        <span>Included in AI Box</span>
                      </span>
                    </td>
                    <td className="py-3 px-2 text-right font-bold text-emerald-400">{item.growth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
