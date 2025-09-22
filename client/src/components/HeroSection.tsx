import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import truckImage from "@assets/GWC Truck - Riyadh_1_1757527184708.jpg";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('hero')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Parallax effect
  const parallaxOffset = scrollY * 0.5;

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${parallaxOffset}px) scale(1.1)`,
          backgroundImage: `url(${truckImage})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 z-10" />
      
      {/* Animated Logo Dots */}
      <div className="absolute top-20 right-20 z-20 hidden lg:block" data-testid="logo-dots">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 rounded-full transition-transform duration-500 ease-out ${
              i % 3 === 0 ? 'bg-blue-400' : i % 3 === 1 ? 'bg-green-400' : 'bg-blue-500'
            }`}
            style={{
              left: `${(i % 3) * 20 + mousePosition.x * 10}px`,
              top: `${Math.floor(i / 3) * 20 + mousePosition.y * 10}px`,
              transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-semibold mb-6" data-testid="text-eyebrow">
            European to GCC Market Expansion
          </div>
          
          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="text-hero-title">
            Expand Your European Business to the GCC's{" "}
            <span className="text-white bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              €25-35 Billion
            </span>{" "}
            E-Commerce Market
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
            Transparent pricing, no hidden fees. Start selling in Saudi Arabia, UAE, Qatar with our integrated fulfillment network.
          </p>
          
          {/* Problem/Solution Framework */}
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="text-red-400 font-semibold text-lg mb-2">The Problem</h3>
                  <p className="text-white/80 text-base">
                    European brands struggle with complex GCC market entry, hidden fulfillment costs, and regulatory compliance.
                  </p>
                </div>
                <div>
                  <h3 className="text-green-400 font-semibold text-lg mb-2">Our Solution</h3>
                  <p className="text-white/80 text-base">
                    We provide transparent pricing, automated compliance, and seamless integration with your existing European operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/quote">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-lg group"
                data-testid="button-get-quote-hero"
              >
                Start Your GCC Expansion
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-6 text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}