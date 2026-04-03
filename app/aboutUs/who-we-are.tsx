"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutUsPage() {

  /* ===== ANIMATIONS ===== */
  const sectionVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
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
    <motion.section
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-14 md:py-20 bg-white"
    >
      
      <div className="max-w-[1100px] mx-auto">

        {/* ===== TOP SECTION ===== */}
        <motion.div
          variants={container}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
        >

          {/* TITLE */}
          <motion.h1
            variants={fadeUp}
            className="
              font-helvetica font-normal text-black
              text-[32px] sm:text-[42px] md:text-[56px]
              leading-tight
            "
          >
            Who We Are
          </motion.h1>

          {/* VIDEO */}
          <motion.div
            variants={fadeUp}
            className="
              rounded-[10px] overflow-hidden bg-[#EDEDED]
              w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[483px]
            "
            style={{ aspectRatio: "483 / 87" }}
          >
            <video
              src="/Video1.mp4"
              className="w-full h-full object-cover block"
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>

        </motion.div>

        {/* ===== FIRST PARAGRAPH ===== */}
        <motion.div variants={fadeUp} className="mt-6 w-full">
          <p
            className="
              font-helvetica font-normal text-black
              text-[16px] sm:text-[18px] md:text-[20px]
              leading-[1.5]
              max-w-[1000px]
            "
          >
            BANGMETRIC is a global SaaS and ServiceNow partner built by experts
            who genuinely care about your organization and the success of your
            ServiceNow platform.
          </p>
        </motion.div>

        {/* ===== OTHER PARAGRAPHS ===== */}
        <motion.div
          variants={container}
          className="mt-6 space-y-4"
        >
          <motion.p
            variants={fadeUp}
            className="
              font-helvetica font-normal text-black
              text-[16px] sm:text-[18px] md:text-[20px]
              leading-[1.5]
            "
          >
            We blend business consulting, platform problem-solving, and value
            maximization to help enterprises streamline operations and drive meaningful
            outcomes. Our consultants work as an extension of your team, guiding,
            improving, and elevating your ServiceNow ecosystem with clarity, empathy,
            and real expertise.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="
              font-helvetica font-normal text-black
              text-[16px] sm:text-[18px] md:text-[20px]
              leading-[1.5]
            "
          >
            At our core, we’re people who want your business to run better, smarter,
            and with long-term confidence.
          </motion.p>
        </motion.div>

      </div>
    </motion.section>
  );
}