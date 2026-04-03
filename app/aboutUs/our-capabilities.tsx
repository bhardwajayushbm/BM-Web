"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function CapabilitiesPage() {

  /* ===== ANIMATIONS ===== */
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section className="w-full flex justify-center px-4 sm:px-6 md:px-10 py-16 md:py-20">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-[1100px] flex flex-col items-center"
      >

        {/* ===== MAIN SECTION ===== */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">

          {/* ===== IMAGE ===== */}
          <motion.div variants={fadeUp} className="w-full flex justify-center md:justify-start">
            <div className="mt-2 w-full max-w-[420px] md:max-w-[460px] lg:max-w-[500px] h-[300px] sm:h-[360px] md:h-[380px] lg:h-[400px] relative rounded-[6px] overflow-hidden">

              <Image
                src="/Team1.jpg"
                alt="Team"
                fill
                className="object-cover"
              />

            </div>
          </motion.div>

          {/* ===== CONTENT ===== */}
          <motion.div variants={fadeUp} className="w-full md:max-w-[554px]">

            <h2 className="
               font-helvetica font-normal
               text-[32px] sm:text-[36px] md:text-[44px]
               leading-[32px] sm:leading-[42px] md:leading-[50px] lg:leading-[54px]
               text-black
               mb-6 md:mb-10
               text-center md:text-left
            ">
              Our capabilities include
            </h2>

            {/* ===== LIST ===== */}
            <motion.div variants={container} className="flex flex-col gap-4">

              {[
                "End-to-end ServiceNow consulting and advisory",
                "Fast-track onboarding and implementation packages",
                "Expertise across ITSM, ITAM, HRSD, CSM, SPM, and platform extensions",
                "Certified consultants trained through structured L&D programs",
                "Proven delivery frameworks focused on quality, governance, and consistency",
                "The capacity to support multi-region rollouts, ongoing enhancements, and full platform ownership",
              ].map((text, index) => (
                <motion.div key={index} variants={fadeUp} className="flex items-start gap-4 sm:gap-6">

                  {/* ⭐ STAR */}
                  <div className="flex-shrink-0 mt-[4px]">
                    <Image
                      src="/SS.png"
                      alt="star"
                      width={22}
                      height={22}
                      className="object-contain sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[30px]"
                    />
                  </div>

                  {/* TEXT */}
                  <p className="
                    font-helvetica 
                    text-[14px] sm:text-[14px] md:text-[18px] lg:text-[20px]
                    leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px]
                    text-black
                  ">
                    {text}
                  </p>

                </motion.div>
              ))}

            </motion.div>

          </motion.div>
        </div>

        {/* ===== BOTTOM TEXT ===== */}
        <motion.p
          variants={fadeUp}
          className="
            font-helvetica 
            font-normal
            text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px]
            leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px]
            text-black
            mt-16 md:mt-20
            text-center
            max-w-[1100px]
            mx-auto
          "
        >
          With the right blend of strategy, technology, and people, BANGMETRIC helps
          organizations realize the full value of their ServiceNow investment.
        </motion.p>

      </motion.div>
    </section>
  );
}