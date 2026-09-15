import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingFeatures } from "@/components/landing/LandingFeatures";
import { LandingSteps } from "@/components/landing/LandingSteps";
import { LandingCTA } from "@/components/landing/LandingCTA";
import { LandingFooter } from "@/components/landing/LandingFooter";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-hidden" data-lq-landing>
      <noscript>
        <style>{`[data-lq-landing] [style]{opacity:1 !important;transform:none !important;filter:none !important}`}</style>
      </noscript>

      {/* ===== Header ===== */}
      <LandingHeader />

      {/* ===== Hero Section ===== */}
      <LandingHero />

      {/* ===== 3 Core Features ===== */}
      <LandingFeatures />

      {/* ===== 3 Simple Steps ===== */}
      <LandingSteps />

      {/* ===== Call To Action ===== */}
      <LandingCTA />

      {/* ===== Footer ===== */}
      <LandingFooter />
    </div>
  );
}