import { Header } from "@/components/Header";
import { SocialProofSection } from "@/components/SocialProofSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Truck, Package, Globe, Star, Zap, Activity, Database, MapPin, DollarSign, Target } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import truckImage from "@assets/GWC Truck - Riyadh_1_1757527184708.jpg";

export function LocalGccExpansionPage() {
  const [activeTab, setActiveTab] = useState("signup");

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
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${truckImage})` }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4" data-testid="badge-local-expansion">
                🇶🇦 🇦🇪 🇸🇦 Local Expansion Made Simple
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="heading-hero">
                Expand Your Local Business Across the <em className="italic text-primary not-italic">GCC Markets</em>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-hero-description">
                Turn your local e-commerce success into regional dominance. Start selling in Qatar, UAE, and Saudi Arabia with zero upfront investment and local expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/quote">
                  <Button size="lg" data-testid="button-get-quote">
                    Start GCC Expansion
                  </Button>
                </Link>
                <Button variant="outline" size="lg" data-testid="button-watch-demo">
                  <span className="mr-2">▶</span>
                  See Success Stories
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Carousel */}
        <SocialProofSection />

        {/* Top 3 GCC Markets */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4" data-testid="badge-top-markets">
                Priority Markets
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-top-markets">
                Your Top 3 GCC Expansion Destinations
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-markets-description">
                Strategic warehouse locations in the highest-opportunity markets for local businesses
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Qatar */}
              <Card className="relative overflow-hidden hover-elevate" data-testid="card-qatar">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🇶🇦</div>
                    <h3 className="text-2xl font-bold mb-4" data-testid="heading-qatar">Qatar</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Market Size</span>
                        <span className="font-semibold">$3.2B E-commerce</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Delivery Time</span>
                        <span className="font-semibold text-green-600">Same Day</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Growth Rate</span>
                        <span className="font-semibold text-blue-600">24% Annual</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Key Advantage</span>
                        <span className="font-semibold">Highest GDP/Capita</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* UAE */}
              <Card className="relative overflow-hidden hover-elevate border-primary/20" data-testid="card-uae">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🇦🇪</div>
                    <h3 className="text-2xl font-bold mb-4" data-testid="heading-uae">UAE</h3>
                    <Badge variant="secondary" className="mb-4">Largest Market</Badge>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Market Size</span>
                        <span className="font-semibold">$8.1B E-commerce</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Delivery Time</span>
                        <span className="font-semibold text-green-600">Same Day</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Growth Rate</span>
                        <span className="font-semibold text-blue-600">21% Annual</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Key Advantage</span>
                        <span className="font-semibold">Hub for Region</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Saudi Arabia */}
              <Card className="relative overflow-hidden hover-elevate" data-testid="card-saudi">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🇸🇦</div>
                    <h3 className="text-2xl font-bold mb-4" data-testid="heading-saudi">Saudi Arabia</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Market Size</span>
                        <span className="font-semibold">$7.8B E-commerce</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Delivery Time</span>
                        <span className="font-semibold text-green-600">Next Day</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Growth Rate</span>
                        <span className="font-semibold text-blue-600">26% Annual</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Key Advantage</span>
                        <span className="font-semibold">Vision 2030 Growth</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Combined market opportunity: <span className="font-bold text-primary">$19.1B+</span> across three strategic locations
              </p>
              <Link href="/quote">
                <Button size="lg" data-testid="button-start-expansion">
                  Start Your Expansion Journey
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Local Business Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-local-benefits">
                Why Local Businesses Choose GWC for GCC Expansion
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-benefits-description">
                Leverage our regional expertise and infrastructure to scale beyond your home market
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover-elevate" data-testid="card-zero-investment">
                <CardContent className="p-8">
                  <DollarSign className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Zero Upfront Investment</h3>
                  <p className="text-muted-foreground">
                    No warehouse setup costs, no minimum orders, no long-term contracts. Pay only for what you sell.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-local-expertise">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Local Market Expertise</h3>
                  <p className="text-muted-foreground">
                    Navigate cultural preferences, payment methods, and consumer behavior with our regional insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-instant-integration">
                <CardContent className="p-8">
                  <Zap className="h-12 w-12 text-orange-600 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Instant Integration</h3>
                  <p className="text-muted-foreground">
                    Connect your existing store in minutes. Works with Shopify, WooCommerce, Magento, and custom platforms.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-same-day-delivery">
                <CardContent className="p-8">
                  <Clock className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Same-Day Delivery</h3>
                  <p className="text-muted-foreground">
                    Competitive advantage with same-day delivery in Qatar and UAE, next-day in Saudi Arabia.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-transparent-pricing">
                <CardContent className="p-8">
                  <Shield className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Transparent Pricing</h3>
                  <p className="text-muted-foreground">
                    No hidden fees. Clear, predictable costs for storage, picking, packing, and shipping.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-local-compliance">
                <CardContent className="p-8">
                  <Globe className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Local Compliance</h3>
                  <p className="text-muted-foreground">
                    We handle customs, regulations, and local requirements so you can focus on growing your business.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Platform Integrations */}
        <IntegrationsSection />

        {/* Success Story - Local Business */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4" data-testid="badge-success-story">
                Success Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-8" data-testid="heading-success-story">
                From Local Success to Regional Leader
              </h2>
              
              <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="space-y-6">
                  <div className="flex justify-center mb-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed" data-testid="text-testimonial">
                    "We started as a small online retailer in Kuwait. Within 6 months of partnering with GWC, we expanded to Qatar, UAE, and Saudi Arabia. Our revenue increased by 340% and we now serve customers across the entire GCC region."
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4 pt-6">
                    <div className="text-center">
                      <div className="font-bold text-lg" data-testid="text-client-name">Sarah Al-Mahmoud</div>
                      <div className="text-muted-foreground" data-testid="text-client-title">Founder, Desert Bloom Cosmetics</div>
                      <div className="text-sm text-muted-foreground mt-1">Kuwait → GCC Region</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="text-metric-revenue">340%</div>
                  <div className="text-muted-foreground">Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="text-metric-markets">3</div>
                  <div className="text-muted-foreground">New Markets</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="text-metric-timeline">6</div>
                  <div className="text-muted-foreground">Months to Scale</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expansion Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-expansion-process">
                Your GCC Expansion in 3 Simple Steps
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-process-description">
                From local success to regional dominance in less than a week
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover-elevate" data-testid="card-step-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Connect Your Store</h3>
                  <p className="text-muted-foreground">
                    Instant integration with your existing platform. No technical setup required.
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    ⏱️ 5 minutes
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate" data-testid="card-step-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Ship Your Inventory</h3>
                  <p className="text-muted-foreground">
                    Send products to our Qatar, UAE, and Saudi warehouses. We handle the rest.
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    ⏱️ 2-3 days
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate" data-testid="card-step-3">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Start Selling</h3>
                  <p className="text-muted-foreground">
                    Go live across Qatar, UAE, and Saudi Arabia. Watch your business grow regionally.
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    ⏱️ Immediate
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/quote">
                <Button size="lg" data-testid="button-start-process">
                  Start Your Expansion Today
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection segment="local-gcc-expansion" />

        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}