import { Header } from "@/components/Header";
import { SocialProofSection } from "@/components/SocialProofSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Truck, Package, Globe, Star, Zap, Activity, Database, MapPin, DollarSign } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import truckImage from "@assets/GWC Truck - Riyadh_1_1757527184708.jpg";

export function GccInternalPage() {
  const [activeTab, setActiveTab] = useState("signup");

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
              <Badge variant="outline" className="mb-4" data-testid="badge-gcc-leader">
                GCC's Most Trusted Fulfillment Network
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="heading-hero">
                Scale Your <em className="italic text-primary not-italic">GCC E-commerce</em> Effortlessly
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-hero-description">
                Connect your store in minutes. Transparent pricing. No long-term contracts for maximum flexibility. Strategic warehouses in UAE, Saudi, and Qatar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/quote">
                  <Button size="lg" data-testid="button-get-quote">
                    Get Instant Quote
                  </Button>
                </Link>
                <Button variant="outline" size="lg" data-testid="button-watch-demo">
                  <span className="mr-2">▶</span>
                  See Integration Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Carousel */}
        <SocialProofSection />

        {/* Platform Integrations - Prominently Featured */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-integrations">
                Connect Your Store in <em className="italic text-primary">Minutes</em>
              </h2>
              <p className="text-xl text-muted-foreground" data-testid="text-integrations-subtitle">
                One-click integration with all major GCC e-commerce platforms
              </p>
            </div>
            <IntegrationsSection />
          </div>
        </section>

        {/* Pricing Transparency */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-pricing">
                <em className="italic text-primary">Transparent</em> Pricing. No Hidden Fees.
              </h2>
              <p className="text-xl text-muted-foreground" data-testid="text-pricing-subtitle">
                Simple, predictable costs that scale with your business. No long-term contracts - start or stop anytime.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center hover-elevate border-2" data-testid="card-storage-pricing">
                <CardContent className="pt-8 pb-8">
                  <Package className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Storage</h3>
                  <div className="text-3xl font-bold text-primary mb-2">AED 2.5</div>
                  <div className="text-sm text-muted-foreground mb-6">per cubic meter/month</div>
                  <ul className="text-left space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Climate-controlled facilities
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Real-time inventory tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Security monitoring 24/7
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate border-2 border-primary/50" data-testid="card-fulfillment-pricing">
                <CardContent className="pt-8 pb-8">
                  <Activity className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Fulfillment</h3>
                  <div className="text-3xl font-bold text-primary mb-2">AED 8</div>
                  <div className="text-sm text-muted-foreground mb-6">per order processed</div>
                  <ul className="text-left space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Pick, pack & ship
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Custom packaging options
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Quality control checks
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate border-2" data-testid="card-delivery-pricing">
                <CardContent className="pt-8 pb-8">
                  <Truck className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Delivery</h3>
                  <div className="text-3xl font-bold text-primary mb-2">AED 12</div>
                  <div className="text-sm text-muted-foreground mb-6">same-day within city</div>
                  <ul className="text-left space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Same-day & next-day options
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Real-time tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Returns management
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/quote#quote-form">
                <Button size="lg" data-testid="button-get-detailed-pricing">
                  Get Detailed Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Strategic Warehouse Locations */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-warehouses">
                Strategic <em className="italic text-primary">Warehouse Network</em>
              </h2>
              <p className="text-xl text-muted-foreground" data-testid="text-warehouses-subtitle">
                Optimally positioned across the GCC for maximum delivery speed and efficiency
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover-elevate" data-testid="card-uae-warehouse">
                <CardContent className="pt-8 pb-8">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">UAE Hub</h3>
                  <p className="text-muted-foreground mb-6">
                    <strong>Dubai & Abu Dhabi</strong><br/>
                    Prime location serving Northern Emirates with same-day delivery to Dubai, Sharjah, and Ajman
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Coverage:</span>
                      <span className="font-semibold">UAE + Oman</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Same-day cities:</span>
                      <span className="font-semibold">4</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Capacity:</span>
                      <span className="font-semibold">50,000 sqm</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate border-primary/50" data-testid="card-saudi-warehouse">
                <CardContent className="pt-8 pb-8">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Saudi Hub</h3>
                  <p className="text-muted-foreground mb-6">
                    <strong>Riyadh & Jeddah</strong><br/>
                    Central and Western regions coverage with same-day delivery across major Saudi cities
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Coverage:</span>
                      <span className="font-semibold">Saudi Arabia</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Same-day cities:</span>
                      <span className="font-semibold">6</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Capacity:</span>
                      <span className="font-semibold">75,000 sqm</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate" data-testid="card-qatar-warehouse">
                <CardContent className="pt-8 pb-8">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Qatar Hub</h3>
                  <p className="text-muted-foreground mb-6">
                    <strong>Doha Industrial Area</strong><br/>
                    Complete Qatar coverage with expansion to Kuwait and Bahrain markets
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Coverage:</span>
                      <span className="font-semibold">Qatar + Kuwait + Bahrain</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Same-day cities:</span>
                      <span className="font-semibold">3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Capacity:</span>
                      <span className="font-semibold">25,000 sqm</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection segment="gcc-internal" />

        {/* Why Choose GWC for GCC */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-why-gwc">
                Why GCC Businesses <em className="italic text-primary">Choose</em> GWC
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4" data-testid="feature-local-expertise">
                    <Shield className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Local GCC Expertise</h3>
                      <p className="text-muted-foreground">
                        Born and raised in the GCC. We understand local customs, regulations, and customer expectations across all six countries.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="feature-integration-speed">
                    <Zap className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Lightning-Fast Integration</h3>
                      <p className="text-muted-foreground">
                        Connect your Shopify, WooCommerce, or Magento store in under 5 minutes. Start fulfilling orders the same day.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="feature-transparent-costs">
                    <DollarSign className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Maximum Flexibility</h3>
                      <p className="text-muted-foreground">
                        What you see is what you pay. Transparent pricing with no setup fees, no minimums, and no long-term contracts. Scale up or down as needed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="feature-real-time-tracking">
                    <Activity className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Real-Time Visibility</h3>
                      <p className="text-muted-foreground">
                        Track every order, every shipment, every return in real-time. Complete visibility into your GCC operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-2xl text-muted-foreground">GCC Fulfillment Dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div data-testid="stat-gcc-cities">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">13</div>
                <div className="text-lg font-semibold">Same-Day Cities</div>
                <div className="text-sm text-muted-foreground">Across UAE, Saudi & Qatar</div>
              </div>
              <div data-testid="stat-integration-time">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5min</div>
                <div className="text-lg font-semibold">Integration Time</div>
                <div className="text-sm text-muted-foreground">Connect any platform</div>
              </div>
              <div data-testid="stat-delivery-speed">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2H</div>
                <div className="text-lg font-semibold">Average Delivery</div>
                <div className="text-sm text-muted-foreground">Within major cities</div>
              </div>
              <div data-testid="stat-gcc-coverage">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-lg font-semibold">GCC Coverage</div>
                <div className="text-sm text-muted-foreground">All six countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-how-it-works">
                Get Started in <em className="italic text-primary">3 Simple Steps</em>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="flex border-b mb-8 overflow-x-auto" data-testid="tabs-how-it-works">
                {[
                  { id: "connect", label: "1. CONNECT", icon: <Zap className="w-5 h-5" /> },
                  { id: "inventory", label: "2. SEND INVENTORY", icon: <Package className="w-5 h-5" /> },
                  { id: "fulfill", label: "3. START FULFILLING", icon: <Truck className="w-5 h-5" /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                    data-testid={`tab-${tab.id}`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="min-h-[300px]">
                {activeTab === "connect" && (
                  <div className="text-center" data-testid="content-connect">
                    <h3 className="text-2xl font-semibold mb-4">
                      Connect your store with our one-click integrations
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>5-minute setup:</strong> Connect Shopify, WooCommerce, Magento or any platform instantly
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>No technical skills needed:</strong> Our team handles all the technical setup for you
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Real-time sync:</strong> Orders flow automatically from your store to our system
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Custom API available:</strong> Build your own integration with our developer-friendly API
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === "inventory" && (
                  <div className="text-center" data-testid="content-inventory">
                    <h3 className="text-2xl font-semibold mb-4">
                      Send your products to our strategically located warehouses
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Strategic locations:</strong> Choose UAE, Saudi, or Qatar based on your customer base
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Easy shipping:</strong> We provide prepaid shipping labels for inventory transfers
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Automated receiving:</strong> Products scanned and added to your inventory automatically
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Climate controlled:</strong> Protect your products in our temperature-controlled facilities
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "fulfill" && (
                  <div className="text-center" data-testid="content-fulfill">
                    <h3 className="text-2xl font-semibold mb-4">
                      Start fulfilling orders across the GCC immediately
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Automatic fulfillment:</strong> Orders are picked, packed and shipped without your intervention
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Same-day delivery:</strong> Reach customers in 13 major GCC cities the same day
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Real-time tracking:</strong> You and your customers track every shipment live
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Returns handled:</strong> We manage returns and exchanges seamlessly
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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