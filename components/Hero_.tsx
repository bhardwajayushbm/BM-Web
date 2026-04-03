"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero_() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className=" mt-12 w-full min-h-fit sm:min-h-screen bg-white flex flex-col items-center justify-start sm:justify-center relative overflow-hidden font-[Helvetica]
      
      pt-12 sm:pt-20 md:pt-24
      pb-4 sm:pb-24 md:pb-28
      "
    >

      {/* ===== MOBILE (NO ANIMATION) ===== */}
      <div className="sm:hidden overflow-hidden rounded-[12px] bg-white w-[260px] h-[160px]">
        <video
          src="/HWV.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* ===== DESKTOP/TABLET (ANIMATION) ===== */}
      <motion.div
        initial={{
          width: "100vw",
          height: "100vh",
        }}
        animate={
          startAnimation
            ? {
                width: "260px",
                height: "160px",
                scale: 0.95,
              }
            : {}
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        className="hidden sm:flex overflow-hidden rounded-[12px] bg-white items-center justify-center"
      >
        <video
          src="/HWV.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* ===== CONTENT ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="
          flex flex-col items-center text-center px-4
          mt-6 sm:mt-12 md:mt-14
          max-w-[900px]
        "
      >
        <h1 className="text-[20px] sm:text-[26px] md:text-[36px] lg:text-[40px] leading-[1.3] text-black">
          Your Most Cost-Effective <br />
          <span className="text-[#4FCA07]">ServiceNow</span> Partner, Built on Quality
        </h1>

        <p className="text-[12px] sm:text-[14px] md:text-[16px] text-black mt-3 max-w-[600px]">
          Delivering fast, scalable, and success-driven ServiceNow implementations.
        </p>

        <button
          className="
            mt-4
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
    </section>
  );
}