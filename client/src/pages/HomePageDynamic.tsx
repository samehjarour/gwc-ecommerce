import { ArrowRight, ChevronDown, Package, Truck, Globe2, Users, BarChart3, Zap, Clock, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { trackEvent, trackScrollDepth } from "@/lib/analytics";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function HomePageDynamic() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scrollDepthTracked = useRef(new Set<number>());
  const scrollYRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  // Stable floating elements - only generated once
  const floatingElements = useMemo(() => 
    Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
      x: Math.random() * 100,
      y: Math.random() * 100,
    })), []);

  // Optimized animation loop with rAF
  const updateParallax = useCallback(() => {
    setScrollY(scrollYRef.current);
    setMousePosition(mouseRef.current);
    rafId.current = requestAnimationFrame(updateParallax);
  }, []);

  // Optimized scroll tracking with throttling
  const handleScroll = useCallback(() => {
    scrollYRef.current = window.scrollY;
    const scrollPercentage = Math.round(
      (scrollYRef.current / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    // Track scroll depth milestones with page parameter
    [25, 50, 75, 100].forEach(milestone => {
      if (scrollPercentage >= milestone && !scrollDepthTracked.current.has(milestone)) {
        scrollDepthTracked.current.add(milestone);
        trackEvent({
          page: window.location.pathname,
          segment: 'home_dynamic',
          variant: 'A',
          event: 'scroll_depth',
          meta: { depth: milestone }
        });
      }
    });
  }, []);

  // Mouse tracking for dynamic elements
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  // Optimized event listeners with rAF animation loop
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Start animation loop
    rafId.current = requestAnimationFrame(updateParallax);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll, handleMouseMove, updateParallax]);

  const handleCTAClick = (action: string) => {
    trackEvent({
      page: window.location.pathname,
      segment: 'home_dynamic',
      variant: 'A',
      event: 'cta_click',
      meta: { action, section: 'hero' }
    });
  };

  useEffect(() => {
    // Set page title and meta description
    document.title = "GWC Logistics - Dynamic Fulfillment Solutions | Maximum Innovation";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Experience next-generation e-commerce fulfillment with GWC\'s dynamic, parallax-powered platform. Delivering logistics innovation across the GCC and MENA regions.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Experience next-generation e-commerce fulfillment with GWC\'s dynamic, parallax-powered platform. Delivering logistics innovation across the GCC and MENA regions.';
      document.head.appendChild(meta);
    }

    // Track page view
    trackEvent({
      page: window.location.pathname,
      segment: 'home_dynamic',
      variant: 'A',
      event: 'view'
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Dynamic Gradient Hero with Maximum Parallax */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Animated Gradient Background */}
        <div 
          className="absolute inset-0 opacity-100 transition-all duration-1000"
          style={{
            background: `linear-gradient(135deg, 
              hsl(140, 100%, 35%) 0%, 
              hsl(165, 100%, 40%) 25%, 
              hsl(180, 85%, 45%) 50%, 
              hsl(195, 90%, 50%) 75%, 
              hsl(210, 100%, 55%) 100%)`,
            transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0005})`,
          }}
        />

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingElements.map((element) => (
            <div
              key={element.id}
              className="absolute opacity-10 rounded-full bg-white/20 animate-pulse"
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
                width: `${element.size}px`,
                height: `${element.size}px`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`,
                transform: `translate(${(mousePosition.x - 960) * 0.05}px, ${(mousePosition.y - 540) * 0.05}px) translateY(${scrollY * 0.3}px)`,
              }}
            />
          ))}
        </div>

        {/* Parallax Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />

        {/* Hero Content with Parallax */}
        <div 
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          {/* Animated Badge */}
          <div 
            className="hover:scale-105 transition-transform duration-300"
            style={{
              transform: `translateX(${(mousePosition.x - 960) * 0.02}px)`,
            }}
          >
            <div 
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white/95 text-sm font-semibold mb-8 transition-all duration-300"
              data-testid="text-hero-badge"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
              رُوّاد الإبداع اللوجستي • Delivering _Logistics_ Innovation
            </div>
          </div>

          {/* Main Headline with Parallax Typography */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight tracking-tight"
            data-testid="text-hero-title"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            Multichannel eCommerce{' '}
            <span 
              className="italic bg-gradient-to-r from-green-200 to-cyan-200 bg-clip-text text-transparent"
              style={{
                transform: `scale(${1 + Math.sin(Date.now() / 2000) * 0.02})`,
              }}
            >
              Fulfillment
            </span>
            <br />
            Made{' '}
            <span className="italic text-cyan-200">Simple</span>
          </h1>

          {/* Subtitle with Dynamic Movement */}
          <p 
            className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            data-testid="text-hero-subtitle"
            style={{
              transform: `translateX(${(mousePosition.x - 960) * 0.01}px) translateY(${scrollY * 0.08}px)`,
            }}
          >
            GWC is a MENA-based logistics powerhouse <strong>trusted by 100+ brands</strong> to deliver 
            exceptional e-commerce fulfillment across the Middle East and beyond. Experience next-generation 
            logistics with our strategic European partnership through Quivo.
          </p>

          {/* CTA Buttons with Hover Parallax */}
          <div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            style={{
              transform: `translateY(${scrollY * 0.03}px)`,
            }}
          >
            <div className="hover:scale-105 transition-transform duration-300">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-white/95 font-semibold px-8 py-6 text-lg group shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
                data-testid="button-get-quote"
                onClick={() => handleCTAClick('get_quote')}
              >
                Get Fulfillment Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="hover:scale-105 transition-transform duration-300">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-xl font-semibold px-8 py-6 text-lg transition-all duration-300"
                data-testid="button-watch-demo"
                onClick={() => handleCTAClick('watch_demo')}
              >
                <Package className="mr-2 h-5 w-5" />
                Watch Process Demo
              </Button>
            </div>
          </div>

          {/* Scroll Indicator with Animation */}
          <div 
            className="mt-20 flex flex-col items-center animate-bounce"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
              opacity: Math.max(0, 1 - scrollY / 400),
            }}
          >
            <span className="text-white/70 text-sm mb-2">Discover More</span>
            <ChevronDown className="h-6 w-6 text-white/70" />
          </div>
        </div>
      </section>

      {/* Social Proof with Parallax Logo Carousel */}
      <section 
        className="relative py-24 bg-white overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12" data-testid="text-social-proof-title">
            Trusted by Leading Brands _Worldwide_
          </h2>
          
          {/* Animated logo carousel with parallax */}
          <div className="flex justify-center items-center space-x-12 opacity-60 hover:opacity-80 transition-opacity duration-500">
            {['Sony', 'IKEA', 'Zara', 'Adidas', 'H&M'].map((brand, index) => (
              <div 
                key={brand}
                className="text-3xl font-bold text-gray-400 hover:text-gray-600 transition-all duration-300"
                style={{
                  transform: `translateY(${Math.sin((scrollY + index * 100) / 200) * 10}px) scale(${1 + Math.sin((scrollY + index * 150) / 300) * 0.1})`,
                }}
                data-testid={`logo-${brand.toLowerCase()}`}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section with Deep Parallax */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        {/* Parallax Background Shapes */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-20 left-10 w-64 h-64 bg-green-200/30 rounded-full blur-3xl"
            style={{
              transform: `translateX(${scrollY * 0.3}px) translateY(${scrollY * -0.2}px) rotate(${scrollY * 0.1}deg)`,
            }}
          />
          <div 
            className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl"
            style={{
              transform: `translateX(${scrollY * -0.2}px) translateY(${scrollY * 0.3}px) rotate(${scrollY * -0.1}deg)`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-700 text-sm font-semibold mb-6"
              data-testid="text-solutions-badge"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
              }}
            >
              Solutions _Designed_ For You
            </div>
            <h2 
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
              data-testid="text-solutions-title"
              style={{
                transform: `translateY(${scrollY * 0.03}px)`,
              }}
            >
              E-commerce Fulfillment Powered by{' '}
              <span className="italic text-green-600">Innovation</span>
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{
                transform: `translateY(${scrollY * 0.02}px)`,
              }}
            >
              Advanced fulfillment technologies and platforms engineered for your business requirements 
              through our strategic alliance with <strong>Quivo</strong>.
            </p>
          </div>

          {/* Three Solutions with Staggered Parallax */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Package className="h-8 w-8" />,
                title: "Robotic Fulfillment",
                description: "Automated warehouse operations with 99.9% accuracy rate and 3x productivity over manual operations.",
                delay: 0
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "All-in-One Platform",
                description: "Integrate, monitor, scale and track your eCommerce operations seamlessly with real-time visibility.",
                delay: 100
              },
              {
                icon: <Truck className="h-8 w-8" />,
                title: "Same-Day Delivery",
                description: "Flexible delivery solutions nationwide with same-day and next-day delivery options.",
                delay: 200
              }
            ].map((solution, index) => (
              <div
                key={index}
                className="hover:scale-105 transition-transform duration-500"
                style={{
                  transform: `translateY(${scrollY * (0.05 + index * 0.02)}px) translateX(${Math.sin((scrollY + solution.delay) / 400) * 5}px)`,
                }}
              >
                <div 
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  data-testid={`card-solution-${index}`}
                >
                <div className="text-green-600 mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Dynamic Counters */}
      <section 
        className="relative py-32 bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      >
        {/* Animated Background Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0l100 100M0 100L100 0' stroke='%23ffffff' stroke-width='1' stroke-opacity='0.1'/%3E%3C/svg%3E")`,
            transform: `translateX(${scrollY * 0.1}px) rotate(${scrollY * 0.02}deg)`,
          }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "100+", label: "Trusted Brands", icon: <Users className="h-8 w-8 mx-auto mb-4 text-green-200" /> },
              { number: "99.9%", label: "Order Accuracy", icon: <Target className="h-8 w-8 mx-auto mb-4 text-cyan-200" /> },
              { number: "12k", label: "Daily Capacity", icon: <Zap className="h-8 w-8 mx-auto mb-4 text-teal-200" /> },
              { number: "24hr", label: "Setup Time", icon: <Clock className="h-8 w-8 mx-auto mb-4 text-blue-200" /> }
            ].map((stat, index) => (
              <div 
                key={index}
                className="transform hover:scale-110 transition-all duration-300"
                data-testid={`stat-${index}`}
                style={{
                  transform: `translateY(${Math.sin((scrollY + index * 200) / 300) * 10}px) scale(${1 + Math.sin((scrollY + index * 150) / 400) * 0.05})`,
                }}
              >
                <div style={{ transform: `translateY(${scrollY * 0.02}px)` }}>
                  {stat.icon}
                </div>
                <div 
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{
                    transform: `translateY(${scrollY * 0.03}px)`,
                  }}
                >
                  {stat.number}
                </div>
                <div 
                  className="text-white/90 font-medium"
                  style={{
                    transform: `translateY(${scrollY * 0.01}px)`,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works with Floating Steps */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-green-100 to-cyan-100 opacity-30"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                left: `${10 + i * 15}%`,
                top: `${10 + i * 10}%`,
                transform: `translateY(${scrollY * (0.1 + i * 0.05)}px) rotate(${scrollY * (0.05 + i * 0.02)}deg)`,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
              data-testid="text-how-it-works-title"
              style={{
                transform: `translateY(${scrollY * 0.02}px)`,
              }}
            >
              Simplify Your _Fulfillment_ with GWC
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{
                transform: `translateY(${scrollY * 0.01}px)`,
              }}
            >
              Our platform is simple, intuitive, and powerful. Integrate your online store and start scaling.
            </p>
          </div>

          {/* Steps with Dynamic Positioning */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "1", title: "SIGNUP", desc: "Quick integration within 24 hours", icon: <Users className="h-6 w-6" /> },
              { number: "2", title: "STORE", desc: "Temperature-controlled warehouse", icon: <Package className="h-6 w-6" /> },
              { number: "3", title: "PICK & PACK", desc: "Automated fulfillment process", icon: <Zap className="h-6 w-6" /> },
              { number: "4", title: "DELIVER", desc: "Multiple delivery options", icon: <Truck className="h-6 w-6" /> }
            ].map((step, index) => (
              <div 
                key={index}
                className="text-center group"
                data-testid={`step-${index}`}
                style={{
                  transform: `translateY(${scrollY * (0.03 + index * 0.01)}px) translateX(${Math.sin((scrollY + index * 300) / 600) * 10}px) scale(${1 + (mousePosition.x > 0 ? Math.sin((scrollY + index * 200) / 400) * 0.02 : 0)})`,
                }}
              >
                <div 
                  className="w-20 h-20 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300"
                  style={{
                    transform: `rotate(${scrollY * 0.1}deg) scale(${1 + Math.sin((scrollY + index * 200) / 400) * 0.1})`,
                  }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Concept B */}
      <TestimonialsSection variant="B" />

      {/* Final CTA with Mega Parallax */}
      <section className="relative py-32 overflow-hidden">
        {/* Dynamic Background Layers */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900 to-cyan-900"
          style={{
            transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0002})`,
          }}
        />
        
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 30}%`,
                transform: `translateY(${scrollY * (0.2 + i * 0.1)}px) rotate(${scrollY * (0.1 + i * 0.05)}deg)`,
              }}
            >
              <div className={`w-${4 + i % 3} h-${4 + i % 3} bg-white/10 ${i % 2 ? 'rounded-full' : 'rounded-lg'} backdrop-blur-sm`} />
            </div>
          ))}
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h2 
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            data-testid="text-final-cta-title"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            }}
          >
            Don't Wait Any Longer,{' '}
            <span className="italic bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent">
              Transform
            </span>{' '}
            Your Fulfillment Today
          </h2>
          
          <p 
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{
              transform: `translateY(${scrollY * 0.03}px)`,
            }}
          >
            Join 100+ brands that trust GWC for their logistics success. Start your fulfillment transformation now.
          </p>

          <div 
            className="hover:scale-110 transition-transform duration-500"
            style={{
              transform: `translateY(${scrollY * 0.02}px) scale(${1 + Math.sin(scrollY / 400) * 0.02})`,
            }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-bold px-12 py-6 text-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-500"
              data-testid="button-final-cta"
              onClick={() => handleCTAClick('get_started')}
            >
              Get Fulfillment Rates Now
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}