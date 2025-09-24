import { Header } from "@/components/Header";
import { SocialProofSection } from "@/components/SocialProofSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Puzzle, 
  Warehouse, 
  Package, 
  Truck, 
  RotateCcw, 
  CheckCircle, 
  Globe, 
  Shield, 
  Clock, 
  Award,
  Star,
  ArrowRight,
  Zap
} from "lucide-react";
import truckImage from "@assets/GWC Truck - Riyadh_1_1757527184708.jpg";

export function HomePageAlt3() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Clean and Simple */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-5xl mx-auto">
              <Badge variant="outline" className="mb-6" data-testid="badge-expand-globally">
                EXPAND GLOBALLY WITH GWC
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8" data-testid="heading-hero">
                E-Commerce Fulfillment in the GCC
              </h1>
              <div className="text-2xl md:text-3xl text-muted-foreground mb-8" data-testid="text-hero-subtitle">
                <span className="font-semibold">Fast.</span> <span className="font-semibold">Reliable.</span> <span className="font-semibold">Local.</span>
              </div>
              <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed" data-testid="text-hero-description">
                We provide fast and flexible fulfillment services across the GCC — from smart warehousing to fast last-mile delivery. 
                Whether you're launching in Qatar, growing in Dubai, or shipping across the Gulf, we've got your logistics covered, 
                so you can focus on selling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/quote">
                  <Button size="lg" className="px-8 py-6 text-lg" data-testid="button-get-quote">
                    Get a Quote!
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg" data-testid="button-learn-more">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Carousel */}
        <SocialProofSection />

        {/* Testimonials Section - Concept A */}
        <TestimonialsSection segment="homepage" />

        {/* Process Flow Section - Quivo Inspired */}
        <section className="py-24 bg-gradient-to-b from-muted/10 to-background">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-process">
                How Our Fulfillment Process Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-process-description">
                From integration to delivery, we handle every step of your GCC expansion with precision and care.
              </p>
            </div>

            {/* Process Flow */}
            <div className="max-w-6xl mx-auto">
              {/* Top Row - 4 Steps */}
              <div className="grid md:grid-cols-4 gap-8 mb-16">
                {/* Step 1 */}
                <div className="text-center group" data-testid="step-connect">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <Puzzle className="w-10 h-10 text-primary" />
                    </div>
                    {/* Arrow */}
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Connect your system</h3>
                  <p className="text-muted-foreground">
                    We integrate over 40+ different e-commerce systems such as Shopify, WooCommerce, Amazon or custom platforms.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center group" data-testid="step-store">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <Warehouse className="w-10 h-10 text-primary" />
                    </div>
                    {/* Arrow */}
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Store your goods</h3>
                  <p className="text-muted-foreground">
                    Your products are stored in our fulfillment centers strategically located in <strong>Qatar, Dubai, Saudi Arabia</strong>, 
                    and key global markets like <strong>Europe</strong>, the <strong>UK</strong>, and the <strong>USA</strong>.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center group" data-testid="step-package">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <Package className="w-10 h-10 text-primary" />
                    </div>
                    {/* Arrow */}
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Individual packaging</h3>
                  <p className="text-muted-foreground">
                    Each order is automatically customized and packaged according to your preferences, ensuring perfect brand presentation.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="text-center group" data-testid="step-shipping">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <Truck className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Multi-Carrier shipping</h3>
                  <p className="text-muted-foreground">
                    Each parcel is handed over directly to shipping service providers, who ultimately deliver them to your customers across the GCC.
                  </p>
                </div>
              </div>

              {/* Bottom Row - Returns */}
              <div className="flex justify-center">
                <div className="text-center max-w-md" data-testid="step-returns">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-primary/20 transition-colors">
                    <RotateCcw className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Manage returns</h3>
                  <p className="text-muted-foreground">
                    The full-service offering also includes the complete processing of your returns, including classification and documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-transparency">
                Completely Transparent Fulfillment Prices
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto" data-testid="text-transparency-description">
                A reliable fulfillment service is built on clear, fair terms and costs you can actually understand. 
                Hidden fees and vague pricing models don't belong in a serious logistics partnership.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <div className="text-2xl font-semibold mb-6 text-primary">
                  The key? <span className="font-bold">100% pricing transparency</span>.
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <strong>No hidden fees:</strong> All costs are clearly outlined upfront with no surprises.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <strong>Simple packages:</strong> Based on your monthly order volume, not confusing pricing models.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <strong>Easy to track:</strong> Monitor all costs in real-time through our dashboard.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <strong>Detailed pricing:</strong> Every cost is shown in detail with no fine print.
                    </div>
                  </div>
                </div>
                <Link href="/quote">
                  <Button size="lg" data-testid="button-get-pricing">
                    Get Your Custom Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div 
                  className="aspect-video bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: `url(${truckImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold mb-2">100%</div>
                      <div className="text-xl">Price Transparency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-gradient-to-b from-muted/10 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-benefits">
                The Benefits of Our Fulfillment Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <Card className="text-center hover-elevate" data-testid="benefit-leader">
                <CardContent className="pt-8 pb-8">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Industry Leader</h3>
                  <p className="text-muted-foreground">
                    Our fulfillment warehouses in the GCC region guarantee precise fulfillment and consistent logistics quality.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate" data-testid="benefit-scale">
                <CardContent className="pt-8 pb-8">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Global Scale</h3>
                  <p className="text-muted-foreground">
                    We're managing daily logistics for 100+ European brands worldwide, trusted across multiple markets.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate" data-testid="benefit-technology">
                <CardContent className="pt-8 pb-8">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Cutting-Edge Technology</h3>
                  <p className="text-muted-foreground">
                    With our advanced platform, we've been setting the standard in technology and operational excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate" data-testid="benefit-scalable">
                <CardContent className="pt-8 pb-8">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Dynamically Scalable</h3>
                  <p className="text-muted-foreground">
                    Our e-commerce fulfillment service grows with you – flexibly, fairly, and without compromise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-testimonials">
                What Our E-Commerce Fulfillment Clients Say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="hover-elevate" data-testid="testimonial-1">
                <CardContent className="pt-8 pb-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "It is incredibly valuable for us to have a reliable logistics partner in GWC. The time and cost savings, 
                    easy handling and smooth integration have allowed us to open up new markets in the GCC."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">JS</span>
                    </div>
                    <div>
                      <div className="font-semibold">James Smith</div>
                      <div className="text-sm text-muted-foreground">Co-Founder @ European Fashion Co.</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="testimonial-2">
                <CardContent className="pt-8 pb-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "With GWC's efficient pick, pack, and ship services, I've reclaimed valuable time to focus on product development 
                    and marketing. The cost efficiency is unparalleled for GCC expansion."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">MR</span>
                    </div>
                    <div>
                      <div className="font-semibold">Maria Rodriguez</div>
                      <div className="text-sm text-muted-foreground">Director @ Tech Gadgets Europe</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="testimonial-3">
                <CardContent className="pt-8 pb-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "GWC supports us during order peaks with flexible and reliable logistics. Despite high order volume, 
                    we delivered on time across the Gulf. Perfect for start-ups like us!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">AK</span>
                    </div>
                    <div>
                      <div className="font-semibold">Ahmed Khalil</div>
                      <div className="text-sm text-muted-foreground">Marketing Manager @ Dubai Lifestyle</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <IntegrationsSection />

        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}