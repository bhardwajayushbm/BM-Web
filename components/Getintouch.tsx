"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function GetInTouch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="
        w-full
        flex justify-center
        bg-no-repeat bg-center
        pt-12 sm:pt-16 md:pt-20
      "
      style={{
        backgroundImage: "url('/GetT4.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-[1100px] px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="font-[Helvetica] font-bold text-[26px] sm:text-[34px] md:text-[44px] lg:text-[48px] text-black mb-2">
            Get in Touch Today!
          </h2>

          {/* CURVE */}
          <div className="flex justify-center lg:justify-start">
            <svg
              viewBox="0 0 284 20"
              className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[284px] h-auto mb-6 md:mb-8"
            >
              <path
                d="M2 18C60 2 220 2 282 18"
                stroke="#9562EB"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* FORM */}
          <div className="space-y-4 md:space-y-5 pb-6 md:pb-10">

            {/* NAME + EMAIL */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* NAME */}
              <div className="w-full text-left">
                <label className="text-[13px] md:text-[14px] text-black mb-1 block">
                  Name
                </label>
                <input
                  type="text"
                  className="
                    w-full h-[38px] md:h-[42px]
                    rounded-[6px]
                    border border-gray-300
                    px-3 bg-white
                    outline-none
                    transition-all duration-200
                    hover:border-2 hover:border-[#9562EB]
                    focus:border-2 focus:border-[#9562EB]
                  "
                />
              </div>

              {/* EMAIL */}
              <div className="w-full text-left">
                <label className="text-[13px] md:text-[14px] text-black mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  className="
                    w-full h-[38px] md:h-[42px]
                    rounded-[6px]
                    border border-gray-300
                    px-3 bg-white
                    outline-none
                    transition-all duration-200
                    hover:border-2 hover:border-[#9562EB]
                    focus:border-2 focus:border-[#9562EB]
                  "
                />
              </div>

            </div>

            {/* MESSAGE */}
            <div className="text-left">
              <label className="text-[13px] md:text-[14px] text-black mb-1 block">
                Message
              </label>
              <textarea
                rows={4}
                className="
                  w-full
                  rounded-[6px]
                  border border-gray-300
                  px-3 py-2
                  bg-white
                  resize-none
                  outline-none
                  transition-all duration-200
                  hover:border-2 hover:border-[#9562EB]
                 
                "
              />
            </div>

            {/* BUTTON */}
            <div className="flex justify-center lg:justify-start">
              <button
                className="
                  bg-gradient-to-r from-[#9562EB] to-[#7A4ED9]
                  text-white
                  w-[120px] sm:w-[130px] md:w-[140px]
                  h-[36px] sm:h-[38px] md:h-[40px]
                  rounded-[6px]
                  text-[13px] md:text-[14px]
                  shadow-md
                  hover:opacity-90
                  transition
                "
              >
                Submit
              </button>
            </div>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] xl:w-[360px]">
            <Image
              src="/GetT3.png"
              alt="Contact"
              width={360}
              height={420}
              className="object-contain w-full h-auto"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}