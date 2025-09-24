import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

interface CTA {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive";
  testId: string;
}

interface FlexibleHeroProps {
  backgroundImage: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCTA: CTA;
  secondaryCTA?: CTA;
  testIdPrefix: string;
  segment: string;
  variant: "A" | "B" | "C";
  onView?: () => void;
}

export function FlexibleHero({
  backgroundImage,
  eyebrow,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  testIdPrefix,
  segment,
  variant,
  onView
}: FlexibleHeroProps) {
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

  // Track page view on mount
  useEffect(() => {
    if (onView) {
      onView();
    }
  }, [onView]);

  // Parallax effect
  const parallaxOffset = scrollY * 0.5;

  const handleCTAClick = (cta: CTA, isPrimary: boolean) => {
    // Track CTA click event
    trackCTAClick(
      segment, 
      variant, 
      cta.text, 
      isPrimary ? 'primary' : 'secondary',
      cta.testId
    );

    if (cta.onClick) {
      cta.onClick();
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid={`${testIdPrefix}-hero`}
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${parallaxOffset}px) scale(1.1)`,
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 z-10" />
      
      {/* Animated Logo Dots */}
      <div 
        className="fixed top-20 right-20 z-20 hidden lg:block" 
        data-testid={`${testIdPrefix}-logo-dots`}
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 rounded-full transition-transform duration-500 ease-out ${
              i % 3 === 0 ? 'bg-[#00B6CC]' : i % 3 === 1 ? 'bg-green-400' : 'bg-[#00B6CC]'
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
          <div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-semibold mb-6" 
            data-testid={`${testIdPrefix}-eyebrow`}
          >
            {eyebrow}
          </div>
          
          {/* Main Title */}
          <h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" 
            data-testid={`${testIdPrefix}-headline`}
          >
            {headline}
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed" 
            data-testid={`${testIdPrefix}-subheadline`}
          >
            {subheadline}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryCTA.href ? (
              <Link href={primaryCTA.href}>
                <Button 
                  size="lg" 
                  variant={primaryCTA.variant || "default"}
                  className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-lg group"
                  data-testid={primaryCTA.testId}
                  onClick={() => handleCTAClick(primaryCTA, true)}
                >
                  {primaryCTA.text}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            ) : (
              <Button 
                size="lg" 
                variant={primaryCTA.variant || "default"}
                className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-lg group"
                data-testid={primaryCTA.testId}
                onClick={() => handleCTAClick(primaryCTA, true)}
              >
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}

            {secondaryCTA && (
              secondaryCTA.href ? (
                <Link href={secondaryCTA.href}>
                  <Button 
                    variant={secondaryCTA.variant || "outline"}
                    size="lg" 
                    className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-6 text-lg"
                    data-testid={secondaryCTA.testId}
                    onClick={() => handleCTAClick(secondaryCTA, false)}
                  >
                    {secondaryCTA.text}
                  </Button>
                </Link>
              ) : (
                <Button 
                  variant={secondaryCTA.variant || "outline"}
                  size="lg" 
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-6 text-lg"
                  data-testid={secondaryCTA.testId}
                  onClick={() => handleCTAClick(secondaryCTA, false)}
                >
                  {secondaryCTA.text}
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}