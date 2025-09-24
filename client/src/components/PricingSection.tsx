import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "wouter";

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  delay?: number;
}

function PricingTier({ name, price, period, description, features, popular = false, delay = 0 }: PricingTierProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      data-testid={`pricing-tier-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <Card className={`h-full relative ${popular ? 'border-primary border-2 shadow-xl scale-105' : 'border-card-border'} hover-elevate transition-all duration-300`}>
        {popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </span>
          </div>
        )}
        
        <CardHeader className="text-center pb-2">
          <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
          <div className="mb-4">
            <span className="text-4xl font-bold text-foreground">€{price}</span>
            <span className="text-muted-foreground ml-2">/{period}</span>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </CardHeader>
        
        <CardContent className="pt-0">
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3" data-testid={`feature-${index}`}>
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link href="/quote#quote-form">
            <Button 
              className={`w-full ${popular ? 'bg-primary hover:bg-primary/90' : 'variant-outline'}`}
              variant={popular ? "default" : "outline"}
              size="lg"
              data-testid={`button-get-started-${name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              Get Started
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

export function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const pricingTiers = [
    {
      name: "Starter",
      price: "299",
      period: "month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 500 orders per month",
        "2 fulfillment centers",
        "Basic integration support",
        "Standard delivery options",
        "Email support",
        "Basic analytics dashboard"
      ]
    },
    {
      name: "Growth",
      price: "599",
      period: "month", 
      description: "Ideal for growing businesses expanding to GCC",
      popular: true,
      features: [
        "Up to 2,000 orders per month",
        "5 fulfillment centers",
        "Priority integration support",
        "Same-day delivery available",
        "Phone & email support",
        "Advanced analytics & reporting",
        "Custom packaging options",
        "Returns management"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "month",
      description: "For large-scale operations with custom needs",
      features: [
        "Unlimited orders",
        "All fulfillment centers",
        "Dedicated account manager",
        "White-label solutions",
        "24/7 priority support",
        "Custom integrations",
        "Advanced API access",
        "SLA guarantees",
        "Custom compliance solutions"
      ]
    }
  ];

  return (
    <section 
      id="pricing" 
      ref={ref} 
      className="py-20 bg-background" 
      data-testid="section-pricing"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-pricing-title">
            Transparent Pricing for Every Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All prices in EUR with no hidden fees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={tier.name}
              name={tier.name}
              price={tier.price}
              period={tier.period}
              description={tier.description}
              features={tier.features}
              popular={tier.popular}
              delay={index * 200}
            />
          ))}
        </div>
        
        <div className={`text-center mt-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Our team can create a tailored package for your specific requirements.
          </p>
          <Link href="/quote#quote-form">
            <Button variant="outline" size="lg" data-testid="button-contact-sales">
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}