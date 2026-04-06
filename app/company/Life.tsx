"use client";

import { motion } from "framer-motion";

export default function LearnGrow() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full bg-white px-4 md:px-[82px] py-16 md:py-24"
    >
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-start justify-between gap-10 md:gap-20">
        
        {/* 🔷 LEFT CONTENT */}
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
        >
          {/* TITLE */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="font-[Helvetica] font-normal text-[36px] md:text-[40px] leading-[1] text-black w-full md:w-[505px]"
          >
            Learn & Grow
          </motion.h1>

          {/* DESC */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="font-[Helvetica] font-normal text-[14px] md:text-[22px] leading-[1.2] text-black w-full md:w-[505px] mt-4"
          >
            Your growth is part of our roadmap. We invest deeply in learning
            because we believe skilled people build powerful outcomes.
          </motion.p>

          {/* SUBTITLE */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="font-[Helvetica] font-bold text-[14px] md:text-[30px] leading-[1] text-black w-full md:w-[512px] mt-6 mb-4"
          >
            What you get:
          </motion.h2>

          {/* LIST */}
          <div className="relative">
            <div className="flex flex-col gap-[20px] md:gap-[28px] relative z-10">

              {[
                "Structured L&D programs tailored to each role",
                "Sponsored certifications and skill pathways",
                "Mentorship, coaching, and expert-led knowledge sessions",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <p className="font-[Helvetica] text-[14px] md:text-[25px] leading-[1.1] text-black">
                    {text}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>
        </motion.div>

        {/* 🔷 RIGHT VIDEO */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full mt-10 md:w-[520px]"
        >
          
          {/* PURPLE BG */}
          <div className="hidden md:block absolute -top-10 -right-8 w-[400px] h-[400px] bg-[#E9E4F4]" />

          {/* VIDEO */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative w-full h-[260px] md:w-[400px] md:h-[400px] bg-[#F3F2F8] overflow-hidden"
          >
            <video
              src="/Life.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}