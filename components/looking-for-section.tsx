'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  imageUrl: string;
  delay: number;
}

function ServiceCard({ title, imageUrl, delay }: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group cursor-pointer flex-shrink-0"
      style={{ width: '277px', height: '367px' }} 
    >
      <div className="relative w-full h-full overflow-hidden rounded-[10px] shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="277px"
            priority
          />
        </div>

        
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/50 to-[#666666]/0 z-[1]" />

   
        <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 transition-all duration-500 z-[2]" />

        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <h3 className="text-[18px] md:text-[20px] font-semibold text-white leading-tight group-hover:text-purple-200 transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export function LookingForSection() {
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const cards = [
    { title: 'Digital Transformation Partner', imageUrl: '/pic_1.png' },
    { title: 'Elevate Your Customer Experience', imageUrl: '/pic_2.png' },
    { title: 'Innovative and Tailored Workflows', imageUrl: '/pic_3.png' },
    { title: 'Generative AI Solutions', imageUrl: '/pic_4.png' },
    { title: 'Cloud Infrastructure Solutions', imageUrl: '/pic_1.png' },
    { title: 'Data Analytics & Insights', imageUrl: '/pic_2.png' },
    { title: 'Cybersecurity Services', imageUrl: '/pic_3.png' },
    { title: 'Mobile App Development', imageUrl: '/pic_4.png' },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft =
        direction === 'left'
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gray-100 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-[Helvetica] font-bold text-[32px] sm:text-[40px] md:text-[50px] leading-[45px] sm:leading-[55px] md:leading-[65px] text-black mb-6">
            Are you looking for?
          </h2>
        </motion.div>

        {/* Scrollable Cards Section */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cards.map((card, index) => (
              <ServiceCard
                key={index}
                title={card.title}
                imageUrl={card.imageUrl}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Scroll Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all z-10"
              aria-label="Scroll left"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all z-10"
              aria-label="Scroll right"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Case Studies Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center md:justify-start mb-10 sm:mb-12"
        >
          <button
            className="w-[120px] sm:w-[125px] md:w-[131px] h-[30px] bg-[#7E3AF2] hover:bg-[#6D2EEB] text-white 
            font-[Poppins] font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[100%]
            text-center rounded-md transition-all duration-300"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
