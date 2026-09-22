import { useState, useMemo } from 'react';
import { Calculator, Check, ArrowRight, MessageSquare, Shield, Cpu, RefreshCw, Layers, Zap } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface CostEstimatorProps {
  initialTierPrice?: number;
}

export function CostEstimator({ initialTierPrice = 25000 }: CostEstimatorProps) {
  const [tierPrice, setTierPrice] = useState<number>(initialTierPrice);
  const [layerCount, setLayerCount] = useState<number>(10);
  const [databaseType, setDatabaseType] = useState<string>('mongodb');
  const [hasAiBot, setHasAiBot] = useState<boolean>(true);
  const [hasSeoMatrix, setHasSeoMatrix] = useState<boolean>(true);
  const [hasSslShield, setHasSslShield] = useState<boolean>(true);
  const [rushDelivery, setRushDelivery] = useState<boolean>(false);

  const calculateTotal = useMemo(() => {
    let total = tierPrice;

    // Layer count adjustments
    if (layerCount === 20) total += 15000;
    else if (layerCount === 15) total += 8000;

    // Database node additions
    if (databaseType === 'mongodb') total += 3500;
    else if (databaseType === 'postgresql') total += 5000;
    else if (databaseType === 'redis') total += 7000;

    // Add-on nodes
    if (hasAiBot) total += 8000;
    if (hasSeoMatrix) total += 4500;
    if (hasSslShield) total += 2000;
    if (rushDelivery) total += 6000;

    return total;
  }, [tierPrice, layerCount, databaseType, hasAiBot, hasSeoMatrix, hasSslShield, rushDelivery]);

  const handleBookSpec = () => {
    const tierName =
      tierPrice === 15000
        ? 'Starter Core Pack'
        : tierPrice === 25000
        ? 'Professional Growth'
        : tierPrice === 50000
        ? 'Advanced API Engine'
        : 'Enterprise Deep Multi-Layer';

    const message = `Hello HRwesitecreateragency Ranchi Team!
I used your Architecture Cost Estimator with:
- Base Tier: ${tierName} (₹${tierPrice.toLocaleString('en-IN')})
- Network Layers: ${layerCount}-Layer Structure
- Database: ${databaseType.toUpperCase()}
- AI Assistant Node: ${hasAiBot ? 'YES' : 'NO'}
- SEO Matrix Package: ${hasSeoMatrix ? 'YES' : 'NO'}
- SSL & Cryptographic Shield: ${hasSslShield ? 'YES' : 'NO'}
- Delivery Mode: ${rushDelivery ? '48-Hour Hyper Rush' : 'Standard Pipeline'}
Estimated Investment: ₹${calculateTotal.toLocaleString('en-IN')}

Please share timeline and booking confirmation.`;

    window.open(AGENCY_CONFIG.whatsappMessage(message), '_blank');
  };

  return (
    <div id="cost-estimator-container" className="py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 font-mono text-xs mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>MODULE 11 // BUDGET ESTIMATOR SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Instant Architecture Cost Estimator
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
            Configure your technical requirements dynamically and receive a verified engineering budget calculation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 p-6 sm:p-7 rounded-2xl space-y-6 font-mono text-xs">
            {/* Tier Select */}
            <div>
              <label className="block text-slate-300 font-semibold mb-2 uppercase tracking-wider flex items-center justify-between">
                <span>1. Select Base Architecture Tier:</span>
                <span className="text-blue-400">₹{tierPrice.toLocaleString('en-IN')}</span>
              </label>
              <select
                id="estimator-tier-select"
                value={tierPrice}
                onChange={(e) => setTierPrice(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 text-slate-200 p-3 rounded-xl focus:outline-none focus:border-blue-500 transition cursor-pointer"
              >
                <option value={15000}>Starter Core Layer Pack (₹10,000 - ₹15,000)</option>
                <option value={25000}>Professional Growth Layer Pack (₹20,000 - ₹25,000)</option>
                <option value={50000}>Advanced Integrated API Setup (₹50,000 Standard)</option>
                <option value={150000}>Enterprise Deep Multi-Layer Stack (₹1 Lakh - ₹2 Lakh)</option>
              </select>
            </div>

            {/* Layer Depth */}
            <div>
              <label className="block text-slate-300 font-semibold mb-2 uppercase tracking-wider flex items-center justify-between">
                <span>2. Structural Layer Depth:</span>
                <span className="text-purple-400">{layerCount}-Layer Structure</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[5, 15, 20].map((layers) => (
                  <button
                    key={layers}
                    type="button"
                    onClick={() => setLayerCount(layers)}
                    className={`py-2.5 px-3 rounded-xl border text-center transition ${
                      layerCount === layers
                        ? 'bg-purple-600/30 border-purple-500 text-purple-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {layers}-Layer
                  </button>
                ))}
              </div>
            </div>

            {/* Database Node */}
            <div>
              <label className="block text-slate-300 font-semibold mb-2 uppercase tracking-wider">
                3. Database & Cache Engine:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'none', label: 'Static / CDN' },
                  { id: 'mongodb', label: 'MongoDB Node' },
                  { id: 'postgresql', label: 'PostgreSQL SQL' },
                  { id: 'redis', label: 'Redis Mesh' },
                ].map((db) => (
                  <button
                    key={db.id}
                    type="button"
                    onClick={() => setDatabaseType(db.id)}
                    className={`p-2.5 rounded-xl border text-center transition text-[11px] ${
                      databaseType === db.id
                        ? 'bg-blue-600/30 border-blue-500 text-blue-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {db.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Modular Addons */}
            <div>
              <label className="block text-slate-300 font-semibold mb-2 uppercase tracking-wider">
                4. Add-on Infrastructure Nodes:
              </label>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700">
                  <span className="flex items-center gap-2 text-slate-300">
                    <input
                      type="checkbox"
                      checked={hasAiBot}
                      onChange={(e) => setHasAiBot(e.target.checked)}
                      className="accent-blue-600 w-4 h-4 rounded"
                    />
                    <span>Core AI Assistant Interactive Node</span>
                  </span>
                  <span className="text-slate-400">+₹8,000</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700">
                  <span className="flex items-center gap-2 text-slate-300">
                    <input
                      type="checkbox"
                      checked={hasSeoMatrix}
                      onChange={(e) => setHasSeoMatrix(e.target.checked)}
                      className="accent-blue-600 w-4 h-4 rounded"
                    />
                    <span>10,000+ Keyword SEO Dominance Matrix</span>
                  </span>
                  <span className="text-slate-400">+₹4,500</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700">
                  <span className="flex items-center gap-2 text-slate-300">
                    <input
                      type="checkbox"
                      checked={hasSslShield}
                      onChange={(e) => setHasSslShield(e.target.checked)}
                      className="accent-blue-600 w-4 h-4 rounded"
                    />
                    <span>Enterprise SSL & Cloudflare Firewall Shield</span>
                  </span>
                  <span className="text-slate-400">+₹2,000</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700">
                  <span className="flex items-center gap-2 text-slate-300">
                    <input
                      type="checkbox"
                      checked={rushDelivery}
                      onChange={(e) => setRushDelivery(e.target.checked)}
                      className="accent-blue-600 w-4 h-4 rounded"
                    />
                    <span className="text-yellow-400 font-semibold">48-Hour Hyper-Rush Deployment SLA</span>
                  </span>
                  <span className="text-yellow-400">+₹6,000</span>
                </label>
              </div>
            </div>
          </div>

          {/* Live Quote Output Panel */}
          <div className="lg:col-span-5 bg-slate-900/90 border-2 border-blue-500/50 p-6 sm:p-7 rounded-2xl shadow-2xl relative font-mono">
            <div className="text-[10px] text-blue-400 font-bold tracking-widest uppercase mb-1 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              <span>LIVE COMPUTED SPECIFICATION</span>
            </div>

            <h3 className="text-lg font-black text-white mb-4">Architecture Allocation</h3>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-5">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">
                Estimated Net Investment
              </div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">
                ₹{calculateTotal.toLocaleString('en-IN')}
              </div>
              <div className="text-[10px] text-slate-500 mt-1">
                Inclusive of Architecture Setup, Ranchi HQ Code Deployment, & SLA
              </div>
            </div>

            <div className="space-y-2 text-xs border-b border-slate-800 pb-4 mb-4 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-500">Base Architectural Core:</span>
                <span className="font-semibold">₹{tierPrice.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Network Structure:</span>
                <span className="text-purple-300">{layerCount}-Layer Stack</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Database Pipeline:</span>
                <span className="text-blue-300 uppercase">{databaseType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">AI Assistant Bot Node:</span>
                <span>{hasAiBot ? 'Active (+₹8,000)' : 'Disabled'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">SEO Index Matrix:</span>
                <span>{hasSeoMatrix ? 'Active (+₹4,500)' : 'Disabled'}</span>
              </div>
              {rushDelivery && (
                <div className="flex justify-between text-yellow-400">
                  <span>Hyper-Rush Priority:</span>
                  <span>Active (+₹6,000)</span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <button
                id="estimator-deploy-whatsapp-btn"
                onClick={handleBookSpec}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Deploy System With This Spec</span>
              </button>

              <a
                href={`tel:${AGENCY_CONFIG.phone}`}
                className="w-full py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs text-center block transition"
              >
                Discuss Spec with Lead Architect: {AGENCY_CONFIG.displayPhone}
              </a>
            </div>

            <div className="mt-4 text-[10px] text-slate-500 text-center">
              * Escrow metrics active. Retainer finalized under SLA protocols.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
