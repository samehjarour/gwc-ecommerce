import { LandingLayout } from "@/components/LandingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PricingSection } from "@/components/PricingSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { CheckCircle, Heart, Shield, Users, Zap, Globe, Star, Award } from "lucide-react";
import { trackPricingView, getVariant } from "@/lib/analytics";
import { useEffect, useRef } from "react";
import truckImage from "@assets/GWC Truck - Riyadh_1_1757527184708.jpg";

export default function GccEuMuslimPage() {
  const pricingRef = useRef<HTMLDivElement>(null);

  // Set up IntersectionObserver for pricing section
  useEffect(() => {
    const pricingElement = pricingRef.current;
    if (!pricingElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Track pricing view once per session
            const variant = getVariant('gcc-eu-muslim');
            const sessionKey = `pricing-view-gcc-eu-muslim-${variant}`;
            
            if (!sessionStorage.getItem(sessionKey)) {
              sessionStorage.setItem(sessionKey, 'tracked');
              trackPricingView('gcc-eu-muslim', variant);
            }
            
            observer.unobserve(entry.target); // Stop observing after first intersection
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    observer.observe(pricingElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const heroConfig = {
    backgroundImage: truckImage,
    eyebrow: "GCC → European Muslim Markets",
    headline: "Connect with 25+ Million Muslim Consumers Across Europe Through Authentic, Culturally-Aware Commerce",
    subheadline: "Leverage your GCC heritage to authentically serve European Muslim communities. Full halal compliance, cultural sensitivity training, and community-trusted fulfillment across 15+ European markets.",
    primaryCTA: {
      text: "Explore Cultural Commerce",
      onClick: () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
      },
      testId: "button-explore-cultural-gcc-muslim"
    },
    secondaryCTA: {
      text: "Start Community Outreach",
      href: "/quote",
      testId: "button-start-community-gcc-muslim"
    }
  };

  return (
    <LandingLayout
      segment="gcc-eu-muslim"
      heroConfig={heroConfig}
      testIdPrefix="gcc-eu-muslim"
      pageTitle="GCC to European Muslim Markets | Culturally-Aware Cross-Border Commerce"
      metaDescription="Connect GCC businesses with 25+ million Muslim consumers across Europe through authentic, halal-compliant e-commerce solutions and community-trusted fulfillment."
    >
      {/* Social Proof Section */}
      <SocialProofSection />

      {/* Cultural Values Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4" data-testid="badge-cultural-focus">
              Cultural Authenticity
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-cultural-values">
              Bridge Cultures, Build Trust, Grow Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-cultural-description">
              European Muslim communities value authenticity and cultural understanding. Our platform helps GCC businesses 
              connect meaningfully with these communities through respectful, culturally-aware commerce.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover-elevate" data-testid="card-halal-compliance">
              <CardContent className="pt-8 pb-8">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">100% Halal Certified</h3>
                <p className="text-muted-foreground">
                  Complete halal supply chain verification with certified partners across all European markets.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-community-trust">
              <CardContent className="pt-8 pb-8">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community Trusted</h3>
                <p className="text-muted-foreground">
                  Partnerships with European Muslim community leaders and cultural organizations for authentic outreach.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-cultural-expertise">
              <CardContent className="pt-8 pb-8">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cultural Expertise</h3>
                <p className="text-muted-foreground">
                  Deep understanding of European Muslim consumer preferences, holidays, and cultural sensitivities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4" data-testid="badge-market-opportunity">
                Market Opportunity
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-market-stats">
                €45 Billion European Muslim Consumer Market
              </h2>
              <p className="text-lg text-muted-foreground mb-8" data-testid="text-market-description">
                European Muslim communities represent one of the fastest-growing consumer segments, with high 
                purchasing power and strong preference for authentic, culturally-aware brands.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3" data-testid="stat-population">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>25.8 Million</strong> Muslim consumers across 15 European markets</span>
                </div>
                <div className="flex items-center gap-3" data-testid="stat-growth">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>8.2% Annual Growth</strong> in halal product demand across Europe</span>
                </div>
                <div className="flex items-center gap-3" data-testid="stat-preference">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>73% Preference</strong> for brands that demonstrate cultural understanding</span>
                </div>
                <div className="flex items-center gap-3" data-testid="stat-trust">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>GCC Heritage</strong> provides authentic credibility and community trust</span>
                </div>
              </div>

              <Button size="lg" data-testid="button-explore-markets">
                Explore European Markets
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="p-6 hover-elevate" data-testid="card-germany-market">
                  <Globe className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold">Germany</h4>
                  <p className="text-sm text-muted-foreground">5.2M Muslim consumers</p>
                  <p className="text-xs text-muted-foreground mt-1">€12B annual purchasing power</p>
                </Card>
                <Card className="p-6 hover-elevate" data-testid="card-uk-market">
                  <Star className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold">United Kingdom</h4>
                  <p className="text-sm text-muted-foreground">3.9M Muslim consumers</p>
                  <p className="text-xs text-muted-foreground mt-1">€9.8B annual purchasing power</p>
                </Card>
              </div>
              <div className="space-y-6 pt-8">
                <Card className="p-6 hover-elevate" data-testid="card-france-market">
                  <Award className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold">France</h4>
                  <p className="text-sm text-muted-foreground">5.7M Muslim consumers</p>
                  <p className="text-xs text-muted-foreground mt-1">€13.2B annual purchasing power</p>
                </Card>
                <Card className="p-6 hover-elevate" data-testid="card-netherlands-market">
                  <Zap className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold">Netherlands</h4>
                  <p className="text-sm text-muted-foreground">1.1M Muslim consumers</p>
                  <p className="text-xs text-muted-foreground mt-1">€2.9B annual purchasing power</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4" data-testid="badge-community-impact">
              Community Impact
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-community-bridge">
              Powered by Quivo Partnership: Building Cultural Bridges Through Commerce
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-partnership-values">
              Our partnership with Quivo's advanced logistics platform enables respectful, culturally-aware 
              fulfillment that honors both your GCC heritage and European Muslim community values.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="metric-community-reach">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">European Markets</div>
            </div>
            <div className="text-center" data-testid="metric-cultural-training">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Cultural Training</div>
            </div>
            <div className="text-center" data-testid="metric-halal-certified">
              <div className="text-3xl font-bold text-primary mb-2">✓</div>
              <div className="text-sm text-muted-foreground">Halal Certified</div>
            </div>
            <div className="text-center" data-testid="metric-community-partnerships">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Community Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <div id="pricing" ref={pricingRef}>
        <PricingSection />
      </div>

      {/* Integrations Section */}
      <IntegrationsSection />
    </LandingLayout>
  );
}