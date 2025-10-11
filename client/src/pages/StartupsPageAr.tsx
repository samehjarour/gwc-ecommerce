import { HeaderAr } from "@/components/HeaderAr";
import { FooterAr } from "@/components/FooterAr";
import { SocialProofSectionAr } from "@/components/SocialProofSectionAr";
import { IntegrationsSectionAr } from "@/components/IntegrationsSectionAr";
import { TestimonialsSectionAr } from "@/components/TestimonialsSectionAr";
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
  Clock,
  Users,
  BarChart,
  ArrowLeft,
  Zap,
  Shield
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export function StartupsPageAr() {
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

  return (
    <div className="min-h-screen" dir="rtl">
      <HeaderAr />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4" data-testid="badge-startups">
                  <Rocket className="w-3 h-3 ml-1" />
                  مصمم للشركات الناشئة والبائعين الصغار
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-hero">
                  أطلق متجرك الإلكتروني <span className="text-primary">بدون رأس مال</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  ابدأ بمنتج واحد أو توسع إلى 1000+. لا حد أدنى. لا رسوم إعداد. ادفع فقط مقابل ما تستخدمه. تنفيذ احترافي من اليوم الأول.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">ابدأ بـ 0 درهم</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">لا حد أدنى</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">توسع مع نموك</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">جميع المنصات مدعومة</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/quote2-ar">
                    <Button size="lg" data-testid="button-get-quote">
                      احسب تكاليفك
                      <ArrowLeft className="mr-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div>
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                      لماذا تختار الشركات الناشئة GWC
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 bg-background/80 p-4 rounded-lg">
                        <DollarSign className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">وفر 60% من رأس المال</h4>
                          <p className="text-sm text-muted-foreground">
                            لا إيجار مستودع، لا موظفين، لا معدات. ابدأ مجاناً.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-background/80 p-4 rounded-lg">
                        <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">أطلق في 48 ساعة</h4>
                          <p className="text-sm text-muted-foreground">
                            تكامل سريع. أرسل المخزون. ابدأ البيع فوراً.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-background/80 p-4 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">توسع بلا حدود</h4>
                          <p className="text-sm text-muted-foreground">
                            من طلب واحد إلى 1000+ يومياً. ننمو معك تلقائياً.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Carousel */}
        <SocialProofSectionAr />

        {/* Stats Bar */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">0 درهم</div>
                <div className="text-sm opacity-90">رسوم الإعداد</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1</div>
                <div className="text-sm opacity-90">الحد الأدنى للمنتجات</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">48 ساعة</div>
                <div className="text-sm opacity-90">وقت الإطلاق</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15,000+</div>
                <div className="text-sm opacity-90">الطاقة اليومية</div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                التحديات التي تواجه كل <span className="text-primary">شركة ناشئة</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                نزيل العوائق حتى تتمكن من التركيز على نمو عملك
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">❌</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">الطريقة القديمة</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• استئجار مستودع (10,000+ درهم/شهر)</li>
                        <li>• توظيف موظفين (15,000+ درهم/شهر)</li>
                        <li>• شراء معدات وأنظمة</li>
                        <li>• إدارة الخدمات اللوجستية بنفسك</li>
                        <li>• تكاليف ثابتة عالية قبل أول عملية بيع</li>
                      </ul>
                      <div className="mt-4 p-3 bg-destructive/10 rounded-lg">
                        <p className="text-sm font-semibold text-destructive">
                          الإجمالي: 50,000+ درهم قبل البدء
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate border-primary border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">✅</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">طريقة GWC</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• لا حاجة لمستودع</li>
                        <li>• لا حاجة لتوظيف موظفين</li>
                        <li>• جميع الأنظمة مدرجة</li>
                        <li>• فريق لوجستي محترف</li>
                        <li>• ادفع فقط مقابل ما تستخدمه</li>
                      </ul>
                      <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                        <p className="text-sm font-semibold text-primary">
                          الإجمالي: 0 درهم للبدء. توسع مع المبيعات.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Zap className="w-3 h-3 ml-1" />
                أطلق في 3 خطوات بسيطة
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                من التسجيل إلى أول عملية بيع في <span className="text-primary">48 ساعة</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="text-center hover-elevate">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    1
                  </div>
                  <Package className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">اربط متجرك</h3>
                  <p className="text-muted-foreground mb-4">
                    تكامل 5 دقائق مع Shopify و WooCommerce و Salla أو Zid. لا حاجة لمهارات تقنية.
                  </p>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 ml-1" />
                    5 دقائق
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate border-primary border-2">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    2
                  </div>
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">أرسل منتجاتك</h3>
                  <p className="text-muted-foreground mb-4">
                    شحن المخزون إلى مرفقنا في قطر. نستلم ونعد ونخزن كل شيء من أجلك.
                  </p>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 ml-1" />
                    24-48 ساعة
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
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
            </div>

            <div className="text-center mt-12">
              <Link href="/quote2-ar">
                <Button size="lg" data-testid="btn-get-started">
                  ابدأ اليوم
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Platform Integrations */}
        <IntegrationsSectionAr />

        {/* Success Stories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Users className="w-3 h-3 ml-1" />
                قصص نجاح الشركات الناشئة
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                من <span className="text-primary">منتج واحد</span> إلى <span className="text-primary">1000+ طلب يومياً</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                شركات ناشئة حقيقية توسعت مع GWC
              </p>
            </div>
            <TestimonialsSectionAr segment="startups" />
          </div>
        </section>

        {/* Risk-Free Guarantee */}
        <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">
                  ابدأ بدون مخاطر اليوم
                </h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  لا رسوم إعداد. لا عقود طويلة الأجل. لا التزامات دنيا. إلغاء في أي وقت بإشعار مدته 30 يوماً. نفوز فقط عندما تنجح.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/quote2-ar">
                    <Button size="lg">
                      احسب تكاليفي
                      <ArrowLeft className="mr-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    احجز استشارة مجانية
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
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
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-lg overflow-hidden shadow-2xl" style={{ padding: '56.25% 0 0 0' }}>
                <iframe 
                  src="https://player.vimeo.com/video/1124864507?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;controls=0" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  title="فيديو مركز التنفيذ GWC"
                  data-testid="fulfillment-video"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASectionAr />
      </main>
      <FooterAr />
    </div>
  );
}

