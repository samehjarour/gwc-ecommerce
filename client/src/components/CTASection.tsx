import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground" data-testid="section-cta">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
            Ready to Expand Your E-Commerce Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed" data-testid="text-cta-subtitle">
            Get a customized quote for your fulfillment needs in just a few simple steps. 
            Join 100+ brands who trust GWC for their logistics solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/quote2">
              <Button 
                size="lg" 
                variant="secondary"
                className="font-semibold px-8 py-6 text-lg group hover:scale-105 transition-transform"
                data-testid="button-start-quote"
              >
                Start Your Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-contact-sales"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}