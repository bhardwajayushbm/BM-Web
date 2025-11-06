"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Event() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with White Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/Walpaper.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center opacity-80"
        />
        {/* White gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#ffffffcc] via-[#ffffff99] to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-[Helvetica] font-bold text-[32px] sm:text-[40px] md:text-[50px] leading-[45px] sm:leading-[55px] md:leading-[65px] text-black mb-6">
            BANGMETRIC Sponsors Servicenow Developer Meetup
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#9562EB] hover:bg-[#8449E6] text-white 
            font-[Helvetica] font-normal text-[22px] leading-[55px]
            w-[365px] h-[46px] rounded-[5px] transition-all duration-300 shadow-md"
          >
            Read More
          </motion.button>
        </motion.div>

        {/* Right Event Image Section */}
        <div className="relative flex justify-center lg:justify-end items-center">
          <motion.div
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
            className="relative z-20"
          >
            <Image
              src="/Event.png"
              alt="Event"
              width={623}
              height={513}
              className="object-contain drop-shadow-xl rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
