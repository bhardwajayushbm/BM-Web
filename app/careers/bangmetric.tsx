"use client";

import { motion } from "framer-motion";

export default function WhyJoinBangmetric() {
  const items = [
    { id: "01", text: "Learn fast with structured upskilling and certifications", bg: "#F1EDFF", offset: "mr-[10px]" },
    { id: "02", text: "Work on real enterprise ServiceNow transformations", bg: "#F1EDFF", offset: "mr-[50px]" },
    { id: "03", text: "Be part of a people-first, servant-leadership culture", bg: "#F1EDFF", offset: "mr-[80px]" },
    { id: "04", text: "Grow with clear career paths and transparent feedback", bg: "#F1EDFF", offset: "mr-[110px]" },
    { id: "05", text: "Collaborate with global teams across India, the US, and South Africa", bg: "#F1EDFF", offset: "mr-[140px]" },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -120 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-white py-24">

      <div className="max-w-[1100px] mx-auto flex items-start justify-between gap-10 px-6">
        <div>
          <h2 className="font-helvetica font-normal text-[48px] leading-[1.2] text-black">
            Why Join
            <br />
            BANGMETRIC
          </h2>
        </div>

        <motion.div
          className="flex flex-col gap-3 items-end"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
        >
          {items.map((item) => (
            <motion.div key={item.id} className={item.offset} variants={itemVariants}>

              <div
                className="flex items-center w-[520px] h-[60px] rounded-[60px] px-4 border border-gray-300"
                style={{ backgroundColor: item.bg }}
              >

                <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center mr-3 shrink-0">
                  <span className="font-helvetica font-bold text-[18px] text-[#7851AB]">
                    {item.id}
                  </span>
                </div>
                <p className="font-helvetica font-normal text-[18px] leading-[1.2] text-black">
                  {item.text}
                </p>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}