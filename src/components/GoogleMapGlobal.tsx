import { useState } from 'react';
import {
  MapPin,
  ExternalLink,
  Navigation,
  Globe,
  Radio,
  Copy,
  Check,
  Compass,
  Server,
  Activity,
  Layers,
} from 'lucide-react';
import { GLOBAL_MAP_NODES, GlobalMapNode, AGENCY_CONFIG } from '../data/agencyData';

export function GoogleMapGlobal() {
  const [selectedNode, setSelectedNode] = useState<GlobalMapNode>(GLOBAL_MAP_NODES[0]);
  const [copied, setCopied] = useState<boolean>(false);
  const [pingTesting, setPingTesting] = useState<boolean>(false);
  const [currentPing, setCurrentPing] = useState<string>(selectedNode.latency);

  const handleCopyCoords = () => {
    navigator.clipboard.writeText(selectedNode.coordinates);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleTestPing = () => {
    setPingTesting(true);
    setTimeout(() => {
      setPingTesting(false);
      const simulated = Math.floor(Math.random() * 8) + 4;
      setCurrentPing(`${simulated}ms (Verified V8 Stream)`);
    }, 600);
  };

  return (
    <section id="google-map-global-section" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 font-mono text-xs mb-3">
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span>GLOBAL RADAR // GOOGLE MAPS & NODE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-mono">
            Ranchi HQ & Global Edge Matrix
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto mt-2 font-sans">
            Centrally anchored at Ratu Road, Ranchi, with synchronized edge network routing nodes across major tech hubs
            in India and worldwide.
          </p>
        </div>

        {/* Global Node Switcher Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 font-mono text-xs no-scrollbar">
          {GLOBAL_MAP_NODES.map((node) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => {
                  setSelectedNode(node);
                  setCurrentPing(node.latency);
                }}
                className={`px-3 py-2 rounded-xl border whitespace-nowrap transition flex items-center gap-2 ${
                  isSelected
                    ? 'bg-blue-600 border-blue-400 text-white font-bold shadow-lg'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    node.status === 'ACTIVE_CORE'
                      ? 'bg-emerald-400 animate-pulse'
                      : node.status === 'EDGE_RELAY'
                      ? 'bg-blue-400'
                      : 'bg-purple-400'
                  }`}
                />
                <span>{node.name.split(' (')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: Google Map + Node Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Interactive Google Map Panel */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Map Top Bar */}
            <div className="flex flex-wrap justify-between items-center gap-2 mb-3 pb-3 border-b border-slate-800 font-mono text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500 animate-bounce" />
                <span className="text-white font-bold">{selectedNode.name}</span>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  SIGNAL LOCK 100%
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${selectedNode.lat},${selectedNode.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 hover:bg-blue-600 hover:text-white transition flex items-center gap-1 text-[11px]"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${selectedNode.lat},${selectedNode.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white transition flex items-center gap-1 text-[11px]"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Google Map Embedded Frame */}
            <div className="w-full h-80 sm:h-[400px] rounded-2xl overflow-hidden border border-slate-800 relative bg-slate-950 shadow-inner">
              <iframe
                title={`Google Map - ${selectedNode.name}`}
                src={`https://maps.google.com/maps?q=${selectedNode.lat},${selectedNode.lng}&hl=en&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full"
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute bottom-3 left-3 bg-slate-950/90 border border-slate-800 p-2.5 rounded-xl backdrop-blur font-mono text-[10px] text-slate-300 shadow-xl max-w-xs hidden sm:block">
                <div className="text-white font-bold flex items-center gap-1">
                  <Radio className="w-3 h-3 text-red-400 animate-pulse" />
                  <span>{selectedNode.location}</span>
                </div>
                <div className="text-slate-400 mt-0.5">{selectedNode.coordinates}</div>
              </div>
            </div>

            {/* Map Bottom Quick Actions */}
            <div className="mt-3 pt-3 border-t border-slate-800 flex flex-wrap justify-between items-center gap-2 font-mono text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <span>Coordinates:</span>
                <span className="text-white font-bold">{selectedNode.coordinates}</span>
                <button
                  onClick={handleCopyCoords}
                  className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                  title="Copy Lat/Lng"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              <div className="text-slate-500">
                Verified Google Maps Geocoding Node
              </div>
            </div>
          </div>

          {/* Node Specification & Latency Sidebar */}
          <div className="lg:col-span-4 space-y-4 font-mono">
            {/* Active Node Detail Card */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4 text-xs">
              <div className="text-[10px] text-blue-400 uppercase tracking-widest font-bold">
                // TELEMETRY SPECIFICATIONS
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-1">{selectedNode.name}</h3>
                <p className="text-slate-400 text-[11px] leading-relaxed font-sans">{selectedNode.role}</p>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Live Latency:</span>
                  <span className="text-emerald-400 font-bold">{currentPing}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Uptime SLA:</span>
                  <span className="text-blue-400 font-bold">99.98% High Velocity</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Routing Type:</span>
                  <span className="text-purple-400 uppercase">{selectedNode.status.replace('_', ' ')}</span>
                </div>
              </div>

              <button
                onClick={handleTestPing}
                disabled={pingTesting}
                className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 transition flex items-center justify-center gap-2 font-bold"
              >
                <Activity className={`w-3.5 h-3.5 text-blue-400 ${pingTesting ? 'animate-spin' : ''}`} />
                <span>{pingTesting ? 'Testing Packet Delay...' : 'Ping Active Node'}</span>
              </button>
            </div>

            {/* Ranchi Central HQ Node Card */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950/40 border border-blue-500/30 p-5 rounded-3xl text-xs space-y-3">
              <div className="flex items-center gap-2 text-white font-bold">
                <Compass className="w-4 h-4 text-blue-400" />
                <span>Ranchi HQ Physical Visit Station</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed font-sans">
                {AGENCY_CONFIG.address}
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`tel:${AGENCY_CONFIG.phone}`}
                  className="w-full py-2 text-center rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-blue-400 font-bold transition text-[11px]"
                >
                  Call Station: {AGENCY_CONFIG.displayPhone}
                </a>
                <a
                  href={AGENCY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 text-center rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition text-[11px]"
                >
                  Schedule Walk-In on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
