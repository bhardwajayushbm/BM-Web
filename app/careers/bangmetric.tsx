"use client";
import { motion } from "framer-motion";

export default function WhyJoinBangmetric() {
  const items = [
    { id: "01", text: "Learn fast with structured upskilling and certifications", bg: "#F1EDFF", offset: "lg:mr-[10px]" },
    { id: "02", text: "Work on real enterprise ServiceNow transformations", bg: "#F1EDFF", offset: "lg:mr-[50px]" },
    { id: "03", text: "Be part of a people-first, servant-leadership culture", bg: "#F1EDFF", offset: "lg:mr-[80px]" },
    { id: "04", text: "Grow with clear career paths and transparent feedback", bg: "#F1EDFF", offset: "lg:mr-[110px]" },
    { id: "05", text: "Collaborate with global teams across India, the US, and South Africa", bg: "#F1EDFF", offset: "lg:mr-[140px]" },
  ];

  // 🔥 Whole section animation (BOTTOM → UP)
  const sectionVariants = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Existing stagger container
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Card animation (UNCHANGED)
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="w-full bg-white py-12 lg:py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 px-6">
        
        {/* LEFT */}
        <div className="text-center lg:text-left">
          <h2 className="font-helvetica font-normal text-[32px] lg:text-[48px] leading-[1.2] text-black">
            Why Join <br className="hidden lg:block" /> BANGMETRIC
          </h2>
        </div>

        {/* RIGHT */}
        <motion.div
          className="flex flex-col gap-3 w-full lg:w-auto items-center lg:items-end"
          variants={containerVariants}
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              className={`w-full max-w-[520px] ${item.offset}`}
              variants={itemVariants}
            >
              <div
                className="flex items-center w-full min-h-[60px] rounded-[60px] px-4 border border-gray-300"
                style={{ backgroundColor: item.bg }}
              >
                <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center mr-3 shrink-0 shadow-sm">
                  <span className="font-helvetica font-bold text-[18px] text-[#7851AB]">
                    {item.id}
                  </span>
                </div>
                <p className="font-helvetica font-normal text-[15px] lg:text-[18px] leading-[1.2] text-black py-2">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}