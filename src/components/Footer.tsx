import { Radio, Phone, MessageSquare, MapPin, Shield, Terminal, ArrowUp } from 'lucide-react';
import { ActiveModuleId } from '../types';
import { MODULES_NAV, AGENCY_CONFIG } from '../data/agencyData';

interface FooterProps {
  onNavigate: (mod: ActiveModuleId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    { title: 'Core Stations', ids: ['home', 'about', 'team', 'contact'] },
    { title: 'Commercial', ids: ['pricing', 'reviews', 'calculator', 'consultation'] },
    { title: 'Engineering Lab', ids: ['api-dev', 'fullstack', 'uiux', 'tech-stack'] },
    { title: 'Enterprise & SLA', ids: ['portfolio', 'cases', 'support', 'careers', 'industry'] },
    { title: 'Legal Protocols', ids: ['privacy', 'terms', 'refund'] },
  ];

  return (
    <footer id="agency-footer" className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 px-4 sm:px-6 font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="text-lg font-black tracking-widest text-white">
                HR<span className="text-blue-400">WEBSITE</span>CREATER
                <span className="text-purple-500">AGENCY</span>
              </span>
              <div className="text-[11px] text-blue-400 mt-1 font-semibold">
                World Elite Cinematic Web Engineers
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed font-sans">
              Deploying 5-Layer to 20-Layer deep network web structures with zero-loading layout metrics and guaranteed
              first-page Google search engine dominance.
            </p>

            <div className="space-y-2 text-[11px] pt-2">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Ratu Road, Near Pahari Mandir, Kumhartoli, Ranchi, Jharkhand 834001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${AGENCY_CONFIG.phone}`} className="hover:text-white transition">
                  {AGENCY_CONFIG.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-red-400 shrink-0 animate-pulse" />
                <span>Station: 23.3681° N, 85.3087° E</span>
              </div>
            </div>
          </div>

          {/* Module Links by Category */}
          {categories.slice(0, 4).map((cat, idx) => (
            <div key={idx} className="space-y-3">
              <div className="text-slate-200 font-bold uppercase tracking-wider text-[11px] pb-1 border-b border-slate-900">
                {cat.title}
              </div>
              <ul className="space-y-2 text-[11px]">
                {MODULES_NAV.filter((m) => cat.ids.includes(m.id)).map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        onNavigate(item.id);
                        scrollToTop();
                      }}
                      className="hover:text-blue-400 transition flex items-center gap-1.5"
                    >
                      <span className="text-slate-600 text-[9px]">{String(item.num).padStart(2, '0')}.</span>
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px]">
          <div className="flex items-center gap-2 text-slate-500">
            <span>© {new Date().getFullYear()} HRwesitecreateragency. All Sovereign Architecture Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <button onClick={() => { onNavigate('privacy'); scrollToTop(); }} className="hover:text-white transition">
              17. Privacy
            </button>
            <button onClick={() => { onNavigate('terms'); scrollToTop(); }} className="hover:text-white transition">
              18. SLA
            </button>
            <button onClick={() => { onNavigate('refund'); scrollToTop(); }} className="hover:text-white transition">
              19. Refund
            </button>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
