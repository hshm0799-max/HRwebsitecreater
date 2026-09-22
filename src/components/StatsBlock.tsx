import { Users, Globe, KeyRound, CheckCircle2 } from 'lucide-react';

export function StatsBlock() {
  const stats = [
    {
      value: '5,000+',
      label: 'Verified Corporate Clients',
      sub: 'Deployed across India & Global Nodes',
      icon: Users,
      color: 'text-blue-400',
      borderColor: 'hover:border-blue-500/40',
    },
    {
      value: '100,000+',
      label: 'Live Global Visitors',
      sub: 'Zero-latency edge distribution',
      icon: Globe,
      color: 'text-purple-400',
      borderColor: 'hover:border-purple-500/40',
    },
    {
      value: '10,000+',
      label: 'SEO Matrix Keywords',
      sub: 'Dominating first page Google ranks',
      icon: KeyRound,
      color: 'text-emerald-400',
      borderColor: 'hover:border-emerald-500/40',
    },
    {
      value: 'Zero Error',
      label: 'Clean System Compile',
      sub: 'Rigorous V8 & TypeScript validation',
      icon: CheckCircle2,
      color: 'text-yellow-400',
      borderColor: 'hover:border-yellow-500/40',
    },
  ];

  return (
    <section
      id="global-stats-block"
      className="py-12 bg-slate-900/30 border-y border-slate-900 text-center font-mono relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                id={`stat-card-${idx}`}
                className={`p-5 sm:p-6 bg-slate-950/80 rounded-xl border border-slate-900 transition duration-300 ${s.borderColor} hover:bg-slate-950 flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon className={`w-5 h-5 ${s.color}`} />
                  <span className="text-[10px] text-slate-600 uppercase">TELEMETRY {idx + 1}</span>
                </div>
                <div>
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-black ${s.color} tracking-tight`}>
                    {s.value}
                  </div>
                  <div className="text-[11px] uppercase text-slate-300 font-semibold tracking-wider mt-1.5">
                    {s.label}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1 font-normal">
                    {s.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
