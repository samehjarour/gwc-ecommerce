import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GWCRateCalculatorV2 } from "@/components/GWCRateCalculatorV2";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, TrendingDown, Shield, Zap } from "lucide-react";
import { useEffect } from "react";

export function RateCalculatorPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "UAE Fulfillment Cost Calculator - Transparent Pricing | GWC with Quivo";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your exact fulfillment costs in UAE. Transparent pricing for warehousing, fulfillment, shipping, and returns. No hidden fees.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <Badge variant="outline" className="mb-4">
                <Calculator className="w-3 h-3 mr-1" />
                Transparent Pricing
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                UAE Fulfillment <span className="text-primary">Cost Calculator</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Calculate your exact fulfillment costs with our transparent rate card. No surprises. No hidden fees. Know exactly what you'll pay.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <TrendingDown className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Competitive Rates</h3>
                  <p className="text-sm text-muted-foreground">
                    Industry-leading pricing across all service tiers
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">No Hidden Fees</h3>
                  <p className="text-sm text-muted-foreground">
                    Every cost clearly itemized and explained
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Instant Quotes</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time calculations based on official rate card
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <GWCRateCalculatorV2 />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">How Our Pricing Works</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3">Size-Based Tiers</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Pricing is based on item dimensions, weight, and volume. We automatically calculate the most cost-effective tier for your products.
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Small: Up to 35×35×35 cm, 2 kg</li>
                      <li>• Medium: Up to 45×45×45 cm, 5 kg</li>
                      <li>• Large: Up to 60×60×60 cm, 10 kg</li>
                      <li>• Extra Large: Up to 70×70×70 cm, 15 kg</li>
                      <li>• Oversized: 70+ cm max dimension, up to 120 kg</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3">What's Included</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Our rates cover complete fulfillment services:
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Receiving & quality check at warehouse</li>
                      <li>• Climate-controlled storage (AC or Non-AC)</li>
                      <li>• Pick, pack, and quality inspection</li>
                      <li>• Packaging materials</li>
                      <li>• Last-mile delivery (Next-Day or Same-Day)</li>
                      <li>• Returns collection & processing</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3">Optional Add-Ons</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Additional services priced transparently:
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• COD collection: +5 AED per package</li>
                      <li>• First-mile pickup (within Dubai): +1 AED per package</li>
                      <li>• First-mile pickup (outside Dubai): +1.5 AED per package</li>
                      <li>• Marketplace setup: 1,000 AED per marketplace</li>
                      <li>• Technology integration: 1,000 AED one-time</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3">Special Handling</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      For oversized items (Category 5), we apply incremental pricing:
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Base rate for items up to 30 kg</li>
                      <li>• Additional charges for weight over 30 kg</li>
                      <li>• Storage: +0.5 AED per kg over 30 kg</li>
                      <li>• Fulfillment: +0.5 AED per kg over 30 kg</li>
                      <li>• Shipping: +1.0 AED per kg over 30 kg</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

