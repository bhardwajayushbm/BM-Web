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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group cursor-pointer flex-shrink-0"
      style={{ width: '320px' }}
    >
      <div className="relative overflow-hidden rounded-3xl h-[500px] shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
       
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        
     
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-[1]" />
        
     
        <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 transition-all duration-500 z-[2]" />
        
   
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
          <h3 className="text-2xl font-semibold text-white leading-tight group-hover:text-purple-200 transition-colors duration-300">
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const cards = [
    { title: "Digital Transformation Partner", imageUrl: "/pic_1.png" },
    { title: "Elevate Your Customer Experience", imageUrl: "/pic_2.png" },
    { title: "Innovative and Tailored Workflows", imageUrl: "/pic_3.png" },
    { title: "Generative AI solutions", imageUrl: "/pic_4.png" },
    { title: "Cloud Infrastructure Solutions", imageUrl: "/pic_1.png" },
    { title: "Data Analytics & Insights", imageUrl: "/pic_2.png" },
    { title: "Cybersecurity Services", imageUrl: "/pic_3.png" },
    { title: "Mobile App Development", imageUrl: "/pic_4.png" },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
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
    <section ref={ref} className="py-20 bg-gray-100 relative p-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">Are you looking for?</h2>
        </motion.div>

        <div className="relative">
      
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
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

          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all z-10"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
        <div className="mt-8">
          <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-purple-700 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl">
            Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}