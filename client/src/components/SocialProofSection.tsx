import sonyLogo from "@assets/generated_images/Sony_logo_blue_color_1d750c80.png";
import ikeaLogo from "@assets/generated_images/IKEA_logo_blue_yellow_1351a63e.png";
import zaraLogo from "@assets/generated_images/Zara_logo_black_red_441191cc.png";
import adidasLogo from "@assets/generated_images/Adidas_logo_three_stripes_7aee6017.png";
import hmLogo from "@assets/generated_images/H&M_logo_red_white_b30d60a9.png";

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
                className="flex-shrink-0 w-56 h-28 flex items-center justify-center transition-all duration-300"
                data-testid={`brand-logo-${brand.name.toLowerCase()}`}
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 w-56 h-28 flex items-center justify-center transition-all duration-300"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}