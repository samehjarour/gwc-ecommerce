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
  Package2,
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

export function AEStartupsCalculatorPageAr() {
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
    document.title = "حاسبة الأسعار الشفافة - شاهد تكاليف التنفيذ مقدماً | GWC مع Quivo";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'شفافية كاملة في الأسعار لتنفيذ التجارة الإلكترونية. احسب تكاليفك الدقيقة مقدماً بدون رسوم مخفية. أسعار شفافة من منتج واحد إلى 1000+. اعرف ما ستدفعه قبل الالتزام.');
    }

    return () => {
      document.documentElement.dir = 'ltr';
    };
  }, []);

  const skuTiers = [
    {
      range: "1-10 منتجات",
      segment: "بداية الطريق",
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
      secondaryCtaLink: "https://meetings.hubspot.com/gwc-logistics"
    },
    {
      range: "10-50 منتج",
      segment: "نمو سريع",
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      color: "bg-primary",
      features: [
        "مزامنة المخزون عبر القنوات",
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
      secondaryCtaLink: "https://meetings.hubspot.com/gwc-logistics"
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
      ctaLink: "/rate-calculator",
      secondaryCta: "احجز استشارة",
      secondaryCtaLink: "https://meetings.hubspot.com/gwc-logistics"
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
                  مصمم للشركات الناشئة والبائعين الصغار
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-primary">شفافية كاملة في الأسعار</span> لأعمال التجارة الإلكترونية
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  اعرف بالضبط ما ستدفعه قبل الالتزام. أسعار شفافة، بدون رسوم مخفية. ابدأ بمنتج واحد أو توسع إلى 1000+. ادفع فقط مقابل ما تستخدمه.
                </p>
                
                <div className="space-y-4 mb-8">
                  <motion.div 
                    className="flex items-start gap-3 bg-background/80 p-4 rounded-lg border border-border"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  >
                    <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">إطلاق في 48 ساعة</h4>
                      <p className="text-sm text-muted-foreground">
                        تكامل سريع. أرسل المخزون. ابدأ البيع فوراً.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-3 bg-background/80 p-4 rounded-lg border border-border"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  >
                    <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">توسع بلا حدود</h4>
                      <p className="text-sm text-muted-foreground">
                        من طلب واحد إلى 1000+ يومياً. ننمو معك تلقائياً.
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
                  <Link href="/rate-calculator">
                    <Button size="lg">
                      احسب تكاليفك
                      <ArrowLeft className="mr-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    شاهد كيف يعمل
                  </Button>
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Logo Carousel */}
        <SocialProofSectionAr />

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
                GWC شريكك في تنفيذ التجارة الإلكترونية في الإمارات
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                من المستودعات الحديثة إلى التقنية المتقدمة وأسطول التوصيل الموثوق - لدينا كل ما تحتاجه للنجاح
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
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.02, y: -5 }}
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
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <img 
                  src={technologyImage} 
                  alt="أنظمة تقنية متقدمة"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-1">تقنية متقدمة</h3>
                  <p className="text-sm opacity-90">تتبع فوري وإدارة مخزون</p>
                </div>
              </motion.div>

              {/* Fleet Image */}
              <motion.div
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.02, y: -5 }}
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

        {/* Platform Integrations */}
        <IntegrationsSectionAr />

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

        {/* How It Works - UAE Delivery Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
          <motion.div 
            className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                بسّط تنفيذ الإمارات مع تكاملات سلسة
              </h2>
              <p className="text-xl text-muted-foreground">
                اربط متجرك وابدأ التوصيل في جميع أنحاء الإمارات في ساعات
              </p>
            </motion.div>

            <motion.div 
              className="max-w-4xl mx-auto"
              style={{ y: section6Y }}
            >
              <div className="flex border-b mb-8 overflow-x-auto">
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
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="min-h-[300px]">
                {activeTab === "signup" && (
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4">
                      اربط متجرك بتكامل بنقرة واحدة وابدأ البيع في الإمارات خلال 24 ساعة
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div className="text-right">
                          <strong>إعداد سريع:</strong> عمليتنا الفعالة تجعلك تبدأ فوراً في أسواق الإمارات.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div className="text-right">
                          <strong>تكامل سهل:</strong> اربط Shopify أو WooCommerce أو أي منصة في دقائق.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div className="text-right">
                          <strong>إرشاد خبراء:</strong> يوفر فريقنا معرفة متخصصة لتوصيل الإمارات.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div className="text-right">
                          <strong>مدعوم من Quivo:</strong> تقنية تكامل متقدمة لعمليات سلسة.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === "inventory" && (
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4">
                      احتفظ بمنتجاتك بأمان في مستودعاتنا المكيفة في الإمارات
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div className="text-right">
                          <strong>تحكم بالمناخ:</strong> درجة حرارة مثالية لحماية المنتجات من حرارة الإمارات.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div className="text-right">
                          <strong>موقع استراتيجي:</strong> مستودعات موضوعة للتوصيل السريع في جميع أنحاء الإمارات.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div className="text-right">
                          <strong>أمان معزز:</strong> مراقبة 24/7 وإجراءات أمنية من الدرجة الأولى.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div className="text-right">
                          <strong>تتبع فوري:</strong> مراقبة المخزون الحية عبر جميع القنوات.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "fulfill" && (
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4">
                      اختبر تنفيذ الإمارات الخالي من المتاعب مع الانتقاء والتعبئة والشحن الموثوق
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div className="text-right">
                          <strong>عمليات فعالة:</strong> أنظمة متقدمة تضمن تنفيذ الطلبات بدقة.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div className="text-right">
                          <strong>تعبئة مخصصة:</strong> ابنِ علامتك التجارية بتجارب فتح علب مخصصة.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div className="text-right">
                          <strong>مراقبة الجودة:</strong> إجراءات صارمة لمنع العيوب أو الأضرار.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div className="text-right">
                          <strong>مزامنة متعددة القنوات:</strong> تنفيذ الطلبات من جميع المنصات تلقائياً.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "deliver" && (
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4">
                      التوصيل في جميع أنحاء الإمارات مع خيارات نفس اليوم والتتبع الفوري
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div className="text-right">
                          <strong>توصيل نفس اليوم:</strong> متوفر في دبي وأبوظبي والمدن الرئيسية في الإمارات.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div className="text-right">
                          <strong>تتبع فوري:</strong> يتتبع العملاء التوصيلات بتحديثات حية.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div className="text-right">
                          <strong>خبرة محلية:</strong> التنقل في الجمارك ومتطلبات التوصيل في الإمارات بسلاسة.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1" />
                        <div className="text-right">
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
                    للشركات الناشئة: ادفع كلما نميت
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    ابدأ بالتنفيذ الأساسي، أضف الخدمات كما تحتاجها. لا التزامات مسبقة.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>استخدم الخدمات فقط عند الحاجة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>لا متطلبات حد أدنى للحجم</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>أسعار مرنة حسب الاستخدام</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Package2 className="w-6 h-6 text-primary" />
                    لماذا يفرض المنافسون رسوماً إضافية
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    مزودو الخدمات اللوجستية التقليديون يفرضون 500-2,000+ درهم شهرياً لهذه الخدمات. نحن نضمنها.
                  </p>
                  <div className="bg-background/80 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">توفر على:</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• توظيف موظفين للتجميع</li>
                      <li>• استئجار تخزين منفصل</li>
                      <li>• إدارة عدة موردين</li>
                      <li>• رسوم خدمة الحد الأدنى</li>
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
            className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
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
                <Package className="w-3 h-3 ml-1" />
                خلف الكواليس
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                شاهد كيف <span className="text-primary">نتعامل مع منتجاتك</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                تنفيذ احترافي من اليوم الأول. منتجاتك في أيدٍ خبيرة.
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
                  src="https://player.vimeo.com/video/1127601906?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;controls=0" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  title="فيديو مركز GWC للتنفيذ"
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
          <CTASectionAr />
        </motion.div>
      </main>
      <FooterAr />
    </div>
  );
}

