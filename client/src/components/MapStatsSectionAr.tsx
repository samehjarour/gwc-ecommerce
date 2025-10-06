import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function MapStatsSectionAr() {
  const [animatedStats, setAnimatedStats] = useState({
    clients: 0,
    warehouses: 0,
    employees: 0,
  });

  useEffect(() => {
    const animateValue = (start: number, end: number, duration: number, key: 'clients' | 'warehouses' | 'employees') => {
      const startTime = Date.now();
      const updateValue = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        setAnimatedStats(prev => ({ ...prev, [key]: current }));
        if (progress < 1) {
          requestAnimationFrame(updateValue);
        }
      };
      requestAnimationFrame(updateValue);
    };

    animateValue(0, 1450, 2000, 'clients');
    animateValue(0, 10, 2000, 'warehouses');
    animateValue(0, 600, 2000, 'employees');
  }, []);

  // Pixel dots for map background
  const mapDots = Array.from({ length: 180 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    isHighlight: Math.random() > 0.92,
    color: Math.random() > 0.5 ? 'bg-blue-500' : 'bg-emerald-500',
  }));

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Map Background with Animated Pixels */}
        <div className="absolute inset-0 opacity-30">
          {mapDots.map((dot) => (
            <motion.div
              key={dot.id}
              className={`absolute w-1 h-1 ${dot.isHighlight ? dot.color : 'bg-gray-700'}`}
              style={{
                left: `${dot.x}%`,
                top: `${dot.y}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: dot.isHighlight ? [0.4, 1, 0.4] : 0.3, scale: 1 }}
              transition={{
                duration: dot.isHighlight ? 2 : 0,
                repeat: dot.isHighlight ? Infinity : 0,
                delay: dot.delay,
              }}
            />
          ))}
        </div>

        {/* Stats Display */}
        <div className="grid md:grid-cols-3 gap-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="stat-clients"
          >
            <div className="text-6xl md:text-7xl font-bold mb-2">
              +{animatedStats.clients}
            </div>
            <div className="text-lg uppercase tracking-wider">عميل دولي</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            data-testid="stat-warehouses"
          >
            <div className="text-6xl md:text-7xl font-bold mb-2">
              {animatedStats.warehouses}
            </div>
            <div className="text-lg uppercase tracking-wider">مستودعات حول العالم</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            data-testid="stat-employees"
          >
            <div className="text-6xl md:text-7xl font-bold mb-2">
              {animatedStats.employees}+
            </div>
            <div className="text-lg uppercase tracking-wider">موظف</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
