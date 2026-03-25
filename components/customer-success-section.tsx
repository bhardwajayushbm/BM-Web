"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35, 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 120 }, 
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Card({ title, description, className }: any) {
  return (
    <motion.div
      variants={cardVariants}
      className={`w-full flex justify-center ${className}`}
    >
      <div className="relative w-full max-w-[320px] h-[220px] sm:h-[240px] md:h-[250px] rounded-[12px] overflow-hidden shadow-lg">

        <Image
          src="/pic_5.png"
          alt="card"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-0 p-4">
          <h3 className="text-white text-[16px] sm:text-[18px] font-semibold mb-1">
            {title}
          </h3>

          <p className="text-gray-200 text-[12px] sm:text-[13px] mb-3 leading-[1.4]">
            {description}
          </p>

          <button className="bg-[#9562EB] text-white w-[120px] sm:w-[130px] h-[32px] sm:h-[34px] rounded-[6px] text-[12px] sm:text-[13px]">
            Read More
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function CustomerSuccessSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] text-black mb-4 md:mb-6">
            Customer Success in Action
          </h2>

          <p className="text-[14px] sm:text-[16px] max-w-[650px] mx-auto leading-[1.5]">
            Discover how leading organizations across industries are transforming
            with our{" "}
            <span className="text-[#62CE30] font-semibold">ServiceNow</span>{" "}
            expertise.
          </p>

          <p className="text-[14px] sm:text-[16px] max-w-[650px] mx-auto mt-2 leading-[1.5]">
            From optimizing workflows to elevating digital experiences, our client
            stories reflect real-world impact, proven results, and lasting value.
          </p>

          <button className="mt-6 md:mt-8 bg-[#9562EB] text-white w-[150px] h-[40px] md:w-[160px] md:h-[42px] rounded-[6px]">
            Case Studies
          </button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="
            flex flex-col items-center gap-6
            md:flex-row md:justify-between md:items-start md:gap-0
          "
        >
          <Card
            title="Sony Interactive Entertainment"
            description="Sony Interactive Entertainment Streamlines HR with ServiceNow HRSD"
            className="md:order-3 md:mt-0"
          />

          <Card
            title="Sony Interactive Entertainment"
            description="Sony Interactive Entertainment Streamlines HR with ServiceNow HRSD"
            className="md:order-2 md:mt-[40px]"
          />

          <Card
            title="Sony Interactive Entertainment"
            description="Sony Interactive Entertainment Streamlines HR with ServiceNow HRSD"
            className="md:order-1 md:mt-[80px]"
          />

        </motion.div>

      </div>
    </section>
  );
}