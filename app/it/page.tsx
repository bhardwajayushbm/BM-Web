"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CustomerServiceManagementPage() {
  return (
    <div className="w-full bg-white font-helvetica pt-28 sm:pt-24 lg:pt-28">

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex justify-center px-4 md:px-8 lg:px-10"
      >
        <div
          className="
            relative
            w-full
            max-w-[1376px]
            h-[220px] sm:h-[280px] md:h-[340px] lg:h-[404px]
            rounded-[20px]
            overflow-hidden
            flex items-center justify-center
          "
        >
          <Image
            src="/cms.png"
            alt="Customer Service Management"
            fill
            priority
            className="object-cover"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative z-10 text-center px-2"
          >
            <h1
              className="
                text-white
                font-bold
                text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[70px]
                leading-tight
              "
            >
              IT Service Management
            </h1>
          </motion.div>
        </div>
      </motion.section>

      {/* CONTENT SECTION */}
      <motion.section
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
        className="w-full flex justify-center px-4 md:px-8 lg:px-12 mt-16 mb-6"
      >
        <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-start">

          {/* LEFT */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[28px] md:text-[34px] lg:text-[42px] leading-[1.10] text-black">
              Designed from <br />
              the employee and <br />
              business back. <br />
              Built on{" "}
              <span className="text-[#4AC000]">ServiceNow</span>
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-[16px] md:text-[18px] leading-[1.4] text-black max-w-[560px]"
          >
            <p className="mb-6">
              Most organizations don’t have an ITSM tool problem; they
              have a flow problem. Ticket-centric thinking, siloed
              processes, and surface-level metrics create noise
              instead of results. At BANGMETRIC, we design IT services
              from the employee and business back, then bring that
              design to life on ServiceNow ITSM.
            </p>

            <p>
              We focus on improving flow, reducing friction, and
              resolving issues, not just routing them. ServiceNow is
              the platform we build on. Experience-led, outcome-driven
              design is what makes it work in the real world.
            </p>
          </motion.div>

        </div>
      </motion.section>

    </div>
  );
}