'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export function Getintouch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center text-center py-20 px-6 bg-white overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="font-[Helvetica] font-bold text-[32px] sm:text-[40px] md:text-[50px] leading-[45px] sm:leading-[55px] md:leading-[65px] text-black mb-6">
          Get In Touch Today!
        </h2>

        <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-[#9562EB] hover:bg-[#8449E6] text-white 
          font-[Helvetica] font-normal text-[22px] leading-[55px]
          w-[365px] h-[46px] rounded-[5px] transition-all duration-300 shadow-md"
        >
          Book a Free Consultation Session
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 100, scale: 0.8 }
        }
        transition={{
          duration: 1,
          delay: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="relative mt-16 flex justify-center w-full"
      >
        <div className="relative z-10 w-full max-w-[1441px] h-[804px]">
          <Image
            src="/laptop.png"
            alt="Laptop mockup"
            width={1441}
            height={804}
            className="w-full h-full object-contain mx-auto drop-shadow-2xl"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={isInView ? { opacity: 0.4, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute bottom-0 w-[70%] h-10 bg-purple-500/30 blur-3xl rounded-full"
        />
      </motion.div>
    </section>
  );
}
