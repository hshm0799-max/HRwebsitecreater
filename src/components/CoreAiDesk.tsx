import { useState, useEffect, useRef } from 'react';
import {
  Bot,
  X,
  Volume2,
  VolumeX,
  Send,
  MessageSquare,
  Sparkles,
  Minimize2,
  Maximize2,
  Zap,
  Clock,
  Compass,
} from 'lucide-react';
import { ActiveModuleId, AiChatMessage } from '../types';
import { AGENCY_CONFIG } from '../data/agencyData';

interface CoreAiDeskProps {
  onNavigate: (mod: ActiveModuleId) => void;
}

export function CoreAiDesk({ onNavigate }: CoreAiDeskProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [voiceEnabled, setVoiceEnabled] = useState<boolean>(false);
  const [messages, setMessages] = useState<AiChatMessage[]>([
    {
      id: 'msg-init',
      sender: 'jarvis',
      text: 'Hello! I am the HRwesitecreateragency Core AI Assistant. How can our Ranchi HQ & Lucknow Engineering teams assist you with 3D Web, Full-Stack Architecture, or Google AI SEO solutions today?',
      timestamp: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Speech function using browser Web Speech API
  const speakText = (text: string) => {
    if (!voiceEnabled || !('speechSynthesis' in window)) return;

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.lang = 'en-IN';

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    } catch {
      setIsSpeaking(false);
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning.';
    if (hour < 18) return 'Good afternoon.';
    return 'Good evening.';
  };

  const handleCommand = (query: string) => {
    const q = query.toLowerCase().trim();
    if (!q) return;

    const userMsg: AiChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    // Process logic inspired by JarvisAssistant
    let reply = '';
    let actionTaken = '';

    if (q.includes('open google')) {
      reply = 'Opening Google search engine matrix in new window.';
      actionTaken = 'Opened Google';
      window.open('https://google.com', '_blank');
    } else if (q.includes('open youtube')) {
      reply = 'Opening YouTube video hub in new window.';
      actionTaken = 'Opened YouTube';
      window.open('https://youtube.com', '_blank');
    } else if (q.includes('what time is it') || q.includes('current time') || q.includes('time')) {
      const nowStr = new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
      });
      reply = `The current system time at Ranchi Core Station is ${nowStr} IST.`;
    } else if (q.includes('pricing') || q.includes('price') || q.includes('cost') || q.includes('rate')) {
      reply =
        'We offer 4 primary architecture tiers: Starter Core Pack (₹10,000 - ₹15,000), Professional Growth (₹20,000 - ₹25,000), Advanced API Engine (₹50,000), and Enterprise Deep Multi-Layer (₹1 Lakh - ₹2 Lakh). Switching view to Pricing Matrix.';
      onNavigate('pricing');
    } else if (q.includes('ranchi') || q.includes('location') || q.includes('address') || q.includes('hq')) {
      reply = `Ranchi HQ Location: ${AGENCY_CONFIG.address}. Coordinates: 23.3681° N, 85.3087° E. Switching view to Ranchi Command HQ.`;
      onNavigate('contact');
    } else if (q.includes('review') || q.includes('client') || q.includes('feedback')) {
      reply = 'Opening verified client review logs from 5,000+ corporate clients.';
      onNavigate('reviews');
    } else if (q.includes('milestone') || q.includes('progress') || q.includes('status') || q.includes('phase') || q.includes('track')) {
      reply = 'Switching to Real-Time Project Milestone Progress Tracker. You can monitor the exact sprint phase and live commits of your web project.';
      onNavigate('milestones');
    } else if (q.includes('calculator') || q.includes('estimate')) {
      reply = 'Loading the Instant Architecture Cost Estimator suite.';
      onNavigate('calculator');
    } else if (q.includes('fullstack') || q.includes('terminal') || q.includes('backend')) {
      reply = 'Accessing isolated FullStack compute laboratory and Linux terminal diagnostics.';
      onNavigate('fullstack');
    } else if (q.includes('who are you') || q.includes('jarvis') || q.includes('hello') || q.includes('hi')) {
      const greeting = getGreeting();
      reply = `${greeting} I am the HRwesitecreateragency Core AI Assistant, running on Ranchi V8 high-velocity node. Standing by for your command!`;
    } else if (q.includes('talk to dev') || q.includes('whatsapp') || q.includes('call') || q.includes('contact')) {
      reply = `Connecting to Ranchi Chief Architect node on WhatsApp (+91 7061899614).`;
      window.open(AGENCY_CONFIG.whatsappUrl, '_blank');
    } else {
      reply =
        'Command received. Our engineering units deploy 5-Layer to 20-Layer deep network web structures with zero-loading layout metrics. You can explore our live pricing matrix or contact our developer on WhatsApp.';
    }

    setTimeout(() => {
      const botMsg: AiChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'jarvis',
        text: reply,
        timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
        commandExecuted: actionTaken,
      };
      setMessages((prev) => [...prev, botMsg]);
      speakText(reply);
    }, 350);
  };

  if (!isOpen) {
    return (
      <button
        id="core-ai-desk-open-pill"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-slate-900/90 border border-purple-500/50 shadow-2xl glass-cyber-panel text-purple-400 hover:text-white hover:scale-110 transition duration-300 flex items-center gap-2 font-mono text-xs"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping" />
        <Bot className="w-5 h-5 text-purple-400" />
        <span className="font-bold hidden sm:inline">CORE AI DESK</span>
      </button>
    );
  }

  return (
    <div
      id="core-ai-desk-widget"
      className={`fixed bottom-6 right-4 sm:right-6 z-50 transition-all duration-300 ${
        isMinimized ? 'w-80' : 'max-w-sm sm:max-w-md w-[calc(100vw-2rem)] sm:w-96'
      } bg-slate-950/95 border border-purple-500/40 rounded-2xl shadow-2xl glass-cyber-panel font-mono overflow-hidden`}
    >
      {/* Titlebar */}
      <div className="flex justify-between items-center bg-slate-900/90 px-4 py-3 border-b border-slate-800 text-purple-400 text-xs font-bold">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
          <Bot className="w-4 h-4 text-purple-400" />
          <span>CORE AI DESK // JARVIS NODE</span>
          {isSpeaking && <span className="text-[10px] text-emerald-400 animate-pulse">[SPEAKING]</span>}
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <button
            title={voiceEnabled ? 'Mute Voice' : 'Enable Speech'}
            onClick={() => {
              setVoiceEnabled(!voiceEnabled);
              if (!voiceEnabled) {
                speakText('Voice synthesis activated. Standing by for command.');
              }
            }}
            className="hover:text-purple-400 transition"
          >
            {voiceEnabled ? <Volume2 className="w-4 h-4 text-purple-400" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            title={isMinimized ? 'Expand' : 'Minimize'}
            onClick={() => setIsMinimized(!isMinimized)}
            className="hover:text-white transition"
          >
            {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
          </button>
          <button title="Close" onClick={() => setIsOpen(false)} className="hover:text-red-400 transition">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Chat message stream */}
          <div className="p-3.5 space-y-3 max-h-60 sm:max-h-72 overflow-y-auto text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-xl max-w-[88%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-blue-600 text-white font-sans'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 font-sans'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-slate-600 mt-0.5 px-1">{m.timestamp}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Command Prompt Chips */}
          <div className="px-3 pt-2 pb-1 flex flex-wrap gap-1.5 border-t border-slate-900 text-[10px]">
            <button
              onClick={() => handleCommand('what are the pricing tiers?')}
              className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-purple-300 transition"
            >
              Check Price
            </button>
            <button
              onClick={() => handleCommand('what time is it')}
              className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 transition"
            >
              System Time
            </button>
            <button
              onClick={() => handleCommand('ranchi hq address')}
              className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 transition"
            >
              Ranchi HQ
            </button>
            <button
              onClick={() => handleCommand('talk to dev')}
              className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-emerald-400 transition"
            >
              WhatsApp Dev
            </button>
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(inputText);
            }}
            className="p-3 border-t border-slate-800/80 flex items-center gap-2 bg-slate-950"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Speak/Type Command ->"
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-purple-500 font-mono"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition shrink-0"
              title="Send Command"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Quick Dual Action Footer */}
          <div className="grid grid-cols-2 gap-2 p-2.5 pt-0 text-[10px] font-bold uppercase tracking-wider font-mono">
            <button
              onClick={() => onNavigate('pricing')}
              className="py-2 text-center bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition"
            >
              Check Price
            </button>
            <a
              href={AGENCY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-center bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-emerald-400 transition"
            >
              Talk To Dev
            </a>
          </div>
        </>
      )}
    </div>
  );
}
