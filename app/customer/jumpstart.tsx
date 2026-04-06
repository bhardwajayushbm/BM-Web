"use client";

import { motion } from "framer-motion";

export default function CSMJumpstartSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full bg-white py-24 px-4 md:px-8 lg:px-12 flex justify-center"
    >
      <div className="w-full max-w-[1100px] text-center font-helvetica">

        {/* 🔷 HEADER */}
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
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-black text-[26px] md:text-[48px] mb-0"
          >
            Our CSM Jumpstart Offerings
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-black text-[18px] mb-14"
          >
            BANGMETRIC delivers value fast, without compromising design.
          </motion.p>
        </motion.div>

        {/* 🔷 CARDS */}
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="
              w-full md:w-[659px]
              h-[180px]
              rounded-[10px]
              border border-black
              bg-white
              text-left
              p-8
              transition-all duration-300
              hover:bg-[#E3DCFF]
            "
          >
            <h3 className="text-[30px] font-semibold mb-4 text-black">
              45-Day CSM
            </h3>
            <p className="text-[12px] leading-[1.5] text-black">
              A clean, expertly designed CSM foundation delivered with
              speed and clarity. Ideal for organisations wanting a strong
              core built right the first time, without unnecessary complexity.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="
              w-full md:w-[659px]
              h-[180px]
              rounded-[10px]
              border border-black
              bg-white
              text-left
              p-8
              transition-all duration-300
              hover:bg-[#E3DCFF]
            "
          >
            <h3 className="text-[30px] font-semibold mb-4 text-black">
              60-Day CSM
            </h3>
            <p className="text-[12px] leading-[1.5] text-black">
              For teams ready to unlock CSM Pro capabilities. Intelligent
              workflows, AI supported service, and scalable design,
              delivered deliberately, not rushed.
            </p>
          </motion.div>

        </div>

        {/* 🔷 BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              w-[180px]
              h-[40px]
              rounded-[6px]
              bg-[#9562EB]
              text-white
              text-[16px]
              font-medium
              transition hover:opacity-90
              flex items-center justify-center
            "
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Download Now
          </motion.button>
        </motion.div>

      </div>
    </motion.section>
  );
}