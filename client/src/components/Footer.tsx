import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-muted/30 text-foreground py-16" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="text-footer-brand">
              GWC
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Your trusted partner for e-commerce fulfillment across the Middle East. 
              Delivering logistics innovation with unmatched reliability and scale.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span data-testid="text-email">info@gwclogistics.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span data-testid="text-phone">+974 4449 3000</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span data-testid="text-address">D RING ROAD- DOHA, QATAR, P.O BOX : 24434</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-services-footer">
              Services
            </h4>
            <div className="space-y-2">
              <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="link-fulfillment">
                E-commerce Fulfillment
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="link-warehousing">
                Warehousing
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="link-distribution">
                Distribution
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="link-same-day">
                Same-day Delivery
              </Link>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-locations-footer">
              Locations
            </h4>
            <div className="space-y-2">
              <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="link-saudi">
                Saudi Arabia
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="link-uae">
                UAE
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="link-kuwait">
                Kuwait
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="link-qatar">
                Qatar
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm" data-testid="text-copyright">
            © 2024 GWC Logistics. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-privacy">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-terms">
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-cookies">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}