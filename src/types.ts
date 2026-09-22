export type ActiveModuleId = 
  | 'home'
  | 'services'
  | 'pricing'
  | 'milestones'
  | 'rating'
  | 'map'
  | 'contact'
  | 'terms'
  | 'about'
  | 'team'
  | 'api-dev'
  | 'fullstack'
  | 'uiux'
  | 'reviews'
  | 'portfolio'
  | 'cases'
  | 'calculator'
  | 'tech-stack'
  | 'support'
  | 'consultation'
  | 'careers'
  | 'industry'
  | 'privacy'
  | 'refund';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  badge?: string;
  description: string;
  features: string[];
  startingPrice: string;
  deliverySpeed: string;
  techStack: string[];
}

export interface ModuleNavDef {
  id: ActiveModuleId;
  num: number;
  label: string;
  category: 'core' | 'engineering' | 'commercial' | 'enterprise' | 'legal';
  badge?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  priceRange: string;
  priceValueMin: number;
  priceValueMax: number;
  badge?: string;
  highlighted?: boolean;
  description: string;
  features: string[];
  idealFor: string;
  deploymentTime: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  company?: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  location?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  layerArchitecture: string;
  description: string;
  metrics: string;
  tech: string[];
}

export interface TeamMember {
  id: string;
  role: string;
  title: string;
  specialty: string;
  description: string;
  status: 'ONLINE' | 'ACTIVE_DEPLOY' | 'COMPILING';
  nodeId: string;
}

export interface CalculationOptions {
  tierPrice: number;
  layerCount: number;
  databaseType: 'none' | 'mongodb' | 'postgresql' | 'redis_cluster';
  securityShield: boolean;
  customDomainSetup: boolean;
  seoMatrixPackage: boolean;
  aiAssistantNode: boolean;
  deliverySpeed: 'normal' | 'express' | 'hyper_rush';
}

export interface AiChatMessage {
  id: string;
  sender: 'jarvis' | 'user';
  text: string;
  timestamp: string;
  commandExecuted?: string;
}

export interface MilestoneDocument {
  id: string;
  title: string;
  category: 'Design Brief' | 'Technical Architecture' | 'API Specification' | 'QA Security Audit' | 'Deployment Manifest';
  fileName: string;
  fileSize: string;
  fileFormat: string;
  unlockedAtPhase: number;
  description: string;
  checksum?: string;
  downloadContent: string;
}

export interface ProjectMilestonePhase {
  id: string;
  name: string;
  phaseNum: number;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'QUEUED' | 'PENDING';
  progressPercentage: number;
  description: string;
  deliverables: string[];
  estimatedDays: string;
  completedAt?: string;
  leadEngineer: string;
  documents?: MilestoneDocument[];
}

export interface ClientProjectProgress {
  projectId: string;
  projectName: string;
  clientName: string;
  tierName: string;
  currentPhaseNum: number;
  overallProgress: number;
  startedAt: string;
  targetLaunchDate: string;
  stagingUrl: string;
  repoBranch: string;
  lighthouseScore: number;
  serverPing: string;
  phases: ProjectMilestonePhase[];
  projectDocuments?: MilestoneDocument[];
  recentCommits: {
    hash: string;
    msg: string;
    author: string;
    time: string;
  }[];
}
