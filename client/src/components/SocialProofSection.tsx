const brands = [
  { name: "IKEA", displayName: "IKEA", style: "font-bold text-2xl tracking-wide" },
  { name: "McDonald's", displayName: "McDonald's", style: "font-bold text-2xl" },
  { name: "Qatar Airways", displayName: "QATAR AIRWAYS", style: "font-light tracking-widest text-xl" },
  { name: "Huawei", displayName: "HUAWEI", style: "font-light tracking-wider text-2xl" },
  { name: "Carrefour", displayName: "Carrefour", style: "font-normal text-2xl" },
  { name: "Vodafone", displayName: "Vodafone", style: "font-normal text-2xl" },
  { name: "ACE", displayName: "ACE", style: "font-bold text-2xl tracking-wide" },
  { name: "LuLu", displayName: "LuLu", style: "font-normal italic text-2xl" },
  { name: "Ericsson", displayName: "ERICSSON", style: "font-light tracking-wider text-xl" },
  { name: "ooredoo", displayName: "ooredoo", style: "font-normal text-2xl" },
  { name: "PAN", displayName: "PAN", style: "font-bold text-2xl tracking-widest" },
  { name: "Al Meera", displayName: "Al Meera", style: "font-normal text-xl" },
  { name: "Jumbo", displayName: "Jumbo", style: "font-bold text-2xl" },
  { name: "Nestlé", displayName: "Nestlé", style: "font-normal text-2xl" },
  { name: "Apparel Group", displayName: "APPAREL GROUP", style: "font-light tracking-wide text-lg" },
  { name: "Alshaya Group", displayName: "ALSHAYA GROUP", style: "font-light tracking-wide text-lg" },
];

export function SocialProofSection() {
  return (
    <section className="py-16 bg-slate-900" data-testid="section-social-proof">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2" data-testid="text-social-proof-title">
            Trusted by Global Businesses
          </h2>
          <p className="text-slate-300" data-testid="text-social-proof-subtitle">
            From retail giants to tech leaders, GWC powers fulfillment across industries
          </p>
        </div>
        
        {/* Logo Carousel */}
        <div className="relative overflow-hidden" data-testid="carousel-brands">
          <div className="flex animate-brand-scroll space-x-12 md:space-x-16">
            {/* First set */}
            {brands.map((brand, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 w-48 h-16 flex items-center justify-center transition-all duration-300"
                data-testid={`brand-logo-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <span 
                  className={`${brand.style} text-white/80 hover:text-white transition-all duration-300 whitespace-nowrap`}
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
                  className={`${brand.style} text-white/80 hover:text-white transition-all duration-300 whitespace-nowrap`}
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