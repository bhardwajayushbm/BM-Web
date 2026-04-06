"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CustomerServiceManagementPage() {
  return (
    <div className="w-full bg-white pt-[110px] sm:pt-[120px] md:pt-[110px]">

      {/* 🔷 HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full flex justify-center px-4 md:px-8 lg:px-10 pb-0"
      >
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="
            relative
            w-full
            max-w-[1376px]
            h-[200px] sm:h-[260px] md:h-[340px] lg:h-[404px]
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
            className="object-cover object-center"
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative z-10 w-full flex items-center justify-center text-center px-4"
          >
            <h1
              className="
                font-helvetica font-bold text-white
                text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px]
                leading-tight
              "
            >
              Customer
              <br />
              Service Management
            </h1>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 🔷 CONTENT */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="
          w-full
          flex justify-center
          px-4 md:px-8 lg:px-12
          bg-no-repeat
          bg-right
          bg-contain
          py-10 md:py-16
        "
        style={{ backgroundImage: "url('/csm2.png')" }}
      >
        <div className="w-full max-w-[1100px] flex flex-col items-start">

          <div className="max-w-[640px] font-helvetica text-black">

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="mt-6 md:mt-12 text-[22px] sm:text-[26px] md:text-[34px] lg:text-[36px] leading-[1.2] font-normal mb-5"
            >
              Designed From the <br />
              Customer Back <br />
              <span className="whitespace-nowrap">
                Built on <span className="text-[#66E000]">ServiceNow</span>
              </span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="text-[15px] sm:text-[16px] leading-[1.6] font-normal text-black max-w-[540px]"
            >
              Most organizations don’t lack technology, they lack thoughtful
              service design. Automating broken processes only makes poor
              experiences faster.
              <br />
              <br />
              At BANGMETRIC, we design customer service from the customer back,
              then power it with ServiceNow CSM. We focus on reducing effort,
              removing friction, and resolving issues, not just closing cases.
              ServiceNow is the platform we use. Experience-led design is the
              value we bring.
            </motion.p>

          </div>

        </div>
      </motion.section>

    </div>
  );
}