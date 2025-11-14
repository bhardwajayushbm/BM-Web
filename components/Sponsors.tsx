"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Sponsors() {
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
      <Image
        src="/BG.png"
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mt-44" // ⬅️ added top margin here
        >
          <h2 className="font-[Helvetica] font-bold text-[32px] sm:text-[40px] md:text-[50px] leading-[45px] sm:leading-[55px] md:leading-[65px] text-black mb-6">
            BANGMETRIC Sponsors Servicenow
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </motion.div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="grid grid-cols-2 gap-8 pr-10 pt-48">
            {["/ISO.png", "/QC.png", "/SP.png", "/MSM.png"].map((src, i) => (
              <motion.div
                key={src}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={imageVariants}
                className="relative z-10 flex justify-center items-center"
              >
                <Image
                  src={src}
                  alt={`Sponsor ${i + 1}`}
                  width={130}
                  height={130}
                  className="object-contain drop-shadow-md"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
