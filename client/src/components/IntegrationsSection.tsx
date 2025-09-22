import { ShoppingBag, Package, Moon, ShoppingCart, Target, Globe, Smartphone, Settings, DollarSign, Shield, Clock } from "lucide-react";

const integrations = [
  { icon: ShoppingBag, name: "Shopify" },
  { icon: Package, name: "Amazon FBM" },
  { icon: Moon, name: "Noon" },
  { icon: ShoppingCart, name: "WooCommerce" },
  { icon: Target, name: "Magento" },
  { icon: Globe, name: "Wix" },
  { icon: Smartphone, name: "TikTok Shop" },
  { icon: Settings, name: "PrestaShop" },
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
          
          {/* European to GCC Benefits */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center p-6 bg-card rounded-xl border border-card-border hover-elevate transition-all duration-300" data-testid="benefit-pricing">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Transparent Pricing</h3>
              <p className="text-muted-foreground">No hidden fees - see exact costs upfront with our pricing calculator</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl border border-card-border hover-elevate transition-all duration-300" data-testid="benefit-compliance">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Regulatory Compliance</h3>
              <p className="text-muted-foreground">Automated handling of GCC customs, VAT, and product certifications</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl border border-card-border hover-elevate transition-all duration-300" data-testid="benefit-fast-entry">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Fast Market Entry</h3>
              <p className="text-muted-foreground">Launch in GCC within 30 days with pre-approved fulfillment centers</p>
            </div>
          </div>
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
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <integration.icon className="w-6 h-6" />
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
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <integration.icon className="w-6 h-6" />
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