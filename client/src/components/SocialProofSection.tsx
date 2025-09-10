const brands = [
  { name: "Sony", displayName: "SONY" },
  { name: "IKEA", displayName: "IKEA" },
  { name: "Zara", displayName: "ZARA" },
  { name: "Adidas", displayName: "adidas" },
  { name: "H&M", displayName: "H&M" },
  { name: "Stanford", displayName: "Stanford University" },
  { name: "Discovery", displayName: "Discovery" },
  { name: "UFC", displayName: "UFC" },
];

export function SocialProofSection() {
  return (
    <section className="py-16 bg-muted/20" data-testid="section-social-proof">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2" data-testid="text-social-proof-title">
            Trusted by over 2,000,000 small business, agencies and top global brands worldwide
          </h2>
        </div>
        
        {/* Logo Carousel */}
        <div className="relative overflow-hidden" data-testid="carousel-brands">
          <div className="flex animate-brand-scroll space-x-12 md:space-x-16">
            {/* First set */}
            {brands.map((brand, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 w-48 h-16 flex items-center justify-center transition-all duration-300"
                data-testid={`brand-logo-${brand.name.toLowerCase()}`}
              >
                <span 
                  className="text-xl font-semibold text-foreground/70 hover:text-foreground transition-all duration-300 whitespace-nowrap"
                >
                  {brand.displayName}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 w-48 h-16 flex items-center justify-center transition-all duration-300"
              >
                <span 
                  className="text-xl font-semibold text-foreground/70 hover:text-foreground transition-all duration-300 whitespace-nowrap"
                >
                  {brand.displayName}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}