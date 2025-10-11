import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SocialProofSection } from "@/components/SocialProofSection";
import { PainPointSolver } from "@/components/PainPointSolver";
import { CompetitorComparisonTable } from "@/components/CompetitorComparisonTable";
import { PricingTransparencyCalculator } from "@/components/PricingTransparencyCalculator";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Shield, DollarSign, Headphones, CheckCircle, Zap, Package2, Tags, Wrench, ThermometerSnowflake, Sparkles, Box } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export function SwitchPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Switch to GWC - No More Hidden Fees or Poor Support | GWC with Quivo";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Tired of hidden fees, poor support, and unreliable delivery? Switch to GWC for transparent pricing, 90-minute response time, and 98% on-time delivery.');
    }
  }, []);

  const painPoints = [
    {
      problem: "Your current 3PL has hidden fees that eat into your profit margins. You discover new charges every month that weren't in the original quote.",
      solution: "Complete pricing transparency with our online calculator. Every cost is clearly stated upfront - storage, pick & pack, and delivery. No surprises, ever.",
      benefit: "Save 15-30% on fulfillment costs with transparent, competitive pricing you can actually plan around."
    },
    {
      problem: "Weekend orders pile up. Coverage gaps mean delayed deliveries. Your customers complain about inconsistent service and you're losing sales.",
      solution: "24/7 fulfillment operations with weekend coverage. Orders placed Friday evening ship Saturday. Your customers get consistent service every day of the week.",
      benefit: "Increase weekend sales by 40% with reliable fulfillment that matches your customers' shopping habits."
    },
    {
      problem: "It takes days to get responses from support. When issues arise, you're left waiting while your customers get frustrated and your reputation suffers.",
      solution: "90-minute average response time from our local Qatar support team. Real people who understand your business and can solve problems fast.",
      benefit: "Resolve issues 10x faster. Keep your customers happy and protect your brand reputation."
    },
    {
      problem: "Stock-outs happen because inventory tracking is unreliable. You oversell, disappoint customers, and waste time manually tracking across channels.",
      solution: "Real-time inventory visibility across all channels. Automated sync prevents overselling. Live dashboard shows exactly what's in stock, always.",
      benefit: "Eliminate overselling and reduce stock-outs by 85%. Never disappoint customers again."
    },
    {
      problem: "Your current provider's SLAs are long and they rarely meet them. Deliveries are unpredictable and your customers notice.",
      solution: "98% on-time delivery rate with industry-leading SLAs. We track every shipment and proactively communicate any delays.",
      benefit: "Boost customer satisfaction scores by 35%. Build a reputation for reliable delivery."
    },
    {
      problem: "Complex contracts with 'weird clauses' that lock you in. High cancellation fees and terms that favor the provider, not you.",
      solution: "Simple, fair contracts with no hidden clauses. Flexible terms that grow with your business. Cancel anytime with 30 days notice.",
      benefit: "Sleep better knowing you're not locked into an unfavorable contract. Switch if we don't deliver."
    }
  ];

  const comparisonFeatures = [
    { name: "Public Pricing Calculator", gwc: true, competitor1: false, competitor2: false, highlight: true },
    { name: "No Hidden Fees", gwc: true, competitor1: false, competitor2: false, highlight: true },
    { name: "Average Response Time", gwc: "90 minutes", competitor1: "24-48 hours", competitor2: "24+ hours", highlight: true },
    { name: "Weekend Coverage", gwc: true, competitor1: false, competitor2: "Limited" },
    { name: "24/7 Support", gwc: true, competitor1: false, competitor2: false },
    { name: "Real-time Inventory Sync", gwc: true, competitor1: "Delayed", competitor2: "Delayed" },
    { name: "On-time Delivery Rate", gwc: "98%", competitor1: "85-90%", competitor2: "85-90%" },
    { name: "Contract Flexibility", gwc: "30-day notice", competitor1: "12 months locked", competitor2: "Complex terms" },
    { name: "Multi-channel Integration", gwc: "All platforms", competitor1: "Limited", competitor2: "Limited" },
    { name: "COD Settlement Time", gwc: "3 days", competitor1: "14 days", competitor2: "14 days", highlight: true },
    { name: "Setup Fee", gwc: "AED 0", competitor1: "AED 2,000+", competitor2: "AED 1,500+" },
    { name: "Local Qatar Support Team", gwc: true, competitor1: false, competitor2: false }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4" data-testid="badge-switch">
                Made for Frustrated E-commerce Businesses
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="heading-hero">
                Tired of <span className="text-destructive line-through">Hidden Fees</span>, <span className="text-destructive line-through">Poor Support</span>, and <span className="text-destructive line-through">Unreliable Delivery</span>?
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Switch to GWC with Quivo and get <span className="text-primary font-semibold">transparent pricing</span>, <span className="text-primary font-semibold">90-minute response time</span>, and <span className="text-primary font-semibold">98% on-time delivery</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote2">
                  <Button size="lg" data-testid="button-get-quote">
                    See Transparent Pricing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" onClick={() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' })}>
                  Compare Providers
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Carousel */}
        <SocialProofSection />

        {/* Quick Wins Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What You Get When You Switch</h2>
              <p className="text-xl text-muted-foreground">Real improvements, not just promises</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Save 15-30%</h3>
                  <p className="text-sm text-muted-foreground">
                    On average, customers save this much by switching to our transparent pricing
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">10x Faster Support</h3>
                  <p className="text-sm text-muted-foreground">
                    90-minute response vs 24-48 hours with traditional providers
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">85% Fewer Stock-outs</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time inventory sync across all channels prevents overselling
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">5x Faster COD Settlement</h3>
                  <p className="text-sm text-muted-foreground">
                    Get your money in 3 days, not 14 days
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <PainPointSolver 
              painPoints={painPoints}
              title="Stop Struggling with Your Current 3PL"
              subtitle="We solve the problems that make you want to switch"
            />
          </div>
        </section>

        {/* Pricing Calculator Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <PricingTransparencyCalculator />
          </div>
        </section>

        {/* Comparison Table Section */}
        <section id="comparison" className="py-20">
          <div className="container mx-auto px-4">
            <CompetitorComparisonTable 
              features={comparisonFeatures}
              title="Side-by-Side Comparison"
              subtitle="See exactly why businesses are switching to GWC"
            />
          </div>
        </section>

        {/* Value-Added Services Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Sparkles className="w-3 h-3 mr-1" />
                Beyond Basic Fulfillment
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Value-Added Services <span className="text-primary">Included</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We go beyond pick, pack, and ship. Get professional services that help you scale without hiring more staff.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Box className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Kitting & Bundling</h3>
                  <p className="text-muted-foreground mb-4">
                    Create product bundles, gift sets, and promotional packages. We assemble multiple SKUs into ready-to-ship kits.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Custom bundle creation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Promotional gift sets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Seasonal packaging</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Light Assembly</h3>
                  <p className="text-muted-foreground mb-4">
                    Simple product assembly, component installation, and final touches before shipping to your customers.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Product assembly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Component attachment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Quality inspection</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Tags className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Relabeling & Barcoding</h3>
                  <p className="text-muted-foreground mb-4">
                    Update labels, add barcodes, or rebrand products for different markets without sending back to manufacturer.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Market-specific labeling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Barcode generation & printing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Compliance labeling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Fragile Item Handling</h3>
                  <p className="text-muted-foreground mb-4">
                    Special care for delicate products like glassware, electronics, cosmetics, and other breakable items.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Extra padding & protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Custom packaging solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Damage-free shipping</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">High-Value Storage</h3>
                  <p className="text-muted-foreground mb-4">
                    Secure storage and handling for luxury goods, jewelry, electronics, and other high-value products.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Enhanced security measures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Insurance coverage available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Restricted access zones</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <ThermometerSnowflake className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Temperature Control</h3>
                  <p className="text-muted-foreground mb-4">
                    Climate-controlled storage for products requiring specific temperature conditions like cosmetics and supplements.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Temperature monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Climate-controlled zones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Cold chain logistics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <Package2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">
                  All Services. One Partner. Zero Hassle.
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Most competitors charge extra for these services or don't offer them at all. We include value-added services as part of our commitment to your success.
                </p>
                <Link href="/quote2">
                  <Button size="lg">
                    Get Custom Quote with Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Switching Process Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                Seamless Migration
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We Make Switching <em className="italic text-primary">Painless</em>
              </h2>
              <p className="text-xl text-muted-foreground">
                Full support from our team. No downtime. No stress.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Free Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  We review your current setup and create a custom migration plan
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Parallel Run</h3>
                <p className="text-sm text-muted-foreground">
                  We run alongside your current provider for 2 weeks - zero risk
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Seamless Transfer</h3>
                <p className="text-sm text-muted-foreground">
                  We handle inventory transfer and system integration
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Go Live</h3>
                <p className="text-sm text-muted-foreground">
                  Full cutover with dedicated support team watching closely
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Card className="inline-block bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Risk-Free Guarantee</h4>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Not happy after 90 days? We'll help you migrate back to your old provider at no cost.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection segment="switch" />

        {/* Video Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See Our <span className="text-primary">Fulfillment Center</span> in Action
              </h2>
              <p className="text-xl text-muted-foreground">
                Professional operations. Real-time tracking. Your business in good hands.
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-lg overflow-hidden shadow-2xl" style={{ padding: '56.25% 0 0 0' }}>
                <iframe 
                  src="https://player.vimeo.com/video/1124864507?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;controls=0" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  title="GWC Fulfillment Center Video"
                  data-testid="fulfillment-video"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

