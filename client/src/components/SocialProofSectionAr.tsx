import logotipo25Image from "@assets/Logotipo-25_1759739220112.png";
import spyraImage from "@assets/logo-spyra-w1000_1759739220113.png";
import neohImage from "@assets/neoh_logo_ohneclaim copy_1759739220113.png";
import tractiveImage from "@assets/tractive-logo-white copy_1759739220113.png";
import clientLogo5Image from "@assets/0x0_1759739220114.png";

const brands = [
  { name: "Logotipo", image: logotipo25Image, alt: "شعار العميل" },
  { name: "Spyra", image: spyraImage, alt: "شعار Spyra" },
  { name: "NEOH", image: neohImage, alt: "شعار NEOH" },
  { name: "Tractive", image: tractiveImage, alt: "شعار Tractive" },
  { name: "Client", image: clientLogo5Image, alt: "شعار العميل" },
];

export function SocialProofSectionAr() {
  return (
    <section className="py-16 bg-slate-900" data-testid="section-social-proof">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2" data-testid="text-social-proof-title">
            موثوق به من قبل أفضل علامات التجارة الإلكترونية
          </h2>
          <p className="text-slate-300" data-testid="text-social-proof-subtitle">
            من عمالقة التجزئة إلى رواد التكنولوجيا، جي دبليو سي تدعم التنفيذ عبر الصناعات
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
