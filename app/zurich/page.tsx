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
            h-[280px] sm:h-[340px] md:h-[420px] lg:h-[480px]
            rounded-[20px]
            overflow-hidden
            flex items-center justify-center
          "
        >
          <Image
            src="/zurich.png"
            alt="Resources Background"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </section>
    </>
  );
}