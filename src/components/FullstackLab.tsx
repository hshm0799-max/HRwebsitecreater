import { useState } from 'react';
import { Terminal, Play, Server, Database, Shield, Cpu, Layers, HardDrive } from 'lucide-react';

export function FullstackLab() {
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; out: string }>>([
    {
      cmd: 'systemctl status hragency-backend-node.service',
      out: `● hragency-backend-node.service - Ranchi High-Velocity Compute Cluster
     Loaded: loaded (/etc/systemd/system/hragency-backend-node.service; enabled; vendor preset: enabled)
     Active: active (running) since Tue 2026-09-22 08:14:02 IST; 14h ago
   Main PID: 10482 (node /var/www/ranchi-node/server.cjs)
      Tasks: 18 (limit: 4915)
     Memory: 64.2M (peak: 88.4M)
        CPU: 12.4s
     CGroup: /system.slice/hragency-backend-node.service
             ├─10482 node /var/www/ranchi-node/server.cjs
             └─10499 /usr/bin/redis-server 127.0.0.1:6379

Sep 22 08:14:02 ranchi-hq-srv systemd[1]: Started Ranchi High-Velocity Compute Cluster.
Sep 22 08:14:03 ranchi-hq-srv node[10482]: [RANCHI_NODE] Socket & RESTful Gateway initialized on 0.0.0.0:3000
Sep 22 08:14:03 ranchi-hq-srv node[10482]: [SSL_ENCRYPTION] Active with TLSv1.3 & HTTP/2 Multiplexing
Sep 22 14:20:11 ranchi-hq-srv node[10482]: [PAYLOAD] 5,420 token requests dispatched with 0% dropped packets.`,
    },
  ]);

  const [inputCmd, setInputCmd] = useState('');

  const commandPresets: { [key: string]: string } = {
    'systemctl status hragency-backend-node.service': `● hragency-backend-node.service - Ranchi High-Velocity Compute Cluster
   Active: active (running) - Processing structural payload tokens smoothly.
   Memory: 64.2MB | Uptime: 99.98% | Latency: 12ms`,

    'curl -I https://hrwebsitecreateragency.in/api/v1/health': `HTTP/2 200 OK
date: Tue, 22 Sep 2026 08:30:11 GMT
server: HR-Cinematic-Engine/4.2 (Ranchi Node)
content-type: application/json; charset=utf-8
x-powered-by: Express / Next.js Cluster
strict-transport-security: max-age=31536000; includeSubDomains
x-frame-options: SAMEORIGIN
x-content-type-options: nosniff
content-encoding: gzip
status: HEALTHY_ACTIVE_PIPELINE`,

    'docker ps': `CONTAINER ID   IMAGE                         COMMAND                  CREATED        STATUS        PORTS                    NAMES
a8f9104c99b2   hragency/3d-renderer:v4       "node server.js"         3 days ago     Up 3 days     0.0.0.0:3000->3000/tcp   web-mesh-1
f7e819b2a114   redis:7-alpine                "docker-entrypoint.s…"   3 weeks ago    Up 3 weeks    127.0.0.1:6379/tcp       redis-cache-1
b2c148e99a71   postgres:16-alpine            "docker-entrypoint.s…"   3 weeks ago    Up 3 weeks    127.0.0.1:5432/tcp       pg-matrix-db`,

    'htop --batch': `Tasks: 142 total, 1 running, 141 sleeping
CPU:  [||||||||||||                                        18.4%]
Mem:  [|||||||||||||||||||||||||             1.42G / 16.0G (8.8%)]
Swp:  [                                            0B / 4.0G (0%)]
Top Process: /usr/local/bin/node /app/cluster.ts (Load avg: 0.14, 0.18, 0.12)`,

    'cat /etc/hragency/security-policy.json': `{
  "station": "Ranchi HQ Core Node",
  "layerArchitecture": "5 to 20 Deep Networks",
  "encryption": "AES-256-GCM + Ed25519 Token Signatures",
  "ddosMitigation": "Cloudflare Enterprise Bypass Guard",
  "crawlerIndexing": "Googlebot Instant Webhook ping",
  "coldStartPolicy": "Pre-warmed V8 snapshot isolates"
}`,
  };

  const handleExecute = (cmdToRun: string) => {
    const trimmed = cmdToRun.trim();
    if (!trimmed) return;

    let response = commandPresets[trimmed];
    if (!response) {
      if (trimmed.toLowerCase().includes('help')) {
        response = `Available terminal diagnostic commands:
  - systemctl status hragency-backend-node.service
  - curl -I https://hrwebsitecreateragency.in/api/v1/health
  - docker ps
  - htop --batch
  - cat /etc/hragency/security-policy.json
  - clear`;
      } else if (trimmed === 'clear') {
        setTerminalHistory([]);
        setInputCmd('');
        return;
      } else {
        response = `[Ranchi Core Console]: Command executed for '${trimmed}'. System output recorded. Node status intact.`;
      }
    }

    setTerminalHistory((prev) => [...prev, { cmd: trimmed, out: response }]);
    setInputCmd('');
  };

  return (
    <section id="fullstack-lab-section" className="py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-3">
            <Server className="w-3.5 h-3.5" />
            <span>MODULE 06 // ISOLATED FULL-STACK COMPUTE ENVIRONMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-mono">
            FullStack Lab & Cloud Pipelines
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto mt-2">
            MERN Stack, Next.js Clusters, aur cloud-native continuous deployments humare routine pipelines hain. Zero
            redundancy, native microservices, and extreme throughput.
          </p>
        </div>

        {/* Diagnostic Command Bar */}
        <div className="mb-4 flex flex-wrap gap-2 items-center font-mono text-[11px]">
          <span className="text-slate-500">Quick Diagnostics:</span>
          {Object.keys(commandPresets).map((presetKey, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleExecute(presetKey)}
              className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50 transition flex items-center gap-1"
            >
              <Play className="w-2.5 h-2.5 text-blue-400" />
              <span>{presetKey.split(' ')[0]}</span>
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleExecute('clear')}
            className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-500 hover:text-red-400 transition"
          >
            clear
          </button>
        </div>

        {/* Terminal UI */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
          {/* Terminal Titlebar */}
          <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex justify-between items-center text-slate-400">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] text-slate-300 ml-2">
                ranchi-core-cluster@hrwebsitecreateragency:~
              </span>
            </div>
            <div className="text-[10px] text-emerald-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ONLINE // SHARD 01</span>
            </div>
          </div>

          {/* Terminal Console Output */}
          <div className="p-5 space-y-4 max-h-[420px] overflow-y-auto leading-relaxed text-slate-300">
            {terminalHistory.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center gap-2 text-blue-400">
                  <span className="text-emerald-400 font-bold">root@ranchi-hq:~$</span>
                  <span className="text-slate-100 font-semibold">{item.cmd}</span>
                </div>
                <pre className="text-[11px] text-slate-400 whitespace-pre-wrap pl-4 font-mono bg-slate-900/30 p-2.5 rounded-lg border border-slate-900">
                  {item.out}
                </pre>
              </div>
            ))}
          </div>

          {/* Interactive input line */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleExecute(inputCmd);
            }}
            className="p-3 bg-slate-900/60 border-t border-slate-800 flex items-center gap-2"
          >
            <span className="text-emerald-400 font-bold pl-2">root@ranchi-hq:~$</span>
            <input
              type="text"
              value={inputCmd}
              onChange={(e) => setInputCmd(e.target.value)}
              placeholder="Type command or 'help'..."
              className="flex-1 bg-transparent text-slate-100 focus:outline-none text-xs font-mono"
            />
            <button
              type="submit"
              className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[11px]"
            >
              Run
            </button>
          </form>
        </div>

        {/* Full-Stack Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 font-mono text-xs">
          <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
            <div className="text-blue-400 font-bold mb-1 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>V8 Runtime Engines</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Sub-millisecond cold starts using pre-compiled TSX & ESBuild pipelines with native node isolates.
            </p>
          </div>
          <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
            <div className="text-purple-400 font-bold mb-1 flex items-center gap-2">
              <Database className="w-4 h-4" />
              <span>Database Mesh</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              PostgreSQL relational schemas with Drizzle ORM paired with Redis in-memory caching layers.
            </p>
          </div>
          <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
            <div className="text-emerald-400 font-bold mb-1 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Enterprise Isolation</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Encrypted environment variables, zero browser key leaks, and cryptographic tokenized auth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
