"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero_() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center relative overflow-hidden font-[Helvetica] pb-10">

      {/* ===== VIDEO ===== */}
      <motion.video
        src="/HomeVideo2.mp4"
        autoPlay
        muted
        loop
        playsInline
        initial={{
          width: "100vw",
          height: "100vh",
        }}
        animate={
          startAnimation
            ? {
                width: "260px",
                height: "auto",
              }
            : {}
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        className="
          object-contain
          bg-transparent
          mt-2 sm:mt-1 md:mt-0
        "
      />

      {/* ===== CONTENT ===== */}
      {startAnimation && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="
            absolute
            flex
            flex-col
            items-center
            text-center
            px-4
            top-[70%] sm:top-[66%] md:top-[58%]
            -translate-y-1/2
            max-w-[900px]
          "
        >
          <h1 className="text-[20px] sm:text-[26px] md:text-[36px] lg:text-[40px] leading-[1.3] text-black mt-8">
            Your Most Cost-Effective <br />
            <span className="text-[#4FCA07]">ServiceNow</span> Partner, Built on Quality
          </h1>

          <p className="text-[12px] sm:text-[14px] md:text-[16px] text-black mt-4">
            Delivering fast, scalable, and success-driven ServiceNow implementations.
          </p>

          <button
            className="
              mt-6
              bg-gradient-to-r from-[#9562EB] to-[#7A4ED9]
              text-white
              px-6 py-2
              rounded-[6px]
              text-[14px]
              shadow-md
              hover:opacity-90
              transition
            "
          >
            Learn More
          </button>
        </motion.div>
      )}
    </section>
  );
}