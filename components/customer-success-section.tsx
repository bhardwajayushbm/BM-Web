'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface CaseStudyCardProps {
  title: string;
  description: string;
  delay: number;
  offsetY: string;
}

function CaseStudyCard({ title, description, delay, offsetY }: CaseStudyCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`${offsetY}`}
    >
      <div className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 rounded-3xl">
        <div className="relative h-[420px] overflow-hidden">
        
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />

        
          <Image
            src="/pic_5.png"
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            priority
          />

   
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
            <h3 className="text-3xl font-bold text-white mb-3 leading-tight">{title}</h3>
            <p className="text-gray-200 text-base mb-6 leading-relaxed">{description}</p>
            <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
              Read More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CustomerSuccessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white p-10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Customer Success in Action
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
            Discover how leading organizations across industries are transforming with our{' '}
            <span className="text-green-600 font-semibold">ServiceNow</span> expertise.
          </p>
          <p className="text-lg text-gray-600 mt-3 max-w-3xl leading-relaxed">
            From optimizing workflows to elevating digital experiences, our client stories reflect
            real-world impact, proven results, and lasting value.
          </p>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-12"
        >
          <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-10 py-4 rounded-2xl text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Case Studies
          </button>
        </motion.div>

       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-12">
          <CaseStudyCard
            title="Sony Interactive Entertainment"
            description="Sony Interactive Entertainment Streamlines HR with ServiceNow HRSD"
            delay={0.2}
            offsetY="md:mt-0"
          />
          <CaseStudyCard
            title="Sony Interactive Entertainment"
            description="Sony Interactive Entertainment Streamlines HR with ServiceNow HRSD"
            delay={0.4}
            offsetY="md:mt-16"
          />
          <CaseStudyCard
            title="Sony Interactive Entertainment"
            description="Sony Interactive Entertainment Streamlines HR with ServiceNow HRSD"
            delay={0.6}
            offsetY="md:mt-32"
          />
        </div>
      </div>
    </section>
  );
}
