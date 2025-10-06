import { Header } from "@/components/Header";
import { SocialProofSection } from "@/components/SocialProofSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { MapStatsSection } from "@/components/MapStatsSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Headphones, Clock, Award, Package, Activity } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";
import videoSrc from "@assets/GWC-website_1758777706579.mp4";

export function QatarVideoPage() {
  useEffect(() => {
    document.title = "Reliable E-commerce Fulfillment in Qatar with Real Customer Service | GWC";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get reliable e-commerce fulfillment in Qatar with real customer service that is there when you need it. 98% on-time delivery with 90-minute response time.');
    }
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
                <Badge variant="outline" className="mb-4" data-testid="badge-qatar-leader">
                  Qatar&apos;s #1 E-commerce Fulfillment Partner
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-hero">
                  Get reliable e-commerce fulfillment in Qatar with <em className="italic text-primary not-italic">real customer service</em> that&apos;s there when you need it
                </h1>
                <p className="text-xl text-muted-foreground mb-8" data-testid="text-hero-description">
                  Experience dependable delivery with 98% on-time performance and responsive support team with 90-minute average response time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/quote2">
                    <Button size="lg" data-testid="button-get-quote">
                      Get Started Today
                    </Button>
                  </Link>
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

        {/* Benefits Section - Positive Only */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-benefits">
                Service That <em className="italic text-primary">Delivers Results</em>
              </h2>
              <p className="text-xl text-muted-foreground" data-testid="text-benefits-subtitle">
                Real support, dependable delivery, and technology that actually works
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover-elevate" data-testid="card-delivery">
                <CardContent className="pt-8 pb-8">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Dependable Delivery</h3>
                  <p className="text-muted-foreground mb-4">
                    98% on-time delivery rate in Qatar. Your customers get their orders when promised, building trust in your brand.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate" data-testid="card-support">
                <CardContent className="pt-8 pb-8">
                  <Headphones className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Real Customer Support</h3>
                  <p className="text-muted-foreground mb-4">
                    90-minute average response time from our local Qatar support team. Get answers when you need them, not days later.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate" data-testid="card-technology">
                <CardContent className="pt-8 pb-8">
                  <Activity className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Reliable Technology</h3>
                  <p className="text-muted-foreground mb-4">
                    Live tracking that actually updates. Real-time inventory visibility. Technology built to work, not just to impress.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Stats Section */}
        <MapStatsSection />

        {/* Testimonials */}
        <TestimonialsSection segment="qatar-video" />

        {/* Platform Integrations */}
        <IntegrationsSection />

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-how-it-works">
                Simple Process, <em className="italic text-primary">Reliable Results</em>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4" data-testid="step-connect">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Connect Your Store</h3>
                      <p className="text-muted-foreground">
                        Quick integration with your e-commerce platform. Our Qatar team guides you through setup.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="step-inventory">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Send Inventory to Qatar</h3>
                      <p className="text-muted-foreground">
                        Ship products to our Qatar fulfillment center for fast local delivery to your customers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="step-fulfill">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">We Handle Fulfillment</h3>
                      <p className="text-muted-foreground">
                        Orders automatically picked, packed, and shipped with real-time tracking updates.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="step-support">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Get Support When Needed</h3>
                      <p className="text-muted-foreground">
                        Local Qatar support team available to help you and answer customer questions quickly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <video 
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
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
