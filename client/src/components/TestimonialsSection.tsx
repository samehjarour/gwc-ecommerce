import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { trackEvent, getVariant } from '@/lib/analytics';

interface TestimonialData {
  quote: string;
  company: string;
  logo: string;
}

const testimonials: TestimonialData[] = [
  {
    quote: "Partnering with GWC has streamlined our regional supply chain. Their scalable warehousing and proactive team ensure smooth operations and on-time deliveries, making them a trusted logistics partner.",
    company: "Huawei Technologies Co., Ltd.",
    logo: "H"
  },
  {
    quote: "GWC's efficient warehousing and reliable logistics network have been vital in keeping our shelves stocked and our customers satisfied. Their flexibility and commitment to excellence make them an invaluable partner in our growth journey.",
    company: "Carrefour",
    logo: "C"
  },
  {
    quote: "With GWC managing our logistics backbone, we've experienced smoother supply chains and greater operational efficiency. Their expertise allows us to focus on what we do best—creating a better everyday life for our customers.",
    company: "IKEA",
    logo: "I"
  }
];

interface TestimonialsSectionProps {
  segment: string;
  variant?: 'A' | 'B' | 'C';
}

export function TestimonialsSection({ segment, variant }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const actualVariant = variant || getVariant(segment);

  useEffect(() => {
    // Track testimonial section view
    trackEvent({
      page: window.location.pathname,
      segment: segment,
      variant: actualVariant,
      event: 'view',
      meta: { section: 'testimonials' }
    });
  }, [segment, actualVariant]);

  const handleTestimonialInteraction = (action: string, index?: number) => {
    trackEvent({
      page: window.location.pathname,
      segment: segment,
      variant: actualVariant,
      event: 'cta_click',
      meta: { action, index, section: 'testimonials' }
    });
  };

  // Auto-rotate testimonials for carousel variant
  useEffect(() => {
    if (actualVariant === 'B') {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [actualVariant]);

  // Concept A: Card-based testimonials
  if (actualVariant === 'A') {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white" data-testid="testimonials-section-a">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join 100+ brands that rely on GWC for seamless logistics operations across the GCC
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover-elevate cursor-pointer transition-all duration-300"
                onClick={() => handleTestimonialInteraction('card_click', index)}
                data-testid={`testimonial-card-${index}`}
              >
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-green-600 mb-6 opacity-60" />
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.logo}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Concept B: Carousel with large quotes
  if (actualVariant === 'B') {
    const currentTestimonial = testimonials[currentIndex];
    
    return (
      <section className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-cyan-600 text-white" data-testid="testimonials-section-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What Industry Leaders Say
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Discover how we've transformed logistics for global brands
            </p>
          </div>
          
          <div className="relative">
            <div className="text-center">
              <Quote className="h-16 w-16 text-green-300 mx-auto mb-8 opacity-60" />
              <blockquote 
                className="text-2xl md:text-3xl font-medium leading-relaxed mb-12 min-h-[200px] flex items-center justify-center"
                data-testid={`testimonial-quote-${currentIndex}`}
              >
                "{currentTestimonial.quote}"
              </blockquote>
              
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6">
                  {currentTestimonial.logo}
                </div>
                <div className="text-left">
                  <div className="text-xl font-semibold text-green-100">
                    {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                onClick={() => {
                  const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
                  setCurrentIndex(newIndex);
                  handleTestimonialInteraction('prev_click', newIndex);
                }}
                data-testid="testimonial-prev"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-white' : 'bg-white/40'
                    }`}
                    onClick={() => {
                      setCurrentIndex(index);
                      handleTestimonialInteraction('dot_click', index);
                    }}
                    data-testid={`testimonial-dot-${index}`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                onClick={() => {
                  const newIndex = (currentIndex + 1) % testimonials.length;
                  setCurrentIndex(newIndex);
                  handleTestimonialInteraction('next_click', newIndex);
                }}
                data-testid="testimonial-next"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Concept C: Minimalist grid with prominent logos
  if (actualVariant === 'C') {
    return (
      <section className="py-20 bg-white" data-testid="testimonials-section-c">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powering Success for Global Brands
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-cyan-600 mx-auto mb-8"></div>
          </div>
          
          <div className="space-y-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                data-testid={`testimonial-row-${index}`}
              >
                <div className="flex-1">
                  <div 
                    className="w-32 h-32 bg-gradient-to-br from-green-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white font-bold text-6xl mx-auto lg:mx-0 mb-6 hover-elevate cursor-pointer transition-all duration-300"
                    onClick={() => handleTestimonialInteraction('logo_click', index)}
                    data-testid={`testimonial-logo-${index}`}
                  >
                    {testimonial.logo}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 text-center lg:text-left">
                    {testimonial.company}
                  </h3>
                </div>
                
                <div className="flex-2 max-w-2xl">
                  <Quote className="h-12 w-12 text-green-600 opacity-60 mb-6" />
                  <blockquote className="text-xl text-gray-700 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-8">
              Ready to join these industry leaders?
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-white px-8 py-3"
              onClick={() => { handleTestimonialInteraction('cta_click'); window.location.href = '/quote2'; }}
              data-testid="testimonials-cta"
            >
              Get Your Quote Today
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return null;
}