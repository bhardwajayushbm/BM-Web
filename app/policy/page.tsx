"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <section className="w-full flex justify-center px-4 md:px-8 lg:px-10 mt-28 md:mt-20 lg:mt-28 mb-4">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          w-full 
          max-w-[1200px]
          min-h-[140px] md:min-h-[200px] lg:min-h-[360px]
          bg-[#F1EDFF] 
          rounded-[20px] 
          flex items-center justify-between 
          px-6 sm:px-10 md:px-16
          relative z-10   /* ✅ ensures proper stacking */
        "
      >

        <h1
          className="
            font-helvetica 
            font-semibold 
            text-[22px] sm:text-[30px] md:text-[42px] lg:text-[50px]
            text-[#7B5CFF]
          "
        >
          Privacy Policy
        </h1>
        <div className="relative w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[100px] md:h-[100px]">
          <Image
            src="/Policy.png"
            alt="Policy Icon"
            fill
            className="object-contain"
          />
        </div>

      </motion.div>
    </section>
  );
}