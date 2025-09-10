import { useEffect, useState, useRef } from "react";

interface StatItemProps {
  number: string;
  label: string;
  delay?: number;
}

function StatItem({ number, label, delay = 0 }: StatItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumber, setAnimatedNumber] = useState("0");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            // Animate the number if it contains digits
            if (number.match(/\d/)) {
              setTimeout(() => setAnimatedNumber(number), delay);
            } else {
              setAnimatedNumber(number);
            }
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [number, delay]);

  return (
    <div 
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 transition-all duration-1000">
        {animatedNumber}
      </div>
      <div className="text-muted-foreground font-medium leading-tight max-w-[200px] mx-auto">
        {label}
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 bg-muted/30" data-testid="section-stats">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <StatItem 
            number="1st" 
            label="Advanced fulfillment facility in GCC" 
            delay={0}
          />
          <StatItem 
            number="99.9%" 
            label="Order picking accuracy rate" 
            delay={200}
          />
          <StatItem 
            number="3x" 
            label="Productivity over manual operation" 
            delay={400}
          />
          <StatItem 
            number="15k" 
            label="Order fulfillment capacity per day" 
            delay={600}
          />
        </div>
      </div>
    </section>
  );
}