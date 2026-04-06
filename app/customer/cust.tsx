"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CustomerServiceBanner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full h-[260px]"
    >
      <Image
        src="/Cust.jpg"
        alt="Customer Service Management"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center px-[20px] sm:px-[40px] md:px-[82px]">

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
        >
          {/* TEXT SMALL */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="text-white text-[14px] sm:text-[16px] mb-2"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Read Customer Success Stories & News on
          </motion.p>

          {/* HEADING */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.2] mb-5"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Customer Service Management
          </motion.h2>

          {/* BUTTON */}
          <motion.button
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-[6px] text-white text-[14px]"
            style={{
              backgroundColor: "#9562EB",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Know More
          </motion.button>
        </motion.div>

      </div>
    </motion.section>
  );
}