import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SocialProofSection } from "@/components/SocialProofSection";
import { SKURangeAdvisor } from "@/components/SKURangeAdvisor";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  DollarSign, 
  TrendingUp, 
  Package, 
  CheckCircle,
  CheckCircle2, 
  Clock,
  Users,
  BarChart,
  ArrowRight,
  Zap,
  Shield,
  Package2,
  Tags,
  Wrench,
  ThermometerSnowflake,
  Sparkles,
  Box,
  Truck,
  Activity,
  Globe
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";

export function StartupsCalculatorPage() {
  const [activeTab, setActiveTab] = useState("signup");
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms for different sections
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Section parallax effects
  const section1Y = useTransform(scrollYProgress, [0.1, 0.3], [100, -50]);
  const section2Y = useTransform(scrollYProgress, [0.2, 0.5], [100, -50]);
  const section3Y = useTransform(scrollYProgress, [0.3, 0.6], [100, -50]);
  const section4Y = useTransform(scrollYProgress, [0.4, 0.7], [100, -50]);
  const section5Y = useTransform(scrollYProgress, [0.5, 0.8], [100, -50]);
  const section6Y = useTransform(scrollYProgress, [0.6, 0.9], [100, -50]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Calculate Your Fulfillment Costs - E-commerce Fulfillment for Startups | GWC with Quivo";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Start your e-commerce business with zero Capital Costs. No minimums. Scale from 1 product to 1000+. Pay only for what you use. Perfect for online startups and small sellers.');
    }
  }, []);

  const skuTiers = [
    {
      range: "1-10 SKUs",
      segment: "Just Starting",
      icon: <Rocket className="w-8 h-8 text-white" />,
      color: "bg-blue-500",
      features: [
        "Start with just 1 product",
        "No minimum order requirements",
        "Pay-as-you-go pricing",
        "Free setup (AED 0)",
        "Shopify, WooCommerce integration",
        "Basic analytics dashboard"
      ],
      cta: "Start with 1 Product",
      ctaLink: "/quote2",
      secondaryCta: "Book Consultation",
      secondaryCtaLink: "https://meetings.hubspot.com/gwc-logistics"
    },
    {
      range: "10-50 SKUs",
      segment: "Growing Fast",
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      color: "bg-primary",
      features: [
        "Multi-channel inventory sync",
        "Amazon & Noon integration",
        "Real-time stock alerts",
        "Advanced analytics",
        "Priority support (90-min response)",
        "Bulk shipping discounts"
      ],
      highlight: true,
      cta: "Scale Your Business",
      ctaLink: "/quote2",
      secondaryCta: "Book Consultation",
      secondaryCtaLink: "https://meetings.hubspot.com/gwc-logistics"
    },
    {
      range: "50-100 SKUs",
      segment: "Scaling Up",
      icon: <BarChart className="w-8 h-8 text-white" />,
      color: "bg-green-600",
      features: [
        "All Growing Fast features",
        "Custom bundling & kitting",
        "Returns management",
        "Dedicated account manager",
        "API access for custom integrations",
        "Volume pricing discounts"
      ],
      cta: "Enterprise Features",
      ctaLink: "/quote2",
      secondaryCta: "Book Consultation",
      secondaryCtaLink: "https://meetings.hubspot.com/gwc-logistics"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
          {/* Parallax Background Elements */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            style={{ y: floatingY }}
          >
            <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          </motion.div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ y: heroY, opacity: heroOpacity }}
              >
                <Badge variant="outline" className="mb-4" data-testid="badge-startups">
                  <Rocket className="w-3 h-3 mr-1" />
                  Built for Online Startups & Small Sellers
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-hero">
                  Launch Your E-commerce Business with <span className="text-primary">Zero Capital Costs</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Start with 1 product or scale to 1000+. No minimums. No setup fees. Pay only for what you use. Professional fulfillment from day one.
                </p>
                
                <div className="space-y-4 mb-8">
                  <motion.div 
                    className="flex items-start gap-3 bg-background/80 p-4 rounded-lg border border-border"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  >
                    <DollarSign className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Save 60% on Capital Costs</h4>
                      <p className="text-sm text-muted-foreground">
                        No warehouse lease, no staff, no equipment. Start for free.
                      </p>
                  </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-3 bg-background/80 p-4 rounded-lg border border-border"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  >
                    <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Launch in 48 Hours</h4>
                      <p className="text-sm text-muted-foreground">
                        Quick integration. Send inventory. Start selling immediately.
                      </p>
                  </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-3 bg-background/80 p-4 rounded-lg border border-border"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  >
                    <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Scale Without Limits</h4>
                      <p className="text-sm text-muted-foreground">
                        From 1 order to 1000+ per day. We grow with you automatically.
                      </p>
                  </div>
                  </motion.div>
                </div>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <Link href="/quote2">
                    <Button size="lg" data-testid="button-get-quote">
                      Calculate Your Costs
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    See How It Works
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Logo Carousel */}
        <SocialProofSection />

        {/* Pricing Calculator */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
          <motion.div 
            className="absolute bottom-20 right-20 w-72 h-72 bg-green-500/5 rounded-full blur-3xl pointer-events-none"
            style={{ y: section4Y }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-4">
                <DollarSign className="w-3 h-3 mr-1" />
                Transparent Pricing
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See Exactly What You'll Pay
              </h2>
              <p className="text-xl text-muted-foreground">
                No surprises. No hidden fees. Calculate your costs right now.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/rate-calculator">
                <Card className="max-w-4xl mx-auto hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer group border-2 border-primary/20 hover:border-primary/50">
                  <CardContent className="p-12 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                      <DollarSign className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      Launch Your Rate Calculator
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                      Get instant pricing tailored to your business needs. Input your product details and see real-time fulfillment costs.
                    </p>
                    <Button size="lg" className="group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
                      Calculate My Costs
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>No Hidden Fees</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Real-Time Quotes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Instant Results</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Platform Integrations - Global Solutions Powered by Quivo */}
        <IntegrationsSection />

        {/* SKU Tiers Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
          <motion.div 
            className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
            style={{ y: floatingY }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <SKURangeAdvisor 
              tiers={skuTiers}
              title="Perfect Solution for Your Growth Stage"
              subtitle="Start small, scale big. We support you at every stage"
            />
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 relative overflow-hidden">
          <motion.div 
            className="absolute top-32 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"
            style={{ y: section3Y }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-4">
                <Zap className="w-3 h-3 mr-1" />
                Launch in 3 Simple Steps
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                From Signup to First Sale in <span className="text-primary">48 Hours</span>
              </h2>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              style={{ y: section3Y }}
            >
              <Card className="text-center hover-elevate shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl shadow-primary/20">
                    1
                  </div>
                  <Package className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Connect Your Store</h3>
                  <p className="text-muted-foreground mb-4">
                    5-minute integration with Shopify, WooCommerce, Salla, or Zid. No technical skills needed.
                  </p>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    5 minutes
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate border-primary border-2 shadow-xl shadow-primary/10">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl shadow-primary/30">
                    2
                  </div>
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Send Your Products</h3>
                  <p className="text-muted-foreground mb-4">
                    Ship inventory to our Dubai warehouse. We receive, count, and store everything for you.
                  </p>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    24-48 hours
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl shadow-primary/20">
                    3
                  </div>
                  <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Start Selling</h3>
                  <p className="text-muted-foreground mb-4">
                    Orders automatically fulfilled. Track everything in real-time. Focus on marketing and growth.
                  </p>
                  <Badge variant="outline" className="text-xs">
                    <Zap className="w-3 h-3 mr-1" />
                    Instant
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            <div className="text-center mt-12">
              <Link href="/quote2">
                <Button size="lg" data-testid="btn-get-started">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works - UAE Delivery Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
          <motion.div 
            className="absolute top-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
            style={{ y: section6Y }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-how-it-works">
                Simplify Your UAE Fulfillment with Seamless Integrations
              </h2>
              <p className="text-xl text-muted-foreground">
                Connect your store and start delivering across UAE in hours
              </p>
            </motion.div>

            <motion.div 
              className="max-w-4xl mx-auto"
              style={{ y: section6Y }}
            >
              <div className="flex border-b mb-8 overflow-x-auto" data-testid="tabs-how-it-works">
                {[
                  { id: "signup", label: "1. INTEGRATE", icon: <Zap className="w-5 h-5" /> },
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
                      Connect your store with one-click integration and start selling in UAE within 24 hours
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Quick setup:</strong> Our efficient process gets you started immediately in UAE markets.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Easy integration:</strong> Connect Shopify, WooCommerce, or any platform in minutes.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Expert guidance:</strong> Our team provides specialized knowledge for UAE delivery.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Powered by Quivo:</strong> Advanced integration technology for seamless operations.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === "inventory" && (
                  <div className="text-center" data-testid="content-inventory">
                    <h3 className="text-2xl font-semibold mb-4">
                      Keep your products safe with our climate-controlled UAE warehouses
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Climate control:</strong> Optimal temperature for product protection in UAE heat.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Strategic location:</strong> Warehouses positioned for fast UAE-wide delivery.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Enhanced security:</strong> 24/7 monitoring and top-tier security measures.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Real-time tracking:</strong> Live inventory monitoring across all channels.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "fulfill" && (
                  <div className="text-center" data-testid="content-fulfill">
                    <h3 className="text-2xl font-semibold mb-4">
                      Experience hassle-free UAE fulfillment with reliable pick, pack, and shipping
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Efficient operations:</strong> Advanced systems ensure accurate order fulfillment.
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
                          <strong>Multi-channel sync:</strong> Orders from all platforms fulfilled automatically.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "deliver" && (
                  <div className="text-center" data-testid="content-deliver">
                    <h3 className="text-2xl font-semibold mb-4">
                      Deliver across UAE with same-day options and real-time tracking
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Same-day delivery:</strong> Available across Dubai, Abu Dhabi, and major UAE cities.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Real-time tracking:</strong> Customers track deliveries with live updates.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Local expertise:</strong> Navigate UAE customs and delivery requirements seamlessly.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <strong>Returns management:</strong> Smooth returns processing for UAE customers.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value-Added Services Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
          <motion.div 
            className="absolute bottom-32 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
            style={{ y: floatingY }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-4">
                <Sparkles className="w-3 h-3 mr-1" />
                Professional Services Included
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                More Than Just Storage & Shipping
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get the same services that enterprise businesses pay thousands for - included as you grow with us.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, staggerChildren: 0.1 }}
            >
              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Box className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Kitting & Bundling</h3>
                  <p className="text-muted-foreground mb-4">
                    Create product bundles and gift sets to increase average order value. Perfect for promotions and special offers.
                  </p>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-sm font-medium">
                      💡 Example: Bundle 3 products + gift wrapping for holiday sales
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Light Assembly</h3>
                  <p className="text-muted-foreground mb-4">
                    Simple assembly work so your products arrive ready to use. Save on manufacturing costs.
                  </p>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-sm font-medium">
                      💡 Example: Attach accessories, insert batteries, or add final components
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Tags className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Relabeling & Barcoding</h3>
                  <p className="text-muted-foreground mb-4">
                    Update labels for different markets or add your branding without returning to manufacturer.
                  </p>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-sm font-medium">
                      💡 Example: Add Arabic labels for GCC market or compliance stickers
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Fragile Item Care</h3>
                  <p className="text-muted-foreground mb-4">
                    Special handling for delicate products. Extra padding and custom packaging included.
                  </p>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-sm font-medium">
                      💡 Perfect for: Glassware, electronics, cosmetics, art
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">High-Value Security</h3>
                  <p className="text-muted-foreground mb-4">
                    Enhanced security for jewelry, electronics, and luxury goods. Insurance options available.
                  </p>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-sm font-medium">
                      💡 Perfect for: Luxury brands, jewelry, designer items
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <ThermometerSnowflake className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Temperature Control</h3>
                  <p className="text-muted-foreground mb-4">
                    Climate-controlled storage for products sensitive to heat or humidity.
                  </p>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-sm font-medium">
                      💡 Perfect for: Cosmetics, supplements, chocolates, candles
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-900">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    For Startups: Pay As You Grow
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Start with basic fulfillment, add services as you need them. No upfront commitments.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Use services only when needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>No minimum volume requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Flexible pricing based on usage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Package2 className="w-6 h-6 text-primary" />
                    Why Competitors Charge Extra
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Traditional 3PLs charge AED 500-2,000+ per month for these services. We include them.
                  </p>
                  <div className="bg-background/80 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">You Save on:</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Hiring staff for kitting</li>
                      <li>• Renting separate storage</li>
                      <li>• Managing multiple vendors</li>
                      <li>• Minimum service fees</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>



        {/* Video Section */}
        <section className="py-20 relative overflow-hidden">
          <motion.div 
            className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
            style={{ y: floatingY }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-4">
                <Package className="w-3 h-3 mr-1" />
                Behind the Scenes
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See How We <span className="text-primary">Handle Your Products</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Professional fulfillment from day one. Your products in expert hands.
              </p>
            </motion.div>
            <motion.div 
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <CTASection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

