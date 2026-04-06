"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ResultsClientsSee() {
  const cards = [
    { icon: "/I4.png", text: "20-40% faster MTTR" },
    { icon: "/Icon15.png", text: "15-30% higher first contact resolution" },
    { icon: "/Icon14.png", text: "25%+ analyst productivity improvement" },
    { icon: "/Icon13.png", text: "Fewer emergency changes & lower change failure rate" },
    { icon: "/Icon12.png", text: "Reduced cost per-ticket through clarity and automation" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full bg-white font-helvetica"
    >

      {/* 🔷 CONTENT */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 md:py-24">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-normal text-black">
            The Results Our Clients See
          </h2>

          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-black mt-3">
            When ITSM is designed properly, the numbers move
          </p>
        </motion.div>

        {/* 🔷 CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="
                w-full
                h-[180px] sm:h-[200px]
                bg-white
                border border-[#BEBEBE]
                rounded-[6px]
                flex flex-col
                px-4 sm:px-5 md:px-6
                pt-3
                cursor-pointer
                hover:shadow-md
              "
            >
              <Image
                src={card.icon}
                alt="icon"
                width={60}
                height={60}
                className="mb-4 sm:mb-5"
              />

              <p className="text-[13px] sm:text-[14px] text-black leading-[1.4]">
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🔷 BOTTOM TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mt-8 sm:mt-10 mb-4 px-4"
      >
        <h3
          className="
            font-semibold leading-[1.4]
            text-[20px] sm:text-[26px] md:text-[32px] lg:text-[40px]
          "
          style={{ color: "#4FCA07" }}
        >
          Not because we added more features
          <br className="hidden sm:block" />
          but because we removed friction.
        </h3>
      </motion.div>

    </motion.section>
  );
}