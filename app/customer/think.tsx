"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BangmetricThinkingFlow() {
  return (
    <section className="w-full bg-[#F3F3F5] py-24 flex justify-center">
      <div className="w-full max-w-[1150px] relative px-4">

        {/* Heading */}
        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.7 }} className="text-[28px]
          md:text-[44px] leading-[1.2] text-black mb-6" >
             How BANGMETRIC
              <br /> 
              Thinks Differently 
              </motion.h2>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden flex flex-col gap-8 mt-6">
          {[
            {
              title: "We start with journeys, not queues",
              desc: "Customers don’t experience “cases” they experience journeys. We design around that reality.",
            },
            {
              title: "We design for resolution, not compliance",
              desc: "SLAs matter, but resolution matters more. Every workflow exists to get customers unstuck faster.",
            },
            {
              title: "We apply AI with intent",
              desc: "AI is not something you switch on. It’s applied deliberately to remove friction, guide decisions, and create clarity.",
            },
            {
              title: "We measure what customers feel",
              desc: "Speed, consistency, transparency, and confidence. If customers don’t feel improvement, the system hasn’t improved.",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-1 shrink-0">
                <Image src="/SS.png" alt="star" width={22} height={22} />
              </div>
              <div>
                <h3 className="font-semibold text-[16px] leading-[22px]">
                  {item.title}
                </h3>
                <p className="text-[13px] text-gray-600 mt-2 leading-[18px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP / TABLET ================= */}
        <div className="hidden md:block">
          <div className="relative h-[340px]">

            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1150 340"
              fill="none"
            >

              {/* INNER SHADOW */}
              <defs>
                <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feOffset dx="3" dy="2" />
                  <feGaussianBlur stdDeviation="3.5" result="offset-blur" />
                  <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                  <feFlood floodColor="#AB9AE8" />
                  <feComposite operator="in" in2="inverse" />
                  <feComposite operator="over" in2="SourceGraphic" />
                </filter>
              </defs>

              {/* TOP LINE (gap reduced) */}
              <motion.line
                x1="95"
                y1="70"
                x2="520"
                y2="70"
                stroke="#8B6EF3"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />

              {/* ARROW */}
              <motion.polygon
                points="520,70 505,62 505,78"
                fill="#8B6EF3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />

              {/* CURVE */}
              <motion.path
                d="
                  M520 70
                  H900
                  A100 100 0 0 1 900 270
                  H520
                "
                stroke="#8B6EF3"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, delay: 0.3 }}
              />

              {/* BOTTOM LINE (gap reduced) */}
              <motion.line
                x1="520"
                y1="270"
                x2="95"
                y2="270"
                stroke="#8B6EF3"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />

              {/* BACK ARROW */}
              <motion.polygon
                points="95,270 110,262 110,278"
                fill="#8B6EF3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              />

              {/* DOTS */}
              {[
                { cx: 70, cy: 70 },
                { cx: 520, cy: 70 },
                { cx: 520, cy: 270 },
                { cx: 70, cy: 270 },
              ].map((dot, i) => (
                <motion.circle
                  key={i}
                  cx={dot.cx}
                  cy={dot.cy}
                  r="17.5"
                  fill="#D8CDFF"
                  filter="url(#innerShadow)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.2 }}
                />
              ))}

            </svg>

            {/* TEXT LEFT TOP */}
            <div className="absolute left-[140px] top-[100px] w-[320px]">
              <h3 className="font-semibold text-[18px]">
                We start with journeys,<br />not queues
              </h3>
              <p className="text-[14px] text-gray-600 mt-2">
                Customers don’t experience “cases” they experience journeys.
                We design around that reality.
              </p>
            </div>

            {/* TEXT RIGHT TOP */}
            <div className="absolute left-[600px] top-[100px] w-[320px]">
              <h3 className="font-semibold text-[18px]">
                We design for resolution,<br />not compliance
              </h3>
              <p className="text-[14px] text-gray-600 mt-2">
                SLAs matter, but resolution matters more.
                Every workflow exists to get customers unstuck faster.
              </p>
            </div>

            {/* TEXT LEFT BOTTOM */}
            <div className="absolute left-[140px] top-[300px] w-[320px]">
              <h3 className="font-semibold text-[18px]">
                We apply AI with intent
              </h3>
              <p className="text-[14px] text-gray-600 mt-2">
                AI is not something you switch on.
                It's applied deliberately to remove friction.
              </p>
            </div>

            {/* TEXT RIGHT BOTTOM */}
            <div className="absolute left-[600px] top-[300px] w-[320px]">
              <h3 className="font-semibold text-[18px]">
                We measure what customers feel
              </h3>
              <p className="text-[14px] text-gray-600 mt-2">
                Speed, consistency, transparency, and confidence.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}