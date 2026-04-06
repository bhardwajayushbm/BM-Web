"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CareersPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full bg-white flex justify-center py-14 sm:py-16 md:py-20 lg:py-24">
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[900px] flex flex-col items-center text-center px-4 sm:px-6"
      >

        <div className="mt-4 sm:mt-6 md:mt-8 mb-1 md:mb-2">
          <Image
            src="/Careers.png"
            alt="Careers"
            width={260}
            height={260}
            className="
              object-contain
              w-[140px] sm:w-[180px] md:w-[220px] lg:w-[240px]
              h-auto
            "
            priority
          />
        </div>

        <h1
          className="
            font-helvetica
            font-normal
            text-[22px] sm:text-[44px] md:text-[50px] lg:text-[60px]
            text-black
            leading-tight
          "
        >
          Careers at BANGMETRIC
        </h1>

        <p
          className="
            mt-2 sm:mt-3 md:mt-4
            max-w-[90%] sm:max-w-[600px] md:max-w-[620px]
            font-helvetica
            font-normal
            text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px]
            text-black/80
            leading-[1.4]
          "
        >
          Join a workplace where leaders empower, listen, and help you become your best self.
        </p>

      </motion.div>
    </section>
  );
}