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
              Global Solutions Powered by Quivo Partnership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Advanced fulfillment technologies and platforms engineered for your business requirements through our strategic alliance with <a href="https://quivo.co/us/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Quivo</a>.
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
        
        {/* Integration Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl mx-auto" data-testid="grid-integrations">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
              data-testid={`integration-${integration.name.toLowerCase().replace(/\s+/g, '-')}`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-white to-slate-50 rounded-xl flex items-center justify-center p-3 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <img 
                    src={integration.logo} 
                    alt={`${integration.name} logo`}
                    className="w-full h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <span className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300 block">
                  {integration.name}
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}