"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ServicesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full flex justify-center px-4 md:px-8 lg:px-10 mt-8 md:mt-20 lg:mt-28">
      
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
          src="/BG2.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-transparent"></div>
        <div className="relative z-10 w-full flex justify-center">
          <div className="w-[1160px] h-[190px] flex items-center justify-center">
            <Image
              src="/Logo1.webp"
              alt="Logo"
              width={1160}
              height={190}
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
