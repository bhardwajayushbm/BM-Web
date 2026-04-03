"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ===== COUNTERS ===== */
function Counter({ value, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const incrementTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function DecimalCounter({ value, duration = 1500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = value / (duration / 30);

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <>{count.toFixed(1)}</>;
}

/* ===== ANIMATIONS ===== */
const sectionVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function JumpstartOfferings() {
  return (
    <motion.section
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full bg-[#F6F5FA] px-4 sm:px-6 md:px-12 lg:px-20 pt-12 sm:pt-14 md:pt-20 pb-10"
    >
      <div className="max-w-[1100px] mx-auto">

        {/* ===== TOP CONTENT ===== */}
        <div className="grid grid-cols-2 gap-4 md:gap-16">

          {/* LEFT TEXT */}
          <motion.div variants={fadeUp}>
            <h2 className="font-helvetica text-black max-w-[648px] text-[18px] sm:text-[20px] md:text-[24px] leading-[130%] md:leading-[1.4]">
              BANGMETRIC Jumpstart Offerings are focused, fast-track onboarding
              packages designed to accelerate ServiceNow adoption. Specifically
              designed mid-market and commercial organizations, they provide:
            </h2>
          </motion.div>

          {/* RIGHT BULLETS */}
          <motion.div variants={stagger} className="relative">
            <div className="font-helvetica text-black flex flex-col gap-2 leading-[1.2]">

              {[
                "Core functionality quickly to enable rapid time-to-value",
                "A structured, clear approach for rapid onboarding and successful deployment of ServiceNow modules",
                "An approach to minimize complexity while laying a scalable foundation for future growth.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-2 sm:gap-4"
                >
                  {/* STAR */}
                  <div className="w-[24px] sm:w-[32px] min-w-[24px] sm:min-w-[32px] flex justify-center mt-1">
                    <Image
                      src="/Star.png"
                      alt="star"
                      width={20}
                      height={20}
                      className="object-contain sm:w-[24px] sm:h-[24px]"
                    />
                  </div>

                  {/* TEXT */}
                  <p className="font-helvetica text-[#474545] text-[13px] sm:text-[15px] md:text-[20px] leading-[140%]">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ===== IMAGE + STATS ===== */}
        <div className="grid grid-cols-2 gap-4 md:gap-16 mt-10 md:mt-16 items-center">

          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            className="rounded-xl overflow-hidden"
          >
            <Image
              src="/Lab.png"
              alt="Lab"
              width={800}
              height={533}
              className="rounded-xl object-cover w-full h-auto"
            />
          </motion.div>

          {/* STATS */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-2 gap-4 md:gap-12"
          >
            {[
              { comp: <DecimalCounter value={4.8} />, label: "CSAT Score" },
              { comp: <Counter value={250} suffix="+" />, label: "Certified Resources" },
              { comp: <Counter value={300} suffix="+" />, label: "Project<br/>Implementation" },
              { comp: <Counter value={350} suffix="+" />, label: "Integration<br/>Completed" },
              { comp: <Counter value={3} suffix="+" />, label: "Global Delivery<br/>Centers" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col items-center text-center"
              >
                <span className="font-helvetica text-black leading-none text-[20px] sm:text-[28px] md:text-[44px]">
                  {item.comp}
                </span>

                <p
                  className="mt-1 md:mt-2 font-helvetica text-black text-[11px] sm:text-[13px] md:text-[16px]"
                  dangerouslySetInnerHTML={{ __html: item.label }}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}