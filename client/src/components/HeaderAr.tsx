import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Languages, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export function HeaderAr() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Function to switch to English
  const switchToEnglish = () => {
    if (location === "/qatar-video-ar") {
      window.location.href = "/";
    } else if (location === "/quote2-ar") {
      window.location.href = "/quote2";
    } else {
      window.location.href = "/";
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/qatar-video-ar" data-testid="link-home">
            <img 
              src="/images/GWC-logo.svg" 
              alt="GWC - ابتكار الخدمات اللوجستية" 
              className="h-12 w-auto"
              data-testid="img-logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="https://www.gwclogistics.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-services"
            >
              الخدمات
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-contact"
            >
              اتصل بنا
            </button>
            
            {/* Language Switcher */}
            <button
              onClick={switchToEnglish}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              data-testid="button-language"
              title="Switch to English"
            >
              <Languages className="h-4 w-4" />
              <span className="text-sm font-medium">English</span>
            </button>
            
            <Link href="/quote2-ar">
              <Button data-testid="button-get-quote">احصل على عرض أسعار</Button>
            </Link>
            {isAuthenticated && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={logout}
                className="gap-2"
              >
                <LogOut className="w-4 h-4" />
                تسجيل خروج
              </Button>
            )}
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
              <a 
                href="https://www.gwclogistics.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-right text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-mobile-services"
              >
                الخدمات
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-right text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-mobile-contact"
              >
                اتصل بنا
              </button>
              
              {/* Mobile Language Switcher */}
              <button
                onClick={switchToEnglish}
                className="flex items-center gap-2 text-right text-muted-foreground hover:text-foreground transition-colors justify-end"
                data-testid="button-mobile-language"
              >
                <span>English (الإنجليزية)</span>
                <Languages className="h-4 w-4" />
              </button>
              
              <Link href="/quote2-ar" className="w-full">
                <Button className="w-full" data-testid="button-mobile-quote">احصل على عرض أسعار</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
