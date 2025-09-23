import { useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSectionLead } from "@/components/HeroSectionLead";
import { SocialProofSection } from "@/components/SocialProofSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DetailedServicesSection } from "@/components/DetailedServicesSection";
import { AnalyticsSection } from "@/components/AnalyticsSection";
import { PricingSection } from "@/components/PricingSection";
import { LocationsSection } from "@/components/LocationsSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export function HomePageLead() {
  useEffect(() => {
    // Load HubSpot form script
    const script = document.createElement('script');
    script.src = 'https://js-eu1.hsforms.net/forms/embed/146936524.js';
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://js-eu1.hsforms.net/forms/embed/146936524.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSectionLead />
        <SocialProofSection />
        <StatsSection />
        <ServicesSection />
        <DetailedServicesSection />
        <AnalyticsSection />
        <PricingSection />
        <LocationsSection />
        <IntegrationsSection />
        <CTASection />
        
        {/* HubSpot Form Section */}
        <section id="hubspot-form" className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-quote-form">
                Get Your Custom Quote
              </h2>
              <p className="text-xl text-muted-foreground" data-testid="text-quote-form-description">
                Fill out the form below and our team will provide you with a personalized quote for your GCC expansion.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div 
                className="hs-form-frame" 
                data-region="eu1" 
                data-form-id="a2264103-4c5b-4681-a9b3-1105ec42a559" 
                data-portal-id="146936524"
                data-testid="hubspot-form"
              ></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}