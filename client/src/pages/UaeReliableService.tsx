import { Header } from "@/components/Header";
import { SocialProofSection } from "@/components/SocialProofSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Truck, HeadphonesIcon, Shield, XCircle, CheckCircle, MessageSquare, Star } from "lucide-react";
import { Link } from "wouter";
import truckImage from "@assets/GWC Truck - Riyadh_1_1757527184708.jpg";

export function UaeReliableService() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${truckImage})` }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4" data-testid="badge-uae-reliable">
                Reliable Service for UAE E-Commerce
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="heading-hero">
                Deliveries You Can <span className="text-primary">Actually Count On</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-description">
                No more broken promises. No more ignored support tickets. Just reliable UAE delivery and real customer service that responds when you need help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/quote">
                  <Button size="lg" data-testid="button-start-reliable">
                    <Shield className="mr-2 h-5 w-5" />
                    Start Reliable Fulfillment
                  </Button>
                </Link>
                <Button variant="outline" size="lg" data-testid="button-talk-support">
                  <HeadphonesIcon className="mr-2 h-5 w-5" />
                  Talk to Support
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <SocialProofSection />

        {/* Pain Points: Failed Deliveries & Poor Support */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-delivery-problems">
                Stop Losing Customers to <span className="text-destructive">Failed Deliveries</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-delivery-problems">
                Competitors promise speed but deliver frustration. Their tracking doesn't work, deliveries fail, and support ignores you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <Card className="border-destructive/50" data-testid="card-pain-delays">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Chronic Delays</h3>
                  <p className="text-muted-foreground">
                    "4-hour delivery" becomes 2 days. Promises of speed that never materialize, damaging your brand reputation
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/50" data-testid="card-pain-no-support">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <XCircle className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">No Support Response</h3>
                  <p className="text-muted-foreground">
                    Only 7% complaint response rate. Your issues go ignored while your customers suffer and your sales decline
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/50" data-testid="card-pain-broken-tech">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Broken Tracking</h3>
                  <p className="text-muted-foreground">
                    Buggy systems that don't update. "Advanced automation" that's just marketing hype, leaving you in the dark
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solution: GWC Reliability */}
        <section className="py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-gwc-reliability">
                GWC: <span className="text-primary">Real Reliability</span> in the UAE
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-gwc-reliability">
                We don't promise miracles. We deliver consistent, on-time fulfillment with support that actually responds.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="hover-elevate" data-testid="card-realistic-promises">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Truck className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Realistic Delivery Windows</h3>
                  <p className="text-muted-foreground mb-6">
                    Same-day in Dubai, next-day across UAE. We set honest expectations and consistently meet them - no false promises
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-primary font-medium">
                    <CheckCircle className="w-5 h-5" />
                    <span>99% On-Time Rate</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-responsive-support">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <HeadphonesIcon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Support That Responds</h3>
                  <p className="text-muted-foreground mb-6">
                    Real people who answer. Average response time under 2 hours, not days. Your issues get resolved, not ignored
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-primary font-medium">
                    <CheckCircle className="w-5 h-5" />
                    <span>95% Resolution Rate</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-working-tech">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Technology That Works</h3>
                  <p className="text-muted-foreground mb-6">
                    Real-time tracking that actually updates. Reliable integrations, not buggy beta features. Technology that adds value
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-primary font-medium">
                    <CheckCircle className="w-5 h-5" />
                    <span>Proven Systems</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/quote">
                <Button size="lg" data-testid="button-start-now">
                  Start Reliable UAE Fulfillment
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection segment="uae-reliable-service" />

        {/* Integrations */}
        <IntegrationsSection />

        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
