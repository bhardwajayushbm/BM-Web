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
    <section className="w-full bg-white py-16 md:py-24 flex flex-col items-center">
      
      {/* HEADING */}
      <h1 className="font-helvetica text-center text-[24px] md:text-[56px] mb-6 md:mb-4">
        What You Can Expect
      </h1>

      <motion.div
        className="flex flex-col gap-6 md:gap-10 w-full items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >

        {/* ================= MOBILE CARDS ================= */}

        {/* CARD 1 */}
        <motion.div
          variants={cardVariants}
          className="relative w-[90%] h-[160px] rounded-[12px] overflow-hidden md:hidden"
        >
          <Image src="/E1.png" alt="Mobile Card 1" fill className="object-cover" />
          <p className="absolute left-4 right-4 bottom-4 text-center font-[Helvetica] text-[13px] text-white leading-tight">
            Competitive compensation and growth-focused learning
          </p>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          variants={cardVariants}
          className="relative w-[90%] h-[160px] rounded-[12px] overflow-hidden md:hidden"
        >
          <Image src="/E2.png" alt="Mobile Card 2" fill className="object-cover" />
          <p className="absolute left-4 right-4 bottom-4 text-center font-[Helvetica] text-[13px] text-white leading-tight">
            Recognition programs and team celebrations
          </p>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          variants={cardVariants}
          className="relative w-[90%] h-[160px] rounded-[12px] overflow-hidden md:hidden"
        >
          <Image src="/E3.png" alt="Mobile Card 3" fill className="object-cover" />
          <p className="absolute left-4 right-4 bottom-4 text-center font-[Helvetica] text-[13px] text-white leading-tight">
            A culture of inclusion, trust, and belonging
          </p>
        </motion.div>


        {/* ================= DESKTOP / TABLET (UNCHANGED) ================= */}

        {/* CARD 1 */}
        <motion.div
          variants={cardVariants}
          className="hidden md:block relative w-[1000px] h-[270px] rounded-[10px] overflow-hidden"
        >
          <Image src="/c1.png" alt="Card 1" fill className="object-cover" />
          <p className="absolute left-[80px] top-1/2 -translate-y-1/2 w-[399px] font-[Helvetica] font-normal text-[30px] leading-[100%] text-white">
            Competitive compensation and growth-focused learning
          </p>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          variants={cardVariants}
          className="hidden md:block relative w-[1000px] h-[270px] rounded-[10px] overflow-hidden"
        >
          <Image src="/c2.png" alt="Card 2" fill className="object-cover" />
          <p className="absolute right-[80px] top-1/2 -translate-y-1/2 w-[399px] text-right font-[Helvetica] font-normal text-[30px] leading-[100%] text-white">
            Recognition programs
            <br />
            and team celebrations
          </p>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          variants={cardVariants}
          className="hidden md:block relative w-[1000px] h-[270px] rounded-[10px] overflow-hidden"
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