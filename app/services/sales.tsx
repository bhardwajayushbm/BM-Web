"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Sales() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full flex justify-center px-4 md:px-8 lg:px-10 mt-10 pt-24 mb-10">
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[1100px]"
      >

        {/* ================= MOBILE ONLY ================= */}
        <div className="md:hidden flex flex-col items-center text-center">

          {/* IMAGE */}
          <div className="w-[180px] h-[260px] relative">
            <Image
              src="/Sales.png"
              alt="sales"
              fill
              className="object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="mt-4 text-black font-helvetica">
            <h2 className="text-[20px] leading-[26px] font-normal">
              Arthur Yeames
            </h2>

            <p className="mt-1 text-[18px] leading-[24px] font-normal">
              SVP, Sales, North America
            </p>

            <p className="mt-2 text-[14px] opacity-80">
              Email: artyeames@bangmetric.com
            </p>
          </div>
        </div>

        {/* ================= TABLET + DESKTOP (UNCHANGED) ================= */}
        <div className="hidden md:block">
          <div className="relative w-full max-w-[1100px] h-[320px] rounded-[12px]">

            {/* BACKGROUND */}
            <div className="absolute inset-0 rounded-[12px] overflow-hidden">
              <Image
                src="/BG3.png"
                alt="bg"
                fill
                className="object-cover"
              />
            </div>

            {/* IMAGE */}
            <div className="
              absolute
              left-[20px] md:left-[30px]
              bottom-0
              w-[180px] md:w-[340px]
              h-[460px] md:h-[460px]
              z-20
              flex items-end
            ">
              <Image
                src="/Sales.png"
                alt="sales"
                width={240}
                height={460}
                className="object-contain w-full h-auto"
              />
            </div>

            {/* TEXT */}
            <div className="
              absolute inset-0
              flex flex-col justify-center items-center
              text-center
              text-white font-helvetica
              px-4 md:pl-[260px]
            ">

              <h2 className="
                text-[20px] md:text-[42px]
                leading-[26px] md:leading-[54px]
                font-normal
              ">
                Arthur Yeames
              </h2>

              <p className="
                mt-1
                text-[18px] md:text-[42px]
                leading-[24px] md:leading-[54px]
                font-normal
              ">
                SVP, Sales, North America
              </p>

              <p className="
                mt-2
                text-[13px] md:text-[20px]
                opacity-90
              ">
                Email: artyeames@bangmetric.com
              </p>

            </div>

          </div>
        </div>

      </motion.div>
    </section>
  );
}