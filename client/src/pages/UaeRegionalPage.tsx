import { LandingLayout } from "@/components/LandingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PricingSection } from "@/components/PricingSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { CheckCircle, MapPin, Building, Users, Truck, Star, Globe, Award } from "lucide-react";
import { trackPricingView, getVariant } from "@/lib/analytics";
import { useEffect, useRef } from "react";
import truckImage from "@assets/GWC Truck - Riyadh_1_1757527184708.jpg";

export default function UaeRegionalPage() {
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
            const variant = getVariant('uae-regional');
            const sessionKey = `pricing-view-uae-regional-${variant}`;
            
            if (!sessionStorage.getItem(sessionKey)) {
              sessionStorage.setItem(sessionKey, 'tracked');
              trackPricingView('uae-regional', variant);
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
    eyebrow: "UAE Regional Expansion Hub",
    headline: "Leverage Dubai & Abu Dhabi as Your Strategic Gateway to 420 Million Regional Consumers",
    subheadline: "From your UAE base, seamlessly expand across the GCC, MENA, and South Asia with our comprehensive regional logistics network. Local expertise, regional partnerships, and market intelligence included.",
    primaryCTA: {
      text: "Explore Regional Markets",
      onClick: () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
      },
      testId: "button-explore-regional-uae"
    },
    secondaryCTA: {
      text: "Schedule Regional Strategy",
      href: "/quote",
      testId: "button-strategy-session-uae"
    }
  };

  return (
    <LandingLayout
      segment="uae-regional"
      heroConfig={heroConfig}
      testIdPrefix="uae-regional"
      pageTitle="UAE Regional Expansion Hub | Strategic Gateway to MENA & GCC Markets"
      metaDescription="Leverage UAE as your strategic hub for regional expansion across GCC, MENA, and South Asia. Local expertise, regional partnerships, and 420M consumer access."
    >
      {/* Strategic Advantage Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4" data-testid="badge-strategic-hub">
              Strategic Regional Hub
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-uae-advantage">
              The UAE Advantage: Your Gateway to the World's Fastest-Growing Markets
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-uae-description">
              Position your business at the crossroads of Europe, Asia, and Africa. The UAE's strategic location, 
              world-class infrastructure, and business-friendly environment make it the ideal expansion hub for 
              ambitious companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-elevate" data-testid="card-strategic-location">
              <CardContent className="pt-8 pb-8">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Strategic Location</h3>
                <p className="text-muted-foreground">
                  Access 2/3 of the world's population within 8 hours flight time from Dubai International.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-business-ecosystem">
              <CardContent className="pt-8 pb-8">
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Business Ecosystem</h3>
                <p className="text-muted-foreground">
                  World-class free zones, 100% foreign ownership, and streamlined business setup processes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-logistics-infrastructure">
              <CardContent className="pt-8 pb-8">
                <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Logistics Excellence</h3>
                <p className="text-muted-foreground">
                  State-of-the-art ports, airports, and distribution centers connecting global trade routes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-regional-expertise">
              <CardContent className="pt-8 pb-8">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Deep understanding of regional cultures, regulations, and business practices across MENA.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regional Markets Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4" data-testid="badge-regional-access">
                Regional Market Access
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-regional-markets">
                Unlock 420 Million Consumers Across Multiple High-Growth Markets
              </h2>
              <p className="text-lg text-muted-foreground mb-8" data-testid="text-markets-description">
                From your UAE headquarters, seamlessly access the most dynamic consumer markets in the world. 
                Our regional network provides turnkey expansion solutions with local compliance and cultural expertise.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3" data-testid="market-gcc">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>GCC Markets:</strong> Saudi Arabia, Kuwait, Qatar, Oman, Bahrain - 54M consumers</span>
                </div>
                <div className="flex items-center gap-3" data-testid="market-mena">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>MENA Expansion:</strong> Egypt, Jordan, Lebanon, Morocco - 180M consumers</span>
                </div>
                <div className="flex items-center gap-3" data-testid="market-south-asia">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>South Asia Gateway:</strong> Pakistan, Bangladesh access - 385M consumers</span>
                </div>
                <div className="flex items-center gap-3" data-testid="market-east-africa">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>East Africa Corridor:</strong> Kenya, Ethiopia trade routes - 120M consumers</span>
                </div>
              </div>

              <Button size="lg" data-testid="button-market-analysis">
                Get Regional Market Analysis
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="p-6 hover-elevate" data-testid="card-saudi-market">
                  <MapPin className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold">Saudi Arabia</h4>
                  <p className="text-sm text-muted-foreground">35M consumers, Vision 2030</p>
                  <p className="text-xs text-muted-foreground mt-1">$24B e-commerce market</p>
                </Card>
                <Card className="p-6 hover-elevate" data-testid="card-egypt-market">
                  <Star className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold">Egypt</h4>
                  <p className="text-sm text-muted-foreground">104M consumers</p>
                  <p className="text-xs text-muted-foreground mt-1">$8.5B growing market</p>
                </Card>
              </div>
              <div className="space-y-6 pt-8">
                <Card className="p-6 hover-elevate" data-testid="card-qatar-market">
                  <Award className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold">Qatar</h4>
                  <p className="text-sm text-muted-foreground">2.9M consumers</p>
                  <p className="text-xs text-muted-foreground mt-1">Highest GDP per capita</p>
                </Card>
                <Card className="p-6 hover-elevate" data-testid="card-pakistan-market">
                  <Building className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold">Pakistan</h4>
                  <p className="text-sm text-muted-foreground">230M consumers</p>
                  <p className="text-xs text-muted-foreground mt-1">Fast-growing digital economy</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Partnerships Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4" data-testid="badge-local-partnerships">
              Local Partnerships & Expertise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-quivo-regional">
              Powered by Quivo Partnership: Deep Regional Expertise Meets Global Innovation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-regional-partnership">
              Our strategic partnership with Quivo combines cutting-edge global logistics technology with deep 
              regional market knowledge, cultural understanding, and established local partnerships across MENA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="metric-regional-markets">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Regional Markets</div>
            </div>
            <div className="text-center" data-testid="metric-local-partners">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Local Partners</div>
            </div>
            <div className="text-center" data-testid="metric-languages">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-sm text-muted-foreground">Local Languages</div>
            </div>
            <div className="text-center" data-testid="metric-market-experience">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover-elevate" data-testid="card-cultural-expertise">
              <Users className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Cultural Intelligence</h4>
              <p className="text-sm text-muted-foreground">Deep understanding of local customs, holidays, and business practices</p>
            </Card>
            <Card className="p-6 text-center hover-elevate" data-testid="card-regulatory-compliance">
              <Building className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Regulatory Expertise</h4>
              <p className="text-sm text-muted-foreground">Navigate complex regulatory environments with local compliance teams</p>
            </Card>
            <Card className="p-6 text-center hover-elevate" data-testid="card-government-relations">
              <Award className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Government Relations</h4>
              <p className="text-sm text-muted-foreground">Established relationships with trade authorities and economic zones</p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="p-8 max-w-4xl mx-auto hover-elevate" data-testid="card-success-metrics">
              <h3 className="text-xl font-semibold mb-4">Proven Regional Success</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div data-testid="success-expansion-time">
                  <div className="text-2xl font-bold text-primary">90 Days</div>
                  <div className="text-sm text-muted-foreground">Average Market Entry Time</div>
                </div>
                <div data-testid="success-compliance-rate">
                  <div className="text-2xl font-bold text-primary">99.2%</div>
                  <div className="text-sm text-muted-foreground">Regulatory Compliance Rate</div>
                </div>
                <div data-testid="success-customer-satisfaction">
                  <div className="text-2xl font-bold text-primary">4.8/5</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction Score</div>
                </div>
              </div>
            </Card>
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