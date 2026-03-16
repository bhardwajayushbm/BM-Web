"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function JumpstartSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full flex flex-col items-center px-6 md:px-12 lg:px-20 py-20">
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
    mt-40 mb-40 
    text-center font-helvetica font-bold text-[70px] leading-[100%] text-[#60D94F]
  "
      >
        US based project oversight <br /> provided with every Jumpstart.
      </motion.h1>

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="mt-6 w-full max-w-[1300px] grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
      >
        <div>
          <h2 className="font-helvetica font-normal text-[40px] leading-[44px] text-black">
            BANGMETRIC Jumpstart Offerings
          </h2>


          <p className=" font-helvetica mt-6 text-[12px] md:text-[26px] text-black">
            BANGMETRIC Jumpstart Offerings are focused, fast-track onboarding packages designed to accelerate ServiceNow<br />
            adoption. Specifically designed mid-market and commercial organizations.
          </p>
        </div>

        <div className="w-full h-[260px] md:h-[320px] bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="w-14 h-14 border-2 border-black rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-l-[12px] border-l-black border-y-[8px] border-y-transparent ml-[5px]"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
