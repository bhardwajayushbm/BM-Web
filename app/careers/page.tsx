"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CareersPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="
        w-full flex justify-center 
        px-4 md:px-8 lg:px-10 
        mt-8 md:mt-20 lg:mt-28 
        mb-8 md:mb-16 lg:mb-24
      "
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="
          relative
          w-full
          max-w-[1376px]
          h-[220px] sm:h-[280px] md:h-[340px] lg:h-[404px]
          rounded-[20px]
          overflow-hidden
          flex items-center justify-center
        "
      >
        <Image
          src="/career.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4">
         
          <div className="h-[70px] flex items-center justify-center overflow-hidden">
            <h1
              className="
                font-helvetica 
                font-bold 
                text-[70px] 
                leading-none 
                text-white 
                m-0 p-0
              "
            >
              Careers at BANGMETRIC
            </h1>
          </div>
          <p
            className="
              mt-4
              max-w-[772px]
              font-helvetica
              font-normal
              text-[30px]
              leading-[100%]
              text-white
              text-center
            "
          >
            Join a workplace where leaders empower, listen, and help you become your best self.
          </p>
        </div>
      </motion.div>
    </section>
  );
}