const brands = [
  { name: "Sony", displayName: "SONY", style: "font-light tracking-widest text-2xl" },
  { name: "IKEA", displayName: "IKEA", style: "font-bold text-2xl" },
  { name: "Zara", displayName: "ZARA", style: "font-light tracking-[0.3em] text-xl" },
  { name: "Adidas", displayName: "adidas", style: "font-normal italic text-xl" },
  { name: "H&M", displayName: "H&M", style: "font-black text-2xl tracking-wider" },
  { name: "Stanford", displayName: "Stanford University", style: "font-serif font-medium text-lg" },
  { name: "Discovery", displayName: "Discovery", style: "font-bold text-xl tracking-wide" },
  { name: "UFC", displayName: "UFC", style: "font-black text-2xl tracking-widest" },
];

export function SocialProofSection() {
  return (
    <section className="py-16 bg-muted/20" data-testid="section-social-proof">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2" data-testid="text-social-proof-title">
            Trusted by Global Businesses
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
                  className={`${brand.style} text-foreground/70 hover:text-foreground transition-all duration-300 whitespace-nowrap`}
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
                  className={`${brand.style} text-foreground/70 hover:text-foreground transition-all duration-300 whitespace-nowrap`}
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