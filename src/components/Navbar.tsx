import { useState } from 'react';
import { Menu, X, Layers, Cpu, Calculator, MessageSquare, Shield, HelpCircle, ChevronDown, MapPin, Globe, Sparkles } from 'lucide-react';
import { ActiveModuleId } from '../types';
import { MODULES_NAV, AGENCY_CONFIG } from '../data/agencyData';

interface NavbarProps {
  activeModule: ActiveModuleId;
  onSelectModule: (mod: ActiveModuleId) => void;
}

export function Navbar({ activeModule, onSelectModule }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [allModulesDropdown, setAllModulesDropdown] = useState(false);

  // Key quick-access modules for top header bar matching user request
  const quickNavItems: Array<{ id: ActiveModuleId; label: string; badge?: string }> = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services', badge: 'India #1' },
    { id: 'milestones', label: 'Milestones', badge: 'Live Phases' },
    { id: 'pricing', label: 'Plans', badge: '₹10k-2L' },
    { id: 'reviews', label: 'Rating & Reviews', badge: '4.9★' },
    { id: 'map', label: 'Google Map 🗺️', badge: 'Ranchi/Lucknow' },
    { id: 'terms', label: 'Terms & SLA' },
    { id: 'contact', label: 'Contact HQ' },
  ];

  const handleSelect = (id: ActiveModuleId) => {
    onSelectModule(id);
    setMobileMenuOpen(false);
    setAllModulesDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="main-cyber-nav"
      className="sticky top-0 z-40 glass-cyber-panel border-b border-slate-900 px-4 sm:px-6 py-3 flex justify-between items-center transition-all bg-slate-950/90 backdrop-blur-md"
    >
      {/* Brand Logo & India #1 Sub-tag */}
      <div className="flex items-center gap-3">
        <button
          id="nav-brand-logo"
          onClick={() => handleSelect('home')}
          className="text-left group flex flex-col"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl font-black tracking-widest text-white leading-none font-mono">
              HR<span className="text-blue-400">WEBSITE</span>CREATER
              <span className="text-purple-500">AGENCY</span>
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-blue-950 border border-blue-500/40 text-[9px] font-mono text-blue-300 font-bold">
              INDIA #1 TOP WEB AGENCY
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400 tracking-wider group-hover:text-blue-400 transition flex items-center gap-1.5 mt-0.5">
            <MapPin className="w-3 h-3 text-red-400" />
            <span>Ranchi HQ & Lucknow Regional Hub // 3D Web Studio</span>
          </span>
        </button>
      </div>

      {/* Desktop Navigation Items */}
      <div className="hidden lg:flex items-center gap-1.5 text-xs font-mono font-semibold">
        {quickNavItems.map((item) => {
          const isActive = activeModule === item.id;
          return (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => handleSelect(item.id)}
              className={`px-3 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md font-bold'
                  : item.id === 'services'
                  ? 'border border-purple-500/40 text-purple-300 hover:bg-purple-950/30'
                  : item.id === 'pricing'
                  ? 'border border-yellow-500/40 text-yellow-400 hover:bg-yellow-950/20'
                  : item.id === 'map'
                  ? 'border border-emerald-500/40 text-emerald-400 hover:bg-emerald-950/20'
                  : 'border border-slate-800/80 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-900/60'
              }`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-slate-900/90 text-slate-300 border border-slate-700">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        {/* All Modules Dropdown */}
        <div className="relative">
          <button
            id="nav-all-modules-btn"
            onClick={() => setAllModulesDropdown(!allModulesDropdown)}
            className="px-2.5 py-1.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white flex items-center gap-1 hover:border-slate-700 bg-slate-900/50 transition"
          >
            <span>All 20 Nodes</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${allModulesDropdown ? 'rotate-180' : ''}`} />
          </button>

          {allModulesDropdown && (
            <div
              id="nav-all-modules-menu"
              className="absolute right-0 mt-2 w-80 max-h-[75vh] overflow-y-auto bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-3 z-50 glass-cyber-panel grid grid-cols-1 gap-1"
            >
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest px-2 py-1 border-b border-slate-900 mb-1">
                Full 20-Node System Directory
              </div>
              {MODULES_NAV.map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => handleSelect(mod.id)}
                  className={`text-left px-3 py-1.5 rounded-lg text-xs font-mono flex items-center justify-between transition ${
                    activeModule === mod.id
                      ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <span>
                    <span className="text-slate-600 mr-2">{String(mod.num).padStart(2, '0')}.</span>
                    {mod.label}
                  </span>
                  {mod.badge && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      {mod.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick Action CTA */}
      <div className="hidden md:flex items-center gap-2 font-mono text-xs">
        <a
          id="nav-whatsapp-cta"
          href={AGENCY_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition flex items-center gap-1.5 shadow-md"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp Uplink</span>
        </a>
      </div>

      {/* Mobile Hamburger Toggle */}
      <div className="lg:hidden flex items-center gap-2">
        <button
          id="nav-mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Full Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="nav-mobile-drawer"
          className="absolute top-full left-0 w-full bg-slate-950/98 border-b border-slate-800 p-4 lg:hidden shadow-2xl max-h-[80vh] overflow-y-auto z-50 backdrop-blur-2xl"
        >
          <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3 pb-1 border-b border-slate-900">
            Primary Navigation
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-4">
            {quickNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`text-left p-2.5 rounded-xl transition flex items-center justify-between ${
                  activeModule === item.id
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-slate-900 text-slate-300 border border-slate-800'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[9px] px-1 rounded bg-slate-800 text-yellow-400">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2 pb-1 border-b border-slate-900">
            All 20 System Modules
          </div>
          <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono">
            {MODULES_NAV.map((mod) => (
              <button
                key={mod.id}
                onClick={() => handleSelect(mod.id)}
                className="text-left p-1.5 rounded bg-slate-900/60 text-slate-400 hover:text-white border border-slate-850"
              >
                {mod.num}. {mod.label}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-900 flex gap-2 font-mono text-xs">
            <a
              href={`tel:${AGENCY_CONFIG.phone}`}
              className="w-1/2 py-2.5 text-center rounded-xl bg-slate-900 border border-slate-800 text-blue-400 font-bold"
            >
              Call HQ
            </a>
            <a
              href={AGENCY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 py-2.5 text-center rounded-xl bg-emerald-600 text-white font-bold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
