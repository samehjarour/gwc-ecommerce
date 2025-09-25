import { Header } from "@/components/Header";
import { SocialProofSection } from "@/components/SocialProofSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Truck, Package, Globe, Star, Zap, Activity, Database, MapPin, Play } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import videoSrc from "@assets/GWC-website_1758777706579.mp4";

export function VideoLandingPage() {
  useEffect(() => {
    // Add noindex meta tag for testing
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    return () => {
      // Cleanup on unmount
      if (document.head.contains(metaRobots)) {
        document.head.removeChild(metaRobots);
      }
    };
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Video */}
        <section className="relative py-20 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4" data-testid="badge-mena-leader">
                  MENA's #1 Cross-Border Fulfillment Solution
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-hero">
                  See How GWC Powers <em className="italic text-primary not-italic">Your Growth</em>
                </h1>
                <p className="text-xl text-muted-foreground mb-8" data-testid="text-hero-description">
                  Watch how leading brands use our platform to scale their Middle East operations seamlessly. From integration to delivery - see the complete GWC experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/quote">
                    <Button size="lg" data-testid="button-get-quote">
                      Get Started Today
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" data-testid="button-learn-more">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                  <video 
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    data-testid="hero-video"
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Carousel */}
        <SocialProofSection />

        {/* Video Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-benefits">
                Everything You Need to <em className="italic text-primary">Scale Globally</em>
              </h2>
              <p className="text-xl text-muted-foreground" data-testid="text-benefits-subtitle">
                See why 100+ brands trust GWC for their cross-border fulfillment
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover-elevate" data-testid="card-integration">
                <CardContent className="pt-8 pb-8">
                  <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Instant Integration</h3>
                  <p className="text-muted-foreground mb-6">
                    Connect your store in minutes with one-click integrations for all major e-commerce platforms.
                  </p>
                  <Button variant="outline" data-testid="button-learn-integration">
                    See Integration Demo
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate" data-testid="card-fulfillment">
                <CardContent className="pt-8 pb-8">
                  <Package className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Smart Fulfillment</h3>
                  <p className="text-muted-foreground mb-6">
                    AI-powered fulfillment that optimizes routes, reduces costs, and ensures faster delivery times.
                  </p>
                  <Button variant="outline" data-testid="button-learn-fulfillment">
                    Watch Fulfillment Process
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate" data-testid="card-analytics">
                <CardContent className="pt-8 pb-8">
                  <Activity className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Real-Time Analytics</h3>
                  <p className="text-muted-foreground mb-6">
                    Complete visibility into your operations with real-time tracking and detailed analytics.
                  </p>
                  <Button variant="outline" data-testid="button-learn-analytics">
                    See Dashboard Demo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection segment="video" />

        {/* Platform Integrations */}
        <IntegrationsSection />

        {/* Results Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-results">
                Real Results. <em className="italic text-primary">Real Growth.</em>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div data-testid="stat-orders">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1M+</div>
                <div className="text-lg font-semibold">Orders Fulfilled</div>
                <div className="text-sm text-muted-foreground">Across 6 GCC countries</div>
              </div>
              <div data-testid="stat-accuracy">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">99.8%</div>
                <div className="text-lg font-semibold">Order Accuracy</div>
                <div className="text-sm text-muted-foreground">Industry-leading precision</div>
              </div>
              <div data-testid="stat-delivery">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24H</div>
                <div className="text-lg font-semibold">Average Delivery</div>
                <div className="text-sm text-muted-foreground">Same-day in major cities</div>
              </div>
              <div data-testid="stat-satisfaction">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-lg font-semibold">Customer Satisfaction</div>
                <div className="text-sm text-muted-foreground">Brands trust our service</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Video Enhanced */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-how-it-works">
                See It in <em className="italic text-primary">Action</em>
              </h2>
              <p className="text-xl text-muted-foreground" data-testid="text-how-it-works-subtitle">
                From setup to delivery - watch the complete customer journey
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4" data-testid="step-connect">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Connect Your Store</h3>
                      <p className="text-muted-foreground">
                        One-click integration with your existing e-commerce platform. No technical knowledge required.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="step-inventory">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Send Inventory</h3>
                      <p className="text-muted-foreground">
                        Ship your products to our strategically located warehouses across the GCC region.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="step-fulfill">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Automatic Fulfillment</h3>
                      <p className="text-muted-foreground">
                        Orders are automatically picked, packed, and shipped with real-time tracking.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="step-deliver">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                      <p className="text-muted-foreground">
                        Same-day or next-day delivery across all GCC markets with complete visibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                    <span className="text-lg text-muted-foreground">Process Walkthrough Video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}