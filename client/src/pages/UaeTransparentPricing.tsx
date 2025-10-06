import { Header } from "@/components/Header";
import { SocialProofSection } from "@/components/SocialProofSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Eye, FileText, CheckCircle, XCircle, Calculator, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import truckImage from "@assets/GWC Truck - Riyadh_1_1757527184708.jpg";

export function UaeTransparentPricing() {
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
              <Badge variant="outline" className="mb-4" data-testid="badge-uae-market">
                Transparent Pricing for UAE Businesses
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="heading-hero">
                No Hidden Fees. <span className="text-primary">Just Clear, Honest Pricing.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-description">
                Tired of "solution-based proposals" and surprise charges? Get instant, transparent pricing for your UAE fulfillment needs. What you see is what you pay.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/quote">
                  <Button size="lg" data-testid="button-get-instant-quote">
                    <Calculator className="mr-2 h-5 w-5" />
                    Get Instant Pricing
                  </Button>
                </Link>
                <Button variant="outline" size="lg" data-testid="button-view-pricing">
                  <Eye className="mr-2 h-5 w-5" />
                  View Pricing Calculator
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <SocialProofSection />

        {/* Pain Point: Opaque Pricing */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-pricing-problem">
                The Problem with <span className="text-destructive">Hidden Costs</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-pricing-problem">
                Most fulfillment providers in the UAE hide their true costs behind "custom quotes" and lengthy sales processes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <Card className="border-destructive/50" data-testid="card-pain-hidden-fees">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <XCircle className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Hidden Fees Everywhere</h3>
                  <p className="text-muted-foreground">
                    Surprise charges for receiving, storage, packaging, and "special handling" that weren't in the original quote
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/50" data-testid="card-pain-unclear-contracts">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Unclear Contracts</h3>
                  <p className="text-muted-foreground">
                    Complex pricing structures that make it impossible to compare providers or budget accurately
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/50" data-testid="card-pain-sales-friction">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Lengthy Sales Process</h3>
                  <p className="text-muted-foreground">
                    Weeks of back-and-forth just to get a basic price, wasting your time when you need to move fast
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solution: GWC Transparent Pricing */}
        <section className="py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-gwc-solution">
                The GWC Difference: <span className="text-primary">Complete Transparency</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-gwc-solution">
                Clear pricing you can see before you commit. No surprises, no hidden fees, no lengthy sales calls required.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="hover-elevate" data-testid="card-instant-pricing">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calculator className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Instant Online Pricing</h3>
                  <p className="text-muted-foreground mb-6">
                    Get your quote in minutes, not weeks. Our online calculator shows you exactly what you'll pay for UAE fulfillment
                  </p>
                  <CheckCircle className="w-6 h-6 text-primary mx-auto" />
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-all-inclusive">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">All-Inclusive Rates</h3>
                  <p className="text-muted-foreground mb-6">
                    Storage, picking, packing, and UAE delivery - everything included in one clear price. No surprise "extra" fees
                  </p>
                  <CheckCircle className="w-6 h-6 text-primary mx-auto" />
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-simple-contracts">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Simple, Clear Contracts</h3>
                  <p className="text-muted-foreground mb-6">
                    Plain language agreements you can actually understand. Budget confidently for your UAE operations
                  </p>
                  <CheckCircle className="w-6 h-6 text-primary mx-auto" />
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/quote">
                <Button size="lg" data-testid="button-see-pricing">
                  See Your Pricing Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection segment="uae-transparent-pricing" />

        {/* Integrations */}
        <IntegrationsSection />

        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
