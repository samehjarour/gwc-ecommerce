import aceImage from "@assets/ACE_1758550429047.png";
import carrefourImage from "@assets/Carrefour_1758550429048.png";
import huaweiImage from "@assets/HUAWEI_1758550429079.png";
import ikeaImage from "@assets/IKEA_1758550429079.png";
import jumboImage from "@assets/Jumbo_1758550429079.png";
import mcdonaldsImage from "@assets/McDonalds_1758550429079.png";
import nestleImage from "@assets/Nestle_1758550429080.png";
import qatarAirwaysImage from "@assets/QA_1758550429080.png";
import vodafoneImage from "@assets/Vodafone_1758550429080.png";

const brands = [
  { name: "IKEA", image: ikeaImage, alt: "IKEA logo" },
  { name: "McDonald's", image: mcdonaldsImage, alt: "McDonald's logo" },
  { name: "Qatar Airways", image: qatarAirwaysImage, alt: "Qatar Airways logo" },
  { name: "Huawei", image: huaweiImage, alt: "Huawei logo" },
  { name: "Carrefour", image: carrefourImage, alt: "Carrefour logo" },
  { name: "Vodafone", image: vodafoneImage, alt: "Vodafone logo" },
  { name: "ACE", image: aceImage, alt: "ACE logo" },
  { name: "Jumbo", image: jumboImage, alt: "Jumbo logo" },
  { name: "Nestlé", image: nestleImage, alt: "Nestlé logo" },
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
                <img 
                  src={brand.image} 
                  alt={brand.alt}
                  className="max-w-full max-h-full object-contain filter invert brightness-0 opacity-80 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 w-48 h-16 flex items-center justify-center transition-all duration-300"
              >
                <img 
                  src={brand.image} 
                  alt={brand.alt}
                  className="max-w-full max-h-full object-contain filter invert brightness-0 opacity-80 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}