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
        {/* Quivo Partnership Section */}
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6" data-testid="text-partnership-badge">
              Powered by Quivo Integration
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-partnership-title">
              Simple, Intuitive, and Powerful Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Through our integration with <a href="https://quivo.co/us/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Quivo</a>, we provide a user-friendly platform that makes it incredibly easy to integrate your online store and start selling across the GCC region. Our priority was to make it as simple as possible for European businesses to expand.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">One-Click Integration</h3>
                <p className="text-muted-foreground">Connect your store in minutes with our streamlined setup process</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Real-time Sync</h3>
                <p className="text-muted-foreground">Automatic inventory and order management across all channels</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Scale Seamlessly</h3>
                <p className="text-muted-foreground">Grow from startup to enterprise with our flexible infrastructure</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4" data-testid="text-integrations-title">
            Access a variety of prebuilt eCommerce integrations
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Connect with 40+ supported platforms and marketplaces
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