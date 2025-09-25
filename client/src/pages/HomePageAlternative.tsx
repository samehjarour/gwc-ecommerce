import { Header } from "@/components/Header";
import { SocialProofSection } from "@/components/SocialProofSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Truck, Package, Globe, Star, Zap, Activity, Database, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import truckImage from "@assets/GWC Truck - Riyadh_1_1757527184708.jpg";
import videoSrc from "@assets/GWC-website_1758777706579.mp4";

export function HomePageAlternative() {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - IQ Inspired */}
        <section className="relative py-20 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${truckImage})` }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4" data-testid="badge-mena-leader">
                MENA's #1 Cross-Border Fulfillment Solution
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="heading-hero">
                Expand your European Brands to the <em className="italic text-primary not-italic">Middle East</em>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-hero-description">
                Trusted by 100+ European brands to expand across GCC markets. One platform, instant integration, same-day fulfillment across 6 countries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/quote">
                  <Button size="lg" data-testid="button-get-quote">
                    Get Instant Quote
                  </Button>
                </Link>
                <Button variant="outline" size="lg" data-testid="button-watch-demo">
                  <span className="mr-2">▶</span>
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Carousel */}
        <SocialProofSection />

        {/* Testimonials Section - Concept A */}
        <TestimonialsSection segment="homepage" />

        {/* Solutions Section - IQ Style 3 Cards */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-solutions">
                Solutions <em className="italic text-primary">Designed</em> For European Expansion
              </h2>
              <p className="text-xl text-muted-foreground" data-testid="text-solutions-subtitle">
                Complete cross-border logistics powered by local expertise and advanced technology
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover-elevate" data-testid="card-fulfillment">
                <CardContent className="pt-8 pb-8">
                  <Package className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Cross-Border Fulfillment powered by local expertise</h3>
                  <p className="text-muted-foreground mb-6">
                    GWC is a MENA-based fulfillment solution <strong>trusted by 100+ European brands</strong> to deliver 
                    orders from Europe to Middle East customers.
                  </p>
                  <Button variant="outline" data-testid="button-learn-fulfillment">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate" data-testid="card-platform">
                <CardContent className="pt-8 pb-8">
                  <Activity className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">All-in-one platform for visibility and scale</h3>
                  <p className="text-muted-foreground mb-6">
                    Integrate, monitor, scale and track your Middle East operations seamlessly with real-time visibility.
                  </p>
                  <Button variant="outline" data-testid="button-learn-platform">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate" data-testid="card-delivery">
                <CardContent className="pt-8 pb-8">
                  <Truck className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Same-day delivery and more for GCC markets</h3>
                  <p className="text-muted-foreground mb-6">
                    Grow as you go with flexible delivery solutions, nationwide with same day and next day delivery across GCC.
                  </p>
                  <Button variant="outline" data-testid="button-learn-delivery">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Additional Services Row */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="text-center hover-elevate" data-testid="card-company-establishment">
                <CardContent className="pt-8 pb-8">
                  <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Company Establishment in the Middle East</h3>
                  <p className="text-muted-foreground mb-6">
                    We help European brands establish their legal presence in Middle East markets with comprehensive business setup services and local expertise.
                  </p>
                  <Button variant="outline" data-testid="button-learn-establishment">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate" data-testid="card-accounting-legal">
                <CardContent className="pt-8 pb-8">
                  <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Accounting & Legal Services</h3>
                  <p className="text-muted-foreground mb-6">
                    Complete accounting and legal support tailored for European businesses expanding into GCC markets, ensuring compliance and smooth operations.
                  </p>
                  <Button variant="outline" data-testid="button-learn-accounting">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Track Everything Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-track">
                  Track Everything. Anywhere.
                </h2>
                <p className="text-xl text-muted-foreground mb-8" data-testid="text-track-description">
                  GWC Platform is simple, intuitive, and powerful. Our priority was to make cross-border expansion 
                  as user-friendly as possible. Integrate your European store and start selling in the Middle East.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3" data-testid="feature-integration">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Integrate with multiple European eCommerce platforms</span>
                  </div>
                  <div className="flex items-center gap-3" data-testid="feature-visibility">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Real-time visibility for your GCC operations</span>
                  </div>
                  <div className="flex items-center gap-3" data-testid="feature-scale">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Scale and manage your Middle East inventory with ease</span>
                  </div>
                </div>
                <Button size="lg" data-testid="button-demo">
                  <span className="mr-2">▶</span>
                  Watch Platform Demo
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    data-testid="platform-demo-video"
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Tabbed Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-how-it-works">
                Simplify Your European to GCC Expansion with GWC
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="flex border-b mb-8 overflow-x-auto" data-testid="tabs-how-it-works">
                {[
                  { id: "signup", label: "1. SIGNUP", icon: <Zap className="w-5 h-5" /> },
                  { id: "inventory", label: "2. INVENTORY", icon: <Package className="w-5 h-5" /> },
                  { id: "fulfill", label: "3. FULFILL", icon: <Activity className="w-5 h-5" /> },
                  { id: "deliver", label: "4. DELIVER", icon: <Truck className="w-5 h-5" /> }
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
                {activeTab === "signup" && (
                  <div className="text-center" data-testid="content-signup">
                    <h3 className="text-2xl font-semibold mb-4">
                      Sign up, onboard and integrate your European eCommerce website within 24 hours and accelerate your GCC growth
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Quick and easy sign-up:</strong> Our efficient process gets you started swiftly in GCC markets.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Easy integration:</strong> We simplify connecting your European store to Middle East fulfillment.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Expert guidance:</strong> Our team provides specialized knowledge for GCC market expansion.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Swift implementation:</strong> Begin serving Middle East customers promptly.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === "inventory" && (
                  <div className="text-center" data-testid="content-inventory">
                    <h3 className="text-2xl font-semibold mb-4">
                      Keep your products safe with our strategically located, climate-controlled Middle East warehouses
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Climate control:</strong> Optimal temperature and humidity for product protection.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Strategic locations:</strong> Warehouses positioned for optimal GCC market coverage.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Enhanced security:</strong> Top-tier security measures with 24/7 monitoring.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Real-time tracking:</strong> Live inventory monitoring with instant updates.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "fulfill" && (
                  <div className="text-center" data-testid="content-fulfill">
                    <h3 className="text-2xl font-semibold mb-4">
                      Experience hassle-free Middle East fulfillment with our reliable and fast pick, pack, and shipping services
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Efficient operations:</strong> Advanced systems ensure accurate picking and packing.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Custom packaging:</strong> Build your brand with customized unboxing experiences.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Quality control:</strong> Rigorous measures to prevent defects or damages.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Hassle-free experience:</strong> Focus on growth while we handle fulfillment.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "deliver" && (
                  <div className="text-center" data-testid="content-deliver">
                    <h3 className="text-2xl font-semibold mb-4">
                      Deliver to your GCC customers with flexible options and real-time tracking
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Flexible delivery options:</strong> Same-day, next-day, or scheduled delivery across GCC.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Real-time tracking:</strong> Customers can track deliveries for better planning.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Local expertise:</strong> Navigate GCC customs and regulations seamlessly.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Returns management:</strong> Smooth returns processing for customer satisfaction.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <IntegrationsSection />

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div data-testid="stat-countries">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">6</div>
                <div className="text-lg font-semibold">GCC Countries</div>
                <div className="text-sm text-muted-foreground">Complete market coverage</div>
              </div>
              <div data-testid="stat-accuracy">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">99.8%</div>
                <div className="text-lg font-semibold">Order Accuracy</div>
                <div className="text-sm text-muted-foreground">European quality standards</div>
              </div>
              <div data-testid="stat-delivery">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24H</div>
                <div className="text-lg font-semibold">Average Delivery</div>
                <div className="text-sm text-muted-foreground">Same-day in major cities</div>
              </div>
              <div data-testid="stat-brands">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
                <div className="text-lg font-semibold">European Brands</div>
                <div className="text-sm text-muted-foreground">Trust our expertise</div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-comparison">
                It's Like a <em className="italic text-primary">Superpower</em>, For Your European Business
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-primary/20 shadow-lg" data-testid="card-gwc-fulfillment">
                  <CardContent className="pt-8 pb-8">
                    <h3 className="text-2xl font-bold text-primary mb-6 text-center">GWC'S CROSS-BORDER FULFILLMENT</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <span>One-stop shop for European to GCC expansion and fulfillment</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <span>Highly scalable fulfillment accommodating European e-commerce dynamics</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <span>Extended GCC coverage ensuring best delivery performance</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <span>Solution-based proposals tailored to European brands</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <span>Hassle-free fulfillment, delivery and customizable returns management</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-muted" data-testid="card-traditional-fulfillment">
                  <CardContent className="pt-8 pb-8">
                    <h3 className="text-2xl font-bold text-muted-foreground mb-6 text-center">TRADITIONAL FULFILLMENT</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground mt-1" />
                        <span className="text-muted-foreground">Several service providers needed for Middle East expansion</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground mt-1" />
                        <span className="text-muted-foreground">Bottlenecks and capacity constraints due to manual processing</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground mt-1" />
                        <span className="text-muted-foreground">Limited GCC coverage resulting in slower deliveries</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground mt-1" />
                        <span className="text-muted-foreground">Transaction-based proposals with hidden costs</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground mt-1" />
                        <span className="text-muted-foreground">Rigid order management and limited returns processing</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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