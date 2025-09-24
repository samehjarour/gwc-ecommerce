import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DetailedServicesSection } from "@/components/DetailedServicesSection";
import { AnalyticsSection } from "@/components/AnalyticsSection";
import { PricingSection } from "@/components/PricingSection";
import { LocationsSection } from "@/components/LocationsSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export function HomePage() {
  // A/B test variant - you can change this to 'A', 'B', or 'C' to test different concepts
  const testimonialVariant = 'B';

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <TestimonialsSection variant={testimonialVariant} />
        <StatsSection />
        <ServicesSection />
        <DetailedServicesSection />
        <AnalyticsSection />
        <PricingSection />
        <LocationsSection />
        <IntegrationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}