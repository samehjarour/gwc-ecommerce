import customerLogos from "@assets/image_1758532265261.png";

export function SocialProofSection() {
  return (
    <section className="py-16 bg-muted/20" data-testid="section-social-proof">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2" data-testid="text-social-proof-title">
            Trusted by Global Businesses
          </h2>
          <p className="text-muted-foreground" data-testid="text-social-proof-subtitle">
            From retail giants to tech leaders, GWC powers fulfillment across industries
          </p>
        </div>
        
        {/* Customer Logos Grid */}
        <div className="max-w-5xl mx-auto" data-testid="customer-logos">
          <img 
            src={customerLogos} 
            alt="GWC customer logos including IKEA, McDonald's, Qatar Airways, Huawei, Carrefour, Vodafone, and many other global brands across retail, technology, fashion, and hospitality industries"
            className="w-full h-auto rounded-2xl shadow-lg"
            data-testid="img-customer-logos"
          />
        </div>
      </div>
    </section>
  );
}