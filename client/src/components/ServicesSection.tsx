import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, BarChart3, Truck } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
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
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <Card className="h-full hover-elevate transition-all duration-300 hover:scale-[1.02]" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background" data-testid="section-services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Solutions Designed For You
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive fulfillment solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Bot className="w-8 h-8" />}
            title="E-commerce Fulfillment powered by automation"
            description="GWC is a MENA based fulfillment solution trusted by 100+ brands to ship orders from anywhere to their customers."
            delay={0}
          />
          <ServiceCard
            icon={<BarChart3 className="w-8 h-8" />}
            title="All-in-one platform for visibility and scale"
            description="Integrate, monitor, scale and track your eCommerce operations seamlessly across the Middle East."
            delay={200}
          />
          <ServiceCard
            icon={<Truck className="w-8 h-8" />}
            title="Same-day delivery and more for eCommerce"
            description="Grow as you go with flexible delivery solutions, nationwide with same day and next day delivery."
            delay={400}
          />
        </div>
      </div>
    </section>
  );
}