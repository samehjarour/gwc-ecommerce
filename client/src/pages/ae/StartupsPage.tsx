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
  Globe,
  MapPin
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import warehouseImage from "@assets/DJI_0432-HDR_1758598111840.jpg";
import technologyImage from "@assets/technology_1758599610299.webp";
import vanImage from "@assets/GWC Truck - Dubai_1757565747938.jpg";
import shopifyLogo from "@assets/shopify_1758598346980.png";
import amazonLogo from "@assets/amazon_1758598346980.png";
import wooLogo from "@assets/woo (1)_1758598346980.png";
import tiktokLogo from "@assets/tiktok_1758598346981.png";

export function AEStartupsPage() {
  const [activeTab, setActiveTab] = useState("signup");
  const { scrollYProgress } = useScroll();
  
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  const section1Y = useTransform(scrollYProgress, [0.1, 0.3], [100, -50]);
  const section2Y = useTransform(scrollYProgress, [0.2, 0.5], [100, -50]);
  const section3Y = useTransform(scrollYProgress, [0.3, 0.6], [100, -50]);
  const section4Y = useTransform(scrollYProgress, [0.4, 0.7], [100, -50]);
  const section5Y = useTransform(scrollYProgress, [0.5, 0.8], [100, -50]);
  const section6Y = useTransform(scrollYProgress, [0.6, 0.9], [100, -50]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "E-commerce Fulfillment for Startups UAE - Start with 1 Product | GWC with Quivo";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Start your e-commerce business in UAE with zero Capital Costs. No minimums. Scale from 1 product to 1000+. Pay only for what you use. Perfect for online startups and small sellers in UAE.');
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
      ctaLink: "/ae/rate-calculator",
      secondaryCta: "Book Consultation",
      secondaryCtaLink: "/ae/rate-calculator#book-consultation"
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
      ctaLink: "/ae/rate-calculator",
      secondaryCta: "Book Consultation",
      secondaryCtaLink: "/ae/rate-calculator#book-consultation"
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
      secondaryCtaLink: "/ae/rate-calculator#book-consultation"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
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
                <Badge variant="outline" className="mb-4">
                  <MapPin className="w-3 h-3 mr-1" />
                  UAE E-Commerce Solutions
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Start Your <span className="text-primary">UAE E-Commerce</span> Journey Today
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Zero capital investment. No minimum order quantities. Transparent pricing. Scale your startup from 1 to 10,000+ products with our fulfillment infrastructure.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/ae/rate-calculator">
                    <Button size="lg" className="w-full sm:w-auto">
                      Calculate Your Costs
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/quote2">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Get a Quote
                    </Button>
                  </Link>
                </div>

                <div className="mt-8 flex gap-8">
                  <div>
                    <div className="text-2xl font-bold">Zero</div>
                    <div className="text-sm text-muted-foreground">Setup Costs</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">AED 0</div>
                    <div className="text-sm text-muted-foreground">Minimum Order</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24hrs</div>
                    <div className="text-sm text-muted-foreground">Delivery in UAE</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src={warehouseImage} 
                    alt="GWC Warehouse" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SKU Tiers */}
        <motion.section
          className="py-20 bg-muted/30"
          style={{ y: section1Y }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-4">
                <Layers className="w-3 h-3 mr-1" />
                Choose Your Plan
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Solutions for Every Scale</h2>
              <p className="text-lg text-muted-foreground">
                From single-product startups to multi-brand operations, we have a solution that fits your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {skuTiers.map((tier, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className={tier.highlight ? "border-primary border-2 shadow-2xl" : ""}>
                    <CardContent className="p-8">
                      <div className={`${tier.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                        {tier.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2">{tier.range}</h3>
                      <p className="text-muted-foreground mb-6 font-medium">{tier.segment}</p>
                      
                      <ul className="space-y-3 mb-8">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex gap-3 items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="space-y-3">
                        <Link href={tier.ctaLink} className="block">
                          <Button className="w-full" size="lg">
                            {tier.cta}
                          </Button>
                        </Link>
                        <Link href={tier.secondaryCtaLink} className="block">
                          <Button variant="outline" className="w-full" size="lg">
                            {tier.secondaryCta}
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Services */}
        <SocialProofSection />
        <SKURangeAdvisor />
        <IntegrationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

const Layers = () => <Package2 className="w-3 h-3" />;
