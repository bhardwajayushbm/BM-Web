"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function JumpstartSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-14 sm:py-16 md:py-20">
      
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">

        {/* HEADING */}
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
            mt-6 sm:mt-10 md:mt-14
            mb-16 sm:mb-24 md:mb-40
            text-[28px] sm:text-[40px] md:text-[55px] lg:text-[70px]
            leading-[110%] md:leading-[100%]
          "
        >
          US based project oversight <br className="hidden sm:block" />
          provided with every Jumpstart.
        </motion.h1>

        {/* CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="
            w-full
            grid grid-cols-1 md:grid-cols-2
            gap-8 sm:gap-10 md:gap-12
            items-start
          "
        >
          {/* LEFT TEXT */}
          <motion.div variants={fadeUp}>
            <h2 className="
              font-helvetica font-normal text-black
              text-[20px] sm:text-[24px] md:text-[28px]
              leading-[26px] md:leading-[32px] mt-6
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
          </motion.div>
          
          {/* RIGHT VIDEO */}
          <motion.div
            variants={fadeUp}
            className="
              w-full 
              h-[220px] sm:h-[260px] md:h-[300px]
              rounded-lg overflow-hidden
            "
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/RM61M1lrCRY"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}