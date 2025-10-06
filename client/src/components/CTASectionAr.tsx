import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function CTASectionAr() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-cta">
          هل أنت مستعد للبدء؟
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto" data-testid="text-cta-description">
          انضم إلى أكثر من 100 علامة تجارية تثق في جي دبليو سي لخدمات التنفيذ الموثوقة للتجارة الإلكترونية في قطر
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/quote2">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              data-testid="button-quote-cta"
            >
              احصل على عرض أسعار مجاني
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
