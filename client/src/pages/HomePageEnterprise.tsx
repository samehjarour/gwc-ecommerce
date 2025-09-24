import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DetailedServicesSection } from "@/components/DetailedServicesSection";
import { AnalyticsSection } from "@/components/AnalyticsSection";
import { LocationsSection } from "@/components/LocationsSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export function HomePageEnterprise() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <TestimonialsSection segment="homepage" />
        <StatsSection />
        <ServicesSection />
        <DetailedServicesSection />
        <AnalyticsSection />
        <LocationsSection />
        <IntegrationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}