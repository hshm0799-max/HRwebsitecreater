import { useState } from 'react';
import { ActiveModuleId } from './types';
import { TopTelemetry } from './components/TopTelemetry';
import { Navbar } from './components/Navbar';
import { IndiaTopDevLiveBanner } from './components/IndiaTopDevLiveBanner';
import { HeroSection } from './components/HeroSection';
import { StatsBlock } from './components/StatsBlock';
import { ServicesSection } from './components/ServicesSection';
import { ProjectMilestoneTracker } from './components/ProjectMilestoneTracker';
import { PricingMatrix } from './components/PricingMatrix';
import { SeoAiTrafficSection } from './components/SeoAiTrafficSection';
import { GoogleMapGlobal } from './components/GoogleMapGlobal';
import { CostEstimator } from './components/CostEstimator';
import { ClientReviews } from './components/ClientReviews';
import { ContactHQ } from './components/ContactHQ';
import { FullstackLab } from './components/FullstackLab';
import { EliteUIUXLab } from './components/EliteUIUXLab';
import { AgencyModules } from './components/AgencyModules';
import { CoreAiDesk } from './components/CoreAiDesk';
import { Footer } from './components/Footer';
import { Background3DMotion } from './components/Background3DMotion';

export default function App() {
  const [activeModule, setActiveModule] = useState<ActiveModuleId>('home');
  const [calcTierPrice, setCalcTierPrice] = useState<number>(25000);

  const handleNavigate = (mod: ActiveModuleId) => {
    setActiveModule(mod);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTierForCalc = (price: number) => {
    setCalcTierPrice(price);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-purple-600 flex flex-col font-sans relative overflow-x-hidden">
      {/* 0. Live 3D Background Motion */}
      <Background3DMotion />

      {/* 1. Top Telemetry Protocol */}
      <TopTelemetry />

      {/* 2. Persistent Router Navigation */}
      <Navbar activeModule={activeModule} onSelectModule={handleNavigate} />

      {/* 2.1 Official India #1 Web Developer Live Banner with Call Hotwire */}
      <IndiaTopDevLiveBanner onContactClick={() => handleNavigate('contact')} />

      {/* 3. Main Dynamic Content Switcher */}
      <main className="flex-1 relative z-10">
        {activeModule === 'home' && (
          <div className="space-y-6">
            {/* Cinematic Hero Header with Live 3D Animation */}
            <HeroSection onNavigate={handleNavigate} />

            {/* Global Stats Block */}
            <StatsBlock />

            {/* Specialized Web Developer Services & Workstation Images */}
            <ServicesSection onNavigate={handleNavigate} />

            {/* Real-Time Project Milestone Progress Tracker (Client Dashboard) */}
            <ProjectMilestoneTracker />

            {/* 1000+ Keyword SEO Matrix & Google AI Search Dominance */}
            <SeoAiTrafficSection />

            {/* Live Pricing Matrix */}
            <PricingMatrix onNavigate={handleNavigate} onSelectTierForCalc={handleSelectTierForCalc} />

            {/* Interactive Cost Estimator Suite */}
            <CostEstimator initialTierPrice={calcTierPrice} />

            {/* Google Maps & Global Edge Node Network (Ranchi & Lucknow) */}
            <GoogleMapGlobal />

            {/* FullStack Compute Laboratory & Terminal */}
            <FullstackLab />

            {/* 3D UI/UX Lab */}
            <EliteUIUXLab />

            {/* Verified Client Feedback & Live Rating Box */}
            <ClientReviews />

            {/* Ranchi & Lucknow Command HQ */}
            <ContactHQ />
          </div>
        )}

        {activeModule === 'services' && (
          <div className="pt-6">
            <ServicesSection onNavigate={handleNavigate} />
          </div>
        )}

        {activeModule === 'milestones' && (
          <div className="pt-6">
            <ProjectMilestoneTracker />
          </div>
        )}

        {activeModule === 'map' && (
          <div className="pt-6">
            <GoogleMapGlobal />
          </div>
        )}

        {activeModule === 'pricing' && (
          <div className="pt-6">
            <PricingMatrix onNavigate={handleNavigate} onSelectTierForCalc={handleSelectTierForCalc} />
          </div>
        )}

        {activeModule === 'calculator' && (
          <div className="pt-6">
            <CostEstimator initialTierPrice={calcTierPrice} />
          </div>
        )}

        {(activeModule === 'reviews' || activeModule === 'rating') && (
          <div className="pt-6">
            <ClientReviews />
          </div>
        )}

        {activeModule === 'contact' && (
          <div className="pt-6">
            <ContactHQ />
          </div>
        )}

        {activeModule === 'fullstack' && (
          <div className="pt-6">
            <FullstackLab />
          </div>
        )}

        {activeModule === 'uiux' && (
          <div className="pt-6">
            <EliteUIUXLab />
          </div>
        )}

        {/* Dedicated Individual Views for other modules */}
        {[
          'about',
          'team',
          'api-dev',
          'portfolio',
          'cases',
          'tech-stack',
          'support',
          'consultation',
          'careers',
          'industry',
          'privacy',
          'terms',
          'refund',
        ].includes(activeModule) && (
          <AgencyModules moduleId={activeModule} onNavigate={handleNavigate} />
        )}
      </main>

      {/* 4. Floating Jarvis AI Assistant Desk */}
      <CoreAiDesk onNavigate={handleNavigate} />

      {/* 5. Comprehensive Agency Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
