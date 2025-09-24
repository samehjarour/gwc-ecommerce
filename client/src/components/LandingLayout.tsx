import { useEffect, useState } from "react";
import { FlexibleHero } from "./FlexibleHero";
import { getVariant, trackPageView, trackScrollDepth } from "@/lib/analytics";

interface CTA {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive";
  testId: string;
}

interface HeroConfig {
  backgroundImage: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCTA: CTA;
  secondaryCTA?: CTA;
}

interface LandingLayoutProps {
  segment: string;
  heroConfig: HeroConfig;
  children: React.ReactNode;
  testIdPrefix: string;
  pageTitle: string;
  metaDescription: string;
}

export function LandingLayout({
  segment,
  heroConfig,
  children,
  testIdPrefix,
  pageTitle,
  metaDescription
}: LandingLayoutProps) {
  const [variant] = useState<"A" | "B" | "C">(() => getVariant(segment));

  useEffect(() => {
    // Set page title and meta description
    document.title = pageTitle;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', metaDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = metaDescription;
      document.head.appendChild(meta);
    }

    // A/B testing variant assignment is now done synchronously in useState initializer
  }, [segment, pageTitle, metaDescription]);

  const handleHeroView = () => {
    // Track page view
    trackPageView(segment, variant);
  };

  const handleScroll = () => {
    const scrollPercentage = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollPercentage >= 25 && scrollPercentage < 50) {
      // Track 25% scroll depth
      trackScrollDepthLocal(25);
    } else if (scrollPercentage >= 50 && scrollPercentage < 75) {
      // Track 50% scroll depth
      trackScrollDepthLocal(50);
    } else if (scrollPercentage >= 75) {
      // Track 75% scroll depth
      trackScrollDepthLocal(75);
    }
  };

  const trackScrollDepthLocal = (depth: number) => {
    trackScrollDepth(segment, variant, depth);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [segment, variant]);

  return (
    <div className="min-h-screen bg-background">
      <FlexibleHero
        backgroundImage={heroConfig.backgroundImage}
        eyebrow={heroConfig.eyebrow}
        headline={heroConfig.headline}
        subheadline={heroConfig.subheadline}
        primaryCTA={heroConfig.primaryCTA}
        secondaryCTA={heroConfig.secondaryCTA}
        testIdPrefix={testIdPrefix}
        segment={segment}
        variant={variant}
        onView={handleHeroView}
      />
      
      {children}
    </div>
  );
}