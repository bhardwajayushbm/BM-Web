'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const logos = [
  // { src: '/L1.png', alt: 'Carpenter Technology' },
  { src: '/ITC-Infotech-Logo.png', alt: 'ITC Infotech' },
  { src: '/Zensar-Logo.png', alt: 'ZenSar Technologies' },
  { src: '/Rsystem-Logo.png', alt: 'R Systems' },
  { src: '/TechMahindra-Logo.png', alt: 'Tech Mahindra' },
  // { src: '/L6.png', alt: 'Cisco Meraki' },
  // { src: '/L7.png', alt: 'Construction Specialties' },
  // { src: '/L8.png', alt: 'TridentCare' },
  { src: '/Teksystems-Logo.png', alt: 'TEKsystems' },
  { src: '/Tsystem-Logo.png', alt: 'Tsystems' },
   { src: '/UST-Technologies-Logo.png', alt: 'UST Technology' },
   { src: '/Hexaware-Logo.png', alt: 'Hexaware' },
  { src: '/L10.png', alt: 'Another Logo' },
];

export function MarqueeSection() {
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="min-h-[50vh] bg-white overflow-hidden flex flex-col justify-center py-10">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-16 items-center py-6"
            animate={{
              x: isPaused ? undefined : [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 group"
                style={{ minWidth: '180px' }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-24 w-auto mx-auto transition-transform duration-300 group-hover:scale-110 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
