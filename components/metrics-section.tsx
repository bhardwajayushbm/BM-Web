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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center"
    >
      <div className="text-5xl sm:text-6xl md:text-7xl font-normal text-black mb-2 min-w-[140px] sm:min-w-[180px] md:min-w-[200px] flex items-end justify-center h-[60px] sm:h-[70px] md:h-[100px] leading-none">
        <span>{count}</span>
        <span className="ml-1 text-4xl sm:text-5xl md:text-6xl">
          {suffix}
        </span>
      </div>

      <p className="text-sm sm:text-base md:text-lg text-black font-medium leading-tight">
        {label}
      </p>
    </motion.div>
  );
}

export function MetricsSection() {
  const sectionRef = useRef(null);

  // 👇 detect when section enters screen
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px", // trigger slightly earlier
  });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        w-full 
        bg-white 
        pt-8 sm:pt-4 md:pt-4
        pb-6 sm:pb-8 md:pb-12
        flex justify-center items-center
        overflow-x-hidden
      "
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-9 items-center text-center gap-4 sm:gap-6 md:gap-0">

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
    </motion.section>
  );
}