"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Event() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <section
      ref={ref}
      className="w-full flex justify-center py-16 md:py-20"
    >
      <div className="w-full max-w-[1100px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="font-[Helvetica] font-normal text-[28px] sm:text-[40px] md:text-[52px] lg:text-[60px] leading-tight text-black">
            Events & News
          </h1>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="font-[Helvetica] font-normal text-[24px] sm:text-[30px] md:text-[38px] lg:text-[42px] leading-[1.3] text-black mb-4 md:mb-6">
              BANGMETRIC at Servicenow Knowledge 2025
            </h2>

            <p className="font-[Helvetica] text-[16px] sm:text-[18px] md:text-[18px] text-black mb-6 md:mb-8 leading-[1.5] max-w-[500px] mx-auto lg:mx-0">
              Our ServiceNow Jumpstart offerings were met with great enthusiasm
              and buzz at ServiceNow Knowledge 2025
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
                bg-[#9562EB] hover:bg-[#8449E6] text-white
                font-[Helvetica] text-[16px] sm:text-[18px]
                w-[140px] sm:w-[160px] h-[38px] sm:h-[38px]
                rounded-[6px] shadow-md
                transition-all duration-300
                flex items-center justify-center
                mx-auto lg:mx-0
              "
            >
              Read More
            </motion.button>
          </motion.div>
          <div className="flex justify-center lg:justify-end">
            <motion.div
              custom={0}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={imageVariants}
              className="w-full max-w-[520px]"
            >
              <Image
                src="/Event.png"
                alt="Event"
                width={623}
                height={513}
                className="w-full h-auto object-contain rounded-lg drop-shadow-xl"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}