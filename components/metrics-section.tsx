'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Globe, Clock } from 'lucide-react';

interface MetricCardProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function MetricCard({ icon, value, suffix, label, delay }: MetricCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full">
          {icon}
        </div>
        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          {count}{suffix}
        </div>
        <p className="text-gray-600 text-lg">{label}</p>
      </div>
    </motion.div>
  );
}

export function MetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600">Delivering excellence across the globe</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <MetricCard
            icon={<TrendingUp className="w-8 h-8 text-blue-600" />}
            value={10}
            suffix="+"
            label="Successful Integrations"
            delay={0.2}
          />
          <MetricCard
            icon={<Users className="w-8 h-8 text-purple-600" />}
            value={200}
            suffix="+"
            label="ServiceNow Certified Employees"
            delay={0.4}
          />
          <MetricCard
            icon={<Globe className="w-8 h-8 text-blue-600" />}
            value={50}
            suffix="+"
            label="Global Clients"
            delay={0.6}
          />
          <MetricCard
            icon={<Clock className="w-8 h-8 text-purple-600" />}
            value={24}
            suffix="/7"
            label="Support Availability"
            delay={0.8}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
          >
            Know More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
