"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ResourcesPage() {
  return (
    <section className="w-full pt-20 md:pt-28 pb-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full flex flex-col"
      >
        
        <div className="w-full bg-[#F4EFFF] px-5 sm:px-6 md:px-10 pt-10 md:pt-14 pb-28 md:pb-32 lg:pb-36">
          <div className="max-w-[1100px] mx-auto flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-4 max-w-[700px]">
               <p className="text-[11px] md:text-[13px] text-gray-500 font-medium">
                Published on: March 4, 2026
              </p>

              <h1 className="font-bold text-[32px] sm:text-[38px] md:text-[46px] lg:text-[52px] text-black leading-[1.04]">
                ServiceNow Zurich Release
              </h1>

               <p className="text-[13px] md:text-[16px] text-black mt-1">
                A Complete Guide to Saved Scheduled Triggers in flow Designer
              </p>

            </div>

            <div className="flex items-center gap-4 sm:gap-5">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full overflow-hidden border-[3px] border-white shadow-lg">
                <Image
                  src="/Gaurav.png"
                  alt="Author"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="min-w-[110px]">
                <span className="text-[11px] text-black mb-0.5">
                  Published By:
                </span>
                <p className="text-[15px] sm:text-[16px] font-semibold text-black">
                  Gaurav Goyal
                </p>
              </div>
            </div>
          </div>
        </div>

 <div className="w-full max-w-[600px] mx-auto px-5 sm:px-6 md:px-10 -mt-16 md:-mt-24 z-10 flex justify-start md:ml-[10%] lg:ml-[12%]">
  <div className="bg-white rounded-[8px] w-full max-w-[900px] shadow-[0_30px_80px_rgba(75,61,176,0.12)] overflow-hidden">
    <div className="relative aspect-[16/9] w-full">
      <Image
        src="/security.png"
        alt="Security"
        fill
        className="object-cover"
        priority
      />
    </div>
  </div>
</div>
      </motion.div>
    </section>
  );
}