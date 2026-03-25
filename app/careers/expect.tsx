"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhatYouCanExpect() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-white py-24 flex flex-col items-center">
      <h1 className="font-helvetica text-center text-[40px] md:text-[56px] mb-4">
        What You Can Expect
      </h1>

      <motion.div
        className="flex flex-col gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} 
      >
        <motion.div
          variants={cardVariants}
          className="relative w-[1000px] h-[270px] rounded-[10px] overflow-hidden"
        >
          <Image src="/c1.png" alt="Card 1" fill className="object-cover" />
          <p className="absolute left-[80px] top-1/2 -translate-y-1/2 w-[399px] font-[Helvetica] font-normal text-[30px] leading-[100%] text-white">
            Competitive compensation and growth-focused learning
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="relative w-[1000px] h-[270px] rounded-[10px] overflow-hidden"
        >
          <Image src="/c2.png" alt="Card 2" fill className="object-cover" />
          <p className="absolute right-[80px] top-1/2 -translate-y-1/2 w-[399px] text-right font-[Helvetica] font-normal text-[30px] leading-[100%] text-white">
            Recognition programs
            <br />
            and team celebrations
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="relative w-[1000px] h-[270px] rounded-[10px] overflow-hidden"
        >
          <Image src="/c3.png" alt="Card 3" fill className="object-cover" />
          <p className="absolute left-[80px] top-1/2 -translate-y-1/2 w-[399px] font-[Helvetica] font-normal text-[32px] leading-[100%] text-white">
            A culture of inclusion,
            <br />
            trust, and belonging
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}