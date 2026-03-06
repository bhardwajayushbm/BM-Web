"use client";

import { motion } from "framer-motion";

export default function WhyJoinBangmetric() {
  const items = [
    { id: "01", text: "Learn fast with structured upskilling and certifications", bg: "#A3AEEF", offset: "mr-[10px]" },
    { id: "02", text: "Work on real enterprise ServiceNow transformations", bg: "#9F9EF2", offset: "mr-[50px]" },
    { id: "03", text: "Be part of a people-first, servant-leadership culture", bg: "#9383DC", offset: "mr-[90px]" },
    { id: "04", text: "Grow with clear career paths and transparent feedback", bg: "#9174C8", offset: "mr-[120px]" },
    { id: "05", text: "Collaborate with global teams across India, the US, and South Africa", bg: "#7851AB", offset: "mr-[150px]" },
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
      <div className="mx-auto flex items-start justify-between gap-12 px-6">
        <div>
          <h2 className="ml-[20px] font-helvetica font-normal text-[60px] leading-[1.2] text-black">
            Why Join
            <br />
            BANGMETRIC
          </h2>
        </div>

        <motion.div
          className="flex flex-col gap-2 items-end"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}  // plays when entering
        >
          {items.map((item) => (
            <motion.div key={item.id} className={item.offset} variants={itemVariants}>
              <div
                className="flex items-center w-[600px] h-[86px] rounded-[60px] px-4"
                style={{ backgroundColor: item.bg }}
              >
                <div className="w-[69px] h-[68px] rounded-full bg-white flex items-center justify-center mr-3 shrink-0">
                  <span className="font-helvetica font-bold text-[40px]" style={{ color: item.bg }}>
                    {item.id}
                  </span>
                </div>
                <p className="font-helvetica font-normal text-[25px] leading-[1.2] text-white">
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