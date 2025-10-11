import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Languages } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Function to switch to Arabic
  const switchToArabic = () => {
    if (location === "/" || location === "/qatar-video") {
      window.location.href = "/qatar-video-ar";
    } else if (location === "/quote2") {
      window.location.href = "/quote2-ar";
    } else {
      window.location.href = "/qatar-video-ar";
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <img 
              src="/images/GWC-logo.svg" 
              alt="GWC - Delivering Logistics Innovation" 
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
              Services
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-contact"
            >
              Contact
            </button>
            
            {/* Language Switcher */}
            <button
              onClick={switchToArabic}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              data-testid="button-language"
              title="Switch to Arabic"
            >
              <Languages className="h-4 w-4" />
              <span className="text-sm font-medium">العربية</span>
            </button>
            
            <Link href="/quote2">
              <Button data-testid="button-get-quote">Get Quote</Button>
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
              <a 
                href="https://www.gwclogistics.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-mobile-services"
              >
                Services
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-mobile-contact"
              >
                Contact
              </button>
              
              {/* Mobile Language Switcher */}
              <button
                onClick={switchToArabic}
                className="flex items-center gap-2 text-left text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-mobile-language"
              >
                <Languages className="h-4 w-4" />
                <span>العربية (Arabic)</span>
              </button>
              
              <Link href="/quote2">
                <Button className="w-full" data-testid="button-mobile-quote">Get Quote</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
