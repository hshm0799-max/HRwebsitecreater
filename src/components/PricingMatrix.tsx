import { useState } from 'react';
import { Check, MessageSquare, ArrowRight, Zap, Calculator, Shield, Clock } from 'lucide-react';
import { PRICING_TIERS, AGENCY_CONFIG } from '../data/agencyData';
import { ActiveModuleId, PricingTier } from '../types';

interface PricingMatrixProps {
  onNavigate: (mod: ActiveModuleId) => void;
  onSelectTierForCalc?: (tierPrice: number) => void;
}

export function PricingMatrix({ onNavigate, onSelectTierForCalc }: PricingMatrixProps) {
  const [selectedTier, setSelectedTier] = useState<string>('professional');

  const handleDeploy = (tier: PricingTier) => {
    const text = `Hello HRwesitecreateragency Ranchi HQ! I want to deploy the [${tier.name}] tier (${tier.priceRange}). Please initiate system pipeline setup.`;
    window.open(AGENCY_CONFIG.whatsappMessage(text), '_blank');
  };

  const handleCustomizeInCalc = (tier: PricingTier) => {
    if (onSelectTierForCalc) {
      onSelectTierForCalc(tier.priceValueMin);
    }
    onNavigate('calculator');
  };

  return (
    <section id="pricing-matrix-section" className="py-16 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 font-mono text-xs mb-3">
            <Zap className="w-3 h-3 text-yellow-400" />
            <span>MODULE 04 // COMMERCIAL DEPLOYMENT PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight text-white uppercase">
            Elite Architecture Tiers
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Transparent enterprise grade engineering packages customized precisely for your scale. No hidden fees, guaranteed Google search indexing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_TIERS.map((tier) => {
            const isHighlighted = tier.highlighted;
            return (
              <div
                key={tier.id}
                id={`tier-card-${tier.id}`}
                className={`bg-slate-900/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative transition duration-300 ${
                  isHighlighted
                    ? 'border-2 border-blue-500/60 shadow-[0_0_30px_rgba(59,130,246,0.2)] bg-slate-900'
                    : 'border border-slate-800 hover:border-slate-700'
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-black text-[10px] uppercase px-3 py-1 rounded-full shadow font-mono tracking-wider">
                    {tier.badge}
                  </span>
                )}

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white tracking-wide">{tier.name}</h3>
                  </div>

                  <div className="text-2xl sm:text-3xl font-black text-blue-400 mb-2 font-mono">
                    {tier.priceRange}
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono mb-4 pb-3 border-b border-slate-800">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>Deploy in {tier.deploymentTime}</span>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider mb-2 font-semibold">
                    Core Specifications:
                  </div>

                  <ul className="space-y-2.5 mb-6 text-xs text-slate-300">
                    {tier.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  <button
                    id={`deploy-btn-${tier.id}`}
                    onClick={() => handleDeploy(tier)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold font-mono tracking-wider transition flex items-center justify-center gap-2 uppercase ${
                      isHighlighted
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow'
                        : tier.id === 'enterprise-master'
                        ? 'bg-purple-600 hover:bg-purple-500 text-white shadow'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Deploy System</span>
                  </button>

                  <button
                    onClick={() => handleCustomizeInCalc(tier)}
                    className="w-full py-2 rounded-xl text-[11px] font-mono text-slate-400 hover:text-white hover:bg-slate-800/50 transition flex items-center justify-center gap-1.5"
                  >
                    <Calculator className="w-3 h-3 text-blue-400" />
                    <span>Custom Add-Ons</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom inquiry note */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left font-mono">
          <div>
            <div className="text-white font-bold text-sm">Need a specialized architectural setup or multi-server cluster?</div>
            <div className="text-slate-400 text-xs mt-0.5">
              Ranchi Core Engineers can map out custom microservice trees and custom SLAs.
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => onNavigate('calculator')}
              className="px-4 py-2 rounded-xl bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-semibold hover:bg-blue-600/50 transition flex items-center gap-1.5"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Budget Estimator Suite</span>
            </button>
            <a
              href={`tel:${AGENCY_CONFIG.phone}`}
              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition"
            >
              Call Architect Node
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
