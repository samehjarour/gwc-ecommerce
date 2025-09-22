import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { BarChart3, Globe, TrendingUp, Check } from "lucide-react";

export function AnalyticsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    "Integrate with multiple eCommerce platforms",
    "Real-time visibility for your daily operations", 
    "Scale and manage your inventory with ease"
  ];

  return (
    <section ref={ref} className="py-20 bg-muted/20" data-testid="section-analytics">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-analytics-title">
              Track Everything.{" "}
              <span className="block">Anywhere.</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              IQ Platform is simple, intuitive, and powerful. Our priority was 
              to make it as user-friendly as possible. Integrate your online 
              store and start selling.
            </p>
            
            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                  data-testid={`feature-${index}`}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              variant="outline" 
              size="lg"
              className="font-semibold hover-elevate"
              data-testid="button-learn-more-analytics"
            >
              Learn More
            </Button>
          </div>

          {/* Mock Dashboard */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative bg-slate-900 rounded-2xl p-6 shadow-2xl" data-testid="dashboard-mockup">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-slate-400 text-sm">IQ Dashboard</div>
              </div>
              
              {/* Charts Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Pie Chart */}
                <div className="bg-slate-800 rounded-lg p-4">
                  <div className="text-slate-300 text-sm mb-3">Delivery Performance</div>
                  <div className="w-16 h-16 mx-auto relative">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="14" stroke="#374151" strokeWidth="2" fill="none" />
                      <circle cx="16" cy="16" r="14" stroke="#3B82F6" strokeWidth="2" strokeDasharray="70 30" strokeLinecap="round" fill="none" />
                    </svg>
                  </div>
                </div>
                
                {/* Bar Chart */}
                <div className="bg-slate-800 rounded-lg p-4">
                  <div className="text-slate-300 text-sm mb-3">Delivery by Country</div>
                  <div className="flex items-end justify-center space-x-1 h-12">
                    <div className="w-3 h-8 bg-blue-500 rounded-t"></div>
                    <div className="w-3 h-10 bg-blue-600 rounded-t"></div>
                    <div className="w-3 h-6 bg-blue-400 rounded-t"></div>
                    <div className="w-3 h-9 bg-blue-500 rounded-t"></div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Chart */}
              <div className="bg-slate-800 rounded-lg p-4">
                <div className="text-slate-300 text-sm mb-3">Revenue Trends</div>
                <div className="flex items-end justify-between h-8">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-4 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t" 
                      style={{ height: `${20 + Math.random() * 12}px` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}