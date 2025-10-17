import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Globe,
  ArrowRight,
  Zap,
  Package,
  TrendingUp,
  CheckCircle,
  MapPin
} from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import { motion } from "framer-motion";

export function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GWC E-Commerce Solutions - UAE & Qatar Fulfillment";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Choose your region: UAE or Qatar e-commerce fulfillment solutions. Transparent pricing, zero minimums, scale from 1 product.');
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-4">
                <Globe className="w-3 h-3 mr-1" />
                Global E-Commerce Solutions
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Choose Your <span className="text-primary">Region</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                GWC E-Commerce Fulfillment Solutions tailored for your market. 
                Transparent pricing, zero minimums, and unlimited scaling.
              </p>
            </motion.div>

            {/* Region Cards */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* UAE Card */}
              <motion.div variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-blue-500/10 p-3 rounded-full group-hover:bg-blue-500/20 transition-colors">
                        <MapPin className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold">UAE</h2>
                        <p className="text-sm text-muted-foreground">United Arab Emirates</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">AC & Non-AC Warehousing</p>
                          <p className="text-sm text-muted-foreground">Climate-controlled options</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Next Day & Same Day Delivery</p>
                          <p className="text-sm text-muted-foreground">Throughout UAE</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Multi-Channel Integration</p>
                          <p className="text-sm text-muted-foreground">Shopify, Amazon, Noon & more</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Full Returns Management</p>
                          <p className="text-sm text-muted-foreground">Collection & processing included</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Link href="/ae/startups" className="block">
                        <Button className="w-full" size="lg">
                          Explore UAE Solutions
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      <Link href="/ae/rate-calculator" className="block">
                        <Button variant="outline" className="w-full" size="lg">
                          <Zap className="w-4 h-4 mr-2" />
                          Calculate Costs
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Qatar Card */}
              <motion.div variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden group border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-green-500/10 p-3 rounded-full group-hover:bg-green-500/20 transition-colors">
                        <MapPin className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold">Qatar</h2>
                        <p className="text-sm text-muted-foreground">State of Qatar</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Modern Warehouse Facilities</p>
                          <p className="text-sm text-muted-foreground">State-of-the-art infrastructure</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Fast Local Delivery</p>
                          <p className="text-sm text-muted-foreground">Quick turnaround times</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Regional E-Commerce Hub</p>
                          <p className="text-sm text-muted-foreground">Gateway to GCC markets</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Competitive Pricing</p>
                          <p className="text-sm text-muted-foreground">Optimized for Qatar market</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Link href="/qa/startups" className="block">
                        <Button className="w-full" size="lg">
                          Explore Qatar Solutions
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      <Link href="/qa/rate-calculator" className="block">
                        <Button variant="outline" className="w-full" size="lg">
                          <Zap className="w-4 h-4 mr-2" />
                          Calculate Costs
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Why Choose GWC?</h2>
              <p className="text-lg text-muted-foreground">
                Industry-leading fulfillment solutions with transparent pricing and 24/7 support
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Rocket className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">Zero Minimums</h3>
                    <p className="text-sm text-muted-foreground">
                      Start with just 1 product. No minimum order requirements.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">Scale Unlimited</h3>
                    <p className="text-sm text-muted-foreground">
                      Grow from 1 to 100,000+ products without limitations.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Package className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">Full Support</h3>
                    <p className="text-sm text-muted-foreground">
                      24/7 dedicated support and transparent rate cards.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}