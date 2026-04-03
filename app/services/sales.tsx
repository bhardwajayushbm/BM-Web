"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Sales() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  /* ===== ANIMATIONS ===== */
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageAnim = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full flex justify-center px-4 md:px-8 lg:px-10 mt-6 md:mt-10 pt-10 md:pt-24 mb-10">
      
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="relative w-full max-w-[1100px]"
      >

        {/* ================= MOBILE ================= */}
        <div className="md:hidden flex flex-col items-center">

          {/* IMAGE (TOP) */}
          <motion.div
            variants={imageAnim}
            className="w-[180px] h-[260px] relative"
          >
            <Image
              src="/Sales.png"
              alt="sales"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* BACKGROUND CARD */}
          <div className="relative w-full rounded-[12px] overflow-hidden text-center py-6 mt-4">

            {/* BACKGROUND */}
            <div className="absolute inset-0 -z-10">
              <Image
                src="/BG3.png"
                alt="bg"
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT */}
            <motion.div
              variants={container}
              className="text-white font-helvetica px-4"
            >
              <motion.h2
                variants={fadeUp}
                className="text-[20px] leading-[26px]"
              >
                Arthur Yeames
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-1 text-[18px] leading-[24px]"
              >
                SVP, Sales, North America
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-2 text-[14px] opacity-90"
              >
                Email: artyeames@bangmetric.com
              </motion.p>
            </motion.div>

          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block">
          <div className="relative w-full max-w-[1100px] h-[320px] rounded-[12px]">

            {/* BACKGROUND */}
            <div className="absolute inset-0 rounded-[12px] overflow-hidden">
              <Image
                src="/BG3.png"
                alt="bg"
                fill
                className="object-cover"
              />
            </div>

            {/* IMAGE */}
            <motion.div
              variants={imageAnim}
              className="
                absolute
                left-[20px] md:left-[30px]
                bottom-0
                w-[180px] md:w-[340px]
                h-[460px]
                z-20
                flex items-end
              "
            >
              <Image
                src="/Sales.png"
                alt="sales"
                width={240}
                height={460}
                className="object-contain w-full h-auto"
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              variants={container}
              className="
                absolute inset-0
                flex flex-col justify-center items-center
                text-center text-white font-helvetica
                px-4 md:pl-[260px]
              "
            >
              <motion.h2
                variants={fadeUp}
                className="text-[20px] md:text-[42px] leading-[26px] md:leading-[54px]"
              >
                Arthur Yeames
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-1 text-[18px] md:text-[42px] leading-[24px] md:leading-[54px]"
              >
                SVP, Sales, North America
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-2 text-[13px] md:text-[20px] opacity-90"
              >
                Email: artyeames@bangmetric.com
              </motion.p>
            </motion.div>

          </div>
        </div>

      </motion.div>
    </section>
  );
}