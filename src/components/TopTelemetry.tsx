import { useState, useEffect } from 'react';
import { Radio, Phone, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

export function TopTelemetry() {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="top-telemetry-bar"
      className="w-full bg-slate-950/95 border-b border-slate-900 text-xs py-2 px-4 sm:px-6 flex flex-wrap justify-between items-center z-50 relative font-mono text-slate-400 gap-2"
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center text-slate-300">
          <Radio className="w-3.5 h-3.5 text-blue-500 mr-1.5 animate-pulse" />
          <span className="text-blue-400 font-semibold">{AGENCY_CONFIG.locationNode}</span>
        </span>
        <span className="hidden sm:inline-block text-slate-600">|</span>
        <span className="hidden sm:flex items-center gap-1 text-emerald-400">
          <ShieldCheck className="w-3 h-3 text-emerald-500" />
          <span>AES-256 Protocol Live</span>
        </span>
      </div>

      <div className="flex items-center gap-3 sm:gap-5 text-[11px]">
        {timeStr && (
          <span className="hidden md:flex items-center gap-1 text-slate-500">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>{timeStr}</span>
          </span>
        )}
        <a
          id="top-call-link"
          href={`tel:${AGENCY_CONFIG.phone}`}
          className="hover:text-blue-400 flex items-center gap-1 transition"
        >
          <Phone className="w-3 h-3 text-blue-400" />
          <span className="font-semibold">{AGENCY_CONFIG.displayPhone}</span>
        </a>
        <a
          id="top-whatsapp-link"
          href={AGENCY_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold transition"
        >
          <MessageCircle className="w-3 h-3 text-emerald-400" />
          <span>Chat Support Live</span>
        </a>
      </div>
    </div>
  );
}
