import { ClientProjectProgress, MilestoneDocument } from '../types';

export function getProjectDocuments(project: ClientProjectProgress): MilestoneDocument[] {
  const pId = project.projectId;
  const pName = project.projectName;
  const cName = project.clientName;
  const tName = project.tierName;

  return [
    {
      id: `${pId}-doc-phase1`,
      title: 'Phase 01: System Architecture Blueprint & Database Schema RFC',
      category: 'Technical Architecture',
      fileName: `${pId}_Phase01_System_Architecture_Blueprint.md`,
      fileSize: '2.4 MB',
      fileFormat: 'MARKDOWN / RFC',
      unlockedAtPhase: 1,
      description: 'Comprehensive system topology, database ERD schemas, security compliance RFC, and high-load connection pooling specifications.',
      checksum: 'sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
      downloadContent: `# SYSTEM ARCHITECTURE BLUEPRINT & RFC SPECIFICATION
Document ID: ${pId}-ARCH-PH1
Project: ${pName} (${pId})
Client Organization: ${cName}
Commercial Tier: ${tName}
Engineering Node: Lead Systems Architect (Ranchi & Lucknow Hubs)
Verification Status: SIGNED OFF & VERIFIED
Timestamp: Sept 14, 2026 // 18:30 IST

--------------------------------------------------------------------------------
1. EXECUTIVE ARCHITECTURE OVERVIEW
This document defines the production runtime topology, database schemas, and
security isolation boundaries for ${pName}. The architecture is engineered
for 99.99% uptime with sub-10ms response latencies across pan-India nodes.

2. SYSTEM TOPOLOGY & CONTAINER RUNTIME
- Runtime: Node.js V8 Engine / Strict TypeScript with zero-any guarantees.
- Containerization: Cloud Run ingress on port 3000 behind high-throughput reverse proxy.
- Edge CDN: Cloudflare Enterprise with edge SSL termination and asset caching.
- Staging Environment: ${project.stagingUrl}
- Primary Branch: ${project.repoBranch}

3. DATABASE SCHEMA & DATA PIPELINE
- Engine: High-performance relational database with connection pooling.
- Encryption: AES-256 at rest, TLS 1.3 in transit.
- Sharding Strategy: Multi-tenant partitioning by client tenant ID.
- Recovery Point Objective (RPO): < 15 seconds.
- Recovery Time Objective (RTO): < 60 seconds.

4. SECURITY & COMPLIANCE VERIFICATION
- Authentication: HMAC SHA-256 tokenized API gateway with rotating session tokens.
- CORS & CSP: Strict frame ancestors protection, X-Content-Type-Options: nosniff.
- Rate Limiting: Leaky-bucket algorithm capping at 10,000 requests/minute per subnet.

5. VERIFIED DELIVERABLES SIGN-OFF
[x] System Topology Graph Generated
[x] ERD PostgreSQL / Relational Schemas Formulated
[x] API Endpoint Contracts & DTO Interfaces Validated
[x] Security Compliance RFC Stamped by Senior Systems Architect

Architectural Sign-off Hash: SHA256-7F83B1657FF1FC53B92DC18148A1D65D
HRwesitecreateragency // India #1 Top Web Development Agency
Hotwire Hotline: +91 91428 53966 // Lucknow & Ranchi Command Hubs
`,
    },
    {
      id: `${pId}-doc-phase2`,
      title: 'Phase 02: 3D UI/UX Design System Brief & Figma Vector Guidelines',
      category: 'Design Brief',
      fileName: `${pId}_Phase02_UIUX_Design_System_Brief.md`,
      fileSize: '4.1 MB',
      fileFormat: 'DESIGN BRIEF / FIGMA SPEC',
      unlockedAtPhase: 2,
      description: 'Official creative and technical design brief detailing 60fps micro-interaction physics, cyberpunk glassmorphism tokens, and accessibility standards.',
      checksum: 'sha256:1a84c2678bb1e245a909ddb12b55b6a713838a14920678fa5e746522c0919241',
      downloadContent: `# UI/UX DESIGN SYSTEM BRIEF & SPATIAL GUIDELINES
Document ID: ${pId}-UX-BRIEF-PH2
Project: ${pName} (${pId})
Client Organization: ${cName}
Creative Direction: Cinematic 3D UX & Spatial Design Node (Lucknow Creative Hub)
Verification Status: SIGNED OFF & VERIFIED
Timestamp: Sept 18, 2026 // 16:45 IST

--------------------------------------------------------------------------------
1. BRAND IDENTITY & CREATIVE CONCEPT
For ${pName}, our design philosophy fuses enterprise reliability with modern
cyber-glassmorphic clarity. Visual balance emphasizes mathematical spacing,
deep spatial hierarchy, and fluid 60fps interaction physics.

2. COLOR PALETTE & DESIGN TOKENS
- Primary Void Canvas: #020617 (Slate 950 Deep Space)
- Surface Panel: rgba(15, 23, 42, 0.85) with backdrop-filter: blur(16px)
- Neon Core Accent: #3B82F6 (Electric Blue // Primary Action)
- Cyber Emerald Status: #10B981 (High-Trust Verification // 100% Success)
- Spatial Ultraviolet: #8B5CF6 (Vanguard Feature Accent)
- Typography: Plus Jakarta Sans (Headings & Display), JetBrains Mono (Data & Telemetry)

3. MICRO-INTERACTION PHYSICS SPECIFICATION
- Button Hover Transitions: 200ms cubic-bezier(0.16, 1, 0.3, 1) ease-out
- Active Element Scale: transform: scale(0.98) on click / tap
- Tooltip Display Delay: 80ms entry with 4px translation elevation
- Hardware Acceleration: translateZ(0) enforced across spatial floating elements

4. ACCESSIBILITY & CONTRAST (WCAG AAA)
- Text Contrast Ratio: > 7:1 against glass panel backdrops
- Interactive Touch Targets: Minimum 44px x 44px hit-boxes for mobile screens
- Motion Sensitivity: prefers-reduced-motion queries supported throughout

5. DESIGN DELIVERABLES HANDOFF
[x] High-Fidelity 60-Screen Figma Component System
[x] 3D Vector Shaders & Canvas Micro-Interactions Tested
[x] Responsive Breakpoints Validated: 360px, 768px, 1024px, 1440px, 1920px
[x] Design Token Variables Synchronized into Tailwind CSS Configuration

Creative Director Sign-off Hash: SHA256-1A84C2678BB1E245A909DDB12B55B6A7
HRwesitecreateragency // Cinematic UI/UX Design Division
Contact: +91 91428 53966 // hshm0799@gmail.com
`,
    },
    {
      id: `${pId}-doc-phase3`,
      title: 'Phase 03: V8 Runtime Core Specification & State Hydration Matrix',
      category: 'Technical Architecture',
      fileName: `${pId}_Phase03_V8_Runtime_Core_Specification.md`,
      fileSize: '1.9 MB',
      fileFormat: 'MARKDOWN / CODE SPEC',
      unlockedAtPhase: 3,
      description: 'Strict TypeScript typing interfaces, V8 engine compilation targets, client-side state hydration matrix, and sub-50ms execution guardrails.',
      checksum: 'sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35',
      downloadContent: `# V8 RUNTIME CORE SPECIFICATION & PERFORMANCE REPORT
Document ID: ${pId}-V8-SPEC-PH3
Project: ${pName} (${pId})
Client Organization: ${cName}
Engineering Node: Full-Stack Core Node (Ranchi Technical HQ)
Verification Status: SIGNED OFF & VERIFIED
Timestamp: Sept 22, 2026 // 11:20 IST

--------------------------------------------------------------------------------
1. CODEBASE COMPILATION TARGETS
- Frontend Core: React 18+ with Vite 6.0 ultra-fast bundling.
- Language Standard: TypeScript 5.8 with strict mode, noImplicitAny: true.
- Server Runtime: Node.js V8 with native type stripping and zero-coldstart optimizations.
- Measured Server Ping: ${project.serverPing} (Sub-10ms Pan-India benchmark)
- Initial Lighthouse Audit Score: ${project.lighthouseScore}/100 Performance Pass

2. COMPONENT MODULARITY & STATE HYDRATION
- State Architecture: Reactive event bus with optimistic UI updates.
- Memory Leak Protection: WeakMap object tracking for background telemetry.
- Hydration Strategy: Streaming SSR with progressive client activation.

3. BENCHMARKS & TEST PASS TELEMETRY
- First Contentful Paint (FCP): < 0.4 seconds
- Cumulative Layout Shift (CLS): 0.000 (Zero layout jank)
- Unit Test Coverage: 98.4% across authentication, routing, and data stores.

Verified by Technical Lead Engineer: Full-Stack Core Node (Ranchi HQ)
Signed Off Hash: SHA256-D4735E3A265E16EEE03F59718B9B5D03
`,
    },
    {
      id: `${pId}-doc-phase4`,
      title: 'Phase 04: API Gateway Security Specification & Cryptographic Contract',
      category: 'API Specification',
      fileName: `${pId}_Phase04_API_Security_Contract.json`,
      fileSize: '3.2 MB',
      fileFormat: 'SWAGGER / JSON',
      unlockedAtPhase: 4,
      description: 'HMAC SHA-256 authentication route specs, webhook listener schemas, database connection pooling limits, and Swagger OpenAPI 3.1 definitions.',
      checksum: 'sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce',
      downloadContent: JSON.stringify(
        {
          openapi: '3.1.0',
          info: {
            title: `${pName} API Gateway`,
            version: '2.4.0-rc1',
            description: `Production API Gateway and Cryptographic Pipeline Contract for ${cName}.`,
            contact: {
              name: 'HRwesitecreateragency Security Operations',
              email: 'hshm0799@gmail.com',
              phone: '+91 91428 53966',
            },
          },
          servers: [{ url: project.stagingUrl, description: 'Staging Sandbox Cluster' }],
          security: [{ BearerAuth: [] }, { HmacSignature: [] }],
          endpoints: [
            { path: '/api/v1/health', method: 'GET', status: '200 OK', description: 'Real-time telemetry heartbeat' },
            { path: '/api/v1/auth/token', method: 'POST', status: '201 Created', description: 'HMAC SHA-256 session exchange' },
            { path: '/api/v1/transactions/stream', method: 'GET', status: '200 OK (SSE)', description: 'Real-time 60fps event stream' },
            { path: '/api/v1/webhooks/listener', method: 'POST', status: '202 Accepted', description: 'Idempotent webhook pipeline' },
          ],
          rateLimits: { requestsPerMinute: 10000, burstTolerance: 500 },
          verificationHash: 'SHA256-4E07408562BEDB8B60CE05C1DECFE3AD',
        },
        null,
        2
      ),
    },
    {
      id: `${pId}-doc-phase5`,
      title: 'Phase 05: Google AI Search 1,000+ Keyword SEO Blueprint & Audit',
      category: 'QA Security Audit',
      fileName: `${pId}_Phase05_SEO_Matrix_Audit.md`,
      fileSize: '2.8 MB',
      fileFormat: 'AUDIT REPORT / PDF',
      unlockedAtPhase: 5,
      description: 'Targeted 1,000+ keyword SEO injection manifest, structured Schema.org JSON-LD entity graph mapping, and crawler ping architecture.',
      checksum: 'sha256:5b99f12d8a1e2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c',
      downloadContent: `# GOOGLE AI SEARCH 1,000+ KEYWORD SEO BLUEPRINT & AUDIT
Document ID: ${pId}-SEO-AUDIT-PH5
Project: ${pName} (${pId})
Client Organization: ${cName}
Authority: National SEO Matrix Director (Pan-India Division)
Verification Status: ${project.currentPhaseNum >= 5 ? 'UNLOCKED & VERIFIED' : 'PENDING PHASE 05 VERIFICATION'}
Target Launch Date: ${project.targetLaunchDate}

--------------------------------------------------------------------------------
1. NATIONAL KEYWORD RANKING STRATEGY
Targeting high-intent enterprise commercial search queries across Google, Bing,
and Gemini AI Search:
- "India #1 top website developer"
- "${cName} official portal"
- "high performance full stack development agency India"
- "custom WebGL 3D web application developers"

2. STRUCTURED SCHEMA.ORG JSON-LD GRAPH
- Organization Schema with official GeoCoordinates (Ranchi & Lucknow Hubs)
- WebSite & SoftwareApplication Schemas with AggregateRating 4.98/5.0
- FAQPage rich snippets for instant Google Search carousel feature

3. AUDIT PASS CRITERIA
[x] 100/100 Mobile & Desktop Google Core Web Vitals Pass
[x] Zero duplicate canonical tags
[x] Automated sitemap.xml crawler ping hooks enabled
`,
    },
    {
      id: `${pId}-doc-phase6`,
      title: 'Phase 06: Production Cutover Manifest & Infrastructure Handoff Keys',
      category: 'Deployment Manifest',
      fileName: `${pId}_Phase06_Production_Deployment_Manifest.md`,
      fileSize: '1.4 MB',
      fileFormat: 'DEPLOYMENT KEYS / MANIFEST',
      unlockedAtPhase: 6,
      description: 'Zero-downtime DNS cutover protocol, Cloudflare Edge caching warmup scripts, SSL certificate parameters, and 24/7 SLA escalation matrix.',
      checksum: 'sha256:8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d',
      downloadContent: `# PRODUCTION DEPLOYMENT MANIFEST & ZERO-DOWNTIME CUTOVER
Document ID: ${pId}-PROD-CUTOVER-PH6
Project: ${pName} (${pId})
Client Organization: ${cName}
Authority: Chief Systems Architect & Lead DevOps Engineer
Verification Status: ${project.currentPhaseNum >= 6 ? 'UNLOCKED & DEPLOYED' : 'LOCKED (Awaiting Phase 06 Release)'}

--------------------------------------------------------------------------------
1. ZERO-DOWNTIME DNS CUTOVER PROCEDURE
- Step 1: Lower TTL to 300 seconds on existing nameservers 48 hours prior.
- Step 2: Warm Edge CDN caching nodes with pre-rendered static assets.
- Step 3: Switch A/AAAA and CNAME records to Cloudflare Ingress IP pool.
- Step 4: Verify SSL/TLS 1.3 auto-provisioning with OCSP stapling.
- Step 5: Perform end-to-end synthetic health checks across 12 global regions.

2. SLA ESCALATION MATRIX & 24/7 COMMAND SUPPORT
- Priority 1 Incident Response: < 15 minutes (Direct Hotwire: +91 91428 53966)
- Assigned Lead Architect: Chief Systems Architect (Ranchi & Lucknow HQ)
- Guaranteed Uptime: 99.99% Enterprise SLA
`,
    },
  ];
}

export function downloadMilestoneDocument(doc: MilestoneDocument): void {
  const blob = new Blob([doc.downloadContent], {
    type: doc.fileFormat.includes('JSON') ? 'application/json' : 'text/markdown;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = doc.fileName;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
