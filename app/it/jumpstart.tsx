"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ITSMJumpstartSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full bg-white py-24 px-4 sm:px-6 md:px-12"
    >
      
      <div className="max-w-[1100px] mx-auto w-full font-[Helvetica]">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">

          {/* TEXT */}
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
            className="max-w-[650px]"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="text-[32px] md:text-[46px] leading-[1.1] font-normal text-black"
            >
              Our ITSM Jumpstarts
            </motion.h2>

            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="text-[20px] md:text-[30px] leading-[1.2] mt-1 text-black"
            >
              (Fast, Without the Compromise)
            </motion.h3>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="text-[14px] md:text-[18px] text-black mt-6 md:mt-8 max-w-[420px] leading-[1.5]"
            >
              They’re structured, designed pathways that
              keep momentum high and quality intact.
            </motion.p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative w-[200px] h-[220px] md:w-[280px] md:h-[300px]"
          >
            <Image
              src="/IT.png"
              alt="Jump Graphic"
              fill
              className="object-contain"
            />
          </motion.div>

        </div>

        {/* CARDS */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="w-full md:w-1/2 h-auto md:h-[180px] rounded-[10px] border border-black bg-white p-6 md:p-8 transition-all duration-300 hover:bg-[#E3DCFF]"
          >
            <h3 className="text-[22px] md:text-[30px] font-semibold mb-3 md:mb-4 text-black">
              45-Day ITSM
            </h3>
            <p className="text-[13px] leading-[1.5] text-black">
              A clean, effective baseline that actually improves flow:
              Incident, Request, core Catalog, Knowledge, practical SLAs,
              Major Incident basics, and a portal that reduces effort.
              Fast to value. Built right the first time.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="w-full md:w-1/2 h-auto md:h-[180px] rounded-[10px] border border-black bg-white p-6 md:p-8 transition-all duration-300 hover:bg-[#E3DCFF]"
          >
            <h3 className="text-[22px] md:text-[30px] font-semibold mb-3 md:mb-4 text-black">
              60-Day ITSM
            </h3>
            <p className="text-[13px] leading-[1.5] text-black">
              For teams ready to go beyond the basics:
              Problem & Change, Service Operations Workspace, Virtual Agent,
              and a rightsized CMDB/CSDM
            </p>
          </motion.div>

        </div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-[180px] h-[42px] rounded-[6px] bg-[#9562EB] text-white text-[15px] flex items-center justify-center hover:opacity-90"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Download Now
          </motion.button>
        </motion.div>

      </div>
    </motion.section>
  );
}