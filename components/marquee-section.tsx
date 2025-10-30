'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const logos = [
  { name: 'Carpenter Technology', color: 'text-red-600' },
  { name: 'ITC Infotech', color: 'text-purple-600' },
  { name: 'ZenSar Technologies', color: 'text-blue-600' },
  { name: 'R Systems', color: 'text-blue-500' },
  { name: 'Tech Mahindra', color: 'text-red-500' },
  { name: 'Cisco Meraki', color: 'text-green-600' },
  { name: 'Construction Specialties', color: 'text-red-600' },
  { name: 'TridentCare', color: 'text-blue-700' },
  { name: 'TEKsystems', color: 'text-blue-600' },
];

export function MarqueeSection() {
  const [isPaused, setIsPaused] = useState(false);
  
  // Triple the logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="min-h-screen bg-white overflow-hidden flex flex-col justify-center py-16">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Valued Partnerships over the Year
        </h2>
      </div>

      <div className="relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div 
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-12 items-center py-8"
            animate={{
              x: isPaused ? undefined : [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 group"
                style={{ minWidth: '180px' }}
              >
                <div className={`text-2xl font-bold ${logo.color} transition-all duration-300 group-hover:scale-110 text-center whitespace-nowrap px-4`}>
                  {logo.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}