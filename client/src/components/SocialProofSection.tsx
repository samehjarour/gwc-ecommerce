import sonyLogo from "@assets/sony_1757527184709.gif";
import ikeaLogo from "@assets/IKEA-logo-1_1757527184709.png";
import zaraLogo from "@assets/Zara-logo_1757527184709.png";
import adidasLogo from "@assets/Adidas-logo_1757527184709.png";
import hmLogo from "@assets/H&M-logo_1757527184708.png";

const brands = [
  { name: "Sony", logo: sonyLogo },
  { name: "IKEA", logo: ikeaLogo },
  { name: "Zara", logo: zaraLogo },
  { name: "Adidas", logo: adidasLogo },
  { name: "H&M", logo: hmLogo },
];

export function SocialProofSection() {
  return (
    <section className="py-16 bg-muted/20" data-testid="section-social-proof">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2" data-testid="text-social-proof-title">
            Trusted by 100+ brands worldwide
          </h2>
          <p className="text-muted-foreground">
            Leading brands choose GWC for their fulfillment needs
          </p>
        </div>
        
        {/* Logo Carousel */}
        <div className="relative overflow-hidden" data-testid="carousel-brands">
          <div className="flex animate-brand-scroll space-x-12 md:space-x-16">
            {/* First set */}
            {brands.map((brand, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                data-testid={`brand-logo-${brand.name.toLowerCase()}`}
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter brightness-0 opacity-60 hover:brightness-100 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter brightness-0 opacity-60 hover:brightness-100 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}