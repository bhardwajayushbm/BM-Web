"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1], // smoother easing
    },
  },
};

export default function Philosophy() {
  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-20 font-[Helvetica]">

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 mb-10 md:mb-14"
        >

          <div>
           <h2 className="text-[22px] sm:text-[22px] md:text-[40px] leading-[1.2] text-black text-center md:text-left whitespace-nowrap md:whitespace-normal">
  The Core <span className="font-normal">BANGMETRIC</span> Philosophy
</h2>
          </div>

          <div className="max-w-[520px]">
            <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.4] text-black">
              We help organisations design service experiences that work for
              real people then bring them to life on ServiceNow with speed and clarity.
              No complexity. No bloated teams. No templates masking as best practice.
              Just thoughtful design, intentional automation, and measurable outcomes.
            </p>
          </div>

        </motion.div>

        {/* ===== CARDS ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            flex flex-col items-center gap-5
            md:flex-row md:justify-between md:gap-0
          "
        >

          {/* CARD 1 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="
              relative w-full
              max-w-[100%] sm:max-w-[320px]
              h-[260px] sm:h-[300px] md:h-[290px]
              rounded-[5px] overflow-hidden
            "
          >
            <Image src="/PH1.png" alt="card1" fill className="object-cover" />

            <div className="absolute top-4 left-4 md:top-5 md:left-5">
              <h3 className="text-black text-[20px] sm:text-[24px] md:text-[30px] leading-[1.3]">
                Mid-market <br /> specialists
              </h3>
            </div>

            <div className="hidden md:block absolute bottom-12 right-5 text-white text-[26px]">
              &gt;
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="
              relative w-full
              max-w-[100%] sm:max-w-[320px]
              h-[260px] sm:h-[300px] md:h-[290px]
              rounded-[5px] overflow-hidden
            "
          >
            <Image src="/PH2.png" alt="card2" fill className="object-cover" />

            <div className="absolute top-4 left-4 md:top-5 md:left-5">
              <h3 className="text-black text-[20px] sm:text-[24px] md:text-[30px] leading-[1.3]">
                Privately <br />
                owned, fully <br />
                accountable
              </h3>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="
              relative w-full
              max-w-[100%] sm:max-w-[320px]
              h-[260px] sm:h-[300px] md:h-[290px]
              rounded-[5px] overflow-hidden
            "
          >
            <Image src="/PH3.png" alt="card3" fill className="object-cover" />

            <div className="absolute top-4 left-4 md:top-5 md:left-5">
              <h3 className="text-black text-[20px] sm:text-[24px] md:text-[30px] leading-[1.3]">
                45-day & 60-day <br />
                accelerators <br />
                without the <br />
                compromise
              </h3>
            </div>

            <div className="hidden md:block absolute bottom-10 right-5 text-white text-[26px]">
              &gt;
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}