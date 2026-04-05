"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-white font-helvetica">

      {/* 🔷 HERO */}
      <section className="w-full px-4 md:px-8 lg:px-10 pt-24 sm:pt-28 md:pt-28">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            w-full md:max-w-[1250px]
            mx-auto
            bg-[#F1EDFF] 
            rounded-[20px] sm:rounded-[24px]
            flex flex-col sm:flex-row items-center justify-between
            px-6 sm:px-10 md:px-16 lg:px-24
            py-6 sm:py-8 md:py-10
            gap-4 sm:gap-0
          "
        >

          {/* TITLE */}
          <h1
            className="
              font-normal 
              text-center sm:text-left
              text-[24px] sm:text-[40px] md:text-[64px] lg:text-[80px]
              text-[#9562EB]
              leading-[1.1]
              w-full sm:w-auto
            "
          >
            Privacy Policy
          </h1>

          {/* ICON */}
          <div className="relative w-[55px] h-[55px] sm:w-[90px] sm:h-[90px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px]">
            <Image
              src="/Policy.png"
              alt="Policy Icon"
              fill
              className="object-contain"
              priority
            />
          </div>

        </motion.div>

      </section>
    </div>
  );
}