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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay }}
      className={`${offsetY} flex justify-center`}
    >
      <div className="group relative w-[340px] sm:w-[360px] md:w-[380px] h-[280px] md:h-[300px] rounded-[10px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
        <Image
          src="/pic_5.png"
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-[#000000]/[0.36]" />

        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <h3 className="text-[18px] md:text-[20px] font-semibold text-white leading-tight mb-2">
            {title}
          </h3>
          <p className="text-sm md:text-[15px] text-gray-200 mb-4">
            {description}
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
          >
            <button
              className="w-[110px] sm:w-[120px] md:w-[131px] h-[28px] sm:h-[30px] bg-[#7E3AF2] hover:bg-[#6D2EEB] text-white 
              font-[Poppins] font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[100%] 
              text-center rounded-md transition-all duration-300"
            >
              Read More
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function CustomerSuccessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center md:text-left"
        >
          <h2 className="font-[Helvetica] font-bold text-[32px] sm:text-[40px] md:text-[50px] leading-[45px] sm:leading-[55px] md:leading-[65px] text-black mb-6">
            Customer Success in Action
          </h2>

          <p className="font-[Helvetica] font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[150%] text-black max-w-3xl mx-auto md:mx-0">
            Discover how leading organizations across industries are transforming with our{' '}
            <span className="font-[Helvetica] font-bold text-[#62CE30]">
              ServiceNow
            </span>{' '}
            expertise.
          </p>
          <p className="font-[Helvetica] font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[150%] text-black max-w-3xl mx-auto md:mx-0">
            From optimizing workflows to elevating digital experiences, our client stories reflect
            real-world impact, proven results, and lasting value.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center md:justify-start mb-12"
        >
          <button
            className="w-[131px] h-[30px] bg-[#7E3AF2] hover:bg-[#6D2EEB] text-white 
            font-[Poppins] font-normal text-[20px] leading-[100%]
            text-center rounded-md transition-all duration-300"
          >
            Case Studies
          </button>
        </motion.div>


        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center md:[direction:rtl]"
        >
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
            offsetY="md:mt-8"
          />
          <CaseStudyCard
            title="Sony Interactive Entertainment"
            description="Sony Interactive Entertainment Streamlines HR with ServiceNow HRSD"
            delay={0.6}
            offsetY="md:mt-16"
          />
        </motion.div>
      </div>
    </section>
  );
}
