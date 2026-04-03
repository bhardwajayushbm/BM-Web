"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
  // 🔥 Section animation (bottom → up)
  const sectionVariants = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  // 🔥 Child animation
  const childVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="w-full bg-white py-12 md:py-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3, once: true }}
    >
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-20 w-full px-4 md:px-0">
        
        {/* LEFT */}
        <motion.div
          className="text-center md:text-left"
          variants={childVariants}
        >
          <h1 className="font-[Helvetica] font-normal text-[28px] md:text-[36px] leading-[1.2] text-black w-full md:w-[505px] mt-4 md:mt-20 md:ml-8">
            Who We're <br className="hidden md:block" />
            Looking For
          </h1>

          <p className="font-[Helvetica] font-normal text-[16px] md:text-[20px] leading-[1.2] text-black w-full md:w-[500px] mt-2 md:ml-8">
            Problem solvers. Learners. Team players.
            <br />
            People who take ownership, think beyond tasks, and deliver outcomes.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="mt-6 md:mt-20 w-full flex justify-center md:block md:w-[400px] md:h-[360px]"
          variants={childVariants}
        >
          
          {/* MOBILE */}
          <div className="bg-[#F1EDFF] p-4 rounded-[20px] md:hidden">
            <div className="w-[260px] h-[240px] bg-[#F3F2F8] rounded-[16px] overflow-hidden">
              <video
                src="/careerV1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* DESKTOP */}
          <div className="relative hidden md:block w-[400px] h-[360px]">
            <div className="absolute -top-10 -right-4 w-full h-full bg-[#F1EDFF]" />

            <div className="relative w-[360px] h-[340px] bg-[#F3F2F8] overflow-hidden">
              <video
                src="/careerV1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}