import { LandingLayout } from "@/components/LandingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PricingSection } from "@/components/PricingSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CheckCircle, Code, Cpu, Zap, Activity, Database, Globe, Webhook } from "lucide-react";
import { trackPricingView, getVariant } from "@/lib/analytics";
import { useEffect, useRef } from "react";
import truckImage from "@assets/GWC Truck - Riyadh_1_1757527184708.jpg";

export default function TechInnovationPage() {
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
            const variant = getVariant('tech-innovation');
            const sessionKey = `pricing-view-tech-innovation-${variant}`;
            
            if (!sessionStorage.getItem(sessionKey)) {
              sessionStorage.setItem(sessionKey, 'tracked');
              trackPricingView('tech-innovation', variant);
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
    eyebrow: "Technology Innovation Leaders",
    headline: "Power Next-Gen Commerce with Real-Time APIs, Machine Learning, and Sub-100ms Global Logistics",
    subheadline: "Developer-first platform with GraphQL APIs, real-time webhooks, ML-powered route optimization, and advanced data analytics. Built for tech leaders who demand cutting-edge logistics infrastructure.",
    primaryCTA: {
      text: "Explore Developer APIs",
      onClick: () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
      },
      testId: "button-explore-apis-tech"
    },
    secondaryCTA: {
      text: "Access Sandbox Environment",
      href: "/quote",
      testId: "button-sandbox-access-tech"
    }
  };

  return (
    <LandingLayout
      segment="tech-innovation"
      heroConfig={heroConfig}
      testIdPrefix="tech-innovation"
      pageTitle="Technology Innovation Leaders | Advanced Logistics APIs & ML Platform"
      metaDescription="Developer-first logistics platform with GraphQL APIs, real-time webhooks, ML-powered optimization, and advanced data analytics for technology innovation leaders."
    >
      {/* Social Proof Section */}
      <SocialProofSection />

      {/* Technical Capabilities Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4" data-testid="badge-technical-platform">
              Advanced Technical Platform
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-technical-capabilities">
              Built by Engineers, for Engineers: Next-Generation Logistics Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-technical-description">
              Our platform leverages machine learning, real-time processing, and modern API architecture to deliver 
              logistics capabilities that match your innovation velocity and technical standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-elevate" data-testid="card-graphql-apis">
              <CardContent className="pt-8 pb-8">
                <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">GraphQL APIs</h3>
                <p className="text-muted-foreground">
                  Type-safe, introspectable APIs with real-time subscriptions and sub-100ms response times.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-ml-optimization">
              <CardContent className="pt-8 pb-8">
                <Cpu className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">ML Route Optimization</h3>
                <p className="text-muted-foreground">
                  Real-time machine learning algorithms optimize routes, predict delays, and reduce costs by 30%.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-real-time-webhooks">
              <CardContent className="pt-8 pb-8">
                <Webhook className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Real-Time Webhooks</h3>
                <p className="text-muted-foreground">
                  Instant notifications for all logistics events with guaranteed delivery and retry mechanisms.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-data-transparency">
              <CardContent className="pt-8 pb-8">
                <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Data Transparency</h3>
                <p className="text-muted-foreground">
                  Comprehensive audit trails with immutable records for complete supply chain visibility and compliance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Developer Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4" data-testid="badge-developer-experience">
                Developer Experience
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-developer-first">
                Developer-First Platform with Production-Ready SDKs
              </h2>
              <p className="text-lg text-muted-foreground mb-8" data-testid="text-developer-description">
                We understand that great technology requires great developer experience. Our platform provides 
                comprehensive SDKs, interactive documentation, and sandbox environments for rapid prototyping.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3" data-testid="feature-comprehensive-sdks">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>Production SDKs:</strong> TypeScript, Python, Go, and REST with OpenAPI specs</span>
                </div>
                <div className="flex items-center gap-3" data-testid="feature-sandbox-environment">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>Sandbox Environment:</strong> Test all features with simulated global logistics</span>
                </div>
                <div className="flex items-center gap-3" data-testid="feature-interactive-docs">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>Interactive Documentation:</strong> Live API explorer with code generation</span>
                </div>
                <div className="flex items-center gap-3" data-testid="feature-monitoring-analytics">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>Advanced Analytics:</strong> Real-time dashboards and custom event tracking</span>
                </div>
              </div>

              <Button size="lg" data-testid="button-api-documentation">
                View API Documentation
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="p-8 bg-code hover-elevate" data-testid="card-api-example">
                <div className="flex items-center gap-4 mb-4">
                  <Code className="w-10 h-10 text-primary" />
                  <div>
                    <h4 className="text-lg font-semibold">GraphQL Query Example</h4>
                    <p className="text-sm text-muted-foreground">Real-time shipment tracking</p>
                  </div>
                </div>
                <div className="bg-muted/50 p-4 rounded-md text-sm font-mono">
                  <div className="text-purple-600">query</div>
                  <div className="ml-2">ShipmentTracking($id: ID!) {`{`}</div>
                  <div className="ml-4">shipment(id: $id) {`{`}</div>
                  <div className="ml-6">status, location, eta</div>
                  <div className="ml-6">events {`{`} timestamp, type {`}`}</div>
                  <div className="ml-4">{`}`}</div>
                  <div className="ml-2">{`}`}</div>
                </div>
              </Card>

              <Card className="p-8 hover-elevate" data-testid="card-webhook-example">
                <div className="flex items-center gap-4 mb-4">
                  <Webhook className="w-10 h-10 text-primary" />
                  <div>
                    <h4 className="text-lg font-semibold">Webhook Integration</h4>
                    <p className="text-sm text-muted-foreground">Real-time event streaming</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Configure webhooks for shipment updates, customs clearance, and delivery confirmations with automatic retry logic.
                </p>
              </Card>

              <Card className="p-8 hover-elevate" data-testid="card-ml-insights">
                <div className="flex items-center gap-4 mb-4">
                  <Activity className="w-10 h-10 text-primary" />
                  <div>
                    <h4 className="text-lg font-semibold">ML-Powered Insights</h4>
                    <p className="text-sm text-muted-foreground">Predictive analytics</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Access machine learning models for demand forecasting, route optimization, and risk assessment through simple APIs.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Partnership Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4" data-testid="badge-innovation-partnership">
              Innovation Partnership
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-quivo-innovation">
              Powered by Quivo Partnership: Cutting-Edge Logistics Technology Alliance
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-innovation-partnership">
              Our strategic alliance with Quivo combines advanced logistics infrastructure with cutting-edge technology, 
              creating a platform that scales with your innovation ambitions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="metric-api-calls">
              <div className="text-3xl font-bold text-primary mb-2">50M+</div>
              <div className="text-sm text-muted-foreground">Monthly API Calls</div>
            </div>
            <div className="text-center" data-testid="metric-response-time">
              <div className="text-3xl font-bold text-primary mb-2">&lt;100ms</div>
              <div className="text-sm text-muted-foreground">Avg Response Time</div>
            </div>
            <div className="text-center" data-testid="metric-ml-accuracy">
              <div className="text-3xl font-bold text-primary mb-2">98.7%</div>
              <div className="text-sm text-muted-foreground">ML Prediction Accuracy</div>
            </div>
            <div className="text-center" data-testid="metric-uptime">
              <div className="text-3xl font-bold text-primary mb-2">99.99%</div>
              <div className="text-sm text-muted-foreground">API Uptime</div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover-elevate" data-testid="card-ai-optimization">
              <Cpu className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">AI-Driven Optimization</h4>
              <p className="text-sm text-muted-foreground">Advanced algorithms continuously optimize routes and reduce costs</p>
            </Card>
            <Card className="p-6 text-center hover-elevate" data-testid="card-global-infrastructure">
              <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Global Infrastructure</h4>
              <p className="text-sm text-muted-foreground">Multi-region deployment with edge computing capabilities</p>
            </Card>
            <Card className="p-6 text-center hover-elevate" data-testid="card-innovation-labs">
              <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Innovation Labs</h4>
              <p className="text-sm text-muted-foreground">Early access to emerging technologies and beta features</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Concept B */}
      <TestimonialsSection segment="tech" variant="B" />

      {/* Pricing Section */}
      <div id="pricing" ref={pricingRef}>
        <PricingSection />
      </div>

      {/* Integrations Section */}
      <IntegrationsSection />
    </LandingLayout>
  );
}