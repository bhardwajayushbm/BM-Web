"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const cards = [
  {
    title: "GenAi Solutions",
    desc: "Elevating your ServiceNow platform with AI-powered workflows.",
  },
  {
    title: "Strategic Portfolio Management",
    desc: "Aligning investments and strategies to maximize business outcomes.",
  },
  {
    title: "Customer Service Management",
    desc: "Connected customer experiences that elevate service interactions.",
    link: "/customer", 
  },
  {
    title: "Field Service Management",
    desc: "Optimized field operations enabling faster and smarter service.",
  },
];

/* ===== ANIMATIONS ===== */
const sectionVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const headingVariant = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
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

export default function AreYouLookingForCard() {
  const router = useRouter(); // 👈 ADD

  return (
    <motion.section
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full bg-white py-10 sm:py-12 px-4"
    >
      <div className="max-w-[1100px] mx-auto">

        <motion.h2
          variants={headingVariant}
          className="text-center font-[Helvetica] text-black text-[24px] sm:text-[32px] md:text-[40px]"
        >
          Adopt ServiceNow in 45 Days
        </motion.h2>

        <motion.div
          variants={containerVariant}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-10"
        >
          {cards.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={{ scale: 1.04, y: -5 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                if (item.link) router.push(item.link); // 👈 NAVIGATION
              }}
              className={`
                relative
                rounded-[10px]
                border border-[#D1D1D1]
                px-4 sm:px-5 py-4
                min-h-[110px] md:h-[120px]
                flex items-center gap-3
                bg-[#EDEDED]
                hover:bg-[#D8CDFF]
                transition-all duration-300
                ${item.link ? "cursor-pointer" : ""}
              `}
            >

              <Image
                src="/SS.png"
                alt="icon"
                width={24}
                height={24}
                className="object-contain shrink-0 sm:w-[26px] sm:h-[26px]"
              />

              <div className="flex flex-col justify-center">
                <h3 className="ml-1 sm:ml-2 font-[Helvetica] text-black text-[15px] sm:text-[17px] md:text-[18px] leading-[20px]">
                  {item.title}
                </h3>

                <p className="ml-1 sm:ml-2 text-black text-[12px] sm:text-[13px] leading-[15px] sm:leading-[16px] max-w-[220px] sm:max-w-[240px] mt-1">
                  {item.desc}
                </p>
              </div>

              <Image
                src="/arrow.png"
                alt="arrow"
                width={14}
                height={14}
                className="absolute top-3 right-3 sm:right-4 opacity-70 sm:w-[16px] sm:h-[16px]"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}