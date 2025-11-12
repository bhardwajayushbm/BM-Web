'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface MetricCardProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function MetricCard({ value, suffix, label, delay }: MetricCardProps) {
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center"
    >
      <div className="text-6xl md:text-7xl font-bold text-black mb-4">
        {count}
        {suffix}
      </div>
      <p className="text-lg text-black font-medium leading-tight">{label}</p>
    </motion.div>
  );
}

export function MetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-white flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-9 items-center text-center gap-10 md:gap-0">
          <MetricCard value={8} suffix="+" label="Years in Business" delay={0.2} />
          <div className="hidden md:block h-16 w-px bg-gray-300 mx-auto" />
          <MetricCard value={250} suffix="+" label="Certified Resources" delay={0.4} />
          <div className="hidden md:block h-16 w-px bg-gray-300 mx-auto" />
          <MetricCard value={3} suffix="+" label="Global Delivery Centers" delay={0.6} />
          <div className="hidden md:block h-16 w-px bg-gray-300 mx-auto" />
          <MetricCard value={300} suffix="+" label="Project Implementation" delay={0.8} />
          <div className="hidden md:block h-16 w-px bg-gray-300 mx-auto" />
          <MetricCard value={350} suffix="+" label="Integrations Completed" delay={1.0} />
        </div>
      </div>
    </section>
  );
}
