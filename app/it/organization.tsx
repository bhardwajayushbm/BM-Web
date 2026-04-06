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
      className="w-full bg-[#F3F3F5] py-16 md:py-28"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col lg:flex-row justify-between items-start gap-10 relative">

        {/* 🔷 LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-[520px]"
        >
          <h1 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] leading-[1.2] text-black">
            Why Organizations
            <br />
            Choose BANGMETRIC
          </h1>

          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-black mt-4">
            You’re not looking for another implementer.
          </p>
        </motion.div>

        {/* 🔷 RIGHT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="max-w-[520px] relative"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold mb-6 md:mb-8"
          >
            You’re looking for a thinking partner.
          </motion.p>

          <div className="flex flex-col gap-6 md:gap-[28px] relative z-10">

            {[
              <>
                <span className="font-semibold">Privately owned</span> — real
                accountability, no investor pressure, no bloated teams
              </>,
              <>
                <span className="font-semibold">Midmarket specialists</span> —
                world class capability without enterprise bloat
              </>,
              <>
                <span className="font-semibold">Outcome obsessed</span> — we move
                MTTR, FCR, and change quality, not just sliders on a dashboard
              </>,
              <>
                <span className="font-semibold">End to end</span> — strategy,
                design, build, AI, optimisation. We own outcomes—not hours.
              </>,
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
                {/* 🔥 IMAGE DOT */}
                <div className="relative w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] shrink-0 z-10">
                  <Image
                    src="/SS.png"
                    alt="icon"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* TEXT */}
                <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[1.6] text-black">
                  {text}
                </p>
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* 🔷 IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            w-full
            max-w-[320px] sm:max-w-[380px] md:max-w-[420px]
            h-[200px] sm:h-[240px] md:h-[300px]
            relative
            mt-8
            lg:mt-0
            lg:absolute lg:left-0 lg:bottom-[-100px]
          "
        >
          <Image
            src="/Og1.png"
            alt="glass"
            fill
            className="object-contain"
          />
        </motion.div>

      </div>
    </motion.section>
  );
}