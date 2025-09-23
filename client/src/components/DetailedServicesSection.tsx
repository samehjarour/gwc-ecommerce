import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Package, 
  Zap, 
  Truck, 
  Plane, 
  ArrowRightLeft, 
  FileCheck, 
  Gift 
} from "lucide-react";
import warehouseImage from "@assets/DJI_0432-HDR_1758598111840.jpg";

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

function ServiceItem({ icon, title, description, delay = 0 }: ServiceItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      data-testid={`service-item-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex items-start gap-4 p-6 bg-card rounded-lg hover-elevate transition-all duration-300">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function DetailedServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Storage & Inventory",
      description: "Secure storage (ambient, chilled, frozen, pharma-compliant) with real-time inventory management."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Seamless Handling",
      description: "Inbound receiving, order picking/packing, labeling, dispatch, and returns management."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Last Mile Delivery",
      description: "Same-day/next-day for parcels from small to oversized."
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "First Mile",
      description: "Domestic & international supplier pickups, vendor consolidation, and freight forwarding with temperature-controlled options."
    },
    {
      icon: <ArrowRightLeft className="w-6 h-6" />,
      title: "Middle Mile",
      description: "Optimized transfers between GWC warehouses, hubs, and retail outlets, including reverse logistics."
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Customs Clearance",
      description: "Import/export documentation, bonded trucking & inspection coordination."
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Value-Added Services",
      description: "Kitting, bundling, branded packaging, relabeling, inserts, gift wrapping, light assembly, etc."
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-muted/20" data-testid="section-detailed-services">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={warehouseImage} 
                alt="GWC Logistics Warehouse with Fleet" 
                className="w-full h-[600px] object-cover"
                data-testid="img-warehouse"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Services Content */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-detailed-services-title">
                Comprehensive Logistics Services
              </h2>
              <p className="text-xl text-muted-foreground">
                End-to-end solutions covering every aspect of your supply chain needs
              </p>
            </div>

            <div className="space-y-6">
              {services.map((service, index) => (
                <ServiceItem
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}