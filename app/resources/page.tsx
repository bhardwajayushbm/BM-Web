"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ResourcesPage() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section
        className="
          w-full flex justify-center 
          px-4 md:px-8 lg:px-10 
          mt-8 md:mt-20 lg:mt-28 
          mb-8 md:mb-16
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
            src="/Resources.png"
            alt="Resources Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="relative z-10 w-full flex items-center justify-center text-center px-4">
            <h1
              className="
                font-helvetica font-bold text-white
                text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[70px]
                leading-tight
                lg:whitespace-nowrap
              "
            >
              Resources
            </h1>
          </div>
        </motion.div>
      </section>
      <section className="w-full flex justify-center mb-16 md:mb-24">
        <h2
          className="
            font-helvetica font-normal text-black text-center
            text-[36px] sm:text-[36px] md:text-[36px] lg:text-[36px] xl:text-[60px]
            leading-none
          "
        >
          News &amp; Events
        </h2>
      </section>
    </>
  );
}