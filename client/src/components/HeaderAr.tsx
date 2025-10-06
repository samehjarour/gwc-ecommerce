import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoWhite from "@assets/Newlogo_white_clean_1757527184708.png";

export function HeaderAr() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <img 
              src={logoWhite} 
              alt="GWC - ابتكار الخدمات اللوجستية" 
              className="h-10 w-auto brightness-0"
              data-testid="img-logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-services"
            >
              الخدمات
            </button>
            <button 
              onClick={() => scrollToSection('locations')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-locations"
            >
              المواقع
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-contact"
            >
              اتصل بنا
            </button>
            <Link href="/quote2-ar">
              <Button data-testid="button-get-quote">احصل على عرض أسعار</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border" data-testid="menu-mobile">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-right text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-mobile-services"
              >
                الخدمات
              </button>
              <button 
                onClick={() => scrollToSection('locations')}
                className="text-right text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-mobile-locations"
              >
                المواقع
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-right text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-mobile-contact"
              >
                اتصل بنا
              </button>
              <Link href="/quote2-ar">
                <Button className="w-full" data-testid="button-mobile-quote">احصل على عرض أسعار</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
