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
    quote: "كانت مستودعات جي دبليو سي الفعالة وشبكتهم اللوجستية الموثوقة حيوية في الحفاظ على رفوفنا مليئة وعملائنا راضين. مرونتهم والتزامهم بالتميز يجعلهم شريكاً لا يقدر بثمن في رحلة نمونا.",
    company: "Carrefour",
    logo: "C"
  }
];

interface TestimonialsSectionArProps {
  segment: string;
  variant?: 'A' | 'B' | 'C';
}

export function TestimonialsSectionAr({ segment, variant }: TestimonialsSectionArProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const actualVariant = variant || getVariant(segment);

  useEffect(() => {
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

  useEffect(() => {
    if (actualVariant === 'B') {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [actualVariant]);

  if (actualVariant === 'A') {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white" data-testid="testimonials-section-a">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              موثوق به من قبل قادة الصناعة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              انضم إلى أكثر من 100 علامة تجارية تعتمد على جي دبليو سي للعمليات اللوجستية السلسة عبر دول مجلس التعاون الخليجي
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

  if (actualVariant === 'B') {
    const currentTestimonial = testimonials[currentIndex];
    
    return (
      <section className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-cyan-600 text-white" data-testid="testimonials-section-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              ما يقوله قادة الصناعة
            </h2>
            <p className="text-xl opacity-90">
              أصوات موثوقة من شركائنا عبر دول مجلس التعاون الخليجي
            </p>
          </div>
          
          <div className="relative">
            <div className="text-center py-12">
              <Quote className="h-16 w-16 mx-auto mb-8 opacity-60" />
              <blockquote className="text-2xl md:text-3xl leading-relaxed mb-8 font-light">
                "{currentTestimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                  {currentTestimonial.logo}
                </div>
                <div className="text-right">
                  <div className="text-xl font-semibold">{currentTestimonial.company}</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    handleTestimonialInteraction('dot_click', index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-white w-8' : 'bg-white/40'
                  }`}
                  data-testid={`testimonial-dot-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" data-testid="testimonials-section-c">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            قصص النجاح من عملائنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف كيف تحول شراكاتنا الأعمال التجارية عبر المنطقة
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <Quote className="h-12 w-12 text-green-600 mb-6 opacity-40" />
            <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonials[currentIndex].logo}
                </div>
                <div>
                  <div className="font-semibold text-lg text-gray-900">{testimonials[currentIndex].company}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                    handleTestimonialInteraction('prev_click');
                  }}
                  data-testid="testimonial-prev"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
                    handleTestimonialInteraction('next_click');
                  }}
                  data-testid="testimonial-next"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
