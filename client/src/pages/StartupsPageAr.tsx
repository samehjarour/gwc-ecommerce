import { HeaderAr } from "@/components/HeaderAr";
import { FooterAr } from "@/components/FooterAr";
import { SocialProofSectionAr } from "@/components/SocialProofSectionAr";
import { IntegrationsSectionAr } from "@/components/IntegrationsSectionAr";
import { CTASectionAr } from "@/components/CTASectionAr";
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
  BarChart,
  ArrowLeft,
  Zap,
  Shield,
  Tags,
  Wrench,
  ThermometerSnowflake,
  Sparkles,
  Box,
  Truck,
  Activity
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

export function StartupsPageAr() {
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
    document.documentElement.dir = 'rtl';
    document.title = "خدمات التنفيذ للشركات الناشئة - ابدأ بمنتج واحد | GWC مع Quivo";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'ابدأ عملك التجاري الإلكتروني بدون رأس مال. لا حد أدنى. قم بالتوسع من منتج واحد إلى 1000+. ادفع فقط مقابل ما تستخدمه. مثالي للشركات الناشئة والبائعين الصغار.');
    }

    return () => {
      document.documentElement.dir = 'ltr';
    };
  }, []);

  const skuTiers = [
    {
      range: "1-10 منتجات",
      segment: "بداية الرحلة",
      icon: <Rocket className="w-8 h-8 text-white" />,
      color: "bg-blue-500",
      features: [
        "ابدأ بمنتج واحد فقط",
        "لا حد أدنى للطلبات",
        "أسعار حسب الاستخدام",
        "إعداد مجاني (0 درهم)",
        "تكامل مع Shopify و WooCommerce",
        "لوحة تحليلات أساسية"
      ],
      cta: "ابدأ بمنتج واحد",
      ctaLink: "/rate-calculator",
      secondaryCta: "احجز استشارة",
      secondaryCtaLink: "/rate-calculator#book-consultation"
    },
    {
      range: "10-50 منتج",
      segment: "نمو سريع",
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      color: "bg-primary",
      features: [
        "مزامنة المخزون متعددة القنوات",
        "تكامل مع Amazon و Noon",
        "تنبيهات المخزون الفورية",
        "تحليلات متقدمة",
        "دعم ذو أولوية (90 دقيقة)",
        "خصومات الشحن بالجملة"
      ],
      highlight: true,
      cta: "وسّع عملك",
      ctaLink: "/rate-calculator",
      secondaryCta: "احجز استشارة",
      secondaryCtaLink: "/rate-calculator#book-consultation"
    },
    {
      range: "50-100 منتج",
      segment: "توسع كبير",
      icon: <BarChart className="w-8 h-8 text-white" />,
      color: "bg-green-600",
      features: [
        "جميع ميزات النمو السريع",
        "التجميع والتعبئة المخصصة",
        "إدارة المرتجعات",
        "مدير حساب مخصص",
        "وصول API للتكاملات المخصصة",
        "خصومات الأحجام الكبيرة"
      ],
      cta: "ميزات المؤسسات",
      ctaLink: "/quote2-ar",
      secondaryCta: "احجز استشارة",
      secondaryCtaLink: "/rate-calculator#book-consultation"
    }
  ];

  return (
    <div className="min-h-screen arabic-font" dir="rtl">
      <HeaderAr />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
          {/* Parallax Background Elements */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            style={{ y: floatingY }}
          >
            <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          </motion.div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ y: heroY, opacity: heroOpacity }}
              >
                <Badge variant="outline" className="mb-4">
                  <Rocket className="w-3 h-3 ml-1" />
                  من البداية إلى التوسع: مصمم للشركات الناشئة الصغيرة والمتنامية
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  وسّع علامتك التجارية الإلكترونية عالمياً <span className="text-primary">بدون رأس مال</span>.
                </h1>
                <p className="text-2xl font-semibold mb-4">
                  من البداية إلى التوسع من GWC: أسرع طريقة للنمو عبر الأسواق والمنصات.
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-900 mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100">من التسجيل إلى أول عملية بيع في 48 ساعة</h4>
                  </div>
                  <p className="text-base leading-relaxed text-blue-800 dark:text-blue-200">
                    ابدأ اليوم وابدأ تنفيذ الطلبات في غضون 48 ساعة. بدون إعداد طويل، بدون تأخير.
                  </p>
                </div>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <Link href="/quote2-ar">
                    <Button size="lg">
                      ابدأ الآن
                      <ArrowLeft className="mr-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/rate-calculator">
                    <Button 
                      size="lg" 
                      variant="outline"
                    >
                      احصل على الأسعار
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="relative rounded-lg overflow-hidden shadow-2xl" style={{ padding: '56.25% 0 0 0' }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1127601906?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;controls=0" 
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    title="فيديو مركز GWC للتنفيذ"
                  ></iframe>
                </div>
                
                {/* Marketplace Logos */}
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-base text-muted-foreground mb-5 text-center font-medium">
                    اتصل فوراً بأكثر من 40 منصة
                  </p>
                  <div className="flex items-center justify-center gap-6 flex-wrap">
                    <div className="bg-background/90 px-8 py-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group hover:scale-105" style={{ transition: 'all 0.3s ease' }}>
                      <img src={shopifyLogo} alt="Shopify" className="h-16 object-contain opacity-60 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                    <div className="bg-background/90 px-8 py-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group hover:scale-105" style={{ transition: 'all 0.3s ease' }}>
                      <img src={amazonLogo} alt="Amazon FBM" className="h-16 object-contain opacity-60 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                    <div className="bg-background/90 px-8 py-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group hover:scale-105" style={{ transition: 'all 0.3s ease' }}>
                      <img src={wooLogo} alt="WooCommerce" className="h-16 object-contain opacity-60 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                    <div className="bg-background/90 px-8 py-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group hover:scale-105" style={{ transition: 'all 0.3s ease' }}>
                      <img src={tiktokLogo} alt="TikTok Shop" className="h-16 object-contain opacity-60 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Facility & Technology Showcase */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                GWC هو شريكك في تنفيذ التجارة الإلكترونية في الإمارات
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                من المستودعات الحديثة إلى التقنية المتقدمة وأسطول التوصيل الموثوق - لدينا كل ما تحتاجه للنجاح.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Warehouse Image */}
              <motion.div
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => window.open('https://www.gwclogistics.com/logistics-hubs/', '_blank')}
              >
                <img 
                  src={warehouseImage} 
                  alt="مرافق مستودعات GWC"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-1">منشأة حديثة</h3>
                  <p className="text-sm opacity-90">مستودعات عصرية مجهزة لنموك</p>
              </div>
              </motion.div>

              {/* Technology Image */}
              <motion.div
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => window.open('https://www.gwclogistics.com/soft-infrastructure/corporate-information-technology/', '_blank')}
              >
                <img 
                  src={technologyImage} 
                  alt="أنظمة تقنية متقدمة"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-1">تقنية متقدمة</h3>
                  <p className="text-sm opacity-90">تكامل متعدد القنوات وتتبع فوري</p>
            </div>
              </motion.div>

              {/* Fleet Image */}
              <motion.div
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => window.open('https://www.gwclogistics.com/gwc-services/transport-solution/', '_blank')}
              >
                <img 
                  src={vanImage} 
                  alt="أسطول GWC في دبي"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-1">أسطول موثوق</h3>
                  <p className="text-sm opacity-90">توصيل سريع وآمن عبر دول الخليج</p>
                    </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SKU Tiers Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
            style={{ y: floatingY }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">الحل المثالي لمرحلة نموك</h2>
              <p className="text-xl text-muted-foreground">ابدأ صغيراً، وتوسع كبيراً. ندعمك في كل مرحلة</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {skuTiers.map((tier, index) => (
                <Card key={index} className={`${tier.highlight ? 'border-primary border-2 shadow-xl shadow-primary/10' : 'hover-elevate shadow-lg'} relative`}>
                  {tier.highlight && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">الأكثر شعبية</Badge>
                    </div>
                  )}
                  <CardContent className="pt-8 pb-8">
                    <div className={`w-16 h-16 ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-${tier.color}/20`}>
                      {tier.icon}
                    </div>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{tier.range}</h3>
                      <p className="text-muted-foreground font-medium">{tier.segment}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-right">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-3">
                      <Link href={tier.ctaLink}>
                        <Button className="w-full" size="lg">
                          {tier.cta}
                          <ArrowLeft className="mr-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <Link href={tier.secondaryCtaLink}>
                        <Button className="w-full" variant="outline" size="lg">
                          {tier.secondaryCta}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Integrations - Global Solutions Powered by Quivo */}
        <IntegrationsSectionAr />

        {/* Customer Carousel */}
        <SocialProofSectionAr />

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 relative overflow-hidden">
          <motion.div 
            className="absolute top-32 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"
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
                <Zap className="w-3 h-3 ml-1" />
                الإطلاق في 3 خطوات بسيطة
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                من التسجيل إلى أول عملية بيع في <span className="text-primary">48 ساعة</span>
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
                  <h3 className="text-xl font-semibold mb-3">اربط متجرك</h3>
                  <p className="text-muted-foreground mb-4">
                    تكامل 5 دقائق مع Shopify أو WooCommerce أو Salla أو Zid. لا حاجة لمهارات تقنية.
                  </p>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 ml-1" />
                    5 دقائق
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate border-primary border-2 shadow-xl shadow-primary/10">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl shadow-primary/30">
                    2
                  </div>
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">أرسل منتجاتك</h3>
                  <p className="text-muted-foreground mb-4">
                    شحن المخزون إلى مستودعنا في دبي. نستلم ونعد ونخزن كل شيء لك.
                  </p>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 ml-1" />
                    24-48 ساعة
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl shadow-primary/20">
                    3
                  </div>
                  <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">ابدأ البيع</h3>
                  <p className="text-muted-foreground mb-4">
                    تنفيذ الطلبات تلقائياً. تتبع كل شيء في الوقت الفعلي. ركز على التسويق والنمو.
                  </p>
                  <Badge variant="outline" className="text-xs">
                    <Zap className="w-3 h-3 ml-1" />
                    فوري
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            <div className="text-center mt-12">
              <Link href="/quote2-ar">
                <Button size="lg">
                  ابدأ اليوم
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Calculator */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
          <motion.div 
            className="absolute bottom-20 left-20 w-72 h-72 bg-green-500/5 rounded-full blur-3xl pointer-events-none"
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
                <DollarSign className="w-3 h-3 ml-1" />
                أسعار شفافة
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                شاهد بالضبط ما ستدفعه
              </h2>
              <p className="text-xl text-muted-foreground">
                لا مفاجآت. لا رسوم مخفية. احسب تكاليفك الآن.
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
                      افتح حاسبة الأسعار
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                      احصل على أسعار فورية مخصصة لاحتياجات عملك. أدخل تفاصيل منتجك وشاهد تكاليف التنفيذ الفورية.
                    </p>
                    <Button size="lg" className="group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
                      احسب تكاليفي
                      <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                    </Button>
                    <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>لا رسوم مخفية</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>عروض أسعار فورية</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>نتائج فورية</span>
                      </div>
            </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* How It Works - UAE Delivery Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <motion.div 
            className="absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                بسّط تنفيذ الإمارات مع تكاملات سلسة
              </h2>
              <p className="text-xl text-white/90">
                اربط متجرك وابدأ التوصيل في جميع أنحاء الإمارات في ساعات
              </p>
            </motion.div>

            <motion.div 
              className="max-w-4xl mx-auto"
              style={{ y: section6Y }}
            >
              <div className="flex border-b border-white/20 mb-8 overflow-x-auto">
                {[
                  { id: "signup", label: "1. التكامل", icon: <Zap className="w-5 h-5" /> },
                  { id: "inventory", label: "2. المخزون", icon: <Package className="w-5 h-5" /> },
                  { id: "fulfill", label: "3. التنفيذ", icon: <Activity className="w-5 h-5" /> },
                  { id: "deliver", label: "4. التوصيل", icon: <Truck className="w-5 h-5" /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? "border-white text-white"
                        : "border-transparent text-white/60 hover:text-white/80"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="min-h-[300px] text-white">
                {activeTab === "signup" && (
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      اربط متجرك بتكامل بنقرة واحدة وابدأ البيع في الإمارات خلال 24 ساعة
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8 text-right">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-white mt-1" />
                        <div>
                          <strong>إعداد سريع:</strong> عمليتنا الفعالة تجعلك تبدأ فوراً في أسواق الإمارات.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-white mt-1" />
                        <div>
                          <strong>تكامل سهل:</strong> اربط Shopify أو WooCommerce أو أي منصة في دقائق.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-white mt-1" />
                        <div>
                          <strong>إرشاد خبراء:</strong> يوفر فريقنا معرفة متخصصة لتوصيل الإمارات.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-white mt-1" />
                        <div>
                          <strong>مدعوم من Quivo:</strong> تقنية تكامل متقدمة لعمليات سلسة.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === "inventory" && (
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      احتفظ بمنتجاتك بأمان في مستودعاتنا المكيفة في الإمارات
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8 text-right">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-white mt-1" />
                        <div>
                          <strong>تحكم بالمناخ:</strong> درجة حرارة مثالية لحماية المنتجات من حرارة الإمارات.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-white mt-1" />
                        <div>
                          <strong>موقع استراتيجي:</strong> مستودعات موضوعة للتوصيل السريع في جميع أنحاء الإمارات.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-white mt-1" />
                        <div>
                          <strong>أمان معزز:</strong> مراقبة 24/7 وإجراءات أمنية من الدرجة الأولى.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-white mt-1" />
                        <div>
                          <strong>تتبع فوري:</strong> مراقبة المخزون الحية عبر جميع القنوات.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "fulfill" && (
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      اختبر تنفيذ الإمارات الخالي من المتاعب مع الانتقاء والتعبئة والشحن الموثوق
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8 text-right">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-white mt-1" />
                        <div>
                          <strong>عمليات فعالة:</strong> أنظمة متقدمة تضمن تنفيذ الطلبات بدقة.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-white mt-1" />
                        <div>
                          <strong>تعبئة مخصصة:</strong> ابنِ علامتك التجارية بتجارب فتح علب مخصصة.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-white mt-1" />
                        <div>
                          <strong>مراقبة الجودة:</strong> إجراءات صارمة لمنع العيوب أو الأضرار.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-white mt-1" />
                        <div>
                          <strong>مزامنة متعددة القنوات:</strong> تنفيذ الطلبات من جميع المنصات تلقائياً.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "deliver" && (
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      التوصيل في جميع أنحاء الإمارات مع خيارات نفس اليوم والتتبع الفوري
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8 text-right">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-white mt-1" />
                        <div>
                          <strong>توصيل نفس اليوم:</strong> متوفر في دبي وأبوظبي والمدن الرئيسية في الإمارات.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-white mt-1" />
                        <div>
                          <strong>تتبع فوري:</strong> يتتبع العملاء التوصيلات بتحديثات حية.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-white mt-1" />
                        <div>
                          <strong>خبرة محلية:</strong> التنقل في الجمارك ومتطلبات التوصيل في الإمارات بسلاسة.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-white mt-1" />
                        <div>
                          <strong>إدارة المرتجعات:</strong> معالجة سلسة للمرتجعات لعملاء الإمارات.
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
            className="absolute bottom-32 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
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
                <Sparkles className="w-3 h-3 ml-1" />
                خدمات احترافية مضمنة
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                أكثر من مجرد تخزين وشحن
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                احصل على نفس الخدمات التي تدفع شركات المؤسسات آلاف الدراهم مقابلها - مضمنة مع نموك معنا.
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
                  <h3 className="text-xl font-semibold mb-3">التجميع والتعبئة</h3>
                  <p className="text-muted-foreground mb-4">
                    أنشئ حزم منتجات ومجموعات هدايا لزيادة متوسط قيمة الطلب. مثالي للعروض الترويجية والعروض الخاصة.
                  </p>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-sm font-medium">
                      💡 مثال: جمع 3 منتجات + تغليف هدايا لمبيعات العطلات
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">تجميع خفيف</h3>
                  <p className="text-muted-foreground mb-4">
                    عمل تجميع بسيط حتى تصل منتجاتك جاهزة للاستخدام. وفر على تكاليف التصنيع.
                  </p>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-sm font-medium">
                      💡 مثال: إرفاق الملحقات، إدراج البطاريات، أو إضافة المكونات النهائية
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Tags className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">إعادة وضع العلامات والباركود</h3>
                  <p className="text-muted-foreground mb-4">
                    تحديث الملصقات لأسواق مختلفة أو إضافة علامتك التجارية دون العودة إلى الشركة المصنعة.
                  </p>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-sm font-medium">
                      💡 مثال: إضافة ملصقات عربية لسوق الخليج أو ملصقات الامتثال
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">رعاية العناصر الهشة</h3>
                  <p className="text-muted-foreground mb-4">
                    معالجة خاصة للمنتجات الحساسة. حشوة إضافية وتغليف مخصص مضمن.
                  </p>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-sm font-medium">
                      💡 مثالي لـ: الأواني الزجاجية، الإلكترونيات، مستحضرات التجميل، الفن
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">أمن عالي القيمة</h3>
                  <p className="text-muted-foreground mb-4">
                    أمان معزز للمجوهرات والإلكترونيات والسلع الفاخرة. خيارات التأمين متاحة.
                  </p>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-sm font-medium">
                      💡 مثالي لـ: العلامات التجارية الفاخرة، المجوهرات، العناصر المصممة
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <ThermometerSnowflake className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">التحكم في درجة الحرارة</h3>
                  <p className="text-muted-foreground mb-4">
                    تخزين مكيف للمنتجات الحساسة للحرارة أو الرطوبة.
                  </p>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-sm font-medium">
                      💡 مثالي لـ: مستحضرات التجميل، المكملات الغذائية، الشوكولاتة، الشموع
                    </p>
                  </div>
                </CardContent>
              </Card>
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
        <CTASectionAr />
        </motion.div>
      </main>
      <FooterAr />
    </div>
  );
}
