import { LandingLayout } from "@/components/LandingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PricingSection } from "@/components/PricingSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CheckCircle, Building2, Shield, Users, BarChart3, Clock, Zap, Lock } from "lucide-react";
import { trackPricingView, getVariant } from "@/lib/analytics";
import { useEffect, useRef } from "react";
import truckImage from "@assets/GWC Truck - Riyadh_1_1757527184708.jpg";

export default function EnterpriseCrossBorderPage() {
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
            const variant = getVariant('enterprise-cross-border');
            const sessionKey = `pricing-view-enterprise-cross-border-${variant}`;
            
            if (!sessionStorage.getItem(sessionKey)) {
              sessionStorage.setItem(sessionKey, 'tracked');
              trackPricingView('enterprise-cross-border', variant);
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
    eyebrow: "Enterprise Cross-Border Solutions",
    headline: "Scale Your Enterprise Globally with 99.9% Uptime Cross-Border Infrastructure",
    subheadline: "Enterprise-grade logistics platform handling 10M+ annual shipments. Automated compliance, dedicated CSM, white-label solutions, and SOC 2 Type II security for Fortune 500 peace of mind.",
    primaryCTA: {
      text: "Request Enterprise Demo",
      onClick: () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
      },
      testId: "button-request-demo-enterprise"
    },
    secondaryCTA: {
      text: "Speak with Solutions Architect",
      href: "/quote",
      testId: "button-solutions-architect-enterprise"
    }
  };

  return (
    <LandingLayout
      segment="enterprise-cross-border"
      heroConfig={heroConfig}
      testIdPrefix="enterprise-cross-border"
      pageTitle="Enterprise Cross-Border Logistics | Fortune 500 Scale Solutions"
      metaDescription="Enterprise-grade cross-border logistics with 99.9% uptime, automated compliance, dedicated support, and SOC 2 Type II security for Fortune 500 companies."
    >
      {/* Social Proof Section */}
      <SocialProofSection />

      {/* Enterprise Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4" data-testid="badge-enterprise-grade">
              Enterprise Grade Infrastructure
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-enterprise-features">
              Built for Fortune 500 Scale and Security Requirements
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-enterprise-description">
              Our enterprise platform processes over 10 million cross-border shipments annually with military-grade 
              security, automated compliance, and dedicated enterprise support teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-elevate" data-testid="card-uptime-guarantee">
              <CardContent className="pt-8 pb-8">
                <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">99.9% Uptime SLA</h3>
                <p className="text-muted-foreground">
                  Enterprise SLA with financial penalties for downtime and dedicated infrastructure monitoring.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-dedicated-support">
              <CardContent className="pt-8 pb-8">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Dedicated CSM</h3>
                <p className="text-muted-foreground">
                  Named Customer Success Manager with direct escalation path and quarterly business reviews.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-security-compliance">
              <CardContent className="pt-8 pb-8">
                <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">SOC 2 Type II</h3>
                <p className="text-muted-foreground">
                  Enterprise security certification with annual penetration testing and compliance reporting.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-white-label">
              <CardContent className="pt-8 pb-8">
                <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">White Label Ready</h3>
                <p className="text-muted-foreground">
                  Fully brandable platform with custom domains, logos, and customer-facing interfaces.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Automation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4" data-testid="badge-compliance-automation">
                Automated Compliance
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-compliance-automation">
                Eliminate Compliance Risks with Automated Regulatory Management
              </h2>
              <p className="text-lg text-muted-foreground mb-8" data-testid="text-compliance-description">
                Our enterprise platform automatically handles complex cross-border compliance across 50+ markets, 
                reducing regulatory risks and ensuring your shipments clear customs on the first attempt.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3" data-testid="feature-auto-documentation">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>Automated Documentation:</strong> AI-powered customs forms and trade certificates</span>
                </div>
                <div className="flex items-center gap-3" data-testid="feature-real-time-tracking">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>Real-time Regulatory Updates:</strong> Automatic adaptation to changing trade rules</span>
                </div>
                <div className="flex items-center gap-3" data-testid="feature-audit-trails">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>Complete Audit Trails:</strong> Immutable compliance records for enterprise reporting</span>
                </div>
                <div className="flex items-center gap-3" data-testid="feature-risk-management">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>Risk Management:</strong> Proactive alerts and automated risk mitigation</span>
                </div>
              </div>

              <Button size="lg" data-testid="button-compliance-demo">
                Schedule Compliance Demo
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="p-8 hover-elevate" data-testid="card-customs-clearance">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="w-10 h-10 text-primary" />
                  <div>
                    <h4 className="text-lg font-semibold">First-Attempt Clearance</h4>
                    <p className="text-sm text-muted-foreground">98.7% success rate</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Automated pre-clearance verification reduces delays and eliminates costly customs rejections.
                </p>
              </Card>

              <Card className="p-8 hover-elevate" data-testid="card-regulatory-monitoring">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-10 h-10 text-primary" />
                  <div>
                    <h4 className="text-lg font-semibold">24/7 Regulatory Monitoring</h4>
                    <p className="text-sm text-muted-foreground">Real-time updates</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Continuous monitoring of trade regulations across all active markets with automatic platform updates.
                </p>
              </Card>

              <Card className="p-8 hover-elevate" data-testid="card-enterprise-reporting">
                <div className="flex items-center gap-4 mb-4">
                  <BarChart3 className="w-10 h-10 text-primary" />
                  <div>
                    <h4 className="text-lg font-semibold">Enterprise Reporting</h4>
                    <p className="text-sm text-muted-foreground">Custom dashboards</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Executive dashboards with compliance metrics, risk analysis, and cost optimization insights.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scale & Performance Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4" data-testid="badge-scale-performance">
              Scale & Performance
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-quivo-enterprise">
              Powered by Quivo Partnership: Enterprise-Grade Infrastructure at Global Scale
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-quivo-partnership">
              Our strategic partnership with Quivo provides enterprise customers with access to military-grade 
              infrastructure, processing over 10 million shipments annually with zero data loss.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="metric-shipments">
              <div className="text-3xl font-bold text-primary mb-2">10M+</div>
              <div className="text-sm text-muted-foreground">Annual Shipments</div>
            </div>
            <div className="text-center" data-testid="metric-uptime">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Platform Uptime</div>
            </div>
            <div className="text-center" data-testid="metric-markets">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Global Markets</div>
            </div>
            <div className="text-center" data-testid="metric-response-time">
              <div className="text-3xl font-bold text-primary mb-2">&lt;2h</div>
              <div className="text-sm text-muted-foreground">Enterprise Support</div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover-elevate" data-testid="card-api-performance">
              <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">High-Performance APIs</h4>
              <p className="text-sm text-muted-foreground">Sub-100ms response times with 99.99% API availability</p>
            </Card>
            <Card className="p-6 text-center hover-elevate" data-testid="card-data-redundancy">
              <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Data Redundancy</h4>
              <p className="text-sm text-muted-foreground">Multi-region backups with zero data loss guarantee</p>
            </Card>
            <Card className="p-6 text-center hover-elevate" data-testid="card-disaster-recovery">
              <Building2 className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Disaster Recovery</h4>
              <p className="text-sm text-muted-foreground">RTO &lt; 4 hours with automated failover systems</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Concept A */}
      <TestimonialsSection segment="enterprise" />

      {/* Pricing Section */}
      <div id="pricing" ref={pricingRef}>
        <PricingSection />
      </div>

      {/* Integrations Section */}
      <IntegrationsSection />
    </LandingLayout>
  );
}