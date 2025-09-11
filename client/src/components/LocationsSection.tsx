import { useEffect, useState, useRef } from "react";
import vanImage from "@assets/GWC Van - Riyadh_1_1757527184708.jpg";

const locations = [
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇦🇹", name: "Austria" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🕌", name: "GCC" },
];

export function LocationsSection() {
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

  return (
    <section id="locations" ref={ref} className="py-20 bg-background" data-testid="section-locations">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-locations-title">
              Global Network
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              Strategic Presence Across Major Global Markets
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With facilities and partnerships spanning key international markets, we provide 
              comprehensive coverage for your global e-commerce expansion needs.
            </p>
            
            {/* Location Grid */}
            <div className="grid grid-cols-2 gap-4">
              {locations.map((location, index) => (
                <div 
                  key={location.name}
                  className={`flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover-elevate transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  data-testid={`location-${location.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span className="text-2xl" role="img" aria-label={location.name}>
                    {location.flag}
                  </span>
                  <span className="font-medium text-foreground">
                    {location.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative group">
              <img 
                src={vanImage} 
                alt="GWC Fleet in Riyadh" 
                className="w-full h-auto rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                data-testid="img-gwc-fleet"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}