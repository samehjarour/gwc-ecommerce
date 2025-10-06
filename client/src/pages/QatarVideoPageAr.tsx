import { HeaderAr } from "@/components/HeaderAr";
import { SocialProofSectionAr } from "@/components/SocialProofSectionAr";
import { TestimonialsSectionAr } from "@/components/TestimonialsSectionAr";
import { IntegrationsSectionAr } from "@/components/IntegrationsSectionAr";
import { CTASectionAr } from "@/components/CTASectionAr";
import { FooterAr } from "@/components/FooterAr";
import { MapStatsSectionAr } from "@/components/MapStatsSectionAr";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Headphones, Clock, Award, Package, Activity } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";
import videoSrc from "@assets/GWC-website_1758777706579.mp4";

export function QatarVideoPageAr() {
  useEffect(() => {
    document.title = "خدمات التنفيذ الموثوقة للتجارة الإلكترونية في قطر مع خدمة عملاء حقيقية | GWC";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'احصل على خدمات تنفيذ موثوقة للتجارة الإلكترونية في قطر مع خدمة عملاء حقيقية متاحة عند الحاجة. توصيل في الوقت المحدد بنسبة 98% مع وقت استجابة 90 دقيقة.');
    }

    // Set language attribute
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';

    return () => {
      // Reset on unmount
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
    };
  }, []);

  return (
    <div className="min-h-screen arabic-font" dir="rtl">
      <HeaderAr />
      <main>
        {/* Hero Section with Video */}
        <section className="relative py-20 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4" data-testid="badge-qatar-leader">
                  شريك التنفيذ الأول للتجارة الإلكترونية في قطر
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-hero">
                  احصل على خدمات تنفيذ موثوقة للتجارة الإلكترونية في قطر مع <em className="italic text-primary not-italic">خدمة عملاء حقيقية</em> متاحة عند الحاجة
                </h1>
                <p className="text-xl text-muted-foreground mb-8" data-testid="text-hero-description">
                  استمتع بخدمة توصيل موثوقة بنسبة 98% في الوقت المحدد وفريق دعم سريع الاستجابة بمتوسط وقت استجابة 90 دقيقة.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/quote2">
                    <Button size="lg" data-testid="button-get-quote">
                      ابدأ اليوم
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                  <video 
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    data-testid="hero-video"
                  >
                    <source src={videoSrc} type="video/mp4" />
                    متصفحك لا يدعم تشغيل الفيديو.
                  </video>
                  <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Carousel */}
        <SocialProofSectionAr />

        {/* Benefits Section - Positive Only */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-benefits">
                خدمة <em className="italic text-primary">تحقق النتائج</em>
              </h2>
              <p className="text-xl text-muted-foreground" data-testid="text-benefits-subtitle">
                دعم حقيقي، توصيل موثوق، وتقنية تعمل بالفعل
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover-elevate" data-testid="card-delivery">
                <CardContent className="pt-8 pb-8">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">توصيل موثوق</h3>
                  <p className="text-muted-foreground mb-4">
                    نسبة توصيل في الوقت المحدد 98% في قطر. يحصل عملاؤك على طلباتهم في الموعد المحدد، مما يبني الثقة في علامتك التجارية.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate" data-testid="card-support">
                <CardContent className="pt-8 pb-8">
                  <Headphones className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">دعم عملاء حقيقي</h3>
                  <p className="text-muted-foreground mb-4">
                    متوسط وقت استجابة 90 دقيقة من فريق الدعم المحلي في قطر. احصل على الإجابات عندما تحتاجها، وليس بعد أيام.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate" data-testid="card-technology">
                <CardContent className="pt-8 pb-8">
                  <Activity className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">تقنية موثوقة</h3>
                  <p className="text-muted-foreground mb-4">
                    تتبع مباشر يتحدث فعلياً. رؤية فورية للمخزون. تقنية مصممة للعمل، وليس فقط للإبهار.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Stats Section */}
        <MapStatsSectionAr />

        {/* Testimonials */}
        <TestimonialsSectionAr segment="qatar-video" />

        {/* Platform Integrations */}
        <IntegrationsSectionAr />

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-how-it-works">
                عملية بسيطة، <em className="italic text-primary">نتائج موثوقة</em>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4" data-testid="step-connect">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">اربط متجرك</h3>
                      <p className="text-muted-foreground">
                        تكامل سريع مع منصة التجارة الإلكترونية الخاصة بك. فريقنا في قطر يرشدك خلال الإعداد.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="step-inventory">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">أرسل المخزون إلى قطر</h3>
                      <p className="text-muted-foreground">
                        شحن المنتجات إلى مركز التنفيذ في قطر للتوصيل المحلي السريع لعملائك.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="step-fulfill">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">نتولى التنفيذ</h3>
                      <p className="text-muted-foreground">
                        الطلبات يتم اختيارها وتعبئتها وشحنها تلقائياً مع تحديثات التتبع الفورية.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="step-support">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">احصل على الدعم عند الحاجة</h3>
                      <p className="text-muted-foreground">
                        فريق الدعم المحلي في قطر متاح لمساعدتك والإجابة على أسئلة العملاء بسرعة.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <video 
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASectionAr />
      </main>
      <FooterAr />
    </div>
  );
}
