"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function JoinUs() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full h-[500px] overflow-hidden"
    >
      {/* 🔷 BACKGROUND */}
      <motion.div
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <Image
          src="/office.png"
          alt="Office"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* 🔷 CARD */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          absolute
          left-[120px]
          w-[381px]
          h-[300px]
          bg-white
          rounded-b-[20px]
          rounded-t-[8px]
          shadow-lg
          px-8
          pt-10
          pb-8
          flex
          flex-col
        "
      >
        {/* TEXT BLOCK */}
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
          {/* TITLE */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="font-[Helvetica] font-bold italic text-[60px] leading-[1] text-black mb-6"
          >
            Join Us!
          </motion.h1>

          {/* DESC */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="font-[Helvetica] font-normal text-[20px] leading-[1] text-black mb-8"
          >
            Be part of a team that builds meaningful change, for clients,
            industries, and your own career.
          </motion.p>

          {/* BUTTON */}
          <motion.button
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="font-poppins w-[145px] h-[45px] bg-[#9562EB] text-white rounded-[5px] text-[16px] font-medium shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          >
            Explore Careers
          </motion.button>
        </motion.div>

      </motion.div>
    </motion.section>
  );
}