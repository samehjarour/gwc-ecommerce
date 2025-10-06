import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export function FooterAr() {
  return (
    <footer id="contact" className="bg-muted/30 text-foreground py-16" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="text-footer-brand">
              جي دبليو سي
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              شريكك الموثوق لتنفيذ التجارة الإلكترونية في جميع أنحاء الشرق الأوسط. 
              تقديم الابتكار اللوجستي مع موثوقية وحجم لا مثيل لهما.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span data-testid="text-email" dir="ltr">info@gwclogistics.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span data-testid="text-phone" dir="ltr">+974 4449 3000</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span data-testid="text-address">طريق الدائري - الدوحة، قطر، ص.ب: 24434</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-services-footer">
              الخدمات
            </h4>
            <div className="space-y-2">
              <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="link-fulfillment">
                تنفيذ التجارة الإلكترونية
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="link-warehousing">
                التخزين
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="link-distribution">
                التوزيع
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="link-same-day">
                التوصيل في نفس اليوم
              </Link>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-locations-footer">
              المواقع
            </h4>
            <div className="space-y-2">
              <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="link-saudi">
                المملكة العربية السعودية
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="link-uae">
                الإمارات العربية المتحدة
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="link-kuwait">
                الكويت
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="link-qatar">
                قطر
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm" data-testid="text-copyright">
            © 2024 جي دبليو سي للخدمات اللوجستية. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-privacy">
              سياسة الخصوصية
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-terms">
              شروط الخدمة
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-cookies">
              سياسة ملفات تعريف الارتباط
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
