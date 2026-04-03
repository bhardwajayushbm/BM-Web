"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function aboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="
        w-full flex justify-center 
        px-4 md:px-8 lg:px-10 
        mt-28 md:mt-20 lg:mt-28 
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
          flex items-center
        "
      >

        {/* ===== BACKGROUND (ZOOMED) ===== */}
        <Image
          src="/About.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center scale-110"
        />

        {/* ===== TEXT ===== */}
        <div className="relative z-10 w-full flex justify-start px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-start">
            <h1
              className="
                font-helvetica 
                font-bold 
                text-[32px] sm:text-[50px] md:text-[70px] lg:text-[80px]
                leading-[90%] 
                text-black 
                text-left
              "
            >
              About Us
            </h1>
          </div>
        </div>

      </motion.div>
    </section>
  );
}