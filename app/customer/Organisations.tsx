"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Organizations() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-[82px] py-16 md:py-24"
    >
      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20">

        {/* 🔷 LEFT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="w-full max-w-[520px]"
        >

          {/* TITLE */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="font-helvetica font-normal text-[26px] sm:text-[30px] md:text-[36px] lg:text-[38px] leading-[1.2] text-black"
          >
            Why Organizations Choose BANGMETRIC
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="font-helvetica font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[1.5] text-black mt-4"
          >
            They’re not looking for another implementation partner.
            They’re looking for a thinking partner
          </motion.p>

          {/* 🔷 TIMELINE */}
          <div className="relative mt-8">

            <div className="flex flex-col gap-6 relative z-10">

              {[
                "End-to-end ownership from strategy to execution",
                "Deep expertise in ServiceNow CSM",
                "Strong capabilities in AI, analytics, and workflow optimization",
                "A relentless focus on outcomes customers actually feel",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4"
                >

                  {/* ✅ IMAGE DOT */}
                  <div className="relative w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] shrink-0">
                    <Image
                      src="/SS.png"
                      alt="icon"
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* TEXT */}
                  <p className="font-helvetica font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] text-black">
                    {text}
                  </p>

                </motion.div>
              ))}

            </div>
          </div>

        </motion.div>

        {/* 🔷 RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="w-full max-w-[500px] lg:max-w-[680px] h-[260px] sm:h-[320px] md:h-[400px] lg:h-[500px] relative"
        >
          <Image
            src="/Laptop.png"
            alt="laptop"
            fill
            className="object-cover rounded-[12px]"
          />
        </motion.div>

      </div>
    </motion.section>
  );
}