import { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  GitBranch,
  GitCommit,
  ExternalLink,
  Shield,
  Layers,
  Sparkles,
  ArrowRight,
  Search,
  Activity,
  User,
  Calendar,
  AlertCircle,
  FileCode,
  Gauge,
  ThumbsUp,
  MessageSquare,
  ChevronRight,
  Lock,
  Download,
  Check,
  Info,
  CheckCheck,
  Workflow,
  Bell,
  BellRing,
  Mail,
  Smartphone,
  X,
  Send,
} from 'lucide-react';
import { CLIENT_PROJECTS_DATA, AGENCY_CONFIG } from '../data/agencyData';
import { ClientProjectProgress, ProjectMilestonePhase } from '../types';

export function ProjectMilestoneTracker() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('PROJ-IND-9021');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedPhaseId, setExpandedPhaseId] = useState<string>('p4');
  const [hoveredPhaseId, setHoveredPhaseId] = useState<string | null>(null);
  const [approvedMilestones, setApprovedMilestones] = useState<Record<string, boolean>>({});
  const [feedbackSuccess, setFeedbackSuccess] = useState<string | null>(null);
  const [showSubscribeModal, setShowSubscribeModal] = useState<boolean>(false);
  const [testAlertSent, setTestAlertSent] = useState<boolean>(false);

  // Real-time project notifications subscription directory
  const [subscriptions, setSubscriptions] = useState<
    Record<
      string,
      {
        email: string;
        phone: string;
        channel: 'email' | 'sms' | 'both';
        onPhaseSignoff: boolean;
        onDeploy: boolean;
        onDigest: boolean;
        timestamp: string;
      }
    >
  >({
    'PROJ-IND-9021': {
      email: 'client.contact@apexfin.io',
      phone: '+91 98351 22910',
      channel: 'both',
      onPhaseSignoff: true,
      onDeploy: true,
      onDigest: true,
      timestamp: '2026-09-20 10:15 IST',
    },
  });

  const [subscribeForm, setSubscribeForm] = useState({
    email: '',
    phone: '',
    channel: 'both' as 'email' | 'sms' | 'both',
    onPhaseSignoff: true,
    onDeploy: true,
    onDigest: true,
  });

  // Active project selection
  const currentProject =
    CLIENT_PROJECTS_DATA.find((p) => p.projectId === selectedProjectId) || CLIENT_PROJECTS_DATA[0];

  const currentSubscription = subscriptions[currentProject.projectId];
  const isCurrentProjectSubscribed = Boolean(currentSubscription);

  const openSubscribeModal = () => {
    if (currentSubscription) {
      setSubscribeForm({
        email: currentSubscription.email,
        phone: currentSubscription.phone,
        channel: currentSubscription.channel,
        onPhaseSignoff: currentSubscription.onPhaseSignoff,
        onDeploy: currentSubscription.onDeploy,
        onDigest: currentSubscription.onDigest,
      });
    } else {
      setSubscribeForm({
        email: '',
        phone: '',
        channel: 'both',
        onPhaseSignoff: true,
        onDeploy: true,
        onDigest: true,
      });
    }
    setTestAlertSent(false);
    setShowSubscribeModal(true);
  };

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeForm.email.trim() && !subscribeForm.phone.trim()) {
      return;
    }

    const nowStr = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    setSubscriptions((prev) => ({
      ...prev,
      [currentProject.projectId]: {
        ...subscribeForm,
        timestamp: `${nowStr} IST`,
      },
    }));

    setShowSubscribeModal(false);
    const destination =
      subscribeForm.channel === 'both'
        ? `${subscribeForm.email || 'Email'} & ${subscribeForm.phone || 'SMS'}`
        : subscribeForm.channel === 'email'
        ? subscribeForm.email
        : subscribeForm.phone;

    setFeedbackSuccess(
      `Real-time alerts active for [${currentProject.projectId}]! Updates routed via ${subscribeForm.channel.toUpperCase()} to ${destination}.`
    );
    setTimeout(() => setFeedbackSuccess(null), 6000);
  };

  const handleUnsubscribe = () => {
    setSubscriptions((prev) => {
      const copy = { ...prev };
      delete copy[currentProject.projectId];
      return copy;
    });
    setShowSubscribeModal(false);
    setFeedbackSuccess(`Unsubscribed from progress alerts for [${currentProject.projectId}].`);
    setTimeout(() => setFeedbackSuccess(null), 4000);
  };

  const handleSendTestPing = () => {
    setTestAlertSent(true);
    setTimeout(() => setTestAlertSent(false), 3500);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const matched = CLIENT_PROJECTS_DATA.find(
      (p) =>
        p.projectId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.clientName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matched) {
      setSelectedProjectId(matched.projectId);
      setFeedbackSuccess(null);
    } else {
      setFeedbackSuccess(
        `Project lookup for "${searchQuery}" queued. Connecting you directly with your assigned Systems Architect.`
      );
    }
  };

  const handleApproveMilestone = (phaseId: string) => {
    setApprovedMilestones((prev) => ({ ...prev, [phaseId]: true }));
    setFeedbackSuccess('Milestone phase approved! Verification logged to project ledger.');
    setTimeout(() => setFeedbackSuccess(null), 4000);
  };

  const getStatusBadge = (status: ProjectMilestonePhase['status'], progress: number) => {
    switch (status) {
      case 'COMPLETED':
        return (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>COMPLETED [100%]</span>
          </span>
        );
      case 'IN_PROGRESS':
        return (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-blue-950/80 text-blue-300 border border-blue-500/50 flex items-center gap-1.5 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>ACTIVE SPRINT [{progress}%]</span>
          </span>
        );
      case 'QUEUED':
        return (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-purple-950/80 text-purple-300 border border-purple-500/40 flex items-center gap-1">
            <Clock className="w-3 h-3 text-purple-400" />
            <span>QUEUED NEXT</span>
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-900 border border-slate-800 text-slate-500 flex items-center gap-1">
            <Lock className="w-3 h-3 text-slate-500" />
            <span>SCHEDULED</span>
          </span>
        );
    }
  };

  return (
    <section id="project-milestone-tracker" className="py-16 px-4 sm:px-6 relative z-10 font-mono">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-400 text-xs font-bold uppercase tracking-wider shadow">
            <Activity className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>REAL-TIME CLIENT DASHBOARD // PRODUCTION PROGRESS TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            Live Project Milestone Progress Tracker
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Monitor the exact real-time engineering phases of your web development project. From architectural blueprints
            and 3D spatial wireframes to V8 runtime compilation and zero-downtime DNS cutover.
          </p>
        </div>

        {/* Client Project Selector & Search Strip */}
        <div className="p-6 rounded-3xl bg-slate-950/90 border border-slate-800 glass-cyber-panel space-y-4 shadow-xl">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Quick Project Select Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-500 text-xs font-bold uppercase mr-1 hidden sm:inline">
                Active Projects:
              </span>
              {CLIENT_PROJECTS_DATA.map((proj) => (
                <button
                  key={proj.projectId}
                  onClick={() => {
                    setSelectedProjectId(proj.projectId);
                    setFeedbackSuccess(null);
                  }}
                  className={`px-3.5 py-2 rounded-2xl border text-xs font-bold transition flex items-center gap-2 ${
                    selectedProjectId === proj.projectId
                      ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                      : 'bg-slate-900/90 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <span className="text-[10px] text-cyan-300 font-mono">[{proj.projectId}]</span>
                  <span className="truncate max-w-[140px] sm:max-w-none">{proj.clientName}</span>
                </button>
              ))}
            </div>

            {/* Custom Project ID / Domain Lookup Bar + Bell Notification Subscription Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full lg:w-auto">
              <form onSubmit={handleSearch} className="flex items-center gap-2 flex-1 sm:flex-initial">
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter Tracking ID or Domain..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-xs uppercase rounded-2xl transition shrink-0 shadow"
                >
                  Track
                </button>
              </form>

              {/* Real-Time Notification Bell Button */}
              <button
                type="button"
                onClick={openSubscribeModal}
                className={`px-3.5 py-2 rounded-2xl border text-xs font-bold transition flex items-center justify-center gap-2 shrink-0 ${
                  isCurrentProjectSubscribed
                    ? 'bg-emerald-950/90 border-emerald-500/60 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:border-emerald-400'
                    : 'bg-slate-900/90 border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/60 hover:bg-slate-800'
                }`}
                title={
                  isCurrentProjectSubscribed
                    ? `Notifications active for ${currentProject.projectId}. Click to configure preferences.`
                    : `Subscribe to real-time email or SMS progress updates for ${currentProject.projectId}`
                }
              >
                <div className="relative">
                  {isCurrentProjectSubscribed ? (
                    <BellRing className="w-4 h-4 text-emerald-400 animate-pulse" />
                  ) : (
                    <Bell className="w-4 h-4 text-cyan-400" />
                  )}
                  <span
                    className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${
                      isCurrentProjectSubscribed ? 'bg-emerald-400' : 'bg-cyan-400 animate-ping'
                    }`}
                  />
                </div>
                <span>{isCurrentProjectSubscribed ? 'Alerts Active' : 'Subscribe Alerts'}</span>
                <span className="hidden xl:inline text-[10px] text-slate-400 font-normal">
                  (SMS/Email)
                </span>
              </button>
            </div>
          </div>

          {feedbackSuccess && (
            <div className="p-3.5 rounded-2xl bg-blue-950/70 border border-blue-500/50 text-blue-200 text-xs flex items-center justify-between">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{feedbackSuccess}</span>
              </span>
              <a
                href={AGENCY_CONFIG.whatsappMessage(
                  `Hello HRwesitecreateragency! I am tracking project status for [${searchQuery || selectedProjectId}]. Please send the latest engineering update.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-[10px] font-bold uppercase transition shrink-0 ml-3"
              >
                WhatsApp Architect
              </a>
            </div>
          )}
        </div>

        {/* Selected Project Overview HUD Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 glass-cyber-panel shadow-2xl relative overflow-hidden space-y-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Title & Primary Metrics */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-950 border border-blue-500/50 text-blue-400 font-bold">
                  {currentProject.projectId}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300 font-bold">{currentProject.clientName}</span>
                <span className="text-slate-500">•</span>
                <span className="px-2.5 py-0.5 rounded-md bg-purple-950 border border-purple-500/40 text-purple-300 text-[11px]">
                  {currentProject.tierName}
                </span>

                {/* Bell Icon Quick Action in Project HUD Header */}
                <button
                  type="button"
                  onClick={openSubscribeModal}
                  className={`px-2.5 py-1 rounded-xl border text-[11px] font-mono font-bold flex items-center gap-1.5 transition ml-1 ${
                    isCurrentProjectSubscribed
                      ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300 hover:border-emerald-400'
                      : 'bg-slate-950/90 border-slate-800 text-slate-300 hover:border-cyan-400 hover:text-white'
                  }`}
                  title="Subscribe to Email or SMS Notifications for this project"
                >
                  {isCurrentProjectSubscribed ? (
                    <BellRing className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  ) : (
                    <Bell className="w-3.5 h-3.5 text-cyan-400" />
                  )}
                  <span>{isCurrentProjectSubscribed ? 'Alerts Active (Email/SMS)' : 'Notify Me (Email/SMS)'}</span>
                </button>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                {currentProject.projectName}
              </h3>
            </div>

            {/* Overall Completion Gauge */}
            <div className="flex items-center gap-4 bg-slate-950/80 p-4 rounded-2xl border border-slate-800 shrink-0">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-800"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-emerald-400 transition-all duration-1000"
                    strokeDasharray={`${currentProject.overallProgress}, 100`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute text-sm font-black text-white">{currentProject.overallProgress}%</span>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Overall Progress</div>
                <div className="text-xs font-bold text-emerald-400">
                  Phase {currentProject.currentPhaseNum} of 6 In Flight
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Target: {currentProject.targetLaunchDate}</div>
              </div>
            </div>
          </div>

          {/* Quick Telemetry Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
              <div className="text-[10px] text-slate-500 uppercase flex items-center gap-1">
                <Calendar className="w-3 h-3 text-blue-400" />
                <span>Kickoff Date</span>
              </div>
              <div className="text-white font-bold">{currentProject.startedAt}</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
              <div className="text-[10px] text-slate-500 uppercase flex items-center gap-1">
                <GitBranch className="w-3 h-3 text-purple-400" />
                <span>Active Git Branch</span>
              </div>
              <div className="text-purple-300 font-bold truncate">{currentProject.repoBranch}</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
              <div className="text-[10px] text-slate-500 uppercase flex items-center gap-1">
                <Gauge className="w-3 h-3 text-emerald-400" />
                <span>Lighthouse Target</span>
              </div>
              <div className="text-emerald-400 font-bold">{currentProject.lighthouseScore} / 100 Mobile & Desktop</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
              <div className="text-[10px] text-slate-500 uppercase flex items-center gap-1">
                <Activity className="w-3 h-3 text-cyan-400" />
                <span>Live Staging Sandbox</span>
              </div>
              <a
                href={currentProject.stagingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 truncate"
              >
                <span>Preview Sandbox</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* 6-Phase Milestone Interactive Stepper Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white uppercase flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                <span>Full-Stack Development Phases Breakdown (6 Stages)</span>
              </h3>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                Hover over any completed milestone step to inspect specific task descriptions and verified completion timestamps.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono shrink-0">
              <CheckCheck className="w-4 h-4 text-emerald-400" />
              <span>Interactive Step Tooltips Active</span>
            </div>
          </div>

          {/* Interactive Horizontal Milestone Steps Pipeline with Hover Tooltips */}
          <div className="p-6 rounded-3xl bg-slate-950/90 border border-slate-800 glass-cyber-panel space-y-4 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <Workflow className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Live Milestone Roadmap // Hover Nodes For Detailed Deliverables
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span>Completed</span>
                </span>
                <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping inline-block" />
                  <span>Active Sprint</span>
                </span>
                <span className="flex items-center gap-1.5 text-slate-500 font-semibold hidden sm:flex">
                  <span className="w-2 h-2 rounded-full bg-slate-700 inline-block" />
                  <span>Queued</span>
                </span>
              </div>
            </div>

            {/* Pipeline Steps Track */}
            <div className="relative pt-6 pb-2 px-1 sm:px-4">
              {/* Connecting Progress Bar Behind Nodes (desktop view) */}
              <div className="absolute top-12 left-10 right-10 h-1 bg-slate-800 rounded-full z-0 hidden lg:block">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500 rounded-full transition-all duration-700"
                  style={{
                    width: `${Math.min(100, ((currentProject.currentPhaseNum - 0.5) / 6) * 100)}%`,
                  }}
                />
              </div>

              {/* Grid of 6 interactive milestone nodes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
                {currentProject.phases.map((phase) => {
                  const isCompleted = phase.status === 'COMPLETED';
                  const isInProgress = phase.status === 'IN_PROGRESS';
                  const isHovered = hoveredPhaseId === phase.id;

                  return (
                    <div
                      key={`pipeline-${phase.id}`}
                      onMouseEnter={() => setHoveredPhaseId(phase.id)}
                      onMouseLeave={() => setHoveredPhaseId(null)}
                      onClick={() => setExpandedPhaseId(phase.id)}
                      className={`group/node relative p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col items-center text-center ${
                        isCompleted
                          ? 'bg-slate-900/90 border-emerald-500/50 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:-translate-y-1'
                          : isInProgress
                          ? 'bg-blue-950/40 border-blue-500/60 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-0.5'
                          : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 opacity-70 hover:opacity-100'
                      }`}
                    >
                      {/* Step Badge Node */}
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0 border transition-transform duration-300 group-hover/node:scale-110 mb-2 ${
                          isCompleted
                            ? 'bg-emerald-950 text-emerald-300 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                            : isInProgress
                            ? 'bg-blue-950 text-blue-300 border-blue-400 animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                            : 'bg-slate-900 text-slate-500 border-slate-800'
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <span>0{phase.phaseNum}</span>
                        )}
                      </div>

                      {/* Phase Micro Header */}
                      <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                        Phase 0{phase.phaseNum}
                      </div>
                      <div className="text-xs font-bold text-white line-clamp-1 mt-0.5" title={phase.name}>
                        {phase.name.split('&')[0]}
                      </div>

                      {/* Status Micro Badge */}
                      <div className="mt-2 text-[10px]">
                        {isCompleted ? (
                          <span className="text-emerald-400 font-bold flex items-center gap-1 justify-center">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            <span>Done</span>
                          </span>
                        ) : isInProgress ? (
                          <span className="text-blue-400 font-bold flex items-center gap-1 justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                            <span>{phase.progressPercentage}%</span>
                          </span>
                        ) : (
                          <span className="text-slate-500">Upcoming</span>
                        )}
                      </div>

                      {/* Interactive Floating Hover Tooltip */}
                      <div
                        role="tooltip"
                        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 sm:w-80 p-4 rounded-2xl bg-slate-950/98 border-2 shadow-2xl transition-all duration-200 z-50 text-left pointer-events-none ${
                          isCompleted
                            ? 'border-emerald-500/80 shadow-[0_0_30px_rgba(16,185,129,0.4)]'
                            : isInProgress
                            ? 'border-blue-500/80 shadow-[0_0_30px_rgba(59,130,246,0.4)]'
                            : 'border-slate-700 shadow-xl'
                        } ${
                          isHovered
                            ? 'opacity-100 translate-y-0 scale-100'
                            : 'opacity-0 translate-y-2 scale-95'
                        }`}
                      >
                        {/* Tooltip Arrow Pointer */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-solid border-t-slate-950 border-t-8 border-x-transparent border-x-8 border-b-0" />

                        {/* Status Ribbon & Timestamp in Tooltip */}
                        <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-800 text-[11px]">
                          <span
                            className={`px-2 py-0.5 rounded-full font-bold uppercase flex items-center gap-1 ${
                              isCompleted
                                ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                                : isInProgress
                                ? 'bg-blue-950 text-blue-300 border border-blue-500/40'
                                : 'bg-slate-900 text-slate-400 border border-slate-800'
                            }`}
                          >
                            {isCompleted ? (
                              <>
                                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                <span>MILESTONE VERIFIED</span>
                              </>
                            ) : isInProgress ? (
                              <>
                                <Clock className="w-3 h-3 text-blue-400 animate-spin" />
                                <span>ACTIVE SPRINT</span>
                              </>
                            ) : (
                              <span>SCHEDULED PHASE</span>
                            )}
                          </span>

                          {phase.completedAt && (
                            <span className="text-emerald-400 font-bold flex items-center gap-1 font-mono text-[10px]">
                              <Clock className="w-3 h-3 text-emerald-400" />
                              <span>{phase.completedAt}</span>
                            </span>
                          )}
                        </div>

                        {/* Phase Title */}
                        <div className="text-xs font-bold text-white mb-1.5 flex items-center gap-1.5">
                          <span className="text-cyan-400 font-mono">0{phase.phaseNum}.</span>
                          <span>{phase.name}</span>
                        </div>

                        {/* Specific Task Description */}
                        <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 font-sans text-xs leading-relaxed mb-2.5">
                          <span className="text-[10px] uppercase font-mono text-slate-500 font-bold block mb-1">
                            Specific Task Scope:
                          </span>
                          {phase.description}
                        </div>

                        {/* Completion Timestamp Details */}
                        {isCompleted && (
                          <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono flex items-center justify-between mb-2">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span>Signed Off:</span>
                            </span>
                            <span className="font-bold text-white">{phase.completedAt || 'Verified Pass'}</span>
                          </div>
                        )}

                        {/* Key Deliverables Preview in Tooltip */}
                        <div className="space-y-1">
                          <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">
                            Verified Deliverables:
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {phase.deliverables.slice(0, 3).map((item, dIdx) => (
                              <span
                                key={dIdx}
                                className="px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] font-mono border border-slate-800"
                              >
                                ✓ {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Lead Engineer Attribution */}
                        <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                          <span>Architect Node:</span>
                          <span className="text-cyan-300 font-bold truncate max-w-[150px]">
                            {phase.leadEngineer.split('(')[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Phase Detailed Accordion Cards */}
          <div className="grid grid-cols-1 gap-4">
            {currentProject.phases.map((phase) => {
              const isExpanded = expandedPhaseId === phase.id;
              const isApproved = approvedMilestones[phase.id];
              const isCompleted = phase.status === 'COMPLETED';
              const isInProgress = phase.status === 'IN_PROGRESS';
              const isPhaseHovered = hoveredPhaseId === phase.id;

              return (
                <div
                  key={phase.id}
                  onMouseEnter={() => setHoveredPhaseId(phase.id)}
                  onMouseLeave={() => setHoveredPhaseId(null)}
                  className={`group/card relative p-5 sm:p-6 rounded-3xl border transition-all duration-300 ${
                    isInProgress
                      ? 'bg-slate-900/95 border-blue-500/60 shadow-[0_0_25px_rgba(59,130,246,0.2)]'
                      : isCompleted
                      ? 'bg-slate-900/80 border-slate-800 hover:border-emerald-500/80 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] hover:bg-slate-900/95'
                      : 'bg-slate-950/60 border-slate-900 opacity-80 hover:opacity-100 hover:border-slate-800'
                  }`}
                >
                  {/* Phase Row Header */}
                  <div
                    onClick={() => setExpandedPhaseId(isExpanded ? '' : phase.id)}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-4">
                      {/* Interactive Step Indicator Badge with Built-in Hover Tooltip */}
                      <div className="relative group/step">
                        <div
                          className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0 border transition-all duration-300 group-hover/card:scale-105 ${
                            isCompleted
                              ? 'bg-emerald-950 text-emerald-400 border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.25)]'
                              : isInProgress
                              ? 'bg-blue-950 text-blue-400 border-blue-400 animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.25)]'
                              : 'bg-slate-950 text-slate-600 border-slate-800'
                          }`}
                        >
                          {isCompleted ? (
                            <Check className="w-5 h-5 text-emerald-400" />
                          ) : (
                            <span>0{phase.phaseNum}</span>
                          )}
                        </div>

                        {/* Completed Milestone Hover Tooltip directly attached to step badge */}
                        {isCompleted && (
                          <div
                            role="tooltip"
                            className="absolute bottom-full left-0 mb-3 w-72 sm:w-80 p-4 rounded-2xl bg-slate-950/98 border-2 border-emerald-500/80 shadow-[0_0_30px_rgba(16,185,129,0.4)] opacity-0 group-hover/step:opacity-100 pointer-events-none transition-all duration-200 z-50 transform translate-y-1 group-hover/step:translate-y-0 text-left font-sans hidden sm:block"
                          >
                            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] font-mono">
                              <span className="text-emerald-400 font-bold flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                <span>MILESTONE COMPLETED</span>
                              </span>
                              <span className="text-slate-400">{phase.completedAt}</span>
                            </div>
                            <div className="text-xs font-bold text-white font-mono mb-1">
                              Phase 0{phase.phaseNum}: {phase.name}
                            </div>
                            <div className="text-xs text-slate-300 leading-relaxed bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 mb-2">
                              <span className="text-[10px] text-slate-500 font-mono font-bold block mb-0.5">
                                Task Scope:
                              </span>
                              {phase.description}
                            </div>
                            <div className="text-[11px] text-emerald-300 font-mono flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Completion Timestamp: {phase.completedAt}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                            Phase 0{phase.phaseNum} // {phase.estimatedDays} SLA
                          </span>

                          {/* Interactive Completion Timestamp Pill with Tooltip */}
                          {isCompleted && phase.completedAt && (
                            <div className="relative group/timestamp inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono transition-colors group-hover/card:border-emerald-400">
                              <Calendar className="w-3 h-3 text-emerald-400 shrink-0" />
                              <span>Completed {phase.completedAt}</span>
                              <Info className="w-2.5 h-2.5 text-emerald-400 opacity-60" />

                              {/* Hover Tooltip for timestamp pill */}
                              <div
                                role="tooltip"
                                className="absolute bottom-full left-0 mb-2 w-64 p-3 rounded-xl bg-slate-950 border border-emerald-500/60 shadow-xl opacity-0 group-hover/timestamp:opacity-100 pointer-events-none transition-opacity duration-200 z-40 text-left font-sans text-xs text-slate-300"
                              >
                                <div className="font-mono text-[10px] text-emerald-400 font-bold uppercase mb-1">
                                  ✓ Verified Timestamp
                                </div>
                                <div>
                                  Phase signed off on <strong>{phase.completedAt}</strong> after full QA pass.
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5 group-hover/card:text-blue-300 transition-colors">
                          {phase.name}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                      {getStatusBadge(phase.status, phase.progressPercentage)}
                      <ChevronRight
                        className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                      />
                    </div>
                  </div>

                  {/* Expanded Phase Specifications */}
                  {isExpanded && (
                    <div className="mt-5 pt-5 border-t border-slate-800/80 space-y-4 text-xs font-sans">
                      <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-300 leading-relaxed">
                        <div className="text-[10px] font-mono text-slate-500 uppercase font-bold tracking-wider mb-1 flex items-center justify-between">
                          <span>Specific Task Description:</span>
                          {phase.completedAt && (
                            <span className="text-emerald-400 font-mono">
                              Timestamp: {phase.completedAt}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-200 font-sans">{phase.description}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {/* Deliverables Checklist */}
                        <div className="space-y-2">
                          <div className="text-[10px] font-mono text-slate-500 uppercase font-bold tracking-wider">
                            Verified Phase Deliverables:
                          </div>
                          {phase.deliverables.map((deliv, idx) => (
                            <div
                              key={idx}
                              className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-2.5 text-slate-300 text-xs"
                            >
                              <CheckCircle2
                                className={`w-4 h-4 shrink-0 ${
                                  phase.status === 'COMPLETED' ? 'text-emerald-400' : 'text-blue-400'
                                }`}
                              />
                              <span className="font-mono">{deliv}</span>
                            </div>
                          ))}
                        </div>

                        {/* Engineering Node & Approval Controls */}
                        <div className="space-y-3 p-4 rounded-2xl bg-slate-950/70 border border-slate-800 font-mono">
                          <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                            Engineering Telemetry:
                          </div>
                          <div className="text-xs text-slate-300 space-y-1">
                            <div>
                              Lead Architect:{' '}
                              <span className="text-blue-400 font-bold">{phase.leadEngineer}</span>
                            </div>
                            <div>
                              Status:{' '}
                              <span className="text-emerald-400 font-bold">
                                {phase.completedAt ? `Completed on ${phase.completedAt}` : 'In Production Sprint'}
                              </span>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-2">
                            {phase.status === 'COMPLETED' || phase.status === 'IN_PROGRESS' ? (
                              <button
                                onClick={() => handleApproveMilestone(phase.id)}
                                disabled={isApproved}
                                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition flex items-center gap-1.5 ${
                                  isApproved
                                    ? 'bg-emerald-950 border border-emerald-500/50 text-emerald-300'
                                    : 'bg-blue-600 hover:bg-blue-500 text-white shadow'
                                }`}
                              >
                                <ThumbsUp className="w-3.5 h-3.5" />
                                <span>{isApproved ? 'Approved by Client' : 'Approve Milestone'}</span>
                              </button>
                            ) : null}

                            <a
                              href={AGENCY_CONFIG.whatsappMessage(
                                `Hello HRwesitecreateragency team! I am checking on Phase 0${phase.phaseNum} (${phase.name}) for project [${currentProject.projectId}].`
                              )}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-bold transition flex items-center gap-1.5"
                            >
                              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Direct WhatsApp Query</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Git Commit Activity Feed */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/95 border border-slate-800 glass-cyber-panel space-y-5 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <GitCommit className="w-5 h-5 text-purple-400 animate-spin" style={{ animationDuration: '10s' }} />
              <div>
                <h4 className="text-base font-bold text-white uppercase">Live Production Git Commit Stream</h4>
                <p className="text-xs text-slate-400 font-sans">
                  Real-time code merges pushed to branch <code className="text-purple-300">{currentProject.repoBranch}</code>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] text-emerald-400 font-bold uppercase">Continuous Integration Active</span>
            </div>
          </div>

          <div className="space-y-2.5 text-xs">
            {currentProject.recentCommits.map((cmt, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-slate-900/80 border border-slate-850 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 hover:border-slate-700 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded bg-purple-950 border border-purple-500/40 text-purple-300 font-mono text-[10px] font-bold">
                    {cmt.hash}
                  </span>
                  <span className="text-slate-200 font-mono">{cmt.msg}</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-slate-500 shrink-0">
                  <span className="text-slate-400">{cmt.author}</span>
                  <span>•</span>
                  <span className="text-cyan-400">{cmt.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xs text-slate-400 font-sans">
              Have an urgent change request or want to request a revision for the current milestone sprint?
            </div>
            <a
              href={AGENCY_CONFIG.whatsappMessage(
                `Hello Systems Architect! I want to submit a change request for project [${currentProject.projectId}].`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider transition shadow flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>Submit Revision Spec</span>
            </a>
          </div>
        </div>

        {/* Real-Time Email / SMS Subscription Notification Modal */}
        {showSubscribeModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowSubscribeModal(false);
            }}
          >
            <div className="w-full max-w-xl p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-700 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden space-y-6 text-left">
              {/* Background ambient light */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-blue-500/50 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] shrink-0">
                    <BellRing className="w-6 h-6 text-blue-400 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-[10px] text-cyan-400 uppercase font-mono font-bold tracking-wider">
                      Real-Time Progress Telemetry
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                      Subscribe to Milestone Alerts
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSubscribeModal(false)}
                  className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Project Target Badge */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs font-mono flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">[{currentProject.projectId}]</span>
                  <span className="text-white font-sans font-semibold">{currentProject.projectName}</span>
                </div>
                <span className="text-emerald-400 text-[11px] font-bold">
                  Phase {currentProject.currentPhaseNum}/6 Active
                </span>
              </div>

              {/* Subscription Form */}
              <form onSubmit={handleSubscribeSubmit} className="space-y-5 text-xs">
                {/* Channel Selector */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono text-slate-400 uppercase font-bold block">
                    Select Notification Channels:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setSubscribeForm((prev) => ({ ...prev, channel: 'both' }))}
                      className={`p-3 rounded-2xl border text-center transition flex flex-col items-center gap-1.5 ${
                        subscribeForm.channel === 'both'
                          ? 'bg-blue-950/90 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-slate-500">+</span>
                        <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="font-bold text-[11px]">Email + SMS</span>
                      <span className="text-[9px] text-cyan-400 font-mono">Recommended</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubscribeForm((prev) => ({ ...prev, channel: 'email' }))}
                      className={`p-3 rounded-2xl border text-center transition flex flex-col items-center gap-1.5 ${
                        subscribeForm.channel === 'email'
                          ? 'bg-blue-950/90 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Mail className="w-4 h-4 text-blue-400" />
                      <span className="font-bold text-[11px]">Email Only</span>
                      <span className="text-[9px] text-slate-500 font-mono">Detailed Digest</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubscribeForm((prev) => ({ ...prev, channel: 'sms' }))}
                      className={`p-3 rounded-2xl border text-center transition flex flex-col items-center gap-1.5 ${
                        subscribeForm.channel === 'sms'
                          ? 'bg-emerald-950/90 border-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Smartphone className="w-4 h-4 text-emerald-400" />
                      <span className="font-bold text-[11px]">SMS / Text</span>
                      <span className="text-[9px] text-slate-500 font-mono">Instant Alerts</span>
                    </button>
                  </div>
                </div>

                {/* Email Input Field */}
                {(subscribeForm.channel === 'email' || subscribeForm.channel === 'both') && (
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-slate-300 font-semibold flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-blue-400" />
                        <span>Client Email Address:</span>
                      </span>
                      <span className="text-[10px] text-slate-500 font-normal">For build logs & staging URLs</span>
                    </label>
                    <input
                      type="email"
                      required={subscribeForm.channel === 'email' || subscribeForm.channel === 'both'}
                      value={subscribeForm.email}
                      onChange={(e) => setSubscribeForm((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="e.g., client.director@company.com"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-2xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none font-mono"
                    />
                  </div>
                )}

                {/* SMS / Phone Input Field */}
                {(subscribeForm.channel === 'sms' || subscribeForm.channel === 'both') && (
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-slate-300 font-semibold flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Mobile Phone / WhatsApp Number:</span>
                      </span>
                      <span className="text-[10px] text-slate-500 font-normal">SMS & WhatsApp Alerts</span>
                    </label>
                    <input
                      type="tel"
                      required={subscribeForm.channel === 'sms' || subscribeForm.channel === 'both'}
                      value={subscribeForm.phone}
                      onChange={(e) => setSubscribeForm((prev) => ({ ...prev, phone: e.target.value }))}
                      placeholder="+91 98765 43210 (with country code)"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-2xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none font-mono"
                    />
                  </div>
                )}

                {/* Trigger Events Checkboxes */}
                <div className="space-y-2 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">
                    Notification Trigger Events:
                  </div>
                  <div className="space-y-2 font-sans text-xs">
                    <label className="flex items-center gap-2.5 cursor-pointer text-slate-300 hover:text-white">
                      <input
                        type="checkbox"
                        checked={subscribeForm.onPhaseSignoff}
                        onChange={(e) =>
                          setSubscribeForm((prev) => ({ ...prev, onPhaseSignoff: e.target.checked }))
                        }
                        className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-0 w-4 h-4 cursor-pointer"
                      />
                      <span>Phase completion & Lead Architect QA sign-offs</span>
                    </label>

                    <label className="flex items-center gap-2.5 cursor-pointer text-slate-300 hover:text-white">
                      <input
                        type="checkbox"
                        checked={subscribeForm.onDeploy}
                        onChange={(e) =>
                          setSubscribeForm((prev) => ({ ...prev, onDeploy: e.target.checked }))
                        }
                        className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-0 w-4 h-4 cursor-pointer"
                      />
                      <span>Staging sandbox deployments & live demo preview URLs</span>
                    </label>

                    <label className="flex items-center gap-2.5 cursor-pointer text-slate-300 hover:text-white">
                      <input
                        type="checkbox"
                        checked={subscribeForm.onDigest}
                        onChange={(e) =>
                          setSubscribeForm((prev) => ({ ...prev, onDigest: e.target.checked }))
                        }
                        className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-0 w-4 h-4 cursor-pointer"
                      />
                      <span>Weekly Git commit digest & architecture status reports</span>
                    </label>
                  </div>
                </div>

                {/* Test Ping Simulated Action */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-blue-950/30 border border-blue-900/50">
                  <div className="text-[11px] text-slate-400 font-sans">
                    Want to test alert routing right now?
                  </div>
                  <button
                    type="button"
                    onClick={handleSendTestPing}
                    className="px-3 py-1.5 rounded-xl bg-blue-900/60 hover:bg-blue-800 text-blue-300 font-mono text-[11px] font-bold transition flex items-center gap-1.5"
                  >
                    <Send className="w-3 h-3" />
                    <span>Send Test Ping</span>
                  </button>
                </div>

                {testAlertSent && (
                  <div className="p-3 rounded-2xl bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      Test notification dispatched! Checked channel connection for {subscribeForm.email || subscribeForm.phone || 'device'}.
                    </span>
                  </div>
                )}

                {/* Submit & Unsubscribe Actions */}
                <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  {isCurrentProjectSubscribed ? (
                    <button
                      type="button"
                      onClick={handleUnsubscribe}
                      className="text-xs text-rose-400 hover:text-rose-300 font-bold transition underline underline-offset-4"
                    >
                      Unsubscribe From Alerts
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowSubscribeModal(false)}
                      className="text-xs text-slate-400 hover:text-slate-200 transition"
                    >
                      Cancel
                    </button>
                  )}

                  <div className="flex items-center gap-2 ml-auto">
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-[0_0_20px_rgba(79,70,229,0.4)] flex items-center gap-2"
                    >
                      <Bell className="w-3.5 h-3.5" />
                      <span>{isCurrentProjectSubscribed ? 'Save Alert Preferences' : 'Activate Real-Time Alerts'}</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
