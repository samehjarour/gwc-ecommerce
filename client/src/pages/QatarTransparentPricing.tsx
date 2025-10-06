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

export function QatarTransparentPricing() {
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
              <Badge variant="outline" className="mb-4" data-testid="badge-qatar-market">
                Transparent Pricing for Qatar Businesses
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="heading-hero">
                Clear Fulfillment Costs for <span className="text-primary">Qatar E-Commerce</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-description">
                No more guessing games with pricing. Get instant, transparent quotes for Qatar fulfillment. Budget confidently with all-inclusive rates - no hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/quote">
                  <Button size="lg" data-testid="button-get-instant-quote">
                    <Calculator className="mr-2 h-5 w-5" />
                    Get Qatar Pricing
                  </Button>
                </Link>
                <Button variant="outline" size="lg" data-testid="button-view-pricing">
                  <Eye className="mr-2 h-5 w-5" />
                  See Pricing Breakdown
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
                Qatar SMBs Deserve <span className="text-destructive">Better Than Hidden Costs</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-pricing-problem">
                Other providers trap Qatar businesses in complex pricing structures that make budgeting impossible
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <Card className="border-destructive/50" data-testid="card-pain-hidden-fees">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <XCircle className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Surprise Charges</h3>
                  <p className="text-muted-foreground">
                    "Storage fees", "handling charges", and "special processing" costs that appear only after you've committed
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/50" data-testid="card-pain-unclear-proposals">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">"Solution-Based" Opacity</h3>
                  <p className="text-muted-foreground">
                    Custom quotes that hide the real costs, making it impossible to compare or plan your Qatar operations budget
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/50" data-testid="card-pain-sales-delays">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Weeks of Waiting</h3>
                  <p className="text-muted-foreground">
                    Long sales cycles just to get basic pricing. Your Qatar growth stalls while you wait for quotes
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
                GWC Qatar: <span className="text-primary">Pricing You Can Trust</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-gwc-solution">
                Instant quotes for Qatar fulfillment. Everything included, nothing hidden. Start scaling your business today.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="hover-elevate" data-testid="card-instant-pricing">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calculator className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Qatar-Specific Pricing</h3>
                  <p className="text-muted-foreground mb-6">
                    Get your exact costs for Qatar storage and delivery in minutes. Online calculator built for Qatar businesses
                  </p>
                  <CheckCircle className="w-6 h-6 text-primary mx-auto" />
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-all-inclusive">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Complete Package Pricing</h3>
                  <p className="text-muted-foreground mb-6">
                    One price includes Qatar warehousing, picking, packing, and delivery. No add-ons, no surprises, no fine print
                  </p>
                  <CheckCircle className="w-6 h-6 text-primary mx-auto" />
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-simple-contracts">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Straightforward Agreements</h3>
                  <p className="text-muted-foreground mb-6">
                    Clear contracts in plain language. Compare providers easily and budget accurately for your Qatar expansion
                  </p>
                  <CheckCircle className="w-6 h-6 text-primary mx-auto" />
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/quote">
                <Button size="lg" data-testid="button-see-pricing">
                  Get Your Qatar Quote Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection segment="qatar-transparent-pricing" />

        {/* Integrations */}
        <IntegrationsSection />

        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
