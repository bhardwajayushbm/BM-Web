"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BangmetricWay() {
  const steps = [
    {
      title: "Discover & Design",
      desc: "We map real customer journeys, align on outcomes, and define what “good” actually looks like.",
    },
    {
      title: "Build for Speed",
      desc: "We configure ServiceNow CSM with intent: cases, workflows, SLAs, and portals that support the design.",
    },
    {
      title: "Automate What Matters",
      desc: "We enable AI, Virtual Agent, and intelligent workflows where they genuinely add value.",
    },
    {
      title: "Improve Continuously",
      desc: "We measure, learn, and optimise, because customer expectations don’t stand still.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full bg-white py-16 md:py-28 font-helvetica"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">

        {/* 🔷 LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full max-w-[520px] text-center lg:text-left"
        >

          <h2 className="text-[26px] sm:text-[30px] md:text-[36px] font-normal text-black">
            The BANGMETRIC Way
          </h2>

          <p className="text-[16px] sm:text-[18px] md:text-[22px] text-black mt-2">
            Our Customer Service Blueprint
          </p>

          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[450px] h-[250px] sm:h-[300px] md:h-[360px] mt-6 mx-auto lg:mx-0"
          >
            <Image
              src="/glass.png"
              alt="glass"
              fill
              className="object-contain"
            />
          </motion.div>

        </motion.div>

        {/* 🔷 RIGHT SIDE */}
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
          className="w-full flex flex-col gap-6"
        >

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: 60 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center group"
            >

              {/* DOT */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="
                  absolute
                  -left-2 sm:-left-4
                  top-1/2
                  -translate-y-1/2
                  w-[24px] h-[24px] sm:w-[30px] sm:h-[30px]
                  rounded-full
                  bg-[#D8CDFF]
                  shadow-md
                  z-10
                "
              />

              {/* CARD */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="
                  w-full
                  min-h-[90px]
                  rounded-[10px]
                  flex flex-col sm:flex-row
                  items-start sm:items-center
                  px-4 sm:px-6 md:px-8
                  py-4
                  gap-3
                  border border-[#D8D8D8]
                  bg-[#F1F1F4]
                  transition-all duration-300
                  group-hover:bg-[#9383DC]
                  group-hover:text-white
                "
              >
                {/* TITLE */}
                <div className="w-full sm:w-[180px] text-[15px] sm:text-[16px] md:text-[18px] font-semibold leading-tight">
                  {step.title}
                </div>

                {/* DIVIDER */}
                <div className="hidden sm:block w-[1.5px] h-[60px] bg-black group-hover:bg-white/50" />

                {/* DESCRIPTION */}
                <p className="text-[13px] sm:text-[14px] leading-[1.5]">
                  {step.desc}
                </p>
              </motion.div>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </motion.section>
  );
}