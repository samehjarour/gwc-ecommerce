import { LandingLayout } from "@/components/LandingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PricingSection } from "@/components/PricingSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { CheckCircle, Clock, Euro, MapPin, Shield, TrendingUp } from "lucide-react";
import { trackPricingView, getVariant } from "@/lib/analytics";
import { useEffect, useRef } from "react";
import truckImage from "@assets/GWC Truck - Riyadh_1_1757527184708.jpg";

export default function EuSmeGccPage() {
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
            const variant = getVariant('eu-sme');
            const sessionKey = `pricing-view-eu-sme-${variant}`;
            
            if (!sessionStorage.getItem(sessionKey)) {
              sessionStorage.setItem(sessionKey, 'tracked');
              trackPricingView('eu-sme', variant);
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
    eyebrow: "European SME → GCC Market Entry",
    headline: "Expand Your European Business to the €25-35 Billion GCC E-Commerce Market",
    subheadline: "Transparent EUR pricing, no hidden fees. Launch in Saudi Arabia, UAE, and Qatar within 30 days with our integrated fulfillment network and automated compliance.",
    primaryCTA: {
      text: "Get Instant EUR Pricing",
      onClick: () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
      },
      testId: "button-get-pricing-eu-sme"
    },
    secondaryCTA: {
      text: "Start Your Expansion",
      href: "/quote",
      testId: "button-start-expansion-eu-sme"
    }
  };

  return (
    <LandingLayout
      segment="eu-sme"
      heroConfig={heroConfig}
      testIdPrefix="eu-sme"
      pageTitle="Expand Your European Business to GCC Markets | GWC Logistics"
      metaDescription="Launch your European business in the €25-35 billion GCC e-commerce market. Transparent EUR pricing, 30-day setup, automated compliance for Saudi Arabia, UAE, Qatar."
    >
      {/* Problem & Solution Section */}
      <section className="py-20 bg-muted/30" data-testid="eu-sme-problem-solution">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Market Opportunity Analysis
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why 95% of European SMEs Avoid GCC Expansion
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complex setup processes, hidden fulfillment costs, and regulatory uncertainty prevent European businesses from accessing the fastest-growing e-commerce market in the world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Problems */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 text-red-600">
                  Traditional Challenges
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Hidden Pricing & Fees</h4>
                      <p className="text-muted-foreground">No public pricing, complex fee structures discovered after signing contracts</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Complex Setup Process</h4>
                      <p className="text-muted-foreground">18+ month market entry timelines with regulatory compliance uncertainty</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">COD Risk & Cash Flow</h4>
                      <p className="text-muted-foreground">19.58% return rates and 2-week payment delays impact business viability</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 text-primary">
                  GWC Solution
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Transparent EUR Pricing</h4>
                      <p className="text-muted-foreground">See exact costs upfront with our public pricing calculator - no hidden fees</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">30-Day Launch Timeline</h4>
                      <p className="text-muted-foreground">Pre-approved fulfillment centers with automated compliance and setup</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">AI-Powered COD Optimization</h4>
                      <p className="text-muted-foreground">Reduce return rates by 60% with predictive analytics and smart routing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20" data-testid="eu-sme-benefits">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why European Businesses Choose GWC for GCC Expansion
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Leverage the €161.7 billion EU-GCC trade relationship with simplified market entry and guaranteed pricing
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover-elevate">
                <CardHeader>
                  <Euro className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Transparent EUR Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Be the first to access completely transparent pricing with our public EUR calculator - no hidden fees or surprise costs.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Public pricing calculator</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>No hidden fulfillment fees</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Guaranteed pricing for 12 months</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <Clock className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>30-Day Market Entry</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Launch in GCC within 30 days with pre-approved fulfillment centers and automated compliance handling.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Pre-approved GCC fulfillment centers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Automated customs & VAT handling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Product certification support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Market Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Access the €25-35 billion GCC e-commerce market with 23% annual growth and premium consumer spending.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>€4,500+ average transaction value</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>23% annual growth rate</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Premium consumer demographics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Strategy Section */}
      <section className="py-20 bg-muted/30" data-testid="eu-sme-geographic">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Strategic GCC Market Entry Plan
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Optimized expansion strategy across UAE, Saudi Arabia, and Qatar with seamless scaling to Kuwait, Bahrain, and Oman
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover-elevate">
                <CardHeader>
                  <MapPin className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="flex items-center space-x-2">
                    <span>UAE Focus</span>
                    <Badge variant="secondary">Phase 1</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    45 free zones providing tax advantages and simplified business setup with Dubai as your GCC hub.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Market Size:</span>
                      <span className="text-sm font-semibold">€8.2B</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Delivery Time:</span>
                      <span className="text-sm font-semibold">Same/Next Day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Tax Benefits:</span>
                      <span className="text-sm font-semibold">0% Corporate Tax</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <MapPin className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="flex items-center space-x-2">
                    <span>Saudi Arabia</span>
                    <Badge variant="secondary">Phase 2</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Largest GCC market with €13.6 billion opportunity and Vision 2030 economic transformation.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Market Size:</span>
                      <span className="text-sm font-semibold">€13.6B</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Delivery Time:</span>
                      <span className="text-sm font-semibold">2-3 Days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Growth Rate:</span>
                      <span className="text-sm font-semibold">34% Annual</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <MapPin className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="flex items-center space-x-2">
                    <span>Qatar Premium</span>
                    <Badge variant="secondary">Phase 3</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Premium market with €3,960 average transaction value and affluent consumer demographics.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Market Size:</span>
                      <span className="text-sm font-semibold">€2.1B</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Avg. Order Value:</span>
                      <span className="text-sm font-semibold">€3,960</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Demographics:</span>
                      <span className="text-sm font-semibold">Premium</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* European Partnership Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4" data-testid="badge-european-partnership">
              European Strategic Partnership
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-quivo-european-partner">
              Powered by Quivo: Your Trusted European Logistics Partner for GCC Expansion
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-european-partnership">
              As fellow Europeans, Quivo understands the unique challenges of expanding from Europe to GCC markets. 
              Our strategic partnership combines European business expertise with cutting-edge GCC logistics infrastructure.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6" data-testid="heading-european-expertise">
                European Expertise Meets GCC Innovation
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3" data-testid="feature-european-understanding">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>European Business Culture:</strong> Deep understanding of EU compliance, GDPR, and business practices</span>
                </div>
                <div className="flex items-center gap-3" data-testid="feature-seamless-integration">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>Seamless Integration:</strong> Connect your existing European operations with GCC fulfillment</span>
                </div>
                <div className="flex items-center gap-3" data-testid="feature-language-support">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>Native Language Support:</strong> Customer service in German, French, Spanish, and English</span>
                </div>
                <div className="flex items-center gap-3" data-testid="feature-timezone-alignment">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>European Time Zones:</strong> Real-time support during European business hours</span>
                </div>
              </div>
              <Button size="lg" data-testid="button-european-partnership">
                Learn About Our European Partnership
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="p-8 hover-elevate" data-testid="card-european-heritage">
                <div className="flex items-center gap-4 mb-4">
                  <Euro className="w-10 h-10 text-primary" />
                  <div>
                    <h4 className="text-lg font-semibold">European Heritage</h4>
                    <p className="text-sm text-muted-foreground">Founded in Europe</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Quivo's European roots ensure we understand your regulatory environment, customer expectations, and operational challenges.
                </p>
              </Card>

              <Card className="p-8 hover-elevate" data-testid="card-regulatory-expertise">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="w-10 h-10 text-primary" />
                  <div>
                    <h4 className="text-lg font-semibold">EU Regulatory Expertise</h4>
                    <p className="text-sm text-muted-foreground">GDPR & Compliance</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Navigate complex European data protection and export regulations while expanding to GCC markets seamlessly.
                </p>
              </Card>

              <Card className="p-8 hover-elevate" data-testid="card-cross-border-bridge">
                <div className="flex items-center gap-4 mb-4">
                  <TrendingUp className="w-10 h-10 text-primary" />
                  <div>
                    <h4 className="text-lg font-semibold">Cross-Border Bridge</h4>
                    <p className="text-sm text-muted-foreground">Europe ↔ GCC</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Our bi-continental presence creates the perfect bridge between European business practices and GCC market opportunities.
                </p>
              </Card>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center" data-testid="metric-european-clients">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">European Clients</div>
              </div>
              <div className="text-center" data-testid="metric-eu-compliance">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">EU Compliance</div>
              </div>
              <div className="text-center" data-testid="metric-languages">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">European Languages</div>
              </div>
              <div className="text-center" data-testid="metric-expansion-success">
                <div className="text-3xl font-bold text-primary mb-2">94%</div>
                <div className="text-sm text-muted-foreground">Expansion Success Rate</div>
              </div>
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

      {/* Call to Action Section */}
      <section className="py-20 bg-primary/5" data-testid="eu-sme-final-cta">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Ready to Expand?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join 300+ European Brands Already Selling in GCC
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Start your GCC expansion today with transparent pricing, automated compliance, and guaranteed 30-day launch timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-see-pricing-final-eu-sme"
              >
                See EUR Pricing
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg"
                onClick={() => window.location.href = '/quote'}
                data-testid="button-start-expansion-final-eu-sme"
              >
                Start Your Expansion
              </Button>
            </div>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
}