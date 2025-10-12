import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, TrendingUp, Rocket } from "lucide-react";
import { Link } from "wouter";

interface SKUTier {
  range: string;
  segment: string;
  icon: React.ReactNode;
  color: string;
  features: string[];
  highlight?: boolean;
  cta: string;
  ctaLink: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;
}

interface SKURangeAdvisorProps {
  title?: string;
  subtitle?: string;
  tiers: SKUTier[];
  testIdPrefix?: string;
}

export function SKURangeAdvisor({
  title = "Perfect Solution for Your Business Size",
  subtitle = "From startup to scale-up, we grow with you",
  tiers,
  testIdPrefix = "sku-advisor"
}: SKURangeAdvisorProps) {
  return (
    <div className="w-full" data-testid={`${testIdPrefix}-container`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid={`${testIdPrefix}-title`}>
          {title}
        </h2>
        <p className="text-xl text-muted-foreground" data-testid={`${testIdPrefix}-subtitle`}>
          {subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <Card 
            key={index}
            className={`relative hover-elevate ${tier.highlight ? 'border-primary border-2 shadow-lg' : ''}`}
            data-testid={`${testIdPrefix}-card-${index}`}
          >
            {tier.highlight && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1">
                  <Sparkles className="w-3 h-3 mr-1 inline" />
                  Most Popular
                </Badge>
              </div>
            )}
            
            <CardHeader className={`text-center pb-4 ${tier.highlight ? 'pt-8' : ''}`}>
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${tier.color}`}>
                {tier.icon}
              </div>
              <Badge variant="outline" className="mb-2 mx-auto">
                {tier.range}
              </Badge>
              <CardTitle className="text-2xl">{tier.segment}</CardTitle>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <Link href={tier.ctaLink}>
                  <Button 
                    className="w-full" 
                    variant={tier.highlight ? "default" : "outline"}
                    data-testid={`${testIdPrefix}-cta-${index}`}
                  >
                    {tier.cta}
                  </Button>
                </Link>
                
                {tier.secondaryCta && tier.secondaryCtaLink && (
                  tier.secondaryCtaLink.startsWith('http') ? (
                    <a href={tier.secondaryCtaLink} target="_blank" rel="noopener noreferrer" className="block">
                      <Button 
                        className="w-full" 
                        variant="ghost"
                        data-testid={`${testIdPrefix}-secondary-cta-${index}`}
                      >
                        {tier.secondaryCta}
                      </Button>
                    </a>
                  ) : (
                    <Link href={tier.secondaryCtaLink}>
                      <Button 
                        className="w-full" 
                        variant="ghost"
                        data-testid={`${testIdPrefix}-secondary-cta-${index}`}
                      >
                        {tier.secondaryCta}
                      </Button>
                    </Link>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

