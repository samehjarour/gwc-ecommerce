import shopifyLogo from "@assets/shopify_1758598346980.png";
import amazonLogo from "@assets/amazon_1758598346980.png";
import wooLogo from "@assets/woo (1)_1758598346980.png";
import wixLogo from "@assets/wix_1758598346981.png";
import tiktokLogo from "@assets/tiktok_1758598346981.png";
import billbeeLogo from "@assets/billbee_1758598346981.png";
import ottoLogo from "@assets/otto_1758598346981.png";

const integrations = [
  { logo: shopifyLogo, name: "Shopify" },
  { logo: amazonLogo, name: "Amazon FBM" },
  { logo: wooLogo, name: "WooCommerce" },
  { logo: wixLogo, name: "Wix" },
  { logo: tiktokLogo, name: "TikTok Shop" },
  { logo: billbeeLogo, name: "Billbee" },
  { logo: ottoLogo, name: "Otto" },
];

export function IntegrationsSection() {
  return (
    <section className="py-20 bg-muted/20 overflow-hidden" data-testid="section-integrations">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-integrations-title">
            Access a variety of prebuilt eCommerce integrations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Seamlessly connect with your favorite platforms and start selling today
          </p>
        </div>
        
        {/* Integration Cards Carousel */}
        <div className="relative">
          <div className="flex animate-integration-slide space-x-6" data-testid="carousel-integrations">
            {/* First set */}
            {integrations.map((integration, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 w-40 p-6 bg-card border border-card-border rounded-xl hover-elevate transition-all duration-300 hover:scale-105 group"
                data-testid={`integration-${integration.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center p-2">
                    <img 
                      src={integration.logo} 
                      alt={`${integration.name} logo`}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {integration.name}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {integrations.map((integration, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 w-40 p-6 bg-card border border-card-border rounded-xl hover-elevate transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center p-2">
                    <img 
                      src={integration.logo} 
                      alt={`${integration.name} logo`}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {integration.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}