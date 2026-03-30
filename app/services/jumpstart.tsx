"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function JumpstartSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-14 sm:py-16 md:py-20">
      
      {/* CENTER CONTAINER */}
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">

        {/* ===== HEADING ===== */}
        <motion.h1
          ref={ref}
          initial={{ y: 200, scale: 0.8 }}
          animate={
            isInView
              ? {
                  y: [200, -20, 10, -5, 0],
                  scale: [0.8, 1.05, 0.95, 1.02, 1],
                }
              : {}
          }
          transition={{
            duration: 1.2,
            ease: "easeOut",
            times: [0, 0.45, 0.7, 0.85, 1],
          }}
          className="
            text-center font-helvetica font-bold text-[#60D94F]
            mt-16 sm:mt-24 md:mt-40
            mb-16 sm:mb-24 md:mb-40
            text-[28px] sm:text-[40px] md:text-[55px] lg:text-[70px]
            leading-[110%] md:leading-[100%]
          "
        >
          US based project oversight <br className="hidden sm:block" />
          provided with every Jumpstart.
        </motion.h1>

        {/* ===== CONTENT ===== */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="
            w-full
            grid grid-cols-1 md:grid-cols-2
            gap-8 sm:gap-10 md:gap-12
            items-start
          "
        >
          {/* LEFT */}
          <div>
            <h2 className="
              font-helvetica font-normal text-black
              text-[20px] sm:text-[24px] md:text-[28px]
              leading-[26px] md:leading-[32px]
            ">
              BANGMETRIC Jumpstart Offerings
            </h2>

            <p className="
              font-helvetica text-black mt-4
              text-[14px] sm:text-[15px] md:text-[16px]
              leading-[20px] md:leading-[22px]
              max-w-[420px]
            ">
              Curious how to get started with ServiceNow without overcomplicating it? <br />
              Watch our SVP of Sales break down how our Jumpstart Offerings help organizations move faster with focused, outcome-driven implementations.
            </p>
          </div>

          {/* RIGHT (VIDEO BOX) */}
          <div className="
            w-full 
            h-[200px] sm:h-[240px] md:h-[260px]
            bg-gray-300 rounded-lg 
            flex items-center justify-center
          ">
            <div className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-black rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[10px] sm:border-l-[12px] border-l-black border-y-[7px] sm:border-y-[8px] border-y-transparent ml-[4px] sm:ml-[5px]" />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}