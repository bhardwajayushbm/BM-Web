"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CapabilityPage() {

  /* ===== ANIMATION VARIANTS ===== */
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
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
    <section className="w-full bg-white flex justify-center px-6 md:px-10 py-20">

      {/* MAIN CONTAINER */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-[1100px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10"
      >

        {/* ===== LEFT CONTENT ===== */}
        <div className="w-full md:max-w-[520px]">

          {/* HEADING */}
          <motion.h1
            variants={fadeUp}
            className="
              font-helvetica 
              font-normal 
              text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px]
              text-black
              leading-tight
            "
          >
            Capability & Capacity
          </motion.h1>

          {/* PARAGRAPH */}
          <motion.p
            variants={fadeUp}
            className="
              mt-5
              font-helvetica 
              font-normal 
              text-[18px] md:text-[20px] 
              leading-[22px] md:leading-[24px] 
              text-black
              max-w-[420px]
            "
          >
            We combine deep ServiceNow expertise with scalable delivery strength
            to support organizations at every stage of their digital transformation.
          </motion.p>

        </div>

        {/* ===== RIGHT VIDEO ===== */}
        <motion.div
          variants={fadeUp}
          className="w-full md:w-auto flex justify-center md:justify-end"
        >
          <div className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] overflow-hidden bg-white">

            <video
              src="/video2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-contain"
            />

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}