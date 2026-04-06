"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BangmetricThinking() {
  return (
    <section
      className="w-full bg-[#F3F3F5] py-24 flex justify-center"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      <div className="max-w-[1100px] w-full relative px-4">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-[28px] md:text-[42px] text-black mb-10 md:mb-20 text-left md:text-center"
        >
          How BANGMETRIC
          <br className="md:hidden" />
          Thinks Differently
        </motion.h2>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden flex flex-col gap-8">

          {[
            {
              title: "Value streams over ticket queues",
            },
            {
              title: "Flow metrics over vanity",
              desc: " metrics (MTTD/MTTR, FCR, change failure rate, employee effort).",
            },
            {
              title: "Rightsized, right now",
              desc: "what you need today, expandable tomorrow.",
            },
            {
              title: "AI with intent",
              desc: "triage insight, knowledge, change risk.",
            },
             {
              title: "Resolution over SLA theatre",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">

              {/* ⭐ STAR ICON */}
              <div className="mt-1 shrink-0">
                <Image
                  src="/SS.png"
                  alt="star"
                  width={20}
                  height={20}
                />
              </div>

              {/* TEXT */}
              <div>
                <h3 className="font-semibold text-[15px] leading-[22px]">
                  {item.title}
                </h3>
                <p className="text-[13px] text-gray-700 mt-2 leading-[18px]">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block">

          <div className="relative w-[1000px] mx-auto h-[300px]">

            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 300"
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

              {/* LINE */}
              <motion.polyline
                points="120,135 300,220 480,130 660,220 840,135"
                stroke="#8B6EF3"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />

              {/* DOTS */}
              {[
                { cx: 120, cy: 135 },
                { cx: 300, cy: 220 },
                { cx: 480, cy: 130 },
                { cx: 660, cy: 220 },
                { cx: 840, cy: 135 },
              ].map((dot, i) => (
                <motion.circle
                  key={i}
                  cx={dot.cx}
                  cy={dot.cy}
                  r="17.5"
                  fill="#D8CDFF"
                  filter="url(#innerShadow)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + i * 0.25,
                    ease: "easeInOut",
                  }}
                />
              ))}

            </svg>

            {/* TEXT (UNCHANGED) */}
            <div className="absolute left-[40px] top-[60px] w-[200px] text-left">
              <p className="font-semibold text-[16px]">
                Value streams <br /> over ticket queues
              </p>
            </div>

            <div className="absolute left-[420px] top-[0px] w-[260px] text-left">
              <p className="font-semibold text-[16px]">
                Flow metrics over vanity
              </p>
              <p className="text-[14px] text-gray-700">
                metrics (MTTD/MTTR, FCR, change failure rate, employee effort)
              </p>
            </div>

            <div className="absolute left-[800px] top-[60px] w-[200px] text-left">
              <p className="font-semibold text-[16px]">
                Resolution over <br /> SLA theatre
              </p>
            </div>

            <div className="absolute left-[260px] top-[260px] w-[220px] text-left">
              <p className="font-semibold text-[16px]">
                Rightsized, right now
              </p>
              <p className="text-[14px] text-gray-700">
                (what you need today, expandable tomorrow)
              </p>
            </div>

            <div className="absolute left-[620px] top-[260px] w-[220px] text-left">
              <p className="font-semibold text-[16px]">
                AI with intent
              </p>
              <p className="text-[14px] text-gray-700">
                (triage insight, knowledge, change risk)
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}