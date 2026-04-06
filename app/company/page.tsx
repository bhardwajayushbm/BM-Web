"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        w-full flex justify-center
        px-4 sm:px-6 md:px-8 lg:px-10
        mt-8 sm:mt-12 md:mt-20 lg:mt-28
        mb-4 sm:mb-8 md:mb-16 lg:mb-24
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        className="
          relative
          w-full
          max-w-[1376px]
          lg:max-w-[1500px]
          xl:max-w-[1600px]
          h-[260px]
          sm:h-[260px]
          md:h-[320px]
          lg:h-[404px]
          rounded-[20px]
          overflow-hidden
          flex items-center justify-center
          mt-10
          cursor-pointer
        "
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/BM.jpg"
            alt="Life background"
            fill
            priority
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}