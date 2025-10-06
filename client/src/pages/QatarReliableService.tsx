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

export function QatarReliableService() {
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
              <Badge variant="outline" className="mb-4" data-testid="badge-qatar-reliable">
                Reliable Fulfillment for Qatar E-Commerce
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="heading-hero">
                Qatar Delivery That <span className="text-primary">Never Lets You Down</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-description">
                Stop worrying about failed deliveries and unresponsive support. Get reliable Qatar fulfillment with real customer service that's there when you need it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/quote">
                  <Button size="lg" data-testid="button-start-reliable">
                    <Shield className="mr-2 h-5 w-5" />
                    Start Reliable Service
                  </Button>
                </Link>
                <Button variant="outline" size="lg" data-testid="button-contact-team">
                  <HeadphonesIcon className="mr-2 h-5 w-5" />
                  Contact Qatar Team
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
                <span className="text-destructive">Unreliable Service</span> Hurts Qatar Businesses
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-delivery-problems">
                Competitors promise innovation but deliver broken tracking, missed deliveries, and support that never responds.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <Card className="border-destructive/50" data-testid="card-pain-failed-delivery">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Broken Delivery Promises</h3>
                  <p className="text-muted-foreground">
                    "Same-day" turns into 3 days. Speed promises that never materialize, leaving Qatar customers frustrated
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/50" data-testid="card-pain-ignored-issues">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <XCircle className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Support That Ignores You</h3>
                  <p className="text-muted-foreground">
                    7% complaint response rate means your issues get buried. No trust in resolution when things go wrong
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/50" data-testid="card-pain-false-tech">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Tech That Doesn't Work</h3>
                  <p className="text-muted-foreground">
                    Claims of "advanced robotics" and automation that's just marketing hype. Tracking that never updates
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
                GWC Qatar: <span className="text-primary">Dependable Service</span>, Every Time
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-gwc-reliability">
                No hype, just honest delivery windows and support that responds. Build trust with your Qatar customers through consistency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="hover-elevate" data-testid="card-consistent-delivery">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Truck className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Honest Qatar Delivery</h3>
                  <p className="text-muted-foreground mb-6">
                    Same-day delivery in Doha, next-day across Qatar. Realistic promises we consistently keep - building your reputation
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-primary font-medium">
                    <CheckCircle className="w-5 h-5" />
                    <span>98% On-Time in Qatar</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-real-support">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <HeadphonesIcon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Qatar Support Team</h3>
                  <p className="text-muted-foreground mb-6">
                    Dedicated Qatar team that responds fast. Average 90-minute response time, not days of silence. Real problem-solving
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-primary font-medium">
                    <CheckCircle className="w-5 h-5" />
                    <span>Local Qatar Support</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-proven-systems">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Reliable Technology</h3>
                  <p className="text-muted-foreground mb-6">
                    Tracking that works. Integrations that run smoothly. No beta features - just proven systems for Qatar operations
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-primary font-medium">
                    <CheckCircle className="w-5 h-5" />
                    <span>Battle-Tested Tech</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/quote">
                <Button size="lg" data-testid="button-start-now">
                  Start Reliable Qatar Fulfillment
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection segment="qatar-reliable-service" />

        {/* Integrations */}
        <IntegrationsSection />

        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
