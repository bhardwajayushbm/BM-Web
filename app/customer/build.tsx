"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhatWeBuild() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full min-h-screen font-helvetica text-white overflow-hidden"
    >
      {/* 🔷 BACKGROUND */}
      <Image
        src="/B11.png"
        alt="Background"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-16 py-16 md:py-28">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-0 mb-10 md:mb-24">

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-[26px] sm:text-[30px] md:text-[36px] leading-[1.2] font-normal max-w-[600px]"
          >
            What We Build Using <br className="hidden sm:block" />
            ServiceNow CSM
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-[14px] sm:text-[16px] md:text-[18px] leading-[1.6] max-w-[520px] text-[#E5E5E5]"
          >
            ServiceNow Customer Service Management becomes the execution layer
            for a deliberately designed service experience.
          </motion.p>

        </div>

        {/* ================= GRID ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-28 md:gap-y-16"
        >

          <BuildCard image="/b1.png" mobileImage="/csm1.jpg" title="Customer Experience" bullets={[
            "Seamless, omnichannel service across digital and assisted channels",
            "Personalised self-service that reduces contact",
            "Clear, guided resolution paths",
          ]} />

          <BuildCard image="/b2.png" mobileImage="/csm2.jpg" title="Service Operations" bullets={[
            "Intelligent case intake, triage, and routing",
            "End-to-end orchestration across IT, Operations, and Field Service",
            "Fewer handoffs. Faster outcomes.",
          ]} />

          <BuildCard image="/b3.png" mobileImage="/csm3.jpg" title="Intelligence & Automation" bullets={[
            "Predictive classification and routing",
            "Generative AI for summaries, responses, and recommendations",
            "24/7 Virtual Agent support",
          ]} />

          <BuildCard image="/b4.png" mobileImage="/csm4.jpg" title="Scalable Efficiency" bullets={[
            "Higher self-service deflection without frustrating customers",
            "Reduced manual effort for service teams",
            "Faster time-to-value and sustainable cost reduction",
          ]} />

        </motion.div>
      </div>
    </motion.section>
  );
}

/* ================= CARD ================= */

function BuildCard({
  image,
  mobileImage,
  title,
  bullets,
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-[660px]"
    >

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">

        {/* IMAGE */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="relative w-full h-[180px] rounded-lg overflow-hidden"
        >
          <Image
            src={mobileImage}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* 🔷 CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-black/60 p-4 rounded-b-lg"
        >
          <h3 className="text-[16px] font-semibold mb-2">
            {title}
          </h3>

          <ul className="space-y-1 text-[13px] leading-[1.3] text-[#E5E5E5]">
            {bullets.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block relative h-[300px] overflow-hidden rounded-lg">

        <motion.div whileHover={{ scale: 1.05 }} className="w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover scale-[1.03]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute right-2 top-[120px] w-[320px]"
        >
          <h3 className="text-[20px] font-semibold mb-4 ml-2">
            {title}
          </h3>

          <ul className="space-y-2 text-[14px] leading-[1.4] text-[#E5E5E5]">
            {bullets.map((item, i) => (
              <li key={i} className="flex gap-2 ml-4">
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>

    </motion.div>
  );
}