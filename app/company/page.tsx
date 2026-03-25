"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeVariants = {
  initial: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
  hover: {
    opacity: [1, 0, 1],
    transition: {
      duration: 1.00,         
      ease: "easeInOut",
    },
  },
};

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        w-full flex justify-center
        px-4 sm:px-6 md:px-8 lg:px-10
        mt-8 sm:mt-12 md:mt-20 lg:mt-28
        mb-8 sm:mb-12 md:mb-16 lg:mb-24
      "
    >
      <motion.div
        variants={fadeVariants}
        initial="initial"
        animate="visible"
        whileHover="hover"     
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
          cursor-pointer
        "
      >
        <motion.div
          animate={{ scale: [1.50, 1, 1.50] }}
          transition={{
            duration: 8,         
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute inset-0"
        >
          <Image
            src="/Life.png"
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
