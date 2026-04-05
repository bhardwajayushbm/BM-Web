"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CoreValues() {
  const cards = [
    {
      title: "Customer Success-\nDriven Outcomes",
      desc: "Every engagement begins with understanding your goals and ends with measurable business impact.",
    },
    {
      title: "Upskilling & Future-\nReadiness",
      desc: "We believe in continuous learning, certifications, hands-on training, and growth roadmaps that keep our teams future-ready.",
    },
    {
      title: "Integrity &\nTransparency",
      desc: "Honest pricing, clear communication, and commitments you can trust.",
    },
    {
      title: "Innovation with\nPurpose",
      desc: "We innovate to solve real problems, optimize processes, and unlock platform potential.",
    },
    {
      title: "Collaboration &\nRespect",
      desc: "A culture built on appreciation and mutual respect empowers our people to deliver their best work for your organization.",
    },
  ];

  const sectionVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative w-full py-20 md:py-28 font-[Helvetica]"
    >

      <Image
        src="/Cloud.jpg"
        alt="cloud"
        fill
        className="object-cover"
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">

        {/* GRID */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch"
        >

          {/* LEFT TEXT */}
          <motion.div variants={fadeUp}>
            <h2 className="text-[36px] md:text-[40px] text-black">
              Core Values
            </h2>

            <p className="mt-4 text-[14px] sm:text-[16px] text-black leading-[1.2] max-w-[280px]">
              Our values shape how we work with our clients, with our teams,
              and with the world of technology.
            </p>
          </motion.div>

          {cards.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={{ scale: 1.05, y: -6 }}
              whileTap={{ scale: 0.97 }}
              className="
                bg-white rounded-[10px] p-5
                flex flex-col justify-between
                shadow-sm
                h-[140px] md:h-[160px]
                cursor-pointer
              "
            >
              <div className="flex gap-3 items-start">
                <Image
                  src="/SS.png"
                  alt="star"
                  width={26}
                  height={26}
                  className="mt-1 shrink-0"
                />

                <div>
                  <h3 className="text-[16px] font-semibold text-black leading-[20px] whitespace-pre-line">
                    {item.title}
                  </h3>

                  <p className="text-[13px] text-black mt-2 leading-[18px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

        </motion.div>

      </div>
    </motion.section>
  );
}